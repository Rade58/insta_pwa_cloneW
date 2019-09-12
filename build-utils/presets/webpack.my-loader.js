// build-utils\presets\webpack.my-loader.js

module.exports = () => ({
    resolveLoader: {
        "aliase": require.resolve('../my-loader.js')
    },

    module: {

        rules: [
            {test: /\.js$/, use: "my-loader"}
        ]

    }

})