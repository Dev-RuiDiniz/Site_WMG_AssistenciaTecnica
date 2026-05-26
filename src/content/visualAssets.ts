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
    width: campaignImageDimensions.width,
    height: campaignImageDimensions.height,
    sizeBytes: 2_131_877,
    loading: 'lazy',
  },
  maintenance: {
    src: '/assets/campaign/wmg-industrial-maintenance.png',
    alt: 'Técnico analisando placa eletrônica em bancada de manutenção industrial',
    title: 'Manutenção industrial especializada',
  },
} as const;

export const imagePerformanceBudget = {
  maxCampaignImageBytes: 2_200_000,
  recommendedNextGenFormat: 'webp',
  recommendedMaxLcpImageBytes: 350_000,
} as const;
