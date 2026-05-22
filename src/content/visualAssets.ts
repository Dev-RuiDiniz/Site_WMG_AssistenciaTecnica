export type VisualAsset = {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  sizeBytes: number;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
};

const campaignImageDimensions = {
  width: 1536,
  height: 1024,
};

export const visualAssets = {
  hero: {
    src: '/assets/campaign/wmg-industrial-hero.png',
    alt: 'Equipamentos de automacao industrial e placas eletronicas em ambiente tecnico azul',
    title: 'Automacao industrial e eletronica tecnica',
    width: campaignImageDimensions.width,
    height: campaignImageDimensions.height,
    sizeBytes: 1_748_229,
    loading: 'eager',
    fetchPriority: 'high',
  },
  growthMaintenance: {
    src: '/assets/campaign/wmg-growth-maintenance.png',
    alt: 'Tecnico industrial realizando manutencao em painel com interface digital de diagnostico',
    title: 'Manutencao tecnica orientada a crescimento',
    width: campaignImageDimensions.width,
    height: campaignImageDimensions.height,
    sizeBytes: 2_023_963,
    loading: 'lazy',
  },
  productionStop: {
    src: '/assets/campaign/wmg-production-stop.png',
    alt: 'Linha industrial com painel eletrico aberto e alerta de producao interrompida',
    title: 'Falhas industriais geram parada operacional',
    width: campaignImageDimensions.width,
    height: campaignImageDimensions.height,
    sizeBytes: 2_131_877,
    loading: 'lazy',
  },
  maintenance: {
    src: '/assets/campaign/wmg-industrial-maintenance.png',
    alt: 'Tecnico analisando placa eletronica em bancada de manutencao industrial',
    title: 'Manutencao industrial especializada',
    width: campaignImageDimensions.width,
    height: campaignImageDimensions.height,
    sizeBytes: 2_088_005,
    loading: 'lazy',
  },
} as const;

export const imagePerformanceBudget = {
  maxCampaignImageBytes: 2_200_000,
  recommendedNextGenFormat: 'webp',
  recommendedMaxLcpImageBytes: 350_000,
} as const;
