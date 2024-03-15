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
            3: "#5B5B5B",
            4: "#34252F",
            5: "#EFEFEF",
            6: "#6A6B6D",
            7: "#8D9091",
            8: "#808080",
            9: "#4C4C4C",
            10: "#E6E6E6",
          },
          green: {
            1: "#3A5743",
            2: "#CCE1BF",
            3: "#276E59",
            4: "#8BB174",
          },
          yellow: {
            1: "#FFBA49",
            2: "#F7B32B",
            3: "#EBA53B",
          },
          blue: {
            1: "#1B264F",
          },
          red: {
            1: "#C1292E",
          },
        },
      },

      borderRadius: {
        lgx: "10px",
      },
      boxShadow: {
        "dashboard-card": "0px 7px 20px -6px rgba(58, 87, 67, 0.11)",
      },
    },
  },
  plugins: [],
};
