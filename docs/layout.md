# Layout e navegação

## Visão geral

O projeto usa uma SPA institucional com navegação por âncoras internas. O layout global é composto por `SiteLayout`, `Header`, conteúdo principal e `Footer`.

## Estrutura principal

- `#inicio`: Hero e proposta principal.
- `#servicos`: cards de serviços técnicos/comerciais.
- `#equipamentos`: categorias de equipamentos atendidos.
- `#sobre`: bloco institucional.
- `#contato`: chamada de contato.

## Seção de serviços

A seção `#servicos` apresenta cards com nome do serviço, descrição, demanda atendida, resposta da WMG e CTA.

## Seção de equipamentos

A TASK-10 adicionou `#equipamentos` à navegação principal.

Cada card de equipamento apresenta:

- categoria técnica;
- descrição clara;
- linguagem técnica/comercial;
- escopo sem prometer atendimento fora da lista.

A grade é responsiva:

- 1 coluna em telas menores;
- 2 colunas em telas médias;
- 4 colunas em telas grandes.

## Navegação

Os links principais ficam em `src/content/navigation.ts` e são usados no header e no footer.

Itens atuais:

```ts
[
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Equipamentos', href: '#equipamentos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]
```

## Acessibilidade

- Seções usam IDs estáveis.
- CTAs usam links com texto visível.
- Cards mantêm headings internos.
- Header e footer expõem navegação por links.

## Evolução futura

Adicionar rota dedicada `/equipamentos` apenas se o projeto deixar de ser uma landing SPA por âncoras.
