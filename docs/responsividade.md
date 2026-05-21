# Responsividade mobile

## Objetivo

A TASK-14 ajusta e valida a experiência mobile, tablet e desktop da landing WMG, priorizando leitura, navegação e conversão via WhatsApp.

## Breakpoints

O projeto usa Tailwind com abordagem mobile-first:

- base: mobile;
- `sm`: celulares maiores;
- `md`: tablet;
- `lg`/`xl`: desktop.

## Áreas validadas

- Header sticky e menu mobile.
- Hero.
- Seções de dor, serviços, equipamentos, benefícios e credibilidade.
- Formulário de contato/diagnóstico.
- Botão flutuante global do WhatsApp.
- Footer.
- Ausência de overflow horizontal.

## Testes E2E

Os testes ficam em:

```text
e2e/responsive.spec.ts
e2e/whatsapp-mobile.spec.ts
```

Viewports configurados:

```text
mobile: 390x844
tablet: 768x1024
desktop: 1440x900
```

Comando:

```bash
npm run test:e2e
```

## Checklist manual

1. Rodar `npm run dev`.
2. Abrir `/` em mobile.
3. Validar que o menu abre e fecha.
4. Navegar até `#contato`.
5. Confirmar leitura do Hero.
6. Confirmar cards sem quebra.
7. Confirmar formulário utilizável.
8. Clicar no botão flutuante de WhatsApp.
9. Repetir em tablet e desktop.
10. Registrar prints de mobile, tablet e desktop.

## Riscos

- O botão flutuante pode exigir refinamento visual em dispositivos reais.
- Navegadores mobile podem alterar barras de viewport.
- WhatsApp pode abrir app ou WhatsApp Web dependendo do dispositivo.
