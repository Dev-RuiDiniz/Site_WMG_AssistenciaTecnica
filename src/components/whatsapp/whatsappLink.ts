export const defaultWhatsAppMessage =
  'Olá, equipe WMG. Gostaria de solicitar uma avaliação técnica.';

export function normalizePhoneToDigits(phone: string): string {
  return phone.replace(/\D/g, '');
}

export function buildWhatsAppLink(phone: string, message: string = defaultWhatsAppMessage): string {
  const digits = normalizePhoneToDigits(phone);
  const encodedMessage = encodeURIComponent(message.trim());

  return `https://wa.me/${digits}?text=${encodedMessage}`;
}
