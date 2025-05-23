/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      din: {
        light: ['din-light', 'sans-serif'],
        regular: ['din-regular', 'sans-serif'],
        bold: ['din-bold', 'sans-serif'],
      },
    },
    extend: {},
    colors: {
      section: '#eaf7f6',
      primary: '#4ED1C1',
      primary_light: '#ccfbf1',
      primary_dark: '#4ED9C9',
      primary_darkcontrast: '#10413C',
      secondary: '#AF4DFA',
      secondary_light: '#AF8CFA',
      secondary_dark: '#622B8B',
      // dark: "#021526",
      dark: 'rgb(6, 6, 57)',
      // navbar_dark: "#004",
      navbar_dark: '#004',
      // dark: "#3C3C3C",
      // light: "#fafafa",
      light: '#fff',
      required: 'red',
      red: '#b91c1c',
      red_light: '#fca5a5',
      red_dark: '#7f1d1d',
    },
  },
  plugins: [],
};
