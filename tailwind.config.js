/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#23305F",
          light: "#2e3d7a",
          dark: "#1a2447",
          50: "#eef1f8",
          900: "#111827",
        },
        secondary: { DEFAULT: "#A4A4A1" },
        accent: { DEFAULT: "#056CA7" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
