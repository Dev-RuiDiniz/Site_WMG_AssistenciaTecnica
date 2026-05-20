type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-wmg-lime-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black leading-tight text-wmg-navy-950 md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-wmg-graphite-500">{description}</p>
      ) : null}
    </div>
  );
}
