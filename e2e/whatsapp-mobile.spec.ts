import { expect, test } from '@playwright/test';

const expectedPhone = '5512991588460';

test.describe('WhatsApp responsivo', () => {
  test('botão flutuante mantém numero e mensagem pre-preenchida', async ({ page }) => {
    await page.goto('/');

    const whatsapp = page.getByRole('link', { name: /abrir conversa no whatsapp da wmg/i });
    await expect(whatsapp).toBeVisible();

    const href = await whatsapp.getAttribute('href');
    expect(href).toContain(`https://wa.me/${expectedPhone}`);
    expect(href).toContain('text=');
    expect(decodeURIComponent(href ?? '')).toContain('Olá, equipe WMG');
  });

  test('CTA falar com suporte mantém link global do WhatsApp', async ({ page }) => {
    await page.goto('/#servicos');

    const supportLinks = page.getByRole('link', { name: /falar com suporte/i });
    const firstHref = await supportLinks.first().getAttribute('href');

    expect(firstHref).toContain(`https://wa.me/${expectedPhone}`);
    expect(firstHref).toContain('text=');
  });
});
