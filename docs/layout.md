# Layout e navegação

## Visão geral

O projeto usa uma SPA institucional com navegação por âncoras internas. O layout global é composto por `SiteLayout`, `Header`, conteúdo principal, `Footer` e botão flutuante global do WhatsApp.

## Estrutura principal

- `#inicio`: Hero e proposta principal.
- `#servicos`: cards de serviços técnicos/comerciais.
- `#equipamentos`: categorias de equipamentos atendidos.
- `#sobre`: bloco institucional.
- `#contato`: formulário de diagnóstico e contato.

## WhatsApp global

A TASK-13 adicionou um botão flutuante global de WhatsApp em todas as seções da SPA.

Comportamento:

- canto inferior direito;
- link externo para `wa.me`;
- número centralizado em `companyContent.phone`;
- mensagem pré-preenchida;
- `target="_blank"`;
- `rel="noopener noreferrer"`;
- label acessível para leitores de tela.

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
- WhatsApp flutuante possui `aria-label`.
