import { describe, expect, it } from 'vitest';
import { buildWhatsAppLink, defaultWhatsAppMessage, normalizePhoneToDigits } from './whatsappLink';

describe('whatsappLink', () => {
  it('normaliza telefone para apenas digitos', () => {
    expect(normalizePhoneToDigits('+55 12 99158-8460')).toBe('5512991588460');
    expect(normalizePhoneToDigits('+55 (12) 99158-8460')).toBe('5512991588460');
  });

  it('gera link do WhatsApp com numero e mensagem padrao preenchida', () => {
    const href = buildWhatsAppLink('+55 12 99158-8460');

    expect(href).toContain('https://wa.me/5512991588460');
    expect(href).toContain('text=');
    expect(decodeURIComponent(href)).toContain(defaultWhatsAppMessage);
  });

  it('gera link com mensagem customizada codificada', () => {
    const href = buildWhatsAppLink('+55 12 99158-8460', 'Olá, preciso de diagnóstico para inversor.');

    expect(href).toBe(
      'https://wa.me/5512991588460?text=Ol%C3%A1%2C%20preciso%20de%20diagn%C3%B3stico%20para%20inversor.',
    );
  });
});
