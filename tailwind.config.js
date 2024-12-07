/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#DFF7DF',
          DEFAULT: '#204E27',
          dark: '#6DBE45',
        },
        accent: {
          light: '#FFC247',
          DEFAULT: '#E6A832',
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse-slow': 'spin-reverse 8s linear infinite',
        'gradient-shift': 'gradient 8s ease infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: {
            transform: 'rotate(360deg)',
          },
          to: {
            transform: 'rotate(0deg)',
          },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      backfaceVisibility: {
        'hidden': 'hidden'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.backface-hidden': {
          'backface-visibility': 'hidden',
          '-moz-backface-visibility': 'hidden',
          '-webkit-backface-visibility': 'hidden',
          '-ms-backface-visibility': 'hidden'
        },
      })
    },
  ],
} 