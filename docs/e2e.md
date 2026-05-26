# Testes E2E críticos

## Visão geral

A TASK-20 amplia a suíte Playwright para cobrir os fluxos críticos do site institucional da WMG Assistência Técnica antes do deploy.

A suíte usa o build de produção gerado pelo Vite e roda contra o preview local configurado em `playwright.config.ts`.

## Fluxos cobertos

### Navegação

Arquivo:

- `e2e/navigation.spec.ts`

Cobertura:

- carregamento das rotas públicas;
- estrutura principal com `banner`, `main` e `contentinfo`;
- navegação pelo menu principal;
- redirecionamento de rota inexistente para Home.

Rotas cobertas:

- `/`
- `/servicos`
- `/equipamentos`
- `/sobre`
- `/contato`

### CTAs

Arquivo:

- `e2e/cta.spec.ts`

Cobertura:

- CTA interno da Home para serviços;
- CTA interno da Home para contato;
- botão flutuante de WhatsApp;
- evento `whatsapp_click` no `window.dataLayer`.

### Formulário de contato

Arquivo:

- `e2e/contact-form.spec.ts`

Cobertura:

- envio vazio bloqueado por validação;
- envio sem consentimento LGPD bloqueado;
- envio com honeypot preenchido bloqueado;
- envio válido com provider mockado;
- erro de provider mockado;
- eventos de analytics de tentativa, sucesso e erro.

O endpoint externo do FormSubmit é interceptado com `page.route()`, evitando envio real de dados.

### Analytics

Arquivo:

- `e2e/analytics-events.spec.ts`

Cobertura:

- evento de WhatsApp sem dados pessoais;
- eventos de formulário sem dados pessoais;
- validação de ausência de e-mail, telefone, nome e descrição nos eventos.

### Responsividade

Arquivos existentes mantidos:

- `e2e/responsive.spec.ts`
- `e2e/whatsapp-mobile.spec.ts`

Cobertura:

- rotas principais sem overflow horizontal relevante;
- menu mobile;
- formulário usável em mobile;
- CTA de WhatsApp em mobile.

## Como executar

Instale dependências:

```bash
npm install
```

Instale browsers do Playwright, se necessário:

```bash
npx playwright install
```

Execute a suíte E2E:

```bash
npm run test:e2e
```

Execute em modo UI:

```bash
npm run test:e2e:ui
```

Execute o checklist completo do projeto:

```bash
npm run check
```

## Estratégia anti-flakiness

A suíte segue estas regras:

- usar seletores acessíveis por `role`, `name`, `label` e textos estáveis;
- evitar seletores por classes CSS/Tailwind;
- evitar `waitForTimeout`;
- usar assertions com auto-wait do Playwright;
- mockar serviços externos;
- não navegar de fato para WhatsApp como dependência de sucesso;
- validar `href` e `dataLayer` localmente;
- limpar `sessionStorage` nos testes de formulário para evitar interferência do rate limit.

## Mocks usados

### FormSubmit

O endpoint abaixo é interceptado:

```text
https://formsubmit.co/ajax/**
```

Cenários mockados:

- sucesso HTTP 200;
- erro HTTP 500.

### Analytics

Os eventos são validados via:

```js
window.dataLayer
```

Nenhum teste depende de GA4/GTM real.

## Dados pessoais

Os testes E2E usam dados fictícios e verificam que os eventos de analytics não incluem:

- nome;
- e-mail;
- telefone;
- descrição do problema;
- payload livre do formulário.

## Relatório Playwright

Quando executado em CI, a configuração atual usa reporter `list` e `html`.

Para abrir relatório local após execução:

```bash
npx playwright show-report
```

## Checklist antes do deploy

Antes do deploy, validar:

- `npm run build`;
- `npm run test:e2e`;
- navegação principal;
- CTAs da Home;
- WhatsApp mobile;
- formulário com mock de sucesso;
- formulário com erro de provider;
- responsividade mobile;
- ausência de dados pessoais no `dataLayer`.
