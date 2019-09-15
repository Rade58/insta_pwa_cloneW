const dbPromise = idb.open('news-store', 2, function(db){

    if(!db.objectStoreNames.contains('posts')){
        db.createObjectStore('posts', {keyPath: 'id'})
    }

    // NAZVACU NOVI STORE:   sync-posts
    if(!db.objectStoreNames.contains('sync-posts')){
        db.createObjectStore('sync-posts', {keyPath: 'id'/* , autoIncrement: true */});   // ISTO CE POSTOJATI id PROPERTI, KOJI UNIQUELY
    }

})

const writeData = function(storeName, data, key){
    return dbPromise.then(function(db){
        let transaction = db.transaction(storeName, 'readwrite');
        let store = transaction.objectStore(storeName);
        if(key) {store.put(data[key])} else {store.put(data)}
        return transaction.complete;
    })
}

const readAllData = function(storeName){
    return dbPromise.then(function(db){
        let transaction = db.transaction(storeName, 'readonly');
        let store = transaction.objectStore(storeName);
        return store.getAll();
    })
}

const clearAllData = function(storeName){
    return dbPromise.then(function(db){
        let transaction = db.transaction(storeName, 'readwrite');
        let store = transaction.objectStore(storeName);
        store.clear();
        return transaction.complete;
    })
}


// OVDE CU DEFINISATI NOVE FUNKCIJE, I OPET IMAJ NA UMU DA MORAS RETURN-OVATI transaction.complete
// ONDA KADA WRITE-UJES U DATABASE I DA NE MORAS NISTA RETURN-OVATI KADA CITAS IY DATABASE-A

const deleteItemFromData = function(storeName, itemId){

    return dbPromise.then(function(db){

        let transaction = db.transaction(storeName, 'readwrite');

        let store = transaction.objectStore(storeName);

        store.delete(itemId);

        return transaction.complete;
    })
}

const getItemFromData = function(storeName, itemId){

    return dbPromise.then(function(db){

        let transaction = db.transaction(storeName, 'read');

        let store = transaction.objectStore(storeName);

        return store.get(itemId);

    })
}


// Base64 TO Unit8 Array

function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
  
    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);
  
    for (var i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

// Dat URI TO Blob

  function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    var blob = new Blob([ab], {type: mimeString});
    return blob;
  }