import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SiteLayout } from './SiteLayout';

describe('SiteLayout', () => {
  it('renderiza layout global com header, main, footer e WhatsApp flutuante', () => {
    render(
      <SiteLayout>
        <p>Conteúdo da página</p>
      </SiteLayout>,
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toHaveTextContent('Conteúdo da página');
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /abrir conversa no whatsapp da wmg/i })).toHaveAttribute(
      'href',
      expect.stringContaining('https://wa.me/551234260300'),
    );
  });
});
