import { servicesContent, homeContent, ctaContent, visualAssets } from '../content';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { MediaFrame } from '../components/ui/MediaFrame';
import { SectionTitle } from '../components/ui/SectionTitle';

function getCtaById(id: string) {
  return ctaContent.find((cta) => cta.id === id);
}

export function ServicesPage() {
  return (
    <Container className="grid gap-16 py-16 md:py-24">
      <section
        className="grid gap-10 md:grid-cols-[1fr_0.78fr] md:items-center"
        aria-labelledby="servicos-title"
      >
        <div>
          <SectionTitle
            eyebrow={homeContent.servicesSection.eyebrow}
            title={homeContent.servicesSection.title}
            description="Diagnostico, manutencao e suporte para equipamentos industriais com foco em reduzir incerteza tecnica e tempo de parada."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-wmg-blue-700/20 bg-white px-4 py-2 text-sm font-bold text-wmg-navy-950">
              Laboratorio e campo
            </span>
            <span className="rounded-full border border-wmg-blue-700/20 bg-white px-4 py-2 text-sm font-bold text-wmg-navy-950">
              Eletronica industrial
            </span>
            <span className="rounded-full border border-wmg-blue-700/20 bg-white px-4 py-2 text-sm font-bold text-wmg-navy-950">
              Automacao critica
            </span>
          </div>
        </div>
        <MediaFrame
          asset={visualAssets.growthMaintenance}
          label="Manutencao que apoia a operacao"
          className="min-h-96"
        />
      </section>

      <section className="grid gap-10" aria-label="Lista de servicos">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {servicesContent.map((service) => {
            const serviceCta = getCtaById(service.ctaId);
            return (
              <Card
                key={service.slug}
                variant="service"
                className="transition hover:-translate-y-1 hover:border-wmg-lime-500/50"
              >
                <h2 className="text-2xl font-black text-wmg-lime-500">{service.title}</h2>
                <p className="mt-4 leading-7 text-slate-200">{service.description}</p>
                <p className="mt-4 leading-7 text-slate-300">{service.demand}</p>
                <p className="mt-4 leading-7 text-slate-300">{service.response}</p>
                {serviceCta ? (
                  <Button href={serviceCta.href} variant="secondary" className="mt-5">
                    {serviceCta.label}
                  </Button>
                ) : null}
              </Card>
            );
          })}
        </div>
      </section>
    </Container>
  );
}
