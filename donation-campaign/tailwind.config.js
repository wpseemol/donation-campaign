/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColr: "#FF444A",
        textColor: "#0B0B0B",
        singlePageBgClr: "rgba(11, 11, 11, 0.50)",
      },
      height: {
        banarHeight: "37.5rem",
        cardPicHeight: "12.5rem",
      },
      maxHeight: {
        singlePageImageHeight: "43.75rem",
      },
      width: {
        customInput: "29.375rem",
      },
      fontFamily: {
        customInter: ["Inter", "sans-serif"],
      },
      fontSize: {
        singlePgTitl: "2.5rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light", // name of one of the included themes for dark mode
  },
};
