'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

/** Mirrors the marketing site's --ease-out. */
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Shared entrance from the site: fade up. `custom` is the stagger index. */
const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 * i, ease: EASE_OUT },
  }),
};

/** Fades its children up once they scroll into view. */
export function Reveal({
  children,
  index = 0,
  className,
  as = 'div',
}: {
  children: ReactNode;
  index?: number;
  className?: string;
  as?: 'div' | 'h1';
}) {
  const Comp = as === 'h1' ? motion.h1 : motion.div;

  return (
    <Comp
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={rise}
      className={className}
    >
      {children}
    </Comp>
  );
}
