const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = () => ({
    plugins: [new CompressionWebpackPlugin()]
})

// WITH PRODUCTION: IF YOU COMPOSE (webpackMerge) THIS SCRIPT WITH PODUCTION AND MAIN, gzip FILE ISN'T GOING TO BE SERVED IN HTML, BUT IT WILL BE AVAILABLE ASSET IN dist FOLDER
// NO NEED TO USE IT IN DEV MODE