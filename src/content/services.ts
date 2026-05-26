import type { ServiceContent } from './types';

export const servicesContent: ServiceContent[] = [
  {
    slug: 'diagnostico-tecnico',
    title: 'Diagnóstico técnico',
    description:
      'Avaliação objetiva para identificar a causa da falha e orientar a melhor decisão técnica e comercial.',
    demand:
      'Quando o equipamento apresenta falha sem causa clara, parada intermitente ou comportamento instável.',
    response:
      'A WMG analisa sintomas, histórico e criticidade para indicar reparo, manutenção ou substituição com mais segurança.',
    ctaId: 'request-evaluation',
  },
  {
    slug: 'manutencao-corretiva',
    title: 'Manutenção corretiva',
    description:
      'Correção de falhas em equipamentos industriais para reduzir tempo parado e recuperar a operação.',
    demand: 'Quando a máquina já parou, apresenta erro crítico ou precisa voltar a operar com prioridade.',
    response:
      'O atendimento direciona o problema para uma avaliação técnica e uma rota de reparo conforme a criticidade.',
    ctaId: 'request-evaluation',
  },
  {
    slug: 'manutencao-preventiva',
    title: 'Manutenção preventiva',
    description:
      'Rotinas planejadas para reduzir riscos, falhas recorrentes, paradas inesperadas e custos futuros.',
    demand: 'Quando a operação precisa aumentar previsibilidade e evitar interrupções em equipamentos críticos.',
    response:
      'A WMG apoia a definição de verificações, prioridades e pontos de atenção para manutenção recorrente.',
    ctaId: 'talk-to-support',
  },
  {
    slug: 'placas-eletronicas',
    title: 'Placas eletrônicas',
    description:
      'Análise técnica e reparo de placas com foco em confiabilidade, rastreabilidade e reaproveitamento seguro.',
    demand: 'Quando a placa apresenta queima, falha intermitente, componente danificado ou suspeita de curto.',
    response:
      'A avaliação busca identificar a causa raiz antes de indicar reparo, substituição ou nova análise do conjunto.',
    ctaId: 'request-evaluation',
  },
  {
    slug: 'drives-inversores-servos',
    title: 'Drives, inversores e servo drives',
    description:
      'Suporte para acionamentos industriais usados em controle de motores, velocidade e automação.',
    demand: 'Quando inversores, drives ou servo drives exibem alarmes, perda de controle ou falha de partida.',
    response:
      'O atendimento coleta informações do equipamento e direciona a avaliação técnica para reduzir tentativa e erro.',
    ctaId: 'request-evaluation',
  },
  {
    slug: 'campo-laboratorio',
    title: 'Campo e laboratório',
    description:
      'Apoio técnico para avaliação em bancada, campo ou contexto operacional conforme a necessidade do cliente.',
    demand: 'Quando a demanda exige análise do equipamento, painel, instalação ou condição real de operação.',
    response:
      'A WMG organiza o contato inicial para entender cenário, urgência, equipamento afetado e melhor forma de atendimento.',
    ctaId: 'talk-to-support',
  },
];
