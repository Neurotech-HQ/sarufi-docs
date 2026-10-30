import type { CSSProperties } from 'react';

// [from, to, label, "reply"?]; from === to draws a note on that lane.
type Step = [number, number, string, ('reply' | 'note')?];

// Plain HTML instead of SVG so labels wrap at phone width and follow the theme.
export function Sequence({ title, actors, steps }: { title: string; actors: string[]; steps: Step[] }) {
  const n = actors.length;
  const centre = (i: number) => `${((i + 0.5) / n) * 100}%`;
  return (
    <figure className="not-prose my-6 rounded-xl border border-fd-border bg-fd-card p-3 sm:p-4" aria-label={title}>
      <div className="relative">
        {actors.map((_, i) => (
          <div
            key={i}
            aria-hidden
            className="absolute top-0 bottom-0 border-l border-dashed border-fd-border"
            style={{ left: centre(i) }}
          />
        ))}
        <div className="relative grid gap-1" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
          {actors.map((a) => (
            <div
              key={a}
              className="mx-0.5 rounded-md border border-fd-border bg-fd-background px-1 py-1.5 text-center text-[11px] font-semibold leading-tight text-fd-foreground sm:text-sm"
            >
              {a}
            </div>
          ))}
        </div>
        <ol className="relative mt-3 flex list-none flex-col gap-3 p-0">
          {steps.map(([from, to, label, kind], k) => {
            const lo = Math.min(from, to);
            const hi = Math.max(from, to);
            const note = from === to || kind === 'note';
            const span: CSSProperties = note
              ? { marginLeft: `${(lo / n) * 100}%`, width: `${(1 / n) * 100}%` }
              : { marginLeft: centre(lo), width: `${((hi - lo) / n) * 100}%` };
            const text = (
              <>
                <span className="mr-1 font-mono text-fd-primary">{k + 1}</span>
                {label}
              </>
            );
            if (note) {
              return (
                <li key={k} style={span} className="px-0.5">
                  <div className="rounded-md border border-fd-primary/40 bg-fd-primary/10 px-1 py-1 text-center text-[11px] leading-snug text-fd-foreground sm:text-[13px]">
                    {text}
                  </div>
                </li>
              );
            }
            const right = to > from;
            return (
              <li key={k} style={span}>
                <div className="px-1 pb-0.5 text-center text-[11px] leading-snug text-fd-foreground sm:text-[13px]">{text}</div>
                <div className={`relative h-0 border-t-2 ${kind === 'reply' ? 'border-dashed' : ''} border-fd-muted-foreground`}>
                  <span
                    aria-hidden
                    className="absolute -top-[6px] h-0 w-0 border-y-[5px] border-y-transparent"
                    style={
                      right
                        ? { right: -1, borderLeft: '7px solid var(--color-fd-muted-foreground)' }
                        : { left: -1, borderRight: '7px solid var(--color-fd-muted-foreground)' }
                    }
                  />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <figcaption className="mt-3 text-center text-xs text-fd-muted-foreground">{title}</figcaption>
    </figure>
  );
}
