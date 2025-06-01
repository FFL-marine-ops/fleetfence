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
        'brand-darkblue': '#1a237e',
        'brand-lightgrey': '#ddedf2',
        'brand-teal': '#67d4d6',
        'brand-tealshade': '#4aa6ca',
        'brand-blueshade': '#3581bc',
      },
    },
  },
  plugins: [],
} satisfies Config;
