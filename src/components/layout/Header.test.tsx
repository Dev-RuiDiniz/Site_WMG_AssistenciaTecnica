import { fireEvent, render, screen, within } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  function setScrollY(value: number) {
    Object.defineProperty(window, 'scrollY', { configurable: true, value });
    fireEvent.scroll(window);
  }

  it('mantem o cabecalho visivel no topo e durante a rolagem', () => {
    setScrollY(0);
    render(<Header />);

    const header = screen.getByRole('banner');
    expect(header).toBeVisible();
    expect(header).toHaveClass('sticky', 'top-0');

    setScrollY(48);

    expect(header).toBeVisible();
    expect(header).toHaveClass('sticky', 'top-0');
  });

  it('renderiza navegacao principal com links para rotas reais', () => {
    setScrollY(48);
    render(<Header />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    const primaryNavigation = screen.getByRole('navigation', { name: /navegação principal/i });
    expect(primaryNavigation).toBeInTheDocument();
    expect(within(primaryNavigation).getByRole('link', { name: /^equipamentos$/i })).toHaveClass(
      'text-base',
      'font-extrabold',
      'hover:text-wmg-lime-500',
    );
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
    setScrollY(48);
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
