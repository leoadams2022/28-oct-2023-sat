/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myBlue: { 100: "#8ecae6", 200: "#219ebc", 300: "#023047" },
        myGold: { 100: "#ffb703", 200: "#fb8500" },
      },
      flex: {
        full: "1 0 100%",
      },
    },
  },
  plugins: [],
  darkmode: "class",
};
