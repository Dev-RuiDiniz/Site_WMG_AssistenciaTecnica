# Conteúdo versionado

## Visão geral

A TASK-06 centraliza textos comerciais e institucionais em `src/content`, evitando que mensagens, contatos, CTAs, serviços e equipamentos fiquem espalhados dentro dos componentes React.

Essa camada é versionada junto com o código e deve ser atualizada sempre que houver mudança de escopo comercial, contato público ou mensagem institucional.

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

## Arquivos

| Arquivo | Finalidade |
| --- | --- |
| `company.ts` | Dados públicos da WMG, como nome, segmento, e-mail, telefone, localização e descrição |
| `services.ts` | Serviços comerciais exibidos no site |
| `equipment.ts` | Equipamentos e áreas técnicas atendidas |
| `ctas.ts` | Chamadas de ação reutilizáveis |
| `home.ts` | Textos da página inicial |
| `navigation.ts` | Itens de navegação por âncoras internas |
| `types.ts` | Contratos TypeScript dos conteúdos |
| `validators.ts` | Validadores reutilizados pelos testes |
| `content.test.ts` | Teste de contrato do conteúdo versionado |

## Campos obrigatórios

Serviços e equipamentos devem conter:

- `slug`
- `title`
- `description`

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

## Como adicionar um novo serviço

1. Abrir `src/content/services.ts`.
2. Adicionar um novo item com `slug`, `title` e `description`.
3. Usar slug único, em minúsculas, sem acentos e com hífens.
4. Executar os testes de conteúdo.
5. Revisar a renderização da página inicial.

Exemplo:

```ts
{
  slug: 'bancada-teste-eletronica',
  title: 'Bancada de teste eletrônica',
  description: 'Validação técnica de módulos e placas em bancada especializada.',
}
```

## Como atualizar contatos

Atualize primeiro `src/content/company.ts`.

Depois revise:

- `.env.example`
- `docs/deploy.md`
- footer renderizado
- CTAs de contato em `src/content/ctas.ts`

Não versionar secrets, tokens, senhas, chaves privadas ou credenciais reais.

## Validações

O teste `src/content/content.test.ts` garante:

- dados institucionais preenchidos;
- serviços com campos obrigatórios;
- equipamentos com campos obrigatórios;
- CTAs com campos críticos preenchidos;
- navegação preenchida;
- slugs únicos;
- página inicial conectada a CTAs existentes.

Execute:

```bash
npm test
npm run typecheck
npm run check
```

## Evolução futura

Se o projeto virar monorepo, a pasta `src/content` pode ser extraída para `packages/content`, preservando os contratos e testes existentes.
