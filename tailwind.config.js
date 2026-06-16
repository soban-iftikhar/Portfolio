/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        bg: "#07070d",
        surface: "#0d0d14",
        card: "#12121a",
        border: "#1c1c2a",
        accent: "#7c6af7",
        accent2: "#a78bfa",
        subtle: "#1a1a28",
        text: "#e2e2ee",
        muted: "#64647e",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
