import browserslist from "browserslist";
import { bundle, browserslistToTargets } from "lightningcss";
import { DateTime } from "luxon";
import path from "node:path";

export default function (eleventyConfig) {
  eleventyConfig.addTemplateFormats("css");

  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",

    compile: function (_inputContent, inputPath) {
      const parsed = path.parse(inputPath);
      if (parsed.name.startsWith("_")) {
        return;
      }

      const targets = browserslistToTargets(
        browserslist("> 0.2% and not dead"),
      );

      return () => {
        const { code } = bundle({
          filename: inputPath,
          minify: true,
          sourceMap: false,
          targets,
        });

        return code;
      };
    },

    compileOptions: {
      permalink: function (contents, inputPath) {
        const parsed = path.parse(inputPath);
        if (parsed.name.startsWith("_")) {
          return false;
        }
      },
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
}
