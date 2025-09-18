import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains)"],
      },
      colors: {
        primary: "#6366f1",
        secondary: "#8b5cf6",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg,#6366f1, #8b5cf6)",
      },
      boxShadow: {
        glass: "0 8px 40px rgba(0,0,0,.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
