export type ContentItem = {
  slug: string;
  title: string;
  description: string;
};

export type ServiceContent = ContentItem & {
  demand: string;
  response: string;
  ctaId: string;
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

export type HomeHighlightItem = {
  title: string;
  description: string;
};

export type MetricItem = {
  value: number;
  suffix?: string;
  label: string;
};

export type TimelineStep = {
  step: string;
  title: string;
  description: string;
};

export type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    primaryCtaId: string;
    secondaryCtaId: string;
    highlights: HomeHighlightItem[];
  };
  painSection: {
    eyebrow: string;
    title: string;
    description: string;
    points: HomeHighlightItem[];
  };
  servicesSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  benefitsSection: {
    eyebrow: string;
    title: string;
    description: string;
    benefits: HomeHighlightItem[];
  };
  aboutSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  credibilitySection: {
    eyebrow: string;
    title: string;
    description: string;
    items: HomeHighlightItem[];
  };
  contactSection: {
    eyebrow: string;
    title: string;
    description: string;
    ctaId: string;
  };
  finalCtaSection: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCtaId: string;
    secondaryCtaId: string;
  };
  metricsSection: {
    eyebrow: string;
    title: string;
    metrics: MetricItem[];
  };
  howItWorksSection: {
    eyebrow: string;
    title: string;
    description: string;
    steps: TimelineStep[];
  };
  testimonialsSection: {
    eyebrow: string;
    title: string;
    testimonials: TestimonialItem[];
  };
};

export type NavigationItem = {
  label: string;
  href: string;
};
