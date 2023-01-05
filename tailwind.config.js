/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'footer': 'repeat(12,1fr)',
      },
      gridTemplateRows: {
        'footer': 'repeat(7, 40px)',
      }
    },
  },
  plugins: [require("daisyui")],
}
