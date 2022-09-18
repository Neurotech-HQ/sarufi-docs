import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/sarufi/__docusaurus/debug',
    component: ComponentCreator('/sarufi/__docusaurus/debug', '1e3'),
    exact: true
  },
  {
    path: '/sarufi/__docusaurus/debug/config',
    component: ComponentCreator('/sarufi/__docusaurus/debug/config', 'd3c'),
    exact: true
  },
  {
    path: '/sarufi/__docusaurus/debug/content',
    component: ComponentCreator('/sarufi/__docusaurus/debug/content', 'b90'),
    exact: true
  },
  {
    path: '/sarufi/__docusaurus/debug/globalData',
    component: ComponentCreator('/sarufi/__docusaurus/debug/globalData', '0b2'),
    exact: true
  },
  {
    path: '/sarufi/__docusaurus/debug/metadata',
    component: ComponentCreator('/sarufi/__docusaurus/debug/metadata', 'c52'),
    exact: true
  },
  {
    path: '/sarufi/__docusaurus/debug/registry',
    component: ComponentCreator('/sarufi/__docusaurus/debug/registry', '34b'),
    exact: true
  },
  {
    path: '/sarufi/__docusaurus/debug/routes',
    component: ComponentCreator('/sarufi/__docusaurus/debug/routes', '351'),
    exact: true
  },
  {
    path: '/sarufi/blog',
    component: ComponentCreator('/sarufi/blog', '770'),
    exact: true
  },
  {
    path: '/sarufi/blog/archive',
    component: ComponentCreator('/sarufi/blog/archive', 'a45'),
    exact: true
  },
  {
    path: '/sarufi/blog/first-blog-post',
    component: ComponentCreator('/sarufi/blog/first-blog-post', '6cd'),
    exact: true
  },
  {
    path: '/sarufi/blog/tags',
    component: ComponentCreator('/sarufi/blog/tags', '263'),
    exact: true
  },
  {
    path: '/sarufi/blog/tags/docusaurus',
    component: ComponentCreator('/sarufi/blog/tags/docusaurus', '3a0'),
    exact: true
  },
  {
    path: '/sarufi/blog/tags/facebook',
    component: ComponentCreator('/sarufi/blog/tags/facebook', 'dc8'),
    exact: true
  },
  {
    path: '/sarufi/blog/tags/hello',
    component: ComponentCreator('/sarufi/blog/tags/hello', 'c06'),
    exact: true
  },
  {
    path: '/sarufi/blog/tags/hola',
    component: ComponentCreator('/sarufi/blog/tags/hola', '596'),
    exact: true
  },
  {
    path: '/sarufi/blog/welcome',
    component: ComponentCreator('/sarufi/blog/welcome', '2ac'),
    exact: true
  },
  {
    path: '/sarufi/markdown-page',
    component: ComponentCreator('/sarufi/markdown-page', 'a8b'),
    exact: true
  },
  {
    path: '/sarufi/docs',
    component: ComponentCreator('/sarufi/docs', '6ba'),
    routes: [
      {
        path: '/sarufi/docs/category/getting-started',
        component: ComponentCreator('/sarufi/docs/category/getting-started', '021'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sarufi/docs/category/integrations',
        component: ComponentCreator('/sarufi/docs/category/integrations', '2d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sarufi/docs/Getting started /basic-concepts',
        component: ComponentCreator('/sarufi/docs/Getting started /basic-concepts', 'aff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sarufi/docs/Getting started /chatbots-addons',
        component: ComponentCreator('/sarufi/docs/Getting started /chatbots-addons', 'a3e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sarufi/docs/Getting started /congratulations',
        component: ComponentCreator('/sarufi/docs/Getting started /congratulations', '42a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sarufi/docs/Getting started /create-a-simple-chatbot',
        component: ComponentCreator('/sarufi/docs/Getting started /create-a-simple-chatbot', 'a5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sarufi/docs/Getting started /create-chatbot-from-file',
        component: ComponentCreator('/sarufi/docs/Getting started /create-chatbot-from-file', 'e5c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sarufi/docs/intro',
        component: ComponentCreator('/sarufi/docs/intro', '240'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sarufi/docs/tutorial-extras/integrate-with-messenger',
        component: ComponentCreator('/sarufi/docs/tutorial-extras/integrate-with-messenger', '1f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sarufi/docs/tutorial-extras/integrate-with-telegram',
        component: ComponentCreator('/sarufi/docs/tutorial-extras/integrate-with-telegram', '67c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sarufi/docs/tutorial-extras/integrate-with-whatsapp',
        component: ComponentCreator('/sarufi/docs/tutorial-extras/integrate-with-whatsapp', 'ace'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/sarufi/',
    component: ComponentCreator('/sarufi/', '1c6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
