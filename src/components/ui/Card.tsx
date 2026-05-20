import type { HTMLAttributes, ReactNode } from 'react';

type CardVariant = 'default' | 'service' | 'highlight';

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  variant?: CardVariant;
};

const variantClasses: Record<CardVariant, string> = {
  default: 'border-wmg-blue-700/20 bg-white text-wmg-graphite-900',
  service:
    'border-wmg-cyan-400/30 bg-wmg-navy-900/80 text-white shadow-wmg-card backdrop-blur',
  highlight:
    'border-wmg-lime-500/40 bg-wmg-lime-500/10 text-white shadow-wmg-glow',
};

export function Card({ children, variant = 'default', className = '', ...props }: CardProps) {
  return (
    <article
      className={`rounded-3xl border p-7 ${variantClasses[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </article>
  );
}
