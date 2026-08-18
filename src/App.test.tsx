import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { homeContent } from './content';

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

    expect(
      screen.getByRole('heading', { name: /inteligência técnica para sua operação/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /inversor, placas eletrônicas e cabos industriais/i }),
    ).toHaveAttribute('src', '/assets/campaign/wmg-industrial-hero-light.png');
    expect(screen.getByText(/equipamentos críticos/i)).toBeInTheDocument();
    expect(screen.getByText(/inversores e drives/i)).toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: /conheça nossas soluções/i }),
    ).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /solicitar atendimento/i })).not.toBeInTheDocument();
  });

  it('renderiza a pagina de servicos em /servicos', () => {
    renderAtRoute('/servicos');

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

    expect(
      screen.getByRole('heading', { name: /categorias técnicas atendidas pela wmg/i }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('img', { name: /inversor, placas eletrônicas e cabos industriais/i }),
    ).not.toBeInTheDocument();
  });

  it('renderiza a pagina sobre em /sobre', () => {
    renderAtRoute('/sobre');

    expect(
      screen.getByRole('heading', { name: /assistência técnica para operações/i }),
    ).toBeInTheDocument();
  });

  it('renderiza a pagina de contato em /contato', () => {
    renderAtRoute('/contato');

    expect(
      screen.getByRole('heading', { name: /solicite uma avaliação técnica/i }),
    ).toBeInTheDocument();
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
});
