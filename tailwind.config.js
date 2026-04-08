export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
      colors: {
        "warm-orange": "#EA580C",
        "wine-red": "#722C2C",
        "avocado-green": "#3D5323",
        // Dark Glassmorphism - Warm Accents
        "dark-bg": "#0f0f0f",
        "dark-surface": "#1a1a1a",
        // Burnt orange / warm gold for valluno warmth
        "burnt-orange": "#D96A29",
        "burnt-orange-light": "#E8854A",
        "warm-gold": "#E5A528",
        "warm-gold-light": "#F5C842",
      },
      backgroundImage: {
        "dark-gradient": "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(217, 106, 41, 0.3)" },
          "100%": { boxShadow: "0 0 20px rgba(217, 106, 41, 0.5)" },
        },
      },
    },
  },
  plugins: [],
};