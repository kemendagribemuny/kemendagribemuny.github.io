/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'pink': '#F79BD3',
        'merah': '#EA1179',
        'ungu': '#9F0D7F',
        'biru': '#241468',
        'darkblue': '#192947',
        'abu': '#4A5468',
        'abu2': '#424060',
        'hijau': '#025464',
        'merahbat': '#B31312',
        'kuning': '#F0A04B',  
      },
      fontFamily: {
      "montserrat": ["Montserrat", "sans-serif"],
      "poppins": ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}