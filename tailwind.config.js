/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "helvetica-bold": ['Helvetica Bold'],
        "helvetica-medium": ['Helvetica Medium'],
        "helvetica-roman": ['Helvetica Roman'],
        "november": ["NovemberGeLC Regular"],
        "november-bold": ["NovemberGeLC Bold"]
      }
    },
  },
  plugins: [],
}

