import { useEffect, useRef } from 'react';

type VideoHeroProps = {
  poster: string;
  posterAlt: string;
  sources?: Array<{ src: string; type: string }>;
  overlayClassName?: string;
  className?: string;
};

export function VideoHero({
  poster,
  posterAlt,
  sources = [],
  overlayClassName = 'bg-wmg-hero-video',
  className = '',
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const video = videoRef.current;

    if (!video || prefersReducedMotion || sources.length === 0) {
      return;
    }

    video.play()?.catch(() => {
      // Autoplay pode ser bloqueado pelo navegador; o poster permanece visível.
    });
  }, [sources.length]);

  return (
    <div className={`absolute inset-0 -z-20 overflow-hidden ${className}`.trim()} aria-hidden="true">
      {sources.length > 0 ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover object-center opacity-70 motion-reduce:hidden"
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
        >
          {sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      ) : null}
      <img
        src={poster}
        alt={posterAlt}
        className={`h-full w-full object-cover object-center opacity-70 ${
          sources.length > 0 ? 'absolute inset-0 -z-10 motion-safe:hidden motion-reduce:block' : ''
        }`.trim()}
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
