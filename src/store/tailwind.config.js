/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4D72AF", // Your custom primary color
        lightBackground: "#F5F9FF", // Your custom light background color
      },
    },
  },
  plugins: [],
};