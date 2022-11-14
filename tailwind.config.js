/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily:{
      Montserrat:["Montserrat", "sans-serif"],
      bb:[ 'Bebas Neue', "cursive"],
      hbb:[ 'Monoton', 'cursive'],
      hd1:['Anton', 'sans-serif'],
    }},
  },
  plugins: [],
}
