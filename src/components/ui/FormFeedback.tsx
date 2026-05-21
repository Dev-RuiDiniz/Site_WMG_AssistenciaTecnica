import type { ReactNode } from 'react';

export type FormFeedbackStatus = 'idle' | 'loading' | 'success' | 'error';

type FormFeedbackProps = {
  status: FormFeedbackStatus;
  title: string;
  message: string;
  actions?: ReactNode;
};

const statusStyles: Record<Exclude<FormFeedbackStatus, 'idle'>, string> = {
  loading: 'border-wmg-cyan-300 bg-wmg-cyan-300/10 text-wmg-cyan-100',
  success: 'border-wmg-lime-500 bg-wmg-lime-500/15 text-wmg-lime-100',
  error: 'border-red-300 bg-red-500/15 text-red-100',
};

export function FormFeedback({ status, title, message, actions }: FormFeedbackProps) {
  if (status === 'idle') {
    return null;
  }

  const role = status === 'error' ? 'alert' : 'status';

  return (
    <div
      role={role}
      aria-live={status === 'error' ? 'assertive' : 'polite'}
      className={`rounded-2xl border p-4 ${statusStyles[status]}`}
    >
      <p className="text-base font-extrabold">{title}</p>
      <p className="mt-2 text-sm leading-6">{message}</p>
      {actions ? <div className="mt-4 grid gap-3 sm:flex sm:flex-wrap">{actions}</div> : null}
    </div>
  );
}
