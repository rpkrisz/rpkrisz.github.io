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
  colors: {
    'text': '#e8f3f5',
    'background': '#040d0e',
    'primary': '#caf0f8',
    'secondary': '#118096',
    'accent': '#0dcef5',
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#caf0f8",
          "primary-content": "#e8f3f5",
          "secondary": "#118096",
          "secondary-content": "#f5f5f4",
          "accent": "#0dcef5",
          "accent-content": "#001316",
          "neutral": "#1a251d",
          "neutral-content": "#f3f4f6",
          "base-100": "#1f2937",
          "base-200": "#4b5563",
          "base-300": "#374151",
          "base-content": "#e5e7eb",
          "info": "#38bdf8",
          "info-content": "#000b16",
          "success": "#71ed47",
          "success-content": "#000b16",
          "warning": "#facc15",
          "warning-content": "#000b16",
          "error": "#ef4444",
          "error-content": "#000b16",
        },
      },
    ],
  },
  plugins: [tailwindcss_animate, daisyui],
}