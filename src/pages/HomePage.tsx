import { ctaContent, homeContent, visualAssets } from '../content';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { MediaFrame } from '../components/ui/MediaFrame';

function getCtaById(id: string) {
  return ctaContent.find((cta) => cta.id === id);
}

export function HomePage() {
  const primaryHeroCta = getCtaById(homeContent.hero.primaryCtaId);
  const secondaryHeroCta = getCtaById(homeContent.hero.secondaryCtaId);
  const finalPrimaryCta = getCtaById(homeContent.finalCtaSection.primaryCtaId);
  const finalSecondaryCta = getCtaById(homeContent.finalCtaSection.secondaryCtaId);

  return (
    <>
      <section
        className="relative isolate overflow-hidden bg-wmg-navy-950 text-white"
        aria-labelledby="hero-title"
      >
        <img
          src={visualAssets.hero.src}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-70"
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,17,31,0.98)_0%,rgba(3,17,31,0.82)_42%,rgba(3,17,31,0.28)_100%)]" />
        <Container className="grid min-h-[calc(100vh-5rem)] gap-10 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-end md:py-20">
          <div className="max-w-4xl self-center">
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.22em] text-wmg-lime-500 md:text-base">
              {homeContent.hero.eyebrow}
            </p>
            <h1 id="hero-title" className="max-w-4xl text-5xl font-black leading-none md:text-7xl">
              {homeContent.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-semibold leading-9 text-slate-100 md:text-2xl">
              {homeContent.hero.subtitle}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-100 md:text-lg">
              {homeContent.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4" aria-label="Ações principais">
              {primaryHeroCta ? (
                <Button href={primaryHeroCta.href} className="min-w-64">
                  {primaryHeroCta.label}
                </Button>
              ) : null}
              {secondaryHeroCta ? (
                <Button href={secondaryHeroCta.href} variant="secondary">
                  {secondaryHeroCta.label}
                </Button>
              ) : null}
            </div>
          </div>
          <div className="grid gap-4 self-end rounded-3xl border border-white/10 bg-wmg-navy-950/72 p-5 shadow-wmg-card backdrop-blur">
            {homeContent.hero.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-2xl border border-wmg-cyan-400/15 bg-white/[0.06] p-5"
              >
                <h2 className="text-lg font-black text-wmg-lime-500">{highlight.title}</h2>
                <p className="mt-2 leading-7 text-slate-200">{highlight.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="grid gap-10 py-16 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-24">
        <MediaFrame asset={visualAssets.productionStop} loading="lazy" />
        <section aria-labelledby="pain-home-title">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-wmg-cyan-700">
            {homeContent.painSection.eyebrow}
          </p>
          <h2 id="pain-home-title" className="text-3xl font-black text-wmg-navy-950 md:text-5xl">
            Sua produção não pode esperar por tentativa e erro
          </h2>
          <p className="mt-5 leading-8 text-slate-700">{homeContent.painSection.description}</p>
          <div className="mt-8 grid gap-4">
            {homeContent.painSection.points.map((point) => (
              <div
                key={point.title}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-black text-wmg-navy-950">{point.title}</h3>
                <p className="mt-2 leading-7 text-slate-700">{point.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>

      <Container className="grid gap-8 pb-16 md:grid-cols-3 md:pb-24">
        <Card className="shadow-sm transition hover:-translate-y-1 hover:shadow-wmg-card">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.16em] text-wmg-cyan-700">
            Serviços
          </p>
          <h2 className="text-2xl font-black text-wmg-navy-950">
            Diagnóstico, reparo e suporte técnico
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            Veja o escopo técnico da WMG para diagnóstico, manutenção e suporte industrial.
          </p>
          <Button href="/servicos" className="mt-5">
            Ver serviços
          </Button>
        </Card>
        <Card className="shadow-sm transition hover:-translate-y-1 hover:shadow-wmg-card">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.16em] text-wmg-cyan-700">
            Equipamentos
          </p>
          <h2 className="text-2xl font-black text-wmg-navy-950">
            Componentes críticos da operação
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            Confira as categorias técnicas atendidas para equipamentos críticos da operação.
          </p>
          <Button href="/equipamentos" className="mt-5">
            Ver equipamentos
          </Button>
        </Card>
        <Card className="border-wmg-lime-500/40 bg-wmg-navy-950 text-white shadow-wmg-card transition hover:-translate-y-1">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.16em] text-wmg-lime-500">
            Contato
          </p>
          <h2 className="text-2xl font-black text-white">
            Fale com um especialista
          </h2>
          <p className="mt-3 leading-7 text-slate-100">
            Solicite avaliação técnica com dados do equipamento e urgência de atendimento.
          </p>
          <Button href="/contato" className="mt-5">
            Solicitar avaliação técnica agora
          </Button>
        </Card>
      </Container>

      <Container className="pb-20">
        <section
          className="grid gap-8 overflow-hidden rounded-3xl border border-wmg-cyan-400/20 bg-wmg-hero p-6 text-white shadow-wmg-card md:grid-cols-[1fr_0.78fr] md:p-10"
          aria-label="Chamada final da página inicial"
        >
          <div className="self-center">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-wmg-lime-500">
              {homeContent.finalCtaSection.eyebrow}
            </p>
            <h2 className="max-w-4xl text-3xl font-black md:text-5xl">
              {homeContent.finalCtaSection.title}
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-100">
              {homeContent.finalCtaSection.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {finalPrimaryCta ? (
                <Button href={finalPrimaryCta.href}>{finalPrimaryCta.label}</Button>
              ) : null}
              {finalSecondaryCta ? (
                <Button href={finalSecondaryCta.href} variant="secondary">
                  {finalSecondaryCta.label}
                </Button>
              ) : null}
            </div>
          </div>
          <MediaFrame asset={visualAssets.maintenance} />
        </section>
      </Container>
    </>
  );
}
