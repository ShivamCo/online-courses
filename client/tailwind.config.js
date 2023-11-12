/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      black1: '#ОВОС10',
      darkGrey: '#1F2833',
      lightGrey: '#C5C6C7',
      neon: '#FF5733',
      darkNeon: '#45A29E',
      current: 'currentColor',
      


    },},
    
  },
  plugins: [],
}

