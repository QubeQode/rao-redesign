/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#121212',
        'highlight': '#202020',
        'accent': '#D8392B',
      }
    },
  },
  plugins: [],
}

