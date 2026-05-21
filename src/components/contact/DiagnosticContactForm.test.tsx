import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { DiagnosticContactForm } from './DiagnosticContactForm';
import { submitDiagnosticForm } from './diagnosticSubmit';

vi.mock('./diagnosticSubmit', () => ({
  submitDiagnosticForm: vi.fn(),
}));

const submitMock = vi.mocked(submitDiagnosticForm);

function fillValidForm() {
  fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: 'Rui Diniz' } });
  fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: 'cliente@example.com' } });
  fireEvent.change(screen.getByLabelText(/telefone/i), { target: { value: '(11) 99999-9999' } });
  fireEvent.change(screen.getByLabelText(/equipamento/i), { target: { value: 'Placas eletrônicas' } });
  fireEvent.change(screen.getByLabelText(/tipo de falha/i), { target: { value: 'Equipamento parado' } });
  fireEvent.change(screen.getByLabelText(/urgência/i), { target: { value: 'Alta' } });
  fireEvent.change(screen.getByLabelText(/descrição do problema/i), {
    target: { value: 'Placa eletrônica apresenta falha e impede funcionamento da máquina.' },
  });
  fireEvent.click(screen.getByLabelText(/dados informados são usados/i));
}

describe('DiagnosticContactForm', () => {
  beforeEach(() => {
    submitMock.mockReset();
  });

  it('renderiza campos minimos e fallbacks', () => {
    render(<DiagnosticContactForm />);

    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/telefone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/equipamento/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tipo de falha/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/urgência/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/descrição do problema/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /enviar dados por e-mail/i })).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:'),
    );
    expect(screen.getByRole('link', { name: /enviar resumo por whatsapp/i })).toHaveAttribute(
      'href',
      expect.stringContaining('https://wa.me/'),
    );
  });

  it('valida campos antes de chamar o provider', () => {
    render(<DiagnosticContactForm />);

    fireEvent.click(screen.getByRole('button', { name: /enviar diagnóstico/i }));

    expect(screen.getByText(/informe seu nome/i)).toBeInTheDocument();
    expect(screen.getByText(/selecione o equipamento/i)).toBeInTheDocument();
    expect(screen.getByText(/revise os campos destacados/i)).toBeInTheDocument();
    expect(submitMock).not.toHaveBeenCalled();
  });

  it('envia dados validos e exibe confirmacao do provider', async () => {
    submitMock.mockResolvedValue({ status: 'success' });

    render(<DiagnosticContactForm />);
    fillValidForm();

    fireEvent.click(screen.getByRole('button', { name: /enviar diagnóstico/i }));

    expect(await screen.findByRole('button', { name: /enviando diagnóstico/i })).toBeDisabled();

    await waitFor(() => expect(submitMock).toHaveBeenCalledTimes(1));
    expect(await screen.findByText(/diagnóstico foi enviado com sucesso/i)).toBeInTheDocument();
  });

  it('exibe erro do provider e mantem fallback disponivel', async () => {
    submitMock.mockResolvedValue({
      status: 'error',
      message: 'Não foi possível enviar o diagnóstico agora. Use o e-mail ou WhatsApp de fallback.',
    });

    render(<DiagnosticContactForm />);
    fillValidForm();

    fireEvent.click(screen.getByRole('button', { name: /enviar diagnóstico/i }));

    expect(await screen.findByText(/não foi possível enviar o diagnóstico/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /enviar dados por e-mail/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /enviar resumo por whatsapp/i })).toBeInTheDocument();
  });
});
