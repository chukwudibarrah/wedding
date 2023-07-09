/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        windsong: ['WindSong', 'cursive'],
        merriweather: ['Merriweather', 'serif'],
      },
      colors: {
        "offWhite": "#F4F1DE",
        "gold": "#E07A5F",
        "purple": "#3D405B",
        "green": "#81B29A",
        "brown": "#F2CC8F"
      }
    },
  },
  plugins: [],
}

