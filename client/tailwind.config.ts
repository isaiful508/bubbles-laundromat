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
        navy: {
          50: "#eef2fb",
          100: "#d7e0f6",
          500: "#243d7a",
          600: "#1d3266",
          700: "#162751",
          800: "#112041",
          900: "#0b1531",
        },
        cyan: {
          400: "#7f9cff",
          500: "#5d83ff",
          600: "#4369e6",
        },
        foam: {
          50: "#f9fbff",
          100: "#edf3ff",
          200: "#dce7ff",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        "bubble-rise": "bubbleRise 4s ease-in infinite",
        "bubble-rise-2": "bubbleRise 5.5s ease-in 1.5s infinite",
        "bubble-rise-3": "bubbleRise 3.8s ease-in 0.8s infinite",
        "bubble-rise-4": "bubbleRise 6s ease-in 2.2s infinite",
        "bubble-rise-5": "bubbleRise 4.5s ease-in 3s infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "spin-slow": "spin 20s linear infinite",
        "wave": "wave 8s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "counter": "counter 2s ease-out forwards",
        "ripple": "ripple 1.5s ease-out infinite",
      },
      keyframes: {
        bubbleRise: {
          "0%": { transform: "translateY(100vh) scale(0.3)", opacity: "0" },
          "10%": { opacity: "0.6" },
          "80%": { opacity: "0.3" },
          "100%": { transform: "translateY(-100px) scale(1)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wave: {
          "0%, 100%": { transform: "scaleX(1) scaleY(1)" },
          "50%": { transform: "scaleX(1.05) scaleY(0.95)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        ripple: {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, hsla(200,100%,74%,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,0.1) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
