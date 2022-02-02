module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['Montserrat', 'sans-serif'],
        'mono': ['Montserrat', 'sans-serif'],
        'display': ['Montserrat', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif']
      },

      colors: {
        'secondary': '#dbdbdb',
        'tertiary': '#a3a3a3',

        purple: {
          500: '#e778ff',
        },

        yellow: {
          500: '#ffe100',
        }
      },

      backgroundSize: {
        'size-200': '200% 200%',
      },

      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [],
}
