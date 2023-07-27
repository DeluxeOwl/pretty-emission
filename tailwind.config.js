const plugin = require("tailwindcss/plugin");

const fontTypes = [
  "Black",
  "BlackItalic",
  "Bold",
  "BoldItalic",
  "Italic",
  "Light",
  "LightItalic",
  "Medium",
  "MediumItalic",
  "Regular",
];
const fonts = fontTypes.reduce((acc, fontVariant) => {
  return {
    ...acc,
    [`.font-satoshi-${fontVariant.toLowerCase()}`]: {
      fontFamily: `Satoshi${fontVariant}`,
    },
  };
}, {});

/** @type {import('twrnc').Config} */
module.exports = {
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(fonts);
    }),
  ],
};
