export default () => {

    let resolvement;

    const prom = new Promise((resolve, reject) => {

        resolvement = resolve;

    })

    if('serviceWorker' in window.navigator){

        window.addEventListener('load', async e => {

            let registration = await window.navigator.serviceWorker.register('service-worker.js')
            
            console.log('**Service Worker is registered**', registration)

            resolvement(registration)

        })

    }


    return prom;


}