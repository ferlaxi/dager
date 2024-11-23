/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {

      },
      fontFamily: {
        "sans" : "'Space Mono', monospace"
      },
      colors: {
        "l-dev-blue": "#0079FF",
        "l-dev-gray": "#697C9A",
        "l-dev-semiblue": "#4B6A9B",
        "l-dev-semidark": "#2B3442",
        "l-dev-semiwhite": "#F6F8FF",
        "l-dev-white": "#FEFEFE",
        "l-dev-hover": "#60ABFF",
        "l-dev-error": "#F74646",
        "l-dev-dark" : "#141D2F",
        "l-dev-dark1" : "#1E2A47",
        'current1': '#697C9A',
        'current2': '#F6F8FF',
        'current3' : "#4b6a9b",
        'AGA-green' : 'hsl(150, 100%, 66%)',
        'AGA-light' : 'hsl(193, 38%, 86%)',
      },
      animation: {
        spin : 'spin 4s linear infinite'
      }
    },
    
  variants: {
    fill: ['hover', 'focus'],
  }  
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  darkMode: 'class',
}

