const { transform } = require("lightningcss");

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("cssmin", function (code) {
    const { code: css } = transform({
      code: Buffer.from(code),
      minify: true,
      sourceMap: false,
    });
    return css;
  });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
