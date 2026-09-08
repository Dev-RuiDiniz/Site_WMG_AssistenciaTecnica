import { servicesContent, homeContent, ctaContent } from '../content';
import { useReducedMotion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';
import { SectionTitle } from '../components/ui/SectionTitle';

function getCtaById(id: string) {
  return ctaContent.find((cta) => cta.id === id);
}

export function ServicesPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div data-services-page className="bg-wmg-navy-800">
      <Container className="grid gap-16 py-16 md:gap-20 md:py-24">
      <section
        className="relative isolate flex min-h-[32rem] items-center overflow-hidden rounded-[2rem] bg-wmg-navy-950 px-6 py-14 md:min-h-[36rem] md:px-14 md:py-20"
        aria-labelledby="servicos-title"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
          autoPlay={!shouldReduceMotion}
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/assets/campaign/wmg-services-background.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-white/48 md:bg-[linear-gradient(90deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.58)_44%,rgba(255,255,255,0.18)_76%,rgba(255,255,255,0.02)_100%)]"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-4xl rounded-[1.75rem] border border-white/65 bg-white/58 p-6 text-center shadow-[0_20px_60px_rgba(7,28,51,0.14)] backdrop-blur-sm md:p-10">
          <SectionTitle
            eyebrow={homeContent.servicesSection.eyebrow}
            title={homeContent.servicesSection.title}
            description="Diagnóstico, manutenção e suporte para equipamentos industriais, com foco em reduzir incerteza técnica e tempo de parada."
            eyebrowClassName="!text-base md:!text-lg"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-wmg-blue-700/20 bg-white/90 px-4 py-2 text-sm font-bold text-wmg-navy-950 shadow-sm backdrop-blur-sm">
              Laboratório e campo
            </span>
            <span className="rounded-full border border-wmg-blue-700/20 bg-white/90 px-4 py-2 text-sm font-bold text-wmg-navy-950 shadow-sm backdrop-blur-sm">
              Eletrônica industrial
            </span>
            <span className="rounded-full border border-wmg-blue-700/20 bg-white/90 px-4 py-2 text-sm font-bold text-wmg-navy-950 shadow-sm backdrop-blur-sm">
              Automação crítica
            </span>
          </div>
        </div>
      </section>

      <section className="grid gap-10" aria-label="Lista de serviços">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {servicesContent.map((service, index) => {
            const serviceCta = getCtaById(service.ctaId);
            return (
              <RevealOnScroll key={service.slug} delay={index * 0.06}>
                <Card
                  variant="default"
                  className="h-full border-slate-200 bg-white shadow-[0_12px_30px_rgba(7,28,51,0.06)] hover:-translate-y-0.5 hover:border-wmg-cyan-400 hover:shadow-[0_16px_36px_rgba(7,28,51,0.1)]"
                >
                  <div className="mb-6 h-1 w-12 rounded-full bg-wmg-lime-500" />
                  <h2 className="text-2xl font-bold leading-tight text-wmg-navy-950">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-7 text-wmg-graphite-700">{service.description}</p>
                  <p className="mt-4 leading-7 text-wmg-graphite-700">{service.demand}</p>
                  <p className="mt-4 leading-7 text-wmg-graphite-700">{service.response}</p>
                  {serviceCta ? (
                    <Button
                      href={serviceCta.href}
                      variant="primary"
                      className="mt-6 w-full sm:w-fit"
                    >
                      {serviceCta.label}
                    </Button>
                  ) : null}
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>
      </Container>
    </div>
  );
}
