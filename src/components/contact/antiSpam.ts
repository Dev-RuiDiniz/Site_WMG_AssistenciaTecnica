export const ANTI_SPAM_RATE_LIMIT_MS = 60_000;
export const ANTI_SPAM_STORAGE_KEY = 'wmg:last-diagnostic-submit-at';

export function hasFilledHoneypot(value: string) {
  return value.trim().length > 0;
}

export function isWithinRateLimit(lastSubmitAt: number | null, now = Date.now(), limitMs = ANTI_SPAM_RATE_LIMIT_MS) {
  if (!lastSubmitAt) {
    return false;
  }

  return now - lastSubmitAt < limitMs;
}

export function getRateLimitRemainingMs(lastSubmitAt: number | null, now = Date.now(), limitMs = ANTI_SPAM_RATE_LIMIT_MS) {
  if (!isWithinRateLimit(lastSubmitAt, now, limitMs)) {
    return 0;
  }

  return Math.max(limitMs - (now - Number(lastSubmitAt)), 0);
}

export function readLastSubmitAt(storage: Storage = window.sessionStorage) {
  const rawValue = storage.getItem(ANTI_SPAM_STORAGE_KEY);
  const parsedValue = rawValue ? Number(rawValue) : Number.NaN;

  return Number.isFinite(parsedValue) ? parsedValue : null;
}

export function recordSubmitAttempt(storage: Storage = window.sessionStorage, now = Date.now()) {
  storage.setItem(ANTI_SPAM_STORAGE_KEY, String(now));
}
