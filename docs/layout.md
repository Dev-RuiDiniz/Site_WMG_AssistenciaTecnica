# Layout e navegação

## Visão geral

O projeto usa uma SPA institucional com navegação por âncoras internas. O layout global é composto por `SiteLayout`, `Header`, conteúdo principal, `Footer` e botão flutuante global do WhatsApp.

## Estrutura principal

- `#inicio`: Hero e proposta principal.
- `#servicos`: cards de serviços técnicos/comerciais.
- `#equipamentos`: categorias de equipamentos atendidos.
- `#sobre`: bloco institucional.
- `#contato`: formulário de diagnóstico e contato.

## Responsividade

A TASK-14 consolida o comportamento mobile-first:

- mobile usa 1 coluna por padrão;
- tablet passa a usar grids de 2 colunas quando há espaço;
- desktop usa grids de 3 ou 4 colunas conforme a seção;
- CTAs usam altura mínima adequada para toque;
- formulário usa campos em largura total no mobile;
- menu mobile fica disponível abaixo de `md`;
- header desktop preserva navegação horizontal;
- testes E2E validam ausência de overflow horizontal.

## WhatsApp global

O botão flutuante fica no canto inferior direito com área mínima de toque e link externo para `wa.me`.

Comportamento:

- número centralizado em `companyContent.phone`;
- mensagem pré-preenchida;
- `target="_blank"`;
- `rel="noopener noreferrer"`;
- label acessível para leitores de tela.

## Acessibilidade

- Seções usam IDs estáveis.
- CTAs usam texto visível.
- Cards mantêm headings internos.
- Header e footer expõem navegação por links.
- Formulário possui labels associados.
- WhatsApp flutuante possui `aria-label`.
