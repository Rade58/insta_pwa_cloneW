import './prviSassFajl.scss';

import helpRoute from './1.src_help/help';


import registerServiceWorker from './pwa_rel/service-worker-reg';

registerServiceWorker()
.then(registration => {

    console.log(registration)

})

console.log('blah')

const root = document.querySelector('#app');


console.log({helpRoute});

console.log({origin: window.location.origin})


const anchor = document.createElement('a');

anchor.textContent = "help";
anchor.href = window.location.origin + "/" + "help.html";

root.append(anchor);