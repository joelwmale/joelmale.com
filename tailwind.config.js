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
        'body': ['Stolzl', 'sans-serif']
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
