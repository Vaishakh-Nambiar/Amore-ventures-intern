/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        yellow: "#ffc700",
        green: "#10a958",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        orange: "#ff7f41",
      },
      fontFamily: {
        pp: ["Poppins", "sans-serif"],
        rx: ["RX100", "sans-serif"],
        sp: ["Supreme", "sans-serif"],
        au: ["Author", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
