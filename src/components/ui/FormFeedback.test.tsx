import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FormFeedback } from './FormFeedback';

describe('FormFeedback', () => {
  it('nao renderiza quando status esta idle', () => {
    const { container } = render(<FormFeedback status="idle" title="Oculto" message="Sem mensagem" />);

    expect(container).toBeEmptyDOMElement();
  });

  it('renderiza loading com status acessivel', () => {
    render(<FormFeedback status="loading" title="Enviando solicitação" message="Estamos encaminhando seu diagnóstico." />);

    expect(screen.getByRole('status')).toHaveTextContent('Enviando solicitação');
    expect(screen.getByRole('status')).toHaveTextContent('Estamos encaminhando seu diagnóstico.');
  });

  it('renderiza sucesso com confirmacao clara', () => {
    render(<FormFeedback status="success" title="Solicitação enviada" message="A equipe WMG retornará pelos canais informados." />);

    expect(screen.getByRole('status')).toHaveTextContent('Solicitação enviada');
    expect(screen.getByRole('status')).toHaveTextContent('A equipe WMG retornará pelos canais informados.');
  });

  it('renderiza erro como alerta com acao alternativa', () => {
    render(
      <FormFeedback
        status="error"
        title="Não foi possível enviar agora"
        message="Use WhatsApp ou e-mail para não perder o atendimento."
        actions={<a href="https://wa.me/5512991588460">Falar no WhatsApp</a>}
      />,
    );

    expect(screen.getByRole('alert')).toHaveTextContent('Não foi possível enviar agora');
    expect(screen.getByRole('alert')).toHaveTextContent('Use WhatsApp ou e-mail');
    expect(screen.getByRole('link', { name: /falar no whatsapp/i })).toBeInTheDocument();
  });
});
