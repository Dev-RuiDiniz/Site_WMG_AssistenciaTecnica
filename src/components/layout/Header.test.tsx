import { fireEvent, render, screen, within } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renderiza navegacao principal com links para rotas reais', () => {
    render(<Header />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /navegação principal/i })).toBeInTheDocument();
    expect(screen.getByText(/assistência técnica industrial/i)).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /fale com especialista/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /soluções/i })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^sobre$/i })).toHaveAttribute('href', '/sobre');
    expect(screen.queryByRole('link', { name: /a wmg/i })).not.toBeInTheDocument();

    const serviceLinks = screen.getAllByRole('link', { name: /serviços/i });
    const equipmentLinks = screen.getAllByRole('link', { name: /equipamentos/i });

    expect(serviceLinks.some((link) => link.getAttribute('href') === '/servicos')).toBe(true);
    expect(equipmentLinks.some((link) => link.getAttribute('href') === '/equipamentos')).toBe(true);
  });

  it('controla o menu mobile com estado acessivel', () => {
    render(<Header />);

    const menuButton = screen.getByRole('button', { name: /abrir menu de navegação/i });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(menuButton);

    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('navigation', { name: /navegação mobile/i })).toBeInTheDocument();
    expect(
      screen
        .getByRole('navigation', { name: /navegação mobile/i })
        .querySelector('a[href="/servicos"]'),
    ).toBeInTheDocument();
    expect(
      screen
        .getByRole('navigation', { name: /navegação mobile/i })
        .querySelector('a[href="/servicos"]'),
    ).not.toHaveTextContent(/soluções/i);
    const mobileNavigation = screen.getByRole('navigation', { name: /navegação mobile/i });
    expect(within(mobileNavigation).getByRole('link', { name: /^sobre$/i })).toHaveAttribute(
      'href',
      '/sobre',
    );
  });
});
