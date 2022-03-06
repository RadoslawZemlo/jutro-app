module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        first: "#26c299",
        second: "#0a40a1",
        third: "#fabfba"
      },
      transitionDuration: {
        1500: "1500ms"
      },
      minWidth: {
        40: "40%"
      }
    }
  },
  plugins: []
};
