/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: "#7A191E",
          "maroon-dark": "#591115",
          "maroon-hover": "#8F2026",
          cream: "#FAF6F0",
          ivory: "#F3ECE1",
          warm: "#FCFAF6",
          peach: "#EAD5C7",
          "peach-dark": "#DEC1AF",
          terracotta: "#C8785E",
          charcoal: "#231F20",
          muted: "#786F66"
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -1px rgba(122, 25, 30, 0.06), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'warm-md': '0 6px 16px -2px rgba(122, 25, 30, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'warm-lg': '0 12px 28px -4px rgba(122, 25, 30, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
