import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renderiza informacoes institucionais e links rapidos', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText(/WMG Assistência Técnica/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /suporte@wmgassistenciatecnica.com.br/i })).toHaveAttribute(
      'href',
      'mailto:suporte@wmgassistenciatecnica.com.br',
    );
    expect(screen.getAllByRole('link', { name: /serviços/i })[0]).toHaveAttribute('href', '#servicos');
  });
});
