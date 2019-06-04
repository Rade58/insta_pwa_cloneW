const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = () => ({
    plugins: [
        new ServiceWorkerWebpackPlugin({
            entry: './src/sw.js',
            filename: 'sw.js',
            
        })
    ]
})