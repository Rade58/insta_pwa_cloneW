const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = () => ({
    plugins: [
        new ServiceWorkerWebpackPlugin({
            entry: './src/sw.js',
            filename: 'sw.js',

        })
    ]
})

// assets ARRAY IS GENERATED AND AVAILABLE IN sw FILE THROUGH global.serviceWorkerOption.assets (NO NEED FOR SPECIFIING STATIC ASSETS)