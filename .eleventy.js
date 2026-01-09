export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/CNAME");

    return {
        dir: {
            input: "src",
            layouts: "_layouts",
            output: "docs",
        },
        clean: true
    };
};