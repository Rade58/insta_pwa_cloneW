// import pwaFunc from './pwa';
import './index.css';
// import './header.css';



// pwaFunc();

const root = document.querySelector('#app')
const layoutHtml = `
    <header>
    <nav></nav>
        <section class="heder_animation">
            <div id="bAnim"></div>
            <div class="overlap">Award winning web design and development company located in Belgrade.</div>
        </section>
    </header>
    <main></main>
    <footer></footer>
`;

root.innerHTML = layoutHtml;

const background_header_animation = 
import(/* webpackChunkName: "headerBimageAnim" */
    /* webpackMode: "lazy" */
    /* webpackPrefetch: true */
    './header_background_animation'
)
.then(function(modul){
    modul.default(30, 30);
})





