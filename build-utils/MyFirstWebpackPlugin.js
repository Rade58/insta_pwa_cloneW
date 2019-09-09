class MyFirstWebpackPlugin {

    apply(compiler){

        compiler.hooks.done.tapAsync("MyFirstWebpackPlugin", (stats, callback) => {

            //
            console.log(stats);

            debugger;
            //
            callback();

        })
    }
}

module.exports = MyFirstWebpackPlugin;
