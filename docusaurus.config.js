// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sarufi',
  tagline: 'Sarufi offers versatile language options for constructing and executing chatbot interactions, across platforms like Telegram, WhatsApp, and Messenger. While the Python API is comprehensive and user-friendly, other language APIs provide integration flexibility and potential performance enhancements.',
  url: 'https://docs.sarufi.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/mask.png',


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
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Neurotech-HQ/sarufi-docs/edit/main/',
        },
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

        logo: {
          alt: 'Sarufi Logo',
          src: 'img/logo-blank.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Neurotech-HQ/sarufi-python-sdk',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Getting started',
                to: '/docs/category/getting-started',
              },
              {
                label: 'Integrations',
                to: '/docs/category/integrations',
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
                label: 'Blog',
                to: '/blog',
              },
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
        copyright: `Copyright © ${new Date().getFullYear()} Sarufi, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
