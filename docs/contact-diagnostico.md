# Contato / diagnóstico

## Objetivo

O formulário de contato/diagnóstico é o principal mecanismo de captação de lead da página, além dos fallbacks por e-mail e WhatsApp.

## Estados de feedback

A TASK-15 adiciona feedback visual padronizado para:

- envio em andamento;
- envio concluído;
- falha de envio;
- erro de validação.

O componente usado é:

```text
src/components/ui/FormFeedback.tsx
```

## Loading

Quando o usuário envia dados válidos, o formulário exibe:

```text
Enviando solicitação
Estamos encaminhando seu diagnóstico para a equipe WMG.
```

Durante esse estado, campos e botão principal ficam desabilitados.

## Sucesso

Quando o provider responde com sucesso, o formulário exibe:

```text
Solicitação enviada
Recebemos seu diagnóstico. A equipe WMG retornará pelos canais informados.
```

## Erro

Quando o provider falha, o formulário exibe orientação alternativa:

```text
Não foi possível enviar agora
Use o WhatsApp ou e-mail abaixo para falar com a equipe WMG sem perder o atendimento.
```

Os links de fallback permanecem visíveis.

## Validação

Erros de preenchimento continuam aparecendo por campo e também exibem feedback geral com `role="alert"`.

## Segurança e LGPD

- O site não persiste dados em `localStorage`.
- O site não registra dados pessoais em console.
- O consentimento continua obrigatório.
- Dados são encaminhados ao provider externo de envio.
