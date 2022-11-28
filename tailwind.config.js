module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #B6CCF5 0.48%, #D5E3F1 100%)",
      },
      colors: {
        // "base-violet": "#6e57e0",
        // "base-black": "#242329",
        // "base-gray": "#6d6a7c",
        //"base-blue": "#0045f6",
        "base-gray": "#6d6a7c",
        // "base-blue": "#3399ff",
        "base-blue": "#78a3fa",
        black: "#06223F",
        bg_light_primary: "#F5F9FD",
        custom_gray: "#B7C5D3",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
