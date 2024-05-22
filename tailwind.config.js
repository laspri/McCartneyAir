/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black': '#111411',
      'white': "#FFFFFF",
      'grey': '#24242480'
    },
    fontFamily: {
      sans: ['Metropolis', 'sans-serif'],
      mono: ['Space Mono'],
    },
    extend: {},
  },
  plugins: [],
}

