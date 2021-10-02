module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "penn-green": "#00B6B9",
        "penn-lightGreen": "#00FFF0",
        "penn-gray": "#788292",
        "penn-dark": "#203758",
        "penn-light": '#9EA7B6',
        "penn-darkGray": '#242525',
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
      Ubuntu: ["Ubuntu, sans-serif"],
    },
    container: {
      height: '100%',
      center: true,
      padding: '8rem',
      screens: {
        lg: '2824px',
        xl: '2824px',
        '2xl': '2824px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
