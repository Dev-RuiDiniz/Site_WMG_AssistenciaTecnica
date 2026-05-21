# Envio do formulário

## Provider

A TASK-12 configura o envio do formulário de contato/diagnóstico via FormSubmit.

Endpoint configurado:

```text
https://formsubmit.co/ajax/suporte@wmgassistenciatecnica.com.br
```

## Ativação inicial

O FormSubmit pode exigir confirmação inicial do endereço de destino. No primeiro envio real, o e-mail `suporte@wmgassistenciatecnica.com.br` pode receber uma mensagem de ativação.

A validação manual deve confirmar:

1. envio do formulário em ambiente local ou preview;
2. recebimento do e-mail de ativação, se solicitado;
3. confirmação do destinatário;
4. novo envio de teste;
5. chegada do e-mail com os dados do lead.

## Payload

O formulário envia `FormData` com:

- `_subject`;
- `_template`;
- `_captcha`;
- `Origem`;
- `Nome`;
- `Empresa`;
- `E-mail`;
- `Telefone / WhatsApp`;
- `Equipamento`;
- `Tipo de falha`;
- `Urgência`;
- `Descrição do problema`.

## Testes automatizados

Os testes não fazem chamada real de rede. O `fetch` é mockado em:

```text
src/components/contact/diagnosticSubmit.test.ts
src/components/contact/DiagnosticContactForm.test.tsx
```

Cobertura principal:

- montagem de payload;
- endpoint correto;
- sucesso do provider;
- erro HTTP;
- falha de rede;
- estado de envio no componente;
- fallback visível em erro.

## Teste manual / evidência

Para evidência da TASK-12:

1. rodar `npm run dev`;
2. acessar `/`;
3. ir até `#contato`;
4. preencher dados válidos;
5. enviar;
6. verificar mensagem de sucesso;
7. conferir a caixa de entrada e spam do e-mail de destino;
8. registrar print do e-mail recebido.

## Riscos conhecidos

- CORS ou bloqueio do provider.
- E-mail cair em spam.
- Necessidade de ativação inicial.
- Indisponibilidade temporária do provider.
- Dados pessoais trafegam por provider externo.

## Mitigações

- Uso do endpoint AJAX do FormSubmit.
- Fallback por `mailto:`.
- Fallback por WhatsApp.
- Consentimento obrigatório.
- Sem secrets no frontend.
- Sem persistência local de dados pessoais.
