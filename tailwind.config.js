/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:"1rem",
      },
      colors:{
        primary: "#FF881B",
        gray:"#7C8DB0",
        paragraph: "#333333",
        pink:"#FFF9E7",
      }
    },
  },
  plugins: [],
}