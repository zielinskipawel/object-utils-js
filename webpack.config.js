const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
    context: path.join(__dirname, "src"),
    entry: { index: "./index.ts" },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: [/node_modules/, /__tests__/],
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "ts-loader",
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "public"),
        library: "objectHelper",
        libraryTarget: "umd",
        globalObject: "this",
        umdNamedDefine: true,
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
}
