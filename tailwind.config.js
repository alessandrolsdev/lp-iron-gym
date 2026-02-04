/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // A cor do anel de luz neon da logo
        'gym-red': '#FF2E00', 
        // A cor sólida das letras 3D IRON GYM (um vermelho mais sangue)
        'gym-crimson': '#D41C1C',
        // O fundo "cinza meio azul" que você notou (Dark Slate)
        'gym-black': '#0B0E14', 
        // Um tom acima para os cards (vidro escuro)
        'gym-dark': '#151A25',
        // O Dourado do "GD"
        'gym-gold': '#C5A059',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'neon-pulse': 'neonPulse 2s infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        neonPulse: {
          '0%': { boxShadow: '0 0 10px #D41C1C, 0 0 20px #FF2E00' },
          '100%': { boxShadow: '0 0 20px #D41C1C, 0 0 40px #FF2E00' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}