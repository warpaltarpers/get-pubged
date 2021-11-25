module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cadmium-yellow': '#fff512',
        'gargoyle-gas': '#ffde40',
        'gargoyle-light': '#ffeb8c',
        'spanish-yellow': '#ebb014',
        'harvest-gold': '#de8d00',
        'traditional-brown': '#9c4100',
        'vampire-black': '#090907'
      },
      fontFamily: {
        'rubik-mono': ['"Rubik Mono One"', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
