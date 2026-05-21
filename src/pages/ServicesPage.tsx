import { servicesContent, homeContent, ctaContent } from '../content';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';

function getCtaById(id: string) {
  return ctaContent.find((cta) => cta.id === id);
}

export function ServicesPage() {
  return (
    <Container className="py-16 md:py-24">
      <section className="grid gap-10" aria-labelledby="servicos-title">
        <SectionTitle
          eyebrow={homeContent.servicesSection.eyebrow}
          title={homeContent.servicesSection.title}
          description={homeContent.servicesSection.description}
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {servicesContent.map((service) => {
            const serviceCta = getCtaById(service.ctaId);
            return (
              <Card key={service.slug} variant="service">
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
