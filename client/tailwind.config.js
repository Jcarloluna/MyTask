/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        mainDarkBlue: "#222831",
        mainGray: "#393e46",
        mainLightBlue: "#00adb5",
        mainWhite: "#eeeeee",
        // ... add more custom colors as needed
      },
    },
  },
  plugins: [],
};
