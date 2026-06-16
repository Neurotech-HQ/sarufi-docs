import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import ChatDemo from "@site/src/components/ChatDemo";
import styles from "./index.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <p className={styles.badgeLabel}>Developer Documentation</p>
          <h1 className={styles.heroTitle}>
            Build chatbots that speak
            <br />
            <span className={styles.heroAccent}>your users' language</span>
          </h1>
          <p className={styles.heroSub}>
            REST API reference and guides for integrating conversational AI
            across WhatsApp, SMS, and web - powered by the Sarufi platform.
          </p>
          <div className={styles.heroCta}>
            <Link
              className={styles.ctaPrimary}
              to="/docs/developer-api/getting-started"
            >
              Get Started →
            </Link>
            <Link
              className={styles.ctaSecondary}
              to="/docs/developer-api/authentication"
            >
              Authentication
            </Link>
          </div>
          <div className={styles.quickLinks}>
            <span className={styles.quickLabel}>Jump to:</span>
            <Link to="/docs/developer-api/flows">Flows</Link>
            <span className={styles.quickItem}><span className={styles.quickSep}>/</span><Link to="/docs/developer-api/chat">Chat API</Link></span>
            <span className={styles.quickItem}><span className={styles.quickSep}>/</span><Link to="/docs/developer-api/conversations">Conversations</Link></span>
            <span className={styles.quickItem}><span className={styles.quickSep}>/</span><Link to="/docs/developer-api/knowledge-bases">Knowledge Bases</Link></span>
          </div>
        </div>
        <div className={styles.heroDemo}>
          <ChatDemo />
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    icon: "🔀",
    title: "Conversation Flows",
    desc: "State-machine flows with transitions, variables, and actions.",
    link: "/docs/developer-api/flows",
    cta: "Flow API →",
  },
  {
    icon: "💬",
    title: "Chat & Conversations",
    desc: "Create chat sessions, send messages synchronously, and retrieve full conversation histories across all channels.",
    link: "/docs/developer-api/chat",
    cta: "Chat API →",
  },
  {
    icon: "🔗",
    title: "API Integration",
    desc: "Connect flows to your own APIs.",
    link: "/docs/developer-api/api-call",
    cta: "API Integration →",
  },
  {
    icon: "📚",
    title: "Knowledge Bases",
    desc: "Upload documents, add URLs, and connect knowledge bases to chatbots for AI-powered question answering.",
    link: "/docs/developer-api/knowledge-bases",
    cta: "KB API →",
  },
  {
    icon: "🌐",
    title: "MCP Servers",
    desc: "Register remote MCP servers as LLM agent tools via the Model Context Protocol for extended capabilities.",
    link: "/docs/developer-api/mcp-integration",
    cta: "MCP guide →",
  },
  {
    icon: "📊",
    title: "Analytics",
    desc: "Pull conversation volume, message counts, and engagement metrics programmatically for your dashboards.",
    link: "/docs/developer-api/analytics",
    cta: "Analytics API →",
  },
];

function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresGrid}>
        {FEATURES.map((f) => (
          <Link key={f.title} to={f.link} className={styles.featureCard}>
            <div className={styles.featureIcon}>{f.icon}</div>
            <h3 className={styles.featureTitle}>{f.title}</h3>
            <p className={styles.featureDesc}>{f.desc}</p>
            <span className={styles.featureCta}>{f.cta}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Developer Docs"
      description="REST API reference for building chatbots with Sarufi"
    >
      <Hero />
      <Features />
    </Layout>
  );
}
