/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 2.2s cubic-bezier(.15,.41,.69,.94) infinite",
        arrowMovement: "arrow-movement 2s ease-in-out infinite",
      },
      keyframes: {
        scroll: {
          "0%": { opacity: "0" },
          "10%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(15px)", opacity: "0" },
        },
        arrowMovement: {
          "0%, 100%": { opacity: "0", top: "45%" },
          "70%": { opacity: "1", top: "50%" },
        },
      },
    },
  },
  plugins: [],
};
