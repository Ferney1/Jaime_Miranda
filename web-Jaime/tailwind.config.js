/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Menu:'#f77f00',
        Primario: '#0C2D62',
        Secudario: '#1F2937',
        Negro: '#1f2937',
        Gris: '#cbd5e1',
      }
    },
  },
  plugins: [],
}

