/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondaryGreen: "#a5d961",
        thirdGreen: "#c1ff72",
        tertiary: "#669999",
        blue: "#22313f",
        pink: "#FFC0CB",
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        wave: {
          "0%, 60%, 100%": { transform: "rotate(0deg)" },
          "10%, 30%": { transform: "rotate(14deg)" },
          "20%, 40%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        wave: "wave 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
