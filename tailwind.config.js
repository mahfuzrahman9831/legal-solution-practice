/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          lightBrown:'#B68C5A',
          customPink: '#DB2777', /* Custom pink */
          customGray: {
            light: '#F3F4F6',
            DEFAULT: '#9CA3AF',
            dark: '#4B5563',
          }
      },
    },
    plugins: [],
  }
}