/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'selector',
  theme: {
   fontFamily: {
    'body': ['"Montserrat"', 'sans-serif']
   },
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
     colors: {
      primary: '#DC5F00',
      secondary: '#686D76',
      dark: '#373A40',
     }
    },
  },
  plugins: [],
}

