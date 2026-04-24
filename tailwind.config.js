module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deepest: "#070F1C",
          dark: "#0B1929",
          mid: "#112240",
        },
        gold: {
          DEFAULT: "#C9963E",
          light: "#d5ac68",
        }
      }
    }
  },
  presets: [require("@relume_io/relume-tailwind")],
};
