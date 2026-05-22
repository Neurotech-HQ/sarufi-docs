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
        autoCollapseCategories: true
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
            docId: 'developer-api/getting-started',
            position: 'left',
            label: 'Docs'
          },
          // {
          //   position: 'left',
          //   label: 'Changelog'
          // },
          {
            href: 'https://sarufi.io/',
            position: 'left',
            label: 'View Site'
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
            items: [
              {
                html: `<div class="footer__brand">
  <div class="footer__brand-name">
    <img src="/img/homepage/logo.png" alt="Sarufi" width="28" height="28" />
    <span>Sarufi</span>
  </div>
  <p class="footer__brand-sub">by Neurotech Africa</p>
  <p class="footer__brand-address">
    SkyCity Mall, 9th Floor<br/>
    Dar Es Salaam, Tanzania<br/>
    <a href="mailto:info@neurotech.africa">info@neurotech.africa</a><br/>
    <a href="tel:+255757294146">+255 757 294 146</a>
  </p>
</div>`,
              },
            ],
          },
          {
            title: 'Company',
            items: [
              { label: 'Neurotech Africa', href: 'https://neurotech.africa' },
            ],
          },
          {
            title: 'From Neurotech',
            items: [
              { label: 'Ghala', href: 'https://ghala.io' },
              { label: 'Snippe', href: 'https://snippe.sh' },
              { label: 'Ghala Rails', href: 'https://dev.ghala.io' },
            ],
          },
          {
            title: 'Sarufi',
            items: [
              { label: 'Getting Started', to: '/docs/developer-api/getting-started' },
              { label: 'Chat API', to: '/docs/developer-api/chat' },
              { label: 'Knowledge Bases', to: '/docs/developer-api/knowledge-bases' },
              { label: 'Integrations', to: '/docs/developer-api/integrations' },
            ],
          },
        ],
        copyright: `<div class="footer__bottom-bar">
  <div class="footer__bottom-legal">
    <a href="#">Terms of Service</a>
    <span class="footer__divider">|</span>
    <a href="#">Privacy Policy</a>
  </div>
  <div class="footer__bottom-social">
    <a href="https://twitter.com/NeuroTech_HQ" class="footer__social-link" aria-label="Twitter">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    </a>
    <a href="https://instagram.com/neurotechafrica" class="footer__social-link" aria-label="Instagram">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
    </a>
    <a href="https://linkedin.com/company/neurotechafrica" class="footer__social-link" aria-label="LinkedIn">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    </a>
    <a href="https://neurotech.africa" class="footer__social-link" aria-label="Website">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    </a>
  </div>
  <div class="footer__bottom-brand">
    © 2022–${new Date().getFullYear()}&nbsp;<span class="footer__bottom-logo"></span><strong>Sarufi</strong>&nbsp;by Neurotech.
  </div>
</div>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
