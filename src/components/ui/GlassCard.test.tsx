import { render, screen } from '@testing-library/react';
import { GlassCard } from './GlassCard';

describe('GlassCard', () => {
  it('renderiza conteudo com efeito glass e tom padrao', () => {
    render(
      <GlassCard>
        <p>Conteúdo em vidro</p>
      </GlassCard>,
    );

    const card = screen.getByText(/conteúdo em vidro/i).closest('div');

    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('backdrop-blur-xl');
    expect(card).toHaveClass('border-white/10');
  });

  it('aplica tom lime quando solicitado', () => {
    render(
      <GlassCard tone="lime">
        <p>Destaque lime</p>
      </GlassCard>,
    );

    const card = screen.getByText(/destaque lime/i).closest('div');

    expect(card).toHaveClass('border-wmg-lime-500/30');
    expect(card).toHaveClass('shadow-wmg-glow-lime');
  });
});
