/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
    content: [
        "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          borderRadius: {
              extraLarge: "12rem",
          },
          fontFamily: {
              'sans': ['Inter var', 'sans-serif'],
          }
      },
      fontFamily: {
          'Fira code': ['Fira Code', 'monospace'],
      }
  },
    plugins: [],
}
