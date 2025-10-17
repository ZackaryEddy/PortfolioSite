import type { Config } from 'tailwindcss';

const config: Config = {
  // Define content paths for Tailwind to scan for class usage
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  // Enable class-based dark mode (toggle via 'dark' class on html element)
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // Custom coral color palette based on #FF6B6B
        // Provides 10 shades from very light (50) to very dark (900)
        coral: {
          50: '#fff5f5', // Very light coral for backgrounds
          100: '#ffe3e3', // Light coral for section backgrounds
          200: '#ffcccc', // Lighter coral for subtle accents
          300: '#ffaaaa', // Medium-light coral for borders/dividers
          400: '#ff8888', // Medium coral for hover states
          500: '#ff6b6b', // Main coral color (user specified)
          600: '#ff4444', // Medium-dark coral for active states
          700: '#ee2222', // Dark coral for text/emphasis
          800: '#cc1111', // Darker coral for strong contrast
          900: '#aa0000', // Very dark coral for maximum contrast
        },
      },
      fontFamily: {
        // Custom font family setup using CSS variables from Next.js font loading
        sans: ['var(--font-geist-sans)'], // Modern sans-serif font
        mono: ['var(--font-geist-mono)'], // Monospace font for code
      },
    },
  },
  plugins: [],
};

export default config;
