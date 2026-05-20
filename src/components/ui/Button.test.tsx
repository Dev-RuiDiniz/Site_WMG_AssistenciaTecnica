import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renderiza a variante primaria com tokens WMG', () => {
    render(<Button>Solicitar avaliação</Button>);

    const button = screen.getByRole('button', { name: /solicitar avaliação/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-wmg-lime-500');
    expect(button).toHaveClass('text-wmg-navy-950');
  });

  it('renderiza como link quando recebe href', () => {
    render(
      <Button href="mailto:suporte@wmgassistenciatecnica.com.br" variant="secondary">
        Falar com suporte
      </Button>,
    );

    const link = screen.getByRole('link', { name: /falar com suporte/i });

    expect(link).toHaveAttribute('href', 'mailto:suporte@wmgassistenciatecnica.com.br');
    expect(link).toHaveClass('border-wmg-cyan-400/60');
  });
});
