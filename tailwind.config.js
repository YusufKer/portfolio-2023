/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#cb812d',
        'secondary':'#272323'
      },
      fontSize: {
        "body":['16px','1.5'],
        "heading-1":["48px","1.2"]
      }
    },
  },
  plugins: [],
}
