import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Serve every page on its own URL.
 *
 * `trailingSlash: false` (below) makes Docusaurus write /docs/help/help as the
 * file help/help.html. The site is hosted as plain static files, and a static
 * host answers /help/help only if there is a folder of that name with an
 * index.html in it; a help.html beside it is not looked at unless the host is
 * specially configured to strip extensions. The result was that every page
 * but the home page was served the 404 page, with HTTP status 404. In a
 * browser the 404 page's script then noticed the URL and drew the right page,
 * so nothing looked wrong to a reader; to Google, Bing and every AI crawler
 * the whole documentation site was "not found".
 *
 * After the build, this moves each page's file into a folder of its own:
 * help/help.html becomes help/help/index.html. The URLs, canonicals, links and
 * sitemap are untouched (they never contained ".html"); only where the file
 * sits changes, and with it the answer the host gives.
 *
 * Only files that belong to a route are moved, so anything placed in static/
 * keeps its exact path.
 */
function pagesAsFolders() {
  return {
    name: 'pages-as-folders',
    async postBuild({
      outDir,
      baseUrl,
      routesPaths,
    }: {
      outDir: string;
      baseUrl: string;
      routesPaths: string[];
    }) {
      let moved = 0;
      for (const route of routesPaths) {
        if (!route.startsWith(baseUrl)) continue;
        // Route paths are URL-encoded ("LoRa%20Modules"); the files are not.
        const page = decodeURI(route.slice(baseUrl.length)).replace(/\/+$/, '');
        // The home page is already index.html, and 404.html must stay a file:
        // that name is what the host looks for.
        if (!page || page === '404.html') continue;

        const file = path.join(outDir, `${page}.html`);
        const folder = path.join(outDir, page);
        const index = path.join(folder, 'index.html');
        if (!fs.existsSync(file) || fs.existsSync(index)) continue;

        fs.mkdirSync(folder, { recursive: true });
        fs.renameSync(file, index);
        moved += 1;
      }
      console.log(`[pages-as-folders] ${moved} pages moved into folders`);
    },
  };
}

const config: Config = {
  title: 'Macnman',
  // The tagline is used in the homepage <title>/description; make it say what
  // the site is rather than repeating the brand name.
  tagline:
    'Documentation, datasheets and setup guides for Macnman Industrial IoT sensors, gateways and controllers.',
  favicon: 'img/favicon.ico',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: '269505BC631812DA',
        content: 'DE91A5A5EEDAF2DE',
      },
    },
    // The product home loads Roboto from Google Fonts; warm the connections.
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
    },
  ],

  future: {
    v4: true,
  },

  url: 'https://www.macnman.com',
  baseUrl: '/docs/',
  // No trailing slashes: the main website redirects /docs/x/ to /docs/x, so
  // every URL, canonical and sitemap entry here must be the slash-less form.
  //
  // This setting has a second effect that is easy to miss. With it, Docusaurus
  // writes each page as a single file (help/help.html) instead of a folder
  // (help/help/index.html), and this site's host does not serve a .html file
  // on its extensionless URL. The setting was added in August 2026 without
  // that in mind, and when it was noticed in October 2026 every page except
  // the home page was answering HTTP 404. The pagesAsFolders plugin at the end
  // of `plugins` puts the pages back into folders; the two belong together.
  // Do not remove one without the other.
  trailingSlash: false,

  organizationName: 'MacnMan',
  projectName: 'document_website',

  // A broken internal link stops the build, so it is fixed before it ships
  // rather than found by a reader. (The site built clean when this was set.)
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // No `stylesheets` entry: the site's CSS is src/css/custom.css, bundled
  // through the preset's `customCss` below. An entry here used to point at
  // /css/custom.css, a file that does not exist, so every page made one
  // render-blocking request that came back as the main website's 404 page.

  // Tags rendered content for the CSS in src/css/eleven.css: table cells get
  // their column headers (so narrow tables can stack into cards) and the
  // "What's in the Box" list becomes item tiles.
  clientModules: [require.resolve('./src/clientModules/contentEnhancements.ts')],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: '/',
          showLastUpdateTime: true,
        },
        theme: {
          // custom.css holds the classes MDX pages and the homepage use;
          // eleven.css is the site-wide design system and loads after it.
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/eleven.css'),
            // "Download PDF": the article alone, laid out for paper.
            require.resolve('./src/css/print.css'),
            // The product home on phones (desktop layout untouched).
            require.resolve('./src/css/home-mobile.css'),
          ],
        },
        // The same Tag Manager container as the main website, which serves
        // this site under www.macnman.com/docs, so both report into one
        // property. Docusaurus only adds it to production builds.
        googleTagManager: {
          containerId: 'GTM-5738FKJ6',
        },
        sitemap: {
          // Real modification dates (from git) instead of a fixed weekly
          // changefreq; Google ignores changefreq/priority.
          lastmod: 'date',
          changefreq: null,
          priority: null,
          // The host serves the home page at /docs (and redirects /docs/), so
          // list it that way, matching its canonical.
          createSitemapItems: async (params) => {
            const items = await params.defaultCreateSitemapItems(params);
            return items.map((item) =>
              item.url === 'https://www.macnman.com/docs/'
                ? {...item, url: 'https://www.macnman.com/docs'}
                : item,
            );
          },
          // Keep non-content and noindexed routes out of the sitemap: submitting a
          // URL that its own page disowns via robots noindex is a conflicting signal.
          // Sample proposals are internal sales collateral, and the "* copy" pages
          // are accidental duplicates of pages that already rank.
          // Patterns are matched against the full path, so they must include baseUrl.
          ignorePatterns: [
            '/docs/datasheets/sample-proposals/**',
            '/docs/datasheets/category/sample-proposals',
            '/docs/search',
            '/docs/markdown-page',
            '/docs/**/*copy*',
            // "Coming soon" placeholder, noindexed until it has real content.
            '/docs/4gcellular/macsync_4g_introduction',
            '/docs/modules/ble-modules/introduction',
            // The same datasheet listed under a second category; its canonical
            // points at the first copy (see the <head> in those two files).
            '/docs/product/custom/custom-products/setu-scx-single-channel-datasheet',
            '/docs/product/wifi/gateways/setu-wx-one-datasheet',
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'product',
        path: 'product',
        routeBasePath: 'product',
        sidebarPath: require.resolve('./sidebarsProduct.ts'),
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'books',
        path: 'books',
        routeBasePath: 'books',
        sidebarPath: require.resolve('./sidebarsBooks.ts'),
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'datasheets',
        path: 'Datasheets',
        routeBasePath: 'datasheets',
        sidebarPath: require.resolve('./sidebarsDatasheets.ts'),
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'help',
        path: 'docs-help',
        routeBasePath: 'help',
        sidebarPath: require.resolve('./sidebarsHelp.ts'),
        showLastUpdateTime: true,
      },
    ],
    function customWebpackLoggingPlugin() {
      return {
        name: 'custom-webpack-logging',
        configureWebpack() {
          return {
            infrastructureLogging: {
              level: 'warn',
            },
            cache: true,
          };
        },
      };
    },
    pagesAsFolders,
    // Documentation entries for the site-wide search, shared with the main
    // website (see plugins/search-index.js).
    './plugins/search-index.js',
    // llms.txt, Markdown twins and structured-data inputs for AI crawlers.
    './plugins/ai-seo.js',
    // Stubs at the URLs that changed when folders were renamed (Oct 2026).
    './plugins/legacy-redirects.js',
  ],

  themeConfig: {
    // Default Open Graph / Twitter card for every page. The previous value was
    // a 335x236 logo, far below the 1200x630 social platforms lay out for; this
    // is the branded card the main site already uses.
    image: 'img/og-macnman.jpg',

    // Site-wide defaults. Pages that set their own frontmatter description
    // still override this; it only fills the gap for pages that don't.
    metadata: [
      {
        name: 'description',
        content:
          'Official documentation for Macnman Industrial IoT products: LoRaWAN, Wi-Fi, BLE and cellular sensors, gateways, controllers and modules — datasheets, setup guides and configuration references.',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      // Let Google show full-size images in results and Discover.
      { name: 'robots', content: 'max-image-preview:large' },
      { name: 'twitter:site', content: '@macnman' },
    ],

    colorMode: {
      defaultMode: 'light',     // Default theme is light
      disableSwitch: false,     // Allow user to toggle between light and dark
      respectPrefersColorScheme: false, // ❌ Do not use system preference
    },

    docs: {
      sidebar: {
        autoCollapseCategories: true,
        // hideable: true,
      },
    },

    navbar: {
      // The main website's header wordmark (light / dark variants copied from
      // macnman_website/public/images); it carries the name, so no text title.
      logo: {
        alt: 'Macnman',
        src: 'img/macnman-logo.png',
        srcDark: 'img/macnman-logo-dark.webp',
        href: '/docs/',
        width: 172,
        height: 18,
      },


      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'User Manual',
        },
        {
          type: 'docSidebar',
          sidebarId: 'productSidebar',
          docsPluginId: 'product',
          position: 'left',
          label: 'Datasheets',
        },
        {
          to: '/books',
          type: 'docSidebar',
          sidebarId: 'booksSidebar',
          docsPluginId: 'books',
          label: 'Books',
          position: 'left',
        },
        {
          to: '/datasheets',
          type: 'docSidebar',
          sidebarId: 'datasheetsSidebar',
          docsPluginId: 'datasheets',
          label: 'Tech Reports',
          position: 'left',
        },
        {
          to: '/help',
          label: 'Help',
          position: 'right',
          type: 'doc',
          docId: 'help',
          docsPluginId: 'help',
        },
        {
          href: 'https://www.macnman.com/',
          label: 'Macnman.com',
          position: 'right',
          // Rendered as the solid button at the end of the header row.
          className: 'navbar__cta',
        },
        // {   // custom dark-light-system theme
        //   type: 'custom-color-toggle',  
        //   position: 'right',
        // },
      ],
    },

    scripts: [
      {
        src: '/js/secondary-navbar.js',
        async: true,
      },
      // {  // scrollable navbar
      //   src: '/js/navbar-scroll.js',
      //   async: true,
      // },
    ],


    footer: {
      style: 'light',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/macnman/posts/?feedView=all',
            },
            {
              label: 'Macnman.com',
              href: 'https://www.macnman.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/MacnMan/document_website' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Macnman.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
