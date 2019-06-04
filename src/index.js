import pwaFunc from './pwa';
import './index.css';
import header_image from './images/header_image.jpg';


pwaFunc();

const root = document.querySelector('#app')
const layoutHtml = `
    <header>
        <section>
            <div class="overlay"></div>
            <img>
        </section>
        <nav></nav>
    </header>
    <main></main>
    <footer></footer>
`;

root.innerHTML = layoutHtml;

console.log(header_image);

document.querySelector('header img').src = header_image;