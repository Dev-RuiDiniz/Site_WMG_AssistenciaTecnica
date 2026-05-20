# Site WMG Assistência Técnica

Projeto do site institucional da WMG Assistência Técnica, criado para apresentar serviços técnicos industriais e servir como base para evolução comercial da presença digital da empresa.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Vitest
- Testing Library
- ESLint
- Prettier

## Documentação

| Documento | Finalidade |
| --- | --- |
| `docs/arquitetura.md` | Arquitetura inicial, estrutura e decisões técnicas |
| `docs/deploy.md` | Build, publicação, variáveis e rollback |
| `docs/design-system.md` | Tokens visuais e componentes base |
| `docs/layout.md` | Header, footer, layout global, navegação e mobile |
| `docs/quality.md` | Lint, type-check, Prettier, testes e fluxo antes de PR |

## Estrutura

```text
.
├── docs
│   ├── arquitetura.md
│   ├── deploy.md
│   ├── design-system.md
│   ├── layout.md
│   └── quality.md
├── src
│   ├── components
│   │   ├── layout
│   │   └── ui
│   ├── design-system
│   ├── styles
│   ├── test
│   ├── App.test.tsx
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── package.json
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Como rodar localmente

```bash
npm install
npm run dev
```

## Variáveis de ambiente

Use `.env.example` como referência:

```bash
cp .env.example .env.local
```

Variáveis públicas do Vite devem usar prefixo `VITE_`. Não versionar secrets, tokens, senhas, chaves privadas ou credenciais reais.

## Scripts disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor local |
| `npm test` | Executa testes com Vitest |
| `npm run test:watch` | Executa testes em modo observação |
| `npm run lint` | Executa ESLint |
| `npm run typecheck` | Executa TypeScript sem emitir arquivos |
| `npm run format` | Formata arquivos com Prettier |
| `npm run format:check` | Verifica formatação |
| `npm run check` | Executa format check, lint, type-check e testes |
| `npm run build` | Gera build de produção |
| `npm run preview` | Executa preview local do build |

## Layout e navegação

A aplicação possui layout global com header, navegação principal, menu mobile, conteúdo principal e footer institucional.

Seções base:

- `#inicio`
- `#servicos`
- `#sobre`
- `#contato`

O link `Serviços` aponta para `#servicos`.

Documentação completa: `docs/layout.md`.

## Qualidade

Antes de abrir ou atualizar uma PR:

```bash
npm run check
npm run build
```

Documentação completa: `docs/quality.md`.

## Design system

A identidade visual usa fundo navy, azul/ciano para detalhes tecnológicos e verde-limão para CTAs. Componentes reutilizáveis ficam em `src/components/ui`.

Documentação completa: `docs/design-system.md`.

## Arquitetura

O projeto atual é uma SPA estática com React + Vite. Não há backend, banco de dados, autenticação, autorização ou APIs internas nesta fase.

Documentação completa: `docs/arquitetura.md`.

## Deploy

O build gera arquivos estáticos em `dist/`.

```bash
npm install
npm run check
npm run build
```

Documentação completa: `docs/deploy.md`.

## TDD

1. Criar ou ajustar teste primeiro.
2. Implementar o mínimo necessário para passar.
3. Refatorar mantendo testes verdes.
4. Atualizar documentação.
5. Validar com scripts de qualidade.
6. Abrir Pull Request para revisão.

## Segurança

Secrets, tokens, senhas, chaves de API e credenciais reais nunca devem ser versionados.

## Fluxo de desenvolvimento

Use branches por tarefa e evite commits diretos na `main`.

```bash
git checkout -b feature/nome-da-tarefa
```

## Commits

Usar Conventional Commits em português do Brasil:

```text
tipo(escopo): descrição curta em português
```

Exemplos:

```text
feat(layout): cria header responsivo com navegacao
test(layout): adiciona testes de navegacao e estrutura base
docs(layout): documenta layout base e navegacao
```

## Pull Requests

Cada tarefa deve gerar PR com resumo, contexto, arquivos modificados, commits, como testar, evidências, riscos, rollback e checklist.
