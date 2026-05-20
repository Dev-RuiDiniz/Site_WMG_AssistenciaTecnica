import { Card } from './components/ui/Card';
import { Button } from './components/ui/Button';
import { Container } from './components/ui/Container';
import { SectionTitle } from './components/ui/SectionTitle';
import { SiteLayout } from './components/layout/SiteLayout';

const services = [
  {
    title: 'Manutenção de inversores',
    description: 'Diagnóstico e manutenção para reduzir paradas e recuperar a operação industrial.',
  },
  {
    title: 'Placas eletrônicas',
    description: 'Análise técnica e reparo de placas com foco em confiabilidade e rastreabilidade.',
  },
  {
    title: 'Servo drives e IHMs',
    description: 'Suporte especializado para equipamentos críticos de automação industrial.',
  },
];

function App() {
  return (
    <SiteLayout>
      <section
        id="inicio"
        className="relative overflow-hidden bg-wmg-hero text-white"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0 bg-wmg-radial" aria-hidden="true" />
        <div
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-wmg-cyan-400 to-transparent"
          aria-hidden="true"
        />

        <Container className="relative grid gap-10 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.22em] text-wmg-lime-500">
              Assistência técnica industrial
            </p>
            <h1 id="hero-title" className="text-5xl font-black leading-none md:text-7xl">
              WMG Assistência Técnica
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-semibold leading-9 text-slate-100 md:text-2xl">
              Sua máquina parada custa caro. A WMG coloca sua produção de volta em operação.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Especialistas em inversores, placas eletrônicas, servo drives, IHMs, CLPs e painéis
              elétricos industriais.
            </p>
          </div>

          <div className="flex flex-wrap gap-4" aria-label="Ações principais">
            <Button href="#contato">Solicitar avaliação técnica agora</Button>
            <Button href="#servicos" variant="secondary">
              Ver serviços
            </Button>
          </div>
        </Container>
      </section>

      <Container className="py-16 md:py-24">
        <section id="servicos" className="grid gap-10 scroll-mt-24" aria-labelledby="services-title">
          <SectionTitle
            eyebrow="Serviços"
            title="Componentes reutilizáveis com identidade visual WMG"
            description="A base visual centraliza cores, tipografia, botões, cards e estados interativos para manter consistência comercial e técnica nas próximas páginas."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} variant="service">
                <h3 className="mb-4 text-xl font-black text-wmg-lime-500">{service.title}</h3>
                <p className="leading-7 text-slate-200">{service.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="sobre" className="mt-20 scroll-mt-24" aria-labelledby="about-title">
          <SectionTitle
            eyebrow="Sobre"
            title="Base preparada para páginas comerciais"
            description="O layout global organiza a experiência institucional para evoluir com novas seções, campanhas e páginas de serviço sem duplicar navegação ou estrutura."
          />
        </section>

        <section id="contato" className="mt-20 scroll-mt-24" aria-labelledby="contact-title">
          <Card variant="highlight">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-wmg-lime-500">
              Contato
            </p>
            <h2 id="contact-title" className="text-3xl font-black text-white md:text-4xl">
              Solicite uma avaliação técnica
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-200">
              Entre em contato para diagnóstico, manutenção preventiva e suporte especializado para
              equipamentos industriais.
            </p>
            <div className="mt-6">
              <Button href="mailto:suporte@wmgassistenciatecnica.com.br">
                Falar com suporte
              </Button>
            </div>
          </Card>
        </section>
      </Container>
    </SiteLayout>
  );
}

export default App;
