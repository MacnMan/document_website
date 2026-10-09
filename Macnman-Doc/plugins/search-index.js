// @ts-check
/**
 * Builds the documentation's search entries, shared with the main website.
 *
 * Every page of every docs plugin (User Manual, Datasheets, Books, Tech
 * Reports, Help) becomes one entry with its real title, front-matter
 * description and keywords, and a "section › category" crumb. The entries
 * use the same shape as www.macnman.com/search-index.json so either site can
 * search the other's content.
 *
 * - In the app: written with createData and imported on demand by
 *   src/components/SiteSearch (not bundled into every page).
 * - On build: written to <outDir>/search-index.json, i.e.
 *   https://www.macnman.com/docs/search-index.json, which the main website's
 *   scripts/build-search-index.mjs reads to populate its Documentation group.
 */
const fs = require('node:fs');
const path = require('node:path');

/** Docs plugin id → section label shown in the search results. */
const SECTIONS = {
  default: 'User Manual',
  product: 'Datasheets',
  books: 'Books',
  datasheets: 'Tech Reports',
  help: 'Help',
};

/** Same pages the sitemap leaves out (see docusaurus.config.ts). */
const EXCLUDE = [
  /\/sample-proposals(\/|$)/,
  /copy/i,
  /\/markdown-page$/,
  /macsync_4g_introduction$/,
];

const clean = (s) =>
  String(s ?? '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const titleFromSlug = (slug) =>
  decodeURIComponent(slug)
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

/** @type {import('@docusaurus/types').PluginModule} */
module.exports = function searchIndexPlugin(context) {
  /** @type {Array<Record<string, string>>} */
  let items = [];

  return {
    name: 'macnman-search-index',

    // Runs once every plugin has loaded its content, so all five docs
    // plugins can be read here.
    async allContentLoaded({allContent, actions}) {
      const docsPlugins = allContent['docusaurus-plugin-content-docs'] ?? {};
      const seen = new Set();
      items = [];

      for (const [pluginId, content] of Object.entries(docsPlugins)) {
        const section = SECTIONS[pluginId] ?? titleFromSlug(pluginId);
        for (const version of content?.loadedVersions ?? []) {
          for (const doc of version.docs) {
            if (doc.draft || doc.unlisted) continue;
            const url = doc.permalink;
            if (seen.has(url) || EXCLUDE.some((re) => re.test(url))) continue;
            seen.add(url);

            // Path below the plugin's base, without the page itself:
            // /docs/lorawan/sensors-lorawan/temp-humi/slug → [lorawan, sensors-lorawan, temp-humi]
            const parts = url
              .slice(version.path.length)
              .split('/')
              .filter((p) => p && p !== 'category');
            const parents = parts.slice(0, -1).map(titleFromSlug);
            const keywords = Array.isArray(doc.frontMatter?.keywords)
              ? doc.frontMatter.keywords.join(' ')
              : '';

            items.push({
              type: 'doc',
              title: clean(doc.title),
              text: clean(`${doc.description ?? ''} ${keywords} ${parents.join(' ')}`).slice(0, 400),
              url,
              group: 'Documentation',
              section,
              crumb: [section, ...parents].join(' › '),
            });
          }
        }
      }

      items.sort((a, b) => a.url.localeCompare(b.url));
      await actions.createData('search-index.json', JSON.stringify(items));
      actions.setGlobalData({count: items.length});
    },

    async postBuild({outDir}) {
      const file = path.join(outDir, 'search-index.json');
      fs.writeFileSync(
        file,
        JSON.stringify({generatedAt: new Date().toISOString(), count: items.length, items}),
      );
      console.log(`[macnman-search-index] ${items.length} entries → search-index.json`);
    },
  };
};
