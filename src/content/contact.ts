import type { ContentItem } from './types';

export const contactContent = {
  eyebrow: 'Contato / diagnóstico',
  title: 'Solicite uma avaliação técnica',
  description:
    'Preencha os dados principais do equipamento, falha e urgência para que a WMG entenda o cenário e indique o próximo passo de atendimento.',
  successMessage:
    'Diagnóstico foi enviado com sucesso. A equipe WMG recebeu sua solicitação e retornará pelos canais informados.',
  errorMessage: 'Não foi possível enviar agora. Use o fallback por e-mail ou WhatsApp.',
  validationErrorMessage: 'Revise os campos destacados antes de enviar.',
  privacyNote:
    'Os dados informados são usados para retorno comercial/técnico e encaminhados ao e-mail de atendimento da WMG por provedor externo seguro. O site não armazena os dados localmente.',
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
