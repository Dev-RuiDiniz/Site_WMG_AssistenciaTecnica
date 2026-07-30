import { render, screen } from '@testing-library/react';
import { RevealOnScroll } from './RevealOnScroll';

describe('RevealOnScroll', () => {
  it('renderiza o conteudo filho normalmente', () => {
    render(
      <RevealOnScroll>
        <p>Conteúdo revelado</p>
      </RevealOnScroll>,
    );

    expect(screen.getByText(/conteúdo revelado/i)).toBeInTheDocument();
  });

  it('renderiza como section quando solicitado', () => {
    render(
      <RevealOnScroll as="section">
        <p>Conteúdo em secao</p>
      </RevealOnScroll>,
    );

    expect(screen.getByText(/conteúdo em secao/i).closest('section')).toBeInTheDocument();
  });
});
