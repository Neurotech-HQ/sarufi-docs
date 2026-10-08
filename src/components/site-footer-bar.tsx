import Image from 'next/image';
import { SITE_URL } from '@/lib/shared';
import { InstagramGlyph, LinkedInGlyph, ThreadsGlyph, XGlyph } from '@/components/brand-glyphs';
import { FOUNDED, META_PARTNER_SHORT, NEUROTECH_URL } from '@/lib/footer-links';

const SOCIALS = [
  { label: 'X', href: 'https://x.com/sarufi_ai', Glyph: XGlyph },
  { label: 'Instagram', href: 'https://www.instagram.com/sarufi.ai', Glyph: InstagramGlyph },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/neurotech-hq/',
    Glyph: LinkedInGlyph,
  },
  { label: 'Threads', href: 'https://threads.net/@sarufi_ai', Glyph: ThreadsGlyph },
];

/** The footer's brand row (logo, Meta badge, socials) and legal row. */
export function SiteFooterBar() {
  return (
    <>
      <div className="border-t border-showcase-border">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-16">
          {/* Logo and badge as one lockup, divided by a rule. The badge keeps
              Meta's mandatory clearspace as padding on its own wrapper. */}
          <div className="flex items-center gap-4">
            <a href={SITE_URL} aria-label="Sarufi home" className="shrink-0">
              <Image
                src="/sarufi-logo-dark.svg"
                alt="Sarufi"
                width={100}
                height={32}
                className="h-6 w-auto"
              />
            </a>

            <span className="h-8 w-px shrink-0 bg-showcase-border" aria-hidden />

            <span className="inline-flex shrink-0 items-center p-[0.914rem]">
              <Image
                src="/partners/meta-business-partner-knockout.avif"
                alt="Meta Business Partner badge"
                width={512}
                height={203}
                className="h-auto w-[4.5rem] min-w-[4rem] object-contain"
              />
            </span>
          </div>

          <ul className="flex items-center gap-3">
            {SOCIALS.map(({ label, href, Glyph }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-lg border border-showcase-border text-showcase-muted transition-colors hover:border-showcase-foreground/30 hover:text-showcase-foreground"
                >
                  <Glyph className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-showcase-border">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-2 px-5 py-5 text-xs text-showcase-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-16">
          <p className="flex items-center gap-1.5">
            <span>
              © {FOUNDED} – {new Date().getFullYear()} Sarufi by
            </span>
            <a
              href={NEUROTECH_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="font-medium transition-colors hover:text-showcase-foreground"
            >
              Neurotech.
            </a>
          </p>
          <p>{META_PARTNER_SHORT}</p>
        </div>
      </div>
    </>
  );
}
