/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mybg-one': '#13293D',
        'mybg-two': '#3D6F9A',
        'myacc-one': '#FF6F61',
        'myacc-two': '#00CED1',
        'mytext': '#FFFFFF'
      },
    },
  },
  plugins: [],
}

