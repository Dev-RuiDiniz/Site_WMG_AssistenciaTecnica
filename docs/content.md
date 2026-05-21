# Conteúdo versionado

## Visão geral

A camada `src/content` centraliza textos comerciais, institucionais, contatos, CTAs, serviços e equipamentos.

## Empresa

O cadastro da empresa fica em:

```text
src/content/company.ts
```

O telefone `companyContent.phone` é a fonte única para o WhatsApp global:

```text
+55 12 99158-8460
```

Para trocar o número do WhatsApp, altere apenas esse campo e execute os testes.

## CTAs

Os CTAs ficam em:

```text
src/content/ctas.ts
```

O CTA `talk-to-support` usa o helper global de WhatsApp para gerar link `wa.me` com mensagem pré-preenchida.

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

Cada equipamento em `equipment.ts` deve conter:

- `slug`
- `title`
- `description`

Categorias obrigatórias:

- placas eletrônicas;
- inversores;
- servo drives;
- PLCs / CLPs;
- IHMs;
- CNCs;
- fontes industriais;
- painéis elétricos industriais.

## Validações

Execute:

```bash
npm test
npm run typecheck
npm run check
```

O teste `src/content/content.test.ts` valida campos obrigatórios, slugs únicos, CTAs existentes e configuração global de WhatsApp.

## Segurança

Não versionar secrets, tokens, senhas, chaves privadas ou credenciais reais.
