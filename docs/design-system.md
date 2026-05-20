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
- `shadow-wmg-glow` para elementos de destaque.
- `shadow-wmg-card` para cards em superfícies escuras.

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

## Regras de uso

- Priorizar componentes de `src/components/ui` antes de criar novas variações visuais.
- Usar tokens Tailwind `wmg-*` para cores, sombras e fundos.
- Evitar cores hexadecimais soltas fora de arquivos de tokens/configuração.
- Criar testes para novos componentes visuais.
- Atualizar esta documentação quando novos tokens ou componentes forem adicionados.

## Testes relacionados

- `src/components/ui/Button.test.tsx`
- `src/components/ui/Card.test.tsx`
- `src/App.test.tsx`
