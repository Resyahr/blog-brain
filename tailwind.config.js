/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7D41E1",
        secondary: "#36E358",
        accent: "#D67940",
        divider: "#E9E9E9",
      },
      backgroundImage: {
        "hero-tilt": "url('./src/assets/hero-tilt.svg')",
      },
      fontFamily: {
        manrope: ["font-family: 'Manrope', sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
