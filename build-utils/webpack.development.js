const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (mode, mapUsage) => ({
    output: {
        chunkFilename: '[name]-lazy-load.js',
    },
    module: {
        rules: [
            {   
                test: /\.css$/i,
                exclude: /\.module\.css$/i,
                use: [
                    "style-loader",
                    {loader: "css-loader", options: {sourceMap: mapUsage}}
                ]
                                      
            },
            
            {
                test: /\.module\.css$/i,
                use: [
                    "style-loader",
                    {loader: "css-loader", options: {modules: true, sourceMap: mapUsage}}  // 
                ]
            },

            {
            
                test: /\.s(a|c)ss$/i,
                exclude:  /\.module\.s[ac]ss$/i,
                use: [

                    "style-loader",
                    "css-loader",
                    {loader: "sass-loader", options: {sourceMap: mapUsage}}

                ]

            },
            
            {
                test: /\.module\.s[ac]ss$/i,
                
                use: [

                    "style-loader", 
                    
                    {loader: "css-loader", options: {modules: true}},
                  
                    {
                        loader: "sass-loader",
                        options: {sourceMap: mapUsage}
                    }

                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin({                         // PROVIDING FALLBACK PAGE
            filename: "fallback_offline.html",
            chunks: ["fallback_offline"],
            template: 'src/templates/fallback_offline.html',
        }),

    
    ]

})