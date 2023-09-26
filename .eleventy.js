const { bundle } = require("lightningcss");
const path = require("node:path");

module.exports = (eleventyConfig) => {
  eleventyConfig.addTemplateFormats("css");

  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",

    compile: function (_inputContent, inputPath) {
      const parsed = path.parse(inputPath);
      if (parsed.name.startsWith("_")) {
        return;
      }

      return () => {
        const { code } = bundle({
          filename: inputPath,
          minify: true,
          sourceMap: false,
        });

        return code;
      };
    },
  });

  eleventyConfig.addPassthroughCopy("src/public/");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
