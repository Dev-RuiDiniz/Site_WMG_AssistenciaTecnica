export type NavigationItem = {
  label: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export const contactLinks = {
  email: 'suporte@wmgassistenciatecnica.com.br',
  phone: '+55 12 99158-8460',
  location: 'Taubaté - SP',
} as const;
