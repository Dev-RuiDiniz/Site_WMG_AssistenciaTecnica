import { ctaContent, visualAssets } from '../content';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';

const requestEvaluationCta = ctaContent.find((cta) => cta.id === 'request-evaluation');
const servicesCta = ctaContent.find((cta) => cta.id === 'view-services');

const solutionItems = [
  {
    title: 'Inversores e drives',
    description: 'Diagnóstico e reparo para acionamentos que não podem parar.',
    href: '/equipamentos',
  },
  {
    title: 'Placas eletrônicas',
    description: 'Recuperação de placas de potência, controle e fontes industriais.',
    href: '/equipamentos',
  },
  {
    title: 'CLPs, IHMs e painéis',
    description: 'Suporte técnico para comandos, interfaces e painéis elétricos.',
    href: '/servicos',
  },
];

export function HomePage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white" aria-labelledby="hero-title">
        <Container className="grid min-h-[calc(100vh-9rem)] gap-10 py-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-16">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-wmg-blue-600 md:text-sm">
              Automação, elétrica e eletrônica industrial
            </p>
            <h1
              id="hero-title"
              className="mt-6 max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-wmg-navy-900 md:text-7xl"
            >
              Inteligência técnica para sua operação<span className="text-wmg-lime-500">.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-wmg-graphite-700 md:text-xl">
              Diagnóstico, reparo e manutenção para recuperar o desempenho dos seus equipamentos.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              {servicesCta ? (
                <Button
                  href={servicesCta.href}
                  className="rounded-none normal-case tracking-normal shadow-none"
                >
                  Conheça nossas soluções
                </Button>
              ) : null}
              {requestEvaluationCta ? (
                <a
                  href={requestEvaluationCta.href}
                  className="border-b border-wmg-navy-900 px-0.5 py-2 text-sm font-semibold text-wmg-navy-900 transition hover:border-wmg-lime-500 hover:text-wmg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wmg-cyan-400"
                >
                  Solicitar atendimento
                </a>
              ) : null}
            </div>
            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-wmg-graphite-700">
              <span>Atendimento especializado</span>
              <span aria-hidden="true" className="text-wmg-lime-500">
                •
              </span>
              <span>Diagnóstico claro</span>
              <span aria-hidden="true" className="text-wmg-lime-500">
                •
              </span>
              <span>Retorno seguro</span>
            </div>
          </div>

          <div className="relative min-h-[22rem] overflow-hidden border border-slate-200 bg-wmg-navy-950 md:min-h-[34rem]">
            <img
              src={visualAssets.hero.src}
              alt={visualAssets.hero.alt}
              className="h-full min-h-[22rem] w-full object-cover object-right md:min-h-[34rem]"
              loading="eager"
              fetchPriority="high"
            />
            <p className="absolute right-5 top-5 max-w-32 border-l-2 border-wmg-cyan-400 pl-3 text-xs font-semibold leading-5 text-white md:right-8 md:top-8">
              Equipamentos críticos
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white" aria-label="Soluções atendidas">
        <Container className="grid md:grid-cols-3">
          {solutionItems.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              className={`group border-slate-200 px-1 py-9 transition hover:bg-slate-50 md:px-8 md:py-12 ${
                index > 0 ? 'border-t md:border-l md:border-t-0' : ''
              }`}
            >
              <p className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-wmg-navy-900 group-hover:text-wmg-blue-700">
                {item.title}
              </p>
              <span className="mt-5 block h-1 w-9 bg-wmg-lime-500 transition-all duration-300 group-hover:w-16" />
              <p className="mt-5 max-w-xs text-sm leading-6 text-wmg-graphite-500">
                {item.description}
              </p>
              <span className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.16em] text-wmg-blue-600">
                Ver detalhes
              </span>
            </a>
          ))}
        </Container>
      </section>

      <section className="bg-slate-50" aria-labelledby="confidence-title">
        <Container className="grid gap-10 py-16 md:grid-cols-[0.35fr_1fr] md:items-center md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-wmg-blue-600">
            Por que a WMG
          </p>
          <div className="border-l-2 border-wmg-cyan-400 pl-6 md:pl-10">
            <h2
              id="confidence-title"
              className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-wmg-navy-900 md:text-5xl"
            >
              Mais que reparo. Performance, confiabilidade e continuidade para a sua indústria.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-wmg-graphite-700">
              Atuamos com diagnóstico avançado, componentes de qualidade e processos técnicos que
              garantem o retorno rápido e seguro dos seus equipamentos ao pleno desempenho.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-wmg-navy-950" aria-label="Chamada final da página inicial">
        <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between md:py-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-wmg-lime-500">
              Fale com a equipe técnica
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
              Conte com a WMG para manter seus equipamentos em pleno funcionamento.
            </h2>
          </div>
          {requestEvaluationCta ? (
            <Button
              href={requestEvaluationCta.href}
              className="shrink-0 rounded-none border border-wmg-lime-500 bg-transparent normal-case tracking-normal text-white shadow-none hover:bg-wmg-lime-500 hover:text-wmg-navy-950"
            >
              Solicitar avaliação técnica
            </Button>
          ) : null}
        </Container>
      </section>
    </>
  );
}
