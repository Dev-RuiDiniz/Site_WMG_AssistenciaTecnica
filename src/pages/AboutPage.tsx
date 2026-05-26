import { homeContent, visualAssets } from '../content';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { MediaFrame } from '../components/ui/MediaFrame';
import { SectionTitle } from '../components/ui/SectionTitle';

export function AboutPage() {
  return (
    <Container className="grid gap-20 py-16 md:py-24">
      <section
        className="grid gap-10 md:grid-cols-[1fr_0.82fr] md:items-center"
        aria-labelledby="about-title"
      >
        <div>
          <SectionTitle
            eyebrow={homeContent.aboutSection.eyebrow}
            title="Assistência técnica para operações que dependem de continuidade"
            description={homeContent.aboutSection.description}
          />
        </div>
        <MediaFrame asset={visualAssets.maintenance} />
      </section>

      <section
        aria-labelledby="pain-title"
        className="grid gap-8 rounded-3xl border border-wmg-cyan-400/20 bg-wmg-hero p-6 text-white shadow-wmg-card md:p-10"
      >
        <SectionTitle
          eyebrow={homeContent.painSection.eyebrow}
          title={homeContent.painSection.title}
          description={homeContent.painSection.description}
          tone="dark"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {homeContent.painSection.points.map((point) => (
            <Card key={point.title} variant="service" className="bg-white/[0.06]">
              <h2 className="text-xl font-black text-wmg-lime-500">{point.title}</h2>
              <p className="mt-3 leading-7 text-slate-200">{point.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
