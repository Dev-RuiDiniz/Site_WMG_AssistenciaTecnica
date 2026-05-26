import type { HomeContent } from './types';

export const homeContent: HomeContent = {
  hero: {
    eyebrow: 'Assistência técnica industrial',
    title: 'WMG Assistência Técnica',
    subtitle:
      'Reduza paradas, proteja sua produção e recupere equipamentos industriais com suporte técnico especializado.',
    description:
      'Atendimento para inversores, placas eletrônicas, servo drives, IHMs, CLPs e painéis elétricos industriais, com foco em diagnóstico claro e retorno seguro da operação.',
    primaryCtaId: 'request-evaluation',
    secondaryCtaId: 'view-services',
    highlights: [
      {
        title: 'Diagnóstico objetivo',
        description: 'Avaliação técnica para identificar falhas e orientar o próximo passo com clareza.',
      },
      {
        title: 'Foco na operação',
        description: 'Prioridade para reduzir tempo parado e apoiar a continuidade produtiva.',
      },
      {
        title: 'Equipamentos industriais',
        description: 'Atendimento voltado a componentes críticos de automação e elétrica industrial.',
      },
    ],
  },
  painSection: {
    eyebrow: 'O problema',
    title: 'Máquina parada compromete prazo, equipe e faturamento',
    description:
      'Quando um equipamento crítico falha, cada hora sem diagnóstico aumenta o risco de atraso, retrabalho e custo operacional. A página inicial da WMG apresenta rapidamente uma rota de contato para avaliação técnica.',
    points: [
      {
        title: 'Parada inesperada',
        description: 'Falhas em inversores, placas, servo drives e comandos podem interromper linhas inteiras.',
      },
      {
        title: 'Diagnóstico incerto',
        description: 'Trocas sem análise técnica elevam custos e podem não resolver a causa raiz.',
      },
      {
        title: 'Pressão por retorno',
        description: 'A produção precisa de uma resposta clara para decidir entre reparo, substituição ou manutenção.',
      },
    ],
  },
  servicesSection: {
    eyebrow: 'Serviços',
    title: 'Soluções técnicas para manter sua operação industrial ativa',
    description:
      'A WMG organiza serviços, equipamentos e mensagens comerciais em conteúdo versionado para facilitar evolução, revisão e manutenção do site.',
  },
  benefitsSection: {
    eyebrow: 'Benefícios',
    title: 'Uma página inicial pensada para conversão e decisão rápida',
    description:
      'A estrutura destaca problema, solução, serviços e contato para que o visitante entenda a oferta sem depender de textos longos.',
    benefits: [
      {
        title: 'Oferta clara',
        description: 'O visitante entende em poucos segundos o tipo de assistência técnica oferecida.',
      },
      {
        title: 'CTA visível',
        description: 'A ação principal conduz para contato e solicitação de avaliação técnica.',
      },
      {
        title: 'Conteúdo escaneável',
        description: 'Blocos curtos, títulos diretos e cards reduzem atrito na leitura.',
      },
    ],
  },
  aboutSection: {
    eyebrow: 'Sobre',
    title: 'Base preparada para páginas comerciais',
    description:
      'O layout global e o conteúdo centralizado permitem evoluir novas seções, campanhas e páginas de serviço sem duplicar navegação, contatos ou textos institucionais.',
  },
  credibilitySection: {
    eyebrow: 'Credibilidade',
    title: 'Atendimento orientado a equipamentos críticos da indústria',
    description:
      'A comunicação foi estruturada para transmitir segurança técnica sem usar promessas ou números não validados pelo cliente.',
    items: [
      {
        title: 'Especialização industrial',
        description: 'Conteúdo focado em equipamentos e dores reais de manutenção elétrica e automação.',
      },
      {
        title: 'Conteúdo versionado',
        description: 'Textos comerciais ficam rastreáveis no Git e podem ser revisados a cada tarefa.',
      },
      {
        title: 'Evolução segura',
        description: 'Estrutura multipágina com rotas reais, testes e documentação para reduzir risco de regressão.',
      },
    ],
  },
  contactSection: {
    eyebrow: 'Contato',
    title: 'Solicite uma avaliação técnica',
    description:
      'Entre em contato para diagnóstico, manutenção preventiva e suporte especializado para equipamentos industriais.',
    ctaId: 'talk-to-support',
  },
  finalCtaSection: {
    eyebrow: 'Próximo passo',
    title: 'Transforme parada técnica em plano de ação',
    description:
      'Envie sua solicitação para que a equipe avalie o cenário, equipamento afetado e prioridade de atendimento.',
    primaryCtaId: 'request-evaluation',
    secondaryCtaId: 'view-services',
  },
};
