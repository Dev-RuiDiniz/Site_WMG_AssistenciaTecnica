import { companyContent } from '../../content';
import { buildWhatsAppLink, defaultWhatsAppMessage } from './whatsappLink';

export function FloatingWhatsAppButton() {
  const href = buildWhatsAppLink(companyContent.phone, defaultWhatsAppMessage);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp da WMG"
      className="fixed bottom-4 right-4 z-50 inline-flex min-h-12 items-center justify-center rounded-full bg-green-500 px-4 py-3 text-xs font-extrabold uppercase tracking-wide text-white shadow-2xl transition hover:-translate-y-0.5 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 sm:bottom-5 sm:right-5 sm:min-h-14 sm:px-5 sm:text-sm md:bottom-8 md:right-8"
    >
      WhatsApp
    </a>
  );
}
