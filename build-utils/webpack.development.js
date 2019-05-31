module.exports = () => ({
    output: {
        chunkFilename: '[name]-lazy-load.js',
    },
    module: {
        rules: [
            {test: /.css$/, use: ["style-loader", "css-loader"]}
        ]
    }
})