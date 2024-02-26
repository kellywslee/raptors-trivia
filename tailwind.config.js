/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      boxShadow: {
        special: "0 0 10px 10px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
