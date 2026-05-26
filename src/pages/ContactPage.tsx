import { DiagnosticContactForm } from '../components/contact/DiagnosticContactForm';
import { visualAssets } from '../content';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { MediaFrame } from '../components/ui/MediaFrame';

export function ContactPage() {
  return (
    <Container className="py-16 md:py-24">
      <section
        className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
        aria-labelledby="contact-title"
      >
        <MediaFrame asset={visualAssets.growthMaintenance} />
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
      </section>
    </Container>
  );
}
