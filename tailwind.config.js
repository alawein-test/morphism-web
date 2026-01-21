/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core purples
        void: '#0A0612',
        surface: '#13101A',
        'surface-light': '#1A1523',

        // Purple spectrum
        purple: {
          950: '#1A0B2E',
          900: '#2D1B4E',
          800: '#3D2066',
          700: '#5B21B6',
          600: '#7C3AED',
          500: '#8B5CF6',
          400: '#A78BFA',
          300: '#C4B5FD',
        },

        // Accents
        violet: '#A855F7',
        electric: '#D946EF',

        // Neutrals
        slate: {
          950: '#0F0D14',
          900: '#1A1625',
          800: '#252033',
          700: '#3D3654',
          600: '#5A5272',
          500: '#7A7290',
          400: '#9D96AD',
          300: '#C4BFCF',
          200: '#E2DFE8',
          100: '#F5F3F7',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'SF Mono', 'Monaco', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grid-flow': 'gridFlow 20s linear infinite',
      },
      keyframes: {
        gridFlow: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        },
      },
    },
  },
  plugins: [],
}
