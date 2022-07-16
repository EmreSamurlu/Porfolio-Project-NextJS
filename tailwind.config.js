module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      nero: "#141414",
      off_white: "#FDFDFD",
      red: "#952D23",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
