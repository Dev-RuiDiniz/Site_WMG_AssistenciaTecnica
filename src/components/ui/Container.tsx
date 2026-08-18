import type { HTMLAttributes, ReactNode } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div className={`mx-auto w-[min(1320px,calc(100%-32px))] ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
