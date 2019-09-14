// --------- RAZMATRAM DA LI DA KORISTIM DVA SLEDECA MODULA

// MEMORY FILE SYSTEM               I               ENHANCED RESOLVE

// OBA MODULA STAVLJENA U node_modules PRILIKOM INSTLACIJE WEBPACK-A  (I enhanced RESOLVE I MEMORY FILESYSTEM)
 
const MemoryFileSystem = require('memory-fs');
const enhResolve = require('enhanced-resolve');

/////////////////////////////
// RAZMATRAM I DA LI CU KORISTI     webpack-sources

const webpackSources = require('webpack-sources');

///////////////////////////

//  ENHNCED RESOLVE JE ASINHRON, ALI MOZE BITI I SINHRON
// SAMO CU PRIKAZATI KAKO FUNKCIONIS

__dirname // U OVOM SLUCAJU JE TACAN PATH DO OVOG FAJLA, U KOJEM SADA PISEM (ONO JE UVEK TO, NEMOJ DA SE
            // ZANOSIS PA DA WRAPP-UJES KAO RETURNED VALUE FUNKCIJE, JER BEZ OBZIRA GDE GA POZOVES VRACA
            // __dirname TRENUTNOG FAJLA)

// VIDIS KAKO JE U OVOM SLUCAJU ENHANCED RESOLVE ASINHRON, JER IMA CALLBACK
// 
            //enhResolve(__dirname, "/pathblah/fajl.md", (err, resulr) => {})             
            
                                                            // result BI BIO RESOLVED PATH (CEO PATH)

// OVDE JE SINHRON
//
            //    enhResolve.sync(__dirname, "/pathblah/fajl.md")


            // MEDJUTIM NISAM NIKAKO USPEO DA POSTIGNEM DA MI PRORADI GORNJI RESOLVER

            // A KOLIKO VIDIM, IMA JAKO LOSU DOKUMENTACIJU, A NE MOGU NI DA NADJEM SIMPLE WORKING EXAMPLES

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// OVDE SE MOGU DOTACI TOGA STA JE UOPSTE RESOLVMENT NEKOG MODULA
// PA NA OSNOVU PARCIJALNOG PATH-A, RESOLVER MOZE PROVERITI DA LI JE FAJL ILI FOLDER U MOJOJ MEMORIJI NA MOM RACUNARU

/////////////////////////////////////////////////////////////////////////////////////////////////////

            require.resolve                 // ON SLUZI SAMO ZA PATH DO FAJLOVA

                            // ************         DAKLE DO FAJLOVA

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


       //                   require.resolve()         ********SA NJIM MORAM PAZITI*******

//  *****      JEDAN JEDINI ARGUMENT MU JE NEOPHODAN

//    ------  ILI   RELATIVNI PATH DO FAJLA KOJI ZELIM DA RESOLVE-UJEM ILI
//                      

//                ****       OBRATI PAZNJU DA JE RELATIVAN NA      FAJL   IZ    KOJEG SE POZIVA       require.resolve     ****


//    ------  ILI  APSOLUTNI PATH


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


// OVDE CU UVESTIT I NEKE UOBICAJENO KORISCENE NODE MODULE

const path = require('path');

//   DA NA POMENEM CEMU SLUZI SLEDECA METODA

                            path.join 

// JER PREDPOSTAVLJAM DA USPESNO SPAJA OVAKVA DVA PATHA /blahtwo/blahtwo/    ./src/blah.js
// ODNOSNO DA HANDLE-UJE   /   IL IDA NE SPOJI OVAKO NESTI          /blah       folder/blah.js
// MISLIM DA NE SPOJ INESTAVLJAJU CI / IZMEDJU PATH-OVA

// TAKODJE OVO MOZE RESITI I OVAKAV PROBLEM

//                          C:\BLAH\TRALA\LALA\                     public/src/fajl.js
//   ODNOSNO PROBLEM JE U FORMIRANJU PATHA OD ONOG SA  BACKSLAH-EVIMA I ONAOG SA SLASHEVIMA


//////////////////          
                            path.normalize

// PORED TOGA STO CE SINTAKSU ISPRAVITI DA ONA BUDE PATH KOREKTNOG IZGLEDA IZBACIVAJUCI NEKE NEDOZVOLJENE I NEVALIDNE
// STVARI, TAKODJE CE

                        //          SVE SLASH-EVE       /           PRETVORITU U BACKSLASHEVE       \         U PATH-U

// STO MI MOZDA I TREBA U SLUCAJU WINDOWS-A (MOZDA ZA MAC OVA METODA RADI OBRNUTO)

// //////////////////////

            // PROBAO SAM I


////  ************************

// NEKA TI OVO BUDE KONACNO JASNO          require.resolve              RESOLVE-UJE SAMO PATH DO FAJL-A (DAKLE NIKADA MU NE ZADAJ
//                                                                          PATH DO FOLDER-A)

                                          //   path.resolve             RESOLVE-UJE PAT-H BEZ OBZIRA DA LI JE NA 'REPU' FAJL  
////  ************************

////////////////////////////////////////////////////////////////////////////////////////////////////

                    path.resolve('')
                                        //  ILI

                    path.resolve()                       // DAKEL KADA SE NE DODAJE NISTA ILI SE DODA STRING KOJI NIJE PATH

//  ------------     OVO MI RETURNUJE       ROOT DIRECTORY PROJEKTA (NE OS-A)
// ODNOSNO PREDPOSTAVLJAM OVO UVEK, RETURN-UJE DIREKTORIJUM KOJI JE DIREKTORIJUM U KOJEM SU
//              
//                          node_modules          I           package.json

// If no path segments are passed, path.resolve() will return the absolute path of the current working directory.


// OVOJ METODI SE MOZE DODATI SERIJA PATH-OVA
// I ONDA SE OD DESNA NA LEVO RESOLVUJ-E

// DAKLE DAKLE ONAJ LEVI DEO MORA BITI BLIZI ROOT DIRKETORIJUMU OS-A, NEGO ONAJ DESNI, NARAVNO MOGU ZADATI KOLIKO HOCU,
// STRING-OVA, I AKO SE PATH PRONADJE OD TIH TAKVIH STRING-OVA (POSTUJUCI TAJ OD DESNA NA LEVO 'PRINCIP' DODAVANJA ARGUMENATA)

// AKO SE USPESNO RESOLVE-UJE, APSOLUTE PATH CE BITI POVRATNA VREDNOST




//////
const fs = require('fs')
/////

class SwLibWebpackPlugin {

        // U SUSTINI, ZELIM DA SE PRILIKOM INSTANTICIRANJA PLUGIN-A, NJEMU KAO ARGUMENTI DODAJU
        // - RELATIVE PATH FOLDER-A, U KOJEM SE NALAZE BIBLIOTEKE ZA SERVICE WORKER-A 

    constructor(libFolderRelativePath, projectDirPath, projectDir){
        //DAKLE KORISNIK CE U SLUCAJU MOG PLUGIN-A MORATI DA UNESE TACAN PATH DO FOLDER-A
        // U KOJI JE STAVIO LIBRARIES, KOJE ZELI DA KORISTI U SERVICE WORKER-U

        this.libFolderRelativePath = libFolderRelativePath;
        
    }

    apply(compiler){

        const fsMem = new MemoryFileSystem(); // OVO SE MORA INSTATICIRATI DA BI SE ONDA NAD INSTANCOM KORISTILE RAZNE METODE

        
        // OVAJ HOOK SE IZVRSAVA PRE SAMOG EMITOVANJA 
        compiler.hooks.emit.tapAsync('SwLibWebpackPlugin', (compilation, callback) =>{      // NE ZABORAVI DA UVEK DODAS
                                                                                            // callback PARAMETAR
                                                                                            // KOD tapAsync
                                                                                            // BEZ OBZIRA STA SI NASAO HOOK-OVA
                                                                                            // U CODEBASE-U
                                                                                            // POZIVAS GA NA KRAJU
                                                                                            // DA BI SE BUILD FINALIZIRAO (PREDPOSTAVLJAM)
            

            // JA DAKLE ZELI MDA UZMEM serviceworker FAJL IZ ASSET-A,  IDA MU DODAM NOVI CODE

            // KONKRETNO insertScript() NA POCETKU, SA PATH-OVIMA DO ONIH FAJLOVA KOJE TREBAM DA DODAM KAO ASSETS

            const absFilePathsResolved = [];

            try{
            
                const projectPath = path.resolve();

                const dirname = __dirname;

                const absoluteLibPath = path.join(projectPath, this.libFolderRelativePath);

                debugger;

                const filenamesArray = fs.readdirSync(absoluteLibPath);

                debugger;

                for(let filename of filenamesArray){

                    absFilePathsResolved.push(

                        require.resolve(
                            
                            path.join(absoluteLibPath, filename)

                        )
                    
                    ); 

                }



            }catch(err){

                throw new Error(`SwLibWebpackPlugin ***** path problem*****${err}` );

            }

            // let libFolderRelativePathNormalized = path.normalize(this.libFolderRelativePath);
            
            // let blahPathResolved = path.resolve();

            // let resolvedLibFolderPath = path.resolve(libFolderRelativePathNormalized);

            // CITANJE SVIH FAJLOV IZ JEDNOG PROVIDED FOLDER-A
            // let libfilenames = fsMem.readdirSync()





            // let folderPathResolved = require.resolve(folderPathNormalized);

            // const readFilesFromPath = fs.readdirSync()


            debugger;

            callback()

        })

    }
}



module.exports = SwLibWebpackPlugin;