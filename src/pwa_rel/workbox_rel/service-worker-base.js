// DAKLE importScrip() KOJI UVOZI LIBRARY BICE STAVLJEN U OUTPUT FAJLU (dist/service-worker)

// I MANIFEST CODE CE BITI UVEZEN SA ISTIM POZIVM importScrpt()

// A TAJ SCRIPT, MANIFEST SA NABROJANIM URL-OVIMA CE ASSIGNOVATI TO      self.__precacheManifest

// SVE OSTALO STO OVDE DEFINISEM BICE KOPIRANO U        dist/service-worker


// PITANJE SE POSTAVLJA KAKO DA EXCLUDE-UJEM ODREDJENI DIREKTORIJUM U dist-U FROM PRECACHING
// PRILIKOM SETTING-A KONFIGURACIJE, TO MI NIJE USPELO

// importSc('/pwa_rel/sw_utility/makeManifestWithIgnoresAndInsertToSelf.js')   // U SUSTINI DEFINISAO SAM KOPIRANJE
                                                              // OVAKAVOG UTILITY FOLDER-A SA FUNKCIJAMA
                                                              // U dist
                                                              // ONE SE NALAZE NA ISTOM DIREKTORIJUMU
                                                              // U src-U
                                                              // NJIHOVO KOPIRANJE SAM DEFINISAO UZ POMOC
                                                              // copy-webpack-plugin

// OVAJ, MOJ SCRIPT INSERT-UJE WEBPACK mode U self                                                          
// importScrts('/webpack_rel/insertMode.js');                //  INSERTUJE GA KAO        self.__webpackMode



self.addEventListener('activate', e => {

    console.log(self.__precacheManifest);
    console.log(self.__webpackMode);

    // console.log({makeManifestWithoutIgnoresAndInsertToSelf, precacheManifest})


})


//********************************PRECACHING */  

                    // OBRATI PAZNJU DA CE POZIVANJE OVE FUNKCIJE ODIGRATI SAMO JEDNOM (BEZ OBZIRA MENJAO TI PRECACHING MANIFEST NIZ ILI NE)
                    
                    // DAKLE SAMO JEDNOM IMAS MOGUCNOST DA DEFINISES PRECACHING
                    
                    //              workbox.precaching.precacheAndRoute()

// STO SE TICE EXCLUSION-A, ODREDJENIH TIPOVA COMPRESSED FAJLOVA MOGAO SAM TO MOGAO URADITI KROZ
// compress-webpack-plugin (STO I JESAM URADIO)             

//      TO SAM I DEFINISAO U OVO MPRESET-U        build_utils\presets\webpack.multi_compress_serve.js

// UGLAVNOM DOBRO JE STO SAM UVEZAO POMENUTI MODE (BAR JE MENI ZANIMLJIVO (JER AKO POSTOJI POTREBA MOGU GA KORISTITI GDE BILO))


// AL ICODE, KOJI JE U REDU, I KOJI KORISTI INSERTED WEBPACK MODE JESTE OVDE (NEKA STOJI, NE SMETA NISTA) 


// POSTO IMAM MODE, MOGU NAPRAVITI REGEXP-OVE ZA ASSETE, KOJE NE ZELIM DA PRECACHE-UJEM U SLUCAJU DEVELOPMENT CODE-A
// I U SLUCAJU PRODUCTION CODE-A

const notForPrecachingProduction = [        // PRVENSTVENO ZA PRODUCTION NE ZELIM DA SE SLUCAJNO PRECACHE-UJU JAVASCRIPT FAJLOVI 
    /^\/[\w\W]+\.js$/,                      // ZELI MSAMO ONE SA .gz

    /\.html\.gz$/,                           // STO SE TICE DRUGIH TIPOVA, KOJI NISU JAVASCRIPT, NE ZELI MDA CACHE-IRAM ONE COMPRESSED
    /\.css\.gz$/

];

const notForPrecachingDevelopment = [       // STO SE TICE DEVELOPMENT CODE-A, .gz FAJLOVI NISU NI GENERISANI, A NIJE DEFINISANO NI INSERTOVANJE 
                                            // .gz FAJLOVA U DOM
    /\.hot\-update\.json$/
    // OVO GORE NE ZNACI NISTA STO SAM EXCLUDE-OVAO FROM PRECACHING, JER TAKVI FAJLOVI SE FORMIRAJU TOKO MDEVELOPMENTA
    // MOZDA CE MI ZNACITI DA TAKVE FAJLOVE NE CACHE-IRAM ON RUNTIME
]

// TRECI NIZ NEKA BUDEU REGEXP-OVI ZA ONE URL-OVE, KOJE BEZ OBZIRA NA WEBPACK MODE NE ZELI MDA PRECACHE-UJEM
const notForPrecaching = [
    // /^\/?help\/.+\.html$/,      // OVO JE SAMO U CILJU TESTIRANJE, ODNOSN OVEZBE KADA UMESTO OVOG ASSET-A ZELI MDA SERVE-UJEM OFFLINE FALLBACK (TAKO KADA ZAVRSIS TESTIRANJE MOZES DA COMMENT OUT)
    /^\/?icons/,                 
    /\.map$/
]

// OVO PRAVI NOVI NIZ I ASSIGN-UJE TO self.__precacheManifest, SAMO ONE ASSET-OVE CIJI URL-OVI
// NE ODGOVARAJU PROSLEDJENIM PATTERNIMA

// AL ITO RADIM I ZA SLUCAJ INSERTED WEBPACK-OVOG development MODE-A ILI ZA SLUCAJ production MODE

let precacheManifest;   // OPET MOZDA NEPOTREBNO 

if(self.__webpackMode === "production"){

    // IAPAK OVA FUNKCIJA RETURN-UJE NOVI KREIRANI PRECACHE MANIFEST

    precacheManifest = makeManifestWithoutIgnoresAndInsertToSelf(...notForPrecaching, ...notForPrecachingProduction)
}

 if(self.__webpackMode === "development"){
    precacheManifest = makeManifestWithoutIgnoresAndInsertToSelf(...notForPrecaching, ...notForPrecachingDevelopment)
}
  
// POSTO SAM SA PREDHODNOM FUNKCIJOM KREIRAO self.__precacheManifest NIZ BEZ ONIH
// ASSET-OVA, KOJE NE ZELI MDA PRECACHE-UJEM, MOGU PROSLEDITI  self.__precacheManifest   U  precacheAndRoute

    // JA OVDE DEFINISEM, ODNOSNO INICIRAM PRECACHING
// PRIMETIO SAM DA SVI OVO STAVLJAJU NA KRAJU FAJLA
// PRATICU I JA TU PRAKSU PA CU OTKRITI ZASTO SE TO MORA ISPOSTOVATI






workbox.precaching.precacheAndRoute(precacheManifest || self.__precacheManifest || []);
