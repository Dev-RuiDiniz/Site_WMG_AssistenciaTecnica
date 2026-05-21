# Conteúdo versionado

## Visão geral

A camada `src/content` centraliza textos comerciais e institucionais para evitar copy espalhada nos componentes React.

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

A Home contém hero, dor, serviços, equipamentos, benefícios, sobre, credibilidade, contato e CTA final. Os textos ficam em `home.ts`, `services.ts`, `equipment.ts` e `ctas.ts`.

## Serviços

Cada serviço em `services.ts` deve conter:

- `slug`
- `title`
- `description`
- `demand`
- `response`
- `ctaId`

O `ctaId` deve existir em `ctas.ts`.

## Equipamentos atendidos

A TASK-10 evoluiu `equipment.ts` para listar categorias técnicas atendidas pela WMG.

Cada equipamento deve conter:

- `slug`: identificador único, em minúsculas, sem acentos e com hífens.
- `title`: nome exibido no card.
- `description`: descrição clara, técnica/comercial, sem prometer atendimento fora do escopo.

Categorias obrigatórias:

- placas eletrônicas;
- inversores;
- servo drives;
- PLCs / CLPs;
- IHMs;
- CNCs;
- fontes industriais;
- painéis elétricos industriais.

Exemplo:

```ts
{
  slug: 'fontes',
  title: 'Fontes industriais',
  description:
    'Fontes de alimentação e módulos de energia usados em painéis, máquinas, comandos e sistemas de automação que dependem de tensão estável.',
}
```

## Como adicionar uma nova categoria de equipamento

1. Abra `src/content/equipment.ts`.
2. Adicione um item com `slug`, `title` e `description`.
3. Use descrição clara e dentro do escopo técnico da WMG.
4. Evite marcas, promessas de prazo ou números não validados.
5. Execute os testes de conteúdo e componente.

## Validações

Execute:

```bash
npm test
npm run typecheck
npm run check
```

O teste `src/content/content.test.ts` valida campos obrigatórios, slugs únicos e presença das categorias mínimas da TASK-10.

## Segurança

Não versionar secrets, tokens, senhas, chaves privadas ou credenciais reais.
