module.exports = () => ({
    output: {
        filename: 'bundle.js',
        chunkFilename: '[name]-lazy-load.js'
    }
})