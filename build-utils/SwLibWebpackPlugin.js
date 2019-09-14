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

__dirname // U OVOM SLUCAJU JE TACAN PATH DO OVOG FAJLA, U KOJEM SADA PISEM 

// VIDIS KAKO JE ASINHRON, JER IMA CALLBACK
// 
            //enhResolve(__dirname, "/pathblah/fajl.md", (err, resulr) => {})             // result BI BIO RESOLVED PATH (CEO PATH)

// OVDE JE SINHRON
//
            //    enhResolve.sync(__dirname, "/pathblah/fajl.md")


            // MEDJUTIM NISAM NIKAKO USPEO DA POSTIGNEM DA MI PRORADI GORNJI RESOLVER

            // A KOLIKO VIDIM, IMA JAKO LOSU DOKUMENTACIJU, A NE MOGU NI DA NADJEM SIMPLE WORKING EXAMPLES

// ZATO CU KORISTII             require.resolve

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


// OVDE SE MOGU DOTACI TOGA STA JE UOPSTE RESOLVMENT NEKOG MODULA
// PA NA OSNOVU PARCIJALNOG PATH-A, RESOLVER MOZE PROVERITI DA LI JE FAJL ILI FOLDER U MOJOJ MEMORIJI NA MOM RACUNARU

            //      STO JE TICE         require.resolve()         ********SA NJIM MORAM PAZITI*******

// EVO ZASTO TO KAZEM

// ----                 AKO MU KAO ARGUMENT SAMO PATH DO NEKOG FOLDER-A

//-----------------                 BEZ OBZIRA DA LI TAJ FOLDER POSTOJI ILI NE OUTPUT-OVACE PATH

//-----------------                 ALI AKO DODADM PATH KOJI VODI DO FAJLA

// ---------                               - MOZE        THROW-OVATI ERROR   AKO FAJL NE POSTOJI
// ---------                               - MOZE        RETURN-OVATI        CEO APSOLUTNI PATH GDE SE NALAZI FAJL

// USTVARI PROCITAO SAM I OVO

                                    require.resolve

                                    //      USTVARI RESOLVE-UJE RELATIVNO OD ONOG FAJLA U KOJEM JE POZVANA


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


                        path.resolve('')
                                //  ILI

                        path.resolve()                       // DAKEL KADA SE NE DODAJE NISTA ILI SE DODA NEKOREKTAN PATH

//  ------------     OVO MI RETURNUJE       ROOT DIRECTORY PROJEKTA
// ODNOSNO PREDPOSTAVLJAM OVO UVEK, RETURN-UJE DIREKTORIJUM KOJI JE DIREKTORIJUM U KOJEM SU

// If no path segments are passed, path.resolve() will return the absolute path of the current working directory.


//                      node_modules            I           package.json

// OVOJ METODI SE MOZE DODATI SERIJA PATH-OVA, I ONDA SE OD DESNA NA LEVO RESOLVUJ-E
// DAKLE DAKLE ONAJ DESNI DEO MORA BITI BLIZI ROOT DIRKETORIJUMU OS-A, NEGO ONAJ LEVI, NARAVNO MOGU ZADATI KOLIKO HOCU,
// STRING-OVA, I AKO SE PATH PRONADJE OD TIH TAKVIH STRING-OVA (POSTUJUCI TAJ OD DESNA NA LEVO 'PRINCIP' DODAVANJA ARGUMENATA)

// AKO SE USPESNO RESOLVE-UJE, APSOLUTE PATH CE BITI POVRATNA VREDNOST 

class SwLibWebpackPlugin {

        // U SUSTINI, ZELIM DA SE PRILIKOM INSTANTICIRANJA PLUGIN-A, NJEMU KAO ARGUMENTI DODAJU
        // - RELATIVE PATH FOLDER-A, U KOJEM SE NALAZE BIBLIOTEKE ZA SERVICE WORKER-A 
        // - ROOT DIRECTORY PROJEKTA

    constructor(libFolderRelativePath, projectDirPath, projectDir){
        //DAKLE KORISNIK CE U SLUCAJU MOG PLUGIN-A MORATI DA UNESE TACAN PATH DO FOLDER-A
        // U KOJI JE STAVIO LIBRARIES, KOJE ZELI DA KORISTI U SERVICE WORKER-U

        this.libFolderRelativePath = libFolderRelativePath;

        // ONO STA NE MORAM DA URADIM JESTE OBEZBEDJIVANJE I ROOT DIRECTORY-JA PROJEKTA

        this.projectDirPath = projectDirPath;

        this.projectDir = projectDir;
        
    }

    apply(compiler){

        const fsBlah = new MemoryFileSystem(); // OVO SE MORA INSTATICIRATI DA BI SE ONDA NAD INSTANCOM KORISTILE RAZNE METODE

        
        // OVAJ HOOK SE IZVRSAVA PRE SAMOG EMITOVANJA 
        compiler.hooks.emit.tapAsync('SwLibWebpackPlugin', (compilation, callback) =>{      // NE ZABORAVI DA UVEK DODAS
                                                                                            // callback PARAMETAR
                                                                                            // KOD tapAsync
                                                                                            // BEZ OBZIRA STA SI NASAO HOOK-OVA
                                                                                            // U CODEBASE-U
            

            // JA DAKLE ZELI MDA UZMEM serviceworker FAJL IZ ASSET-A,  IDA MU DODAM NOVI CODE

            // KONKRETNO insertScript() NA POCETKU, SA PATH-OVIMA DO ONIH FAJLOVA KOJE TREBAM DA DODAM KAO ASSETS

            // CITANJE SVIH FAJLOV IZ JEDNOG PROVIDED FOLDER-A
            
            let libFolderRelativePathNormalized = path.normalize(this.libFolderRelativePath);

            // let folderPathResolved = require.resolve(folderPathNormalized);

            // const readFilesFromPath = fs.readdirSync()


            debugger;

            callback()

        })

    }
}




module.exports = SwLibWebpackPlugin;