/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta morado + negro. Se conservan los mismos nombres de token,
        // así todos los componentes existentes cambian de tema sin tocarlos.
        base: '#07050D',
        elevated: '#0E0A1D',
        surface: '#171028',
        border: '#2A2144',
        accent: {
          DEFAULT: '#7C3AED',
          light: '#A78BFA',
        },
        ink: {
          DEFAULT: '#F5F3FF',
          muted: '#A39BC2',
          faint: '#8A82A6',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%)',
        'radial-fade': 'radial-gradient(circle at top, rgba(124,58,237,0.22), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(167,139,250,0.18), 0 20px 60px -20px rgba(124,58,237,0.45)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        floatY: 'floatY 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
