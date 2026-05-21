# Qualidade e validação

## Comandos principais

```bash
npm run format:check
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run build
```

## Testes unitários e de componente

O projeto usa Vitest e Testing Library para validar conteúdo, componentes, navegação, formulário e WhatsApp.

## Testes E2E

A TASK-14 adiciona Playwright para validar responsividade em viewports reais.

Arquivos:

```text
e2e/responsive.spec.ts
e2e/whatsapp-mobile.spec.ts
playwright.config.ts
```

Viewports:

- mobile: 390x844;
- tablet: 768x1024;
- desktop: 1440x900.

Cobertura E2E:

- carregamento da Home;
- ausência de overflow horizontal;
- menu mobile;
- navegação para contato;
- formulário visível e utilizável;
- WhatsApp global com número e mensagem;
- CTA de suporte com WhatsApp.

## CI

O workflow instala Chromium do Playwright antes de executar `npm run test:e2e`.

## Evidência manual

Além do CI, a TASK-14 pede prints em:

- mobile;
- tablet;
- desktop.
