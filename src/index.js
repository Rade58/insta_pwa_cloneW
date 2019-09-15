// import pwaFunc from './pwa';
import './index.css';
import './header.css';
import './for_copy/captainicon.css';
import './nav.css';
// import './header.css';

import registerServiceWorker from './pwa_rel/service-worker-reg';



// pwaFunc();

const root = document.querySelector('#app')
const layoutHtml = `
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

root.innerHTML = layoutHtml;

const background_header_animation = 
//                import(/* webpackChunkName: "headerBimageAnim" */
//                    /* webpackMode: "lazy" */
//                    /* webpackPrefetch: true */
  //                  './header_background_animation'
    //            )
      //          .then(function(modul){
        //            modul.default(30, 30);
          //      })




registerServiceWorker();


