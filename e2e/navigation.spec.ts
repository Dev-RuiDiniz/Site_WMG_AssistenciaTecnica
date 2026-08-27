import { expect, test } from '@playwright/test';

const publicRoutes = [
  { path: '/', heading: /inteligência|assistência|produção/i },
  { path: '/servicos', heading: /serviços|diagnóstico|manutenção/i },
  { path: '/equipamentos', heading: /equipamentos|inversores|clps/i },
  { path: '/sobre', heading: /sobre|wmg|assistência/i },
  { path: '/contato', heading: /contato|avaliação|diagnóstico/i },
];

test.describe('navegação crítica', () => {
  test('carrega todas as rotas públicas com estrutura principal', async ({ page }) => {
    for (const route of publicRoutes) {
      await test.step(`validar rota ${route.path}`, async () => {
        await page.goto(route.path);
        await page.evaluate(() => window.scrollTo(0, 200));
        await expect(page.getByRole('banner')).toBeVisible();

        await expect(page).toHaveURL(
          new RegExp(`${route.path === '/' ? '/?$' : `${route.path}$`}`),
        );
        await expect(page.getByRole('banner')).toBeVisible();
        await expect(page.getByRole('main')).toBeVisible();
        await expect(page.getByRole('contentinfo')).toBeVisible();
        await expect(
          page.getByRole('main').getByRole('heading', { name: route.heading }).first(),
        ).toBeVisible();
      });
    }
  });

  test('permite navegar pelos links principais do site', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, 200));
    await expect(page.getByRole('banner')).toBeVisible();

    const routes = [
      { name: /serviços/i, url: /\/servicos$/ },
      { name: /equipamentos/i, url: /\/equipamentos$/ },
      { name: /a wmg|sobre/i, url: /\/sobre$/ },
      { name: /contato/i, url: /\/contato$/ },
    ];

    for (const route of routes) {
      await test.step(`navegar para ${route.name}`, async () => {
        await page.goto('/');
        await page.evaluate(() => window.scrollTo(0, 200));
        await expect(page.getByRole('banner')).toBeVisible();
        const mobileMenuButton = page
          .getByRole('banner')
          .getByRole('button', { name: /abrir menu de navegação/i });
        if (await mobileMenuButton.isVisible()) {
          await mobileMenuButton.click();
        }
        await page.getByRole('banner').getByRole('link', { name: route.name }).first().click();
        await expect(page).toHaveURL(route.url);
        await expect(page.getByRole('main')).toBeVisible();
      });
    }
  });

  test('redireciona rota inexistente para a home', async ({ page }) => {
    await page.goto('/rota-inexistente');

    await expect(page).toHaveURL(/\/$/);
    await expect(page.getByRole('main')).toBeVisible();
  });
});
