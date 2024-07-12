/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#35d5c4",
      primary_light: "#ccfbf1",
      primary_dark: "#2BAC9F",
      secondary: "#56347c",
      secondary_light: "#975CDA",
      secondary_dark: "#392352",
      dark: "#0e0e0e",
      light: "#fafafa",
      required: "red",
    },
  },
  plugins: [],
};
