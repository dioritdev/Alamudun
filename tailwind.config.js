/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base_blue: "#005c9d",
        diff_blue: "#3f51b5",
        base_black: "#111",
        milk_color: "#dedede",
        black_text: "#313131",
        milk_gray: "#eeeeee",
        easy_blue: "#0083b7"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

