import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-wmg-graphite-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
