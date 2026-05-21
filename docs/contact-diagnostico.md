# Contato / diagnóstico

## Objetivo

O formulário de contato/diagnóstico é o principal mecanismo de captação de lead da página, além dos fallbacks por e-mail e WhatsApp.

## WhatsApp

A TASK-13 centralizou o fallback de WhatsApp usando o helper global:

```text
src/components/whatsapp/whatsappLink.ts
```

O formulário continua criando uma mensagem contextual com:

- nome;
- equipamento;
- tipo de falha;
- urgência.

A URL final usa o número centralizado em `companyContent.phone`.

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

## Envio

A integração de envio real fica em:

```text
src/components/contact/diagnosticSubmit.ts
```

Provider atual:

```text
FormSubmit
```

## Fallbacks

Mesmo com envio real configurado, continuam disponíveis:

- `mailto:` com corpo preenchido;
- WhatsApp com mensagem contextual pré-preenchida.

## LGPD e segurança

- O site não persiste dados em `localStorage`.
- O site não registra dados pessoais em console.
- O consentimento continua obrigatório.
- Dados são encaminhados ao provider externo de envio.
