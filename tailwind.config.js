module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans': ['DM Sans', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        hero: "linear-gradient(180deg, #f0f4f8 0%, #ffffff 100%)",
      },
      colors: {
        black: "#0f0f0f",
        white: "#ffffff",
        gray: {
          light: "#f5f5f5",
          DEFAULT: "#d4d4d4",
          // dark: "#7c7c7c",
          dark: "#4b5563", 
        },
        primary: "#111827",
        secondary: "#6b7280",
        accent: "#14b8a6",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
