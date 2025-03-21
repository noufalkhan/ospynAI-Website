/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-xl': 'inset 0 10px 15px -3px rgba(0, 0, 0, 0.0), inset 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['Figtree', 'sans-serif'], // Add Figtree as the default sans font
      },
    },
  },
  plugins: [],
};
