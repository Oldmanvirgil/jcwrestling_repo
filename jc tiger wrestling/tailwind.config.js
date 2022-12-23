/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
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

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        hallbg: "url('/../images/Hall of fame background no title.jpg')",
        hallBgTop: "url('/../images/hall of fame background top.png')",
        bryerBg: "url('/../images/bryerBg.png')",
        evanBg: "url('/../images/evanBg.png')",
        camBg: "url('/../images/camBg.png')",
        bigBg: "url('/../images/background image big.jpg')",
      },
      colors: {
        bordeaux: {
          50: "#f7f3f4",
          100: "#efe7e9",
          200: "#d6c2c7",
          300: "#be9da5",
          400: "#8d5462",
          500: "#5c0a1f",
          600: "#53091c",
          700: "#450817",
          800: "#370613",
          900: "#2d050f",
        },
        saffron: {
          50: "#fffcf5",
          100: "#fff9eb",
          200: "#fff0ce",
          300: "#fee7b0",
          400: "#fed675",
          500: "#fdc43a",
          600: "#e4b034",
          700: "#be932c",
          800: "#987623",
          900: "#7c601c",
        },
      },
    },
  },
  plugins: [],
};
