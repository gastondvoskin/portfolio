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
        // nav
        'mybgnav': '#87CEFA', /* light blue */
        'mytextnav': 'black', /* white */
        'mybgnavd': '#87CEFA', /* light blue */
        'mytextnavd': 'black', /* white */

        // light
        'mybg1': '#ECECEC', /* light gray */
        'mybg2': '#D9D9D9', /* light gray */
        'mytext': 'black',  /* black */

        // dark
        'mybgd': '#13293D', /* deep blue */
        'mytextd': 'white', /* white */ 

        // acc
        'myacc': '#FF6F61', /* pink */

        

      },
    },
  },
  plugins: [],
}
