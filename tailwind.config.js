/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#e6e6e6",
        "secondary-color": "#333",
        "third-color": "teal",
        "fourth-color": "#666",
        "fifth-color": "coral",
      },
      screens: {
        "xs-375": "375px",
        "xs-414": "414px",
        "xs-390": "390px",
        "xs-430": "430px",
        "xs-412": "412px",
        "xs-360": "360px",
        "xs-540": "540px",
        "xs-344": "344px",
        "xs-2880": "2880px",
      },
    },
  },
  plugins: [],
};
