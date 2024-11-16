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
        wave: "wave 2s infinite ease-in-out",
      },
    },
    screens: {
      xxs: "375px", // Tiny devices (e.g., iPhone SE)
      xs: "480px", // Extra small devices (e.g., small smartphones)
      sm: "640px", // Small devices (e.g., standard smartphones)
      md: "768px", // Medium devices (e.g., tablets)
      lg: "1024px", // Large devices (e.g., laptops)
      xl: "1280px", // Extra large devices (e.g., desktops)
      "2xl": "1536px", // Ultra-wide screens
    },
  },
  plugins: [],
};

export default config;
