/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary-100": "#FFFFFF",
        "primary-200": "#F8F8F8",
        "primary-500": "#757575",
        "primary-300": "#F3F3F3",
        "primary-400": "#E6E6E6",
        "hover-600": "#9F49CA",
        "overlay-30": "rgba(0,0,0,0.5)"
      },
      colors: {
        "primary-100": "#FFFFFF",
        "primary-200": "#F8F8F8",
        "primary-500": "#757575",
        "primary-300": "#F2F2F2",
        "primary-400": "#E6E6E6",
        "hover-600": "#9F49CA"
      },
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
        },
        'scale-up-center': {
          "0%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0);"
          },
          "100%": {
            "-webkit-transform": "translateX(1);",
            transform: "translateX(1);"
          },
        },
        'scale-up-image': {
          "0%": {
            "-webkit-transform": "scale(1);",
            transform: "scale(1);"
          },
          "100%": {
            "-webkit-transform": "scale(1.2);",
            transform: "scale(1.2);"
          }
        },
        'scale-down-image': {
          "0%": {
            "-webkit-transform": "scale(1.2);",
            transform: "scale(1.2);"
          },
          "100%": {
            "-webkit-transform": "scale(1);",
            transform: "scale(1);"
          },
        }
      },
      animation: {
        "slide-right": "slide-right 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.94) both;",
        "slide-left": "slide-left 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.94) both;",
        "slide-left-2": "slide-left-2 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.94) both;",
        "scale-up-center": "scale-up-center 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.94) both;",
        "scale-up-image": "scale-up-image 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.94) both;",
        "scale-down-image": "scale-down-image 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.94) both;",
      },
      flex: {
        '3': '3 3 0%',
        '4': '4 4 0%',
        '6': '6 6 0%',
        '7': '7 7 0%',

      }
    },
    screens: {
      "1400": "1400px",
    }
  },
  plugins: [],
}