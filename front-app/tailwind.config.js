/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      text: "#000000",
      background: "#ffffff",
      primary: "#8fb4ff",
      secondary: "#ebf1ff",
      tertiary: "#00132c",
      accent: "#ff8f94",
    },
  },
  plugins: [],
};
