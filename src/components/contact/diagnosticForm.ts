import { buildWhatsAppLink } from '../whatsapp/whatsappLink';

export type DiagnosticFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  equipment: string;
  failureType: string;
  urgency: string;
  description: string;
  consent: boolean;
  companyWebsite: string;
};

export type DiagnosticFormErrors = Partial<Record<keyof DiagnosticFormValues, string>>;

export const initialDiagnosticFormValues: DiagnosticFormValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  equipment: '',
  failureType: '',
  urgency: '',
  description: '',
  consent: false,
  companyWebsite: '',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeText(value: string) {
  return value.trim();
}

function hasContact(values: DiagnosticFormValues) {
  return normalizeText(values.email).length > 0 || normalizeText(values.phone).length > 0;
}

export function validateDiagnosticForm(values: DiagnosticFormValues): DiagnosticFormErrors {
  const errors: DiagnosticFormErrors = {};

  if (!normalizeText(values.name)) {
    errors.name = 'Informe seu nome para identificarmos o contato.';
  }

  if (!hasContact(values)) {
    errors.email = 'Informe e-mail ou telefone para retorno.';
    errors.phone = 'Informe telefone ou e-mail para retorno.';
  }

  if (values.email && !emailRegex.test(normalizeText(values.email))) {
    errors.email = 'Informe um e-mail válido.';
  }

  if (values.phone && normalizeText(values.phone).replace(/\D/g, '').length < 10) {
    errors.phone = 'Informe um telefone com DDD.';
  }

  if (!normalizeText(values.equipment)) {
    errors.equipment = 'Selecione o equipamento relacionado.';
  }

  if (!normalizeText(values.failureType)) {
    errors.failureType = 'Selecione o tipo de falha.';
  }

  if (!normalizeText(values.urgency)) {
    errors.urgency = 'Selecione a urgência do atendimento.';
  }

  if (normalizeText(values.description).length < 20) {
    errors.description = 'Descreva o problema com pelo menos 20 caracteres.';
  }

  if (!values.consent) {
    errors.consent = 'Confirme o consentimento para contato.';
  }

  return errors;
}

export function hasDiagnosticFormErrors(errors: DiagnosticFormErrors) {
  return Object.keys(errors).length > 0;
}

export function buildDiagnosticMailto(values: DiagnosticFormValues, recipient: string) {
  const subject = `Solicitação de diagnóstico - ${normalizeText(values.equipment) || 'equipamento industrial'}`;
  const body = [
    'Olá, equipe WMG.',
    '',
    'Gostaria de solicitar uma avaliação técnica com os dados abaixo:',
    '',
    `Nome: ${normalizeText(values.name)}`,
    `Empresa: ${normalizeText(values.company) || 'Não informado'}`,
    `E-mail: ${normalizeText(values.email) || 'Não informado'}`,
    `Telefone/WhatsApp: ${normalizeText(values.phone) || 'Não informado'}`,
    `Equipamento: ${normalizeText(values.equipment)}`,
    `Tipo de falha: ${normalizeText(values.failureType)}`,
    `Urgência: ${normalizeText(values.urgency)}`,
    '',
    'Descrição do problema:',
    normalizeText(values.description),
  ].join('\n');

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildWhatsAppFallback(values: DiagnosticFormValues, phone: string) {
  const message = [
    'Olá, equipe WMG. Quero solicitar um diagnóstico técnico.',
    `Nome: ${normalizeText(values.name) || 'Não informado'}`,
    `Equipamento: ${normalizeText(values.equipment) || 'Não informado'}`,
    `Falha: ${normalizeText(values.failureType) || 'Não informado'}`,
    `Urgência: ${normalizeText(values.urgency) || 'Não informado'}`,
  ].join('\n');

  return buildWhatsAppLink(phone, message);
}
