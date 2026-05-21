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

    expect(screen.getByRole('heading', { name: new RegExp(homeContent.hero.title, 'i') })).toBeInTheDocument();
  });

  it('renderiza a pagina de servicos em /servicos', () => {
    renderAtRoute('/servicos');

    expect(screen.getByRole('heading', { name: homeContent.servicesSection.title })).toBeInTheDocument();
  });

  it('renderiza a pagina de equipamentos em /equipamentos', () => {
    renderAtRoute('/equipamentos');

    expect(screen.getByRole('heading', { name: /categorias tecnicas atendidas pela wmg/i })).toBeInTheDocument();
  });

  it('renderiza a pagina sobre em /sobre', () => {
    renderAtRoute('/sobre');

    expect(screen.getByRole('heading', { name: homeContent.aboutSection.title })).toBeInTheDocument();
  });

  it('renderiza a pagina de contato em /contato', () => {
    renderAtRoute('/contato');

    expect(screen.getByRole('heading', { name: /solicite uma avaliacao tecnica/i })).toBeInTheDocument();
  });

  it('mantem home enxuta e concentra provas comerciais na pagina sobre', () => {
    renderAtRoute('/');

    expect(screen.queryByRole('heading', { name: homeContent.painSection.title })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: homeContent.benefitsSection.title })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: homeContent.credibilitySection.title })).not.toBeInTheDocument();

    renderAtRoute('/sobre');

    expect(screen.getByRole('heading', { name: homeContent.painSection.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: homeContent.benefitsSection.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: homeContent.credibilitySection.title })).toBeInTheDocument();
  });
});
