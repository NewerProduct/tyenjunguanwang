import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'marquee-infinite': 'marquee 25s linear infinite',
        'marquee-infinite-reverse': 'marquee-reverse 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      colors: {
        background: "#ffffff",
        foreground: "#000000",
        geekBlue: "#2563EB",
        cyanGlow: "#06B6D4",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ]
};
export default config;
