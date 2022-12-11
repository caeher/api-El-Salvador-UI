/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/*.vue',
    './components/**/*.vue',
    './layouts/*.vue',
    './pages/*.vue',
    './pages/**/*.vue',
    '*.vue',
    './utils/sweetalert.ts'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
