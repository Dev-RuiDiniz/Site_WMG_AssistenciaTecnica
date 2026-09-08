# WhatsApp global

## Objetivo

A configuração global do WhatsApp centraliza o canal de conversão principal do site.

Número configurado:

```text
+55 12 3426-0300
```

Link esperado:

```text
https://wa.me/551234260300
```

## Responsividade

A TASK-14 ajusta o botão flutuante para mobile:

- posição inferior direita;
- área mínima de toque;
- texto curto;
- espaçamento progressivo em `sm` e `md`;
- sem bloquear o formulário e os CTAs principais.

## Validação

Automática:

```bash
npm run test:e2e
```

Manual:

1. abrir `/` em mobile;
2. clicar em `WhatsApp`;
3. validar número;
4. validar mensagem pré-preenchida;
5. repetir em desktop.
