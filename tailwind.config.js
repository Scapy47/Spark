import daisyui from 'daisyui';

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
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "cyan",
          "secondary": "yellow",
          "accent": "red",
          "neutral": "#120905",
          "base-100": "#fff9ef",
          "info": "#0099c3",
          "success": "#00dba2",
          "warning": "#d3ab00",
          "error": "#ff5c8e",
        },
      },
    ]
  },
  plugins: [
    daisyui,
  ],
}
