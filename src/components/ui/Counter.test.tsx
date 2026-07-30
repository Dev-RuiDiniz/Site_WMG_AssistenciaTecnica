import { render, screen, waitFor } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
  it('exibe o valor final apos a animacao com prefixo e sufixo', async () => {
    render(<Counter value={98} suffix="%" duration={0.05} />);

    await waitFor(
      () => {
        expect(screen.getByText('98%')).toBeInTheDocument();
      },
      { timeout: 2000 },
    );
  });
});
