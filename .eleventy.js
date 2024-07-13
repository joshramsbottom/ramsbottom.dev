const { bundle } = require("lightningcss");
const { DateTime } = require("luxon");
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
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "/robots.txt" });

  eleventyConfig.addFilter("readableDate", function (date) {
    return DateTime.fromJSDate(date).toFormat("d LLLL y");
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
