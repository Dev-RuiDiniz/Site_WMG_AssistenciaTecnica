import { useEffect, useState } from 'react';
import { companyContent } from '../../content';
import { Container } from '../ui/Container';

const logoSrc = '/assets/brand/logo_wmg.png';
const headerNavigationItems = [
  { label: 'Equipamentos', href: '/equipamentos' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
];

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
          <div className="flex items-center gap-3">
            <span>Assistência técnica industrial</span>
            <span aria-hidden="true" className="text-wmg-lime-500">
              |
            </span>
            <span>{companyContent.location}</span>
          </div>
        </Container>
      </div>

      <div className="border-b border-slate-200">
        <Container className="flex min-h-[5.75rem] items-center justify-between gap-6 py-3">
          <a href="/" className="inline-flex items-center" aria-label="Ir para o início">
            <img
              src={logoSrc}
              alt="WMG Assistência Técnica"
              className="h-20 w-auto object-contain md:h-[5.5rem]"
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {headerNavigationItems.map((item) => (
              <a
                key={`${item.label}-${item.href}`}
                href={item.href}
                className="flex items-center gap-1 border-b-2 border-transparent px-1 py-4 text-sm font-medium text-wmg-navy-900 transition hover:border-wmg-lime-500 hover:text-wmg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wmg-cyan-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

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
            {headerNavigationItems.map((item) => (
              <a
                key={`${item.label}-${item.href}`}
                href={item.href}
                className="border-b border-slate-200 px-2 py-3 text-sm font-semibold text-wmg-navy-900 transition hover:border-wmg-lime-500 hover:text-wmg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wmg-cyan-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
