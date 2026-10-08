import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  // A static export has no image optimizer to call.
  images: { unoptimized: true },
  // Keep Next from writing AGENTS.md / CLAUDE.md into the repo on dev start.
  agentRules: false,
};

export default withMDX(config);
