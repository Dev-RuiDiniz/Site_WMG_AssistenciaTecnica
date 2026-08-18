import vercelConfig from '../../vercel.json';

describe('configuração de deploy na Vercel', () => {
  it('redireciona rotas do SPA para o index.html', () => {
    expect(vercelConfig.rewrites).toContainEqual({
      source: '/(.*)',
      destination: '/index.html',
    });
  });
});
