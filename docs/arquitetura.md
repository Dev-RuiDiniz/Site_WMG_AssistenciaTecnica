# Arquitetura inicial

## Visão geral

O projeto `Site_WMG_AssistenciaTecnica` é um frontend institucional criado para apresentar a WMG Assistência Técnica e servir como base para evolução do site comercial.

A aplicação atual é uma SPA estática construída com React, Vite e TypeScript. Nesta fase não existem backend, banco de dados, autenticação, autorização, APIs internas ou integrações externas implementadas.

## Objetivo técnico

Manter uma base simples, testável e documentada para evoluir páginas institucionais, componentes reutilizáveis, design system e validações de qualidade sem introduzir complexidade prematura.

## Stack técnica

- React
- Vite
- TypeScript
- Tailwind CSS
- Vitest
- Testing Library
- ESLint
- Prettier

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
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Responsabilidades por área

### `src/App.tsx`

Composição inicial da página institucional. Deve permanecer focado em estrutura de tela e uso dos componentes base.

### `src/components/ui`

Componentes reutilizáveis de interface, como botões, cards, containers e títulos de seção. Novos componentes visuais devem preferir esta pasta quando forem reaproveitáveis.

### `src/design-system`

Tokens e decisões visuais centralizadas. A documentação complementar está em `docs/design-system.md`.

### `src/styles`

Estilos globais mínimos, incluindo base do Tailwind e resets necessários.

### `src/test`

Configurações e testes auxiliares de contrato, documentação e qualidade.

### `docs`

Documentação técnica do projeto, incluindo arquitetura, deploy, design system e qualidade de código.

## Fluxo da aplicação

1. `index.html` define o ponto de montagem `#root`.
2. `src/main.tsx` inicializa o React em modo estrito.
3. `src/App.tsx` renderiza a experiência institucional.
4. Componentes de `src/components/ui` fornecem a base visual reutilizável.
5. Tailwind aplica tokens e estilos configurados em `tailwind.config.ts`.

## Design system

A identidade visual inicial foi baseada no branding WMG, com:

- fundo navy escuro;
- azul/ciano para tecnologia e detalhes;
- verde-limão para CTAs e destaques;
- componentes reutilizáveis para reduzir estilos soltos.

Guia completo: `docs/design-system.md`.

## Qualidade de código

A base de qualidade inclui:

- TypeScript strict;
- ESLint;
- Prettier;
- Vitest;
- testes de contrato para scripts e documentação.

Guia completo: `docs/quality.md`.

## Variáveis de ambiente

O arquivo `.env.example` documenta variáveis públicas do frontend com prefixo `VITE_`.

As variáveis atuais são apenas públicas e institucionais. Secrets, tokens, senhas ou chaves privadas não devem ser versionados.

## Backend, banco e integrações

Não há backend, banco de dados, autenticação, autorização ou integrações externas nesta fase.

Quando esses recursos forem adicionados, esta documentação deve ser atualizada com:

- endpoints;
- fluxos de autenticação;
- permissões;
- models/schemas;
- variáveis de ambiente;
- riscos de segurança;
- estratégia de deploy e rollback.

## Decisões técnicas

- Usar React + Vite para manter o site leve e rápido.
- Usar Tailwind para acelerar consistência visual.
- Manter componentes reutilizáveis em `src/components/ui`.
- Criar documentação versionada desde a fundação do projeto.
- Usar testes de contrato para evitar perda de scripts e arquivos essenciais.

## Evolução futura

Possíveis evoluções:

- páginas específicas de serviços;
- formulário de contato;
- integração com WhatsApp;
- SEO e metadados por página;
- CI/CD;
- hospedagem estática;
- extração futura para monorepo se houver múltiplos apps/pacotes.
