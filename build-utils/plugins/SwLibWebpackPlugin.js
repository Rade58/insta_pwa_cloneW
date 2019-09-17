// --------- RAZMATRAM DA LI DA KORISTIM DVA SLEDECA MODULA

// MEMORY FILE SYSTEM               I               ENHANCED RESOLVE

// OBA MODULA STAVLJENA U node_modules PRILIKOM INSTLACIJE WEBPACK-A  (I enhanced RESOLVE I MEMORY FILESYSTEM)
 
const MemoryFileSystem = require('memory-fs');
const enhResolve = require('enhanced-resolve');

/////////////////////////////
// RAZMATRAM I DA LI CU KORISTI     webpack-sources

const webpackSources = require('webpack-sources');

///////////////////////////

// NISTA OD POMENUTIH MODULA NISAM KORISTIO OVDE, NEKE ZBOG NEDOSTATKA DOKUMENTACIJE, A NEKE JER NISAM IMAO VREMENA
// DA SE BOLJE UPOZNAM SA NJIMA, JER SAM SE UPOZNAVA OSA NEKIN NATIVNIM Node.js MODULIMA

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

                            // ************         DAKLE DO FAJLOVA (NEMOJ DA POKUSAVAS DA RESOLVE-UJES PATH DO FOLDER-A)

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


       //                   require.resolve()         ********SA NJIM MORAM PAZITI*******

//  *****      JEDAN JEDINI ARGUMENT MU JE NEOPHODAN

//    ------  ILI   RELATIVNI PATH DO FAJLA KOJI ZELIM DA RESOLVE-UJEM ILI (I TO UZ KORISCENJE      ./      ILI ..//)
//                      

//                ****       OBRATI PAZNJU DA JE RELATIVAN NA      FAJL   IZ    KOJEG SE POZIVA       require.resolve     ****


//    ------  ILI  APSOLUTNI PATH FAJLA


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


// OVDE CU UVESTIT I NEKE UOBICAJENO KORISCENE NODE MODULE

const path = require('path');

//   DA NA POMENEM CEMU SLUZI SLEDECA METODA

                            path.join 

// JER PREDPOSTAVLJAM DA USPESNO SPAJA OVAKVA DVA PATHA /blahtwo/blahtwo/    ./src/blah.js
// ODNOSNO DA HANDLE-UJE   /
// ODNOSNO DA NE SPOJI OVAKO NESTO          /blah       folder/blah.js   KAO      /blahfolder/blah.js
// ODNOSNO DA NE SPOJI NESTAVLJAJUCI '/' IZMEDJU PATH-OVA

// TAKODJE OVO MOZE RESITI I OVAKAV PROBLEM

//                          C:\BLAH\TRALA\LALA\                     public/src/fajl.js
//   ODNOSNO PROBLEM JE U FORMIRANJU PATHA OD ONOG SA       BACKSLAH-EVIMA      I           ONAOG SA SLASHEVIMA
//      ODNSON ODA NE IZMESA     BACKLASH-EVE       I       SLASH-EVE       U JEDNOM PATH-U
// POMENUTO SE 

// POMENUTO SE ZOVE             NORMALIZATION           A ZA STA, POSTOJI I ODVOJENA METODA

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
////  ************************                                          ILI NIJE (DAKLE MOGU S NJIM PROVERITI I POSTOJANJ FOLDERA)

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

// DAKLE ONAJ LEVI DEO MORA BITI BLIZI ROOT DIRKETORIJUMU OS-A, NEGO ONAJ DESNI, NARAVNO MOGU ZADATI KOLIKO HOCU,
// STRING-OVA, I AKO SE PATH PRONADJE OD TIH TAKVIH STRING-OVA (POSTUJUCI TAJ OD DESNA NA LEVO 'PRINCIP' DODAVANJA ARGUMENATA)

// AKO SE USPESNO RESOLVE-UJE, APSOLUTE PATH CE BITI POVRATNA VREDNOST



// DODAJEM I OVAJ DOBROPOZNATI MODUL, NA KOJI CU PRIMENITI METODU       readdirSync     KAKO BI PROCITAO IMENA FAJLOVA U NKOM FOLDER-U

//////
const fs = require('fs')
/////



// KONACNO DEKLARISEM, MOJ PLUGIN



class SwLibWebpackPlugin {

        // U SUSTINI, ZELIM DA SE PRILIKOM INSTANTICIRANJA PLUGIN-A, NJEMU KAO ARGUMENTI DODAJU
        //      - RELATIVE PATH FOLDER-A (MNOZINA) (ZA BIBLIOTEKU I UTILIT),
        //      U KOJIM SE NALAZE BIBLIOTEKE ZA SERVICE WORKER-A (SOURCE FOLDER) (A PORED BIBLIOTEKA, U DRUGOM FOLDER-U UTILITY FUNKCIJE (KOJE MOZDA I KORISTE CODE BIBLIOTEKA))
        //      (TAKVE FOLDERE DAKLE ZELIM DA FORMIRAM I U DESTINATION FOLDER-U)

        //      - PORED OVA DVA TU CE BITI I PATH SERVICE WORKER FAJL-A
        //        (TOJ JE NJEGOV PATH, POD KOJIM JE GENERISAN) (CISTO DA NAPOMENEM, KORINKIK NE TREBA DA SPECIFICIRA PATH OVAKO
        //                      DAKLE NE OVAKO :    dist/service-worker.js)
        //                                                  // VEC SAMO         service-worker.js
        //                                                                                              ILI NEKO DRUGO IME
            //                                                                                          ZAVISI OD NJEGA STA JE ZADAO

                        // JA UZ POMOC SERVICE WORKER-A KORISTIM



    // KAKO BI SVE TO BOLJE SHVATIO POGLEDAJ I KAKO MOZES DA INSTATICIRAS   OVAJ PLUGIN      plugins: [
                                        /*                                                        new SwLibWebpackPlugin({
                                                                                                    srcLib: 'src/pwa_rel/sw_libraries',
                                                                                                    srcUtil: 'src/pwa_rel/sw_utility',
                                                                                                    swDest:'service-worker.js',
                                                                                                    mode: "development"
                                                                                                })
                                                                                            ]
        */


    constructor({srcLib, srcUtil, swDest, mode}){
        
        this.libFolderRelativePath = srcLib;
        this.utilityFolderRelativePath = srcUtil;
        this.swPathInDist = swDest;                       // SERVICE WORKER TREBA DA BUDE ON TOP LEVEL U DIST-U
                                                                // TAK ODA CE OVO NAJCESCE BITI     service-worker.js       IL sw.js
                                                                // NEMA DODATNIH FOLDR-A U KOJE BI BIO STAVLJEN SERVICE WORKER
                                                                // TREBA DA IMAM NA UMU DA REFERENCU IMAENA
                                                                // ONOG SERVICE WORKER-A KOJE GENERISEM
                                                                // WORKBOX-OM, TREBA DA OVDE BUDE REFERENCED
                                                                // OVO GOVORIM JER SAM SW GENRISAO UZ POC WORKBOX-A
                                                                // PRILIKO MTESTIRANJ-A
        
        // PORED SVEGA ZELIM DA SERVICE WORKERU INSERT-UJEM I WEBPAC-OV mode
        this.mode = mode;
                                                                
    }

    apply(compiler){

        // const fsMem = new MemoryFileSystem(); // OVO SE MORA INSTATICIRATI DA BI SE ONDA NAD INSTANCOM KORISTILE RAZNE METODE
                                                 // ALI KAO STO SAM REKAO, MENI NECE TREBATI

        
        // OVAJ HOOK SE IZVRSAVA (ODNOSNO TRIGGER-UJE) PRE SAMOG EMITOVANJA (TO ZNACI DA CE SVI ASSET-I BITI DOSTUPNI ZA MOJE MANIPULISANJE)
        compiler.hooks.emit.tapAsync('SwLibWebpackPlugin', (compilation, callback) =>{      // NE ZABORAVI DA UVEK DODAS
                                                                                            // callback PARAMETAR
                                                                                            // KOD tapAsync
                                                                                            // BEZ OBZIRA STA SI NASAO HOOK-OVA
                                                                                            // U CODEBASE-U
                                                                                            // POZIVAS GA NA KRAJU
                                                                                            // DA BI SE BUILD FINALIZIRAO (PREDPOSTAVLJAM)
            
            // JA DAKLE ZELIM DA UZMEM serviceworker FAJL IZ ASSET-A,  IDA MU DODAM NOVI CODE

            // KONKRETNO insertScript() NA POCETKU, SA PATH-OVIMA DO ONIH FAJLOVA KOJE TREBAM DA DODAM KAO ASSETS
            // BIBLIOTEKA, I UTILITY-JA

            
            // DA SADA KONACNO SKRATIM PRICU I ODPOCNEM SA DEFINISANJEM CODE-A


            const relAbsFilePathsAndScriptPartLib = {};
            
            const relAbsFilePathsAndScriptPartUtil = {};

            let serviceWorkerSourceCode;

            let serviceWorkerSourceCodeSize;


            // U SUSTINI PRVO ZELI MDA PRONADJEM importScripts KOJI JE POZVAN POSLEDJI U CODE-U
            // KORISNIK BI TREBALO DA JE POZVAO impsotScripts NA POCETKU SVOG SERVICE WORKER-A

            // STO SE TICE WORKBOX-A, ODNOSNO InjectManifest; importScripts() ZA PRECACHE MANIFEST FAJL I ZA
            // WORKBOX LIBRARY, TREBA DA SE NLAZI NA SAMOM VRHU

            if(this.swPathInDist && typeof this.swPathInDist === "string"){


                const findLastIndex_of_insertScripts = (stringifiedCodebase) => {

                    let regExp = /importScripts\(.+\)(;?\n?)/ig;
    
                    let result;
    
                    let lastResult;
    
                    while(result = regExp.exec(stringifiedCodebase)){
    
                        lastResult = result;
    
                    }
    
                    const lastIndex = lastResult.index + lastResult[0].length;
                    
                    return lastIndex;
                }

                // CITAM CODE IZ SERVICE WORKERA, SAMO JEDNOM NA POCETKU
                // PRIMETIO SAM DA AKO VISE PUTA CITAM I REDEFINISEM STRINGIFIED CODE NEKOG FAJLA
                // DA DOLAZI DO ERROR-A (ZATO GA CITAM NA POCETKU I KORISTICU STRING TOKOM CELOG OBIMA)

                serviceWorkerSourceCode = compilation.assets[this.swPathInDist].source();

                serviceWorkerSourceCodeSize = serviceWorkerSourceCode.length;

                let lastIndex = findLastIndex_of_insertScripts(serviceWorkerSourceCode)


                try{

                    // KAO STO SAM REKAO, PRVO ZELIM DA DEFINISEM DA SE WEBPACK-OV MODE INSERT-UJE U SERVICE WORKER THRED
                    // NARAVNO ZA POCETAK SAM ORADI MSA STRINGOM, KOJEG SAM DOBIO
                    // A KADA SVE OBAVIM, ODNOSNO DODAM SVASTA U TAJ STRING SERVICE WORKER CODEBASE-A, JA CU GA ONDA
                    // 'REASSIGN-OVATI' SERVICE serviceWorkerSourceCode, ODNOSNO UPISACU GA NAZAD U SERVICE WORKER FAJL

                    if(this.mode && typeof this.mode === "string"){

                        const insertModeString = mode => {
        
                            if(mode === "development"){
                        
                                return `self.__webpackMode = "development";\n`; 
                        
                            }
                            
                            if(mode === "production"){
                        
                                return `self.__webpackMode = "production";\n`; 
                        
                            }
                        
                            if(mode === "none" || mode === undefined){
                        
                                return `\n`;
                            }
                        
                        }
    
    
                        let modeCodeString = insertModeString(this.mode);
    
                        let swSourceCodeSlicePart1 = serviceWorkerSourceCode.slice(0, lastIndex);
                        let swSourceCodeSlicePart2 = serviceWorkerSourceCode.slice(lastIndex, serviceWorkerSourceCodeSize);

                        serviceWorkerSourceCode = swSourceCodeSlicePart1 + modeCodeString + swSourceCodeSlicePart2;
                        serviceWorkerSourceCodeSize = serviceWorkerSourceCode.length;
    
                    }


                    const projectPath = path.resolve();
                    let utilPath = this.utilityFolderRelativePath;
    
                    if(utilPath){
    
                        const absoluteUtilPath = path.join(projectPath, this.utilityFolderRelativePath);
    
                        const filenamesArrayUtil = fs.readdirSync(absoluteUtilPath);    // SADA CITAM SVE FAJLOVE IZ JEDNOG DIREKTORIJUMA

                                                                                        // DA BIH KROZ SVE TA IMANA FAJLOVA LOOP-OVAO
    
                        for(let filenameUtil of filenamesArrayUtil){
    
                            let relativePathUtil = path.join(
                                
                                path.basename(this.utilityFolderRelativePath),          // UZECE SAMO ONO POSLEDNJE OD PATHA   (BASENAME)  (POSLEDNJI FOLDER)
                                                                                    // (NAIME AKO JE '/foo/bar'  ONDA CE RETURNED BITI   'bar'   )
                                                                                    // OVO RADIM DA BI U dist FOLDERU IMAO PATH GDE CE BITI sw UTILITY
                                filenameUtil                                            // SAMO DUBOKO U JEDNOM FOLDERU U dist-u                                 
                            );
    
                            

                            let absUtil = require.resolve(                           //FORMIRAM APSOLUTNI PATH TRENUTNOG FAJLA
                                        
                                path.join(absoluteUtilPath, filenameUtil)
    
                            )


                            let scriptPart = `importScripts("${relativePathUtil.replace(/\\/ig, '/')}");\n`;

                            let scriptPartLength = scriptPart.length;
                                
                            relAbsFilePathsAndScriptPartUtil[relativePathUtil] =  {    // GORNJI PATH ZADAJEM KAO IME PROPERTIJA JEDNOG OD GORE DEKLARISANIH OBJEKATA
                                                                                            // OVAJ JE 'UTILITY RELATED'
                                absUtil,
    
                                scriptPart,       // ZADAJEM ONO STO CE SE DODATI SERVICE WORKER-U
                                
                                scriptPartLength,

                                fileContent: fs.readFileSync(absUtil, {encoding: 'utf8'})       // OVO CE SE DODATI VAJLU KOJI CE BITI GENERISAN U sw_utility U dist FOLDER-U
    
                            }


                            compilation.assets[relativePathUtil.replace(/\\/, '/')] = {                 // PISEM NOVE FAJLOVE

                                source(){
    
                                    return relAbsFilePathsAndScriptPartUtil[relativePathUtil].fileContent
    
                                },
    
                                size(){
    
                                    return relAbsFilePathsAndScriptPartUtil[relativePathUtil].fileContent.length
                                }
    
                            }

                            // DODAJE STRING U KOJEM JE     `importScript(.....)`
                            // DA BI OVO TEK KASNIJE UPISAO U SERVICE WORKER FAJL

                            serviceWorkerSourceCode = relAbsFilePathsAndScriptPartUtil[relativePathUtil].scriptPart + serviceWorkerSourceCode;
                            serviceWorkerSourceCodeSize = serviceWorkerSourceCode.length + relAbsFilePathsAndScriptPartUtil[relativePathUtil].scriptPartLength;
    
                        }
    
    
                    }

                    // SVE ISTO STO SAM RADIO ZA UTILITY, RADIM I Z LIBRARY MOG SERVICE WORKER-A

                    let libPath = this.libFolderRelativePath

                    if(libPath){
    
                        const absoluteLibPath = path.join(projectPath, this.libFolderRelativePath);
                        const filenamesArrayLib = fs.readdirSync(absoluteLibPath);
    
                        for(let filename of filenamesArrayLib){
    
                            let relativePath = path.join(
                                path.basename(this.libFolderRelativePath),                                
                                filename                               
                            );
    
                            let abs = require.resolve(
                                path.join(absoluteLibPath, filename)
                            )

                            let scriptPart = `importScripts("${relativePath.replace(/\\/ig, '/')}");\n`;
                            let scriptPartLength = scriptPart.length;
    
                            relAbsFilePathsAndScriptPartLib[relativePath] =  {
                                abs,
                                scriptPart,
                                scriptPartLength,
                                fileContent: fs.readFileSync(abs, {encoding: 'utf8'}) 
                            }

                            compilation.assets[relativePath.replace(/\\/, '/')] = {
                                source(){    
                                    return relAbsFilePathsAndScriptPartLib[relativePath].fileContent
                                },
    
                                size(){
                                    return relAbsFilePathsAndScriptPartLib[relativePath].fileContent.length
                                }
    
                            }

                            serviceWorkerSourceCode = relAbsFilePathsAndScriptPartLib[relativePath].scriptPart + serviceWorkerSourceCode;
                            serviceWorkerSourceCodeSize = serviceWorkerSourceCode.length + relAbsFilePathsAndScriptPartLib[relativePath].scriptPartLength;

                        }
        
                    }

                    // KONACNO MOGU DA IZMENJENI STRINGIFIED CODE SERVICE WORKERA (STRINGIFIKOVANI CODE KOJI SADA SADRXI I importScript(....) ZA UTILITY I LIBRARY FAJLOVE)
                    // ZADA M SERVICE WORKER FAJLU
                    compilation.assets[this.swPathInDist].source = () => serviceWorkerSourceCode;
                    compilation.assets[this.swPathInDist].size = () => serviceWorkerSourceCodeSize;
                
                    
                }catch(err){

                    console.log(`****ERROR ${err}*****`)

                }


            
            }

            callback()

        })

    }
}



module.exports = SwLibWebpackPlugin;

// I TO BI BILO SVE STO SE TICE MOG PRVOG WEBPACK PLUGIN-A