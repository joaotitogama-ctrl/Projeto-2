/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E50914',
          orange: '#FF5722',
          accent: '#FF3E24',
          gold: '#FFB800',
          dark: '#0A0A0C',
          darker: '#050507',
          card: '#121217',
          cardHover: '#181820',
          border: '#23232C'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
