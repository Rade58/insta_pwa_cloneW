// NEM NIKAKVE UPOTREBE ESM-A; NE ZABORAVI DA OVO IDE U SERVICE WORKER

// ********

// MOJ NACIN DA OVERWRITE-UJEM PRECACHING MANIFEST TAKO STO IZBACUJEM SVE ONE ASSETE KOJI MATCHUJU PASSED IN PATTERNE
// DA LI JE OVO DOZVOLJEN ILI DOBAR NACIN, OSTAJE DA PROVERIM
// PRIMETIO SAM DA SVE FUNKCIONISE KADA KORISTIM OVU FUNKCIJU, ODNOSNO FAJLOVI KOJI ODGOVARAJU PATTERN-U NISU PRECACHED
const makeManifestWithoutIgnoresAndInsertToSelf = (...patterns) => {

    let tempManifest = [].concat(self.__precacheManifest);
    let outputManifest = [];

    for(let pattern of patterns){

        // MORA BITI PRAZAN NA POCETKU LOOPING-A PATTERN-A
        // DA MU KASNIJE NE BI PUSH-OVAO DUPLE FAJLOVE
        outputManifest = [];

        if(!(pattern instanceof RegExp)) throw new TypeError(`${pattern} is not type of RegExp`)
    
        for(let asset of tempManifest){    

            if(pattern.test(asset.url)){
                continue;
            }

            outputManifest.push(asset)
        }

        // OVAKO OSIGURAVAM DA NE PROVERAVAM OPET SA DRUGIM REGEXP-OM ONE
        // VEC IZBACENE 
        // JER SU ONI VEC IZBACENI

        tempManifest = outputManifest;
        
    }

    self.__precacheManifest = outputManifest;

    return outputManifest;

}


// ********