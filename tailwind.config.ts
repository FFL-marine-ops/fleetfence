import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'brand-blue': '#0071BC',
        'brand-teal': '#39D8D4',
        'brand-grey': '#A0A6A9',
        'brand-darkblue': '#0071BC',
        'brand-lightgrey': '#A0A6A9',
      },
    },
  },
  plugins: [],
} satisfies Config;
