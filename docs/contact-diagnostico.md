# Contato / diagnóstico

## Objetivo

A TASK-11 adiciona o formulário de contato/diagnóstico como mecanismo principal de captação de lead além dos fallbacks por e-mail e WhatsApp.

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

## Envio e fallback

Como ainda não há backend, o formulário valida os dados no cliente e exibe confirmação clara.

Também são gerados links de fallback:

- `mailto:` com assunto e corpo preenchidos;
- WhatsApp com resumo da solicitação.

## LGPD e segurança

Nesta etapa, o formulário:

- não persiste dados em localStorage;
- não envia dados para backend;
- não registra dados pessoais em console;
- informa o uso dos dados para retorno comercial/técnico.

Uma integração real futura deve definir base legal, retenção, segurança de transporte, controle de acesso e canal de exclusão/atualização de dados.
