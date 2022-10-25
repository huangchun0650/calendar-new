const defaultTheme = require('tailwindcss/defaultTheme');
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
  ],

  theme: {
    extend: {
      width: {
        'lessFullScren' : '98%'
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      }
    },
    gridTemplateColumns: {
      '16': 'repeat(16, minmax(0, 1fr))',
    },
    gridColumn: {
      'span-2': 'span 2 / span 16',
      'span-3': 'span 3 / span 16',
      'span-16': 'span 16 / span 16',
    },
    gridColumnEnd: {
      '13': '13',
      '14': '14',
      '15': '15',
      '16': '16',
      '17': '17',
    },
    container: {
      center: true,
    },
  },

  plugins: [],
})