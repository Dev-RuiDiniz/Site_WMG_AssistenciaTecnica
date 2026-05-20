import { render, screen } from '@testing-library/react';
import App from './App';
import { homeContent, servicesContent } from './content';

describe('App', () => {
  it('renderiza a identidade principal da WMG Assistência Técnica', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: new RegExp(homeContent.hero.title, 'i') }),
    ).toBeInTheDocument();
    expect(screen.getByText(homeContent.hero.subtitle)).toBeInTheDocument();
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

  it('renderiza servicos a partir do conteudo versionado', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: homeContent.servicesSection.title }),
    ).toBeInTheDocument();

    for (const service of servicesContent) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument();
      expect(screen.getByText(service.description)).toBeInTheDocument();
    }
  });

  it('aplica tokens visuais WMG nos elementos principais', () => {
    render(<App />);

    const primaryAction = screen.getAllByRole('link', {
      name: /solicitar avaliação técnica agora/i,
    })[0];
    const servicesSection = screen.getByRole('heading', {
      name: homeContent.servicesSection.title,
    });

    expect(primaryAction).toHaveClass('bg-wmg-lime-500');
    expect(servicesSection).toHaveClass('text-wmg-navy-950');
  });
});
