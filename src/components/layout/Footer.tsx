import { companyContent, ctaContent, navigationItems } from '../../content';
import { Container } from '../ui/Container';

const supportCta = ctaContent.find((cta) => cta.id === 'talk-to-support');

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-wmg-hero text-white"
      aria-label="Rodape institucional"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-wmg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-wmg-lime-500/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-wmg-cyan-400/70 to-transparent" />
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-black">{companyContent.name}</p>
          <p className="mt-4 max-w-md leading-7 text-slate-100">{companyContent.description}</p>
          {supportCta ? (
            <a
              href={supportCta.href}
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-wmg-lime-500 px-6 text-sm font-extrabold uppercase tracking-[0.08em] text-wmg-navy-950 shadow-wmg-glow transition hover:bg-wmg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wmg-lime-400"
            >
              {supportCta.label}
            </a>
          ) : null}
        </div>

        <nav aria-label="Links rapidos do rodape">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-wmg-lime-500">
            Navegacao
          </p>
          <ul className="grid gap-3">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a className="text-slate-100 transition hover:text-wmg-lime-500" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-wmg-lime-500">
            Contato
          </p>
          <ul className="grid gap-3 text-slate-100">
            <li>
              <a
                className="transition hover:text-wmg-lime-500"
                href={supportCta?.href ?? `mailto:${companyContent.email}`}
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
          </ul>
        </address>
      </Container>

      <div className="border-t border-wmg-cyan-400/20 bg-black/10">
        <Container className="py-5 text-sm text-slate-200">
          (c) {companyContent.name}.
        </Container>
      </div>
    </footer>
  );
}
