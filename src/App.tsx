import { ctaContent, homeContent, servicesContent } from './content';
import { SiteLayout } from './components/layout/SiteLayout';
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';
import { Container } from './components/ui/Container';
import { SectionTitle } from './components/ui/SectionTitle';

function getCtaById(id: string) {
  return ctaContent.find((cta) => cta.id === id);
}

function App() {
  const primaryHeroCta = getCtaById(homeContent.hero.primaryCtaId);
  const secondaryHeroCta = getCtaById(homeContent.hero.secondaryCtaId);
  const contactCta = getCtaById(homeContent.contactSection.ctaId);
  const finalPrimaryCta = getCtaById(homeContent.finalCtaSection.primaryCtaId);
  const finalSecondaryCta = getCtaById(homeContent.finalCtaSection.secondaryCtaId);

  return (
    <SiteLayout>
      <section id="inicio" className="relative overflow-hidden bg-wmg-hero text-white" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-wmg-radial" aria-hidden="true" />
        <Container className="relative grid gap-10 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
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
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              {homeContent.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4" aria-label="Ações principais">
              {primaryHeroCta ? <Button href={primaryHeroCta.href}>{primaryHeroCta.label}</Button> : null}
              {secondaryHeroCta ? (
                <Button href={secondaryHeroCta.href} variant="secondary">
                  {secondaryHeroCta.label}
                </Button>
              ) : null}
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
            {homeContent.hero.highlights.map((highlight) => (
              <div key={highlight.title} className="rounded-2xl bg-wmg-navy-950/70 p-5">
                <h2 className="text-lg font-black text-wmg-lime-500">{highlight.title}</h2>
                <p className="mt-2 leading-7 text-slate-200">{highlight.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-16 md:py-24">
        <section className="grid gap-8 rounded-3xl bg-slate-100 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10" aria-labelledby="pain-title">
          <SectionTitle
            eyebrow={homeContent.painSection.eyebrow}
            title={homeContent.painSection.title}
            description={homeContent.painSection.description}
          />
          <div className="grid gap-4">
            {homeContent.painSection.points.map((point) => (
              <Card key={point.title}>
                <h3 className="text-xl font-black text-wmg-navy-950">{point.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{point.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="servicos" className="mt-20 grid gap-10 scroll-mt-24" aria-labelledby="servicos-title">
          <SectionTitle
            eyebrow={homeContent.servicesSection.eyebrow}
            title={homeContent.servicesSection.title}
            description={homeContent.servicesSection.description}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {servicesContent.map((service) => (
              <Card key={service.slug} variant="service">
                <h3 className="mb-4 text-xl font-black text-wmg-lime-500">{service.title}</h3>
                <p className="leading-7 text-slate-200">{service.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-10" aria-labelledby="benefits-title">
          <SectionTitle
            eyebrow={homeContent.benefitsSection.eyebrow}
            title={homeContent.benefitsSection.title}
            description={homeContent.benefitsSection.description}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {homeContent.benefitsSection.benefits.map((benefit) => (
              <Card key={benefit.title}>
                <h3 className="text-xl font-black text-wmg-navy-950">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="sobre" className="mt-20 scroll-mt-24" aria-labelledby="about-title">
          <SectionTitle
            eyebrow={homeContent.aboutSection.eyebrow}
            title={homeContent.aboutSection.title}
            description={homeContent.aboutSection.description}
          />
        </section>

        <section className="mt-20 grid gap-10 rounded-3xl bg-wmg-navy-950 p-6 text-white md:p-10" aria-labelledby="credibility-title">
          <SectionTitle
            eyebrow={homeContent.credibilitySection.eyebrow}
            title={homeContent.credibilitySection.title}
            description={homeContent.credibilitySection.description}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {homeContent.credibilitySection.items.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-black text-wmg-lime-500">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-200">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="mt-20 scroll-mt-24" aria-labelledby="contact-title">
          <Card variant="highlight">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-wmg-lime-500">
              {homeContent.contactSection.eyebrow}
            </p>
            <h2 id="contact-title" className="text-3xl font-black text-white md:text-4xl">
              {homeContent.contactSection.title}
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-200">
              {homeContent.contactSection.description}
            </p>
            <div className="mt-6">{contactCta ? <Button href={contactCta.href}>{contactCta.label}</Button> : null}</div>
          </Card>
        </section>

        <section className="mt-20 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-10" aria-label="Chamada final da página inicial">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-wmg-cyan-700">
            {homeContent.finalCtaSection.eyebrow}
          </p>
          <h2 className="max-w-4xl text-3xl font-black text-wmg-navy-950 md:text-5xl">
            {homeContent.finalCtaSection.title}
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            {homeContent.finalCtaSection.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {finalPrimaryCta ? <Button href={finalPrimaryCta.href}>{finalPrimaryCta.label}</Button> : null}
            {finalSecondaryCta ? (
              <Button href={finalSecondaryCta.href} variant="secondary">
                {finalSecondaryCta.label}
              </Button>
            ) : null}
          </div>
        </section>
      </Container>
    </SiteLayout>
  );
}

export default App;
