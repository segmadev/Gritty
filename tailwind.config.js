/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        royalblue: "#007bff",
        background: "#fafafa",
        gainsboro: {
          "100": "#e0e0e0",
          "200": "rgba(224, 224, 224, 0.09)",
        },
        darkorange: "#ff6f00",
        orangered: "#e65700",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        "avenir-next-cyr": "'Avenir Next Cyr'",
      },
      borderRadius: {
        "101xl": "120px",
        "31xl": "50px",
      },
    },
    fontSize: {
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
