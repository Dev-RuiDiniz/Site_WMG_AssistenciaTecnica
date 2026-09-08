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
    title: 'Assistência Técnica no Vale do Paraíba | WMG',
    description:
      'Assistência técnica industrial em Taubaté e no Vale do Paraíba, com atendimento em São Paulo e outras regiões do Brasil sob consulta para inversores, servo drives, IHMs, CLPs e placas eletrônicas.',
    keywords: [
      'assistência técnica no Vale do Paraíba',
      'manutenção industrial em Taubaté',
      'assistência técnica em São Paulo',
      'assistência técnica industrial no Brasil',
      'inversores de frequência',
      'servo drives',
      'CLPs',
    ],
  },
  services: {
    path: '/servicos',
    title: 'Manutenção Industrial no Vale do Paraíba | WMG',
    description:
      'Diagnóstico, manutenção corretiva e preventiva para equipamentos industriais em Taubaté e no Vale do Paraíba, com atendimento em todo o estado de São Paulo e suporte sob consulta no Brasil.',
    keywords: [
      'manutenção industrial no Vale do Paraíba',
      'manutenção industrial em Taubaté',
      'manutenção industrial em São Paulo',
      'manutenção corretiva',
      'manutenção preventiva',
      'suporte técnico industrial',
    ],
  },
  equipment: {
    path: '/equipamentos',
    title: 'Equipamentos Industriais no Vale do Paraíba | WMG',
    description:
      'Reparo e suporte técnico para inversores de frequência, servo drives, placas eletrônicas, IHMs, CLPs e painéis elétricos em Taubaté, no Vale do Paraíba e em São Paulo.',
    keywords: [
      'equipamentos industriais no Vale do Paraíba',
      'reparo de inversores em Taubaté',
      'assistência para servo drives em São Paulo',
      'placas eletrônicas industriais',
      'IHMs',
      'CLPs',
    ],
  },
  about: {
    path: '/sobre',
    title: 'Sobre a WMG | Assistência Técnica no Vale do Paraíba',
    description:
      'Conheça a WMG Assistência Técnica, especializada em suporte e manutenção de equipamentos industriais em Taubaté, no Vale do Paraíba e no estado de São Paulo.',
    keywords: [
      'WMG Assistência Técnica',
      'assistência técnica no Vale do Paraíba',
      'manutenção industrial em Taubaté',
      'manutenção industrial em São Paulo',
    ],
  },
  contact: {
    path: '/contato',
    title: 'Contato | Assistência Técnica no Vale do Paraíba',
    description:
      'Solicite avaliação técnica para equipamentos industriais em Taubaté e no Vale do Paraíba. A WMG também atende empresas em São Paulo e outras regiões sob consulta.',
    keywords: [
      'contato assistência técnica no Vale do Paraíba',
      'avaliação técnica em Taubaté',
      'suporte industrial em São Paulo',
      'WhatsApp WMG',
    ],
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
  areaServed: [
    {
      '@type': 'AdministrativeArea',
      name: 'Vale do Paraíba e região',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Estado de São Paulo',
    },
    {
      '@type': 'Country',
      name: 'Brasil',
    },
  ],
  serviceType: [
    'Assistência técnica industrial',
    'Manutenção industrial',
    'Reparo de inversores, servo drives, IHMs e CLPs',
  ],
  knowsAbout: [
    'Inversores de frequência',
    'Placas eletrônicas industriais',
    'Servo drives',
    'IHMs',
    'CLPs',
    'Painéis elétricos industriais',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Taubaté',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  image: defaultOgImage,
};
