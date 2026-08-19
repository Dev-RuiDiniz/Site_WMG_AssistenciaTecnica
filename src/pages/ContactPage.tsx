import { DiagnosticContactForm } from '../components/contact/DiagnosticContactForm';
import { companyContent, ctaContent } from '../content';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { GlassCard } from '../components/ui/GlassCard';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';

const supportCta = ctaContent.find((cta) => cta.id === 'talk-to-support');

export function ContactPage() {
  return (
    <Container className="grid gap-16 py-16 md:py-24">
      <section className="flex justify-center text-center" aria-labelledby="contact-title">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-wmg-lime-500">
            Contato
          </p>
          <h1
            id="contact-title"
            className="text-3xl font-black leading-tight text-wmg-navy-950 md:text-5xl"
          >
            Solicite uma avaliação técnica
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            Informe os dados do equipamento, falha e urgência para acelerar a triagem técnica da
            WMG.
          </p>
        </div>
      </section>

      <section
        className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
        aria-label="Canais e formulário de contato"
      >
        <RevealOnScroll>
          <GlassCard tone="cyan" className="h-full !bg-wmg-navy-950">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-wmg-lime-500">
              Canais diretos
            </p>
            <ul className="grid gap-3 text-slate-100">
              <li>
                <a
                  className="transition hover:text-wmg-lime-500"
                  href={`mailto:${companyContent.email}`}
                >
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
                  <a
                    className="font-bold text-wmg-cyan-300 transition hover:text-wmg-lime-500"
                    href={supportCta.href}
                  >
                    {supportCta.label}
                  </a>
                </li>
              ) : null}
            </ul>
          </GlassCard>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <Card variant="highlight" className="bg-wmg-navy-950">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-wmg-lime-500">
              Diagnóstico técnico
            </p>
            <p className="max-w-3xl leading-8 text-slate-100">
              Compartilhe os principais detalhes do equipamento para orientar o próximo passo do
              atendimento.
            </p>
            <DiagnosticContactForm />
          </Card>
        </RevealOnScroll>
      </section>
    </Container>
  );
}
