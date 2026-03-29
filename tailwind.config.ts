import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primeRed: "#E63946",
        primeGreen: "#2A9D8F",
        primeWhite: "#F8F9FA",
        primeDark: "#1D3557",
      },
    },
  },
  plugins: [],
} satisfies Config;
