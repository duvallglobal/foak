import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Dark atmospheric base
        'dark': {
          'bg': '#1a1a1a',
          'surface': '#252525',
          'border': '#404040'
        },
        // Brand accent colors from logo
        'accent': {
          'teal': '#00d4ff',
          'teal-dark': '#00a8cc',
          'teal-light': '#33e0ff'
        },
        // Neutral palette for dark theme
        'neutral': {
          '50': '#f9fafb',
          '100': '#f3f4f6',
          '200': '#e5e7eb',
          '300': '#d1d5db',
          '400': '#9ca3af',
          '500': '#6b7280',
          '600': '#4b5563',
          '700': '#374151',
          '800': '#1f2937',
          '900': '#111827'
        }
      },
      backgroundImage: {
        'spotlight-gradient': `radial-gradient(circle at center top, rgba(0, 212, 255, 0.15) 0%, rgba(0, 212, 255, 0.05) 20%, transparent 60%)`
      },
      boxShadow: {
        'spotlight': '0 0 80px 20px rgba(0, 212, 255, 0.2)',
        'spotlight-sm': '0 0 40px 10px rgba(0, 212, 255, 0.15)',
        'teal-glow': '0 0 20px rgba(0, 212, 255, 0.4)'
      },
      fontSize: {
        'hero': '3.5rem'
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out'
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 40px rgba(0, 212, 255, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 60px rgba(0, 212, 255, 0.5)'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography')
  ]
} satisfies Config;
