# Analytics e eventos

## Visão geral

A TASK-18 adiciona uma camada centralizada de analytics para registrar eventos de conversão do site institucional da WMG Assistência Técnica.

A implementação fica em `src/analytics/analytics.ts` e usa `window.dataLayer` como contrato principal para GA4/GTM.

## Variáveis de ambiente

Configure em `.env.local` quando necessário:

```bash
VITE_ANALYTICS_ENABLED=true
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX
```

Regras:

- `VITE_ANALYTICS_ENABLED=false` mantém analytics desabilitado.
- Sem `VITE_GA_MEASUREMENT_ID` e sem `VITE_GTM_ID`, nenhuma tag real é inicializada.
- IDs de GA4/GTM são públicos, mas devem ser controlados por ambiente.
- Não versionar IDs reais sem decisão de publicação.

## Eventos implementados

### Clique em WhatsApp

Disparado pelo botão flutuante de WhatsApp.

```ts
{
  event: 'whatsapp_click',
  action: 'click',
  category: 'contact',
  channel: 'whatsapp',
  origin: 'floating_button'
}
```

### Tentativa de envio do formulário

Disparado antes do envio ao provider externo.

```ts
{
  event: 'contact_form_submit_attempt',
  action: 'submit_attempt',
  category: 'form',
  channel: 'form',
  form_name: 'diagnostic_contact'
}
```

### Sucesso no envio do formulário

Disparado após resposta HTTP bem-sucedida do provider.

```ts
{
  event: 'contact_form_submit_success',
  action: 'submit_success',
  category: 'form',
  channel: 'form',
  form_name: 'diagnostic_contact'
}
```

### Erro no envio do formulário

Disparado quando o provider retorna falha ou ocorre erro de rede.

```ts
{
  event: 'contact_form_submit_error',
  action: 'submit_error',
  category: 'form',
  channel: 'form',
  form_name: 'diagnostic_contact',
  error_type: 'provider' | 'network'
}
```

## Privacidade

Eventos não devem enviar:

- nome;
- e-mail;
- telefone;
- empresa;
- descrição do problema;
- qualquer dado pessoal ou sensível.

Os testes automatizados validam que os eventos usam apenas metadados técnicos e origem/ação.

## Como validar localmente

1. Crie `.env.local`.
2. Configure:

```bash
VITE_ANALYTICS_ENABLED=true
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. Execute:

```bash
npm run dev
```

4. No console do navegador, confira:

```js
window.dataLayer
```

5. Clique no botão flutuante de WhatsApp.
6. Envie o formulário de contato com dados válidos.
7. Verifique os eventos no `dataLayer`.

## Testes

Execute:

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

## Limitações

A implementação inicial centraliza `dataLayer` e eventos no frontend. Para campanhas em produção, validar no Google Tag Assistant, GA4 DebugView e GTM Preview.

O carregamento efetivo de scripts externos pode ser evoluído em tarefa futura caso seja necessário controlar consentimento avançado, modo consent do Google ou múltiplos containers.
