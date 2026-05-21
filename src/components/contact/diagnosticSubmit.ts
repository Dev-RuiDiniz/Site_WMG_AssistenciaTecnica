import type { DiagnosticFormValues } from './diagnosticForm';

export type DiagnosticSubmitConfig = {
  endpoint: string;
  subject: string;
  template: string;
  captcha: 'true' | 'false';
  source: string;
};

export type DiagnosticSubmitResult =
  | { status: 'success' }
  | { status: 'error'; message: string };

export const diagnosticSubmitConfig: DiagnosticSubmitConfig = {
  endpoint: 'https://formsubmit.co/ajax/suporte@wmgassistenciatecnica.com.br',
  subject: 'Novo diagnóstico técnico - WMG',
  template: 'table',
  captcha: 'false',
  source: 'Site WMG Assistência Técnica',
};

export function buildDiagnosticSubmitPayload(values: DiagnosticFormValues, config: DiagnosticSubmitConfig) {
  const payload = new FormData();

  payload.append('_subject', config.subject);
  payload.append('_template', config.template);
  payload.append('_captcha', config.captcha);
  payload.append('Origem', config.source);
  payload.append('Nome', values.name.trim());
  payload.append('Empresa', values.company.trim() || 'Não informado');
  payload.append('E-mail', values.email.trim() || 'Não informado');
  payload.append('Telefone / WhatsApp', values.phone.trim() || 'Não informado');
  payload.append('Equipamento', values.equipment.trim());
  payload.append('Tipo de falha', values.failureType.trim());
  payload.append('Urgência', values.urgency.trim());
  payload.append('Descrição do problema', values.description.trim());

  return payload;
}

export async function submitDiagnosticForm(
  values: DiagnosticFormValues,
  config: DiagnosticSubmitConfig = diagnosticSubmitConfig,
  fetcher: typeof fetch = fetch,
): Promise<DiagnosticSubmitResult> {
  try {
    const response = await fetcher(config.endpoint, {
      method: 'POST',
      body: buildDiagnosticSubmitPayload(values, config),
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      return {
        status: 'error',
        message: 'Não foi possível enviar o diagnóstico agora. Use o e-mail ou WhatsApp de fallback.',
      };
    }

    return { status: 'success' };
  } catch {
    return {
      status: 'error',
      message: 'Falha de conexão ao enviar o diagnóstico. Use o e-mail ou WhatsApp de fallback.',
    };
  }
}
