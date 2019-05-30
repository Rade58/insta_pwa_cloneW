const webpackMerge = require("webpack-merge");

module.exports = (env = {presets: []}) => { 
    const presets = env.presets || [];
    const presetsArrayFlatten = [].concat(...[presets]);
    const configsArray = presetsArrayFlatten.map(
        presetName => require(`./presets/webpack.${presetName}`)(env)
    );

    return webpackMerge({}, ...configsArray);

}