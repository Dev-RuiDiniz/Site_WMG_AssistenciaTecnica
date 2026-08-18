import { expect, test } from '@playwright/test';

test.describe('CTAs críticos', () => {
  test('Home mantém navegação essencial sem CTAs extras', async ({ page }) => {
    await page.goto('/');

    await test.step('links extras do hero não são renderizados', async () => {
      await expect(page.locator('main a[href="/contato"]')).toHaveCount(0);
      await expect(page.getByRole('link', { name: /conheça nossas soluções/i })).toHaveCount(0);
      await expect(page.getByRole('link', { name: /solicitar atendimento/i })).toHaveCount(0);
    });

    await test.step('link de serviços abre a página de serviços', async () => {
      await page.locator('main a[href="/servicos"]').first().click();
      await expect(page).toHaveURL(/\/servicos$/);
      await expect(page.getByRole('main')).toBeVisible();
    });
  });

  test('botão flutuante de WhatsApp tem destino externo e dispara evento de analytics', async ({
    page,
  }) => {
    await page.goto('/');

    const whatsappButton = page.getByRole('link', { name: /abrir conversa no whatsapp/i });
    await expect(whatsappButton).toBeVisible();
    await expect(whatsappButton).toHaveAttribute('href', /wa\.me|whatsapp/i);

    await whatsappButton.click({ modifiers: ['ControlOrMeta'] });

    const dataLayer = await page.evaluate(() => window.dataLayer ?? []);
    expect(dataLayer).toContainEqual(
      expect.objectContaining({
        event: 'whatsapp_click',
        action: 'click',
        category: 'contact',
        channel: 'whatsapp',
        origin: 'floating_button',
      }),
    );
  });
});
