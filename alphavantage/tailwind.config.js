/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
    backgroundImage:{
      'stocks': "url('/src/assets/stocks.jpg')"
    }


    },
  },
  plugins: [],
}

