//  ENHNCED RESOLVE JE ASINHRON, ALI MOZE BITI I SINHRON
// SAMO CU PRIKAZATI KAKO FUNKCIONISE
const enhResolve = require('enhanced-resolve');

__dirname // U OVOM SLUCAJU JE TACAN PATH DO OVOG FAJLA, U KOJEM SADA PISEM 

// VIDIS KAKO JE ASINHRON, JER IMA CALLBACK
// 
            enhResolve(__dirname, "/pathblah/fajl.md", (err, resulr) => {})             // result BI BIO RESOLVED PATH (CEO PATH)

// OVDE JE SINHRON
//
            //    enhResolve.sync(__dirname, "/pathblah/fajl.md")


// OVDE SE MOGU DOTACI TOGA STA JE UOPSTE RESOLVMENT NEKOG MODULA
// PA NA OSNOVU PATH-A, NEKAD CELOG NEKAD PARCIJALNOG (MEDJUTIM CINI MI SE DA SAM UVEK MORAO KORISTITI CEO PATH)

// KOD GORNJEG RESOLVE-A   FAJL JE ZAISTA MORAO POSTOJATI NA PATHU KOJI BI CINILI      __dirname + "pathblah/fajl.md"

// A TAKODJE TREBALO BI DA KORISTIM MEMORY FILE SYSTEM

// OBA MODULA STAVLJENA U node_modules PRILIKOM INSTLACIJE WEBPACK-A  (I enhanced RESOLVE I MEMORY FILESYSTEM)
 
const MemoryFileSystem = require('memory-fs');

// ONO STO JOS ZELIM DA IMAM JESTW I webpack-sources PAKET

//
const path = require('path')
// ZELIM DA KORISTITM 

                            path.join 

// JER PREDPOSTAVLJAM DA USPESNO SPAJA OVAKVA DVA PATHA /blahtwo/blahtwo/    ./src/blah.js
// ODNOSNO DA HANDLE-UJE   /   IL IDA NE SPOJI OVAKO NESTI          /blah       folder/blah.js
// MISLIM DA NE SPOJ INESTAVLJAJU CI / IZMEDJU PATH-OVA

// TAKODJE OVO MOZE RESITI I OVAKAV PROBLEM

//                          C:\BLAH\TRALA\LALA\                     public/src/fajl.js
//   ODNOSNO PROBLEM JE U FORMIRANJU PATHA OD ONOG SA  BACKSLAH-EVIMA I ONAOG SA SLASHEVIMA



class SwLibWebpackPlugin {

    // U SUSTINI, ZELIM DA SE PRILIKOM INSTANTICIRANJA PLUGIN-A, NJEMU KAO ARGUMENTI DODAJU
    // PATH FOLDER-A

            // ROOT DIRECTORY PROJEKTA

    constructor(source, targetDir, context, sourceDir, projectPath){
        // KORISNIK MOG PLUGIN-A CE DA UNESE SOURCE PATH, ALI I TARGET PATH

        this.source = source;
        this.targetDir = targetDir;
        this.context = context;                 //.replace(/\\/ig, '/');    // OVO SAM KORISTIO KADA NISAM ZNAO DA
                                                // POMENUTO NE MORAM RADITI UZ KORISCENJE      path.join
        this.souceDir = sourceDir;
        this.projectPath = projectPath;
    }

    apply(compiler){

        const fs = new MemoryFileSystem()       // OVO SE MORA INSTATICIRATI DA BI SE ONDA NAD INSTANCOM KORISTILE RAZNE METODE

        


        // OVAJ HOOK SE IZVRSAVA PRE SAMOG EMITOVANJA 
        compiler.hooks.emit.tapAsync('SwLibWebpackPlugin', (compilation, callback) =>{      // NE ZABORAVI DA UVEK DODAS
                                                                                            // callback PARAMETAR
                                                                                            // KOD tapAsync
                                                                                            // BEZ OBZIRA STA SI NASAO HOOK-OVA
                                                                                            // U CODEBASE-U
            

            // JA DAKLE ZELI MDA UZMEM serviceworker FAJL IZ ASSET-A,  IDA MU DODAM NOVI CODE

            // KONKRETNO insertScript() NA POCETKU, SA PATH-OVIMA DO ONIH FAJLOVA KOJE TREBAM DA DODAM KAO ASSETS

            // CITANJE SVIH FAJLOV IZ JEDNOG PROVIDED FOLDER-A
            
            let sourcePathNormalized = path.normalize(this.source);

            
            let sourceResolved = path.resolve(sourcePathNormalized);
            let contextResolved = path.resolve(this.context);
            let targetDirResolved = path.resolve(this.targetDir);
            let sourceDirResolved = path.resolve(this.souceDir);


            debugger;

            let syncResolvedSource = enhResolve.sync(this.projectPath, sourcePathNormalized)
            // .then(res => {debugger}).catch(err => {debugger})


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
