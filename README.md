# Simple app made for practicing pwa techologies

## Bundled with webpack

### Webpack configuration is made to have multiple entry points and multiple outputs

Two pages are needed, with one fallback page (for offline if one of the pages isn't availeable)

### FOR MULTI OUTPUTS USE yarn:dev:multi SCRIPT

presets/webpack.multi.js will be merged with main configuration

You can still use, only main config for single enty and single output

### Service Worker I'm going to test only in production, so it is placed by hand inside build folder (dist FOLDER)

During development of the app, all pwa related files will be kept inside pwa_realted FOLDER (AFTER DEVELOPMENT I WILL PASS IT CONTENT TO dist)

Service Worker file needs to be on same file/folder level as the the index.html

Also, manifest.json and icons folder I'm going to place inside dist too
