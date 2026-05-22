import { companyContent } from '../content/company';

export type SeoRouteKey = 'home' | 'services' | 'equipment' | 'about' | 'contact';

export type SeoMetadata = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
};

export const siteUrl = 'https://www.wmgassistenciatecnica.com.br';
export const defaultOgImage = `${siteUrl}/og-wmg-assistencia-tecnica.svg`;

export const seoRoutes: Record<SeoRouteKey, SeoMetadata> = {
  home: {
    path: '/',
    title: 'WMG Assistência Técnica | Manutenção industrial em Taubaté - SP',
    description:
      'Assistência técnica industrial em Taubaté para inversores, servo drives, IHMs, CLPs, placas eletrônicas e painéis elétricos.',
    keywords: ['assistência técnica industrial', 'manutenção industrial', 'Taubaté', 'inversores', 'CLP'],
  },
  services: {
    path: '/servicos',
    title: 'Serviços industriais | WMG Assistência Técnica',
    description:
      'Conheça os serviços de manutenção corretiva, preventiva e suporte técnico para equipamentos industriais atendidos pela WMG.',
    keywords: ['serviços industriais', 'manutenção corretiva', 'manutenção preventiva', 'suporte técnico industrial'],
  },
  equipment: {
    path: '/equipamentos',
    title: 'Equipamentos atendidos | WMG Assistência Técnica',
    description:
      'Atendimento técnico para inversores de frequência, servo drives, placas eletrônicas, IHMs, CLPs e painéis elétricos industriais.',
    keywords: ['equipamentos industriais', 'inversores de frequência', 'servo drives', 'IHMs', 'CLPs'],
  },
  about: {
    path: '/sobre',
    title: 'Sobre a WMG | Assistência técnica industrial',
    description:
      'Saiba mais sobre a WMG Assistência Técnica, especializada em suporte e manutenção de equipamentos industriais em Taubaté e região.',
    keywords: ['sobre a WMG', 'assistência técnica industrial', 'manutenção industrial em Taubaté'],
  },
  contact: {
    path: '/contato',
    title: 'Contato | WMG Assistência Técnica',
    description:
      'Solicite avaliação técnica para equipamentos industriais com a WMG Assistência Técnica por telefone, e-mail ou WhatsApp.',
    keywords: ['contato assistência técnica', 'avaliação técnica', 'suporte industrial', 'WhatsApp WMG'],
  },
};

export const defaultSeo = seoRoutes.home;

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: companyContent.name,
  description: companyContent.description,
  telephone: companyContent.phone,
  email: companyContent.email,
  url: siteUrl,
  areaServed: companyContent.location,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Taubaté',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  image: defaultOgImage,
};
