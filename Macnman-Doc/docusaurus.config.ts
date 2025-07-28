import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Macnman',
  tagline: 'Macnman',
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

  url: 'https://macnman.com',
  baseUrl: '/docs/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

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
        path: 'Books',
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
    image: 'img/logo_small_red.webp',

    colorMode: {
      defaultMode: 'light',
      disableSwitch: true, // Disable default toggle
      respectPrefersColorScheme: true,
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
            label: 'Product',
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
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'custom-color-toggle',
            position: 'right',
          },
        ],
      },

      scripts: [
        {
          src: '/js/secondary-navbar.ts',
          async: true,
        },
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
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'GitHub', href: 'https://github.com/facebook/docusaurus' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Macnman. Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    } satisfies Preset.ThemeConfig,
  };

  export default config;
