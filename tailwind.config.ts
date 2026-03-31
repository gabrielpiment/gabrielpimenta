import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{vue,ts,js}'],
  theme: {
    extend: {
      colors: {
        // FORSI Design System V3 — paleta exata
        navy: {
          DEFAULT: '#0E1621',
          light:   '#141E2D',
          card:    '#1A2435',
          hover:   '#1F2B3D',
        },
        blue: {
          DEFAULT: '#2563EB',
          bright:  '#3B82F6',
          dark:    '#1D4ED8',
        },
        forsi: {
          white:   '#F8FAFC',
          gray100: '#E2E8F0',
          gray200: '#CBD5E1',
          gray300: '#94A3B8',
          gray400: '#64748B',
          gray500: '#475569',
          red:     '#EF4444',
          green:   '#22C55E',
          amber:   '#F59E0B',
        },
      },
      fontFamily: {
        display: ["'Clash Display'", 'sans-serif'],
        body:    ["'DM Sans'",       'sans-serif'],
        mono:    ["'DM Mono'",       'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
