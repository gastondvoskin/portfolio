/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // light
        'mybg1': '#ECECEC', /* light gray */
        'mybg2': '#D9D9D9', /* light gray */
        'mytext': 'black',  /* black */

        // dark
        /* 'mybg1d': '#13293D', */ /* deep blue */
        'mybg1d': '#162C41', /* deep blue */

        'mybg2d': '#1F3E5A', /* deep blue lighter*/
        'mytextd': 'white', /* white */ 

        // acc
        'myacc': '#8B00FF', /* pink */
        'myaccd': '#FF6F61' /* purple */
      },
    },
  },
  plugins: [],
}



/* 
font-size: 
section title: 6xl
p text: xl
*/