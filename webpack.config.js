const glob = require("glob");
const path = require("path");

const entryFiles = glob.sync("./build/**/*.js").concat(glob.sync("./build/*.js")).reduce((previousValue, currentValue, currentIndex, array) => {
    let result = typeof previousValue === "string" ?
        {
            [previousValue.replace(/^.\/build/, "").replace(/.js$/, "")]: previousValue,
            [currentValue.replace(/^.\/build/, "").replace(/.js$/, "")]: currentValue
        } : {
            ...previousValue,
            [currentValue.replace(/^.\/build/, "").replace(/.js$/, "")]: currentValue
        };
    return result;
});

console.log("entryFiles:", entryFiles);

/** @type {import("@types/webpack").WebpackOptionsNormalized} */
module.exports = {
    mode: "production",
    entry: entryFiles,
    resolve: {
        extensions: [".js"]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
};