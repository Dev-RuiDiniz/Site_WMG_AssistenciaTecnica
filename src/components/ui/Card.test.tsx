import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renderiza conteudo com variante de servico WMG', () => {
    render(
      <Card variant="service">
        <h3>Placas eletrônicas</h3>
        <p>Manutenção técnica especializada.</p>
      </Card>,
    );

    const card = screen.getByText(/placas eletrônicas/i).closest('article');

    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('bg-wmg-navy-900/80');
    expect(card).toHaveClass('border-wmg-cyan-400/30');
  });
});
