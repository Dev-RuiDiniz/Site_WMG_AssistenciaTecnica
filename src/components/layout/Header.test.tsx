import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renderiza navegacao principal com links para servicos e equipamentos', () => {
    render(<Header />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /navegação principal/i })).toBeInTheDocument();

    const serviceLinks = screen.getAllByRole('link', { name: /serviços/i });
    const equipmentLinks = screen.getAllByRole('link', { name: /equipamentos/i });

    expect(serviceLinks.some((link) => link.getAttribute('href') === '#servicos')).toBe(true);
    expect(equipmentLinks.some((link) => link.getAttribute('href') === '#equipamentos')).toBe(true);
  });

  it('controla o menu mobile com estado acessivel', () => {
    render(<Header />);

    const menuButton = screen.getByRole('button', { name: /abrir menu de navegação/i });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(menuButton);

    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('navigation', { name: /navegação mobile/i })).toBeInTheDocument();
  });
});
