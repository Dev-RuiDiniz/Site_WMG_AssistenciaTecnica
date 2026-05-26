import { expect, test } from '@playwright/test';

test.describe('CTAs críticos', () => {
  test('CTAs internos da Home levam para rotas funcionais', async ({ page }) => {
    await page.goto('/');

    await test.step('CTA de serviços abre a página de serviços', async () => {
      await page.locator('main a[href="/servicos"]').first().click();
      await expect(page).toHaveURL(/\/servicos$/);
      await expect(page.getByRole('main')).toBeVisible();
    });

    await test.step('CTA de contato abre a página de contato', async () => {
      await page.goto('/');
      await page.locator('main a[href="/contato"]').first().click();
      await expect(page).toHaveURL(/\/contato$/);
      await expect(page.getByRole('button', { name: /enviar diagnóstico/i })).toBeVisible();
    });
  });

  test('botão flutuante de WhatsApp tem destino externo e dispara evento de analytics', async ({ page }) => {
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
