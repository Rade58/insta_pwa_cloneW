const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

// DON'T FORGET THAT MiniCssExtractPlugi NEEDS HtmlWebpackPlugin (INFO OD RANIJE)
// output -->       filename SET TO '[chunkhash].js' FOR FINAL PRODUCTION BUILD (ime ce tada biti generated)
// chunkfilename -->        FOR LAZY LOADING import() (USE MAGIC COMMENTS) (INFO OD RANIJE) (INFO OD RANIJE)
// DON'T EVER USE style-loader FOR PRODUCTION, ESPECIALLY WHEN YOU HAVE mini-css-extract-plugin (WATCH FOR MERGING WITH SOME CONFIG THAT HAS MENTIONED LOADER (IT WILL CAUSE ERROR))
                                                                                    //        (INFO OD RANIJE)


// DAKLE SADA CU DA OBJASNIM STA JE VAZNO DA DEFINISEM ZA PRODUCTION A TICE SE SASS-A 
// CISTO DA NAPOMENEM DA KADA NE KORISTIM KONFIGURACIJE, KOJE SE MERGE-UJU UZ POMOC webpackMerge FUNKCIJE
// U GLAVNOJ KONFIGURACIJI (SADA UPRAVO TO KORISTIM, MERGE-UJEM OBJEKTE KOJE return-UJU FUNKCIJE)
// MORAO BIH KORISTITI      

//                                              process.env.NODE_ENV            KAKO BI ISMO VREDNSOT mode-A

// ALI PSOTO JA RADIM 'ZESTOKI' COMPOSITION PRI GRADNJI KONFIGURACIJE, (A TO ZNACI DA JA USTVARI UMESTO
// JEDNOG KONFIGURACIJSKOG OBJEKTA, USTVARI KORISTITM MNOSTVO PA IH MERGE-UJEM),
// JA USTVARI NECU KORISTITI GORE POMENUTO, KAKO BI USLOVNO
// DEFINISAO NEKI PROIPERTI, ALI CISTO DA ZNAM DA PSOTOJI TAKVA MOGUCNOST

// OVDE TO NE BI RADILO JER NIJE REC O FAJLU webpack.config.js NA TOP LEVELU, MOG APP-A (PREDPOSTAVLJAM DA NE BIH MOGAO KORISTITI U OVOM FAJLU ILI PRESET-OVIMA)

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

module.exports = (mode) => {        // ALI mode JE OVDE U SLUCAJU ONOGA STA JA ZELIM DA URADIM NEPOTREBAN JER
                                    // ZNAM DA JE OVO PRODUCTION KONFIGURACIJA I NE TREBAM NISTA CONTITIONALLY U ODNOSU NA
                                    // mode DEFINISATI
    // DAKLE TREBAM SAMO DA VODIM RACUNA
    // O TOME STA JA USTVARI ZELI MDA DEFINISEM ZA PRODUCTION, A TICE SE SASS-A
    return {
        devtool: "source-map",
        output: {
            filename: 'bundle.js',
            chunkFilename: '[name]-lazy-load.js'
        },
        
        module: {
            rules: [
                // JA USTVARI ZELIM DA ZADRZIM MOGUCNOS DA LOAD-UJEM I css FAJLOVE

                // ALI ZELIM DA IMAM MOGUCNOST DA LOAD-UJEM SASS MODULAE ALI I CSS MODULE

                // PRETEZNO ZELIM DA KORISTIM .scss JER JE TO USTVARI SUPERSET CSS-A
                // ALI KORISTICU LOADER POSTAVKE SPECIJALNO ZA CSS I SPECIJALNO ZA SASS
                // ZATO CU IMATI NESTO VISE MATCHING-A
                
                // DAKLE PROSTO SLEDECE SAM ZADRZAO, ALI DODACU MOGUCNOST DA CSS BUDE PODELJEN U MODULE
                // MODULI CE BITI ONI FAJLOVI, KOJI IMAJU .module.css u SVOM IMENU
                // ALI PRVO DA DEFINISEM ZA
                {   
                    test: /\.css$/i,
                    exclude: /\.module\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader"       // DAKLE ZELIM MODULE
                    ]

                },
                
                {
                    test: /\.module\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {loader: "css-loader", options: {modules: true, sourceMap: true}}       // DAKLE ZELIM MODULE
                    ]
                },
                
                // DAKLE TREBA MI REGULAR EXPRESSION KOJI MATCH-UJE SASS (ALI USTVARI PRVO ZELI MDA MATCH-UJEM SASS MODULE)
                // A STRIKTNO CU DEFINISATI DA U IMENU SVAKOG SASS FAJLA MORA STAJATI I modul
                {
                    test: /\.module\.s[ac]ss$/i,
                    // A STO SE TICE LOADER-A, KOJE KORISTIM ZA PRODUCTION U POGLED U SASS-A, TO CU SADA DEFINISATI
                    // I TREBACE NESTO DETALJNIJE DEFINISANJE POMENUTOGA

                    use: [

                        // PRVI LOADER, KOJI CU DEFINISATI DA BUDE U UPOTREBI JE MiniCssExtractPlugin.loader

                        MiniCssExtractPlugin.loader, // U plugin DELU CIU KONFIGURIRATI OVAJ PLUGIN, KAKO BI
                                                     // ON U HTML UMETAO CSS CHUNK-OVE

                        // SELDECI CE BITI CSS LAODER, A ONO STO CU ZA NJEGA OMOGUCITI JESU MODULI
                        // OVO CE UPRAVO OMOGUCITI DA MOJ CSS BUDE PODELJEN ONAKO KAVA JE MOJ INTENTION
                        // ODNOSNO SVAKI CSS IMPORT BICE NAKON BUILD-A I ODVOJENI CSS FAJL 

                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                sourceMap: true
                            }
                        },

                        // DEFINISEM I KORISCENJE SASS LAODER-A

                        {
                            loader: "sass-loader",      // ZA PRODUCTION BI M ITREBALE I SOURCE MAPS
                            options: {sourceMap: true}
                        }

                    ]
                },

                {
                    // GORE SAM MATCH-OVAO SASS MODULE, A SADA DEFINISEM MATCHING FAJLOVA KOJI CE SAMO IMATI
                    // .scss ILI sass EKSTENZIJE

                    test: /\.s(a|c)ss$/i,
                    exclude:  /\.module\.s[ac]ss$/i,
                    use: [

                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"

                    ]


                }

            ]
            
        },

        // MEDJUTIM TU NIJE POSAO ZVRSEN, JER ZELIM DA KROS MiniCssExtractPlugi DEFINISEM LOADING
        // MODULA, ODNOSNO KADA SE SCCSS TRANSPILE-UJE U CSS, JA NE ZELIM, SAMO JEDAN CSS FAJL, VEC
        // ZELIM DA CSS CODE BUDE CHUNKED (NAIME AKO KORISTIM SASS KROZ RAZLICITE .scss FAJLOVE
        // ZASTO I CSS CODE NE BI, NA KRAJU BIO LOADED) (PREDPOSTAVLJAM DA MI TAKVA SITUACIJA TREBA)

        // ALI AK OKORISTIM CSS KOJI

        // SVE POMENUTO MOGU RESITI, KROZ NEKOLIKO POSTAVKI ZA          MiniCssExtractPlugin

        plugins: [
            new HtmlWebpackPlugin(),
            new MiniCssExtractPlugin({
                // DAKLE DEFINISEWM FILENAME I CHUNK FILENAME KOJI CE SE SASTOJATI I OD HASH-A (HEX STRING-A)
                filename: "[name].[hash].css",

                // DEFINISEM I CHUNK FILENAME, KOJE CE SE SASTOJATI OD ID-JA I OD HEX-A
                chunkFilename: "[id].[hash].css"

            }),

            new HtmlWebpackPlugin({  // PROVIDING FALLBACK PAGE (OD RANIJE)
                filename: "fallback_offline.html",
                chunks: ["fallback_offline"],
                template: 'src/templates/fallback_offline.html',
            }),
        ],

        // POTREBNO JE DEFINISATI I RESOLVEMENT FAJLOVA KOJIO IMAJU SASS EKSTENZIJE
        // AL INE ZABORAVI DA SE PO DEFAULT-U RESOLVE-OVAO JAVASCRIPT (E SADA I TO MORAS EKSPLICITNO DEFINISATI)


        resolve: {
            extensions: ['.js', '.sass', '.scss']
        }


    }
}