import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type BaseButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchor = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-wmg-lime-500 text-wmg-navy-950 shadow-wmg-glow hover:bg-wmg-lime-400 focus-visible:outline-wmg-lime-400',
  secondary:
    'border border-wmg-cyan-400/60 bg-wmg-blue-700/20 text-white hover:bg-wmg-blue-700/35 focus-visible:outline-wmg-cyan-400',
  ghost:
    'text-wmg-cyan-300 hover:bg-white/10 focus-visible:outline-wmg-cyan-400',
};

const baseClasses =
  'inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-extrabold uppercase tracking-[0.08em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4';

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
