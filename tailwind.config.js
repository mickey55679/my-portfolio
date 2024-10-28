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
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem", // example for 40px
        "6xl": "4rem",
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
    screens: {
      xxs: "375px",
      xs: "480px", // Extra small devices
      sm: "640px", // Small devices
      md: "768px", // Medium devices
      lg: "1024px", // Large devices
      xl: "1280px", // Extra large devices
      "2xl": "1536px", // 2XL devices
    },
  },
  plugins: [],
};

export default config;
