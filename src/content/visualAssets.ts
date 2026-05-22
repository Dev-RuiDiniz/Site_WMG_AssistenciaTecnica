export type VisualAsset = {
  src: string;
  alt: string;
  title: string;
};

export const visualAssets = {
  hero: {
    src: '/assets/campaign/wmg-industrial-hero.png',
    alt: 'Equipamentos de automacao industrial e placas eletronicas em ambiente tecnico azul',
    title: 'Automacao industrial e eletronica tecnica',
  },
  growthMaintenance: {
    src: '/assets/campaign/wmg-growth-maintenance.png',
    alt: 'Tecnico industrial realizando manutencao em painel com interface digital de diagnostico',
    title: 'Manutencao tecnica orientada a crescimento',
  },
  productionStop: {
    src: '/assets/campaign/wmg-production-stop.png',
    alt: 'Linha industrial com painel eletrico aberto e alerta de producao interrompida',
    title: 'Falhas industriais geram parada operacional',
  },
  maintenance: {
    src: '/assets/campaign/wmg-industrial-maintenance.png',
    alt: 'Tecnico analisando placa eletronica em bancada de manutencao industrial',
    title: 'Manutencao industrial especializada',
  },
} as const;
