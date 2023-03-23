/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
],
  theme: {
    extend: {
      spacing: {
        '13':'3.25rem'
      },
      borderSpacing: {
        '13': '3.25rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },

    },
    container: {
      center: true,
    },

  },
};
