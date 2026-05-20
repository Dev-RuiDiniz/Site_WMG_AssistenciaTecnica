import { render, screen } from '@testing-library/react';
import { SiteLayout } from './SiteLayout';

describe('SiteLayout', () => {
  it('renderiza header, conteudo principal e footer', () => {
    render(
      <SiteLayout>
        <section aria-label="Conteúdo de teste">Conteúdo principal</section>
      </SiteLayout>,
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByText(/conteúdo principal/i)).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
