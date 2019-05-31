:exclamation::exclamation:work in progress:exclamation::exclamation:

# Simple app made for practicing pwa techologies and setting up the right Webpack configuration with many presets

## Bundled with webpack

### Webpack configuration is made to have multiple entry points and multiple outputs, but single enaty and output should be also available as an option

Two pages are needed, with one fallback page (for offline if one of the pages isn't availeable)

### FOR DEVELOPING WITH MULTIPLE ENTRIES AND OUTPUTS EXECUTE yarn dev:multi SCRIPT

presets/webpack.multi.js will be merged with main configuration

You can still use 

- yarn dev

SCRIPT FOR SINGE ENTRY POINT AND SINGLE OUTPUT

## COMPRESSION AND SERVING COMPRESSED JAVASCRIPT INSIDE HTML

single entry point and output:

- yarn prod:single_compress_serve

multi entries and outputs

- yarn prod:multi_compress_serve

### Service Worker I'm going to test only in production, so it is placed by hand inside build folder (dist FOLDER)

During development of the app, all pwa related files will be kept inside pwa_realted FOLDER (AFTER DEVELOPMENT I WILL PASS IT CONTENT TO dist)

Service Worker file needs to be on same file/folder level as the the index.html

Also, manifest.json and icons folder I'm going to place inside dist too

## To test production code with gzip use http-server

- cd dist

- yarn add http-server@0.9.0 --dev (DOWNGRADED IT BECACAUSE ectatic ISN'T WORKING ON NEWEST VERSIONS)

- http-server -a localhost -p 7000 -c-1 --gzip
