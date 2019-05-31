const webpack = require('webpack');
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
                new webpack.ProgressPlugin()
            ],
            module: {
                rules: [
                    {
                        test: /\.(jpe?g|png|svg)$/,
                        use: [
                            {loader: "url-loader", options: {limit: 5000}}
                        ]
                    },
                    
                ]
            }
        },
        modeConfig(mode),
        addMergedPresetsConfigs({presets})
    )
}