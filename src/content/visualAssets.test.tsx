import { render, screen } from '@testing-library/react';
import { MediaFrame } from '../components/ui/MediaFrame';
import { imagePerformanceBudget, visualAssets } from './visualAssets';

describe('visualAssets performance metadata', () => {
  const assets = Object.values(visualAssets);

  it('mantem dimensoes explicitas para evitar layout shift', () => {
    assets.forEach((asset) => {
      expect(asset.width).toBeGreaterThan(0);
      expect(asset.height).toBeGreaterThan(0);
      const expectedRatio = asset === visualAssets.hero ? 1.78 : 1.5;
      expect(asset.width / asset.height).toBeCloseTo(expectedRatio, 1);
    });
  });

  it('usa prioridade alta apenas na imagem critica da home', () => {
    expect(visualAssets.hero.loading).toBe('eager');
    expect(visualAssets.hero.fetchPriority).toBe('high');

    const nonCriticalAssets = assets.filter((asset) => asset.src !== visualAssets.hero.src);

    nonCriticalAssets.forEach((asset) => {
      expect(asset.loading).toBe('lazy');
      expect(asset.fetchPriority).toBeUndefined();
    });
  });

  it('mantem assets dentro do orcamento atual e registra recomendacao de proximo formato', () => {
    assets.forEach((asset) => {
      expect(asset.sizeBytes).toBeLessThanOrEqual(imagePerformanceBudget.maxCampaignImageBytes);
    });

    expect(imagePerformanceBudget.recommendedNextGenFormat).toBe('webp');
  });
});

describe('MediaFrame performance attributes', () => {
  it('renderiza imagem com dimensoes, lazy loading e decoding assincrono', () => {
    render(<MediaFrame asset={visualAssets.productionStop} label="Imagem otimizada" />);

    const image = screen.getByRole('img', { name: visualAssets.productionStop.alt });

    expect(image).toHaveAttribute('width', String(visualAssets.productionStop.width));
    expect(image).toHaveAttribute('height', String(visualAssets.productionStop.height));
    expect(image).toHaveAttribute('loading', 'lazy');
    expect(image).toHaveAttribute('decoding', 'async');
  });
});
