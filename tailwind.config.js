module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Stolzl', 'sans-serif'],
        'serif': ['Stolzl', 'sans-serif'],
        'mono': ['Stolzl', 'sans-serif'],
        'display': ['Stolzl', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif'],
      },

      colors: {
        'primary': '#171321',
        'secondary': '#dbdbdb',
        'tertiary': '#a3a3a3',
        'pixel-pink': "#f74ea1",

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

      border: {
        "pixel": "linear-gradient( 298deg, #f74ea1 3%, #9a249c 60%, #4f0dcf 97% )",
      },

      backgroundImage: {
        "pixel": "linear-gradient( 298deg, #f74ea1 3%, #9a249c 60%, #4f0dcf 97% )",
      }
    },
  },
  plugins: [],
}
