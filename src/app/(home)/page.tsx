import Link from 'next/link';
import { cn } from '@/lib/cn';
import { FEATURES, type Feature } from '@/lib/features';
import { Reveal } from '@/components/reveal';

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon;

  return (
    <Reveal index={index} className="flex">
      <Link
        href={feature.href}
        className="relative flex flex-1 flex-col justify-center overflow-hidden rounded-2xl border border-fd-border bg-fd-background p-6 text-center transition-colors hover:border-brand/60"
      >
        {feature.glow ? (
          <span
            aria-hidden
            className={cn(
              'pointer-events-none absolute size-32 rounded-full bg-accent-soft/50 blur-3xl',
              feature.glow === 'bl' ? '-bottom-16 -left-12' : '-top-16 -right-12',
            )}
          />
        ) : null}

        <span className="relative">
          <span className="mx-auto grid size-11 place-items-center rounded-xl bg-fd-muted text-fd-foreground">
            <Icon className="size-5" strokeWidth={1.75} aria-hidden />
          </span>
          <h3 className="mt-4 text-base font-semibold tracking-tight text-balance text-fd-foreground">
            {feature.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-balance text-fd-muted-foreground">
            {feature.desc}
          </p>
        </span>
      </Link>
    </Reveal>
  );
}

export default function HomePage() {
  return (
    <section
      aria-labelledby="explore-heading"
      className="mx-auto w-full max-w-[1600px] px-5 py-10 sm:px-[5.5rem] sm:py-14 lg:px-44 lg:py-[4.5rem]"
    >
      <Reveal as="h1" index={0}>
        <span
          id="explore-heading"
          className="mx-auto block max-w-2xl text-center text-3xl leading-[1.15] font-extrabold tracking-tight text-balance text-fd-foreground sm:mx-0 sm:text-left sm:text-[2.75rem] sm:leading-[1.1]"
        >
          Everything the dashboard does, <span className="text-brand">over REST.</span>
        </span>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {FEATURES.map((feature, i) => (
          <FeatureCard key={feature.title} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}
