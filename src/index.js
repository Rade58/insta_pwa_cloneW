// import pwaFunc from './pwa';
import './index.css';
import './header.css';
// import './header.css';



// pwaFunc();

const root = document.querySelector('#app')
const layoutHtml = `
    <header>
    <nav></nav>
        <section class="heder_animation">
            <div id="bAnim"></div>
            <div class="overlap">
                <h1>Rade, Web Developer from Belgrade, turning coffee into software, since 2019.</h1>
            </div>
            <div class="crossed-card">
                <a href="https://github.com/Rade58">github</a>
            </div>
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





