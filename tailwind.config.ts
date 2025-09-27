import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b1124f',
        accent: '#d3415a',
        cream: '#FAF7F3',
        ink: '#2A2A2A',
        muted: '#6F6B68'
      },
      borderRadius: {
        md: '12px',
        lg: '16px'
      },
      maxWidth: {
        screen: '1100px'
      },
      boxShadow: {
        card: '0 2px 10px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}

export default config

