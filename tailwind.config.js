/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-right': {
          "0%": {
            "-webkit-transform": "translateX(-500px);",
            transform: "translateX(-500px);"
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0);"
          },
        },
        'slide-left': {
          "0%": {
            "-webkit-transform": "translateX(500px);",
            transform: "translateX(500px);"
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0);"
          },
        },
        'slide-left-2': {
          "0%": {
            "-webkit-transform": "translateX(500px);",
            transform: "translateX(500px);"
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0);"
          },
        }
      },
      animation: {
        "slide-right": "slide-right 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.94) both;",
        "slide-left": "slide-left 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.94) both;",
        "slide-left-2": "slide-left-2 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.94) both;",
      }
    },
  },
  plugins: [],
}