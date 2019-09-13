const HtmlWebpackPlugin = require('html-webpack-plugin');

const SwLibWebpackPlugin = require('./SwLibWebpackPlugin');

module.exports = (mode, mainConfigPath) => ({
    output: {
        chunkFilename: '[name]-lazy-load.js',
    },
    module: {
        rules: [
            {test: /.css$/, use: ["style-loader", "css-loader"]}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin({                         // PROVIDING FALLBACK PAGE
            filename: "fallback_offline.html",
            chunks: ["fallback_offline"],
            template: 'src/templates/fallback_offline.html',
        }),

        new SwLibWebpackPlugin(
            '///src/.//./sw_libraries///blah_two.js',
            'service_worker_libraries_outputed',
            __dirname,
            'sw_libraries',
            mainConfigPath

        )
    ]

})