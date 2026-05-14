// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes: prismThemes } = require('prism-react-renderer');
const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sarufi',
  tagline: 'Simplifying Conversational AI Development for African Languages',
  url: 'https://docs.sarufi.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  markdown: {
    format: 'detect',
  },


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kalebu', // Usually your GitHub org/user name.
  projectName: 'sarufi-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Neurotech-HQ/sarufi-docs/edit/main/',
          
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
        hideable: true,
         autoCollapseCategories: false
      },
    },
      navbar: {
        title: 'Sarufi',
        logo: {
          alt: 'Sarufi Logo',
          src: 'img/homepage/logo.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation'
          },
          {
            type: 'doc',
            docId: 'developer-api/getting-started',
            position: 'left',
            label: 'Developer API'
          },
          // {
          //   position: 'left',
          //   label: 'Changelog'
          // },
          {
            href: 'https://sarufi.io/',
            position: 'left',
            label: 'Free Trial'
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Neurotech-HQ/sarufi-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/docs/intro',
              },
              {
                label: 'User Guide',
                to: '/docs/category/user-guide',
              },
              {
                label: 'Developer API',
                to: '/docs/category/developer-api',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              // Add other links as appropriate, replicate the section below
              {
                label: 'Twitter',
                href: 'https://twitter.com/NeuroTech_HQ',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/neurotechafrica'
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Neurotech-HQ/sarufi-docs',
              },
              {
                label: 'Neurotech Africa',
                href: 'https://neurotech.africa/'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sarufi By Neurotech Africa. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
