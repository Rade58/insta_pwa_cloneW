class MyFirstWebpackPlugin {

    apply(compiler){

        compiler.hooks.done.tapAsync("MyFirstWebpackPlugin", (stats, callback) => {

            const assetNames = []

            for(let assetName in stats.compilation.assets){

                assetNames.push(assetName);

            }

            debugger; // ON JE JOS TU, UDJI U DEBUG CONSOLE I PROCITAJ

            callback();

        })
    }
}

module.exports = MyFirstWebpackPlugin;