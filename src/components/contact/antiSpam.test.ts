import {
  ANTI_SPAM_RATE_LIMIT_MS,
  getRateLimitRemainingMs,
  hasFilledHoneypot,
  isWithinRateLimit,
} from './antiSpam';

describe('antiSpam', () => {
  it('identifica honeypot preenchido como submissao de spam', () => {
    expect(hasFilledHoneypot('https://spam.example')).toBe(true);
    expect(hasFilledHoneypot('   bot preenchido   ')).toBe(true);
  });

  it('aceita honeypot vazio para usuario legitimo', () => {
    expect(hasFilledHoneypot('')).toBe(false);
    expect(hasFilledHoneypot('   ')).toBe(false);
  });

  it('bloqueia novo envio dentro da janela de rate limit', () => {
    const now = 120_000;
    const lastSubmitAt = now - 10_000;

    expect(isWithinRateLimit(lastSubmitAt, now)).toBe(true);
    expect(getRateLimitRemainingMs(lastSubmitAt, now)).toBe(ANTI_SPAM_RATE_LIMIT_MS - 10_000);
  });

  it('libera novo envio apos a janela de rate limit', () => {
    const now = 120_000;
    const lastSubmitAt = now - ANTI_SPAM_RATE_LIMIT_MS - 1;

    expect(isWithinRateLimit(lastSubmitAt, now)).toBe(false);
    expect(getRateLimitRemainingMs(lastSubmitAt, now)).toBe(0);
  });
});
