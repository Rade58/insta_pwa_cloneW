const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
    return {
        devtool: "source-map",
        output: {
            filename: 'bundle.js',    // moze ovd i '[chunkhash].js' MOZDA JE CAK I POZELJNIJE
            chunkFilename: '[name]-lazy-load.js'  // ZAPAMTI DA TI ZA [name] TREBAJU MAGIC COMMENTS KOD DINAMICKOG import()
        },
        module: {
            rules: [
                {test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"]}
            ]
        },
        plugins: [
            new MiniCssExtractPlugin()
        ]

    }
}