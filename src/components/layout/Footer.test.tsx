import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renderiza informacoes institucionais e links rapidos', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getAllByText(/WMG Assistência Técnica/i).length).toBeGreaterThan(0);
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
  });
});
