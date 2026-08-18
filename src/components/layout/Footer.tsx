import { companyContent, ctaContent, navigationItems } from '../../content';
import { Container } from '../ui/Container';

const supportCta = ctaContent.find((cta) => cta.id === 'talk-to-support');

export function Footer() {
  return (
    <footer className="bg-wmg-navy-950 text-white" aria-label="Rodape institucional">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <p className="text-2xl font-semibold tracking-tight">{companyContent.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            {companyContent.description}
          </p>
          {supportCta ? (
            <a
              href={supportCta.href}
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-none bg-wmg-lime-500 px-5 text-sm font-semibold text-wmg-navy-950 transition hover:bg-wmg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wmg-lime-400"
            >
              Falar com suporte
            </a>
          ) : null}
        </div>

        <nav aria-label="Links rapidos do rodape">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-wmg-lime-500">
            Navegação
          </p>
          <ul className="grid gap-3 text-sm text-slate-300">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-white" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-wmg-lime-500">
            Contato
          </p>
          <ul className="grid gap-3 text-sm text-slate-300">
            <li>
              <a
                className="transition hover:text-white"
                href={supportCta?.href ?? `mailto:${companyContent.email}`}
              >
                {companyContent.email}
              </a>
            </li>
            <li>
              <a
                className="transition hover:text-white"
                href={`tel:${companyContent.phone.replace(/\D/g, '')}`}
              >
                {companyContent.phone}
              </a>
            </li>
            <li>{companyContent.location}</li>
          </ul>
        </address>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-5 text-xs text-slate-400">(c) {companyContent.name}.</Container>
      </div>
    </footer>
  );
}
