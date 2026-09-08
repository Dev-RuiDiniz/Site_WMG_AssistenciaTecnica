import { describe, expect, it } from 'vitest';
import { buildWhatsAppLink, defaultWhatsAppMessage, normalizePhoneToDigits } from './whatsappLink';

describe('whatsappLink', () => {
  it('normaliza telefone para apenas digitos', () => {
    expect(normalizePhoneToDigits('+55 12 3426-0300')).toBe('551234260300');
    expect(normalizePhoneToDigits('+55 (12) 3426-0300')).toBe('551234260300');
  });

  it('gera link do WhatsApp com numero e mensagem padrao preenchida', () => {
    const href = buildWhatsAppLink('+55 12 3426-0300');

    expect(href).toContain('https://wa.me/551234260300');
    expect(href).toContain('text=');
    expect(decodeURIComponent(href)).toContain(defaultWhatsAppMessage);
  });

  it('gera link com mensagem customizada codificada', () => {
    const href = buildWhatsAppLink('+55 12 3426-0300', 'Olá, preciso de diagnóstico para inversor.');

    expect(href).toBe(
      'https://wa.me/551234260300?text=Ol%C3%A1%2C%20preciso%20de%20diagn%C3%B3stico%20para%20inversor.',
    );
  });
});
