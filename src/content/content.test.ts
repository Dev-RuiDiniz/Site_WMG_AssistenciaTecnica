import {
  companyContent,
  ctaContent,
  equipmentContent,
  findDuplicateSlugs,
  findEmptyTextFields,
  hasRequiredTextFields,
  hasUniqueSlugs,
  homeContent,
  navigationItems,
  servicesContent,
  visualAssets,
} from '.';

describe('versioned content', () => {
  it('mantem dados publicos da empresa preenchidos', () => {
    expect(
      hasRequiredTextFields(companyContent, [
        'name',
        'segment',
        'email',
        'phone',
        'location',
        'website',
        'description',
      ]),
    ).toBe(true);
  });

  it('mantem telefone de WhatsApp centralizado no cadastro da empresa', () => {
    expect(companyContent.phone).toBe('+55 12 3426-0300');
    expect(companyContent.phone.replace(/\D/g, '')).toBe('551234260300');
  });

  it('mantem servicos com contratos comerciais, CTAs validos e slugs unicos', () => {
    const ctaIds = ctaContent.map((cta) => cta.id);
    const expectedServiceSlugs = [
      'diagnostico-tecnico',
      'manutencao-corretiva',
      'manutencao-preventiva',
      'placas-eletronicas',
      'drives-inversores-servos',
      'campo-laboratorio',
    ];

    expect(servicesContent.length).toBeGreaterThanOrEqual(expectedServiceSlugs.length);
    expect(hasUniqueSlugs(servicesContent)).toBe(true);
    expect(findDuplicateSlugs(servicesContent)).toEqual([]);

    for (const slug of expectedServiceSlugs) {
      expect(servicesContent.map((service) => service.slug)).toContain(slug);
    }

    for (const service of servicesContent) {
      expect(
        findEmptyTextFields(service, [
          'slug',
          'title',
          'description',
          'demand',
          'response',
          'ctaId',
        ]),
      ).toEqual([]);
      expect(ctaIds).toContain(service.ctaId);
    }
  });

  it('mantem equipamentos atendidos com categorias obrigatorias e descricoes claras', () => {
    const expectedEquipmentSlugs = [
      'placas-eletronicas',
      'inversores',
      'servo-drives',
      'plcs-clps',
      'ihms',
      'cncs',
      'fontes',
      'paineis-eletricos',
    ];

    expect(equipmentContent.length).toBeGreaterThanOrEqual(expectedEquipmentSlugs.length);
    expect(hasUniqueSlugs(equipmentContent)).toBe(true);
    expect(findDuplicateSlugs(equipmentContent)).toEqual([]);

    for (const slug of expectedEquipmentSlugs) {
      expect(equipmentContent.map((equipment) => equipment.slug)).toContain(slug);
    }

    for (const equipment of equipmentContent) {
      expect(findEmptyTextFields(equipment, ['slug', 'title', 'description'])).toEqual([]);
      expect(equipment.description.length).toBeGreaterThan(40);
    }
  });

  it('mantem CTAs e navegacao com campos criticos preenchidos', () => {
    for (const cta of ctaContent) {
      expect(findEmptyTextFields(cta, ['id', 'label', 'href', 'purpose'])).toEqual([]);
    }

    for (const item of navigationItems) {
      expect(findEmptyTextFields(item, ['label', 'href'])).toEqual([]);
    }

    expect(navigationItems.map((item) => item.href)).toContain('/equipamentos');
  });

  it('configura CTA de suporte para WhatsApp com mensagem preenchida', () => {
    const supportCta = ctaContent.find((cta) => cta.id === 'talk-to-support');

    expect(supportCta).toBeDefined();
    expect(supportCta?.href).toContain('https://wa.me/551234260300');
    expect(supportCta?.href).toContain('text=');
    expect(decodeURIComponent(supportCta?.href ?? '')).toContain('Olá, equipe WMG');
  });

  it('mantem conteudo da pagina inicial conectado a CTAs existentes', () => {
    const ctaIds = ctaContent.map((cta) => cta.id);

    expect(homeContent.hero.title).toBe(companyContent.name);
    expect(ctaIds).toContain(homeContent.hero.primaryCtaId);
    expect(ctaIds).toContain(homeContent.hero.secondaryCtaId);
    expect(ctaIds).toContain(homeContent.contactSection.ctaId);
    expect(ctaIds).toContain(homeContent.finalCtaSection.primaryCtaId);
    expect(ctaIds).toContain(homeContent.finalCtaSection.secondaryCtaId);
  });

  it('mantem assets visuais de campanha com metadados acessiveis', () => {
    for (const asset of Object.values(visualAssets)) {
      expect(asset.src).toMatch(/^\/assets\/campaign\/.+\.png$/);
      expect(asset.alt.length).toBeGreaterThan(24);
      expect(asset.title.length).toBeGreaterThan(8);
    }
  });
});
