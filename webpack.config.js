const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const addMergedPresetsConfigs = require('./build-utils/loadPresets');

const MyFirstWebpackPlugin = require('./build-utils/MyFirstWebpackPlugin')

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
                new webpack.ProgressPlugin(),
                new MyFirstWebpackPlugin()
            ],

            resolveLoader: {        // EVO DODAO SAM OVO
                alias: {
                    // "my-loader": require.resolve('../my-loader.js')   // MEDJUTIM OVAJ PATH VISE NE VALJA
                    "my-loader": require.resolve('./build-utils/my-loader.js')
                }
        
            },

            module: {
                rules: [
                    {
                        test: /\.(jpe?g|png|svg)$/,
                        use: [
                            {loader: "url-loader", options: {limit: 5000}},
                        ]
                    },

                    {test: /\.js$/, use: "my-loader"}// DODAO SAM OVO
                    
                ]
            }
        },
        modeConfig(mode),
        addMergedPresetsConfigs({presets})
    )
}