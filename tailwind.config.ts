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
        'wmg-glow-lime': '0 0 32px rgba(151, 215, 0, 0.32)',
        'wmg-card': '0 24px 80px rgba(3, 17, 31, 0.28)',
        'wmg-glass': '0 8px 32px rgba(3, 17, 31, 0.24), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      backgroundImage: {
        'wmg-radial':
          'radial-gradient(circle at top right, rgba(32, 215, 255, 0.24), transparent 32%)',
        'wmg-hero': 'linear-gradient(135deg, #03111f 0%, #061a2e 52%, #082744 100%)',
        'wmg-hero-video': 'linear-gradient(90deg, rgba(3,17,31,0.96) 0%, rgba(3,17,31,0.72) 45%, rgba(3,17,31,0.2) 100%)',
        'wmg-glass':
          'linear-gradient(135deg, rgba(32,215,255,0.14) 0%, rgba(151,215,0,0.08) 100%)',
        'wmg-shimmer':
          'linear-gradient(110deg, transparent 30%, rgba(32,215,255,0.25) 50%, transparent 70%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3.5s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
