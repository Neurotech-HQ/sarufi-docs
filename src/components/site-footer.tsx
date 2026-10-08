import Link from 'next/link';
import { cn } from '@/lib/cn';
import { SiteFooterBar } from '@/components/site-footer-bar';
import {
  ADDRESS,
  EMAIL,
  LINK_COLUMNS,
  PHONE_HREF,
  PHONE_LABEL,
  type FooterGroup,
  type FooterLink,
} from '@/lib/footer-links';

/**
 * The Sarufi marketing site's footer (sarufi-ai, src/components/site-footer.tsx),
 * carried over so docs and site share one. Links that are page anchors on the
 * site point at sarufi.io here; "API docs" stays inside the docs.
 */

function FooterAnchor({ link }: { link: FooterLink }) {
  return (
    <Link
      href={link.href}
      {...(link.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      className="text-showcase-muted transition-colors hover:text-showcase-foreground"
    >
      {link.label}
      {link.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </Link>
  );
}

function FooterColumn({ groups }: { groups: FooterGroup[] }) {
  return (
    <div>
      {groups.map((group, i) => (
        <div key={group.heading} className={cn(i > 0 && 'mt-7')}>
          <h2 className="text-sm font-semibold text-showcase-foreground">{group.heading}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {group.links.map((link) => (
              <li key={link.label}>
                <FooterAnchor link={link} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function SiteFooter() {
  return (
    // A permanently dark slab on both themes, as on the site.
    <footer className="bg-showcase text-showcase-foreground">
      <div className="mx-auto w-full max-w-[1600px] px-5 pt-14 pb-10 sm:px-8 sm:pt-16 lg:px-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {LINK_COLUMNS.map((groups) => (
            <FooterColumn key={groups[0].heading} groups={groups} />
          ))}

          <div className="col-span-2 sm:col-span-1">
            <h2 className="text-sm font-semibold text-showcase-foreground">Office</h2>
            <address className="mt-4 space-y-2.5 text-sm text-showcase-muted not-italic">
              {ADDRESS.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="transition-colors hover:text-showcase-foreground"
                >
                  {EMAIL}
                </a>
              </p>
              <p>
                <a href={PHONE_HREF} className="transition-colors hover:text-showcase-foreground">
                  {PHONE_LABEL}
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      <SiteFooterBar />
    </footer>
  );
}
