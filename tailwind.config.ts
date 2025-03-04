import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030305",
        primary: "#00F2FF",
        secondary: "#00FFB2",
        accent: "rgba(0, 242, 255, 0.15)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'data-stream': 'dataStream 15s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'circuit-pattern': `
          linear-gradient(to right, rgba(0, 242, 255, 0.02) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 242, 255, 0.02) 1px, transparent 1px)
        `,
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 242, 255, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
