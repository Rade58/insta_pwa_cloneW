import './header.css';
import './header_background_animation.css';

// function that makes two arrays of image urls (USING require)

const headerImagesAnimation = function(numberOfNormalImages, numberOfImagesForOpacityAnimation){

    const makeImageArrays = (quantityNormal, quantityOpacity) => {
        const normalArray = new Array();
        const opacityArray = new Array();
        for(let i = 0; i < quantityNormal; i++){
            normalArray.push(require(`./images/normal/image_${i}.jpg`))
        }
        for(let i = 0; i < quantityOpacity; i++){
            opacityArray.push(require(`./images/opacity/image_${i}.jpg`))
        }
        
        return {
            opacityArray,
            normalArray,
            quantityNormal,
            quantityOpacity
        };
    }

    // function that creates css variables (custom properties and places them on div ())
    // it also has returned values (OBJECT)       VALUE OF style atribute ( PROPERTY)
    //                                            ARRAY OF 'CALLING' CUSTOM PROPERTY (var(--bimage) SYNTAXES)
    const passStyleToCssVariablesAndMakeStyleString = ({opacityArray, normalArray, quantityNormal, quantityOpacity}) => {
        
        let styleStringNormal = "";
        let styleStringOpacity = "";
        let arrayNormal = [];
        let arrayOpacity = [];
        
        let i = 0;
        for(let url of [].concat(normalArray, opacityArray)){
            if(i === 0){
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

            if(i < normalArray.length){

                if(!(normalArray.length === i)){
                    styleStringNormal+= `var(--bImage${i}), `;
                }else{
                    styleStringNormal+= `var(--bImage${i})`;
                }

                arrayNormal.push(`var(--bImage${i})`);
            
            }else{
                if(!([].concat(normalArray, opacityArray).length === i)){
                    styleStringOpacity+= `var(--bImage${i}), `;
                }else{
                    styleStringOpacity+= `var(--bImage${i})`;
                }

                arrayOpacity.push(`var(--bImage${i})`);
            }    
                
            
            i++;
            
        }

        console.log(styleStringNormal,"----------",
            styleStringOpacity,"-------------",
            arrayNormal, "-----------",
            arrayOpacity)

        return {
            styleStringNormal,
            styleStringOpacity,
            arrayNormal,
            opacityArray,
            quantityNormal,
            quantityOpacity
        }

    }


    const passAllVariablesToBackgroundVar = function(styleString, element){
        // console.log(element, styleString)
        element.style.backgroundImage = styleString;
    }



    const imageArraysObject = makeImageArrays(numberOfNormalImages, numberOfImagesForOpacityAnimation);
    let stringAndArraysVariableStyle = passStyleToCssVariablesAndMakeStyleString(imageArraysObject);


    // INITIAL DEFINITION OF background-style ON 'header > section > div' ELEMENT

    passAllVariablesToBackgroundVar(
        stringAndArraysVariableStyle.arrayNormal,
        document.querySelector('header section div#bAnim')
    );


    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////next is reusable code: needs to be encapsuleted and exported as a default 

    // IN SCOPE OF NEXT FUNCTION I NEED TO DEFINE OPACITY ANIMATION ON PSEUDO ELEMENT OF header > section > div ELEMENT
    // AND CHANGING IMAGE OF AN ELEMENT AFTER ANIMATION (opacity ON PSEUDO) ENDS

    const changingImagesFunction = function(){

        let {quantityNormal, quantityOpacity} = stringAndArraysVariableStyle;

        const numberReg = /\d+/;      // THIS REG NEEDS TO BE A PART OF NEST ONE

        const generateReg = function(regNumber){

            const completeReg = new RegExp(`[\\w\\s]?var\\(--bImage${regNumber}\\),?`)

            // console.log(completeReg);

            return completeReg;
        }

        const arrayFromReg = function(member, styleString){

            // console.log(member);

            member = member.match(numberReg)[0];
            


            const reg = generateReg(member);

            return styleString.match(reg);
        }


        const makeStyleStringAndArray = () => {
        
            let styleString = document.querySelector('header section div#bAnim').getAttribute('style');

            // console.log(styleString.match(regSec))

            const reg = /var\(--bImage[0-9][0-9]?\)/g;
        
            const styleArray = styleString.match(reg);
            
            let neuStr = "";

            for(let i = 0; i < styleArray.length; i++){
                neuStr+= ((i !== 0 )?",":"") + styleArray[i];
            }

            console.log(neuStr, styleArray)


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


            document.querySelector('header section div#bAnim').style.backgroundImage = backgroundImageStyle;
            
            
        };

        const state = {
            currentClass: stringAndArraysVariableStyle.quantityOpacity + stringAndArraysVariableStyle.quantityNormal - 1,
            iterationGo: false,
            iteration: stringAndArraysVariableStyle.quantityOpacity + stringAndArraysVariableStyle.quantityNormal - 1,
            opacityAnim: true
        }

        const opacityClassChanger = function(element){
            // console.log(ev.currentTarget)
            element.className = ""
            element.classList.add(`image-${state.currentClass}`)
            state.currentClass -= 1;
            if(state.currentClass ===  stringAndArraysVariableStyle.quantityNormal) state.currentClass = stringAndArraysVariableStyle.quantityOpacity + stringAndArraysVariableStyle.quantityNormal - 1;

        }

        // opacityClassChanger(document.querySelector('header section div'));
        
        document.querySelector('header section div#bAnim').addEventListener('animationiteration', function(ev){
        
            if(state.iteration%2){
                changeBackgroundStyleSentance()
            }

            if(!(state.iteration%2)){
                opacityClassChanger(document.querySelector('header section div#bAnim'))
            }
            state.iteration++
            
        })

        
        


        /* setInterval(function(){
            console.log(stateObject); 
        }, 4000) */
    }

    changingImagesFunction()

}


// ARGUMENTS FOR NEXT FUNCYION ARE,             NUMBER OF IMAGES INSIDE src/images/normal
//                                              NUMBER OF IMAGES INSIDE src/images/opacity

// FOR THE CONVINIENCE ADD SAME AMOUNT OF IMAGES IN BOTH FOLDER
// NAMES MUST BE IN FORMAT image-{number}.jpg


export default headerImagesAnimation;