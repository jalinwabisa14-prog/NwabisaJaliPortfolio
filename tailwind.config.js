/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        azure: {
          50: '#e6f7ff',
          100: '#cceeff',
          200: '#99ddff',
          300: '#66ccff',
          400: '#33bbff',
          500: '#00aaff',
          600: '#0099e6',
          700: '#0077b3',
          800: '#005580',
          900: '#003a57',
          950: '#002845',
        },
      },
    },
  },
  plugins: [],
};
