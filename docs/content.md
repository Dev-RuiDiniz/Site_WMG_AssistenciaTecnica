# Conteúdo versionado

## Visão geral

A camada `src/content` centraliza textos comerciais e institucionais, evitando que mensagens, contatos, CTAs, serviços e equipamentos fiquem espalhados dentro dos componentes React.

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
| `home.ts` | Textos e blocos da página inicial |
| `navigation.ts` | Itens de navegação por âncoras internas |
| `types.ts` | Contratos TypeScript dos conteúdos |
| `validators.ts` | Validadores reutilizados pelos testes |
| `content.test.ts` | Teste de contrato do conteúdo versionado |

## Página inicial

A TASK-08 expandiu `home.ts` para sustentar uma landing pública com foco em conversão.

A Home é composta por:

- `hero`: título principal, subtítulo, descrição, CTAs e destaques de apoio.
- `painSection`: dor do usuário, impacto de máquina parada e pontos de problema.
- `servicesSection`: apresentação da seção de serviços.
- `benefitsSection`: benefícios comerciais da página inicial.
- `aboutSection`: bloco institucional.
- `credibilitySection`: argumentos de confiança sem promessas não validadas.
- `contactSection`: chamada de contato.
- `finalCtaSection`: bloco final de conversão.

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

Itens comerciais da Home devem conter:

- `title`
- `description`

## Como atualizar a Home

1. Abra `src/content/home.ts`.
2. Atualize textos nos blocos existentes.
3. Não insira copy fixa diretamente em `src/App.tsx`.
4. Ao adicionar novo CTA, cadastre antes em `src/content/ctas.ts`.
5. Atualize o contrato em `src/content/types.ts` quando criar novos campos.
6. Atualize `src/content/content.test.ts`.
7. Execute testes e validações.

## Validações

Execute:

```bash
npm test
npm run typecheck
npm run check
```

O teste `src/content/content.test.ts` garante:

- dados institucionais preenchidos;
- serviços com campos obrigatórios;
- equipamentos com campos obrigatórios;
- CTAs com campos críticos preenchidos;
- navegação preenchida;
- página inicial conectada a CTAs existentes;
- blocos comerciais da Home com conteúdo escaneável.

## Segurança

Não versionar secrets, tokens, senhas, chaves privadas ou credenciais reais.
