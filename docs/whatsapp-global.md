# WhatsApp global

## Objetivo

A TASK-13 centraliza o WhatsApp como canal global de conversão do site.

Número configurado:

```text
+55 12 99158-8460
```

Link final esperado:

```text
https://wa.me/5512991588460
```

## Helper

A geração de links fica em:

```text
src/components/whatsapp/whatsappLink.ts
```

Funções principais:

- `normalizePhoneToDigits(phone)`: remove símbolos e mantém apenas dígitos.
- `buildWhatsAppLink(phone, message)`: gera URL `wa.me` com `text=` codificado.

## CTAs

O CTA `talk-to-support` usa o WhatsApp global com mensagem padrão pré-preenchida.

O número deve continuar centralizado em:

```text
src/content/company.ts
```

## Botão flutuante

O botão global fica em:

```text
src/components/whatsapp/FloatingWhatsAppButton.tsx
```

Ele é renderizado pelo layout principal e fica disponível em todas as páginas/seções da SPA.

## Validação manual

1. Rodar `npm run dev`.
2. Acessar `/`.
3. Clicar no botão flutuante `WhatsApp`.
4. Confirmar abertura para `5512991588460`.
5. Confirmar mensagem pré-preenchida.
6. Clicar em `Falar com suporte`.
7. Confirmar o mesmo número e mensagem.

## Riscos e mitigação

- Número incorreto: coberto por teste unitário.
- Mensagem sem encode: coberto por teste de helper.
- Duplicação de lógica: helper central.
- Botão cobrir conteúdo: revisar visualmente em mobile e desktop.
