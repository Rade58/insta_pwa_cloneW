import runtime from 'serviceworker-webpack-plugin/lib/runtime';

// REGISTERING SERVICE WORKER WITH runtime (WITHOUT WEBPACKA, I WOULD USE         
//                                                      window.navigator.serviceWorker.register()     )

export default function(){

    if('serviceWorker' in window.navigator){

        const registration = runtime.register()     //   NO ARGUMENTS
        .then(function(ev){
            console.log('service worker registering...');
        })

    }

}
