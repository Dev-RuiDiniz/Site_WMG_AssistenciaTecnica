# Auditoria SEO — WMG Assistência Técnica

**Data:** 30 de julho de 2026  
**URL alvo:** https://www.wmgassistenciatecnica.com.br  
**Stack:** React + Vite (SPA), React Router, TailwindCSS

---

## Nota geral: **68 / 100**

A base de SEO está parcialmente implementada com meta tags, Open Graph, Twitter Cards, sitemap, robots.txt e JSON-LD LocalBusiness. No entanto, há problemas estruturais significativos por ser uma SPA com renderização 100% client-side, além de questões de performance, imagem OG em SVG, favicon quebrado e ausência de página 404.

---

## Resumo dos critérios avaliados

| Critério | Nota | Peso |
|---|---|---|
| Meta tags & title | 85 | Alto |
| Open Graph & Twitter Cards | 70 | Alto |
| Dados estruturados (JSON-LD) | 55 | Médio |
| Sitemap.xml | 70 | Médio |
| robots.txt | 90 | Baixo |
| HTML semântico & acessibilidade | 80 | Médio |
| Performance & Core Web Vitals | 45 | Alto |
| SEO em SPA (renderização) | 35 | Alto |
| Hierarquia de headings | 65 | Médio |
| Linkagem interna | 85 | Baixo |
| Mobile-friendly | 85 | Médio |
| Favicon & manifest | 40 | Baixo |
| Página 404 | 25 | Médio |
| Estrutura de URLs | 90 | Baixo |
| Qualidade de conteúdo | 80 | Médio |

---

## Análise detalhada por critério

### 1. Meta tags & title — **85/100**

**Pontos positivos:**
- `index.html` possui charset, viewport, robots, description e title corretos
- Componente `Seo.tsx` atualiza title, description e keywords dinamicamente por rota
- Canonical URL definida no `index.html` e atualizada por rota
- `lang="pt-BR"` definido no `<html>`

**Problemas:**
- A meta tag `keywords` é amplamente ignorada pelo Google — não prejudica, mas não ajuda
- O title da home tem 63 caracteres (dentro do limite de ~60 recomendado)
- Titles das subpáginas poderiam ser mais descritivos com localização (ex: "Serviços industriais em Taubaté | WMG")

**Sugestões:**
- Remover `keywords` (peso morto) ou manter apenas se há estratégia para Bing/Yandex
- Adicionar "Taubaté" ou "São Paulo" nos titles de subpáginas para reforçar SEO local
- Considerar title com marca no início em páginas internas: "WMG | Serviços industriais em Taubaté"

---

### 2. Open Graph & Twitter Cards — **70/100**

**Pontos positivos:**
- OG tags presentes: `og:type`, `og:locale`, `og:site_name`, `og:title`, `og:description`, `og:image`, `og:url`
- Twitter Card tipo `summary_large_image` com title, description e image
- Atualização dinâmica por rota via `Seo.tsx`

**Problemas:**
- **OG image em SVG** (`og-wmg-assistencia-tecnica.svg`): Facebook, LinkedIn, WhatsApp e Twitter **não renderizam SVG como OG image**. A imagem não aparecerá nos previews sociais
- Sem `og:image:width` e `og:image:height` — algumas plataformas exigem
- Sem `twitter:site` nem `twitter:creator`
- Sem `og:image:alt`

**Sugestões:**
- **Crítico:** Converter OG image para PNG ou JPG (1200x630px)
- Adicionar `og:image:width="1200"` e `og:image:height="630"`
- Adicionar `twitter:site="@WMGAssist"` (se houver conta) ou remover
- Adicionar `og:image:alt` com descrição da imagem

---

### 3. Dados estruturados (JSON-LD) — **55/100**

**Pontos positivos:**
- Schema `LocalBusiness` implementado com name, description, telephone, email, url, areaServed, address e image
- Injetado via `Seo.tsx` em todas as páginas

**Problemas:**
- Apenas um schema global — sem schemas específicos por página
- Sem `@id` no schema (recomendado para referência cruzada)
- Sem `geo` (coordenadas GPS) — importante para LocalBusiness
- Sem `openingHours` ou `openingHoursSpecification`
- Sem `priceRange`
- Sem schema `BreadcrumbList` para navegação
- Sem schema `Service` na página de serviços
- Sem schema `FAQPage` (se aplicável)
- Sem `sameAs` com links para redes sociais (se existirem)

**Sugestões:**
- Adicionar `geo: { @type: "GeoCoordinates", latitude: -23.0254, longitude: -45.5554 }` (Taubaté)
- Adicionar `openingHoursSpecification` com horários de funcionamento
- Adicionar `priceRange` (ex: "$$" ou "Sob consulta")
- Adicionar `@id: "https://www.wmgassistenciatecnica.com.br/#organization"`
- Criar schema `BreadcrumbList` dinâmico por página
- Criar schema `Service` para cada serviço listado em `/servicos`
- Adicionar `sameAs` com URLs de redes sociais da empresa

---

### 4. Sitemap.xml — **70/100**

**Pontos positivos:**
- Sitemap presente em `public/sitemap.xml`
- 5 URLs listadas com prioridades diferenciadas
- Referenciado no `robots.txt`

**Problemas:**
- **Sem `<lastmod>`** — search engines usam para determinar frequência de re-crawl
- **Sem `<changefreq>`** — embora ignorado pelo Google, Bing ainda considera
- Sem `xhtml:link` para alternativas idiomas (se aplicável no futuro)
- Sitemap estático — não é gerado automaticamente, pode ficar desatualizado

**Sugestões:**
- Adicionar `<lastmod>` em cada URL com data da última modificação
- Adicionar `<changefreq>` (ex: `weekly` para home, `monthly` para subpáginas)
- Considerar geração automática do sitemap via build script ou plugin Vite

---

### 5. robots.txt — **90/100**

**Pontos positivos:**
- Permite acesso a todos os user-agents
- Referencia o sitemap com URL completa

**Problemas:**
- Sem `Host` directive (relevante para sites com www vs non-www)
- Poderia bloquear caminhos técnicos irrelevantes (ex: `/assets/` se não for útil indexar)

**Sugestões:**
- Adicionar `Host: https://www.wmgassistenciatecnica.com.br`
- Avaliar se diretórios `/assets/` devem ser bloqueados

---

### 6. HTML semântico & acessibilidade — **80/100**

**Pontos positivos:**
- Uso de `<header>`, `<main>`, `<footer>`, `<nav>`, `<address>`, `<section>`, `<figure>`
- `aria-label` e `aria-labelledby` em várias seções
- `aria-expanded` e `aria-controls` no menu mobile
- Alt text em imagens com descrições relevantes
- `<address>` com semântica correta para contato

**Problemas:**
- Alguns `aria-label` em português sem acentos (ex: "Rodape institucional", "Navegacao") — pode confundir leitores de tela
- Sem `skip-to-content` link para acessibilidade
- Sem `role="banner"` implícito (HTML5 já fornece, mas vale confirmar)

**Sugestões:**
- Corrigir acentuação nos `aria-label`: "Rodapé institucional", "Navegação"
- Adicionar link "Pular para o conteúdo" no início do `<body>`

---

### 7. Performance & Core Web Vitals — **45/100**

**Pontos positivos:**
- `preload` da hero image com `fetchpriority="high"`
- `loading="lazy"` em imagens não-críticas
- `fetchPriority` definido no objeto `visualAssets`

**Problemas:**
- **Imagens PNG ~2MB cada** (`wmg-industrial-hero.png`: 2.08MB, `wmg-growth-maintenance.png`: 2.07MB, `wmg-production-stop.png`: 2.13MB, `wmg-industrial-maintenance.png`: 2.10MB) — extremamente pesadas
- **Sem formatos next-gen** (WebP/AVIF) — o próprio `imagePerformanceBudget` recomenda WebP
- **Sem `srcset` ou `<picture>`** para responsive images
- **Vídeo hero carregado de CDN externo** (mixkit) sem `preconnect` ou `dns-prefetch`
- **Sem code-splitting** explícito além do default do Vite
- **SPA sem SSR/SSG** — todo conteúdo renderizado no client, prejudicando FCP/LCP
- Sem `compression` configurada (gzip/brotli) no nível do app
- Sem cache headers definidos no código

**Sugestões:**
- **Crítico:** Converter imagens para WebP/AVIF e usar `<picture>` com fallback PNG
- Redimensionar imagens para tamanhos apropriados (não servir 1536x1024 em mobile)
- Implementar `srcset` com breakpoints: 480px, 768px, 1024px, 1536px
- Adicionar `<link rel="preconnect" href="https://assets.mixkit.co">` no `<head>`
- Considerar SSG (Static Site Generation) com `vite-plugin-ssg` ou migração para Next.js/Astro
- Configurar cache headers `Cache-Control: public, max-age=31536000, immutable` para assets
- Meta de LCP image recomenda <350KB (atual: 2.08MB — 6x acima)

---

### 8. SEO em SPA (renderização) — **35/100**

**Pontério negativo mais significativo.**

**Problemas:**
- **100% client-side rendering** — o HTML servido pelo `index.html` contém apenas `<div id="root"></div>` e `<script>`
- Todas as meta tags dinâmicas (title, description, OG, canonical) são injetadas via JavaScript no `useEffect` do `Seo.tsx`
- **Googlebot executa JavaScript**, mas com atraso (render queue de horas a dias)
- **Bing, DuckDuckGo e outros crawlers podem não executar JS** — verão apenas as meta tags estáticas do `index.html`
- **Social media crawlers (Facebook, LinkedIn, WhatsApp, Twitter) NÃO executam JavaScript** — verão apenas as OG tags do `index.html` para TODAS as URLs
- Isso significa que compartilhar `https://www.wmgassistenciatecnica.com.br/servicos` no WhatsApp mostrará as OG tags da home, não da página de serviços

**Sugestões:**
- **Solução ideal:** Migrar para SSR/SSG (Next.js, Astro, Remix) ou usar prerendering
- **Solução intermediária:** Usar `vite-plugin-ssg` ou `react-snap` para pré-renderizar as 5 páginas em build time
- **Solução mínima:** Usar um serviço de prerender (Prerender.io, Rendertron) para servir HTML estático para crawlers
- **Alternativa:** Configurar OG tags server-side via redirect/rewrite no host (Netlify/Vercel) injetando meta tags por path

---

### 9. Hierarquia de headings — **65/100**

**Pontos positivos:**
- Home tem `<h1>` no hero
- Páginas usam `<h2>` para seções
- Estrutura lógica em大部分 das páginas

**Problemas:**
- **ServicesPage não tem `<h1>`** — a primeira heading é `<h2>` via `SectionTitle`
- **EquipmentPage não tem `<h1>`** — mesma situação, `SectionTitle` renderiza `<h2>`
- **AboutPage não tem `<h1>`** — `SectionTitle` renderiza `<h2>`
- Home tem múltiplos `<h2>` que poderiam ser `<h3>` em alguns casos (highlights do hero)
- ContactPage tem `<h1>` correto

**Sugestões:**
- Garantir que cada página tenha exatamente um `<h1>`
- ServicesPage: adicionar `<h1>` "Serviços industriais | WMG Assistência Técnica"
- EquipmentPage: adicionar `<h1>` "Equipamentos atendidos pela WMG"
- AboutPage: adicionar `<h1>` "Sobre a WMG Assistência Técnica"
- Revisar `SectionTitle` para aceitar prop `as="h1"` quando necessário

---

### 10. Linkagem interna — **85/100**

**Pontos positivos:**
- Navegação principal com 5 links no header
- Navegação mobile funcional
- Footer com links de navegação
- CTAs distribuídos estrategicamente (home → serviços, home → contato, etc.)
- Links de WhatsApp e telefone com `href` corretos (`tel:`, `wa.me/`)

**Problemas:**
- Sem breadcrumbs visíveis nas páginas internas
- Sem links contextuais entre páginas relacionadas (ex: serviços → equipamentos relacionados)
- Sem links no conteúdo de texto (in-content links)

**Sugestões:**
- Adicionar breadcrumbs visíveis em subpáginas
- Adicionar links cruzados: em cada serviço, linkar para equipamentos relacionados
- Adicionar "Páginas relacionadas" no final de cada página

---

### 11. Mobile-friendly — **85/100**

**Pontos positivos:**
- Meta viewport presente
- TailwindCSS com breakpoints responsivos
- Menu mobile com toggle e aria correto
- Grid responsivo em todas as seções

**Problemas:**
- Imagens hero de 2MB servidas em mobile (sem responsive images)
- Vídeo hero pode consumir muita banda em mobile
- Sem `prefers-reduced-motion` para animações (RevealOnScroll, Counter, shimmer)

**Sugestões:**
- Implementar `srcset` para servir imagens menores em mobile
- Respeitar `prefers-reduced-motion` desabilitando animações
- Considerar poster estático no hero para mobile em vez de vídeo

---

### 12. Favicon & manifest — **40/100**

**Problemas:**
- **Favicon quebrado:** `index.html` referencia `/assets/brand/wmg-logo.jpg` mas os arquivos no repositório são `logo_wmg.png` e `logo_wmg.bmp` — o arquivo `.jpg` não existe
- Sem `favicon.ico` (alguns navegadores ainda procuram)
- Sem `apple-touch-icon`
- Sem `manifest.json` (PWA)
- Sem `theme-color` meta tag
- Sem `mask-icon` para Safari

**Sugestões:**
- Corrigir o caminho do favicon para `/assets/brand/logo_wmg.png`
- Adicionar `<link rel="apple-touch-icon" href="/assets/brand/logo_wmg.png">`
- Adicionar `<meta name="theme-color" content="#0f172a">`
- Criar `manifest.json` básico com name, icons e theme_color
- Gerar `favicon.ico` multi-tamanho (16x16, 32x32, 48x48)

---

### 13. Página 404 — **25/100**

**Problemas:**
- Rota catch-all `<Route path="*" element={<Navigate to="/" replace />} />` faz **redirect 301-style para a home**
- Search engines interpretam isso como: todas as URLs retornam 200 OK → pode causar problemas de canonicalização
- Usuário não recebe feedback de que a página não existe
- Sem página 404 dedicada com links de navegação

**Sugestões:**
- Criar uma página `NotFoundPage` dedicada com mensagem 404, links para home/serviços/contato
- Configurar redirect no host (Netlify/Vercel) para servir 404 com status code 404
- Adicionar `noindex` na página 404

---

### 14. Estrutura de URLs — **90/100**

**Pontos positivos:**
- URLs limpas e semânticas: `/`, `/servicos`, `/equipamentos`, `/sobre`, `/contato`
- Sem extensões, sem query strings, sem hash
- URLs em português alinhadas com o idioma do conteúdo
- Canonical HTTPS com www

**Problemas:**
- Sem redirect configurado de non-www para www (ou vice-versa) no código — depende do host
- Sem redirect de HTTP para HTTPS no código — depende do host

**Sugestões:**
- Verificar redirects no host (Netlify/Vercel) de `http://` → `https://` e `non-www` → `www`
- Considerar URLs com trailing slash consistente (atual: sem trailing slash)

---

### 15. Qualidade de conteúdo — **80/100**

**Pontos positivos:**
- Conteúdo em português, relevante e específico para o nicho
- Descrições técnicas detalhadas para cada serviço e equipamento
- Estrutura escaneável com cards, títulos diretos e bullets
- Depoimentos com prova social
- Métricas de credibilidade (anos, atendimentos, tempo de resposta)

**Problemas:**
- Algumas descrições genéricas poderiam ser mais específicas (ex: "suporte técnico industrial" é amplo)
- Sem blog ou conteúdo educativo (guias, artigos) para capturar long-tail keywords
- Sem FAQ que poderia capturar featured snippets
- Conteúdo de depoimentos sem nomes reais (apenas cargos) — menos credível
- Sem case studies ou portfólio de trabalhos realizados

**Sugestões:**
- Adicionar página de blog/artigos técnicos (ex: "Como diagnosticar falhas em inversores de frequência")
- Adicionar FAQ na home ou página de serviços
- Coletar depoimentos com nomes e empresas (com autorização)
- Adicionar case studies ou exemplos de atendimentos realizados
- Expandir conteúdo de cada serviço para 300+ palavras

---

## Plano de ação prioritário

### Prioridade crítica (impacto alto, esforço baixo)
1. **Converter OG image de SVG para PNG 1200x630**
2. **Corrigir favicon quebrado** (caminho `.jpg` → `.png`)
3. **Adicionar `<h1>` nas páginas Services, Equipment e About**

### Prioridade alta (impacto alto, esforço médio)
4. **Pré-renderizar o site** (SSG) para que crawlers e social media vejam meta tags corretas por URL
5. **Converter imagens para WebP/AVIF** e implementar `<picture>` com `srcset`
6. **Criar página 404 dedicada** em vez de redirect para home
7. **Adicionar `theme-color`, `apple-touch-icon` e `manifest.json`**

### Prioridade média (impacto médio, esforço baixo)
8. **Adicionar `<lastmod>` no sitemap.xml**
9. **Adicionar `preconnect` para `assets.mixkit.co`**
10. **Adicionar `geo` e `openingHours` no JSON-LD**
11. **Adicionar `og:image:width`, `og:image:height` e `og:image:alt`**
12. **Corrigir acentuação nos `aria-label`**
13. **Adicionar breadcrumbs visíveis e schema `BreadcrumbList`**

### Prioridade baixa (impacto médio, esforço alto)
14. **Criar blog/conteúdo educativo** para SEO long-tail
15. **Adicionar schema `Service` para cada serviço**
16. **Coletar depoimentos com nomes reais**
17. **Adicionar FAQ com schema `FAQPage`**
18. **Implementar `prefers-reduced-motion`** nas animações

---

## Conclusão

O site tem uma fundação SEO razoável com meta tags, dados estruturados básicos e bom conteúdo. No entanto, **o maior gargalo é a renderização 100% client-side**, que impede que crawlers de redes sociais e buscadores menores vejam meta tags específicas por página. A correção disso (pré-renderização/SSG) é a ação de maior impacto. Somado às imagens pesadas em PNG e ao favicon quebrado, há espaço significativo para melhoria.

**Nota final: 68/100** — com potencial para atingir 85+ ao resolver as prioridades críticas e altas.
