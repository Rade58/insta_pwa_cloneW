const webpackMerge = require("webpack-merge");

module.exports = (env = {presets: []}, pathOfMainConfig) => { 
    const presets = env.presets || [];
    const presetsArrayFlatten = [].concat(...[presets]);
    const configsArray = presetsArrayFlatten.map(
        presetName => require(`./presets/webpack.${presetName}`)(env, pathOfMainConfig)
    );

    return webpackMerge({}, ...configsArray);

}