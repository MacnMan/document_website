import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

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
  ],

  future: {
    v4: true,
  },

  url: 'https://www.macnman.com',
  baseUrl: '/docs/',
  // Lock in the no-trailing-slash form so canonical URLs and sitemap entries
  // stay consistent (the default already behaves this way; being explicit
  // prevents a silent change if the default ever moves).
  trailingSlash: false,

  organizationName: 'MacnMan',
  projectName: 'document_website',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: '/css/custom.css',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
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
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'books',
        path: 'books',
        routeBasePath: 'books',
        sidebarPath: require.resolve('./sidebarsBooks.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'datasheets',
        path: 'Datasheets',
        routeBasePath: 'datasheets',
        sidebarPath: require.resolve('./sidebarsDatasheets.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'help',
        path: 'docs-help',
        routeBasePath: 'help',
        sidebarPath: require.resolve('./sidebarsHelp.ts'),
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
      title: 'MACNMAN',
      logo: {
        alt: 'Macnman',
        src: 'img/logo_small_red.webp',
        href: '/docs/',
      },


      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
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

    algolia: {
      appId: 'ZCKJUWN56U',
      apiKey: '28e5f208b6c069fc2b815ba36dc9689c',
      indexName: 'Macnman',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
    },

    footer: {
      style: 'dark',
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
