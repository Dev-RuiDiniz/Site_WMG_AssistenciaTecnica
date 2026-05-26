export type VisualAsset = {
  src: string;
  alt: string;
  title: string;
};

export const visualAssets = {
  hero: {
    src: '/assets/campaign/wmg-industrial-hero.png',
    alt: 'Equipamentos de automação industrial e placas eletrônicas em ambiente técnico azul',
    title: 'Automação industrial e eletrônica técnica',
  },
  growthMaintenance: {
    src: '/assets/campaign/wmg-growth-maintenance.png',
    alt: 'Técnico industrial realizando manutenção em painel com interface digital de diagnóstico',
    title: 'Manutenção técnica orientada a crescimento',
  },
  productionStop: {
    src: '/assets/campaign/wmg-production-stop.png',
    alt: 'Linha industrial com painel elétrico aberto e alerta de produção interrompida',
    title: 'Falhas industriais geram parada operacional',
  },
  maintenance: {
    src: '/assets/campaign/wmg-industrial-maintenance.png',
    alt: 'Técnico analisando placa eletrônica em bancada de manutenção industrial',
    title: 'Manutenção industrial especializada',
  },
} as const;
