/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        base: "18px",
      },
      colors: {
        "main-bg": "hsl(217, 54%, 11%)",
        "card-bg": "hsl(216, 50%, 16%)",
        line: "hsl(215, 32%, 27%)",
        "soft-blue": "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        overlay: "hsla(178, 100%, 50%, .5)",
      },
      fontWeight: {
        "outfit-300": "300",
        "outfit-400": "400",
        "outfit-600": "600",
      },
    },
  },
  plugins: [],
};
