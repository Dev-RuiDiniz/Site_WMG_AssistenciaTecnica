import {
  buildDiagnosticMailto,
  buildWhatsAppFallback,
  initialDiagnosticFormValues,
  validateDiagnosticForm,
} from './diagnosticForm';

describe('diagnosticForm', () => {
  it('valida campos obrigatorios do formulario', () => {
    const errors = validateDiagnosticForm(initialDiagnosticFormValues);

    expect(errors.name).toBeDefined();
    expect(errors.email).toBeDefined();
    expect(errors.phone).toBeDefined();
    expect(errors.equipment).toBeDefined();
    expect(errors.failureType).toBeDefined();
    expect(errors.urgency).toBeDefined();
    expect(errors.description).toBeDefined();
    expect(errors.consent).toBeDefined();
  });

  it('valida e-mail e telefone quando informados', () => {
    const errors = validateDiagnosticForm({
      ...initialDiagnosticFormValues,
      name: 'Rui',
      email: 'email-invalido',
      phone: '123',
      equipment: 'Placas eletrônicas',
      failureType: 'Falha intermitente',
      urgency: 'Alta',
      description: 'Equipamento apresenta falha intermitente durante operação.',
      consent: true,
    });

    expect(errors.email).toBe('Informe um e-mail válido.');
    expect(errors.phone).toBe('Informe um telefone com DDD.');
  });

  it('aceita payload valido sem erros', () => {
    const errors = validateDiagnosticForm({
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
    });

    expect(errors).toEqual({});
  });

  it('gera fallback mailto com dados do diagnostico', () => {
    const href = buildDiagnosticMailto(
      {
        ...initialDiagnosticFormValues,
        name: 'Rui Diniz',
        email: 'cliente@example.com',
        equipment: 'CLPs / PLCs',
        failureType: 'Falha de comunicação',
        urgency: 'Média',
        description: 'CLP perdeu comunicação com a IHM durante o processo produtivo.',
        consent: true,
      },
      'suporte@wmgassistenciatecnica.com.br',
    );

    expect(href).toContain('mailto:suporte@wmgassistenciatecnica.com.br');
    expect(decodeURIComponent(href)).toContain('CLPs / PLCs');
    expect(decodeURIComponent(href)).toContain('Falha de comunicação');
  });

  it('gera fallback de WhatsApp com telefone normalizado', () => {
    const href = buildWhatsAppFallback(
      {
        ...initialDiagnosticFormValues,
        name: 'Rui Diniz',
        equipment: 'Fontes industriais',
        failureType: 'Sem saída',
        urgency: 'Alta',
        description: 'Fonte sem tensão de saída no painel principal.',
        consent: true,
      },
      '+55 (11) 99999-9999',
    );

    expect(href).toContain('https://wa.me/5511999999999');
    expect(decodeURIComponent(href)).toContain('Fontes industriais');
  });
});
