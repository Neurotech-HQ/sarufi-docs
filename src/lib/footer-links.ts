import { docsHome, SITE_URL } from '@/lib/shared';

/** Footer content, carried over from the marketing site's footer. */

export const ADDRESS = ['SkyCity Mall, 9th Floor', 'Dar Es Salaam, Tanzania'];
export const EMAIL = 'info@sarufi.io';
export const PHONE_LABEL = '+255 699 920 009';
export const PHONE_HREF = 'tel:+255699920009';

export const NEUROTECH_URL = 'https://neurotech.africa/';

/** The year Sarufi started, so the range below reads "2022 – <this year>". */
export const FOUNDED = 2022;

/** Neurotech Africa holds the badge, not Sarufi, so only it is named. */
export const META_PARTNER_SHORT = 'Built by Neurotech Africa, a Meta Business Partner';

export type FooterLink = { label: string; href: string; external?: boolean };
export type FooterGroup = { heading: string; links: FooterLink[] };

export const LINK_COLUMNS: FooterGroup[][] = [
  [
    {
      heading: 'Product',
      links: [
        { label: 'Features', href: `${SITE_URL}/#features` },
        { label: 'How it works', href: `${SITE_URL}/#how-it-works` },
        { label: 'Use cases', href: `${SITE_URL}/#use-cases` },
        { label: 'Channels', href: `${SITE_URL}/#integrations` },
        { label: 'Pricing', href: `${SITE_URL}/#pricing` },
      ],
    },
  ],
  [
    {
      heading: 'Developers',
      links: [
        { label: 'API docs', href: docsHome },
        { label: 'Start free', href: `${SITE_URL}/login`, external: true },
      ],
    },
    {
      heading: 'Support',
      links: [
        { label: 'FAQ', href: `${SITE_URL}/#faq` },
        { label: 'Contact', href: `${SITE_URL}/#contact` },
      ],
    },
  ],
  [
    {
      heading: 'Company',
      links: [{ label: 'Neurotech', href: NEUROTECH_URL, external: true }],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Terms of Service', href: `${SITE_URL}/terms` },
        { label: 'Privacy Policy', href: `${SITE_URL}/privacy` },
      ],
    },
  ],
  [
    {
      heading: 'From Neurotech',
      links: [
        { label: 'Ghala', href: 'https://ghala.tz', external: true },
        { label: 'Snippe', href: 'https://snippe.sh', external: true },
        { label: 'Ghala Rails', href: 'https://dev.ghala.io', external: true },
      ],
    },
  ],
];
