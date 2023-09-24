/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColr: "#FF444A",
      },
      height: {
        banarHeight: "600px",
      },
      fontFamily: {
        customInter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
