const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackMerge = require('webpack-merge');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const addMergedPresetsConfigs = require('./build-utils/loadPresets');

module.exports = ({mode, presets} = {mode: "none", presets: []}) => {

    return webpackMerge(
        {
            /* optimization: {
                splitChunks: {chunks: "all"}
            }, */
            mode,
            output: {
                filename: 'bundle.js'
            },
            plugins: [
                // new HtmlWebpackPlugin(),
                new webpack.ProgressPlugin()
            ],
            module: {
                rules: [
                    {
                        test: /\.jpe?g$/,
                        use: [
                            {loader: "url-loader", options: {limit: 5000}}
                        ]
                    },
                    {test: /.css$/, use: ["style-loader", "css-loader"]}
                ]
            }
        },
        modeConfig(mode),
        addMergedPresetsConfigs({presets})
    )
}