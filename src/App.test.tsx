import { render, screen, within } from '@testing-library/react';
import App from './App';
import { ctaContent, homeContent, servicesContent } from './content';

describe('App', () => {
  it('renderiza hero comercial com CTA principal visivel', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: new RegExp(homeContent.hero.title, 'i') }),
    ).toBeInTheDocument();
    expect(screen.getByText(homeContent.hero.subtitle)).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: /solicitar avaliação técnica agora/i })[0],
    ).toHaveAttribute('href', '#contato');
  });

  it('mantem layout global e navegacao por ancoras', () => {
    render(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(document.querySelector('#inicio')).toBeInTheDocument();
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

  it('renderiza dor, beneficios, credibilidade e CTA final da landing', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: homeContent.painSection.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: homeContent.benefitsSection.title })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: homeContent.credibilitySection.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: homeContent.finalCtaSection.title })).toBeInTheDocument();

    for (const benefit of homeContent.benefitsSection.benefits) {
      expect(screen.getByRole('heading', { name: benefit.title })).toBeInTheDocument();
    }
  });

  it('mantem CTAs finais conectados a destinos validos', () => {
    render(<App />);

    const primaryCta = ctaContent.find((cta) => cta.id === homeContent.finalCtaSection.primaryCtaId);
    const finalCta = screen.getByLabelText('Chamada final da página inicial');

    expect(primaryCta).toBeDefined();
    expect(within(finalCta).getByRole('link', { name: primaryCta?.label ?? '' })).toHaveAttribute(
      'href',
      '#contato',
    );
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
