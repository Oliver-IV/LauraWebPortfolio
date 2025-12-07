/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coquette: {
          base: '#fff0f5',   // Fondo (Lavender Blush)
          light: '#fff5f7',  // Accordion bg
          main: '#ffb7b2',   // Rosa principal (Pastel)
          dark: '#ff9e99',   // Rosa oscuro (Bordes/Hover)
          text: '#5d5d5d',   // Gris suave
          accent: '#8b5e5e', // Café rojizo (Títulos)
        }
      },
      fontFamily: {
        fancy: ['"Dancing Script"', 'cursive'],
        elegant: ['"Playfair Display"', 'serif'],
        body: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 183, 178, 0.6)',
        'soft': '0 10px 30px -5px rgba(255, 158, 153, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}