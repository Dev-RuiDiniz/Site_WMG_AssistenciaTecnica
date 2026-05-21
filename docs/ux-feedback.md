# UX feedback

## Objetivo

A TASK-15 define um padrão visual e acessível para estados de formulário e interações de conversão.

## Estados

- `idle`: não exibe feedback.
- `loading`: informa que a solicitação está em envio.
- `success`: confirma o recebimento.
- `error`: orienta uma alternativa clara por WhatsApp ou e-mail.

## Componente

O componente reutilizável fica em:

```text
src/components/ui/FormFeedback.tsx
```

Regras:

- `loading` e `success` usam `role="status"` com `aria-live="polite"`.
- `error` usa `role="alert"` com `aria-live="assertive"`.
- O feedback não depende só de cor: sempre possui título e mensage.
- Ações alternativas podem ser renderizadas dentro do bloco.

## Copy

As mensagens devem ser simples, comerciais e orientadas para próximo passo.

Evitar:

- detalhes técnicos do provider;
- stack traces;
- mensagens genéricas como “jerro inesperado ”.

Preferir:

- “Estamos encaminhando seu diagnóstico para a equipe WMG.”
- “Recebemos seu diagnóstico.”
- “Use o WhatsApp ou e-mail abaixo para falar com a equipe WMG.”

## Validação

```bash
npm test
npm run test:e2e
```

Testes relacionados:

```text
src/components/ui/FormFeedback.test.tsx
src/components/contact/DiagnosticContactForm.test.tsx
```
