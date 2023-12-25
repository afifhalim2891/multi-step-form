/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      },
      colors: {
        marineBlue: "hsl(213, 96%, 18%)",
        marineBlueLight: "hsl(213, 100%, 30%)",
        purplishBlue: "hsl(243, 100%, 62%)",
        pastelBlue: "hsl(228, 100%, 84%)",
        lightBlue: "hsl(206, 94%, 87%)",
        veryLightBlue: "hsl(206, 100%, 96%)",
        strawberryRed: "hsl(354, 84%, 57%)",
      },
    },
  },
  plugins: [],
};
