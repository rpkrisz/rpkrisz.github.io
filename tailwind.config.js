import daisyui from "./node_modules/daisyui/src/index"
import tailwindcss_animate from "./node_modules/tailwindcss-animate/index"
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './Components/**/*.{ts,tsx}',
    './@/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00a776",
          "primary-content": "#000a05",
          "secondary": "#00afff",
          "secondary-content": "#000b16",
          "accent": "#0096b5",
          "accent-content": "#00080c",
          "neutral": "#242424",
          "neutral-content": "#cecece",
          "base-100": "#e6fff3",
          "base-200": "#c8ded3",
          "base-300": "#abbeb4",
          "base-content": "#131614",
          "info": "#00bfff",
          "info-content": "#000d16",
          "success": "#6dbb00",
          "success-content": "#040d00",
          "warning": "#e18300",
          "warning-content": "#120600",
          "error": "#ff5486",
          "error-content": "#160206",
        },
      },
    ],
  },
  plugins: [tailwindcss_animate, daisyui],
}