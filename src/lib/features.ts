import {
  ArrowRightLeft,
  BookOpen,
  Bot,
  ChartColumn,
  MessagesSquare,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

/** The API areas shown as cards on the landing page. */
export type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
  /** Soft accent bleed from one edge, as on the site's "Across devices" cards. */
  glow?: 'bl' | 'tr';
};

export const FEATURES: Feature[] = [
  {
    icon: Workflow,
    title: 'Conversation flows',
    desc: 'State-machine flows with transitions, variables and actions. Plain JSON, so they version in git.',
    href: '/docs/developer-api/flows',
    glow: 'bl',
  },
  {
    icon: MessagesSquare,
    title: 'Chat and conversations',
    desc: 'Send messages, get the bot reply in the same call, and read full histories across every channel.',
    href: '/docs/developer-api/chat',
  },
  {
    icon: ArrowRightLeft,
    title: 'Call your backend',
    desc: 'API-call actions hit your endpoint mid-conversation and route on the result.',
    href: '/docs/developer-api/api-call',
  },
  {
    icon: BookOpen,
    title: 'Knowledge bases',
    desc: 'Upload documents and URLs, attach them to a chatbot, and let it answer from them.',
    href: '/docs/developer-api/knowledge-bases',
  },
  {
    icon: Bot,
    title: 'MCP servers',
    desc: 'Register remote MCP servers as tools for the agent through the Model Context Protocol.',
    href: '/docs/developer-api/mcp-integration',
  },
  {
    icon: ChartColumn,
    title: 'Analytics',
    desc: 'Pull conversation volume, message counts and engagement into your own dashboards.',
    href: '/docs/developer-api/analytics',
    glow: 'tr',
  },
];
