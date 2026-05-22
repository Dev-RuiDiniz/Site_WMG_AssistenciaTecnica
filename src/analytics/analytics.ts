export type AnalyticsEventName =
  | 'whatsapp_click'
  | 'contact_form_submit_attempt'
  | 'contact_form_submit_success'
  | 'contact_form_submit_error';

export type AnalyticsEvent = {
  event: AnalyticsEventName;
  action: string;
  category: 'contact' | 'form';
  origin?: string;
  channel?: 'whatsapp' | 'form';
  form_name?: 'diagnostic_contact';
  error_type?: 'validation' | 'network' | 'provider' | 'anti_spam' | 'rate_limit';
};

type AnalyticsWindow = Window &
  typeof globalThis & {
    dataLayer?: AnalyticsEvent[];
    gtag?: (...args: unknown[]) => void;
  };

export const analyticsConfig = {
  enabled: import.meta.env.VITE_ANALYTICS_ENABLED === 'true',
  gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID ?? '',
  gtmId: import.meta.env.VITE_GTM_ID ?? '',
};

function getAnalyticsWindow() {
  return window as AnalyticsWindow;
}

export function ensureDataLayer() {
  const analyticsWindow = getAnalyticsWindow();

  analyticsWindow.dataLayer = analyticsWindow.dataLayer ?? [];

  return analyticsWindow.dataLayer;
}

export function hasAnalyticsTagConfigured(config = analyticsConfig) {
  return Boolean(config.gaMeasurementId || config.gtmId);
}

export function trackEvent(event: AnalyticsEvent) {
  try {
    const dataLayer = ensureDataLayer();
    dataLayer.push(event);
  } catch {
    // Analytics nunca deve interromper navegação, formulário ou CTAs.
  }
}

export function initializeAnalytics(config = analyticsConfig) {
  if (!config.enabled || !hasAnalyticsTagConfigured(config)) {
    return;
  }

  ensureDataLayer();

  if (config.gaMeasurementId) {
    const analyticsWindow = getAnalyticsWindow();
    analyticsWindow.gtag =
      analyticsWindow.gtag ??
      ((...args: unknown[]) => {
        ensureDataLayer().push(args as unknown as AnalyticsEvent);
      });

    analyticsWindow.gtag("js", new Date());
    analyticsWindow.gtag('config', config.gaMeasurementId);
  }
}

export function trackWhatsAppClick(origin: string) {
  trackEvent({
    event: 'whatsapp_click',
    action: 'click',
    category: 'contact',
    channel: 'whatsapp',
    origin,
  });
}

export function trackContactFormSubmitAttempt() {
  trackEvent({
    event: 'contact_form_submit_attempt',
    action: 'submit_attempt',
    category: 'form',
    channel: 'form',
    form_name: 'diagnostic_contact',
  });
}

export function trackContactFormSubmitSuccess() {
  trackEvent({
    event: 'contact_form_submit_success',
    action: 'submit_success',
    category: 'form',
    channel: 'form',
    form_name: 'diagnostic_contact',
  });
}

export function trackContactFormSubmitError(errorType: NonNullable<AnalyticsEvent['error_type']>) {
  trackEvent({
    event: 'contact_form_submit_error',
    action: 'submit_error',
    category: 'form',
    channel: 'form',
    form_name: 'diagnostic_contact',
    error_type: errorType,
  });
}
