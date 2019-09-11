class MyFirstWebpackPlugin {

    apply(compiler){

        compiler.hooks.done.tapAsync("MyFirstWebpackPlugin", (stats, callback) => {

            const assetNames = []

            for(let assetName in stats.compilation.assets){

                assetNames.push(assetName);

            }

            // debugger;

            callback();

        })


        compiler.hooks.compilation.tap('MyFirstWebpackPlugin', (compilation, params) => {

            // compilation.hooks.seal.tap('MyFirstWebpackPlugin', () => {   // OVO JE PRESLO U CODE NOVOG PLUGIN-A
                
                // EVO OVDE UPOTREBLJAVAM COMPILATION, ALI IZ PLUGIN-A

                // compilation


                let compilationBlah = new MyFirstCompilationWebpackPlugin().apply(compilation)

                // debugger;


            // })

        })

        
        compiler.hooks.normalModuleFactory.tap('MyFirstWebpackPlugin', normalModuleFactory => {

            normalModuleFactory.hooks.beforeResolve.tapAsync('MyFirstWebpackPlugin', (data, callback) => {

                // debugger;

                callback()

            })

        })


    }
}

// EVO OVDE GA DEFINISEM

class MyFirstCompilationWebpackPlugin {

    

    apply(compilation){

        compilation.hooks.seal.tap('MyFirstWebpackPlugin', () => {
            compilation;
            // debugger;

        })


    }

    

}


module.exports = MyFirstWebpackPlugin;