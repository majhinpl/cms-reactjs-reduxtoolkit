/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Extend default styles
      flexDirection: {
        "row-reverse-odd": "row-reverse",
      },
    },
  },
  plugins: [],
};
