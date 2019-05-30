const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
    entry: {
        "index": './src/index.js',
        "help/help": './src/help/help.js'
    },
    output: {
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            chunks: ["index"] 
        }),
        new HtmlWebpackPlugin({
            filename: "help/help.html",
            chunks: ["help/help"]
        }),
    ],

})