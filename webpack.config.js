const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const modeConfig = (mode, mapUsage) => require(`./build-utils/webpack.${mode}`)(mode, mapUsage); 
const addMergedPresetsConfigs = require('./build-utils/loadPresets');

/* const MyFirstWebpackPlugin = require('./build-utils/MyFirstWebpackPlugin'); */

module.exports = ({mode, presets} = {mode: "none", presets: []}) => {

    // STO SE TICE SOURCE MAPA, ODLUCIO SAM SE NA SLEDECI POTEZ
    // DEFINISACU OVDE VARIJABLU, KOJA CE PO POTREBI IMATI true ILI false
    // DAKLE MENJACU TO PO POTREBI

    // A U ODNSOU NA TU VARIJABLU, KOJU CU NARAVNO PROSLEDITI
    // ODLUCICE SE DA LI CE SE SORUCE MAP KORISTITI ILI NE

    let mapUsage = true;    // NE ZABOTRAVI DA GORE U modeConfig FUNKCIJI DAFINISES DA SE
                            // MODE CONFIGURACIJI PROSLEDJUJEI mapUsage

    // ISTO TAKO NEMOJ DA ZABORAVIS DA SI MOGAO IZABRATI RAZLICITE OPCIJE ZA SOURCE MAP-E
    // JER POSTOJE ONE POGODNE ZA DEVELOPMENT I ONE POGODNE ZA PRODUCTION

    // 'MEDJUTI MJA SA MODABRAO OVAKAV SIMPLISTIC PRISTUP ZA SADA'


    return webpackMerge(
        {
            /* optimization: {      //  ZABORAVI OSAM STA TACNO OVO RADI ALI ZA SADA MI I NIJE BITNO
                                    //  PROVERI OVDE (ZANEMARI SAD OVO)
                                               // https://webpack.js.org/plugins/split-chunks-plugin/#configuration
                splitChunks: {chunks: "all"}
            }, */
            mode,
            output: {
                filename: 'bundle.js'
            },
            plugins: [
                new webpack.ProgressPlugin(),
                /* new MyFirstWebpackPlugin(), */
            ],

            /* resolveLoader: { // NE OBRACAJ PAZNJU NA OVO, OVO SAM KORISTIO KADA SAM SE BAVIO PRAVLJANJEM 
                                    // MY OWN LAODER-A, ALI SAM OSTAVIO COMMENTED OUT CODE (NE SMETA)
                alias: {
                    // "my-loader": require.resolve('../my-loader.js')
                    // "my-loader": require.resolve('./build-utils/my-loader.js')
                }
        
            }, */

            module: {
                rules: [
                    {
                        test: /\.(jpe?g|png|svg)$/i,
                        use: [
                            {loader: "url-loader", options: {limit: 5000}},
                        ]
                    },
                    
                    
                ]
            }
        },
        modeConfig(mode, mapUsage),       // SADA U MODE CONFIG DODAJEM I INFO O map-I (DA LI JE KORISTITI ILI NE)
                                            // I SADA OSTAJE DA DEFINISEM KAKO DA SE UPOTREBI POMENUTI mapUsage ARGUMENT
                                            // U MODE KONFIGURACIJI
        addMergedPresetsConfigs({presets, mode})
    )
}