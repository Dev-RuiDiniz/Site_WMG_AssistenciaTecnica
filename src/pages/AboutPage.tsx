import { homeContent } from '../content';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { GlassCard } from '../components/ui/GlassCard';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';
import { SectionTitle } from '../components/ui/SectionTitle';

export function AboutPage() {
  return (
    <Container className="grid gap-20 py-16 md:py-24">
      <section aria-labelledby="about-title" className="flex justify-center text-center">
        <SectionTitle
          eyebrow={homeContent.aboutSection.eyebrow}
          title="Assistência técnica para operações que dependem de continuidade"
          eyebrowClassName="text-center text-base md:text-lg"
          titleClassName="text-center"
        />
      </section>

      <section
        aria-labelledby="pain-title"
        className="grid gap-10 rounded-3xl border border-wmg-cyan-400/20 bg-wmg-hero p-6 text-white shadow-wmg-card md:p-10"
      >
        <div className="flex justify-center text-center">
          <SectionTitle
            eyebrow={homeContent.painSection.eyebrow}
            title={homeContent.painSection.title}
            description={homeContent.painSection.description}
            tone="dark"
            eyebrowClassName="text-center text-base md:text-lg"
            titleClassName="text-center"
            descriptionClassName="text-center"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {homeContent.painSection.points.map((point, index) => (
            <RevealOnScroll key={point.title} delay={index * 0.08}>
              <Card variant="service" className="h-full bg-white/[0.04] text-center shadow-none">
                <h2 className="text-center text-xl font-black text-wmg-lime-500">{point.title}</h2>
                <p className="mt-3 text-center leading-7 text-slate-200">{point.description}</p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section aria-labelledby="timeline-title" className="grid gap-8">
        <div className="flex justify-center text-center">
          <SectionTitle
            eyebrow={homeContent.howItWorksSection.eyebrow}
            title={homeContent.howItWorksSection.title}
            description={homeContent.howItWorksSection.description}
            eyebrowClassName="text-center text-base md:text-lg"
            titleClassName="text-center"
            descriptionClassName="text-center"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {homeContent.howItWorksSection.steps.map((step, index) => (
            <RevealOnScroll key={step.step} delay={index * 0.1}>
              <GlassCard tone={index % 2 === 0 ? 'cyan' : 'lime'} className="h-full text-center">
                <h3 className="text-xl font-black text-center text-wmg-navy-950">{step.title}</h3>
                <p className="mt-3 text-center leading-7 text-slate-700">{step.description}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </Container>
  );
}
