import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { defaultOgImage, seoRoutes, siteUrl, type SeoRouteKey } from './seoConfig';

function renderAtRoute(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

function getMetaByName(name: string) {
  return document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
}

function getMetaByProperty(property: string) {
  return document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
}

describe('SEO técnico', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
  });

  const routes: SeoRouteKey[] = ['home', 'services', 'equipment', 'about', 'contact'];

  it.each(routes)('configura title, description e Open Graph da rota %s', async (route) => {
    const metadata = seoRoutes[route];

    renderAtRoute(metadata.path);

    await waitFor(() => {
      expect(document.title).toBe(metadata.title);
    });

    const canonicalUrl = `${siteUrl}${metadata.path === '/' ? '' : metadata.path}`;

    expect(getMetaByName('description')).toHaveAttribute('content', metadata.description);
    expect(getMetaByName('keywords')).toHaveAttribute('content', metadata.keywords.join(', '));
    expect(getMetaByName('robots')).toHaveAttribute('content', 'index, follow');

    expect(getMetaByProperty('og:type')).toHaveAttribute('content', 'website');
    expect(getMetaByProperty('og:locale')).toHaveAttribute('content', 'pt_BR');
    expect(getMetaByProperty('og:title')).toHaveAttribute('content', metadata.title);
    expect(getMetaByProperty('og:description')).toHaveAttribute('content', metadata.description);
    expect(getMetaByProperty('og:url')).toHaveAttribute('content', canonicalUrl);
    expect(getMetaByProperty('og:image')).toHaveAttribute('content', defaultOgImage);

    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute('href', canonicalUrl);
  });

  it('renderiza schema JSON-LD básico da empresa', async () => {
    renderAtRoute('/');

    await waitFor(() => {
      expect(document.head.querySelector('#wmg-local-business-schema')).toBeInTheDocument();
    });

    const schema = document.head.querySelector<HTMLScriptElement>('#wmg-local-business-schema');
    const parsedSchema = JSON.parse(schema?.textContent ?? '{}');

    expect(schema).toHaveAttribute('type', 'application/ld+json');
    expect(parsedSchema['@type']).toBe('LocalBusiness');
    expect(parsedSchema.name).toBe('WMG Assistência Técnica');
    expect(parsedSchema.url).toBe(siteUrl);
  });
});
