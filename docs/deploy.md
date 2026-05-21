# Deploy

## Visao geral

Este documento descreve o fluxo de build e publicacao do site WMG Assistencia Tecnica.

Aplicacao: frontend estatico com React, Vite e TypeScript.
Artefato final: `dist/`.

## Pre-requisitos

- Node.js compativel com o projeto.
- npm instalado.
- Dependencias instaladas com `npm install`.
- Variaveis publicas configuradas quando necessario.

## Instalacao e validacao

```bash
npm install
npm run check
npm run build
```

## Build e preview local

```bash
npm run build
npm run preview
```

## Rotas diretas e fallback SPA

Como o app usa rotas reais (`/servicos`, `/equipamentos`, `/sobre`, `/contato`), o provedor precisa redirecionar rotas nao encontradas para `index.html`.

Sem esse fallback, abrir uma rota direta no navegador pode retornar 404.

Resumo recomendado no host:

- servir arquivos estaticos de `dist/`;
- manter fallback de navegacao para `index.html`;
- preservar cache adequado para assets versionados.

## Variaveis de ambiente

Use `.env.example` como referencia.

Para ambiente local:

```bash
cp .env.example .env.local
```

Variaveis publicas no Vite devem iniciar com `VITE_`.

Nao versionar secrets, tokens, senhas ou chaves privadas.

## Checklist

- [ ] `npm install` sem erro
- [ ] `npm run check` sem erro
- [ ] `npm run build` sem erro
- [ ] fallback para `index.html` configurado no host
- [ ] build validado via `npm run preview`

## Rollback

1. Identificar commit/PR com problema.
2. Reverter no Git.
3. Executar `npm run check` e `npm run build`.
4. Republicar `dist/`.
