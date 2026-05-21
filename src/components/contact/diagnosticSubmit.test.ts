import { describe, expect, it, vi } from 'vitest';
import { initialDiagnosticFormValues } from './diagnosticForm';
import {
  buildDiagnosticSubmitPayload,
  diagnosticSubmitConfig,
  submitDiagnosticForm,
  type DiagnosticSubmitConfig,
} from './diagnosticSubmit';

const validValues = {
  ...initialDiagnosticFormValues,
  name: 'Rui Diniz',
  company: 'WMG Cliente',
  email: 'cliente@example.com',
  phone: '(11) 99999-9999',
  equipment: 'Inversores',
  failureType: 'Equipamento parado',
  urgency: 'Alta',
  description: 'Inversor apresenta alarme e impede a retomada da linha de produção.',
  consent: true,
};

describe('diagnosticSubmit', () => {
  it('monta payload compativel com FormSubmit', () => {
    const payload = buildDiagnosticSubmitPayload(validValues, diagnosticSubmitConfig);

    expect(payload.get('_subject')).toBe('Novo diagnóstico técnico - WMG');
    expect(payload.get('_template')).toBe('table');
    expect(payload.get('_captcha')).toBe('false');
    expect(payload.get('Origem')).toBe('Site WMG Assistência Técnica');
    expect(payload.get('Nome')).toBe('Rui Diniz');
    expect(payload.get('Equipamento')).toBe('Inversores');
    expect(payload.get('Descrição do problema')).toContain('Inversor apresenta alarme');
  });

  it('envia para endpoint configurado e retorna sucesso', async () => {
    const fetcher = vi.fn().mockResolvedValue({ ok: true });

    const result = await submitDiagnosticForm(validValues, diagnosticSubmitConfig, fetcher);

    expect(result).toEqual({ status: 'success' });
    expect(fetcher).toHaveBeenCalledWith(
      diagnosticSubmitConfig.endpoint,
      expect.objectContaining({
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: expect.any(FormData),
      }),
    );
  });

  it('retorna erro quando o provider responde com falha HTTP', async () => {
    const fetcher = vi.fn().mockResolvedValue({ ok: false });

    const result = await submitDiagnosticForm(validValues, diagnosticSubmitConfig, fetcher);

    expect(result.status).toBe('error');
    if (result.status === 'error') {
      expect(result.message).toMatch(/não foi possível enviar/i);
    }
  });

  it('retorna erro quando ocorre falha de rede', async () => {
    const fetcher = vi.fn().mockRejectedValue(new Error('network'));

    const result = await submitDiagnosticForm(validValues, diagnosticSubmitConfig, fetcher);

    expect(result.status).toBe('error');
    if (result.status === 'error') {
      expect(result.message).toMatch(/falha de conexão/i);
    }
  });

  it('permite trocar endpoint sem alterar o componente', async () => {
    const customConfig: DiagnosticSubmitConfig = {
      ...diagnosticSubmitConfig,
      endpoint: 'https://example.com/form',
    };
    const fetcher = vi.fn().mockResolvedValue({ ok: true });

    await submitDiagnosticForm(validValues, customConfig, fetcher);

    expect(fetcher).toHaveBeenCalledWith('https://example.com/form', expect.any(Object));
  });
});
