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
      className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 px-5 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-2xl transition hover:-translate-y-0.5 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 md:bottom-8 md:right-8"
    >
      WhatsApp
    </a>
  );
}
