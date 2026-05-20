/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '68.75': '68.75rem',
      },
      height: {
        '189.75': '189.75rem',
        '15': '3.75rem',
      },
      padding: {
        '7.5': '1.875rem',
        '15': '3.75rem',
      },
    },
  },
  plugins: [],
}
