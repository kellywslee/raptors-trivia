/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
