import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '46': '11.55rem',
        '81': '20.5rem',
        '90': '23.1rem',
        '98': '28rem',
        '100': '30rem',
        '105': '34.65rem'
      }
    },
  },
  plugins: [],
} satisfies Config