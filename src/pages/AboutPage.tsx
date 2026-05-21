import { homeContent } from '../content';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';

export function AboutPage() {
  return (
    <Container className="grid gap-20 py-16 md:py-24">
      <section aria-labelledby="about-title">
        <SectionTitle
          eyebrow={homeContent.aboutSection.eyebrow}
          title={homeContent.aboutSection.title}
          description={homeContent.aboutSection.description}
        />
      </section>

      <section aria-labelledby="pain-title" className="grid gap-8 rounded-3xl bg-slate-100 p-6 md:p-10">
        <SectionTitle
          eyebrow={homeContent.painSection.eyebrow}
          title={homeContent.painSection.title}
          description={homeContent.painSection.description}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {homeContent.painSection.points.map((point) => (
            <Card key={point.title}>
              <h2 className="text-xl font-black text-wmg-navy-950">{point.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{point.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-10" aria-labelledby="benefits-title">
        <SectionTitle
          eyebrow={homeContent.benefitsSection.eyebrow}
          title={homeContent.benefitsSection.title}
          description={homeContent.benefitsSection.description}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {homeContent.benefitsSection.benefits.map((benefit) => (
            <Card key={benefit.title}>
              <h2 className="text-xl font-black text-wmg-navy-950">{benefit.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section
        className="grid gap-10 rounded-3xl bg-wmg-navy-950 p-6 text-white md:p-10"
        aria-labelledby="credibility-title"
      >
        <SectionTitle
          eyebrow={homeContent.credibilitySection.eyebrow}
          title={homeContent.credibilitySection.title}
          description={homeContent.credibilitySection.description}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {homeContent.credibilitySection.items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-black text-wmg-lime-500">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-200">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
