/** @type {import('tailwindcss').Config} */
// export const purge = [];
// export const darkMode = false;
// export const theme = {
//   extend: {},
// };
// export const variants = {
//   extend: {},
// };
// export const plugins = [];

module.exports = {
  mode: 'jit',
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      color: {
        /*coloca aqui as cores costumizadas do projeto pra ficar mais facil de mexer */
      }
    },
  },
  plugins: [],
};
