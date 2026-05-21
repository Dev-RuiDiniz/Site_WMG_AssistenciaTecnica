import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { companyContent } from '../../content';
import { FloatingWhatsAppButton } from './FloatingWhatsAppButton';
import { normalizePhoneToDigits } from './whatsappLink';

describe('FloatingWhatsAppButton', () => {
  it('renderiza botao flutuante com link global do WhatsApp', () => {
    render(<FloatingWhatsAppButton />);

    const link = screen.getByRole('link', { name: /abrir conversa no whatsapp da wmg/i });
    expect(link).toHaveAttribute('href', expect.stringContaining(`https://wa.me/${normalizePhoneToDigits(companyContent.phone)}`));
    expect(link).toHaveAttribute('href', expect.stringContaining('text='));
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.queryByText(/^whatsapp$/i)).not.toBeInTheDocument();
    expect(screen.getByTestId('whatsapp-icon')).toBeInTheDocument();
  });
});
