// build-utils\presets\webpack.my-loader.js

module.exports = () => ({
    resolveLoader: {
        alias: {
            "my-loader": require.resolve('../my-loader.js')
        }

    },

    module: {
        rules: [
            {test: /\.js$/, use: "my-loader"}    // SAD JE js
        ]

    }
})