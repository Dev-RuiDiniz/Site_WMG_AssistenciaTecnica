import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { DiagnosticContactForm } from './DiagnosticContactForm';
import { submitDiagnosticForm } from './diagnosticSubmit';

vi.mock('./diagnosticSubmit', () => ({
  submitDiagnosticForm: vi.fn(),
}));

const submitMock = vi.mocked(submitDiagnosticForm);

function fillValidForm() {
  fireEvent.change(screen.getByRole('textbox', { name: /nome/i }), {
    target: { value: 'Rui Diniz' },
  });
  fireEvent.change(screen.getByRole('textbox', { name: /e-mail/i }), {
    target: { value: 'cliente@example.com' },
  });
  fireEvent.change(screen.getByRole('textbox', { name: /telefone/i }), {
    target: { value: '(11) 99999-9999' },
  });
  fireEvent.change(screen.getByRole('combobox', { name: /equipamento/i }), {
    target: { value: 'Placas eletrônicas' },
  });
  fireEvent.change(screen.getByRole('combobox', { name: /tipo de falha/i }), {
    target: { value: 'Equipamento parado' },
  });
  fireEvent.change(screen.getByRole('combobox', { name: /urgência/i }), {
    target: { value: 'Alta' },
  });
  fireEvent.change(screen.getByRole('textbox', { name: /descrição do problema/i }), {
    target: { value: 'Placa eletrônica apresenta falha e impede funcionamento da máquina.' },
  });
  fireEvent.click(screen.getByLabelText(/dados informados são usados/i));
}

describe('DiagnosticContactForm', () => {
  beforeEach(() => {
    submitMock.mockReset();
    localStorage.clear();
    sessionStorage.clear();
  });

  it('renderiza campos minimos e fallbacks', () => {
    render(<DiagnosticContactForm />);

    expect(screen.getByRole('textbox', { name: /nome/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /telefone/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /equipamento/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /tipo de falha/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /urgência/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /descrição do problema/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /enviar dados por e-mail/i })).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:'),
    );
    expect(screen.getByRole('link', { name: /enviar resumo por whatsapp/i })).toHaveAttribute(
      'href',
      expect.stringContaining('https://wa.me/'),
    );
  });

  it('exibe erro de validacao antes de chamar o provider', () => {
    render(<DiagnosticContactForm />);

    fireEvent.click(screen.getByRole('button', { name: /enviar diagnóstico/i }));

    expect(screen.getByText(/informe seu nome/i)).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveTextContent('Revise os dados do formulário');
    expect(screen.getByRole('alert')).toHaveTextContent('Alguns campos precisam de ajuste');
    expect(submitMock).not.toHaveBeenCalled();
  });

  it('limpa erro visual ao editar campo depois de falha de validacao', () => {
    render(<DiagnosticContactForm />);

    fireEvent.click(screen.getByRole('button', { name: /enviar diagnóstico/i }));
    expect(screen.getByRole('alert')).toBeInTheDocument();

    fireEvent.change(screen.getByRole('textbox', { name: /nome/i }), {
      target: { value: 'Rui Diniz' },
    });

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('exibe loading e confirmacao ao enviar dados validos', async () => {
    let resolveSubmit: (value: { status: 'success' }) => void = () => undefined;
    submitMock.mockReturnValue(
      new Promise((resolve) => {
        resolveSubmit = resolve;
      }),
    );

    render(<DiagnosticContactForm />);
    fillValidForm();

    fireEvent.click(screen.getByRole('button', { name: /enviar diagnóstico/i }));

    expect(await screen.findByRole('button', { name: /enviando diagnóstico/i })).toBeDisabled();
    expect(screen.getByRole('status')).toHaveTextContent('Enviando solicitação');
    expect(screen.getByRole('status')).toHaveTextContent('Estamos encaminhando seu diagnóstico');

    resolveSubmit({ status: 'success' });

    await waitFor(() => expect(submitMock).toHaveBeenCalledTimes(1));
    expect(await screen.findByRole('status')).toHaveTextContent('Solicitação enviada');
    expect(screen.getByRole('status')).toHaveTextContent('Recebemos seu diagnóstico');
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('exibe erro comercial do provider e mantem fallback disponivel', async () => {
    submitMock.mockResolvedValue({
      status: 'error',
      message: 'Não conseguimos enviar agora. Use WhatsApp ou e-mail abaixo.',
    });

    render(<DiagnosticContactForm />);
    fillValidForm();

    fireEvent.click(screen.getByRole('button', { name: /enviar diagnóstico/i }));

    expect(await screen.findByRole('alert')).toHaveTextContent('Não foi possível enviar agora');
    expect(screen.getByRole('alert')).toHaveTextContent('Use WhatsApp ou e-mail');
    expect(
      screen.getAllByRole('link', { name: /enviar dados por e-mail/i }).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole('link', { name: /enviar resumo por whatsapp/i }).length,
    ).toBeGreaterThan(0);
  });
});
