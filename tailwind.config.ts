import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          light: "#60a5fa80",
          dark: "#1e40af90",
        },
        background: {
          DEFAULT: "#f8fafc",
          card: "#f1f5f9",
        },
        text: {
          DEFAULT: "#334155",
          light: "#64748b",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
