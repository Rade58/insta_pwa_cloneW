// import pwaFunc from './pwa';
import './index.css';
import image1 from './images/image_1.jpg';
import image2 from './images/image_2.jpg';
import image3 from './images/image_3.jpg';
import image4 from './images/image_4.jpg';
import image5 from './images/image_5.jpg';
import image6 from './images/image_6.jpg';
import image7 from './images/image_7.jpg';
import image8 from './images/image_8.jpg';

// pwaFunc();

const root = document.querySelector('#app')
const layoutHtml = `
    <header>
        <section>
            <!--<div class="overlay"></div>-->
            <div class="header_background"></div>
        </section>
        <nav></nav>
    </header>
    <main></main>
    <footer></footer>
`;

root.innerHTML = layoutHtml;

console.log(image1);
console.log(image2);
console.log(image3);
console.log(image4);
console.log(image5);

document.body.setAttribute('style', 
    `--bImage1: url("${image1}");
     --bImage2: url("${image2}");
     --bImage3: url("${image3}");
     --bImage4: url("${image4}");
     --bImage5: url("${image5}");
     --bImage6: url("${image6}");
     --bImage7: url("${image7}");
     --bImage8: url("${image8}")`);

