/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'max-orange': '#FF7C00',
        'mid-yellow': '#F99333',
        'max-grey': '#F1EDDD',
        'max-brown': '#6B3D24',
        'max-white': '#FFFFFF',
        'mid-cream': '#F7E9B2'
      },
    },
  },
  plugins: [],
}