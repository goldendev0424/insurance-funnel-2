module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    screens: {
      sm: {
        max: '800px',
      },
    },
    extend: {
      minHeight: {
        '125': '31.25rem'
      },
      maxWidth: {
        '200': '50rem',
      },
      minWidth: {
        '200': '50rem',
      },
      width: {
        '5.5/12': '48%',
      },
      transitionDuration: {
        '400': '400ms'
      },
      boxShadow: {
        default: '0 0 5px #949494',
      },
      borderWidth : {
        '3': '3px'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
