import { equipmentContent, visualAssets } from '../content';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { MediaFrame } from '../components/ui/MediaFrame';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';
import { SectionTitle } from '../components/ui/SectionTitle';

export function EquipmentPage() {
  return (
    <Container className="grid gap-16 py-16 md:py-24">
      <section
        className="grid gap-10 md:grid-cols-[0.8fr_1fr] md:items-center"
        aria-labelledby="equipamentos-title"
      >
        <MediaFrame asset={visualAssets.hero} />
        <SectionTitle
          eyebrow="Equipamentos atendidos"
          title="Categorias técnicas atendidas pela WMG"
          description="A lista ajuda a qualificar rapidamente se a demanda está dentro do escopo técnico para diagnóstico, reparo ou suporte."
        />
      </section>

      <section aria-label="Categorias de equipamentos" className="grid gap-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {equipmentContent.map((equipment, index) => (
            <RevealOnScroll key={equipment.slug} delay={index * 0.05}>
              <Card className="h-full shadow-sm transition hover:-translate-y-1 hover:scale-[1.02] hover:border-wmg-cyan-400/50 hover:shadow-wmg-card">
                <h2 className="text-xl font-black text-wmg-navy-950">{equipment.title}</h2>
                <p className="mt-3 leading-7 text-slate-700">{equipment.description}</p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </Container>
  );
}
