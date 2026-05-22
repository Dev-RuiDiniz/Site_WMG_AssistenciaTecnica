import { trackWhatsAppClick } from '../../analytics/analytics';
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
      className="fixed bottom-4 right-4 z-50 inline-flex size-12 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:-translate-y-0.5 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 sm:bottom-5 sm:right-5 sm:size-14 md:bottom-8 md:right-8"
      onClick={() => trackWhatsAppClick('floating_button')}
    >
      <svg
        data-testid="whatsapp-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-7 fill-current sm:size-8"
      >
        <path d="M12.04 2C6.54 2 2.08 6.46 2.08 11.96c0 1.76.46 3.47 1.33 4.98L2 22l5.22-1.36a9.9 9.9 0 0 0 4.82 1.23h.01c5.5 0 9.96-4.46 9.96-9.96A9.96 9.96 0 0 0 12.04 2Zm5.8 14.06c-.24.68-1.4 1.29-1.95 1.37-.52.08-1.17.12-1.9-.12-.44-.14-1-.33-1.73-.64-3.04-1.32-5.02-4.39-5.17-4.59-.14-.2-1.23-1.63-1.23-3.1 0-1.48.78-2.2 1.05-2.5.27-.3.58-.37.78-.37.2 0 .39 0 .56.01.18.01.41-.07.64.48.24.57.8 1.98.87 2.12.07.14.12.31.02.5-.1.19-.15.31-.3.48-.15.17-.31.38-.44.5-.14.14-.28.3-.12.58.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.24 2.25 1.38.28.14.44.12.6-.07.16-.2.68-.8.87-1.07.18-.27.37-.23.62-.14.25.08 1.6.75 1.87.88.28.14.46.2.52.3.07.1.07.6-.17 1.28Z" />
      </svg>
    </a>
  );
}
