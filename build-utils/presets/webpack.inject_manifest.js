const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => ({
  plugins: [
    new InjectManifest({
      swDest: 'service-worker.js',
      swSrc: 'src/pwa_rel/workbox_rel/service-worker-base.js'
    })
  ]
});
