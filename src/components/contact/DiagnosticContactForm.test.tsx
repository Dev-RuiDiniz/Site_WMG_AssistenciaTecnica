import { fireEvent, render, screen } from '@testing-library/react';
import { DiagnosticContactForm } from './DiagnosticContactForm';

describe('DiagnosticContactForm', () => {
  it('renderiza campos minimos e fallbacks', () => {
    render(<DiagnosticContactForm />);

    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/telefone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/equipamento/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tipo de falha/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/urgência/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/descrição do problema/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /enviar dados por e-mail/i })).toHaveAttribute('href', expect.stringContaining('mailto:'));
    expect(screen.getByRole('link', { name: /enviar resumo por whatsapp/i })).toHaveAttribute('href', expect.stringContaining('https://wa.me/'));
  });

  it('exibe erros ao submeter formulario vazio', () => {
    render(<DiagnosticContactForm />);

    fireEvent.click(screen.getByRole('button', { name: /enviar diagnóstico/i }));

    expect(screen.getByText(/informe seu nome/i)).toBeInTheDocument();
    expect(screen.getByText(/selecione o equipamento/i)).toBeInTheDocument();
    expect(screen.getByText(/revise os campos destacados/i)).toBeInTheDocument();
  });

  it('exibe confirmacao clara ao submeter dados validos', () => {
    render(<DiagnosticContactForm />);

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
    fireEvent.click(screen.getByRole('button', { name: /enviar diagnóstico/i }));

    expect(screen.getByText(/solicitação registrada na página/i)).toBeInTheDocument();
  });
});
