/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": "640px",
      // => @media (min-width: 640px)

      "md": "768px",
      // => @media (min-width: 768px)

      "lg": "1024px",
      // => @media (min-width: 1024px)

      "xl": "1280px",
      // => @media (min-width: 1280px)
      
      "2xl": "1536px"
      // => @media (min-width: 1536px)
    },
    extend: {
      fontFamily:{
        "Ubuntu": ['"Ubuntu"'],
        "body": ['"Ubuntu"']
      },
      backgroundImage:{
        "step-bg": "url(../src/assets/bg-sidebar-desktop.svg)",
      }
    },
    colors:{
      "background": "hsl(212, 57%, 55%)",
      "Marine-blue": "hsl(213, 96%, 18%)",
      "Purplish-blue": "hsl(243, 100%, 62%)",
      "Pastel-blue": "hsl(228, 100%, 84%)",
      "Light-blue": "hsl(206, 94%, 87%)",
      "paleBlue": "hsl(228, 39%, 58%)",
      "Strawberry-red": "hsl(354, 84%, 57%)",
      "Cool-gray": "hsl(231, 11%, 63%)",
      "Light-gray": "hsl(229, 24%, 87%)",
      "Magnolia": "hsl(217, 100%, 97%)",
      "Alabaster": "hsl(231, 100%, 99%)",
      "White": "hsl(0, 0%, 100%)",
      "black": "hsl(360, 100, 0)",
      "grey": "hsl(0, 0%, 93%)",
      "error-red": "#ffc9bb",
      // "background": "hsl(228, 100%, 84%)"
    }
  },
  plugins: [],
}