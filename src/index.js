// import pwaFunc from './pwa';
// import './index.css';
// import './header.css';
// import './for_copy/captainicon.css';
// import './nav.css';
// import './header.css';

import './prviSassFajl.scss';
import './blah.module.scss';

import registerServiceWorker from './pwa_rel/service-worker-reg';

registerServiceWorker()
.then(registration => {

    console.log(registration)

})

console.log('blah')


// pwaFunc();

const root = document.querySelector('#app');

/* const subRoot1 = document.createElement('div');
const subRoot2 = document.createElement('div');

subRoot1.className = "subroot1";
subRoot2.className = "subroot2"; */



const aside = document.createElement('aside');

const main = document.createElement('main');
const buttonBlah = document.createElement('button');

root.append(buttonBlah);

root.append(main);
root.append(aside);

let state = "blah";

buttonBlah.textContent = state;

buttonBlah.addEventListener('click', e => {

    

    let currentTarget = e.currentTarget;

    console.log(currentTarget);

    let body = document.body;

    if(state === "blah"){
        
        body.classList.remove('theme_dark');
        body.classList.add('theme_light');

        state = "trala";
        currentTarget.textContent = state;
    }else{

        body.classList.remove('theme_light');
        body.classList.add('theme_dark');
        
        state = "blah";
        currentTarget.textContent = state;
    }


})


/* const layoutHtml = `
    <nav>
        
        <div data-text="animated logo goes here"></div>
    
        <div><a href="#"></a></div>
        <div><a href="#"></a></div>
        <div><a href="#"></a></div>
    </nav>
    <header>
        <section class="heder_animation">
            <div id="bAnim"></div>
            <div class="overlap">
                <h1>Rade, Web Developer, turning coffee into software, with passion.</h1>
            </div>
            <div class="crossed-card">
                <a href="https://github.com/Rade58"><span class="captainicon icon-129"></span> <span class="material-icons md-48"></span></a>
            </div>
        </section>
    </header>
    <main></main>
    <footer></footer>
`;

root.innerHTML = layoutHtml; */

// const background_header_animation = 
//                import(/* webpackChunkName: "headerBimageAnim" */
//                    /* webpackMode: "lazy" */
//                    /* webpackPrefetch: true */
  //                  './header_background_animation'
    //            )
      //          .then(function(modul){
        //            modul.default(30, 30);
          //      })







