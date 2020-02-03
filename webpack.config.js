const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: "./src/index.tsx",
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js"
    },
    module: {
        rules: [{ test: /\.tsx?$/, use: ["babel-loader"], exclude: [/node_modules/] }]
    },
    plugins: [new ForkTsCheckerWebpackPlugin()]
};
