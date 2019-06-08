// import pwaFunc from './pwa';
import './index.css';
// import './header.css';



// pwaFunc();

const root = document.querySelector('#app')
const layoutHtml = `
    <header>
    <nav></nav>
        <section>
            <div></div>
        </section>
    </header>
    <main></main>
    <footer></footer>
`;

root.innerHTML = layoutHtml;

const background_animation = import('./background_animation');





