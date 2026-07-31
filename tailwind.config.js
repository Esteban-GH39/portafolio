/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0F172A',
        elevated: '#141F38',
        surface: '#1B2942',
        border: '#243046',
        accent: {
          DEFAULT: '#2563EB',
          light: '#38BDF8',
        },
        ink: {
          DEFAULT: '#F8FAFC',
          muted: '#94A3B8',
          faint: '#64748B',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)',
        'radial-fade': 'radial-gradient(circle at top, rgba(37,99,235,0.18), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56,189,248,0.15), 0 20px 60px -20px rgba(37,99,235,0.35)',
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
