import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Sarufi';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

/** The first page; /docs itself redirects here. */
export const docsHome = '/docs/developer-api/getting-started';

export const SITE_URL = 'https://sarufi.io';

export const gitConfig = {
  user: 'Neurotech-HQ',
  repo: 'sarufi-docs',
  branch: 'main',
};

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
