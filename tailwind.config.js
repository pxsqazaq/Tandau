/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'], // Adding Manrope font to the theme
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            fontFamily: 'Manrope, sans-serif', // Set Manrope font to typography plugin
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
