// THIS IS JUST FOR PRODUCTION
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackChangeAssetsExtensionPlugin = require('html-webpack-change-assets-extension-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = () => ({
    entry: {
        "index": './src/index.js',
        "help/help": './src/help/help.js'
    },
    output: {
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({                 // HtmlWebpackPlugin INSTANCES NEED TO BE INSTACIATED TO USE html-webpack-change-assets-extension-plugin (ASSIGNING jsExtension PROPERTY)
            filename: "index.html",             // BU THIS WILL ONLY WORK IF I HAVE COMPRESSION PLUGIN (WHICH I HAVE)
            chunks: ["index"],
            template: 'src/templates/template.html', 
            jsExtension: ".gz"
        }),
        new HtmlWebpackPlugin({
            filename: "help/help.html",
            chunks: ["help/help"],
            template: 'src/templates/template.html',
            jsExtension: ".gz"
        }),
        new HtmlWebpackChangeAssetsExtensionPlugin(),            // BY USING THIS PLUGIN, .gz FILES WILL BE INSERTED IN HTML INSTED OF .js FILES
        new CompressionWebpackPlugin()
    ],

})

// COMPRESSION I NO NO FOR DEVELOPMENT SINCE I NEED TO ENABLE .gz ON SERVER SIDE
// I NEED TO CREATE CUSTOM multipage preset FOR DEVELOPMENT