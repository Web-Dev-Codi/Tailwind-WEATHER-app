/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#e8e6e3',
      },
      gridTemplateColumns: {
        'footer': 'repeat(12,1fr)',
      },
      gridTemplateRows: {
        'footer': 'repeat(7, 40px)',
      }
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
}
