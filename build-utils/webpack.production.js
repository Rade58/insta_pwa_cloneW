const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

// DON'T FORGET THAT MiniCssExtractPlugi NEEDS HtmlWebpackPlugin

module.exports = () => {
    return {
        devtool: "source-map",
        output: {
            filename: 'bundle.js',    // SET TO '[chunkhash].js' FOR FINAL PRODUCTION BUILD 
            chunkFilename: '[name]-lazy-load.js'  // FOR LAZY LOADING import() (USE MAGIC COMMENTS)
        },
        // DON'T EVER USE style-loader FOR PRODUCTION, ESPECIALLY WHEN YOU HAVE mini-css-extract-plugin (WATCH FOR MERGING WITH SOME CONFIG THAT HAS MENTIONED LOADER (IT WILL CAUSE ERROR))

        module: {
            rules: [
                {test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"]}
            ]
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new MiniCssExtractPlugin()
        ]

    }
}