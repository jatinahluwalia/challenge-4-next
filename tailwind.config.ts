import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", "[data-theme='dark']"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue-bg": "hsl(207, 26%, 17%)",
        "very-dark-blue-text": "hsl(200, 15%, 8%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        "light-gray": "hsl(0, 0%, 98%)",
      },
      fontSize: {
        "small-regular": [
          "14px",
          {
            fontWeight: "300",
          },
        ],
        "small-semibold": [
          "14px",
          {
            fontWeight: "600",
          },
        ],
        "small-bold": [
          "14px",
          {
            fontWeight: "800",
          },
        ],
        "secondary-regular": [
          "16px",
          {
            fontWeight: "300",
          },
        ],
        "secondary-semibold": [
          "16px",
          {
            fontWeight: "500",
          },
        ],
        "secondary-bold": [
          "16px",
          {
            fontWeight: "800",
          },
        ],
      },
      fontFamily: {
        primary: "Nunito Sans",
      },
    },
  },
  plugins: [],
};
export default config;
