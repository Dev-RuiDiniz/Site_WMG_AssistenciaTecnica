import { useState } from 'react';
import { ctaContent, navigationItems } from '../../content';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

const requestEvaluationCta = ctaContent.find((cta) => cta.id === 'request-evaluation');

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-wmg-cyan-400/20 bg-wmg-navy-950/95 text-white shadow-wmg-card backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-6 py-4">
        <a href="#inicio" className="group inline-flex items-center gap-3" aria-label="Ir para o início">
          <span className="flex size-11 items-center justify-center rounded-full border border-wmg-cyan-400/40 bg-wmg-blue-700/30 text-sm font-black text-wmg-lime-500 shadow-wmg-glow">
            W
          </span>
          <span className="grid leading-tight">
            <span className="text-lg font-black tracking-[0.16em]">WMG</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-wmg-lime-500">
              Assistência Técnica
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegação principal">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold uppercase tracking-[0.12em] text-slate-200 transition hover:text-wmg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wmg-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          {requestEvaluationCta ? <Button href={requestEvaluationCta.href}>{requestEvaluationCta.label}</Button> : null}
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
          className="border-t border-wmg-cyan-400/20 bg-wmg-navy-900 md:hidden"
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
