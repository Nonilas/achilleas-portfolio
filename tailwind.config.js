/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Add this line for your dark mode toggle
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './app/**/*.{js,ts,jsx,tsx}',
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./github/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
}