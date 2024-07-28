/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: {
        DEFAULT: "#101010",
      },
      offwhite: {
        DEFAULT: "#F2EDEB",
      },
      white: {
        DEFAULT: "#FFF",
      },
      grey: {
        DEFAULT: "#8D8D8D",
      },
      gold: {
        DEFAULT: "#C1911B",
      },
      green: {
        DEFAULT: "#3A6F3F",
      },
      pink: {
        DEFAULT: "#D8948B",
      },
      teal: {
        DEFAULT: "#01777A",
      },
      red: {
        DEFAULT: "#D34B4F",
      },
      blue: {
        DEFAULT: "#2F3A4C",
      },
      primary: {
        DEFAULT: "#FFF6E0",
      },
      popover: {
        DEFAULT: "#000000",
      },
      popoverInverse: {
        DEFAULT: "#eeeeee",
      }
    },
  },
  plugins: [],
};
