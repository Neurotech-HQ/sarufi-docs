import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'c34'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '148'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '365'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '71a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ac9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'eac'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '27f'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '633'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'c18'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'c8b'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '71d'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '728'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '82b'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'f28'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'c03'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'db8'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '1e6'),
    routes: [
      {
        path: '/docs/category/getting-started',
        component: ComponentCreator('/docs/category/getting-started', '01f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/integrations',
        component: ComponentCreator('/docs/category/integrations', '3d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Getting started /basic-concepts',
        component: ComponentCreator('/docs/Getting started /basic-concepts', '664'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Getting started /chatbots-addons',
        component: ComponentCreator('/docs/Getting started /chatbots-addons', '415'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Getting started /congratulations',
        component: ComponentCreator('/docs/Getting started /congratulations', '195'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Getting started /create-a-simple-chatbot',
        component: ComponentCreator('/docs/Getting started /create-a-simple-chatbot', '02c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Getting started /create-chatbot-from-file',
        component: ComponentCreator('/docs/Getting started /create-chatbot-from-file', '5af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/integrate-with-messenger',
        component: ComponentCreator('/docs/tutorial-extras/integrate-with-messenger', '51e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/integrate-with-telegram',
        component: ComponentCreator('/docs/tutorial-extras/integrate-with-telegram', '255'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/integrate-with-whatsapp',
        component: ComponentCreator('/docs/tutorial-extras/integrate-with-whatsapp', '47e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '34d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
