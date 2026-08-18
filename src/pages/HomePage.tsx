import { TbCircuitMotor, TbComponents, TbSettingsAutomation, TbShieldCheck } from 'react-icons/tb';
import { visualAssets } from '../content';
import { Container } from '../components/ui/Container';

const solutionItems = [
  {
    title: 'Inversores e drives',
    href: '/equipamentos',
    Icon: TbCircuitMotor,
  },
  {
    title: 'Placas eletrônicas',
    href: '/equipamentos',
    Icon: TbComponents,
  },
  {
    title: 'CLPs, IHMs e painéis',
    href: '/servicos',
    Icon: TbSettingsAutomation,
  },
];

export function HomePage() {
  return (
    <>
      <section
        className="relative isolate min-h-[32rem] overflow-hidden bg-white md:min-h-[36rem]"
        aria-labelledby="hero-title"
      >
        <img
          src={visualAssets.hero.src}
          alt={visualAssets.hero.alt}
          width={visualAssets.hero.width}
          height={visualAssets.hero.height}
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/85 to-white/10"
        />

        <Container className="relative z-10 flex min-h-[32rem] items-center py-14 md:min-h-[36rem] md:py-0">
          <div className="max-w-2xl pt-8 lg:pt-0">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-wmg-blue-500 md:text-sm">
              Automação, elétrica e eletrônica industrial
            </p>
            <h1
              id="hero-title"
              className="mt-6 max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-wmg-navy-900 md:text-[4.15rem]"
            >
              Inteligência técnica
              <br />
              para sua operação<span className="text-wmg-lime-500">.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-wmg-graphite-700 md:text-xl">
              Diagnóstico, reparo e manutenção para recuperar o desempenho dos seus equipamentos.
            </p>
          </div>

          <div className="absolute right-10 top-12 hidden items-start gap-3 text-xs font-semibold leading-5 text-wmg-navy-900 md:flex lg:right-16">
            <span className="mt-2 h-px w-14 bg-wmg-cyan-400" />
            <span className="max-w-24">Equipamentos críticos</span>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white" aria-label="Soluções atendidas">
        <Container className="grid md:grid-cols-3">
          {solutionItems.map(({ title, href, Icon }, index) => (
            <a
              key={title}
              href={href}
              className={`group flex flex-col items-center justify-center gap-4 px-6 py-9 text-center transition hover:bg-slate-50 md:px-10 md:py-10 ${
                index > 0 ? 'border-t border-slate-200 md:border-l md:border-t-0' : ''
              }`}
            >
              <Icon
                aria-hidden="true"
                className="shrink-0 text-wmg-blue-500"
                size={58}
                strokeWidth={1.45}
              />
              <div className="flex flex-col items-center">
                <p className="max-w-48 text-xl font-semibold leading-[1.08] tracking-[-0.04em] text-wmg-navy-900 group-hover:text-wmg-blue-700 md:text-2xl">
                  {title}
                </p>
                <span className="mt-5 block h-0.5 w-9 bg-wmg-lime-500 transition-all duration-300 group-hover:w-14" />
              </div>
            </a>
          ))}
        </Container>
      </section>

      <section className="bg-white" aria-labelledby="confidence-title">
        <Container className="flex flex-col items-center gap-7 py-14 text-center md:py-16">
          <TbShieldCheck
            aria-hidden="true"
            className="shrink-0 text-wmg-blue-500"
            size={62}
            strokeWidth={1.25}
          />
          <div className="max-w-4xl border-t-2 border-wmg-cyan-400 pt-6">
            <h2
              id="confidence-title"
              className="text-2xl font-semibold leading-tight tracking-[-0.035em] text-wmg-navy-900 md:text-3xl"
            >
              Mais que reparo. Performance, confiabilidade e continuidade para a sua indústria.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-wmg-graphite-700">
              Atuamos com diagnóstico avançado, componentes de qualidade e processos técnicos que
              garantem o retorno rápido e seguro dos seus equipamentos ao pleno desempenho.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="border-b border-white/20 bg-wmg-navy-950"
        aria-label="Chamada final da página inicial"
      >
        <Container className="flex flex-col items-center gap-8 py-12 text-center md:py-14">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-wmg-lime-500">
              Fale com a equipe técnica
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
              Conte com a WMG para manter seus equipamentos em pleno funcionamento.
            </h2>
          </div>
        </Container>
      </section>
    </>
  );
}
