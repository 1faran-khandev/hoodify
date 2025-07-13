/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0D0D0D",
          white: "#FAFAFA",
          gray: "#1F2937",
          neon: "#39FF14",
          red: "#EF4444",
        },
        primary: "#0D0D0D",
        secondary: "#FAFAFA",
        accent: "#39FF14",
        danger: "#EF4444",
      },
      fontFamily: {
        sans: ['"Oswald"', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
