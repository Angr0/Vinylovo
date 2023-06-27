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
      "primary-button": "#8fb4ff",
      "secondary-button": "#ebf1ff",
      accent: "#ff8f94",
    },
  },
  plugins: [],
};
