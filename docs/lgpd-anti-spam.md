# LGPD e anti-spam no formulário de contato

## Visão geral

A TASK-17 adiciona proteções básicas de LGPD e anti-spam ao formulário de diagnóstico técnico da página de contato.

As proteções ficam concentradas nos arquivos:

- `src/components/contact/DiagnosticContactForm.tsx`
- `src/components/contact/diagnosticForm.ts`
- `src/components/contact/antiSpam.ts`
- `src/components/contact/diagnosticSubmit.ts`

## Finalidade da coleta

O formulário coleta dados mínimos para retorno técnico/comercial sobre a solicitação enviada:

- nome;
- empresa, quando informada;
- e-mail ou telefone;
- equipamento relacionado;
- tipo de falha;
- urgência;
- descrição do problema.

Os dados devem ser usados apenas para responder à solicitação técnica. O formulário orienta o usuário a não enviar senhas, documentos pessoais ou informações sensíveis.

## Consentimento LGPD

O envio exige aceite explícito do aviso de uso de dados. Sem o consentimento, a validação bloqueia a submissão e exibe mensagem de erro.

A validação do consentimento fica em `validateDiagnosticForm`.

## Honeypot anti-spam

Foi adicionado o campo `companyWebsite` como honeypot.

Regras:

- o campo fica oculto para usuários reais;
- usa `tabIndex={-1}`;
- usa `autoComplete="off"`;
- se preenchido, o envio é bloqueado antes de chamar o provider externo.

O objetivo é bloquear bots que preenchem automaticamente todos os campos do formulário.

## Rate limit client-side

Como o projeto é uma SPA estática e não possui API própria nesta fase, o bloqueio de múltiplos envios foi implementado no cliente com `sessionStorage`.

Configuração atual:

- chave: `wmg:last-diagnostic-submit-at`;
- janela: 60 segundos;
- escopo: sessão do navegador.

Essa proteção reduz spam acidental ou envios repetidos, mas não substitui rate limit server-side.

## Limitações conhecidas

O rate limit client-side pode ser burlado limpando o storage, trocando de navegador ou enviando requisições diretamente ao provider externo.

Quando houver backend/API, recomenda-se implementar:

- rate limit server-side por IP e/ou fingerprint;
- validação server-side do consentimento;
- validação server-side do honeypot;
- logs sem dados sensíveis;
- política de retenção e descarte de leads;
- auditoria para falhas de envio;
- proteção contra abuso em endpoint público.

## Como validar

Execute:

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

Validação manual:

1. Acesse `/contato`.
2. Preencha o formulário sem marcar o consentimento.
3. Confirme que o envio é bloqueado.
4. Marque o consentimento e envie com dados válidos.
5. Confirme o fluxo de sucesso.
6. Pelo DevTools, preencha o campo oculto `companyWebsite`.
7. Tente enviar novamente e confirme o bloqueio anti-spam.
8. Faça novo envio em menos de 60 segundos após um sucesso.
9. Confirme a mensagem de rate limit.
10. Verifique se não há erros no console.

## Testes automatizados

Cobertura adicionada:

- identificação de honeypot preenchido;
- aceite de honeypot vazio;
- bloqueio dentro da janela de rate limit;
- liberação após a janela de rate limit.

Os testes ficam em:

- `src/components/contact/antiSpam.test.ts`
