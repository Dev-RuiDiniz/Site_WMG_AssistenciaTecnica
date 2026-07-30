import { useEffect, useState } from 'react';
import { ctaContent, navigationItems } from '../../content';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

const requestEvaluationCta = ctaContent.find((cta) => cta.id === 'request-evaluation');
const logoSrc = '/assets/brand/logo_wmg.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState);
  }

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
      className={`sticky top-0 z-50 border-b bg-wmg-hero-video text-white backdrop-blur-xl transition-all duration-300 ${
        isScrolled
          ? 'border-wmg-cyan-400/30 shadow-[0_18px_60px_rgba(3,17,31,0.4)]'
          : 'border-wmg-cyan-400/10 shadow-[0_8px_32px_rgba(3,17,31,0.2)]'
      }`}
    >
      <Container className="flex min-h-20 items-center justify-between gap-6 py-4">
        <a href="/" className="group inline-flex items-center gap-3" aria-label="Ir para o início">
          <span className="inline-flex shrink-0 items-center rounded-2xl border border-wmg-cyan-400/30 bg-white px-3 py-2 shadow-wmg-glow transition duration-300 group-hover:border-wmg-lime-500/50 group-hover:bg-slate-50">
            <img
              src={logoSrc}
              alt="WMG Assistência Técnica"
              className="h-12 w-auto shrink-0 object-contain transition duration-300 group-hover:scale-105 md:h-16"
            />
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:ml-8 md:flex" aria-label="Navegação principal">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-200 transition hover:bg-white/10 hover:text-wmg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wmg-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          {requestEvaluationCta ? (
            <Button href={requestEvaluationCta.href}>{requestEvaluationCta.label}</Button>
          ) : null}
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-wmg-cyan-400/50 px-4 text-sm font-extrabold uppercase tracking-[0.12em] text-wmg-cyan-300 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wmg-cyan-400 md:hidden"
          aria-label="Abrir menu de navegação"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          Menu
        </button>
      </Container>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          className="border-t border-wmg-cyan-400/20 bg-wmg-navy-900/98 md:hidden"
          aria-label="Navegação mobile"
        >
          <Container className="grid gap-3 py-5">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-wmg-cyan-400/20 px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-wmg-lime-500/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wmg-cyan-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {requestEvaluationCta ? (
              <Button href={requestEvaluationCta.href} className="mt-2">
                {requestEvaluationCta.label}
              </Button>
            ) : null}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
