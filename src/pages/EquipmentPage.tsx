import { equipmentContent } from '../content';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';

export function EquipmentPage() {
  return (
    <Container className="py-16 md:py-24">
      <section className="grid gap-10" aria-labelledby="equipamentos-title">
        <SectionTitle
          eyebrow="Equipamentos atendidos"
          title="Categorias tecnicas atendidas pela WMG"
          description="A lista ajuda a qualificar rapidamente se a demanda esta dentro do escopo tecnico."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {equipmentContent.map((equipment) => (
            <Card key={equipment.slug}>
              <h2 className="text-xl font-black text-wmg-navy-950">{equipment.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{equipment.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
