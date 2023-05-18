module.exports = {
  plugins: [require.resolve("@shopify/prettier-plugin-liquid")],
  overrides: [
    {
      files: "*.liquid",
      options: {
        parser: "liquid-html",
      },
    },
  ],
};
