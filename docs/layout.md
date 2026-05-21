# Layout e navegação

## Visão geral

O projeto usa uma SPA institucional com navegação por âncoras internas. O layout global é composto por `SiteLayout`, `Header`, conteúdo principal e `Footer`.

## Estrutura principal

- `#inicio`: Hero e proposta principal.
- `#servicos`: cards de serviços técnicos/comerciais.
- `#sobre`: bloco institucional.
- `#contato`: chamada de contato.

## Seção de serviços

A TASK-09 evoluiu a seção `#servicos` para funcionar como página de serviços dentro da SPA atual.

Cada card de serviço exibe:

- nome do serviço;
- descrição curta;
- demanda atendida;
- como a WMG ajuda;
- CTA relacionado à demanda.

A estrutura usa grid responsivo:

- 1 coluna em telas menores;
- 2 colunas em telas médias;
- 3 colunas em telas grandes.

## Acessibilidade

- Seções usam `aria-labelledby` ou rótulos acessíveis.
- Cards mantêm headings internos.
- CTAs usam links com texto visível.
- A navegação continua baseada em âncoras internas.

## Evolução futura

Adicionar roteador dedicado somente quando houver páginas reais separadas, como `/servicos`, `/sobre` ou páginas individuais de serviço.
