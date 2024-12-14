/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "Inter": ["Inter", "sans-serif"],
        "Poppins": ["Poppins", "sans-serif"]
      },
      colors: {
        "primary": "#3238f2",
      }
    },
  },
  plugins: [],
}

