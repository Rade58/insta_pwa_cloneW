import './prviSassFajl.scss';










import helpRoute from './1.src_help/help';

///
// import {buildBlahElement} from './blah_element';
///



import registerServiceWorker from './pwa_rel/service-worker-reg';

// CISTI DA NE DODJE DO NEDOUMICE, DOLE SI COMMENTED OUT CODE REGISTRACIJE SERVICE WORKER-A
/////////////////////////////////////////////////////////////////////////

// import './styles/practice.scss';





/////////////////////////////////////////////////////////////////////////











registerServiceWorker()
    .then(registration => {

        console.log(registration)

    })


///////////////////////////////////////CSS MODULI I SASS MODULI TEST/////////////////

// buildBlahElement();




//////////////////////////////////////////////////////////////////////////////////////

console.log('blah')

const root = document.querySelector('#app');


console.log({
    helpRoute
});

console.log({
    origin: window.location.origin
})


const anchor = document.createElement('a');
anchor.textContent = "help";
anchor.href = window.location.origin + "/" + "help.html";

root.append(anchor);

const button = document.createElement('button');
button.textContent = "to help";

button.addEventListener('click', e => {
    import('./utility/navigate' /* webpackPrefetch: true */ /* webpackChunkName: "navigate"*/ )
        .then(module => {
            let navFunk = module.default;

            navFunk('/help.html')
        })
})

root.append(button)