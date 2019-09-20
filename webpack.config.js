const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const modeConfig = (mode) => require(`./build-utils/webpack.${mode}`)(mode); // DOBRO JE DA SAM PROSLEDIO mode
const addMergedPresetsConfigs = require('./build-utils/loadPresets');

const MyFirstWebpackPlugin = require('./build-utils/MyFirstWebpackPlugin')

// const mainConfigPath = __dirname;

//
// const SwLibWebpackPlugin = require('./build-utils/SwLibWebpackPlugin');

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
                new MyFirstWebpackPlugin(),
            ],

            /* resolveLoader: { 
                alias: {
                    // "my-loader": require.resolve('../my-loader.js')
                    // "my-loader": require.resolve('./build-utils/my-loader.js')
                }
        
            }, */

            module: {
                rules: [
                    {
                        test: /\.(jpe?g|png|svg)$/i,
                        use: [
                            {loader: "url-loader", options: {limit: 5000}},
                        ]
                    },
                    /* {
                        test: /\.s[ac]ss$/i,
                        use: [
                            {loader}
                        ]

                    }
 */
                    //{test: /\.js$/, use: "my-loader"}// DODAO SAM OVO
                    
                ]
            }
        },
        modeConfig(mode),
        addMergedPresetsConfigs({presets, mode})
    )
}