/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'fa-solid': ['"Font Awesome 6 Free"'],
      },
      colors: {
        'brand-text': '#4D4012',
        'brand-pink': '#E8BEA4',
        'brand-green': '#DCDEA5',
        'brand-lightgreen': '#EDEED7',
        'brand-darkgreen': '#184C34',
        'brand-darkgreen2': '#BAD399',
      },
    },
  },
  plugins: [],
}

