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

const heroImageDimensions = {
  width: 1672,
  height: 941,
};

export const visualAssets: Record<
  'hero' | 'growthMaintenance' | 'productionStop' | 'maintenance',
  VisualAsset
> = {
  hero: {
    src: '/assets/campaign/wmg-industrial-hero-light.png',
    alt: 'Inversor, placas eletrônicas e cabos industriais em composição clara de estúdio',
    title: 'Inversor, placas e cabos industriais',
    width: heroImageDimensions.width,
    height: heroImageDimensions.height,
    sizeBytes: 1_283_000,
    loading: 'eager',
    fetchPriority: 'high',
  },
  growthMaintenance: {
    src: '/assets/campaign/wmg-growth-maintenance.png',
    alt: 'Técnico industrial realizando manutenção em painel com interface digital de diagnóstico',
    title: 'Manutenção técnica orientada a crescimento',
    width: campaignImageDimensions.width,
    height: campaignImageDimensions.height,
    sizeBytes: 2_067_418,
    loading: 'lazy',
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
    width: campaignImageDimensions.width,
    height: campaignImageDimensions.height,
    sizeBytes: 2_103_559,
    loading: 'lazy',
  },
};

export const imagePerformanceBudget = {
  maxCampaignImageBytes: 2_200_000,
  recommendedNextGenFormat: 'webp',
  recommendedMaxLcpImageBytes: 350_000,
} as const;

export type HeroVideoAsset = {
  poster: string;
  posterAlt: string;
  sources: Array<{ src: string; type: string }>;
  note: string;
};

/**
 * Placeholder de vídeo institucional (royalty-free) para o hero da Home.
 * Substituir `sources` por vídeo real da WMG assim que disponível, mantendo
 * o `poster` como fallback estático para navegadores sem suporte a vídeo
 * e para `prefers-reduced-motion`.
 */
export const heroVideo: HeroVideoAsset = {
  poster: visualAssets.hero.src,
  posterAlt: visualAssets.hero.alt,
  sources: [
    {
      src: 'https://assets.mixkit.co/videos/preview/mixkit-industrial-machine-in-a-factory-4k-33921-large.mp4',
      type: 'video/mp4',
    },
  ],
  note: 'Placeholder royalty-free. Substituir por vídeo institucional real da WMG quando disponível.',
};
