# Layout e navegação

## Visão geral

O layout base organiza a estrutura institucional do site WMG Assistência Técnica com header, navegação, conteúdo principal e footer.

A implementação atual usa navegação por âncoras internas, adequada para a fase inicial do site institucional. Não há roteador dedicado nesta etapa.

## Componentes

### `Header`

Arquivo: `src/components/layout/Header.tsx`

Responsabilidades:

- exibir identidade WMG;
- renderizar navegação principal no desktop;
- renderizar botão de menu mobile;
- controlar abertura e fechamento do menu mobile;
- exibir CTA para contato.

Acessibilidade aplicada:

- landmark `header`;
- navegação com `aria-label`;
- botão mobile com `aria-controls` e `aria-expanded`;
- links com texto acessível.

### `Footer`

Arquivo: `src/components/layout/Footer.tsx`

Responsabilidades:

- exibir descrição institucional;
- repetir links rápidos;
- exibir contatos públicos;
- encerrar a estrutura com landmark `contentinfo`.

### `SiteLayout`

Arquivo: `src/components/layout/SiteLayout.tsx`

Responsabilidades:

- compor `Header`, `main` e `Footer`;
- padronizar a estrutura global usada pelas páginas.

### `navigation.ts`

Arquivo: `src/components/layout/navigation.ts`

Centraliza os links usados no header e no footer:

```ts
[
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]
```

## Seções base

A página inicial usa IDs navegáveis:

- `#inicio`
- `#servicos`
- `#sobre`
- `#contato`

O critério de aceite da TASK-05 é atendido pelo link `Serviços`, que aponta para `#servicos`.

## Como adicionar uma nova seção

1. Criar a seção em `src/App.tsx` ou na futura página correspondente.
2. Definir um `id` estável para navegação.
3. Adicionar o item em `src/components/layout/navigation.ts`.
4. Criar ou atualizar testes de navegação.
5. Atualizar esta documentação se a seção fizer parte da navegação principal.

## Testes relacionados

- `src/components/layout/Header.test.tsx`
- `src/components/layout/Footer.test.tsx`
- `src/components/layout/SiteLayout.test.tsx`
- `src/App.test.tsx`

## Validação manual

Antes de abrir PR ou fazer merge:

```bash
npm test
npm run lint
npm run typecheck
npm run build
npm run check
```

Também validar manualmente:

- header em desktop;
- abertura e fechamento do menu mobile;
- clique no link `Serviços`;
- presença do footer;
- ausência de erros no console.
