import type { Variants } from "framer-motion";

/** Staggered fade-up for Hero section (use with custom={index} and animate="visible") */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

/** Spread onto any motion element for a scroll-triggered fade-up reveal */
export const scrollReveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6 } as const,
};

/** scrollReveal with a stagger delay (in seconds) */
export const scrollRevealDelayed = (delay: number) => ({
  ...scrollReveal,
  transition: { duration: 0.6, delay },
});
