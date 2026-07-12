/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#ffffff',
        card: '#1a1a1a',
        secondary: '#0a0a0a',
        border: '#333333',
        muted: '#404040',
        'muted-foreground': '#a0a0a0',
        accent: '#ff3000',
      },
    },
  },
  plugins: [],
}
