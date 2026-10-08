import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { docsHome, gitConfig, SITE_URL } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // Both logo variants render and CSS picks one, so there is no flash of
      // the wrong mark before the theme resolves.
      title: (
        <>
          <Image
            src="/sarufi-logo.svg"
            alt="Sarufi"
            width={88}
            height={28}
            priority
            className="h-7 w-auto dark:hidden"
          />
          <Image
            src="/sarufi-logo-dark.svg"
            alt="Sarufi"
            width={88}
            height={28}
            priority
            className="hidden h-7 w-auto dark:block"
          />
          <span className="sr-only">Sarufi Docs</span>
        </>
      ),
    },
    links: [
      { text: 'View Site', url: SITE_URL, external: true },
      { text: 'Docs', url: docsHome, active: 'nested-url' },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
