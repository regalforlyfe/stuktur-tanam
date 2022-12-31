/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gold-primary": "#efd99d",
        "gold-secondary": "#BBAB7F",
        "green-primary": "#2b534e",
        "green-secondary": "#5d7d73",
        "green-tertiary": "#A3B3AC",
        "green-white": "#ebede3",
        gray: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
