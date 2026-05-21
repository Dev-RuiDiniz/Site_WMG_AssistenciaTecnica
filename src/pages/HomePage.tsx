import { ctaContent, homeContent } from '../content';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';

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
      <section className="bg-wmg-hero text-white" aria-labelledby="hero-title">
        <Container className="grid gap-10 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
          <div>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.22em] text-wmg-lime-500">
              {homeContent.hero.eyebrow}
            </p>
            <h1 id="hero-title" className="text-5xl font-black leading-none md:text-7xl">
              {homeContent.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-semibold leading-9 text-slate-100 md:text-2xl">
              {homeContent.hero.subtitle}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">{homeContent.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-4" aria-label="Acoes principais">
              {primaryHeroCta ? <Button href={primaryHeroCta.href}>{primaryHeroCta.label}</Button> : null}
              {secondaryHeroCta ? (
                <Button href={secondaryHeroCta.href} variant="secondary">
                  {secondaryHeroCta.label}
                </Button>
              ) : null}
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/10 p-5">
            {homeContent.hero.highlights.map((highlight) => (
              <div key={highlight.title} className="rounded-2xl bg-wmg-navy-950/70 p-5">
                <h2 className="text-lg font-black text-wmg-lime-500">{highlight.title}</h2>
                <p className="mt-2 leading-7 text-slate-200">{highlight.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="grid gap-8 py-16 md:grid-cols-3 md:py-24">
        <Card>
          <h2 className="text-xl font-black text-wmg-navy-950">Servicos</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Veja o escopo tecnico da WMG para diagnostico, manutencao e suporte industrial.
          </p>
          <Button href="/servicos" className="mt-5">
            Ver servicos
          </Button>
        </Card>
        <Card>
          <h2 className="text-xl font-black text-wmg-navy-950">Equipamentos</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Confira as categorias tecnicas atendidas para equipamentos criticos da operacao.
          </p>
          <Button href="/equipamentos" className="mt-5">
            Ver equipamentos
          </Button>
        </Card>
        <Card>
          <h2 className="text-xl font-black text-wmg-navy-950">Contato</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Solicite avaliacao tecnica com dados do equipamento e urgencia de atendimento.
          </p>
          <Button href="/contato" className="mt-5">
            Solicitar avaliacao tecnica agora
          </Button>
        </Card>
      </Container>

      <Container className="pb-20">
        <section
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-10"
          aria-label="Chamada final da pagina inicial"
        >
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-wmg-cyan-700">
            {homeContent.finalCtaSection.eyebrow}
          </p>
          <h2 className="max-w-4xl text-3xl font-black text-wmg-navy-950 md:text-5xl">
            {homeContent.finalCtaSection.title}
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">{homeContent.finalCtaSection.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            {finalPrimaryCta ? <Button href={finalPrimaryCta.href}>{finalPrimaryCta.label}</Button> : null}
            {finalSecondaryCta ? <Button href={finalSecondaryCta.href} variant="secondary">{finalSecondaryCta.label}</Button> : null}
          </div>
        </section>
      </Container>
    </>
  );
}
