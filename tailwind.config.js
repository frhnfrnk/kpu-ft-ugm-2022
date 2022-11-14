/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '425px',
      },
      fontFamily: {
        Lato: ['Lato', ...defaultTheme.fontFamily.sans],
        "Playfair": ['Playfair Display', "serif"]
      },
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
    }
  },
  plugins: [],
}
