/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      din: {
        light: ["din-light", "sans-serif"],
        regular: ["din-regular", "sans-serif"],
        bold: ["din-bold", "sans-serif"],
      },
    },
    extend: {},
    colors: {
      section: "#e7f6f3",
      primary: "#4ED1C1",
      primary_light: "#ccfbf1",
      primary_dark: "#2BAC9F",
      secondary: "#AF4DFA",
      secondary_light: "#A94BF1",
      secondary_dark: "#7A36AD",
      dark: "#021526",
      // dark: "#3C3C3C",
      // light: "#fafafa",
      light: "#fff",
      required: "red",
      red: "#b91c1c",
      red_light: "#fca5a5",
      red_dark: "#7f1d1d",
    },
  },
  plugins: [],
};
