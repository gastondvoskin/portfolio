/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    /* fontFamily: {
      sans: [
        "Inter var, sans-serif",
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    }, */
    extend: {
      colors: {
        // light
        'mybg1': '#ECECEC', /* light gray */
        'mybg2': '#D9D9D9', /* light gray */
        'mytext': 'black',  /* black */
        'myacc': '#6366f1', /* indigo-500 */
        
        // dark
        'mybg1d': '#162C41', /* deep blue */
        'mybg2d': '#1F3E5A', /* deep blue lighter*/
        'mytextd': 'white', /* white */ 
        'myaccd': '#6366f1' /* indigo-500 */
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