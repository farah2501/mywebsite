/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // docs: {
  //   Changelog: [
  //     {
  //       type: 'doc',
  //       id: 'changelog',
  //     },
  //   ],
  //   // Add other sections as needed
  // },
  // But you can create a sidebar manually
  
  tutorialSidebar: [
    'single-page',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting started/alert',
        'getting started/codeblock',
        'getting started/mdx',
        'getting started/markdown',
        'getting started/tabs',
        'getting started/table-of-content',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial Extras',
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },
  ],

  apiSidebar: [
    'changelog',
    {
      type: 'category',
      label: 'API',
      items: [
        'API/api-comments',
        'API/api-photos',
        'API/dog-pics',
        'API/recipe',
        'API/rick-morty',
        ],
    },
  ],

  markdownSidebar: [
    {
      type: 'category',
      label: 'Markdown',
      items: [
        'Markdown/TOC', 
        'Markdown/diagrams',
        'Markdown/math',
        'Markdown/live-codeblock',
      ]
    },
  ]
   
};

export default sidebars;
