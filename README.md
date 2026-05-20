# Site WMG Assistência Técnica

## Visão geral

Projeto do site institucional da WMG Assistência Técnica, criado para apresentar serviços técnicos industriais e servir como base para evolução comercial da presença digital da empresa.

A aplicação atual é um frontend estático com React, Vite, TypeScript, Tailwind CSS, Vitest, Testing Library, ESLint e Prettier.

## Objetivo

Disponibilizar uma aplicação web moderna, testável, documentada e preparada para evolução com páginas institucionais, componentes reutilizáveis, design system, validações automatizadas e fluxo de Pull Request.

## Stack técnica

- React
- Vite
- TypeScript
- Tailwind CSS
- Vitest
- Testing Library
- ESLint
- Prettier

## Documentação disponível

| Documento | Finalidade |
| --- | --- |
| `docs/arquitetura.md` | Arquitetura inicial, estrutura, decisões técnicas e limites atuais |
| `docs/deploy.md` | Processo inicial de build, publicação, variáveis e rollback |
| `docs/design-system.md` | Tokens visuais, componentes base e regras de uso do design system |
| `docs/quality.md` | Scripts de qualidade, lint, type-check, Prettier e fluxo antes de PR |

## Estrutura de pastas

```text
.
├── docs
│   ├── arquitetura.md
│   ├── deploy.md
│   ├── design-system.md
│   └── quality.md
├── src
│   ├── components
│   │   └── ui
│   ├── design-system
│   │   └── tokens.ts
│   ├── styles
│   │   └── global.css
│   ├── test
│   │   ├── documentation.test.ts
│   │   ├── quality-scripts.test.ts
│   │   └── setup.ts
│   ├── App.test.tsx
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Como rodar localmente

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

Abra o endereço informado pelo Vite no navegador.

## Variáveis de ambiente

O projeto possui um arquivo de referência:

```text
.env.example
```

Para sobrescrever valores localmente:

```bash
cp .env.example .env.local
```

As variáveis públicas do Vite devem usar prefixo `VITE_`.

Não versionar secrets, tokens, senhas, chaves privadas ou credenciais reais.

## Scripts disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor local de desenvolvimento |
| `npm test` | Executa os testes automatizados com Vitest |
| `npm run test:watch` | Executa testes em modo observação |
| `npm run lint` | Executa ESLint |
| `npm run typecheck` | Executa TypeScript sem emitir arquivos |
| `npm run format` | Formata arquivos com Prettier |
| `npm run format:check` | Verifica formatação sem alterar arquivos |
| `npm run check` | Executa format check, lint, type-check e testes |
| `npm run build` | Gera build de produção |
| `npm run preview` | Executa preview local do build |

## Qualidade de código

Antes de abrir ou atualizar uma PR, execute:

```bash
npm run check
npm run build
```

A documentação completa está em:

```text
docs/quality.md
```

## Design system WMG

A identidade visual inicial foi baseada no banner WMG usado na TASK-02.

Princípios visuais:

- fundo principal em navy escuro;
- azul e ciano para tecnologia, circuitos e detalhes;
- verde-limão para CTAs e destaques comerciais;
- texto branco em fundos escuros;
- componentes reutilizáveis para evitar estilos soltos.

A documentação completa está em:

```text
docs/design-system.md
```

## Arquitetura

O projeto atual é uma SPA estática com React + Vite.

Não há backend, banco de dados, autenticação, autorização ou APIs internas nesta fase.

A documentação completa está em:

```text
docs/arquitetura.md
```

## Deploy

O build de produção gera arquivos estáticos na pasta:

```text
dist/
```

Comandos base:

```bash
npm install
npm run check
npm run build
```

A documentação completa está em:

```text
docs/deploy.md
```

## TDD

Este projeto deve seguir TDD sempre que possível:

1. Criar ou ajustar teste primeiro.
2. Implementar o mínimo necessário para passar.
3. Refatorar mantendo testes verdes.
4. Atualizar documentação.
5. Validar com scripts de qualidade.
6. Abrir Pull Request para revisão.

## Segurança

Secrets, tokens, senhas, chaves de API e credenciais reais nunca devem ser versionados.

Quando houver backend, APIs, autenticação, uploads, dados pessoais ou integrações externas, a documentação deve ser atualizada com análise de segurança, autorização, logs, retenção e LGPD.

## Fluxo de desenvolvimento

As alterações devem ser feitas em branches de tarefa, evitando commits diretos na `main`.

Exemplo:

```bash
git checkout -b feature/nome-da-tarefa
```

## Padrão de commits

Os commits devem seguir Conventional Commits em português do Brasil:

```text
tipo(escopo): descrição curta em português
```

Exemplos:

```text
feat(ui): cria componentes base do design system WMG
test(docs): adiciona teste de contrato da documentacao
docs(readme): consolida documentacao inicial do projeto
build(quality): configura prettier no projeto
```

## Pull Requests

Cada tarefa deve gerar um Pull Request com:

- resumo da alteração;
- contexto e motivação;
- arquivos modificados;
- commits realizados;
- como testar;
- evidências de validação;
- riscos;
- estratégia de rollback;
- checklist.
