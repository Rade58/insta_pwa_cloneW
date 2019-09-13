// ZA OVAJ PLUGIN ZELIM DA UPOTREBIM ENHNCED RESOLVER, A TAKODJE I MEMORY FILE SYSTEM
// PREDPOSTAVLJAM DA SU OBA MODULA STAVLJENA U node_modules PRILIKOM INSTLACIJE WEBPACK-A

const resolve = require('enhanced-resolve');
const MemoryFileSystem = require('memory-fs');

class SwLibWebpackPlugin {

    constructor(source, target, context){
        // KORISNIK MOG PLUGIN-A CE DA UNESE SOURCE PATH, ALI I TARGET PATH

        this.source = source;
        this.target = target;
        this.context = context.replace(/\\/ig, '/');
    }

    apply(compiler){

        const fs = new MemoryFileSystem()

        
        compiler.hooks.emit.tapAsync('SwLibWebpackPlugin', (compilation, callback) =>{

            resolve

            let err;
            let res;



            let a = require.resolve(this.context + this.source)

            fs

            this.source

            this.target

            __dirname;

            __filename;

            debugger;

            callback()

        })

    }
}

module.exports = SwLibWebpackPlugin;
