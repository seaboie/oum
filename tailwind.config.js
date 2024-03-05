/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'true-red': '#EC1D24',
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
