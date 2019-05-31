const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackChangeAssetsExtensionPlugin = require('html-webpack-change-assets-extension-plugin');

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
            filename: "index.html",             // BU THIS WILL ONLY WORK IF I HAVE COMPRESSION PLUGIN (WHICH (I HAVE ITS OWN PRESET) I CAN MERGE TOGETHER WIT THIS CONFIG)
            chunks: ["index"],
            jsExtension: ".gz", 
        }),
        new HtmlWebpackPlugin({
            filename: "help/help.html",
            chunks: ["help/help"],
            jsExtension: ".gz",
        }),
        new HtmlWebpackChangeAssetsExtensionPlugin()            // BY USING THIS PLUGIN .gz FILES WILL BE INSERTED IN HTML INSTED OF .js FILES
    ],

})