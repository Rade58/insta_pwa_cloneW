const SwLibWebpackPlugin = require('../plugins/SwLibWebpackPlugin');

module.exports = () => ({

    plugins: [

        new SwLibWebpackPlugin(
            'src/pwa_rel/sw_libraries',
            'service-worker.js'
        )

    ]

})



