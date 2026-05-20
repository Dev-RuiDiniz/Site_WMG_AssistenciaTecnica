import type { CTAContent } from './types';
import { companyContent } from './company';

export const ctaContent: CTAContent[] = [
  {
    id: 'request-evaluation',
    label: 'Solicitar avaliação técnica agora',
    href: '#contato',
    purpose: 'Direcionar o visitante para o contato comercial principal.',
  },
  {
    id: 'talk-to-support',
    label: 'Falar com suporte',
    href: `mailto:${companyContent.email}`,
    purpose: 'Abrir contato por e-mail com a equipe de suporte.',
  },
  {
    id: 'view-services',
    label: 'Ver serviços',
    href: '#servicos',
    purpose: 'Levar o visitante para a seção de serviços.',
  },
];
