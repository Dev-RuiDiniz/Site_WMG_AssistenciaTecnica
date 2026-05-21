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
        findEmptyTextFields(service, ['slug', 'title', 'description', 'demand', 'response', 'ctaId']),
      ).toEqual([]);
      expect(ctaIds).toContain(service.ctaId);
    }
  });

  it('mantem equipamentos com campos obrigatorios e slugs unicos', () => {
    expect(equipmentContent.length).toBeGreaterThan(0);
    expect(hasUniqueSlugs(equipmentContent)).toBe(true);

    for (const equipment of equipmentContent) {
      expect(findEmptyTextFields(equipment, ['slug', 'title', 'description'])).toEqual([]);
    }
  });

  it('mantem CTAs e navegacao com campos criticos preenchidos', () => {
    for (const cta of ctaContent) {
      expect(findEmptyTextFields(cta, ['id', 'label', 'href', 'purpose'])).toEqual([]);
    }

    for (const item of navigationItems) {
      expect(findEmptyTextFields(item, ['label', 'href'])).toEqual([]);
    }
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
});
