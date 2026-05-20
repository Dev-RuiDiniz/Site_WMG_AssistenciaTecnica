# Site WMG Assistência Técnica

## Visão geral

Projeto do site institucional da WMG Assistência Técnica.

Esta base foi criada como fundação técnica do projeto, preparada para evoluir com páginas, componentes reutilizáveis, testes automatizados, documentação e fluxo de Pull Request.

## Objetivo

Disponibilizar uma aplicação web moderna, testável e documentada para apresentação dos serviços da WMG Assistência Técnica.

## Stack técnica

- React
- Vite
- TypeScript
- Vitest
- Testing Library
- ESLint

## Arquitetura inicial

O projeto segue uma estrutura simples de frontend, com separação entre aplicação, componentes, estilos e configuração de testes.

```text
.
├── src
│   ├── components
│   │   └── FeatureCard.tsx
│   ├── styles
│   │   └── global.css
│   ├── test
│   │   └── setup.ts
│   ├── App.test.tsx
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── eslint.config.js
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

## Como executar testes

```bash
npm test
```

Para execução em modo observação:

```bash
npm run test:watch
```

## Como validar qualidade

Execute lint:

```bash
npm run lint
```

Execute build:

```bash
npm run build
```

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
feat(app): cria estrutura inicial do site institucional
test(app): adiciona teste inicial da pagina principal
docs(readme): atualiza documentacao inicial do projeto
```

## TDD

Este projeto deve seguir TDD sempre que possível:

1. Criar ou ajustar teste primeiro.
2. Implementar o mínimo necessário para passar.
3. Refatorar mantendo testes verdes.
4. Atualizar documentação.
5. Validar com testes, lint e build.

## Segurança e variáveis de ambiente

Não há variáveis de ambiente obrigatórias nesta entrega inicial.

Secrets, tokens, senhas e chaves de API nunca devem ser versionados. Quando necessários, devem ser documentados em `.env.example` sem valores reais.

## Pull Requests

Cada tarefa deve gerar um Pull Request com:

- Resumo da alteração.
- Contexto e motivação.
- Arquivos alterados.
- Como testar.
- Evidências de validação.
- Riscos.
- Checklist.
