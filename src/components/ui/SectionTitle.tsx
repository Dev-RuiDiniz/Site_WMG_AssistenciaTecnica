type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  tone = 'light',
  eyebrowClassName = '',
  titleClassName = '',
  descriptionClassName = '',
}: SectionTitleProps) {
  const titleClass = tone === 'dark' ? 'text-white' : 'text-wmg-navy-950';
  const descriptionClass = tone === 'dark' ? 'text-slate-100' : 'text-slate-700';

  return (
    <div className="max-w-3xl">
      <p
        className={`mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-wmg-lime-500 ${eyebrowClassName}`.trim()}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-black leading-tight md:text-5xl ${titleClass} ${titleClassName}`.trim()}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-lg leading-8 ${descriptionClass} ${descriptionClassName}`.trim()}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
