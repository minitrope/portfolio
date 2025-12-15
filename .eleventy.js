export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("assets");
    return {
        dir: {
            output: "docs"
        },
        clean: true
    };
};