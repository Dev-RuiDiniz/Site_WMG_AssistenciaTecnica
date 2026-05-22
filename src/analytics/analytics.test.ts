import { beforeEach, describe, expect, it } from 'vitest';
import {
  ensureDataLayer,
  hasAnalyticsTagConfigured,
  initializeAnalytics,
  trackContactFormSubmitAttempt,
  trackContactFormSubmitError,
  trackContactFormSubmitSuccess,
  trackEvent,
  trackWhatsAppClick,
} from './analytics';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

describe('analytics', () => {
  beforeEach(() => {
    delete window.dataLayer;
    delete window.gtag;
  });

  it('cria dataLayer de forma segura', () => {
    const dataLayer = ensureDataLayer();

    expect(dataLayer).toEqual([]);
    expect(window.dataLayer).toBe(dataLayer);
  });

  it('identifica configuração ausente de tags reais', () => {
    expect(hasAnalyticsTagConfigured({ enabled: true, gaMeasurementId: '', gtmId: '' })).toBe(false);
    expect(hasAnalyticsTagConfigured({ enabled: true, gaMeasurementId: 'G-TESTE', gtmId: '' })).toBe(true);
    expect(hasAnalyticsTagConfigured({ enabled: true, gaMeasurementId: '', gtmId: 'GTM-TESTE' })).toBe(true);
  });

  it('não inicializa tags quando analytics está desabilitado', () => {
    initializeAnalytics({ enabled: false, gaMeasurementId: 'G-TESTE', gtmId: 'GTM-TESTE' });

    expect(window.dataLayer).toBeUndefined();
    expect(window.gtag).toBeUndefined();
  });

  it('registra eventos no dataLayer', () => {
    trackEvent({
      event: 'whatsapp_click',
      action: 'click',
      category: 'contact',
      channel: 'whatsapp',
      origin: 'floating_button',
    });

    expect(window.dataLayer).toEqual([
      {
        event: 'whatsapp_click',
        action: 'click',
        category: 'contact',
        channel: 'whatsapp',
        origin: 'floating_button',
      },
    ]);
  });

  it('registra clique em WhatsApp com origem sem dados pessoais', () => {
    trackWhatsAppClick('floating_button');

    expect(window.dataLayer).toEqual([
      {
        event: 'whatsapp_click',
        action: 'click',
        category: 'contact',
        channel: 'whatsapp',
        origin: 'floating_button',
      },
    ]);

    expect(JSON.stringify(window.dataLayer)).not.toMatch(/email|telefone|phone|nome|name|description/i);
  });

  it('registra eventos do formulário sem dados pessoais', () => {
    trackContactFormSubmitAttempt();
    trackContactFormSubmitSuccess();
    trackContactFormSubmitError('provider');

    expect(window.dataLayer).toEqual([
      {
        event: 'contact_form_submit_attempt',
        action: 'submit_attempt',
        category: 'form',
        channel: 'form',
        form_name: 'diagnostic_contact',
      },
      {
        event: 'contact_form_submit_success',
        action: 'submit_success',
        category: 'form',
        channel: 'form',
        form_name: 'diagnostic_contact',
      },
      {
        event: 'contact_form_submit_error',
        action: 'submit_error',
        category: 'form',
        channel: 'form',
        form_name: 'diagnostic_contact',
        error_type: 'provider',
      },
    ]);

    expect(JSON.stringify(window.dataLayer)).not.toMatch(/cliente|@|9999|descrição|descricao/i);
  });
});
