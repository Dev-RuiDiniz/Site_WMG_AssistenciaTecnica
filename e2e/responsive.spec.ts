import { expect, test } from '@playwright/test';

async function expectNoHorizontalOverflow(page: import('@playwright/test').Page) {
  const overflow = await page.evaluate(() => {
    const documentElement = document.documentElement;
    const body = document.body;
    return Math.max(documentElement.scrollWidth, body.scrollWidth) - documentElement.clientWidth;
  });

  expect(overflow).toBeLessThanOrEqual(1);
}

test.describe('responsividade da landing', () => {
  test('carrega sem overflow horizontal e mantem secoes principais legiveis', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();

    await expect(page.getByRole('heading', { name: /wmg assistência técnica/i })).toBeVisible();
    await expect(page.locator('#servicos')).toBeVisible();
    await expect(page.locator('#equipamentos')).toBeVisible();
    await expect(page.locator('#contato')).toBeVisible();

    await expectNoHorizontalOverflow(page);
  });

  test('permite abrir menu mobile e navegar para contato', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === 'desktop-chromium', 'Menu mobile não é exibido no desktop.');

    await page.goto('/');

    const menuButton = page.getByRole('button', { name: /abrir menu de navegação/i });
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    const mobileNavigation = page.getByRole('navigation', { name: /navegação mobile/i });
    await expect(mobileNavigation).toBeVisible();

    await mobileNavigation.getByRole('link', { name: /contato/i }).click();
    await expect(page.locator('#contato')).toBeInViewport();

    await expectNoHorizontalOverflow(page);
  });

  test('mantem formulario de diagnostico utilizavel em telas responsivas', async ({ page }) => {
    await page.goto('/#contato');

    await expect(page.getByLabel(.nome/i)).toBeVisible();
    await expect(page.getByLabel(/e-mail/i)).toBeVisible();
    await expect(page.getByLabel(/telefone/i)).toBeVisible();
    await expect(page.getByLabel(/equipamento/i)).toBeVisible();
    await expect(page.getByLabel(/descrição do problema/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /enviar diagnóstico/i })).toBeVisible();

    await expectNoHorizontalOverflow(page);
  });
});
