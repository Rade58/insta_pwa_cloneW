# My project made for practicing pwa techologies

## Bundled with webpack

### Webpack configuration is made to have multiple entry points and multiple outputs

Two pages are needed, with one fallback page (for offline if one of the pages isn't availeable)

### Service Worker I'm going to test only in production, so it is placed by hand inside build folder (dist FOLDER)

Service Worker file needs to be on same file/folder level as the the index.html

### FOR MULTI OUTPUTS USE yarn:dev:multi SCRIPT

presets/webpack.multi.js