/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#55C3B9",
      primary_light: "#ccfbf1",
      primary_dark: "#2BAC9F",
      secondary: "#622A77",
      secondary_light: "#985DA0",
      secondary_dark: "#392352",
      dark: "#021526",
      light: "#fafafa",
      required: "red",
      red: "#b91c1c",
      red_light: "#fca5a5",
      red_dark: "#7f1d1d",
    },
  },
  plugins: [],
};
