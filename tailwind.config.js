/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3FA1C0",
        sub: "#C05E3F",
      },
      fontFamily: {
        gudea: ["Gudea", "sans-serif"],
      },
    },
  },
  plugins: [],
};
