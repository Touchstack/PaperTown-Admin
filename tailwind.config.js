/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Bold: ["Dosis-Bold", "sans-serif"],
        ExtraBold: ["Dosis-ExtraBold", "sans-serif"],
        ExtraLight: ["Dosis-ExtraLight", "sans-serif"],
        Light: ["Dosis-Light", "sans-serif", "Varela-Regular"],
        Medium: ["Dosis-Medium", "sans-serif"],
        Regular: ["Dosis-Regular", "sans-serif"],
        SemiBold: ["Dosis-SemiBold", "sans-serif"],
      },
      backgroundColor: {
        "white-transparent": "rgba(255, 255, 255, 0.40)",
        "custom-gradient":"linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
        "custom-prm": "var(--prm-1003, #B44DB8)",
      },
      boxShadow: {
        custom: "0px 7px 80px 0px rgba(105, 23, 109, 0.30)",
        shadow: "0px 10px 40px 0px #DFBCDF",
      },
      backdropBlur: {
        custom: "10px",
      },
    },
    width: {
      150: "150px",
      190: "190px",
      225: "225px",
      275: "275px",
      300: "300px",
      340: "340px",
      350: "350px",
      375: "375px",
      460: "460px",
      656: "656px",
      880: "880px",
      508: "508px",
    },
    height: {
      80: "80px",
      150: "150px",
      225: "225px",
      300: "300px",
      340: "340px",
      370: "370px",
      420: "420px",
      510: "510px",
      600: "600px",
      650: "650px",
      685: "685px",
      800: "800px",
      "90vh": "90vh",
    },
    minWidth: {
      210: "210px",
      350: "350px",
      620: "620px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1800px",
      "2xl": "2024px",
    },
  },
};

