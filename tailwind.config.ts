import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17201f",
        moss: "#4a6f5a",
        clay: "#c6694f",
        cream: "#f8f4ed",
        paper: "#fbfaf6",
        rust: "#9f513d",
        blue: "#345f78",
        line: "#e4ded3"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 32, 31, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
