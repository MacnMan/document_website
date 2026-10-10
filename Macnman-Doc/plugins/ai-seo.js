// @ts-check
/**
 * Search-engine and AI-crawler extras for the documentation.
 *
 * At content time (every docs plugin loaded) it reads each page's source and
 * publishes, as global data keyed by permalink, what the page components need
 * for structured data: the section, the first image, a datasheet PDF, FAQ
 * question/answer pairs, embedded videos, and whether the page is `noindex`.
 * See src/theme/DocItem/Metadata.
 *
 * At build time it writes, next to the HTML:
 *  - llms.txt       — an index of every indexable page with its description,
 *                      grouped by section (the llms.txt convention), at
 *                      https://www.macnman.com/docs/llms.txt
 *  - llms-full.txt  — the full Markdown text of every page in one file
 *  - <page>.md      — a Markdown twin of each page beside its folder, which
 *                      the page advertises with <link rel="alternate"
 *                      type="text/markdown">
 */
const fs = require('node:fs');
const path = require('node:path');

const SECTIONS = {
  default: 'User Manual',
  product: 'Datasheets',
  books: 'Books',
  datasheets: 'Tech Reports',
  help: 'Help',
};
const SECTION_ORDER = ['User Manual', 'Datasheets', 'Tech Reports', 'Books', 'Help'];

/** Same pages the sitemap leaves out (see docusaurus.config.ts). */
const EXCLUDE = [/\/sample-proposals(\/|$)/, /copy/i, /\/markdown-page$/];

const titleFromSlug = (slug) =>
  decodeURIComponent(slug)
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

const stripFrontMatter = (raw) =>
  raw.startsWith('---') ? raw.replace(/^---[\s\S]*?\n---\s*\n?/, '') : raw;

/** Markdown body with the bits that only make sense to a bundler removed. */
function cleanMarkdown(raw) {
  return stripFrontMatter(raw)
    .replace(/^import\s.+?;?\s*$/gm, '')
    .replace(/<head>[\s\S]*?<\/head>/g, '')
    .replace(/^:::(\w+)\s*(.*)$/gm, (_m, type, title) => {
      const label = title || type.charAt(0).toUpperCase() + type.slice(1);
      return `**${label}:**`;
    })
    .replace(/^:::\s*$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Plain text of a Markdown/HTML fragment, for FAQ answers. */
const plainText = (s) =>
  s
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`>#]+/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#123;/g, '{')
    .replace(/&#125;/g, '}')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();

const firstImage = (body) => {
  const m = body.match(/!\[[^\]]*\]\(([^)\s]+)\)/) || body.match(/<img[^>]+src="([^"]+)"/);
  return m ? m[1] : '';
};

/**
 * The datasheet PDF published with this site (static/downloads). Any other
 * PDF linked from a product page is a shared placeholder, not that product's
 * own datasheet, so it must not be attached to the Product in structured data.
 */
const firstPdf = (body) => {
  const m = body.match(/(?:href="|\()((?:\/docs)?\/downloads\/[^"()\s]+\.pdf)(?:"|\))/i);
  return m ? m[1] : '';
};

/** The page's own "Frequently Asked Questions" section (datasheets end with one). */
const faqSection = (body) => {
  const start = body.search(/^##\s+Frequently Asked Questions\s*$/m);
  if (start < 0) return '';
  const rest = body.slice(start).replace(/^.*\n/, '');
  const end = rest.search(/^##\s/m);
  return end < 0 ? rest : rest.slice(0, end);
};

/**
 * YouTube videos embedded in a page, with the title, description, upload date
 * and length recorded in src/data/videos.json (taken from YouTube). A video
 * that is not in that file is left out: search engines require the upload
 * date, and it cannot be worked out from the embed.
 */
function embeddedVideos(body, catalogue) {
  const ids = [...body.matchAll(/youtube(?:-nocookie)?\.com\/embed\/([A-Za-z0-9_-]{6,})/g)].map((m) => m[1]);
  return [...new Set(ids)].filter((id) => catalogue[id]).map((id) => ({id, ...catalogue[id]}));
}

/** "#### Q1. Why …?" / "### Does it …?" headings followed by their answer. */
function parseFaq(body) {
  const lines = body.split('\n');
  const faq = [];
  let current = null;
  const flush = () => {
    if (current) {
      const answer = plainText(current.answer.join('\n')).slice(0, 900);
      if (answer.length > 20) faq.push({q: current.q, a: answer});
    }
    current = null;
  };
  for (const line of lines) {
    const h = line.match(/^#{2,5}\s+(.+?)\s*$/);
    if (h) {
      flush();
      const text = plainText(h[1]).replace(/^Q\s*\d+[.):\s-]*/i, '').trim();
      current = /\?\s*$/.test(text) || /^Q\s*\d+/i.test(h[1]) ? {q: text, answer: []} : null;
      continue;
    }
    if (current) current.answer.push(line);
  }
  flush();
  return faq;
}

/** @type {import('@docusaurus/types').PluginModule} */
module.exports = function aiSeoPlugin(context) {
  const {siteDir, siteConfig} = context;
  const {url, baseUrl} = siteConfig;
  const siteRoot = `${url}${baseUrl.replace(/\/$/, '')}`; // https://www.macnman.com/docs

  /** @type {Array<Record<string, any>>} */
  let pages = [];
  /** Every file under static/downloads that a page links to: [page source, url]. */
  let downloadLinks = [];
  const videoFile = path.join(siteDir, 'src/data/videos.json');
  const videoCatalogue = fs.existsSync(videoFile) ? JSON.parse(fs.readFileSync(videoFile, 'utf8')) : {};

  return {
    name: 'macnman-ai-seo',

    async allContentLoaded({allContent, actions}) {
      const docsPlugins = allContent['docusaurus-plugin-content-docs'] ?? {};
      const extras = {};
      pages = [];
      downloadLinks = [];

      for (const [pluginId, content] of Object.entries(docsPlugins)) {
        const section = SECTIONS[pluginId] ?? titleFromSlug(pluginId);
        for (const version of content?.loadedVersions ?? []) {
          for (const doc of version.docs) {
            if (doc.draft || doc.unlisted) continue;
            const src = doc.source.replace(/^@site\//, '');
            const raw = fs.readFileSync(path.join(siteDir, src), 'utf8');
            const body = stripFrontMatter(raw);
            for (const m of body.matchAll(/(?:href="|\()((?:\/docs)?\/downloads\/[^"()\s]+)(?:"|\))/g)) {
              downloadLinks.push([src, m[1]]);
            }
            // A page listed in two categories points its canonical at the other
            // copy: treat it like a noindex page (no structured data, not in llms.txt).
            const canonical = raw.match(/<link rel="canonical" href="([^"]+)"/);
            const duplicate = !!canonical && canonical[1] !== `${url}${doc.permalink}`;
            const noindex = duplicate || /name="robots"[^>]*noindex/i.test(raw);
            const parts = doc.permalink
              .slice(version.path.length)
              .split('/')
              .filter((p) => p && p !== 'category');
            const crumb = [section, ...parts.slice(0, -1).map(titleFromSlug)].join(' › ');
            const isFaq = /faq/i.test(doc.title) || /faq/i.test(doc.permalink);

            extras[doc.permalink] = {
              kind: pluginId === 'product' ? 'product' : 'doc',
              section,
              crumb,
              image: firstImage(body),
              pdf: pluginId === 'product' ? firstPdf(body) : '',
              faq: parseFaq(isFaq ? body : faqSection(body)),
              videos: embeddedVideos(body, videoCatalogue),
              noindex,
            };

            if (!noindex && !EXCLUDE.some((re) => re.test(doc.permalink))) {
              pages.push({
                permalink: doc.permalink,
                title: doc.title,
                description: doc.description ?? '',
                section,
                crumb,
                markdown: cleanMarkdown(raw),
              });
            }
          }
        }
      }

      actions.setGlobalData({pages: extras});
    },

    async postBuild({outDir}) {
      // Docusaurus checks links between pages but not links to files, so a
      // renamed or missing datasheet PDF would ship as a dead download.
      const missing = downloadLinks.filter(
        ([, link]) => !fs.existsSync(path.join(outDir, decodeURI(link.replace(/^\/docs/, '')))),
      );
      if (missing.length) {
        throw new Error(
          `Download links to files that do not exist in static/downloads:\n` +
            missing.map(([src, link]) => `  ${src} -> ${link}`).join('\n'),
        );
      }

      const bySection = new Map();
      for (const p of pages) bySection.set(p.section, [...(bySection.get(p.section) ?? []), p]);
      const abs = (permalink) => `${url}${permalink}`;

      // llms.txt — the index
      const index = [
        `# ${siteConfig.title} Documentation`,
        '',
        `> ${siteConfig.tagline}`,
        '',
        'Official documentation for Macnman industrial IoT hardware — LoRaWAN, Wi-Fi, BLE and cellular sensors, gateways, controllers and modules: user manuals, product datasheets, technical reports and books.',
        '',
        `Every page is also available as Markdown at its URL with a \`.md\` suffix. The full text of all pages is in ${siteRoot}/llms-full.txt. The company website is ${url}.`,
        '',
      ];
      for (const section of SECTION_ORDER) {
        const list = bySection.get(section);
        if (!list) continue;
        index.push(`## ${section}`, '');
        for (const p of list.sort((a, b) => a.permalink.localeCompare(b.permalink))) {
          index.push(`- [${p.title}](${abs(p.permalink)})${p.description ? `: ${p.description}` : ''}`);
        }
        index.push('');
      }
      fs.writeFileSync(path.join(outDir, 'llms.txt'), index.join('\n'));

      // llms-full.txt — everything
      const full = [`# ${siteConfig.title} Documentation — full text`, '', `Source: ${siteRoot}`, ''];
      for (const section of SECTION_ORDER) {
        for (const p of bySection.get(section) ?? []) {
          full.push(`---`, '', `# ${p.title}`, '', `URL: ${abs(p.permalink)}`, `Section: ${p.crumb}`, '', p.markdown, '');
        }
      }
      fs.writeFileSync(path.join(outDir, 'llms-full.txt'), full.join('\n'));

      // <page>.md twins
      let twins = 0;
      for (const p of pages) {
        const rel = p.permalink.slice(baseUrl.length).replace(/\/+$/, '');
        if (!rel) continue;
        const file = path.join(outDir, `${decodeURIComponent(rel)}.md`);
        fs.mkdirSync(path.dirname(file), {recursive: true});
        fs.writeFileSync(
          file,
          [`# ${p.title}`, '', `URL: ${abs(p.permalink)}`, `Section: ${p.crumb}`, '', p.markdown, ''].join('\n'),
        );
        twins += 1;
      }
      console.log(`[macnman-ai-seo] llms.txt (${pages.length} pages), llms-full.txt, ${twins} markdown twins`);
    },
  };
};
