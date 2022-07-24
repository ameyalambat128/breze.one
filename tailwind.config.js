/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl":
          "inset 0 1px 1px 0 hsl(0deg 0% 100% / 10%), 0 50px 100px -20px rgb(50 50 93 / 30%), 0 30px 60px -30px rgb(0 0 0 / 35%)",
      },
    },
    fontFamily: {
      sans: "Inter",
    },
  },
  plugins: [],
};
