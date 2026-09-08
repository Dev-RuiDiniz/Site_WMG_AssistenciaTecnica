import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renderiza informacoes institucionais e links rapidos', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getAllByText(/WMG Assistência Técnica/i).length).toBeGreaterThan(0);
    expect(screen.getByText('© 2019–2026 WMG Assistência Técnica.')).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /falar com suporte/i })).not.toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /suporte@wmgassistenciatecnica.com.br/i }),
    ).toHaveAttribute('href', expect.stringContaining('https://wa.me/'));
    expect(screen.getAllByRole('link', { name: /serviços/i })[0]).toHaveAttribute(
      'href',
      '/servicos',
    );
    expect(screen.getAllByRole('link', { name: /equipamentos/i })[0]).toHaveAttribute(
      'href',
      '/equipamentos',
    );
    expect(
      screen.getByRole('link', {
        name: /R\. Antônio de Deus Andrade, nº 250 - Jardim Eulalia, Taubaté - SP, 12091-040/i,
      }),
    ).toHaveAttribute(
      'href',
      'https://www.google.com/search?client=opera-gx&hs=KUD&sca_esv=19d038241e14d62e&sxsrf=APpeQnuBgyYs4mQ1TuYJvK74aTxdzsnDZA:1787095021294&q=wmg+manuten%C3%A7%C3%A3o+industrial,+el%C3%A9trica,+eletr%C3%B4nica+e+servo+motores+taubat%C3%A9+endere%C3%A7o&ludocid=15377243400275212637&sa=X&ved=2ahUKEwiQ37Hfp6uWAxUZqpUCHYzwMp0Q6BN6BAg2EAI',
    );
  });
});
