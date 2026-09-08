import { TbCircuitMotor, TbComponents, TbSettingsAutomation, TbShieldCheck } from 'react-icons/tb';
import { heroVideo } from '../content';
import { Container } from '../components/ui/Container';

const solutionItems = [
  {
    title: 'Inversores e drives',
    href: '/equipamentos',
    Icon: TbCircuitMotor,
    image: '/assets/campaign/wmg-inversor-background.png',
  },
  {
    title: 'Placas eletrônicas',
    href: '/equipamentos',
    Icon: TbComponents,
    image: '/assets/campaign/wmg-placa-background.png',
  },
  {
    title: 'CLPs, IHMs e painéis',
    href: '/servicos',
    Icon: TbSettingsAutomation,
    image: '/assets/campaign/wmg-painel-background.png',
  },
];

export function HomePage() {
  return (
    <>
      <section
        className="relative isolate grid min-h-[32rem] w-full overflow-hidden bg-white md:h-[36rem] md:min-h-[36rem] md:grid-cols-[2fr_3fr]"
        aria-labelledby="hero-title"
      >
        <div
          data-hero-copy
          className="flex items-center bg-wmg-navy-800 px-7 py-14 md:px-10 lg:px-14"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-wmg-lime-400 md:text-sm">
              Automação, elétrica e eletrônica industrial
            </p>
            <h1
              id="hero-title"
              className="mt-6 max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white md:text-[4.15rem]"
            >
              Inteligência técnica
              <br />
              para sua operação<span className="text-wmg-lime-400">.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-white md:text-xl">
              Diagnóstico, reparo e manutenção para recuperar o desempenho dos seus equipamentos.
            </p>
          </div>
        </div>

        <div
          data-hero-media
          className="relative min-h-[20rem] overflow-hidden bg-wmg-navy-900 md:min-h-0"
        >
          <video
            aria-label="Destaque audiovisual da WMG"
              className="h-full min-h-0 w-full object-cover object-center motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroVideo.poster}
          >
            {heroVideo.sources.map((source) => (
              <source key={source.src} src={source.src} type={source.type} />
            ))}
            <img src={heroVideo.poster} alt="" aria-hidden="true" />
          </video>
          <img
            src={heroVideo.poster}
            alt=""
            aria-hidden="true"
              className="hidden h-full min-h-0 w-full object-cover object-center motion-reduce:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-wmg-navy-900/15 via-transparent to-wmg-cyan-400/10"
          />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white" aria-label="Soluções atendidas">
        <div className="grid w-full md:grid-cols-3">
          {solutionItems.map(({ title, href, Icon, image }, index) => (
            <a
              key={title}
              href={href}
              className={`group relative isolate flex min-h-[15rem] flex-col items-center justify-center gap-4 overflow-hidden bg-wmg-navy-900 px-6 py-9 text-center transition md:px-10 md:py-10 ${
                index > 0 ? 'border-t border-slate-200 md:border-l md:border-t-0' : ''
              }`}
            >
              <img
                data-solution-background
                src={image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 z-0 h-full w-full scale-[1.03] object-cover blur-[2px] transition-transform duration-500 group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 z-10 bg-wmg-navy-950/65 transition-colors duration-300 group-hover:bg-wmg-navy-950/50"
              />
              <div className="relative z-20 flex flex-col items-center justify-center gap-4">
                <Icon
                  aria-hidden="true"
                  className="shrink-0 text-white transition-colors duration-300 group-hover:text-wmg-lime-400"
                  size={58}
                  strokeWidth={1.45}
                />
                <div className="flex flex-col items-center">
                  <p className="max-w-48 text-xl font-semibold leading-[1.08] tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-wmg-lime-400 md:text-2xl">
                    {title}
                  </p>
                  <span className="mt-5 block h-0.5 w-9 bg-wmg-lime-500 transition-all duration-300 group-hover:w-14" />
                </div>
              </div>
            </a>
          ))}
        </div>
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
