import { DiagnosticContactForm } from '../components/contact/DiagnosticContactForm';
import { companyContent, ctaContent, visualAssets } from '../content';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { GlassCard } from '../components/ui/GlassCard';
import { MediaFrame } from '../components/ui/MediaFrame';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';

const supportCta = ctaContent.find((cta) => cta.id === 'talk-to-support');

export function ContactPage() {
  return (
    <Container className="py-16 md:py-24">
      <section
        className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
        aria-labelledby="contact-title"
      >
        <div className="grid gap-6">
          <RevealOnScroll>
            <MediaFrame asset={visualAssets.growthMaintenance} />
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <GlassCard tone="cyan" className="!bg-wmg-navy-950">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-wmg-lime-500">
                Canais diretos
              </p>
              <ul className="grid gap-3 text-slate-100">
                <li>
                  <a className="transition hover:text-wmg-lime-500" href={`mailto:${companyContent.email}`}>
                    {companyContent.email}
                  </a>
                </li>
                <li>
                  <a
                    className="transition hover:text-wmg-lime-500"
                    href={`tel:${companyContent.phone.replace(/\D/g, '')}`}
                  >
                    {companyContent.phone}
                  </a>
                </li>
                <li>{companyContent.location}</li>
                {supportCta ? (
                  <li>
                    <a className="font-bold text-wmg-cyan-300 transition hover:text-wmg-lime-500" href={supportCta.href}>
                      {supportCta.label}
                    </a>
                  </li>
                ) : null}
              </ul>
            </GlassCard>
          </RevealOnScroll>
        </div>
        <RevealOnScroll delay={0.15}>
          <Card variant="highlight" className="bg-wmg-navy-950">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-wmg-lime-500">
              Contato / diagnóstico
            </p>
            <h1 id="contact-title" className="text-3xl font-black text-white md:text-4xl">
              Solicite uma avaliação técnica
            </h1>
            <p className="mt-4 max-w-3xl leading-8 text-slate-100">
              Informe os dados do lead, equipamento, falha e urgência para facilitar a triagem técnica
              da WMG.
            </p>
            <DiagnosticContactForm />
          </Card>
        </RevealOnScroll>
      </section>
    </Container>
  );
}
