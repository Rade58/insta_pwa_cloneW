import {classBlah} from './blah.module.scss';
import './some.css';

export const blahFunkcija = () => {
    console.log("blah funkcija izvrsena")

    document.body.querySelector('#app').classList.add(classBlah)

}

export default "string default blah";