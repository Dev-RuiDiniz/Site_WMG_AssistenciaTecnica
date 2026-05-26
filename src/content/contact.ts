import type { ContentItem } from './types';

export const contactContent = {
  eyebrow: 'Contato / diagnóstico',
  title: 'Solicite uma avaliação técnica',
  description:
    'Preencha os dados principais do equipamento, falha e urgência para que a WMG entenda o cenário e indique o próximo passo de atendimento.',
  loadingTitle: 'Enviando solicitação',
  loadingMessage: 'Estamos encaminhando seu diagnóstico para a equipe WMG. Isso pode levar alguns segundos.',
  successTitle: 'Solicitação enviada',
  successMessage: 'Recebemos seu diagnóstico. A equipe WMG retornará pelos canais informados.',
  errorTitle: 'Não foi possível enviar agora',
  errorMessage: 'Use o WhatsApp ou e-mail abaixo para falar com a equipe WMG sem perder o atendimento.',
  validationErrorTitle: 'Revise os dados do formulário',
  validationErrorMessage: 'Alguns campos precisam de ajuste antes do envio.',
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
