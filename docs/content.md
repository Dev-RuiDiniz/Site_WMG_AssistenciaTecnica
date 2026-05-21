# Conteúdo versionado

## Visão geral

A camada `src/content` centraliza textos comerciais e institucionais, evitando que mensagens, contatos, CTAs, serviços e equipamentos fiquem espalhados dentro dos componentes React.

## Estrutura

```text
src/content
├── company.ts
├── ctas.ts
├── equipment.ts
├── home.ts
├── index.ts
├── navigation.ts
├── services.ts
├── types.ts
├── validators.ts
└── content.test.ts
```

## Página inicial

A Home contém hero, dor, serviços, benefícios, sobre, credibilidade, contato e CTA final. Os textos ficam em `src/content/home.ts` e os CTAs são referenciados por ID a partir de `src/content/ctas.ts`.

## Serviços

A TASK-09 evoluiu `services.ts` para sustentar cards técnicos/comerciais com CTA por demanda.

Cada serviço deve conter:

- `slug`: identificador único, em minúsculas, sem acentos e com hífens.
- `title`: nome exibido no card.
- `description`: resumo comercial/técnico do serviço.
- `demand`: situação em que o cliente deve acionar a WMG.
- `response`: como a WMG ajuda naquela demanda.
- `ctaId`: identificador de CTA existente em `ctas.ts`.

Exemplo:

```ts
{
  slug: 'diagnostico-tecnico',
  title: 'Diagnóstico técnico',
  description: 'Avaliação objetiva para identificar a causa da falha.',
  demand: 'Quando o equipamento apresenta falha sem causa clara.',
  response: 'A WMG analisa sintomas, histórico e criticidade para orientar a decisão.',
  ctaId: 'request-evaluation',
}
```

## Como adicionar um novo serviço

1. Abrir `src/content/services.ts`.
2. Adicionar um novo item com `slug`, `title`, `description`, `demand`, `response` e `ctaId`.
3. Usar slug único, em minúsculas, sem acentos e com hífens.
4. Confirmar que o `ctaId` existe em `src/content/ctas.ts`.
5. Executar os testes de conteúdo.
6. Revisar a renderização da seção `#servicos`.

## Campos obrigatórios

Serviços e equipamentos devem conter:

- `slug`
- `title`
- `description`

Serviços também devem conter:

- `demand`
- `response`
- `ctaId`

CTAs devem conter:

- `id`
- `label`
- `href`
- `purpose`

Dados institucionais devem conter:

- `name`
- `segment`
- `email`
- `phone`
- `location`
- `website`
- `description`

## Validações

Execute:

```bash
npm test
npm run typecheck
npm run check
```

O teste `src/content/content.test.ts` garante dados obrigatórios, slugs únicos, CTAs válidos e a relação entre serviços e chamadas de ação.

## Segurança

Não versionar secrets, tokens, senhas, chaves privadas ou credenciais reais.
