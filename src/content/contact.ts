import type { ContentItem } from './types';

export const contactContent = {
  eyebrow: 'Contato / diagnóstico',
  title: 'Solicite uma avaliação técnica',
  description:
    'Preencha os dados principais do equipamento, falha e urgência para que a WMG entenda o cenário e indique o próximo passo de atendimento.',
  successMessage:
    'Solicitação registrada na página. Use o fallback por e-mail ou WhatsApp para encaminhar os dados à equipe WMG enquanto a integração de envio não estiver ativa.',
  errorMessage: 'Revise os campos destacados antes de enviar.',
  privacyNote:
    'Os dados informados são usados apenas para retorno comercial/técnico. Nesta etapa, o site não armazena nem envia dados para backend.',
  mailtoLabel: 'Enviar dados por e-mail',
  whatsappLabel: 'Enviar resumo por WhatsApp',
};

export const urgencyOptions: ContentItem[] = [
  {
    slug: 'baixa',
    title: 'Baixa',
    description: 'Equipamento em observação ou manutenção planejada.',
  },
  {
    slug: 'media',
    title: 'Média',
    description: 'Falha recorrente com impacto parcial na operação.',
  },
  {
    slug: 'alta',
    title: 'Alta',
    description: 'Equipamento parado ou risco imediato para produção.',
  },
];

export const failureTypeOptions: ContentItem[] = [
  {
    slug: 'equipamento-parado',
    title: 'Equipamento parado',
    description: 'Máquina ou componente não opera.',
  },
  {
    slug: 'falha-intermitente',
    title: 'Falha intermitente',
    description: 'Problema aparece e desaparece durante a operação.',
  },
  {
    slug: 'alarme-erro',
    title: 'Alarme ou erro',
    description: 'Equipamento exibe código, alarme ou mensagem de falha.',
  },
  {
    slug: 'manutencao-planejada',
    title: 'Manutenção planejada',
    description: 'Avaliação preventiva ou programação de atendimento.',
  },
];
