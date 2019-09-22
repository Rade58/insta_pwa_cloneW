const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({

    // NEMOJ DA IMAS MULTIPLE FOLDER-E ZA TVOJE PAGE-OVE, IMACES SAMO PROBLEME (PO MOJOJ PROCENI)
    // JER MOGUCE JE DA POGRESIS NEKE LINK TAGOVE I SLICNO
    // BOLJE JE DA SVE U DESTITNATION FOLDERU BUDE NA ISTOM NIVOU (OVO CISTO GOVORIM ZBOG HTML-A)

    //NA PRIMER DOLE SI SVUGDE IMAO help/help; A SADA SAM PROMENIO NA HELP

    entry: {
        "index": './src/index.js',
        /*"help/help*"*/"help": './src/1.src_help/help.js'
    },
    output: {
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({                 
            filename: "index.html",            
            chunks: ["index"],
            template: 'src/templates/template.html', 
        }),
        new HtmlWebpackPlugin({
            filename: "help.html",  // OVDE JE RANIJE BILO help/help.html
            chunks: ["help"],   // OVDE JE RANIJE BILO help/help
            template: 'src/templates/template.html',
        })            
                    
    ],

})

// IT CAN BE USED WITH BOTH, dev OR prod