/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#05070A',
        'bg-alt': '#080A0D',
        surface: '#0D1117',
        'surface-2': '#11151C',
        primary: '#8030E0',
        secondary: '#8B5CF6',
        light: '#A855F7',
        ink: '#F5F3FF',
        muted: '#A1A1AA',
        border: 'rgba(139, 92, 246, 0.16)'
      },
      fontFamily: {
        sans: ['Vazirmatn', 'Tahoma', 'sans-serif']
      },
      maxWidth: {
        content: '1240px'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(139, 92, 246, 0.12), 0 20px 60px -20px rgba(128, 48, 224, 0.35)',
        card: '0 1px 0 rgba(255,255,255,0.03) inset, 0 20px 40px -24px rgba(0,0,0,0.6)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.55 },
          '50%': { opacity: 0.9 }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 5s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
