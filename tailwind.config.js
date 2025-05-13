import daisyui from "./node_modules/daisyui/src/index"
import light from "./node_modules/daisyui/src/theming/themes"
import dark from "./node_modules/daisyui/src/theming/themes"
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
    screens: {
      zero: '0px',
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": '1536px',
    },
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
        light: {
          ...light,
          "primary": "#69e89e",
          "primary-content": "#150801",
          "secondary": "#8fd6d6",
          "secondary-content": "#000d15",
          "accent": "#349d9d",
          "accent-content": "#0f1415",
          "neutral": "#D8DFDF",
          "neutral-content": "#d8dbde",
          "base-100": "#D8DFDF",
          "base-200": "#1b2121",
          "base-300": "#161b1b",
          "base-content": "#cdcfcf",
          "info": "#7ed4fc",
          "info-content": "#051016",
          "success": "#679C0D",
          "success-content": "#0d1403",
          "warning": "#B69802",
          "warning-content": "#161202",
          "error": "#BC1010",
          "error-content": "#140202",
        }
      },
      {
        dark: {
          ...dark,
          "primary": "#31ed9f",
          "primary-content": "#150801",
          "secondary": "#297070",
          "secondary-content": "#000d15",
          "accent": "#62cbcb",
          "accent-content": "#0f1415",
          "neutral": "#212828",
          "neutral-content": "#d8dbde",
          "base-100": "#212828",
          "base-200": "#1b2121",
          "base-300": "#161b1b",
          "base-content": "#cdcfcf",
          "info": "#7dd3fc",
          "info-content": "#051016",
          "success": "#bef264",
          "success-content": "#0d1403",
          "warning": "#fde047",
          "warning-content": "#161202",
          "error": "#ef4444",
          "error-content": "#140202",
        },
      }
    ],
  },
  plugins: [tailwindcss_animate, daisyui],
}