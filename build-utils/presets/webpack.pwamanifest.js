const WebpackPwaManifest = require('webpack-pwa-manifest');

// MOZDA SAMO DA NAPOMENEM DA CE SE, SE OVIM PLUGIN-OM EMITOVATI PWA MANIFEST, TAKO DA
// MOZE DA SE KORISTI U DEVELOPMENT MODE-U

module.exports = () => ({
    plugins: [
        new WebpackPwaManifest({
            name: 'My Insta clone Progressive Web App',
            short_name: 'insta clone w',
            description: 'My app made just for practicing webpack together with pwa techologies',
            // crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            icons: [
                {
                  src: 'src/icons/ios-icon512.png',
                  sizes: [57, 60, 72, 76, 114, 120, 144, 152, 167, 180, 1024],    // I SHULD PROVIDE 1024X1204 ICON FOR ALL OF THIS BUT I DON'T HAVE IT RIGHT NOW 
                  destination: 'icons/ios',
                  ios: true
                },
                {
                  src: 'src/icons/ios-icon512.png',    // I SHULD PROVIDE 1024X1204 ICON FOR ALL OF THIS BUT I DON'T HAVE IT RIGHT NOW 
                  size: [1024, 180],
                  destination: 'icons/ios',
                  ios: 'startup'
                },
                {
                  src: 'src/icons/android-icon512.png',
                  sizes: [36, 48, 72, 96, 128, 144, 152, 192, 256, 384, 512],
                  destination: 'icons/android'
                }
            ],
            inject: true, // injecting meta tags android
            ios: {                                              // injecting meta tags ios
                'apple-mobile-web-app-title': 'Insta Pwa Clone W',
                'apple-mobile-web-app-status-bar-style': 'black'
            },      
            start_url: "/index.html",
            display: "standalone",
            orientation: "portrait-primary",
            background_color: "#fff",
            theme_color: "#e98481",
            filename: "manifest.json",  //  directory
            includeDirectory: true,    // manifest will be generated on that directory
            dir: "ltr",
            lang: "en-US",
            scope: '.',
            fingerprints: true
        })
    ]
})