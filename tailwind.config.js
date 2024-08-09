/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./hayaland.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SFProJP", "sans-serif"], // Custom font family
      },
      screens: {
        xs: "400px", // Custom breakpoint for extra small screens
        sm: "640px", // Default small screens
        md: "768px", // Default medium screens
        "drmiyana": "854px",
        "custom": "880px",
        "mobileCustom": "500px",
        "footerCustom":"1113px",
        "footerCustom2":"953px",
        "footerCustom3":"882px",
        "textCustom":"1148px",
        "fullSmall":"450px",
        "textSmall":"380px",
        "textBig":"1098px",
        lg: "1024px", // Default large screens
        xl: "1280px", // Default extra large screens
        "2xl": "1536px", // Default 2x extra large screens
        "3xl": "1800px", // Custom breakpoint for extra extra large screens
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "@font-face": [
          {
            fontFamily: "SFProJP",
            src: 'url(/public/SFProJP_regular.woff) format("woff")',
            fontWeight: "normal",
            fontStyle: "normal",
          },
        ],
      });
    },
  ],
};
