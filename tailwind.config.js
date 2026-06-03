/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1120',
          dark: '#060C18',
        },
        secondary: '#111827',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8C94A',
          dark: '#B8961E',
        },
        textLight: '#F8FAFC',
        textGray: '#94A3B8',
        cardBg: '#FFFFFF',
        lightSection: '#F8FAFC',
        borderColor: '#E5E7EB',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(212, 175, 55, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #E8C94A 50%, #B8961E 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0B1120 0%, #111827 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(11,17,32,0.95) 0%, rgba(17,24,39,0.7) 50%, rgba(11,17,32,0.4) 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 8px 40px rgba(212, 175, 55, 0.4)',
        'card': '0 10px 40px rgba(0,0,0,0.08)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.15)',
        'glass': '0 8px 32px rgba(0,0,0,0.15)',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}