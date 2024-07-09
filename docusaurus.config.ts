import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Demo',
  tagline: 'Documentation Website',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'farah2501', // Usually your GitHub org/user name.
  projectName: 'mywebsite', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'my'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      my: {
        label: 'Bahasa Melayu',
      },
    }
  },

  // webpack: {
  //   configure: (webpackConfig, { env, paths }) => {
  //     webpackConfig.resolve.fallback = {
  //       ...webpackConfig.resolve.fallback,
  //       "os": require.resolve("os-browserify/browser"),
  //       "path": require.resolve("path-browserify"),
  //       "zlib": require.resolve("browserify-zlib"),
  //       "http": require.resolve("stream-http"),
  //       "https": require.resolve("https-browserify"),
  //       "fs": false, // If 'fs' is used and you need a polyfill, consider using 'browserify-fs'
  //     };
  //     return webpackConfig;
  //   },
  // },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          includeCurrentVersion: true, // Include the current version
          versions: {
            current: {
              label: '0.0.0', // Label for the current version
              path: '/', // Root path for the current version
              banner: 'none', // Banner type
              badge: true, // Show the version badge
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],  
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
      
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    }
  ],

  themes: [ 
    '@docusaurus/theme-mermaid',
    'docusaurus-theme-search-typesense'
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Versions',
          position: 'right',
          items: [
            // Add items for each version
            { label: '0.0.0', to: '/' }
            // Add more versions as needed
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },{
          type: 'docSidebar',
          sidebarId: 'markdownSidebar',
          position: 'left',
          label: 'Markdown',
        },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    mermaid:{
      theme: {light: 'neutral', dark: 'forest'},
      //options: {maxTextSize:50,},
    },
     typesense: { 
      // 
      // Replace this with the name of your index/collection. 
      // It should match the "index_name" entry in  
      // scraper config file. 
      // 

      typesenseCollectionName: 'ComprehensiveCollection', 

      typesenseServerConfig: { 

        nodes: [ 
          { 
            host: 'localhost', 
            port: 8108, 
            protocol: 'http', 
          }, 
        ], 
        apiKey: 'DWRsY282BuHnGe53lsm8iym0AT7VvG8Msz4XQT7kPaKOoakc', 
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/single-page',
            },
          ],
        },
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
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  
  } satisfies Preset.ThemeConfig,
  plugins: []
};

export default config;