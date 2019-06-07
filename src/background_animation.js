import './header.css';

// function that makes two arrays of image urls (USING require)
const makeImageArrays = quantity => {
    const array = new Array();
    for(let i = 0; i < quantity; i++){
        array.push(require(`./images/image_${i + 1}.jpg`))
    }

    const arrayReverse = [];

    array.forEach(function(url){
        arrayReverse.unshift(url);
    })
    
    return {
        array,
        arrayReverse
    };
}

// function that creates css variables (custom properties and places them on div ())
// it also has returned values (OBJECT)       VALUE OF style atribute ( PROPERTY)
//                                            ARRAY OF 'CALLING' CUSTOM PROPERTY (var(--bimage) SYNTAXES)
const passStyleToCssVariablesAndMakeStyleString = array => {
    
    let styleString = "";
    let styleArray = [];
    
    let i = 1;
    for(let url of array){
        if(i === 1){
            document.querySelector('header section')
            .setAttribute('style', `--bImage${i}: url("${url}");`);
        }else{
            document.querySelector('header section')
            .setAttribute(
                'style',  
                document.querySelector('header section').getAttribute('style') +
                `--bImage${i}: url("${url}");`
            );
        }
        if(!(array.length === i)){
            styleString+= `var(--bImage${i}), `;
        }else{
            styleString+= `var(--bImage${i})`;
        }
        styleArray.push(`var(--bImage${i})`);
        i++;
    }

    return {
        styleString,
        styleArray
    }

}


const passAllVariablesToBackgroundVar = function(styleString, element){
    // console.log(element, styleString)
    element.style.backgroundImage = styleString;
}

;

const imageArrays = makeImageArrays(16);
let stringAndArraysVariableStyle = passStyleToCssVariablesAndMakeStyleString(imageArrays.array);


// INITIAL DEFINITION OF background-style ON 'header > section > div' ELEMENT

passAllVariablesToBackgroundVar(
    stringAndArraysVariableStyle.styleString,
    document.querySelector('header section div')
);


;

// IN SCOPE OF NEXT FUNCTION I NEED TO DEFINE OPACITY ANIMATION ON PSEUDO ELEMENT OF header > section > div ELEMENT
// AND CHANGING IMAGE OF AN ELEMENT AFTER ANIMATION (opacity ON PSEUDO) ENDS

const changingImagesFunction = function(){

    const numberReg = /[0-9][0-9]?/;

    const generateReg = function(varNumber){
        return new RegExp(`[\\w\\s]?var\\(--bImage${varNumber}\\),?`)
    }

    const arrayFromReg = function(member, styleString){

        console.log(member);

        member = member.match(numberReg)[0];
        


        const reg = generateReg(member);

        return styleString.match(reg);
    }


    const makeStyleStringAndArray = () => {
    
        let styleString = document.querySelector('header section div').getAttribute('style');

        // console.log(styleString.match(regSec))

        const reg = /var\(--bImage[0-9][0-9]?\)/g;
    
        const styleArray = styleString.match(reg);
        
        let neuStr = "";

        for(let i = 0; i < styleArray.length; i++){
            neuStr+= ((i !== 0 )?",":"") + styleArray[i];
        }

        return {
            styleString: neuStr,
            styleArray
        }
    
    }
    
    const backgroundImageStyleNewOrder = function(){

        const stringAndStyleObject =  makeStyleStringAndArray();
   
        let matchingArray = arrayFromReg(stringAndStyleObject.styleArray[0], stringAndStyleObject.styleString);

        // console.log(matchingArray);

        let styleString = matchingArray.input;
        let match = matchingArray[0];

        let arrayOfLetters = [];
        let matchLength = match.length;

        for(let letter of styleString){
            arrayOfLetters.push(letter);
        }

        let chunk = arrayOfLetters.splice(0, matchLength);

        for(let i = chunk.length - 1; i > 0; i--){

            if(chunk[i] === ","){
                chunk.pop();
                chunk.unshift(", ");
                break;
            }else{
                break
            }
        }

        arrayOfLetters = arrayOfLetters.concat(chunk);

        let sentance = "";

        for(let lett of arrayOfLetters){
            sentance+=lett
        }

        /* const updateStateObject = function( styleArrayNew, styleStringNew){
            const state = stateObject;
            state.styleArray = styleArrayNew;
            state.styleString = styleStringNew;
        }

        updateStateObject(arrayOfLetters, sentance); */

        return sentance;
    }

    

    const changeBackgroundStyleSentance = function(){

        let backgroundImageStyle = backgroundImageStyleNewOrder();


        document.querySelector('header section div').style.backgroundImage = backgroundImageStyle;
        
        
    };

    const state = {
        currentClass: 1,
        iterationGo: false,
        iteration: 1
    }

    const opacityClassChanger = function(element){
        // console.log(ev.currentTarget)
        element.className = ""
        element.classList.add(`image-${state.currentClass}`)
        state.currentClass += 1;
        if(state.currentClass === 16) state.currentClass = 1;

    }

    // opacityClassChanger(document.querySelector('header section div'));
    
    document.querySelector('header section div').addEventListener('animationiteration', function(ev){
       
        if(state.iteration%2){
            changeBackgroundStyleSentance()
        }

        if(!(state.iteration%2)){
            opacityClassChanger(document.querySelector('header section div'))
        }
        console.log('iteration: ' + state.iteration++)
        
    })

    
    


    /* setInterval(function(){
        console.log(stateObject); 
    }, 4000) */
}

changingImagesFunction()