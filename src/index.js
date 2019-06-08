// import pwaFunc from './pwa';
import './index.css';
// import './header.css';



// pwaFunc();

const root = document.querySelector('#app')
const layoutHtml = `
    <header>
    <nav></nav>
        <section class="heder_animation">
            <div></div>
        </section>
    </header>
    <main></main>
    <footer></footer>
`;

root.innerHTML = layoutHtml;

const background_header_animation = import('./header_background_animation')
.then(function(modul){
    modul.default(16, 14);
})





