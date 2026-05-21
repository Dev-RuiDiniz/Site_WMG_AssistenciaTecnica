# Layout e navegacao

## Visao geral

O projeto usa layout global com `SiteLayout`, `Header`, area principal, `Footer` e botao flutuante de WhatsApp.

A navegacao principal foi convertida para rotas reais:

- `/`
- `/servicos`
- `/equipamentos`
- `/sobre`
- `/contato`

## Estrutura das paginas

- `/`: home resumida com hero e CTAs para paginas internas.
- `/servicos`: cards comerciais e tecnicos dos servicos.
- `/equipamentos`: categorias de equipamentos atendidos.
- `/sobre`: contexto institucional e blocos de dor, beneficios e credibilidade.
- `/contato`: formulario de diagnostico tecnico.

## Responsividade

- mobile-first com grids progressivos para tablet e desktop;
- menu mobile disponivel abaixo de `md`;
- validacao E2E de ausencia de overflow horizontal nas rotas principais;
- formulario de contato validado em viewport responsiva.

## WhatsApp global

O botao flutuante fica no canto inferior direito e abre `wa.me` com mensagem pre-preenchida.

Comportamento:

- numero centralizado em `companyContent.phone`;
- link externo com `target="_blank"` e `rel="noopener noreferrer"`;
- icone-only (sem texto visivel);
- `aria-label` para acessibilidade.
