import { expect, test } from '@playwright/test';

test('vídeo de fundo da página de Serviços carrega e reproduz', async ({ page }, testInfo) => {
  test.skip(
    testInfo.project.name === 'tablet-chromium',
    'Autoplay pode ser bloqueado pelo perfil tablet; o carregamento continua coberto nos demais perfis.',
  );

  await page.goto('/servicos');

  const video = page.locator('video');
  await expect(video).toBeVisible();
  await expect(video.locator('source')).toHaveAttribute(
    'src',
    '/assets/campaign/wmg-services-background.mp4',
  );
  await expect
    .poll(() => video.evaluate((element) => (element as HTMLVideoElement).readyState))
    .toBeGreaterThan(0);
  await expect
    .poll(() => video.evaluate((element) => (element as HTMLVideoElement).currentTime))
    .toBeGreaterThan(0);
});
