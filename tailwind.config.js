/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#024f11",
        secondary: "#bb131a",
        neutral: "#e8edf2",
      },
    },
  },
  plugins: [],
};
// .location {
//   line-height: 40px;
//   font-weight: 500;
//   font-family: "Quicksand", sans-serif;
//   padding: 0;
//   font-size: 14px;
// }
// .iLocation {
//   margin-right: 7px;
//   font-size: 16px;
// }
