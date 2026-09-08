import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { heroVideo, homeContent } from './content';

function renderAtRoute(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe('App routes', () => {
  it('renderiza a home em /', () => {
    renderAtRoute('/');

    const heroSection = screen.getByRole('region', {
      name: /inteligência técnica para sua operação/i,
    });

    expect(
      screen.getByRole('heading', { name: /inteligência técnica para sua operação/i }),
    ).toBeInTheDocument();
    expect(heroSection).toHaveClass('relative', 'grid', 'w-full', 'md:grid-cols-[2fr_3fr]');
    const heroCopy = heroSection.querySelector('[data-hero-copy]');
    expect(heroCopy).toHaveClass('bg-wmg-navy-800');
    expect(within(heroCopy as HTMLElement).getByText(/automação, elétrica e eletrônica industrial/i)).toHaveClass(
      'text-wmg-lime-400',
    );
    expect(screen.getByRole('heading', { name: /inteligência técnica para sua operação/i })).toHaveClass(
      'text-white',
    );
    expect(heroSection.querySelector('#hero-title span')).toHaveClass('text-wmg-lime-400');
    expect(within(heroCopy as HTMLElement).getByText(/diagnóstico, reparo e manutenção/i)).toHaveClass(
      'text-white',
    );
    expect(heroSection).toHaveClass('min-h-[32rem]', 'md:min-h-[36rem]');
    const heroVideoElement = heroSection.querySelector('video');
    expect(heroVideoElement).toBeInTheDocument();
    expect(heroVideoElement).toHaveAttribute('poster', heroVideo.poster);
    expect(heroVideoElement).toHaveAttribute('autoplay');
    expect(heroVideoElement).toHaveProperty('muted', true);
    expect(heroVideoElement).toHaveAttribute('loop');
    expect(heroVideoElement).toHaveAttribute('playsinline');
    expect(heroVideoElement).toHaveClass('object-cover');
    expect(heroVideoElement?.querySelector('source')).toHaveAttribute(
      'src',
      heroVideo.sources[0].src,
    );
    expect(
      screen.queryByRole('img', { name: /inversor, placas eletrônicas e cabos industriais/i }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/equipamentos críticos/i)).not.toBeInTheDocument();
    expect(screen.getByText(/inversores e drives/i)).toBeInTheDocument();
    const solutionSection = screen.getByRole('region', { name: /soluções atendidas/i });
    expect(solutionSection.firstElementChild).toHaveClass('w-full');
    const solutionCards = within(solutionSection).getAllByRole('link');
    expect(solutionCards).toHaveLength(3);
    expect(solutionCards[0]).toHaveClass('relative', 'overflow-hidden');
    expect(solutionCards[0].querySelector('[data-solution-background]')).toHaveAttribute(
      'src',
      '/assets/campaign/wmg-inversor-background.png',
    );
    expect(solutionCards[0].querySelector('[data-solution-background]')).toHaveClass(
      'blur-[2px]',
    );
    expect(within(solutionCards[0]).getByText('Inversores e drives')).toHaveClass('text-white');
    expect(solutionCards[1].querySelector('[data-solution-background]')).toHaveAttribute(
      'src',
      '/assets/campaign/wmg-placa-background.png',
    );
    expect(solutionCards[2].querySelector('[data-solution-background]')).toHaveAttribute(
      'src',
      '/assets/campaign/wmg-painel-background.png',
    );
    expect(
      screen.queryByRole('link', { name: /conheça nossas soluções/i }),
    ).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /solicitar atendimento/i })).not.toBeInTheDocument();
  });

  it('renderiza a pagina de servicos em /servicos', () => {
    renderAtRoute('/servicos');

    const servicesPage = screen.getByRole('region', { name: /serviços/i }).closest('[data-services-page]');
    expect(servicesPage).toHaveClass('bg-wmg-navy-800');
    expect(
      screen.getByRole('heading', { name: homeContent.servicesSection.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /diagnóstico técnico/i })).toBeInTheDocument();
    expect(document.querySelector('video source')).toHaveAttribute(
      'src',
      '/assets/campaign/wmg-services-background.mp4',
    );
    expect(
      screen.queryByRole('img', { name: /técnico industrial realizando manutenção/i }),
    ).not.toBeInTheDocument();
  });

  it('renderiza a pagina de equipamentos em /equipamentos', () => {
    renderAtRoute('/equipamentos');

    const equipmentGrid = screen.getByRole('region', { name: /categorias de equipamentos/i });
    const equipmentPage = equipmentGrid.closest('[data-equipment-page]');

    expect(equipmentPage).toHaveClass('bg-wmg-navy-800');

    expect(
      screen.getByRole('heading', { name: /categorias técnicas atendidas pela wmg/i }),
    ).toHaveClass('text-white');
    expect(within(equipmentGrid).getAllByRole('heading', { level: 2 })).not.toHaveLength(0);
    within(equipmentGrid)
      .getAllByRole('heading', { level: 2 })
      .forEach((heading) => expect(heading).toHaveClass('text-center'));
    expect(
      screen.queryByRole('img', { name: /inversor, placas eletrônicas e cabos industriais/i }),
    ).not.toBeInTheDocument();
  });

  it('renderiza a pagina sobre em /sobre', () => {
    renderAtRoute('/sobre');

    expect(screen.getByText(homeContent.aboutSection.eyebrow, { selector: 'p' })).toHaveClass(
      'text-center',
      'text-base',
    );
    expect(
      screen.getByRole('heading', { name: /assistência técnica para operações/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(homeContent.howItWorksSection.eyebrow, { selector: 'p' })).toHaveClass(
      'text-center',
      'text-base',
    );
    expect(screen.getByRole('heading', { name: homeContent.howItWorksSection.title })).toHaveClass(
      'text-center',
    );

    homeContent.painSection.points.forEach((point) => {
      expect(screen.getByRole('heading', { name: point.title })).toHaveClass('text-center');
      expect(screen.getByText(point.description)).toHaveClass('text-center');
    });

    homeContent.howItWorksSection.steps.forEach((step) => {
      expect(screen.getByRole('heading', { name: step.title })).toHaveClass('text-center');
      expect(screen.getByText(step.description)).toHaveClass('text-center');
      expect(screen.queryByText(step.step)).not.toBeInTheDocument();
    });
  });

  it('renderiza a pagina de contato em /contato', () => {
    renderAtRoute('/contato');

    const contactHeading = screen.getByRole('heading', {
      level: 1,
      name: /solicite uma avaliação técnica/i,
    });

    expect(contactHeading).toBeInTheDocument();
    expect(contactHeading).toHaveClass('font-black', 'text-wmg-navy-950');
    expect(
      screen.queryByRole('img', { name: /técnico industrial realizando manutenção/i }),
    ).not.toBeInTheDocument();
  });

  it('mantem provas comerciais na home e aprofunda contexto na pagina sobre', () => {
    renderAtRoute('/');

    expect(
      screen.getByRole('heading', { name: /mais que reparo\. performance/i }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: homeContent.benefitsSection.title }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: homeContent.credibilitySection.title }),
    ).not.toBeInTheDocument();

    renderAtRoute('/sobre');

    expect(
      screen.getByRole('heading', { name: homeContent.painSection.title }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: homeContent.benefitsSection.title }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: homeContent.credibilitySection.title }),
    ).not.toBeInTheDocument();
  });

  it('separa a chamada final do rodape com uma linha fina', () => {
    renderAtRoute('/');

    expect(screen.getByRole('region', { name: /chamada final da página inicial/i })).toHaveClass(
      'border-b',
    );
  });
});
