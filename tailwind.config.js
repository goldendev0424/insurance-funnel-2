const plugin = require('tailwindcss/plugin')

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
  },
  
  // plugins: [require('@tailwindcss/forms')],
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        '*': {
          fontFamily: 'montserrat',
          fontSize: '16px',
          boxSizing: 'border-box',
        }
      })
    })
  ]
}
