// tailwind.config.js
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgb(17 61 129)',
        'custom-grey': 'rgb(156 163 175 / 29%)' // Cor personalizada
      },
      fontFamily: {
        Orbitron: ['Orbitron', 'sans-serif'],
        gemunu: ['"Gemunu Libre"', 'serif'],
        revalia: ['"Revalia"', 'serif'],
        audiowide: ['"Audiowide"', 'serif'],
        stalinist: ['"Stalinist One"', 'serif'],
        rubik: ['"Rubik Mono One"', 'serif'],
      },
    },
  },
  plugins: [],
}
