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

- `/`: hero em video com CTAs, metricas animadas, secao "como funciona", cards de servicos/equipamentos/contato, depoimentos e CTA final.
- `/servicos`: cards comerciais e tecnicos dos servicos com animacao de entrada ao rolar.
- `/equipamentos`: categorias de equipamentos atendidos com animacao de entrada ao rolar.
- `/sobre`: contexto institucional, blocos de dor e timeline "como funciona".
- `/contato`: formulario de diagnostico tecnico com coluna de canais diretos em glassmorphism.

## Efeitos visuais

- Hero da Home usa `VideoHero` (video em loop com poster de fallback).
- Secoes usam `RevealOnScroll` para fade/slide ao entrar na viewport.
- Metricas da Home usam `Counter` para contagem animada.
- Superficies de destaque usam `GlassCard` (glassmorphism).
- Todas as animacoes respeitam `prefers-reduced-motion`.

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
