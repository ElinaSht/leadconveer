/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts,css}'],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'grey2': '#C0C0C0',
        'grey': '#808080',
        'light-gray': '#F6F6F6',
        'dark-gray': '#2D2D2D',
        'orange-juice': '#FF6600',
        'orange-juice-light': '#FF9832',
        'orange-juice-dark': '#CD3400',
        'blueberry': '#8A38D6',
        'disabled': '#3F3F3F',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
  }
}
