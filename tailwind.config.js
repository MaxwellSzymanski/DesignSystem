/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./imports/ui/**/*.{js,jsx,ts,tsx}", "./client/*.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    variants: {
      extend: {
        display: ["group-hover"],
      },
    },
    extend: {
      fontFamily: {
        body: ["Poppins", ...defaultTheme.fontFamily.sans],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        display: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#F0F6FE",
          100: "#DDEAFC",
          200: "#C4DBFB",
          300: "#9CC5F8",
          400: "#6EA6F3",
          500: "#4A84EE",
          600: "#3267E3",
          700: "#2553D0",
          800: "#2344A9",
          900: "#233C85",
        },
      },
    },
  },
  plugins: [],
};
