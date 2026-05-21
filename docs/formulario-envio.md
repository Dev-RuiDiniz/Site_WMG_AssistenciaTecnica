# Envio do formulário

## Provider

O formulário usa FormSubmit para encaminhar leads ao e-mail de atendimento.

## Estados tratados

A TASK-15 padroniza o feedback do fluxo de envio:

- `loading`: solicitação em envio;
- `success`: provider respondeu com sucesso;
- `error`: provider falhou ou houve erro de rede;
- validação: campos obrigatórios ou inválidos.

## Falha do provider

Em falha HTTP, rede ou bloqueio externo, a interface deve orientar contato alternativo por:

- WhatsApp;
- e-mail.

A mensagem não deve expor detalhes técnicos do provider para o usuário final.

## Teste manual

1. Abrir `#contato`.
2. Enviar formulário vazio.
3. Confirmar feedback de validapção.
4. Enviar formulário válido.
5. Confirmar estado de loading.
6. Confirmar sucesso.
7. Simular falha do provider.
8. Confirmar orientação por WhatsApp/e-mail.

## Testes automatizados

```text
src/components/contact/DiagnosticContactForm.test.tsx
src/components/ui/FormFeedback.test.tsx
```
