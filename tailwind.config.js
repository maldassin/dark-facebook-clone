/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "trueGray-900": "#18191A",
        "trueGray-800": "#242526",
        "trueGray-700": "#3A3B3C",
        "trueGray-500": "#797B7E",
        "trueGray-400": "#B0B3B8",
      },
      fontFamily: {
        "helvetica-neue": ["Helvetica Neue", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
