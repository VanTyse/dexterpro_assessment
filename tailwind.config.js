/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dxp: {
          // dxp was used to seperate my custom themed colors from tailwinds colors
          grey: {
            1: "#FAFAFA",
            2: "#CFCCD6",
            3: "5B5B5B",
          },
          green: {
            1: "#3A5743",
          },
          yellow: {
            1: "#FFBA49",
          },
        },
      },
    },
  },
  plugins: [],
};
