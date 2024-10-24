/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#021526',
        'primary': '#03346E',
        'secondary': '#6EACDA',
        'light': '#E2F1E7',
    },
    },
  },
  plugins: [],
};


