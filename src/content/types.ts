export type ContentItem = {
  slug: string;
  title: string;
  description: string;
};

export type CTAContent = {
  id: string;
  label: string;
  href: string;
  purpose: string;
};

export type CompanyContent = {
  name: string;
  segment: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  description: string;
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    primaryCtaId: string;
    secondaryCtaId: string;
  };
  servicesSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  aboutSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  contactSection: {
    eyebrow: string;
    title: string;
    description: string;
    ctaId: string;
  };
};

export type NavigationItem = {
  label: string;
  href: string;
};
