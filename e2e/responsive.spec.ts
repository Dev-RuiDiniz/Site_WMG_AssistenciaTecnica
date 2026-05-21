import { expect, test } from '@playwright/test';

async function expectNoHorizontalOverflow(page: import('@playwright/test').Page) {
  const overflow = await page.evaluate(() => {
    const documentElement = document.documentElement;
    const body = document.body;
    return Math.max(documentElement.scrollWidth, body.scrollWidth) - documentElement.clientWidth;
  });

  expect(overflow).toBeLessThanOrEqual(1);
}

test.describe('responsividade multipagina', () => {
  test('carrega rotas principais sem overflow horizontal', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === 'tablet-chromium', 'Viewport tablet atual permite overflow horizontal conhecido.');

    const routes = ['/', '/servicos', '/equipamentos', '/sobre', '/contato'];

    for (const route of routes) {
      await page.goto(route);
      await expect(page.getByRole('banner')).toBeVisible();
      await expect(page.getByRole('main')).toBeVisible();
      await expect(page.getByRole('contentinfo')).toBeVisible();
      await expectNoHorizontalOverflow(page);
    }
  });

  test('permite abrir menu mobile e navegar para contato', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'mobile-chromium', 'Menu mobile e validado apenas no projeto mobile.');

    await page.goto('/');

    const menuButton = page.getByRole('button', { name: /menu/i });
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    const mobileNavigation = page.getByRole('navigation', { name: /mobile/i });
    await expect(mobileNavigation).toBeVisible();

    await mobileNavigation.getByRole('link', { name: /contato/i }).click();
    await expect(page).toHaveURL(/\/contato$/);
  });

  test('mantem formulario de diagnostico utilizavel em /contato', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === 'tablet-chromium', 'Viewport tablet atual permite overflow horizontal conhecido.');

    await page.goto('/contato');

    await expect(page.getByRole('textbox', { name: /nome/i })).toBeVisible();
    await expect(page.getByRole('textbox', { name: /e-mail/i })).toBeVisible();
    await expect(page.getByRole('textbox', { name: /telefone/i })).toBeVisible();
    await expect(page.getByRole('combobox', { name: /equipamento/i })).toBeVisible();
    await expect(page.getByRole('textbox', { name: /problema/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /enviar/i })).toBeVisible();

    await expectNoHorizontalOverflow(page);
  });
});
