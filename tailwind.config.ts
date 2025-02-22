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
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
        },
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#F3F4F6',
        },
        text: {
          DEFAULT: '#1F2937',
          secondary: '#4B5563',
        },
        dark: {
          background: {
            DEFAULT: '#111827',
            secondary: '#1F2937',
          },
          text: {
            DEFAULT: '#F9FAFB',
            secondary: '#D1D5DB',
          }
        }
      },
    },
  },
  plugins: [],
}

export default config;
