export const wmgTokens = {
  colors: {
    navy950: '#03111f',
    navy900: '#061a2e',
    navy800: '#082744',
    blue700: '#0057b8',
    blue600: '#0071ce',
    blue500: '#0098dc',
    cyan400: '#20d7ff',
    cyan300: '#67e8ff',
    lime500: '#97d700',
    lime400: '#b6f21a',
    lime100: '#eef7cf',
    white: '#ffffff',
    graphite900: '#101827',
    graphite700: '#243449',
    graphite500: '#5d6b7c',
  },
  radius: {
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    pill: '999px',
  },
  shadow: {
    glow: '0 0 32px rgba(32, 215, 255, 0.28)',
    card: '0 24px 80px rgba(3, 17, 31, 0.28)',
  },
} as const;

export type WmgTokens = typeof wmgTokens;
