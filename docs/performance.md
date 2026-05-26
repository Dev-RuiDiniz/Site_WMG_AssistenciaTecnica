# Performance e imagens

## Visão geral

A TASK-19 adiciona uma camada de controle para imagens usadas nas páginas públicas do site da WMG Assistência Técnica.

O foco desta entrega é reduzir risco de layout shift, padronizar carregamento e registrar um fluxo de validação de Lighthouse/bundle para publicação.

## Estratégia aplicada

### Imagens críticas

A imagem principal da Home foi tratada como asset crítico porque aparece acima da dobra.

Configuração aplicada:

- metadados centralizados em `src/content/visualAssets.ts`;
- `loading: 'eager'`;
- `fetchPriority: 'high'`;
- preload em `index.html`;
- dimensões explícitas registradas no asset.

### Imagens não críticas

As imagens de apoio abaixo da dobra usam:

- `loading="lazy"`;
- `decoding="async"`;
- `width` e `height` explícitos;
- reserva de espaço com `aspect-ratio` no `MediaFrame`.

### Layout shift

O componente `MediaFrame` calcula `aspect-ratio` usando os metadados do asset e aplica `width`/`height` no `<img>`. Isso evita que a área visual seja recalculada quando a imagem termina de carregar.

## Assets analisados

| Asset | Uso | Tamanho atual | Estratégia |
| --- | --- | ---: | --- |
| `/assets/campaign/wmg-industrial-hero.png` | Hero da Home | 1.748.229 bytes | preload + eager + high |
| `/assets/campaign/wmg-growth-maintenance.png` | Campanha / apoio | 2.023.963 bytes | lazy + async |
| `/assets/campaign/wmg-production-stop.png` | Seção de dor na Home | 2.131.877 bytes | lazy + async |
| `/assets/campaign/wmg-industrial-maintenance.png` | CTA final da Home | 2.088.005 bytes | lazy + async |
| `/assets/brand/wmg-logo.jpg` | Marca | 5.827 bytes | sem ação necessária nesta etapa |

## Próxima otimização recomendada

Os PNGs de campanha ainda são grandes para mobile. A próxima etapa recomendada é gerar variantes WebP/AVIF com compressão equilibrada e `picture/source`, mantendo fallback PNG.

Meta recomendada:

- LCP/hero: até 350 KB em WebP/AVIF;
- imagens abaixo da dobra: até 250 KB por variante mobile;
- gerar dimensões responsivas por breakpoint.

## Como validar

Execute:

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

Validação manual:

1. Execute `npm run dev`.
2. Abra a Home em viewport mobile.
3. Verifique se não há salto visual perceptível nas imagens.
4. Inspecione o `<img>` do hero e dos `MediaFrame`.
5. Confirme `width`, `height`, `loading`, `decoding` e prioridade.
6. Abra a aba Network e confira:
   - preload do hero;
   - lazy loading das imagens abaixo da dobra;
   - tamanho dos assets carregados.

## Lighthouse

Para gerar relatório local:

```bash
npm run build
npm run preview
```

Depois execute Lighthouse no navegador ou via Chrome DevTools em mobile.

Registrar:

- Performance;
- LCP;
- CLS;
- Total Blocking Time;
- oportunidades de otimização de imagens.

## Bundle

O projeto usa Vite. A análise inicial pode ser feita pela saída do comando:

```bash
npm run build
```

Verificar principalmente:

- tamanho do JS principal;
- CSS final;
- assets em `dist/assets`;
- presença de imagens grandes copiadas do `public`.

## Testes automatizados

Cobertura adicionada em:

- `src/content/visualAssets.test.tsx`

Os testes validam:

- dimensões explícitas;
- proporção esperada;
- prioridade alta apenas no hero;
- lazy loading em imagens não críticas;
- atributos renderizados pelo `MediaFrame`;
- orçamento atual de imagens.

## Limitações conhecidas

Esta entrega não converteu binários PNG para WebP/AVIF porque a execução via conector GitHub não oferece ambiente local para processar e comparar os arquivos de imagem com segurança visual.

A estrutura ficou preparada para a próxima etapa de compressão com evidência visual e medição Lighthouse antes/depois.
