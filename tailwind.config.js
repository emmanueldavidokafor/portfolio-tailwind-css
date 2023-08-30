/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm:"480px",
        // md:"768",
        // lg:"1024",
        // xl:"1280"
      },
      spacing:{
        "big":"48rem"
      }
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}

