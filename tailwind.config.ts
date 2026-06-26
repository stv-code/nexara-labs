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
        ink: "#0F1923",
        panel: "#F0F4F8",
        panel2: "#E8EDF3",
        border: "#E2E8F0",
        amber: "#D97B29",
        amberDim: "#8A5420",
        signal: "#4F9D69",
        text: "#0F1923",
        muted: "#64748B",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
