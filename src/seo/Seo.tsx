import { useEffect, type PropsWithChildren } from 'react';
import { defaultOgImage, organizationSchema, seoRoutes, siteUrl, type SeoRouteKey } from './seoConfig';

type SeoProps = PropsWithChildren<{
  route: SeoRouteKey;
}>;

function ensureMetaByName(name: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

function ensureMetaByProperty(property: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

function ensureCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', url);
}

function ensureJsonLd() {
  const scriptId = 'wmg-local-business-schema';
  let script = document.head.querySelector<HTMLScriptElement>(`script#${scriptId}`);

  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(organizationSchema);
}

export function Seo({ route, children }: SeoProps) {
  useEffect(() => {
    const metadata = seoRoutes[route];
    const canonicalUrl = `${siteUrl}${metadata.path === '/' ? '' : metadata.path}`;

    document.title = metadata.title;

    ensureMetaByName('description', metadata.description);
    ensureMetaByName('keywords', metadata.keywords.join(', '));
    ensureMetaByName('robots', 'index, follow');

    ensureMetaByProperty('og:type', 'website');
    ensureMetaByProperty('og:locale', 'pt_BR');
    ensureMetaByProperty('og:site_name', 'WMG Assistência Técnica');
    ensureMetaByProperty('og:title', metadata.title);
    ensureMetaByProperty('og:description', metadata.description);
    ensureMetaByProperty('og:url', canonicalUrl);
    ensureMetaByProperty('og:image', defaultOgImage);

    ensureMetaByName('twitter:card', 'summary_large_image');
    ensureMetaByName('twitter:title', metadata.title);
    ensureMetaByName('twitter:description', metadata.description);
    ensureMetaByName('twitter:image', defaultOgImage);

    ensureCanonical(canonicalUrl);
    ensureJsonLd();
  }, [route]);

  return <>{children}</>;
}
