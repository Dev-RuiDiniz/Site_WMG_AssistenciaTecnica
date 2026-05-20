import { FeatureCard } from './components/FeatureCard';

const services = [
  {
    title: 'Diagnóstico técnico',
    description: 'Análise inicial para identificar falhas e orientar a melhor solução.',
  },
  {
    title: 'Manutenção preventiva',
    description: 'Cuidados planejados para reduzir riscos, paradas e custos futuros.',
  },
  {
    title: 'Suporte especializado',
    description: 'Atendimento técnico focado em clareza, confiança e resolução.',
  },
];

function App() {
  return (
    <main className="app-shell">
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Assistência técnica especializada</p>
        <h1 id="hero-title">WMG Assistência Técnica</h1>
        <p className="hero-description">
          Soluções rápidas e confiáveis para manutenção técnica, suporte e orientação
          com atendimento próximo e profissional.
        </p>
        <div className="hero-actions" aria-label="Ações principais">
          <a className="primary-action" href="mailto:contato@wmgassistencia.com.br">
            Solicitar atendimento
          </a>
          <a className="secondary-action" href="#servicos">
            Ver serviços
          </a>
        </div>
      </section>

      <section id="servicos" className="services" aria-labelledby="services-title">
        <div>
          <p className="eyebrow">Serviços</p>
          <h2 id="services-title">Base preparada para evoluir o site institucional</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <FeatureCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
