import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{mdx,md}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A0E1A",
          deep: "#05070D",
          panel: "#0D1220",
          border: "#1C2436",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8B84B",
          soft: "#F0CE7A",
        },
        blue: {
          accent: "#4A7FE8",
          soft: "#6B93E0",
        },
        ink: {
          DEFAULT: "#F5F5F0",
          muted: "#8A93A8",
          faint: "#5B6478",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #E8B84B 50%, #F0CE7A 100%)",
        "navy-radial": "radial-gradient(ellipse at top, #131A2C 0%, #0A0E1A 60%)",
        "blue-gold-glow": "radial-gradient(circle, rgba(74,127,232,0.25) 0%, rgba(212,175,55,0.15) 45%, transparent 70%)",
      },
      boxShadow: {
        "gold-glow": "0 0 40px -8px rgba(212,175,55,0.35)",
        "card-hover": "0 8px 40px -12px rgba(212,175,55,0.25)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
