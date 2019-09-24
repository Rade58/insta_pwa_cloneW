const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (mode, mapUsage) => { 

    return {
        devtool: mapUsage? "source-map": false,

        output: {
            filename: 'bundle.js',
            chunkFilename: '[id].[name]-lazy-load.js'
        },
        
        module: {
            rules: [
                
                {   
                    test: /\.css$/i,
                    exclude: /\.module\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {loader: "css-loader", options: {sourceMap: mapUsage}}
                    ]
                },

                {
                    test: /\.module\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {loader: "css-loader", options: {modules: true, sourceMap: mapUsage}}
                    ]
                },
                {
                    test: /\.module\.s[ac]ss$/i,
                    use: [

                        MiniCssExtractPlugin.loader,

                        {loader: "css-loader", options: {modules: true}},
                         
                        {
                            loader: "sass-loader",
                            options: {sourceMap: mapUsage}
                        }

                    ]
                },

                {
                    test: /\.s(a|c)ss$/i,
                    exclude:  /\.module\.s[ac]ss$/i,
                    use: [

                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        {loader: "sass-loader", options: {sourceMap: mapUsage}}

                    ]

                }

            ]
            
        },

        plugins: [
            new HtmlWebpackPlugin(),
            new MiniCssExtractPlugin({

                filename: "[name].[hash].css",

                chunkFilename: "[id].[name].[hash].css"

            }),

            new HtmlWebpackPlugin({
                filename: "fallback_offline.html",
                chunks: ["fallback_offline"],
                template: 'src/templates/fallback_offline.html',
            }),
        ],
             
            /* 
        resolve: {
            extensions: ['.js', '.sass', '.scss']
        }
            */

    }
}