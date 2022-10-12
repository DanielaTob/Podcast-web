/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'bluedark': '#2C426B',
        'bluelight': '#3AA1D6',
        'green': '#8BD96E',
        'yellow': '#FFECA1',
        'dark': '#323232',
      },
      fontFamily: {
        'capriola': ['Capriola'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/bg1.png')",
        'hero-school': "url('assets/school2.jpg')"
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin')
  ],
}
