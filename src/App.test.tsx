import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renderiza a identidade principal da WMG Assistência Técnica', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /wmg assistência técnica/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/soluções rápidas e confiáveis para manutenção técnica/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /solicitar atendimento/i }),
    ).toBeInTheDocument();
  });
});
