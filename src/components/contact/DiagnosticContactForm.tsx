import { FormEvent, useMemo, useState } from 'react';
import { companyContent, contactContent, equipmentContent, failureTypeOptions, urgencyOptions } from '../../content';
import {
  buildDiagnosticMailto,
  buildWhatsAppFallback,
  hasDiagnosticFormErrors,
  initialDiagnosticFormValues,
  validateDiagnosticForm,
  type DiagnosticFormErrors,
  type DiagnosticFormValues,
} from './diagnosticForm';
import { submitDiagnosticForm } from './diagnosticSubmit';

type DiagnosticStatus = 'idle' | 'submitting' | 'success' | 'error';

function ErrorText({ message }: { message?: string }) {
  return message ? <p className="mt-2 text-sm font-semibold text-red-200">{message}</p> : null;
}

export function DiagnosticContactForm() {
  const [values, setValues] = useState<DiagnosticFormValues>(initialDiagnosticFormValues);
  const [errors, setErrors] = useState<DiagnosticFormErrors>({});
  const [status, setStatus] = useState<DiagnosticStatus>('idle');
  const [submitError, setSubmitError] = useState<string>('');

  const mailtoHref = useMemo(() => buildDiagnosticMailto(values, companyContent.email), [values]);
  const whatsappHref = useMemo(() => buildWhatsAppFallback(values, companyContent.phone), [values]);

  function update<Field extends keyof DiagnosticFormValues>(field: Field, value: DiagnosticFormValues[Field]) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus('idle');
    setSubmitError('');
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateDiagnosticForm(values);
    setErrors(validationErrors);

    if (hasDiagnosticFormErrors(validationErrors)) {
      setStatus('error');
      setSubmitError(contactContent.validationErrorMessage);
      return;
    }

    setStatus('submitting');
    setSubmitError('');

    const result = await submitDiagnosticForm(values);

    if (result.status === 'success') {
      setStatus('success');
      return;
    }

    setStatus('error');
    setSubmitError(result.message);
  }

  const isSubmitting = status === 'submitting';

  return (
    <form className="mt-8 grid gap-6" noValidate onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-white">
          Nome *
          <input
            className="rounded-2xl px-4 py-3 text-wmg-navy-950"
            value={values.name}
            onChange={(event) => update('name', event.target.value)}
            disabled={isSubmitting}
          />
          <ErrorText message={errors.name} />
        </label>

        <label className="grid gap-2 text-sm font-bold text-white">
          Empresa
          <input
            className="rounded-2xl px-4 py-3 text-wmg-navy-950"
            value={values.company}
            onChange={(event) => update('company', event.target.value)}
            disabled={isSubmitting}
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-white">
          E-mail
          <input
            className="rounded-2xl px-4 py-3 text-wmg-navy-950"
            type="email"
            value={values.email}
            onChange={(event) => update('email', event.target.value)}
            disabled={isSubmitting}
          />
          <ErrorText message={errors.email} />
        </label>

        <label className="grid gap-2 text-sm font-bold text-white">
          Telefone / WhatsApp
          <input
            className="rounded-2xl px-4 py-3 text-wmg-navy-950"
            value={values.phone}
            onChange={(event) => update('phone', event.target.value)}
            disabled={isSubmitting}
          />
          <ErrorText message={errors.phone} />
        </label>

        <label className="grid gap-2 text-sm font-bold text-white">
          Equipamento *
          <select
            className="rounded-2xl px-4 py-3 text-wmg-navy-950"
            value={values.equipment}
            onChange={(event) => update('equipment', event.target.value)}
            disabled={isSubmitting}
          >
            <option value="">Selecione uma categoria</option>
            {equipmentContent.map((equipment) => (
              <option key={equipment.slug} value={equipment.title}>
                {equipment.title}
              </option>
            ))}
          </select>
          <ErrorText message={errors.equipment} />
        </label>

        <label className="grid gap-2 text-sm font-bold text-white">
          Tipo de falha *
          <select
            className="rounded-2xl px-4 py-3 text-wmg-navy-950"
            value={values.failureType}
            onChange={(event) => update('failureType', event.target.value)}
            disabled={isSubmitting}
          >
            <option value="">Selecione o tipo de falha</option>
            {failureTypeOptions.map((option) => (
              <option key={option.slug} value={option.title}>
                {option.title}
              </option>
            ))}
          </select>
          <ErrorText message={errors.failureType} />
        </label>

        <label className="grid gap-2 text-sm font-bold text-white md:col-span-2">
          Urgência *
          <select
            className="rounded-2xl px-4 py-3 text-wmg-navy-950"
            value={values.urgency}
            onChange={(event) => update('urgency', event.target.value)}
            disabled={isSubmitting}
          >
            <option value="">Selecione a urgência</option>
            {urgencyOptions.map((option) => (
              <option key={option.slug} value={option.title}>
                {option.title}
              </option>
            ))}
          </select>
          <ErrorText message={errors.urgency} />
        </label>

        <label className="grid gap-2 text-sm font-bold text-white md:col-span-2">
          Descrição do problema *
          <textarea
            className="min-h-36 rounded-2xl px-4 py-3 text-wmg-navy-950"
            value={values.description}
            onChange={(event) => update('description', event.target.value)}
            disabled={isSubmitting}
          />
          <ErrorText message={errors.description} />
        </label>
      </div>

      <label className="flex gap-3 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-slate-100">
        <input
          type="checkbox"
          checked={values.consent}
          onChange={(event) => update('consent', event.target.checked)}
          disabled={isSubmitting}
        />
        <span>{contactContent.privacyNote}</span>
      </label>
      <ErrorText message={errors.consent} />

      <div className="flex flex-wrap gap-4">
        <button
          type="submit"
          className="rounded-full bg-wmg-lime-500 px-6 py-3 font-extrabold uppercase text-wmg-navy-950 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando diagnóstico...' : 'Enviar diagnóstico'}
        </button>
        <a className="rounded-full border border-wmg-cyan-400 px-6 py-3 font-extrabold uppercase text-white" href={mailtoHref}>
          {contactContent.mailtoLabel}
        </a>
        <a className="rounded-full px-6 py-3 font-extrabold uppercase text-wmg-cyan-300" href={whatsappHref}>
          {contactContent.whatsappLabel}
        </a>
      </div>

      <div role="status" aria-live="polite">
        {status === 'success' ? (
          <p className="rounded-2xl bg-wmg-lime-500/20 p-4 font-semibold text-wmg-lime-500">{contactContent.successMessage}</p>
        ) : null}
        {status === 'error' ? (
          <p className="rounded-2xl bg-red-500/20 p-4 font-semibold text-red-100">{submitError || contactContent.errorMessage}</p>
        ) : null}
      </div>
    </form>
  );
}
