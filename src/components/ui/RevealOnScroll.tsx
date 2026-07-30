import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'none';
  as?: 'div' | 'section' | 'li';
};

export function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  as = 'div',
}: RevealOnScrollProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (shouldReduceMotion) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  const offsetY = direction === 'up' ? 28 : 0;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: offsetY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </MotionTag>
  );
}
