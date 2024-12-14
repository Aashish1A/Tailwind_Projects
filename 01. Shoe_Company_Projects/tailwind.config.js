/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      "media560": "560px",
      "media": "1200px",
      "media": "440px"
    },
    backgroundImage: {
      "testimonial-section" : "url(./images/testimonial-section-background.png)"
    }
  },
  plugins: [
    plugin(function({ addVariant }){
      addVariant("open-menu", ".open-menu &")
    })
  ],
}

