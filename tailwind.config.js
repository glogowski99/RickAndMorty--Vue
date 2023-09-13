/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  prefix: "t-",
  theme: {
    extend: {
      colors: {
        turq: "#00b0c8",
        yell: "#dceb51",
        "semi-green": "#3cb64a",
      },
    },
  },
  plugins: [],
};
