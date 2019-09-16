const insertMode = (mode) => {
    
    if(mode === "development"){

        return `self.__webpackMode = "development"`; 

    }
    
    if(mode === "production"){

        return `self.__webpackMode = "production"`; 

    }

    if(mode === "none" || mode === undefined){

        return ``;
    }

}