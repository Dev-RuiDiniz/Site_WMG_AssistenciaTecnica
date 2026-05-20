import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        wmg: {
          navy: {
            950: '#03111f',
            900: '#061a2e',
            800: '#082744',
          },
          blue: {
            700: '#0057b8',
            600: '#0071ce',
            500: '#0098dc',
          },
          cyan: {
            400: '#20d7ff',
            300: '#67e8ff',
          },
          lime: {
            500: '#97d700',
            400: '#b6f21a',
          },
          graphite: {
            900: '#101827',
            700: '#243449',
            500: '#5d6b7c',
          },
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      boxShadow: {
        'wmg-glow': '0 0 32px rgba(32, 215, 255, 0.28)',
        'wmg-card': '0 24px 80px rgba(3, 17, 31, 0.28)',
      },
      backgroundImage: {
        'wmg-radial': 'radial-gradient(circle at top right, rgba(32, 215, 255, 0.24), transparent 32%)',
        'wmg-hero': 'linear-gradient(135deg, #03111f 0%, #061a2e 52%, #082744 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
