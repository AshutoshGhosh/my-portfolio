/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#06070b",
        surface: "#0d0f17",
        elevated: "#12141f",
        line: "rgba(255,255,255,0.08)",
        heading: "#e6e8ee",
        muted: "#8b93a7",
        accent: {
          DEFAULT: "#7c3aed",
          violet: "#7c3aed",
          fuchsia: "#db2777",
          cyan: "#22d3ee",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "sans-serif"],
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(135deg, #7c3aed 0%, #db2777 50%, #22d3ee 100%)",
        "orb-violet":
          "radial-gradient(circle at center, rgba(124,58,237,0.55) 0%, rgba(124,58,237,0) 70%)",
        "orb-fuchsia":
          "radial-gradient(circle at center, rgba(219,39,119,0.45) 0%, rgba(219,39,119,0) 70%)",
        "orb-cyan":
          "radial-gradient(circle at center, rgba(34,211,238,0.4) 0%, rgba(34,211,238,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(124,58,237,0.5)",
        "glow-fuchsia": "0 0 40px -10px rgba(219,39,119,0.5)",
        card: "0 20px 50px -20px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-22px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        aurora: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.1)" },
          "66%": { transform: "translate(-30px, 20px) scale(0.95)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        marquee: "marquee 30s linear infinite",
        aurora: "aurora 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
