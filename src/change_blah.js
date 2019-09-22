import {shrink, pixel_size} from './styles/sass_modules/change_size.module.scss';

export const shrinkEl = target => {

    target.classList.add(shrink);
    target.classList.remove(pixel_size);

}


export const pixelEl = target => {

    target.classList.add(pixel_size);
    target.classList.remove(shrink);

}