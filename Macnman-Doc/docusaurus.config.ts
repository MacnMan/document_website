import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


console.log(require.resolve('./sidebarsProduct.ts'));

const config: Config = {
  title: 'Macnman',
  tagline: 'Macnman',
  favicon: 'img/favicon.ico',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: 'D96D4622B4C0F722',
      },
    },
  ],

  future: {
    v4: true,
  },

  url: 'https:macnman.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'warn',            // <-- log broken links instead of failing build
  onBrokenMarkdownLinks: 'warn',    // <-- same for Markdown-only links

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: '/', // Serve docs at site root
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
        editUrl: 'https://github.com/your-org/your-repo/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guide',
        path: 'guide',
        routeBasePath: 'guide',
        sidebarPath: require.resolve('./sidebarsGuide.ts'), // Optional: use separate sidebar
        editUrl: 'https://github.com/your-org/your-repo/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'books',
        path: 'books', // folder name in your root directory
        routeBasePath: 'books', // URL path like /books/...
        sidebarPath: require.resolve('./sidebarsBooks.ts'),
        editUrl: 'https://github.com/your-org/your-repo/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'datasheets',
        path: 'datasheets',
        routeBasePath: 'datasheets',
        sidebarPath: require.resolve('./sidebarsDatasheets.ts'), // Optional: use separate sidebar
        editUrl: 'https://github.com/your-org/your-repo/edit/main/',
      },
    ], 
    function customWebpackLoggingPlugin() {
      return {
        name: 'custom-webpack-logging',
        configureWebpack() {
          return {
            infrastructureLogging: {
              level: 'warn', // or 'error'
            },
          };
        },
      };
    },
  ],


  themeConfig: {
    image: 'img/logo_small_red.webp',
    navbar: {
      title: 'Macnman',
      logo: {
        alt: 'Macnman',
        src: 'img/logo_small_red.webp',
        href: '/',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'productSidebar',
          docsPluginId: 'product',
          position: 'left',
          label: 'Product'
        },
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          docsPluginId: 'guide',
          position: 'right',
          label: 'Guide'
        },
        {
          type: 'docSidebar',
          sidebarId: 'booksSidebar',
          docsPluginId: 'books',
          position: 'left',
          label: 'Books'
        }, {
          type: 'docSidebar',
          sidebarId: 'datasheetsSidebar',
          docsPluginId: 'datasheets',
          position: 'left',
          label: 'Datasheets'
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      appId: 'ZCKJUWN56U',
      apiKey: '28e5f208b6c069fc2b815ba36dc9689c',
      indexName: 'Annual_Incme',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [{ label: 'Tutorial', to: '/docs/intro' }],
        // },
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
            { label: 'Blog', to: '/blog' },
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
