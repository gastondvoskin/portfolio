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
        'mybg': '#f2f2f2', /* light gray */
        'mytext': 'black',  /* black */
        'myacc': '#13293D', /* deep blue */

        // dark
        'mybgd': '#13293D', /* deep blue */
        'mytextd': 'white', /* white */ 
        'myaccd': '#f2f2f2', /* light gray */
        // 'myaccd1': '#FF6F61', /* pink */
      },
    },
  },
  plugins: [],
}
