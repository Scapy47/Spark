/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Orbitron: ["Orbitron", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        frame: "url(./assets/frame.svg)"
      }
    },
  },
  plugins: [],
}

