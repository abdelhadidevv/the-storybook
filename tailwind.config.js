/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#1DC9A0",
          200: "#12B28C",
          300: "#1DC9A014",
          400: "#1DC9A01F",
        },
        ghost: {
          100: "#FFFFFF14",
          200: "#FFFFFF1F",
          300: "#FFFFFF29",
        },
        gray: "#8E8E93",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};
