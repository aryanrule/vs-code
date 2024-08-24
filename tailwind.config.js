/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "btn-blue" : "#0078D4",
      },
      screens:{
        'custom':'1000px',
      }
    },
  },
  plugins: [],
}