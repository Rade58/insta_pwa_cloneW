// I CAN USE ONE ADDITINAL GLABAL VARIABLE IN MY SERVICE WORKER FILE

// VRIABLE IS CALLED 

//              global

//  I CAN ACCESS PLUGIN SETTINGS 
// (WHEN SHE WAS INSTANTIATED IN CONFIG PRESET FILE) THROUGH                

                        //       global.serviceWorkerOption

// AND THROUGH          global.serviceWorkerOption.assets

// I CAN USE MENTIONED TO ACCESS FILE PATHS OF MY PROJECT, AND CACHE THESE FILES        oninstal

const {assets} = global.serviceWorkerOption;        // assets IS ARRAY OF PATHS


// FILTER '.map' FILES AND '.map.gz' FILES FROM CACHING oninstal

const assetsArray = [].concat(assets).filter(function(url){
    if(!(/\.map(\.gz)?|html\.gz$/.test(url))){
        return url;
    }
})


const librariesAndOther = [                                 // ALSO THIS ARRAY CAN BE CONCATANATED WITH  assets ARRAY (BUT I'LL LEAVE IT LIKE THIS FOR NOW)
    '/',                                                        // IF I DID THAT I WOULDN'T BE USING TWO for of STATEMENTS INSIDE oninstall HANDLER SCOPE
    'https://fonts.googleapis.com/css?family=Roboto:400,700',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
];


const STATIC_CACHE = 'static-cache-v1';
const DYNAMIC_CACHE = 'dynamic-cache-v1';
const ON_DEMAND_CACHE = 'on_demand_cache_v0'

self.addEventListener('install', function(ev){
    ev.waitUntil(
        caches.open(STATIC_CACHE)
        .then(function(static_cache){

            /* let allStaticAssets = assetsArray.concat(librariesAndOther) */

            return Promise.all(                 // I don't know if it's a requirement (because activation is on hold after first reload) 
                                                // but I did ensure that Promise is passed 
                assetsArray.concat(librariesAndOther).map(function(path){       // to Promise.all, when every static asset is cached
                    return fetch(path)
                    .then(function(response){
                        return static_cache.put(path, response)
                    })
                })            
            )
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


// CREATING HELPER FUNCTION THAT WILL PROVIDE BOOLEAN true IN INTERCEPTED NETWORK REQUEST IS A
// REQUEST FOR SOME ASSETS, WHOOS PATHS I PROVIDED (PARTICULARLY librariesAndOther Array I DECLARED IN oninstall SCOPE IS IMPORTAND FOR THIS)
// ALSO IT CHECKS assets ARRAY TOO

// WHY I PROVIDED THIS FUNCTION
// BECAUSE I WANT TO SERVE THESE FILES AS QICK AS I CAN BECAUSE WHEN I INTERCEPT THEIR REQUEST
// I KNOW THEY ARE ALREADY CACHED oninstall AND I CAN SERVE THEM AS QUICK AS I CAN

const findUrl = function(requestsUrl){

    if(requestsUrl === '/'){return true;}   //     '/'    CAN CAUSE PROBLEMS WHEN USING IT WITH THIS CONSTRUCTOR:     new URL(requestsUrl) 

    const url = new URL(requestsUrl)

    let allStaticAssetUrls = assetsArray.concat(librariesAndOther)

    for(let u of allStaticAssetUrls){
        if(url.pathname === u){
            return true;
        }else{
            continue;
        }
    }

    return false;
}


// INTERCEPTING NETWORK REQUEST (IT'S ALLOWED ONLY AFTER NEW SERVICE WORKER IS ACTIVATED) AND
// AND CACHING DYNAMIC ASSETS       onfetch

self.addEventListener('fetch', function(ev){

    // FIRST LETS TAKE IN ACCOUNT SOME JSON DATA I WANT TO STORE IN IndexedDB
    // I'LL DEFINE THAT LATER BUT I'LL DEFINE if STATEMENT, JUST FOR THAT ONE URL

    const firebasePath = "some posible path I'll provide after I create  backend data";   // I WANT TO PROVIDE        'CACHE THEN NETWORK STRATEGY FOR THIS ASSET'

    if(firebasePath === ev.request.url){

    
    }else if(findUrl(ev.request.url)){            // HELPER FUNCTION WILL PROVIDE INFORMATINO IF ASSETS IS ALREADY IN STATIC CACHE 
                                                    // SO I NEED TO LOOK FOR IT AND RETURNIND FRO MTHERE                                      
        ev.respondWith(
            self.caches.open(STATIC_CACHE)
            .then(function(static_cache){
                return static_cache.match(ev.request)     // AT THIS POINT AFTER NEW SERVICE WORKER ACTIVATES I CAN RELOAD THE PAGE
                                                            // AND I CAN CHECK NETWORK REQUEST IN DEV TOOLS
                                                            // TO SEE IF Responses ARE SERVED FROM CACHE
            })
        )

    }else{     // NOTING IF FOUND IN STATIC CACHE, SO I NEED TO SEARCH IT IN DYNAMIC CACHE (BUT I THINK I DIDNT TAKE IN ACCOUND ON_DEMAND_CACHE) (I'LL FIX THIS SOME OTHER TIME)

        // HERE I CAN DEFINE DYNAMIC CACHING WITHOUT ANY CHECKS IF INTERCEPTED NETWORK REQUEST IS ONE FOR THE
        // STATIC ASSETS, BECAUSE I ALREDY DID METIONED

        ev.respondWith(                                // THIS IS IMPORTAND FOR FONTS REQUESTED FROM OTHER DOMAINS BECAUSE THEY HAVE ADDITIONAL REQUEST FOR CSS FILES (@font-family RULES)

            self.caches.open(DYNAMIC_CACHE)
            .then(function(dynamic_cache){
                return dynamic_cache.match(ev.request)
                .then(function(response){
                    
                    if(response){           // IF Response IS FOUND INSIDE CACHE I CAN SERVE IT
                        return response;
                    }                       // IF NOT, I NEED TO FETCH FROM THE NETWORK
                    
                    return fetch(ev.request)
                    .then(function(resp){
                        
                        if(resp){           // IF NETWORK IS AVAILABLE Response IS HERE
                                            // I CAN CACHE HIS CLONE AND SERVE THE ORIGINAL
                            dynamic_cache.put(ev.request, resp.clone());

                            return resp;y

                        }

                    })
                    .catch(function(){          // IF NOTHING IS FOUND I MUST PROVIDE FALLBACK
                                                // THIS IS PARTICULARY IMPORTAND FOR PAGE THAT'S NOT FOUND IN CACHE
                                                // AND THERE'S NO NETWORK TO FETCH IT

                        if(ev.request.headers.get('accept').includes('text/html')){     // THIS CAN BE CONDITION ALSO          /\.html$/.test(ev.request.url)
                                                                                        // BUT THE CURRENT ONE IS BETTER, BECAUSE IT USES REQUESTS HEADER
                            
                            // TAKING FALLBACK PAGE FROM CACHE AND SERVING THAT PAGE

                            return caches.open(STATIC_CACHE)
                            .then(function(st_cache){
                                return st_cache.match('/fallback_offline.html')   // THIS COUNTS ONLY IF THERE'S NO NETWORK
                                /* .then(function(fallbackPageResponse){
                                    return fallbackPageResponse;
                                }) */
                            })
                        
                        }

                    })

                })
            })
        
        )
    }

})
