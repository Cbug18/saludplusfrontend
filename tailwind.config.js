/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1/4.5': '22.2222222%',
        '1/5.5': '18.1818182%', 
        '1/6.5': '15.30%',
      },
      colors: {
        customBlue: '#0071AB',
        customgray: '#009AFA',
        customgreen: '#b6cedb',
      }
    },
  },
  plugins: [],
}