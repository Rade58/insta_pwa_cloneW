:exclamation::exclamation:work in progress:exclamation::exclamation: 

reminder:

- (need to shorten script names when i finsh defining all necessary presets)

# App made for practicing pwa techologies and setting up the right Webpack configuration with many presets

Probably, I'm going to use this configuration for my portfolio

## Bundled with webpack

### Webpack configuration is made to have multiple entry points and multiple outputs, but single enaty and output should be also available as an option

Two pages are needed, with one fallback page (for offline if one of the pages isn't availeable)

### FOR DEVELOPING WITH MULTIPLE ENTRIES AND OUTPUTS EXECUTE yarn dev:multi SCRIPT

presets/webpack.multi.js will be merged with main configuration

You can still use

- yarn dev

SCRIPT FOR SINGE ENTRY POINT AND SINGLE OUTPUT

## COMPRESSION AND SERVING COMPRESSED JAVASCRIPT INSIDE HTML

[html-webpack-change-assets-extension-plugin](https://www.npmjs.com/package/html-webpack-change-assets-extension-plugin) USED FO INSERTING COMPRESSED FILES IN PAGES (only JavaScript)

single entry point and output:

- yarn prod:single_compress_serve

multi entries and outputs

- yarn prod:multi_compress_serve

## FOR SERVICE WORKER I'LL TRY USE "serviceworker-webpack-plugin", AS A PRESET CONFIGURATION

["serviceworker-webpack-plugin"](https://www.npmjs.com/package/serviceworker-webpack-plugin)

[git repo](https://github.com/oliviertassinari/serviceworker-webpack-plugin)

DEVELOPMENT SCRIPT

- yarn dev:multi:serviceworker

## manifest.json

[webpack-pwa-manifest](https://github.com/arthurbergmz/webpack-pwa-manifest) (I'LL USE THIS ONE, BECAUSE I NEED TO PROVIDE JUST LARGEST ICON, AND TOGETHER WITH MANIFEST FILE, ALL ICONS IN ALL SIZES ARE GOING TO BE PROVIDED)

THIS PLUGIN INSERTS `<meta>`S AND `<link>`S IN `<head></head>` TAG (I LEFT OLD META TAGS (FROM OTHER PROJECT), I INSETED BY HAND IN TEMPLATE (COMMENTED THEM OUT TO JUST CHECK IF EVERY meta OR link))

DEVELOPMENT SCRIPT IS EXECUTED WITH:

- yarn dev:multi:serviceworker:pwamanifest

## For generating (copying) favicon.png TO didt, I'M GOING TO USE 'copy-webpack-plugin'

[copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin)

## To test production code with gzip use http-server

- yarn add http-server@0.9.0 (DOWNGRADED IT BECACAUSE ectatic ISN'T WORKING ON NEWEST VERSIONS)

- cd dist

- http-server -a localhost -p 7000 -c-1 --gzip

## ZERO LIBRARIES FOR CSS (only material icon font and roboto font)

I want to practice css