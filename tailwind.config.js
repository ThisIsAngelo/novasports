/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        bitter: ["Bitter", "serif"],
      },
    },
    colors: {
      transparent: "transparent",
      black: "#060606",
      gray: {
        100: "#bdbcbc",
        200: "#3d3d3d",
        300: "#191919",
      },
      white: "#ffffff"
    },
  },
  plugins: [],
};
