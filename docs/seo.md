# SEO técnico

## Visão geral

O projeto possui SEO técnico básico para as principais rotas públicas da SPA React/Vite.

A implementação centraliza metadados em `src/seo/seoConfig.ts` e aplica os dados no `<head>` com o componente `src/seo/Seo.tsx`.

## Rotas cobertas

| Rota | Finalidade |
| --- | --- |
| `/` | Página inicial |
| `/servicos` | Serviços industriais |
| `/equipamentos` | Equipamentos atendidos |
| `/sobre` | Informações institucionais |
| `/contato` | Solicitação de avaliação técnica |

## Metadados configurados

Cada rota possui:

- `title`;
- `description`;
- `keywords`;
- URL canônica;
- Open Graph básico;
- Twitter Card básico;
- `robots` com `index, follow`.

O site também possui schema JSON-LD do tipo `LocalBusiness`, usando os dados versionados em `src/content/company.ts`.

## Prioridade geográfica

A comunicação SEO segue uma hierarquia regional:

1. Vale do Paraíba e região, com Taubaté como cidade-base;
2. estado de São Paulo;
3. outras regiões do Brasil, sob consulta.

Essa ordem aparece nos títulos, descrições, palavras-chave e no campo `areaServed` do schema JSON-LD. A intenção é reforçar relevância local sem criar páginas artificiais para cidades que ainda não possuem conteúdo ou oferta específica.

## Arquivos estáticos

| Arquivo | Finalidade |
| --- | --- |
| `public/robots.txt` | Permite indexação do site público e aponta para o sitemap |
| `public/sitemap.xml` | Lista as rotas públicas canônicas e sua última atualização |
| `public/favicon.svg` | Ícone do site |
| `public/og-wmg-assistencia-tecnica.svg` | Imagem padrão de compartilhamento |

## Como alterar SEO de uma página

1. Abra `src/seo/seoConfig.ts`.
2. Atualize a entrada correspondente em `seoRoutes`.
3. Ajuste `title`, `description` e `keywords`.
4. Se a abrangência geográfica mudar, atualize também `organizationSchema.areaServed`.
5. Execute os testes.

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

## Como validar manualmente

1. Execute o projeto localmente.
2. Acesse cada rota pública.
3. Inspecione o `<head>` no navegador.
4. Confirme `title`, `description`, `og:title`, `og:description`, `og:url` e URL canônica.
5. Acesse `/robots.txt`.
6. Acesse `/sitemap.xml`.

## Observações técnicas

Como o projeto é uma SPA estática em React/Vite, os metadados por rota são aplicados no cliente. Isso atende ao SEO técnico básico previsto para esta fase, mas renderização server-side ou pré-renderização podem ser avaliadas futuramente caso a indexação orgânica exija maior robustez.
