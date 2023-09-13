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
        small: [
          "14px",
          {
            lineHeight: "140%",
          },
        ],
        normal: [
          "16px",
          {
            lineHeight: "140%",
          },
        ],
      },
      fontFamily: {
        primary: '"Nunito Sans"',
      },
      fontWeight: {
        regular: "300",
        semibold: "500",
        bold: "800",
      },
    },
  },
  plugins: [],
};
export default config;
