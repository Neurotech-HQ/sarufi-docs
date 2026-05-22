// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'developer-api/getting-started',
    'developer-api/authentication',
    'developer-api/workspace',
    'developer-api/chatbots',

    // ── Flows ───────────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Flows',
      collapsible: true,
      collapsed: false,
      items: [
        'developer-api/flows',
        'developer-api/how-flows-work',
        'developer-api/api-call',
      ],
    },

    // ── Messaging ───────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Messaging',
      collapsible: true,
      collapsed: false,
      items: [
        'developer-api/chat',
        'developer-api/conversations',
      ],
    },

    // ── Resources ───────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Resources',
      collapsible: true,
      collapsed: true,
      items: [
        'developer-api/knowledge-bases',
        'developer-api/integrations',
        'developer-api/analytics',
        'developer-api/mcp-integration',
      ],
    },
  ],
};

module.exports = sidebars;
