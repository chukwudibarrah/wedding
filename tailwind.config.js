/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hands: "url('/images/hands.jpg')",
      },
      fontFamily: {
        windsong: ["Windsong", "cursive"],
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        offWhite: "#F4F1DE",
        gold: "#E07A5F",
        purple: "#3D405B",
        green: "#81B29A",
        brown: "#F2CC8F",
      },
    },
  },
  plugins: [],
};
