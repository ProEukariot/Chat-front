/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          main: "#8ABAD3FF",
          secondary: "#EDC2D8FF",
          light: "#FCF6F5FF",
        },
      },
    },
  },
  plugins: [],
};
