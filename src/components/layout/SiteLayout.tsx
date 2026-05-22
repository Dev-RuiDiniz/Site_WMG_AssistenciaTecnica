import type { ReactNode } from 'react';
import { FloatingWhatsAppButton } from '../whatsapp/FloatingWhatsAppButton';
import { Footer } from './Footer';
import { Header } from './Header';

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-transparent text-wmg-graphite-900">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
