# Contato / diagnóstico

## Objetivo

O formulário de contato/diagnóstico é o principal mecanismo de captação de lead da página, além dos fallbacks por e-mail e WhatsApp.

A TASK-12 adiciona envio real via FormSubmit para:

```text
suporte@wmgassistenciatecnica.com.br
```

## Campos do formulário

- Nome.
- Empresa.
- E-mail.
- Telefone / WhatsApp.
- Equipamento.
- Tipo de falha.
- Urgência.
- Descrição do problema.
- Consentimento para contato.

## Validação

A validação fica em `src/components/contact/diagnosticForm.ts` e cobre:

- nome obrigatório;
- e-mail ou telefone obrigatório;
- e-mail válido quando preenchido;
- telefone com DDD quando preenchido;
- equipamento obrigatório;
- tipo de falha obrigatório;
- urgência obrigatória;
- descrição mínima;
- consentimento obrigatório.

## Envio

A integração fica em `src/components/contact/diagnosticSubmit.ts`.

O provider configurado é FormSubmit, usando endpoint AJAX:

```text
https://formsubmit.co/ajax/suporte@wmgassistenciatecnica.com.br
```

Campos técnicos enviados:

- `_subject`: `Novo diagnóstico técnico - WMG`;
- `_template`: `table`;
- `_captcha`: `false`;
- `Origem`: `Site WMG Assistência Técnica`.

## Estados

O componente `DiagnosticContactForm` trabalha com:

- `idle`;
- `submitting`;
- `success`;
- `error`.

Em caso de erro do provider ou rede, o formulário exibe mensagem clara e mantém os fallbacks visíveis.

## Fallback

Mesmo com envio real configurado, continuam disponíveis:

- `mailto:` com corpo preenchido;
- WhatsApp com resumo da solicitação.

## LGPD e segurança

- O site não persiste dados em `localStorage`.
- O site não registra dados pessoais em console.
- O envio usa provider externo.
- O consentimento continua obrigatório.
- A documentação do provider e validação manual ficam em `docs/formulario-envio.md`.

Uma integração futura própria deve avaliar retenção, base legal, controle de acesso, segurança de transporte e processo de exclusão/atualização dos dados.
