import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renderiza a identidade principal da WMG Assistência Técnica', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /wmg assistência técnica/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/a wmg coloca sua produção de volta em operação/i),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: /solicitar avaliação técnica agora/i })[0],
    ).toBeInTheDocument();
  });

  it('aplica layout global com navegacao e secoes base', () => {
    render(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();

    const serviceLinks = screen.getAllByRole('link', { name: /serviços/i });
    expect(serviceLinks.some((link) => link.getAttribute('href') === '#servicos')).toBe(true);
    expect(document.querySelector('#servicos')).toBeInTheDocument();
    expect(document.querySelector('#sobre')).toBeInTheDocument();
    expect(document.querySelector('#contato')).toBeInTheDocument();
  });

  it('aplica tokens visuais WMG nos elementos principais', () => {
    render(<App />);

    const primaryAction = screen.getAllByRole('link', {
      name: /solicitar avaliação técnica agora/i,
    })[0];
    const servicesSection = screen.getByRole('heading', {
      name: /componentes reutilizáveis com identidade visual wmg/i,
    });

    expect(primaryAction).toHaveClass('bg-wmg-lime-500');
    expect(servicesSection).toHaveClass('text-wmg-navy-950');
  });
});
