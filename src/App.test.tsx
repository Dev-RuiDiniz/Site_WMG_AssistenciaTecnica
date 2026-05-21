import { render, screen } from '@testing-library/react';
import App from './App';
import { equipmentContent, homeContent, servicesContent } from './content';

describe('App', () => {
  it('mantem layout global e ancoras principais', () => {
    render(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(document.querySelector('#inicio')).toBeInTheDocument();
    expect(document.querySelector('#servicos')).toBeInTheDocument();
    expect(document.querySelector('#equipamentos')).toBeInTheDocument();
    expect(document.querySelector('#sobre')).toBeInTheDocument();
    expect(document.querySelector('#contato')).toBeInTheDocument();
  });

  it('renderiza hero comercial com CTA principal visivel', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: new RegExp(homeContent.hero.title, 'i') })).toBeInTheDocument();
    expect(screen.getByText(homeContent.hero.subtitle)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /solicitar avaliação técnica agora/i })[0]).toHaveAttribute(
      'href',
      '#contato',
    );
  });

  it('renderiza servicos versionados', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: homeContent.servicesSection.title })).toBeInTheDocument();

    for (const service of servicesContent) {
      expect(screen.getAllByRole('heading', { name: service.title }).length).toBeGreaterThan(0);
      expect(screen.getByText(service.description)).toBeInTheDocument();
      expect(screen.getByText(service.demand)).toBeInTheDocument();
      expect(screen.getByText(service.response)).toBeInTheDocument();
    }
  });

  it('renderiza equipamentos atendidos com categorias obrigatorias', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Categorias técnicas atendidas pela WMG' })).toBeInTheDocument();

    for (const equipment of equipmentContent) {
      expect(screen.getAllByRole('heading', { name: equipment.title }).length).toBeGreaterThan(0);
      expect(screen.getByText(equipment.description)).toBeInTheDocument();
    }

    expect(screen.getAllByRole('heading', { name: 'Placas eletrônicas' }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('heading', { name: 'CNCs' }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('heading', { name: 'Fontes industriais' }).length).toBeGreaterThan(0);
  });

  it('mantem secoes comerciais da landing', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: homeContent.painSection.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: homeContent.benefitsSection.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: homeContent.credibilitySection.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: homeContent.finalCtaSection.title })).toBeInTheDocument();
  });
});
