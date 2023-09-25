/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColr: "#FF444A",
        textColor: "#0B0B0B",
      },
      height: {
        banarHeight: "600px",
        cardPicHeight: "200px"
      },
      width: {
        customInput: "470px",
      },
      fontFamily: {
        customInter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light", // name of one of the included themes for dark mode
  },
};
