const SwLibWebpackPlugin = require('../plugins/SwLibWebpackPlugin');

module.exports = ({mode}) => ({

    plugins: [

        new SwLibWebpackPlugin({
            srcLib: 'src/pwa_rel/sw_libraries',
            srcUtil: 'src/pwa_rel/sw_utility',
            swDest:'service-worker.js',
            mode
        })

    ]

})



