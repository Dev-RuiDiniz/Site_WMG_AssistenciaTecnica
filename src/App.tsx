import { ctaContent, homeContent, servicesContent } from './content';
import { SiteLayout } from './components/layout/SiteLayout';
import { Card } from './components/ui/Card';
import { Button } from './components/ui/Button';
import { Container } from './components/ui/Container';
import { SectionTitle } from './components/ui/SectionTitle';

function getCtaById(id: string) {
  return ctaContent.find((cta) => cta.id === id);
}

const primaryHeroCta = getCtaById(homeContent.hero.primaryCtaId);
const secondaryHeroCta = getCtaById(homeContent.hero.secondaryCtaId);
const contactCta = getCtaById(homeContent.contactSection.ctaId);

function App() {
  return (
    <SiteLayout>
      <section
        id="inicio"
        className="relative overflow-hidden bg-wmg-hero text-white"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0 bg-wmg-radial" aria-hidden="true" />
        <div
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-wmg-cyan-400 to-transparent"
          aria-hidden="true"
        />

        <Container className="relative grid gap-10 py-20 md:py-28">
          <div className="max-w-4xl">
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
          </div>

          <div className="flex flex-wrap gap-4" aria-label="Ações principais">
            {primaryHeroCta ? <Button href={primaryHeroCta.href}>{primaryHeroCta.label}</Button> : null}
            {secondaryHeroCta ? (
              <Button href={secondaryHeroCta.href} variant="secondary">
                {secondaryHeroCta.label}
              </Button>
            ) : null}
          </div>
        </Container>
      </section>

      <Container className="py-16 md:py-24">
        <section id="servicos" className="grid gap-10 scroll-mt-24" aria-labelledby="services-title">
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

        <section id="sobre" className="mt-20 scroll-mt-24" aria-labelledby="about-title">
          <SectionTitle
            eyebrow={homeContent.aboutSection.eyebrow}
            title={homeContent.aboutSection.title}
            description={homeContent.aboutSection.description}
          />
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
            <div className="mt-6">
              {contactCta ? <Button href={contactCta.href}>{contactCta.label}</Button> : null}
            </div>
          </Card>
        </section>
      </Container>
    </SiteLayout>
  );
}

export default App;
