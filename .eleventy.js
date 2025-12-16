export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    return {
        dir: {
            input: "src",
            layouts: "_layouts",
            output: "docs",
        },
        clean: true
    };
};