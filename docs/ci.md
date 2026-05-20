# CI inicial

## Visão geral

O projeto usa GitHub Actions para validar Pull Requests e pushes na branch `main`.

O workflow inicial fica em:

```text
.github/workflows/ci.yml
```

## Gatilhos

O pipeline executa em:

- `pull_request`;
- `push` para `main`.

## Etapas executadas

O job `Qualidade, testes e build` executa em `ubuntu-latest` e roda:

```bash
npm install
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
```

## Node.js

O workflow usa `actions/setup-node@v4` com Node.js 22.

## Secrets

O CI inicial não depende de secrets, tokens, chaves privadas ou credenciais externas.

Isso reduz risco operacional e evita falhas por secrets indisponíveis.

## Por que `npm install`

O repositório ainda não possui `package-lock.json` versionado. Por isso, o workflow usa `npm install`.

Quando o lockfile for versionado, o workflow pode ser evoluído para:

```bash
npm ci
```

## Como validar localmente

Antes de abrir ou atualizar uma PR, execute:

```bash
npm install
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
npm run check
```

## Teste de contrato

O arquivo `src/test/ci-workflow.test.ts` valida que o workflow existe e contém as etapas mínimas de qualidade.

## Troubleshooting

Se o CI falhar:

1. Abra a aba **Checks** da PR.
2. Identifique a etapa com falha.
3. Rode o mesmo comando localmente.
4. Corrija a causa raiz.
5. Faça novo commit na mesma branch.

## Evoluções futuras

Possíveis melhorias:

- trocar `npm install` por `npm ci` após versionar `package-lock.json`;
- adicionar cache mais restritivo com lockfile;
- publicar artefato de build;
- adicionar deploy automatizado;
- adicionar status obrigatório em branch protection.
