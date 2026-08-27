# Design System WMG

## Visão geral

O design system inicial da WMG centraliza tokens visuais e componentes reutilizáveis para manter consistência visual no site institucional.

A referência de branding desta entrega é o banner WMG enviado para a TASK-02, com estética industrial, tecnológica e comercial.

## Princípios visuais

- Fundo escuro em navy para áreas de maior impacto.
- Destaques em verde-limão para CTAs e mensagens comerciais.
- Azul e ciano para reforçar tecnologia, circuitos e manutenção industrial.
- Alto contraste entre texto e fundo.
- Componentes reutilizáveis para evitar estilos soltos.
- Glassmorphism (superfícies translúcidas com blur) para reforçar profundidade em seções de destaque.
- Scroll reveal e micro-interações (hover glow, elevação, contadores animados) para uma experiência mais premium.
- Hero com vídeo institucional em loop (com poster de fallback) para maior imersão, respeitando `prefers-reduced-motion`.

## Tokens principais

### Cores

| Token | Uso |
| --- | --- |
| `wmg.navy.950` | Fundo principal escuro |
| `wmg.navy.900` | Superfícies escuras |
| `wmg.blue.700` | Apoio tecnológico |
| `wmg.cyan.400` | Brilhos, foco e detalhes |
| `wmg.lime.500` | CTA principal e destaques |
| `wmg.graphite.900` | Texto principal em fundos claros |
| `white` | Texto principal em fundos escuros |

### Tipografia

A base usa fonte sans-serif do sistema, com pesos fortes para títulos e CTAs. Os títulos devem priorizar impacto visual, enquanto textos de apoio devem manter boa leitura.

### Radius e sombras

- `rounded-3xl` para cards e superfícies grandes.
- `rounded-full` para CTAs.
- `shadow-wmg-glow` para elementos de destaque em ciano.
- `shadow-wmg-glow-lime` para elementos de destaque em verde-limão.
- `shadow-wmg-card` para cards em superfícies escuras.
- `shadow-wmg-glass` para superfícies com efeito de vidro.

### Gradientes e animações

- `bg-wmg-hero` / `bg-wmg-hero-video`: gradientes de fundo escuro para heros e seções de destaque.
- `bg-wmg-glass`: gradiente sutil ciano/lime usado como base de superfícies translúcidas.
- `bg-wmg-shimmer` + `animate-shimmer`: brilho animado usado em CTAs finais.
- `animate-fade-up`, `animate-float`: keyframes utilitários disponíveis via Tailwind.

## Componentes base

### Button

Arquivo: `src/components/ui/Button.tsx`

Variantes disponíveis:

- `primary`: CTA principal WMG com verde-limão.
- `secondary`: botão contornado em ciano.
- `ghost`: ação discreta.

Exemplo:

```tsx
<Button href="mailto:suporte@wmgassistenciatecnica.com.br">
  Solicitar avaliação técnica agora
</Button>
```

### Card

Arquivo: `src/components/ui/Card.tsx`

Variantes disponíveis:

- `default`: superfície clara.
- `service`: card escuro para serviços.
- `highlight`: card de destaque com glow verde.

Exemplo:

```tsx
<Card variant="service">
  <h3>Manutenção de inversores</h3>
  <p>Diagnóstico e manutenção para reduzir paradas.</p>
</Card>
```

### Container

Arquivo: `src/components/ui/Container.tsx`

Centraliza o conteúdo com largura máxima padronizada.

### SectionTitle

Arquivo: `src/components/ui/SectionTitle.tsx`

Padroniza títulos de seção com eyebrow, título e descrição.

### GlassCard

Arquivo: `src/components/ui/GlassCard.tsx`

Superfície com efeito glassmorphism (blur + borda translúcida). Tons disponíveis: `navy`, `cyan`, `lime`.

### RevealOnScroll

Arquivo: `src/components/ui/RevealOnScroll.tsx`

Wrapper de animação (fade + slide) ao entrar na viewport, usando `framer-motion`. Respeita `prefers-reduced-motion` via `useReducedMotion`.

### Counter

Arquivo: `src/components/ui/Counter.tsx`

Contador animado que conta até um valor final quando entra na viewport. Usado na seção de métricas da Home.

### VideoHero

Arquivo: `src/components/ui/VideoHero.tsx`

Vídeo de fundo em loop com poster de fallback obrigatório. Vídeo é ocultado e o poster exibido quando `prefers-reduced-motion: reduce` está ativo.

## Regras de uso

- Priorizar componentes de `src/components/ui` antes de criar novas variações visuais.
- Usar tokens Tailwind `wmg-*` para cores, sombras e fundos.
- Evitar cores hexadecimais soltas fora de arquivos de tokens/configuração.
- Criar testes para novos componentes visuais.
- Atualizar esta documentação quando novos tokens ou componentes forem adicionados.

## Testes relacionados

- `src/components/ui/Button.test.tsx`
- `src/components/ui/Card.test.tsx`
- `src/components/ui/GlassCard.test.tsx`
- `src/components/ui/RevealOnScroll.test.tsx`
- `src/components/ui/Counter.test.tsx`
- `src/components/ui/VideoHero.test.tsx`
- `src/App.test.tsx`

## Assets de vídeo do hero

O hero da Home usa o vídeo institucional da WMG definido em `src/content/visualAssets.ts` (`heroVideo`), com o arquivo servido em `public/assets/campaign/wmg-industrial-highlight.mp4`. O `poster` continua servindo como fallback de imagem estática e para `prefers-reduced-motion`.
