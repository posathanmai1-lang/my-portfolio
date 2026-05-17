/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#050816",
        darkLighter: "#0B1120",
        primaryGlow: "#7C3AED",
        blueGlow: "#38BDF8",
        accentPurple: "#A855F7",
        whiteText: "#F8FAFC",
        mutedText: "#94A3B8",
      },
    },
  },
  plugins: [],
};