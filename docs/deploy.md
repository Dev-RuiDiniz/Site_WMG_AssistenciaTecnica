# Deploy

## Visão geral

Este documento descreve o processo inicial de build e publicação do site WMG Assistência Técnica.

A aplicação atual é um frontend estático com React, Vite e TypeScript. O build de produção gera arquivos estáticos na pasta `dist/`.

## Pré-requisitos

- Node.js compatível com as dependências do projeto.
- npm disponível no ambiente.
- Dependências instaladas com `npm install`.
- Variáveis públicas configuradas quando necessário.

## Instalação

```bash
npm install
```

## Validação antes do deploy

Antes de publicar uma versão, execute:

```bash
npm run check
npm run build
```

O comando `npm run check` executa:

```bash
npm run format:check && npm run lint && npm run typecheck && npm test
```

## Build de produção

```bash
npm run build
```

Resultado esperado:

```text
dist/
```

A pasta `dist/` contém o artefato estático que deve ser publicado no provedor de hospedagem escolhido.

## Preview local do build

Após gerar o build:

```bash
npm run preview
```

Use o endereço exibido pelo Vite para validar manualmente a versão de produção local.

## Variáveis de ambiente

Use `.env.example` como referência.

Para ambiente local, crie um arquivo `.env.local` quando precisar sobrescrever valores:

```bash
cp .env.example .env.local
```

Variáveis públicas usadas pelo Vite devem começar com `VITE_`.

Não versionar:

- tokens;
- senhas;
- chaves privadas;
- secrets;
- credenciais de serviços externos.

## Estratégia de publicação

Como o projeto gera arquivos estáticos, ele pode ser hospedado em plataformas compatíveis com SPA/static hosting.

Configuração base esperada:

- comando de instalação: `npm install`;
- comando de build: `npm run build`;
- diretório de publicação: `dist`.

Não há servidor backend próprio nesta fase.

## Checklist de deploy

Antes de publicar:

- [ ] `npm install` executou sem erro.
- [ ] `npm run check` executou sem erro.
- [ ] `npm run build` executou sem erro.
- [ ] `.env.example` está atualizado.
- [ ] Variáveis do ambiente de destino foram revisadas.
- [ ] Não há secrets versionados.
- [ ] Build foi validado com `npm run preview`.
- [ ] PR foi revisada antes do merge.

## Rollback

Como o build é estático, o rollback recomendado é republicar a versão anterior estável ou reverter a PR responsável pela alteração.

Fluxo sugerido:

1. Identificar a PR ou commit que causou o problema.
2. Reverter a alteração no GitHub.
3. Executar `npm run check` e `npm run build`.
4. Publicar novamente o artefato `dist/`.

## Observações

Este documento deve ser atualizado quando houver:

- CI/CD;
- domínio final;
- provedor oficial de hospedagem;
- variáveis obrigatórias;
- backend;
- APIs;
- autenticação;
- integrações externas.
