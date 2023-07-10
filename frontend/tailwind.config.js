/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/img/main_bg.jpg')",
      },
    },
  },
  plugins: [],
};
