import type { CTAContent } from './types';
import { buildWhatsAppLink, defaultWhatsAppMessage } from '../components/whatsapp/whatsappLink';
import { companyContent } from './company';

export const ctaContent: CTAContent[] = [
  {
    id: 'request-evaluation',
    label: 'Solicitar avaliação técnica agora',
    href: '/contato',
    purpose: 'Direcionar o visitante para o contato comercial principal.',
  },
  {
    id: 'talk-to-support',
    label: 'Falar com suporte',
    href: buildWhatsAppLink(companyContent.phone, defaultWhatsAppMessage),
    purpose: 'Abrir conversa no WhatsApp com mensagem pré-preenchida para a equipe de suporte.',
  },
  {
    id: 'view-services',
    label: 'Ver serviços',
    href: '/servicos',
    purpose: 'Levar o visitante para a seção de serviços.',
  },
];
