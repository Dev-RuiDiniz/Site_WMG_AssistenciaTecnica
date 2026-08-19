import { companyContent, ctaContent, navigationItems } from '../../content';
import { Container } from '../ui/Container';

const supportCta = ctaContent.find((cta) => cta.id === 'talk-to-support');
const addressHref =
  'https://www.google.com/search?client=opera-gx&hs=KUD&sca_esv=19d038241e14d62e&sxsrf=APpeQnuBgyYs4mQ1TuYJvK74aTxdzsnDZA:1787095021294&q=wmg+manuten%C3%A7%C3%A3o+industrial,+el%C3%A9trica,+eletr%C3%B4nica+e+servo+motores+taubat%C3%A9+endere%C3%A7o&ludocid=15377243400275212637&sa=X&ved=2ahUKEwiQ37Hfp6uWAxUZqpUCHYzwMp0Q6BN6BAg2EAI';

export function Footer() {
  return (
    <footer className="bg-wmg-navy-950 text-white" aria-label="Rodape institucional">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <p className="text-2xl font-semibold tracking-tight">{companyContent.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            {companyContent.description}
          </p>
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
            <li>
              <a
                className="transition hover:text-white"
                href={addressHref}
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-semibold text-white">Endereço:</span> R. Antônio de Deus
                Andrade, nº 250 - Jardim Eulalia, Taubaté - SP, 12091-040
              </a>
            </li>
          </ul>
        </address>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-5 text-xs text-slate-400">(c) {companyContent.name}.</Container>
      </div>
    </footer>
  );
}
