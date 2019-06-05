const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => ({
    plugins: [
        new CopyWebpackPlugin([
            {from: 'src/for_copy', to: 'copied_assets'}
        ])
    ]
})