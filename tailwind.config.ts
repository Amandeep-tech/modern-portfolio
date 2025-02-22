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
      animation: {
        'typing': 'typing 4s steps(5, end) forwards',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s linear infinite',
        'letter-wave': 'letter-wave 4s linear infinite',
        'border-running': 'border-running 2s linear infinite',
        'scale-bounce': 'scale-bounce 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0'
          },
          '25%': {
            width: '25%'
          },
          '50%': {
            width: '50%'
          },
          '75%': {
            width: '75%'
          },
          '100%': {
            width: '100%'
          }
        },
        'typing-cursor': {
          from: { borderRightColor: 'transparent' },
          to: { borderRightColor: 'currentColor' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'bounce-slow': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-10px)' },
        },
        'letter-wave': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'border-running': {
          '0%, 100%': { borderImage: 'linear-gradient(to right, #3b82f6 50%, #d1d5db 50%) 1' },
          '50%': { borderImage: 'linear-gradient(to right, #d1d5db 50%, #3b82f6 50%) 1' }
        },
        'scale-bounce': {
          '0%': { transform: 'scale(0.2)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1)' }
        }
      },

    },
  },
  plugins: [],
}

export default config;
