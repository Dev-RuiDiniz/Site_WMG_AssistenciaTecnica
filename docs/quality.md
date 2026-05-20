# Qualidade de Código

## Visão geral

Este documento descreve o fluxo de qualidade local e em CI do projeto WMG Assistência Técnica.

A base de qualidade inclui lint, type-check, formatação, testes automatizados, build e validação via GitHub Actions.

## Comandos disponíveis

| Comando | Objetivo |
| --- | --- |
| `npm run lint` | Executa ESLint em todo o projeto. |
| `npm run typecheck` | Executa TypeScript em modo de verificação sem emissão de arquivos. |
| `npm run format` | Formata os arquivos com Prettier. |
| `npm run format:check` | Valida se os arquivos estão formatados sem alterar conteúdo. |
| `npm test` | Executa a suíte de testes com Vitest. |
| `npm run build` | Executa type-check e build de produção com Vite. |
| `npm run check` | Executa a validação local completa: format, lint, type-check e testes. |

## Fluxo recomendado antes de Pull Request

Antes de abrir ou atualizar uma PR, execute:

```bash
npm run check
npm run build
```

Se algum comando falhar, corrija a causa raiz antes de enviar a revisão.

## CI no GitHub Actions

O projeto possui workflow inicial em:

```text
.github/workflows/ci.yml
```

Ele executa em:

- `pull_request`;
- `push` na branch `main`.

Etapas do CI:

```bash
npm install
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
```

Documentação completa: `docs/ci.md`.

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

## Testes de contrato

O projeto possui testes de contrato para preservar configurações críticas:

- `src/test/quality-scripts.test.ts`: valida scripts obrigatórios de qualidade.
- `src/test/documentation.test.ts`: valida documentação inicial.
- `src/test/ci-workflow.test.ts`: valida workflow inicial de CI.

## Critérios de aceite

A base de qualidade é considerada válida quando:

- `npm run lint` executa sem erro;
- `npm run typecheck` executa sem erro;
- `npm run format:check` executa sem erro;
- `npm test` executa sem erro;
- `npm run build` executa sem erro;
- `npm run check` executa sem erro;
- o workflow de CI fica verde na PR.

## Observações

O `package-lock.json` deve ser gerado ou atualizado após execução de `npm install` em ambiente local ou CI. Quando o lockfile for versionado, o CI pode evoluir de `npm install` para `npm ci`.
