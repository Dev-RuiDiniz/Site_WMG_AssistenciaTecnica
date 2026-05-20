# Qualidade de Código

## Visão geral

Este documento descreve o fluxo de qualidade local do projeto WMG Assistência Técnica.

A TASK-03 adiciona uma base de QA para reduzir dívida técnica desde o início, com lint, type-check, formatação e testes automatizados.

## Comandos disponíveis

| Comando | Objetivo |
| --- | --- |
| `npm run lint` | Executa ESLint em todo o projeto. |
| `npm run typecheck` | Executa TypeScript em modo de verificação sem emissão de arquivos. |
| `npm run format` | Formata os arquivos com Prettier. |
| `npm run format:check` | Valida se os arquivos estão formatados sem alterar conteúdo. |
| `npm test` | Executa a suíte de testes com Vitest. |
| `npm run build` | Executa type-check e build de produção com Vite. |
| `npm run check` | Executa a validação local completa: format, lint, typecheck e testes. |

## Fluxo recomendado antes de Pull Request

Antes de abrir ou atualizar uma PR, execute:

```bash
npm run check
npm run build
```

Se algum comando falhar, corrija a causa raiz antes de enviar a revisão.

## TypeScript

O projeto usa TypeScript em modo estrito, com regras adicionais para evitar código morto e inconsistências:

- `strict`
- `noUnusedLocals`
- `noUnusedParameters`
- `noFallthroughCasesInSwitch`
- `forceConsistentCasingInFileNames`

## ESLint

O ESLint usa:

- recomendações base do ESLint;
- recomendações do TypeScript ESLint;
- regras de React Hooks;
- regra de React Refresh;
- integração com Prettier para evitar conflito entre lint e formatação.

## Prettier

O Prettier centraliza formatação com:

```json
{
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all",
  "printWidth": 100
}
```

Arquivos gerados, dependências e builds são ignorados via `.prettierignore`.

## Teste de contrato de qualidade

O arquivo `src/test/quality-scripts.test.ts` valida que os scripts obrigatórios de qualidade existem no `package.json` e que o Prettier está declarado como dependência de desenvolvimento.

## Critérios de aceite

A base de qualidade é considerada válida quando:

- `npm run lint` executa sem erro;
- `npm run typecheck` executa sem erro;
- `npm run format:check` executa sem erro;
- `npm test` executa sem erro;
- `npm run build` executa sem erro;
- `npm run check` executa a sequência completa de validação local.

## Observações

O `package-lock.json` deve ser gerado ou atualizado após execução de `npm install` em ambiente local ou CI.
