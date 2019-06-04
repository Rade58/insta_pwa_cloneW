// I CAN USE ONE ADDITINAL GLABAL VARIABLE IN MY SERVICE WORKER FILE

// VRIABLE IS CALLED 

                        //              global

                        //  I CAN ACCESS PLUGIN SETTINGS 
                        // (WHEN SHE WAS INSTANTIATED IN CONFIG PRESET FILE) THROUGH                
                        
                                                //       global.serviceWorkerOption

                        // AND THROUGH          global.serviceWorkerOption.assets

                        // I CAN USE MENTIONED TO ACCESS FILE PATHS OF MY PROJECT, AND CACHE THESE FILES        oninstal

const {assets} = global.serviceWorkerOption;        // assets IS ARRAY OF PATHS

const STATIC_CACHE = 'static-cache-v1';
const DYNAMIC_CACHE = 'dynamic-cache-v0';
const ON_DEMAND_CACHE = 'on_demand_cache_v0'

self.addEventListener('install', function(ev){
    ev.waitUntil(
        caches.open(STATIC_CACHE)
        .then(function(static_cache){

            Promise.resolve((function(){

                    for(let path of assets){
                        fetch(path)
                        .then(function(response){
                            static_cache.put(path, response)
                        })
                    }

                    // DON'T FORGET TO CACHE:        '/'
                    // ALSO YOU CAN CACHE MATERIAL ICON FONT AND ROBOTO FONT, MAYBE ALSO A favicon (ADD FAVICON LATER (MAYBE WHEN YOU LEARN HOW USE SOME PLUGIN THAT COPISE FILES FROM src TO dist))
                

                    const librariesAndTheRest = [                                 // ALSO THIS ARRAY CAN BE CONCATANATED WITH  assets ARRAY (BUT I'LL LEAVE IT LIKE THIS FOR NOW)
                        '/',                                                        // IF I DID THAT I WOULDN'T BE USIG TWO for of STATEMENTS
                        'https://fonts.googleapis.com/css?family=Roboto:400,700',
                        'https://fonts.googleapis.com/icon?family=Material+Icons',

                    ] 

                    for(let pt of librariesAndTheRest){
                        fetch(pt)
                        .then(function(resp){
                            static_cache.put(pt, resp)
                        })

                    }

            })())
            
        })
    );
})

// SO BECAUSE OF PREVIOUS CODE, EVERYTHING THAT IS EMMITED INITIALLY WILL BE IN Cache STORAGE (BUT I DON'T REALLY NEED EVERYTHING EMMITED, ESSPECIALY JSON FILES WEBPACK EMMITS)
                                                                                            // CORRECTION:   THESE JSON FILES ARE EMMITED BY WEBPACK DEV SERVER, SO IN PRODUCTION THEY
                                                                                            //               WILL NOT EXIST

// NOW DEFINING CLEARING OLD, OUTDATED CACHES         onactivate

self.addEventListener('activate', function(ev){
    ev.waitUntil(
        caches.keys()
        .then(function(keys){
            Promise.all(
                keys.map(function(cacheName){

                    if(cacheName !== STATIC_CACHE && 
                    cacheName !== DYNAMIC_CACHE && 
                    cacheName !== ON_DEMAND_CACHE){
                        
                    return caches.delete(cacheName);

                    }

                })
            )
        })
    )
})

// INTERCEPTING NETWORK REQUEST (IT'S ALLOWED ONLY AFTER NEW SERVICE WORKER IS ACTIVATED) AND
// AND CACHING DYNAMIC ASSETS       onfetch

self.addEventListener('fetch', function(ev){


    // ev.respondWith()

})
