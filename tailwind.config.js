/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './index.html',
    '*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // BOdega Brand Colors
        bodega: {
          light: "#F2F2F2",    // Light gray
          cream: "#EAE4D5",    // Warm beige/cream
          brown: "#B6B09F",    // Muted brown/taupe
          dark: "#000000",     // Black
        },
        // Update primary colors to match brand
        primary: {
          50: "#F2F2F2",
          100: "#EAE4D5",
          200: "#D5CDB8",
          300: "#C0B69B",
          400: "#B6B09F",
          500: "#9A9485",
          600: "#7E786B",
          700: "#625C51",
          800: "#464037",
          900: "#2A241D",
          DEFAULT: "#B6B09F",
          foreground: "#000000",
        },
        // Keep some accent colors but muted
        accent: {
          DEFAULT: "#B6B09F",
          foreground: "#000000",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#F2F2F2",
        foreground: "#000000",
        secondary: {
          DEFAULT: "#EAE4D5",
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#EAE4D5",
          foreground: "#B6B09F",
        },
        popover: {
          DEFAULT: "#F2F2F2",
          foreground: "#000000",
        },
        card: {
          DEFAULT: "#F2F2F2",
          foreground: "#000000",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(182, 176, 159, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(182, 176, 159, 0.8)" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
