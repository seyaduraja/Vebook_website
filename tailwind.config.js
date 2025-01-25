/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BookingButton: 'rgba(0, 79, 255, 0.8)',
      },
    },
  },
  plugins: [],
};