const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//  -------------------         OVO JE NEKI INFO OD RANIJE -----------  KOJI MORAM ZNATI
// DON'T FORGET THAT MiniCssExtractPlugi NEEDS HtmlWebpackPlugin (INFO OD RANIJE)
// output -->       filename SET TO '[chunkhash].js' FOR FINAL PRODUCTION BUILD (ime ce tada biti generated)
// chunkfilename -->        FOR LAZY LOADING import() (USE MAGIC COMMENTS) (INFO OD RANIJE) (INFO OD RANIJE)
// DON'T EVER USE style-loader FOR PRODUCTION, ESPECIALLY WHEN YOU HAVE mini-css-extract-plugin 
//          (WATCH FOR MERGING WITH SOME CONFIG THAT HAS MENTIONED LOADER (IT WILL CAUSE ERROR))
                                                                    //        (INFO OD RANIJE)
// ---------------------------------------------------------------------------------------------------

// DAKLE SADA CU DA OBJASNIM STA JE VAZNO DA DEFINISEM ZA PRODUCTION A TICE SE SASS-A
// CISTO DA NAPOMENEM DA KADA NE KORISTIM KONFIGURACIJE, KOJE SE MERGE-UJU UZ POMOC webpackMerge FUNKCIJE
// U GLAVNOJ KONFIGURACIJI (SADA UPRAVO TO KORISTIM, MERGE-UJEM OBJEKTE KOJE return-UJU FUNKCIJE)
// MORAO BIH KORISTITI      
//                                           process.env.NODE_ENV         KAKO BI ISMO VREDNSOT mode-A


// ALI PSOTO JA RADIM 'ZESTOKI' COMPOSITION PRI GRADNJI KONFIGURACIJE, (A TO ZNACI DA JA USTVARI UMESTO
// JEDNOG KONFIGURACIJSKOG OBJEKTA, USTVARI KORISTITM MNOSTVO PA IH MERGE-UJEM),
// JA USTVARI NECU KORISTITI GORE POMENUTO, KAKO BI USLOVNO
// DEFINISAO NEKI PROIPERTI, ALI CISTO DA ZNAM DA PSOTOJI TAKVA MOGUCNOST

// OVDE TO NE BI RADILO JER NIJE REC O FAJLU webpack.config.js NA TOP LEVELU, MOG APP-A 
//                  (PREDPOSTAVLJAM DA NE BIH MOGAO KORISTITI U OVOM FAJLU ILI PRESET-OVIMA)

// MEDJUTIM JA IMAM DRUGACIJU MOGUCNOST, MOGU MODE DA PROSLEDIM OVOJ FUNKCIJI

                            // POSTOJI I FUNKCIJA modeConfig
                            // KOJU SAM DEFINISAO U GLAVNOJ KONFIGURACIJI
                            // CIJI JE CILJ DA REQUIRE-UJE 
                            // POTREBNU KONFIGURACIJU
                            // A JA SAM REDEFINISAO TAKVU FUNKCIJU, KAKO BI ONA
                            // PROSLEDJIVALA mode, MOJOJ FUNKCIJI 
                            // (A TO JE MOJA FUNKCIJA KOJA JE DEFULT EXPORT OVOG FAJLA) 

                                    // CISTO DA POKAZEM KAKO IZGLEDA modeConfig U webpack.config.js FAJLU:
                                    // const modeConfig = (mode) => require(`./build-utils/webpack.${mode}`)(mode);

// DAKLE mode JE PROSLEDJEN

module.exports = (mode, mapUsage) => { // ALI mode JE OVDE U SLUCAJU ONOGA STA JA ZELIM DA URADIM NEPOTREBAN JER
                                        // ZNAM DA JE OVO PRODUCTION KONFIGURACIJA I NE TREBAM NISTA CONTITIONALLY U ODNOSU NA
                                        // mode DEFINISATI

    // DAKLE TREBAM SAMO DA VODIM RACUNA
    // O TOME STA JA USTVARI ZELIM DA DEFINISEM ZA PRODUCTION, A TICE SE CSS-A I SASS-A

    // A TAKODJE MOZES DA VIDIS DA SE OVOJ FUNKCIJI PROSLEDJUJE I BOOLEAN
    // KOJI M SE ODLUCUJE DA L ICE SE KORISTITI SOURCE MAPS

    //________________________________________________________________________________________________
    // !!!!!    ONO STO JE JAKO BITN OJE STE CHAINING LOADER-A      SKROZ DESNO SU LAODER-I KOJI PRVI LOADUJU TVOJE CSS FAJLOVE
    // !!!!                                                         STA POD TIME MISLIM

    //                                                          EVO OVO BI BIO PRAVILAN RASPORED

    //                                          [MiniCssExtractPlugin.loader, "css-laoder", "sass-laoder"]

    //                                            LOADING POCINJE OD sass-A AKO JE U PITANJU SASS
                                            // OVO IZGLEDA NAOPAKO ALI SE TAKO MORA DEFINISATI
    ///!!!!!!_____________________________________________________________________________________________

    return {
        devtool: mapUsage? "source-map": false,      // EVO OVDE DEFINISEM UPOTREBU SORCE MAP U ODNSU NA 
                                                     // NA PROSLEDJENU VREDNSOT IZ MAIN CONFIG FAJLA 
        output: {
            filename: 'bundle.js',  // POGLEDAJ MOZDA JE OVO OVERWRITEN IZ NEKOG PRESET-A
            chunkFilename: '[id].[name]-lazy-load.js'   // OVO MISLI MDA NIJE
        },
        
        module: {
            rules: [
                // JA USTVARI ZELIM DA ZADRZIM MOGUCNOS DA LOAD-UJEM I PURE css FAJLOVE

                // ALI ZELIM DA IMAM MOGUCNOST DA LOAD-UJEM SASS MODULE ALI I CSS MODULE

                // PRETEZNO ZELIM DA KORISTIM .scss JER JE TO USTVARI SUPERSET CSS-A
                // ALI KORISTICU LOADER POSTAVKE SPECIJALNO ZA CSS I SPECIJALNO ZA SASS
                // ZATO CU IMATI NESTO VISE MATCHING-A
                
                // DAKLE PROSTO SLEDECE SAM ZADRZAO, ALI DODACU MOGUCNOST DA CSS BUDE PODELJEN U MODULE
                // MODULI CE BITI ONI FAJLOVI, KOJI IMAJU .module.css u SVOM IMENU
                // ALI PRVO DA DEFINISEM ZA GLOBAL CSS FAJL

                // OPET NEMOJ DA ZABORAVIS DA JE REDOSLED DEFINISANJA LAODER-A ,ZISTA VAZAN  IDA SE 'CITA OD DESNA NA LEVO'

                {   
                    test: /\.css$/i,
                    exclude: /\.module\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {loader: "css-loader", options: {sourceMap: mapUsage}}
                                            // ZAPAMTI CSS LAODER UVEK NAKON JER SE POSMATRA OBRNUTO SA DESNA
                    ]                      // KAO STO SAM GORE OBJASNIO I PSOTUJ OVO
                                           // https://docs.google.com/presentation/d/1hFtMCMo62DgOIc-9OwgaVwPZHwv1cgMELArHcMbXlSI/edit#slide=id.g15e96ef847_0_438
                },
                
                // EVO DEFINISEM ZA CSS MODULE (ZADAJEM DODATNE OPCIJE)

                {
                    test: /\.module\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {loader: "css-loader", options: {modules: true, sourceMap: mapUsage}}  // 
                    ]
                },
                
                // DAKLE TREBA MI REGULAR EXPRESSION KOJI MATCH-UJE 'SASS BUNDLE', ODNOSNO GLOBAL FAJL
                // (ALI USTVARI PRVO ZELIM DA MATCH-UJEM SASS MODULE)
                // A STRIKTNO CU DEFINISATI DA U IMENU SASS FAJLA KOJI JE MODUL IMA .module.scss (TOKOM GRADNJE MOG APP-A)
                {
                    test: /\.module\.s[ac]ss$/i,
                    // A STO SE TICE LOADER-A, KOJE KORISTIM ZA PRODUCTION U POGLED U SASS-A, TO CU SADA DEFINISATI
                    // I TREBACE NESTO DETALJNIJE DEFINISANJE POMENUTOGA

                    use: [

                        // PRVI LOADER, KOJI CU DEFINISATI DA BUDE U UPOTREBI JE MiniCssExtractPlugin.loader

                        MiniCssExtractPlugin.loader, // U plugin DELU CU KONFIGURIRATI OVAJ PLUGIN, KAKO BI
                                                     // USTVARI DEFINISAO DA OVAJ PLUGIN KORISTI CHUNKOVE CSS-A

                        // SELDECI CE BITI css-loader, A ONO STO CU ZA NJEGA OMOGUCITI JESU MODULI 
                        // MISLIM DA SAM NAPOMENUO ZASTO SAMO ZA NJEGA
                        {loader: "css-loader", options: {modules: true}},
                         

                        // DEFINISEM I KORISCENJE SASS LAODER-A   (ON JE DAKLE LOADER KOJI CE PRVI LOAD-OVATI)
                                                                  //( ALI OPET NAPOMINJEM DA JE USVOJENA KONVENCIJA
                                                                  // DA ONAJ KOJI PRVI LOAD-UJE SE OVDE DEFINISAN POSLEDNJI )
                        {
                            loader: "sass-loader",
                            options: {sourceMap: mapUsage}
                        }

                    ]
                },

                {
                    // GORE SAM MATCH-OVAO SASS MODULE, A SADA DEFINISEM MATCHING GLOBAL FAJLOVA KOJI CE SAMO IMATI
                    // .scss ILI sass EKSTENZIJE

                    test: /\.s(a|c)ss$/i,
                    exclude:  /\.module\.s[ac]ss$/i,
                    use: [

                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        {loader: "sass-loader", options: {sourceMap: mapUsage}}

                    ]


                }

            ]
            
        },

        // MEDJUTIM TU NIJE POSAO ZVRSEN, JER ZELIM DA KROS MiniCssExtractPlugi DEFINISEM LOADING
        // MODULA, ODNOSNO, KAO POSLEDICA DINAMICKOG IMPORT-A, ODNOSNO POSLEDICA  CODE SPLITTING-U
        // KADA SE SCCSS TRANSPILE-UJE U CSS, JA NE ZELIM, SAMO JEDAN CSS FAJL, VEC
        // ZELIM DA I CSS CODE BUDE CHUNKED (BEZ OBZITRA NASTAO ON OD SASS-A ILI NE)

        // SVE POMENUTO MOGU RESITI, KROZ NEKOLIKO POSTAVKI ZA          MiniCssExtractPlugin

        plugins: [
            new HtmlWebpackPlugin(),
            new MiniCssExtractPlugin({
                // DAKLE DEFINISEWM FILENAME I CHUNK FILENAME KOJI CE SE SASTOJATI I OD HASH-A (HEX STRING-A)
                filename: "[name].[hash].css",

                // DEFINISEM I CHUNK FILENAME, KOJE CE SE SASTOJATI OD ID-JA I OD HEX-A
                chunkFilename: "[id].[hash].css"

            }),

            new HtmlWebpackPlugin({  // PROVIDING FALLBACK PAGE (CODE OD RANIJE)
                filename: "fallback_offline.html",
                chunks: ["fallback_offline"],
                template: 'src/templates/fallback_offline.html',
            }),
        ],

        // MOZE SE DEFINISATI I RESOLVEMENT FAJLOVA KOJI IMAJU SASS EKSTENZIJE
        // AL INE ZABORAVI DA SE PO DEFAULT-U RESOLVE-OVAO JAVASCRIPT (E AKO DODAJES NESTO, MORAS EKSPLICITNO DEFINISATI I ZA .js)

        // OVO SE USTVARI DEFINISE, AKO NE ZELIM DA KUCAM EKSTENZIJU PRILIKOM DEFINISANJA import STTEMENT-A
        // AKO SE SECAS IMPORTING-A JAVASCRIPT MODULA, JASNO TI JE DA NE MORAS KUCATI .js EKSTENZIJU

        // ALI IPAK STO SE TICE CSS JA ZELIM DA IMAM EKSTENZIJU, PROSTO ZBOG CITLJIVOSTI, DA NE BI POSMISLI ODA JE NEKI
        // SASS-OV IMPORT, USTVARI JAVASCRIPT 
            
            /* 
        resolve: {
            extensions: ['.js', '.sass', '.scss']
        }
            */

    }
}