import { useEffect, useState } from 'react';
import { companyContent, ctaContent, navigationItems } from '../../content';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

const requestEvaluationCta = ctaContent.find((cta) => cta.id === 'request-evaluation');
const logoSrc = '/assets/brand/logo_wmg.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 12);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-[0_12px_36px_rgba(3,17,31,0.12)]' : 'shadow-none'
      }`}
    >
      <div className="border-b border-wmg-navy-900 bg-wmg-navy-950 text-white">
        <Container className="flex min-h-9 items-center justify-between text-xs font-medium tracking-[0.04em]">
          <span>Assistência técnica industrial</span>
          <span>{companyContent.location}</span>
        </Container>
      </div>

      <div className="border-b border-slate-200">
        <Container className="flex min-h-[5.75rem] items-center justify-between gap-6 py-3">
          <a href="/" className="inline-flex items-center" aria-label="Ir para o início">
            <img
              src={logoSrc}
              alt="WMG Assistência Técnica"
              className="h-14 w-auto object-contain md:h-[4.5rem]"
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.href === '/sobre' ? 'Sobre a WMG' : undefined}
                className="border-b-2 border-transparent px-1 py-4 text-sm font-semibold text-wmg-navy-900 transition hover:border-wmg-lime-500 hover:text-wmg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wmg-cyan-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            {requestEvaluationCta ? (
              <Button
                href={requestEvaluationCta.href}
                className="rounded-none border border-wmg-lime-500 bg-transparent px-5 text-sm normal-case tracking-normal text-wmg-navy-900 shadow-none hover:bg-wmg-lime-500"
              >
                Fale com especialista
              </Button>
            ) : null}
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center border border-wmg-navy-900 px-4 text-sm font-semibold text-wmg-navy-900 transition hover:bg-wmg-navy-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wmg-cyan-400 lg:hidden"
            aria-label="Abrir menu de navegação"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((currentState) => !currentState)}
          >
            Menu
          </button>
        </Container>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          className="border-b border-slate-200 bg-white lg:hidden"
          aria-label="Navegação mobile"
        >
          <Container className="grid gap-1 py-4">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.href === '/sobre' ? 'Sobre a WMG' : undefined}
                className="border-b border-slate-200 px-2 py-3 text-sm font-semibold text-wmg-navy-900 transition hover:border-wmg-lime-500 hover:text-wmg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wmg-cyan-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {requestEvaluationCta ? (
              <Button
                href={requestEvaluationCta.href}
                className="mt-3 rounded-none normal-case tracking-normal shadow-none"
              >
                Fale com especialista
              </Button>
            ) : null}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
