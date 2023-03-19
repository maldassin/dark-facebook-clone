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
        "trueGray-400": "#a2a5aa",
        "trueGray-300": "#b0b3b8",
        "coolGray-400": "#9ca7a1",
        "coolGray-300": "#dadce1",
        "coolGray-200": "#e4e6eb",
        "blue-500": "#2374e1",
        "blue-400": "#2e89ff",
      },
      fontFamily: {
        "helvetica-neue": ["Helvetica Neue", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};