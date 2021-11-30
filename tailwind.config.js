module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "hsl(25, 100%, 94%)",
          dark: "hsl(26, 100%, 55%)",
        },
        secondary: "#d5f0db",
        dark: "#131313",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      transitionProperty: {
        spacing: "margin, padding",
      },
    },
    zIndex: {
      100: 100,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
