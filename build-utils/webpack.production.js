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

// ALI PSOTO JA RADIM 'ZESTOKI' COMPOSITION, JA USTVARI NECU KORISTITI GORE POMENUTO, KAKO BI USLOVNO
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

module.exports = (mode) => {        // ALI mode JE OVDE U SLUCAJU ONOGA STA JA ZELI MDA URADIM NEPOTREBAN JER
                                    // ZNAM DA JE OVO PRODUCTION KONFIGURACIJA I NE TREBAM NISTA CONTITIONALLY U ODNOSU NA
                                    // mode DEFINISATI
    // DAKLE TREBAM SAMO DA VODIM RACUNA
    // O TOME STA JA USTVARI ZELI MDA DEFINISEM ZA PRODUCTION A TICE SE SASS-A
    return {
        devtool: "source-map",
        output: {
            filename: 'bundle.js',
            chunkFilename: '[name]-lazy-load.js'
        },
        
        module: {
            rules: [
                {test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"]}
            ]
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new MiniCssExtractPlugin(),

            new HtmlWebpackPlugin({  // PROVIDING FALLBACK PAGE (OD RANIJE)
                filename: "fallback_offline.html",
                chunks: ["fallback_offline"],
                template: 'src/templates/fallback_offline.html',
            }),
        ]

    }
}