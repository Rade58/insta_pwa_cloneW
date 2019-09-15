export default () => {

    if('serviceWoker' in window.navigator){

        window.addEventListener('load', async e => {

            let registration = await window.navigator.serviceWorker.register('service-worker.js')
            
            console.log('**Service Worker is registered**', registration)


        })

    }

}