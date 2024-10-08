import type { Config } from 'tailwindcss'

export default {
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
        '105': '34.65rem'
      }
    },
  },
  plugins: [],
} satisfies Config