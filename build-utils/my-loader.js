// build-utils\my-loader.js

module.exports = loader;  


function loader(source){


    if(
    this.resource === 
    "C:\\Users\\Rade\\Documents\\PROGRAMIRANJE\\vezbe_za_web_aplikacije\\webpack larkin\\projekti\\inst_pwa_clone_w\\src\\header_background_animation.js"
    )
    {

        source+= `; console.log('blah')`

    }

    debugger;
    
    return source;

}