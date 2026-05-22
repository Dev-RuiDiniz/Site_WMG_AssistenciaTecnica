import { expect, test } from '@playwright/test';

test.describe('eventos críticos de analytics', () => {
  test('dataLayer recebe evento de WhatsApp sem dados pessoais', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: /abrir conversa no whatsapp/i }).click({ modifiers: ['ControlOrMeta'] });

    const events = await page.evaluate(() => window.dataLayer ?? []);
    expect(events).toContainEqual(
      expect.objectContaining({
        event: 'whatsapp_click',
        origin: 'floating_button',
      }),
    );

    expect(JSON.stringify(events)).not.toMatch(/email|telefone|phone|nome|name|descrição|descricao/i);
  });

  test('dataLayer recebe tentativa e sucesso do formulário com provider mockado', async ({ page }) => {
    await page.route('https://formsubmit.co/ajax/**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      });
    });

    await page.goto('/contato');
    await page.evaluate(() => sessionStorage.clear());

    await page.getByRole('textbox', { name: /nome/i }).fill('Pessoa QA');
    await page.getByRole('textbox', { name: /e-mail/i }).fill('qa@example.com');
    await page.getByRole('textbox', { name: /telefone/i }).fill('(12) 98888-7777');
    await page.getByRole('combobox', { name: /equipamento/i }).selectOption({ index: 1 });
    await page.getByRole('combobox', { name: /tipo de falha/i }).selectOption({ index: 1 });
    await page.getByRole('combobox', { name: /urgência/i }).selectOption({ index: 1 });
    await page.getByRole('textbox', { name: /descrição do problema/i }).fill(
      'Teste E2E com dados fictícios para validar evento sem expor payload pessoal.',
    );
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: /enviar diagnóstico/i }).click();

    await expect(page.getByText(/diagnóstico enviado/i)).toBeVisible();

    const events = await page.evaluate(() => window.dataLayer ?? []);
    expect(events).toContainEqual(expect.objectContaining({ event: 'contact_form_submit_attempt' }));
    expect(events).toContainEqual(expect.objectContaining({ event: 'contact_form_submit_success' }));
    expect(JSON.stringify(events)).not.toMatch(/qa@example\.com|98888|Pessoa QA|payload pessoal/i);
  });
});
