import { expect, test, type Page } from '@playwright/test';

async function mockDiagnosticSubmit(page: Page, ok = true) {
  let calls = 0;

  await page.route('https://formsubmit.co/ajax/**', async (route) => {
    calls += 1;

    await route.fulfill({
      status: ok ? 200 : 500,
      contentType: 'application/json',
      body: JSON.stringify(ok ? { success: true } : { success: false }),
    });
  });

  return {
    calls: () => calls,
  };
}

async function fillValidDiagnosticForm(page: Page) {
  await page.getByRole('textbox', { name: /nome/i }).fill('Usuário Teste');
  await page.getByRole('textbox', { name: /e-mail/i }).fill('teste@example.com');
  await page.getByRole('textbox', { name: /telefone/i }).fill('(12) 99999-9999');
  await page.getByRole('combobox', { name: /equipamento/i }).selectOption({ index: 1 });
  await page.getByRole('combobox', { name: /tipo de falha/i }).selectOption({ index: 1 });
  await page.getByRole('combobox', { name: /urgência/i }).selectOption({ index: 1 });
  await page.getByRole('textbox', { name: /descrição do problema/i }).fill(
    'Equipamento industrial apresenta falha intermitente e precisa de avaliação técnica.',
  );
}

test.describe('formulário de contato crítico', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contato');
    await page.evaluate(() => sessionStorage.clear());
  });

  test('bloqueia envio vazio com mensagens de validação', async ({ page }) => {
    const submit = await mockDiagnosticSubmit(page);

    await page.getByRole('button', { name: /enviar diagnóstico/i }).click();

    await expect(page.getByText(/revise os campos/i)).toBeVisible();
    await expect(page.getByText(/informe seu nome/i)).toBeVisible();
    expect(submit.calls()).toBe(0);
  });

  test('bloqueia envio sem consentimento LGPD', async ({ page }) => {
    const submit = await mockDiagnosticSubmit(page);

    await fillValidDiagnosticForm(page);
    await page.getByRole('button', { name: /enviar diagnóstico/i }).click();

    await expect(page.getByText(/confirme o consentimento/i)).toBeVisible();
    expect(submit.calls()).toBe(0);
  });

  test('bloqueia envio quando honeypot está preenchido', async ({ page }) => {
    const submit = await mockDiagnosticSubmit(page);

    await fillValidDiagnosticForm(page);
    await page.locator('input[name="companyWebsite"]').fill('https://spam.example');
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: /enviar diagnóstico/i }).click();

    await expect(page.getByText(/não foi possível enviar/i)).toBeVisible();
    expect(submit.calls()).toBe(0);
  });

  test('envia formulário válido com provider mockado e registra analytics', async ({ page }) => {
    const submit = await mockDiagnosticSubmit(page, true);

    await fillValidDiagnosticForm(page);
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: /enviar diagnóstico/i }).click();

    await expect(page.getByText(/diagnóstico enviado/i)).toBeVisible();
    expect(submit.calls()).toBe(1);

    const dataLayer = await page.evaluate(() => window.dataLayer ?? []);
    expect(dataLayer).toContainEqual(expect.objectContaining({ event: 'contact_form_submit_attempt' }));
    expect(dataLayer).toContainEqual(expect.objectContaining({ event: 'contact_form_submit_success' }));

    const serializedEvents = JSON.stringify(dataLayer);
    expect(serializedEvents).not.toMatch(/teste@example\.com|99999|Usuário Teste|falha intermitente/i);
  });

  test('exibe erro amigável quando provider retorna falha', async ({ page }) => {
    const submit = await mockDiagnosticSubmit(page, false);

    await fillValidDiagnosticForm(page);
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: /enviar diagnóstico/i }).click();

    await expect(page.getByText(/use o e-mail ou whatsapp de fallback/i)).toBeVisible();
    expect(submit.calls()).toBe(1);

    const dataLayer = await page.evaluate(() => window.dataLayer ?? []);
    expect(dataLayer).toContainEqual(
      expect.objectContaining({
        event: 'contact_form_submit_error',
        error_type: 'provider',
      }),
    );
  });
});
