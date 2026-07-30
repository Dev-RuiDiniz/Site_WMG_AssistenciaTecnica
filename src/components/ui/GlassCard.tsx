import type { HTMLAttributes, ReactNode } from 'react';

type GlassTone = 'navy' | 'cyan' | 'lime';

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: GlassTone;
  hoverLift?: boolean;
};

const toneClasses: Record<GlassTone, string> = {
  navy: 'border-white/10 bg-white/[0.06] shadow-wmg-glass',
  cyan: 'border-wmg-cyan-400/25 bg-wmg-cyan-400/[0.08] shadow-wmg-glow',
  lime: 'border-wmg-lime-500/30 bg-wmg-lime-500/[0.08] shadow-wmg-glow-lime',
};

export function GlassCard({
  children,
  tone = 'navy',
  hoverLift = true,
  className = '',
  ...props
}: GlassCardProps) {
  const hoverClasses = hoverLift
    ? 'transition duration-300 hover:-translate-y-1 hover:border-wmg-cyan-400/40'
    : '';

  return (
    <div
      className={`rounded-3xl border p-6 backdrop-blur-xl ${toneClasses[tone]} ${hoverClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
