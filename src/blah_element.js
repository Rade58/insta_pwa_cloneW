import {colory_blah} from "./styles/sass_modules/blah_element.module.scss";

const preFetchChangeSize = () => import(
    './change_blah'
    /* webpackPrefetch: true */
    /* webpackChunkName: 'resizing' */
)

export const buildBlahElement = () => {

    const rectangle = document.createElement('div');

    rectangle.classList.add(colory_blah);

    const buttonPixel = document.createElement('button');

    buttonPixel.textContent = "change size with pixels";

    const buttonShrink = document.createElement('button');

    buttonShrink.textContent = "shrink it";

    ////////////////////////////
    
    buttonPixel.addEventListener('click', e => {

        preFetchChangeSize()
        .then(module => {

            let changeWithPixels = module.pixelEl;

            changeWithPixels(e.target.parentNode)

        })

    })
    
    buttonShrink.addEventListener('click', e => {

        preFetchChangeSize()
        .then(module => {

            let changeWithShrink = module.shrinkEl;

            changeWithShrink(e.target.parentNode)

        })

    })

    /////////////////////////////////

    rectangle.append(buttonPixel, buttonShrink);

    document.body.append(rectangle);



}