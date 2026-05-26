import type { ImgHTMLAttributes } from 'react';
import type { VisualAsset } from '../../content/visualAssets';

type MediaFrameProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height'> & {
  asset: VisualAsset;
  label?: string;
  tone?: 'dark' | 'light';
};

export function MediaFrame({
  asset,
  label,
  tone = 'dark',
  className = '',
  loading,
  decoding = 'async',
  ...props
}: MediaFrameProps) {
  const labelClasses =
    tone === 'dark'
      ? 'border-white/15 bg-wmg-navy-950/70 text-white'
      : 'border-wmg-blue-700/15 bg-white/90 text-wmg-navy-950';
  const aspectRatio = `${asset.width} / ${asset.height}`;

  return (
    <figure
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-wmg-navy-950 shadow-wmg-card ${className}`.trim()}
      style={{ aspectRatio }}
    >
      <img
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        className="block h-auto w-full object-contain transition duration-700 group-hover:scale-[1.01]"
        loading={loading ?? asset.loading ?? 'lazy'}
        fetchPriority={asset.fetchPriority}
        decoding={decoding}
        {...props}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-wmg-navy-950/75 via-wmg-navy-950/10 to-transparent" />
      {label ? (
        <figcaption
          className={`absolute bottom-4 left-4 right-4 rounded-2xl border px-4 py-3 text-sm font-extrabold uppercase tracking-[0.12em] backdrop-blur ${labelClasses}`}
        >
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}
