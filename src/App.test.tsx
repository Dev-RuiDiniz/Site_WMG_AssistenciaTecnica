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
      screen.getByRole('link', { name: /solicitar avaliação técnica agora/i }),
    ).toBeInTheDocument();
  });

  it('aplica tokens visuais WMG nos elementos principais', () => {
    render(<App />);

    const primaryAction = screen.getByRole('link', {
      name: /solicitar avaliação técnica agora/i,
    });
    const servicesSection = screen.getByRole('heading', {
      name: /componentes reutilizáveis com identidade visual wmg/i,
    });

    expect(primaryAction).toHaveClass('bg-wmg-lime-500');
    expect(servicesSection).toHaveClass('text-wmg-navy-950');
  });
});
