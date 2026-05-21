import { DiagnosticContactForm } from '../components/contact/DiagnosticContactForm';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';

export function ContactPage() {
  return (
    <Container className="py-16 md:py-24">
      <section aria-labelledby="contact-title">
        <Card variant="highlight">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-wmg-lime-500">
            Contato / diagnostico
          </p>
          <h1 id="contact-title" className="text-3xl font-black text-white md:text-4xl">
            Solicite uma avaliacao tecnica
          </h1>
          <p className="mt-4 max-w-3xl leading-8 text-slate-200">
            Informe os dados do lead, equipamento, falha e urgencia para facilitar a triagem tecnica da WMG.
          </p>
          <DiagnosticContactForm />
        </Card>
      </section>
    </Container>
  );
}
