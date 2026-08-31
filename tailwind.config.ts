import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F8F9FA",
        ink: "#141414",
        amber: "#E0A028",
        background: "#F8F9FA",
        foreground: "#141414",
        card: "#FFFFFF",
        secondary: "#F0F1F2",
        border: "rgb(20 20 20 / 10%)",
        muted: "#F0F1F2",
        "muted-foreground": "#6B7280",
      },
      borderRadius: {
        DEFAULT: "0",
        sm: "0",
        md: "0",
        lg: "0",
        xl: "0",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        sans: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};

export default config;
