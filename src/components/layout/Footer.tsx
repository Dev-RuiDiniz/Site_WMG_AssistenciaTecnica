import { Container } from '../ui/Container';
import { contactLinks, navigationItems } from './navigation';

export function Footer() {
  return (
    <footer className="bg-wmg-navy-950 text-white" aria-label="Rodapé institucional">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-xl font-black">WMG Assistência Técnica</p>
          <p className="mt-4 max-w-md leading-7 text-slate-300">
            Especialistas em manutenção industrial, inversores, placas eletrônicas, servo drives,
            IHMs, CLPs e painéis elétricos industriais.
          </p>
        </div>

        <nav aria-label="Links rápidos do rodapé">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-wmg-lime-500">
            Navegação
          </p>
          <ul className="grid gap-3">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a className="text-slate-300 transition hover:text-wmg-lime-500" href={item.href}>
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
          <ul className="grid gap-3 text-slate-300">
            <li>
              <a className="transition hover:text-wmg-lime-500" href={`mailto:${contactLinks.email}`}>
                {contactLinks.email}
              </a>
            </li>
            <li>
              <a
                className="transition hover:text-wmg-lime-500"
                href={`tel:${contactLinks.phone.replace(/\D/g, '')}`}
              >
                {contactLinks.phone}
              </a>
            </li>
            <li>{contactLinks.location}</li>
          </ul>
        </address>
      </Container>

      <div className="border-t border-wmg-cyan-400/20">
        <Container className="py-5 text-sm text-slate-400">
          © WMG Assistência Técnica. Documentação, qualidade e evolução contínua do site.
        </Container>
      </div>
    </footer>
  );
}
