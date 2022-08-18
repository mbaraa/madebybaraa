/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
    extend: {
      fontFamily: {
        SFUI: ["SFUI", "sans-serif"],
      },
    },
  },
    plugins: [],
}
