/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#007bff",
        background: "#fafafa",
        gainsboro: {
          "100": "#e0e0e0",
          "200": "rgba(224, 224, 224, 0.09)",
          "300": "#e6e6e6",
        },
        "primary-2": "#ff6f00",
        orangered: "#e65700",
        white: "#fff",
        gray: {
          "100": "#1c1e1f",
          "200": "#1a1a1a",
          "300": "#141414",
          "400": "rgba(30, 40, 50, 0.5)",
          "500": "rgba(30, 30, 30, 0.8)",
        },
        darkslategray: {
          "100": "rgba(44, 62, 80, 0.5)",
          "200": "rgba(44, 62, 80, 0.8)",
        },
        secondary: "#2c3e50",
        black: "#2d2d2d",
        "grey-1": "#828282",
        "dropdown-demarcators": "#dde3f0",
        aliceblue: "#edf4ff",
        whitesmoke: {
          "100": "#f4f5f8",
          "200": "#ededed",
        },
        cornflowerblue: "#26a1ff",
        lightgray: "#d2d2d2",
        "color-grey-60": "#767676",
        dodgerblue: "#0a85ff",
        darkorange: "rgba(255, 140, 0, 0.8)",
        orange: "rgba(255, 157, 0, 0.8)",
      },
      spacing: {},
      fontFamily: {
        "avenir-next-cyr": "'Avenir Next Cyr'",
        gilroy: "Gilroy",
        inherit: "inherit",
      },
      borderRadius: {
        "101xl": "120px",
        "31xl": "50px",
        xl: "20px",
        "215xl": "234px",
        "sm-3": "13.3px",
        "13xl-6": "32.6px",
        mini: "15px",
        "lgi-3": "19.3px",
        "mid-1": "17.1px",
        "15xl-2": "34.2px",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      mini: "15px",
      mid: "17px",
      xl: "20px",
      base: "16px",
      "13xl": "32px",
      "7xl": "26px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
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