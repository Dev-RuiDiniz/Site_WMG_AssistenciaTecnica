import { render, screen } from '@testing-library/react';
import { VideoHero } from './VideoHero';

describe('VideoHero', () => {
  it('renderiza apenas a imagem de poster quando nao ha fontes de video', () => {
    render(<VideoHero poster="/assets/campaign/wmg-industrial-hero.png" posterAlt="Fundo industrial" />);

    const poster = screen.getByAltText(/fundo industrial/i);
    expect(poster).toBeInTheDocument();
    expect(document.querySelector('video')).not.toBeInTheDocument();
  });

  it('renderiza o elemento de video com fallback de poster quando ha fontes', () => {
    render(
      <VideoHero
        poster="/assets/campaign/wmg-industrial-hero.png"
        posterAlt="Fundo industrial"
        sources={[{ src: 'https://example.com/video.mp4', type: 'video/mp4' }]}
      />,
    );

    const video = document.querySelector('video') as HTMLVideoElement | null;
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('poster', '/assets/campaign/wmg-industrial-hero.png');
    expect(video?.muted).toBe(true);
    expect(video).toHaveAttribute('loop');
    expect(screen.getByAltText(/fundo industrial/i)).toBeInTheDocument();
  });
});
