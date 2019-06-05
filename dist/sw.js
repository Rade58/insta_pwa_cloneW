var serviceWorkerOption = {
  "assets": [
    "/f6fd45093f5dcbf4a9a7b385903fe9c4.jpg",
    "/help/help.css",
    "/help/help.bundle.js",
    "/index.css",
    "/index.bundle.js",
    "/index.html",
    "/fallback_offline.html",
    "/help/help.html",
    "/sw.js.gz",
    "/sw.js.map.gz",
    "/help/help.bundle.js.gz",
    "/index.css.gz",
    "/index.bundle.js.gz",
    "/help/help.bundle.js.map.gz",
    "/index.css.map.gz",
    "/index.bundle.js.map.gz",
    "/fallback_offline.html.gz",
    "/help/help.html.gz",
    "/index.html.gz"
  ]
};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){(function(e){const{assets:t}=e.serviceWorkerOption,n=[].concat(t).filter(function(e){if(!/\.map(\.gz)?$/.test(e))return e}),r=["/","https://fonts.googleapis.com/css?family=Roboto:400,700","https://fonts.googleapis.com/icon?family=Material+Icons","copied_assets/favicon.png"];self.addEventListener("install",function(e){e.waitUntil(caches.open("static-cache-v0").then(function(e){return Promise.all(n.concat(r).map(function(t){return fetch(t).then(function(n){return e.put(t,n)})}))}))}),self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(e){Promise.all(e.map(function(e){if("static-cache-v0"!==e&&"dynamic-cache-v0"!==e&&"on_demand_cache_v0"!==e)return caches.delete(e)}))}))});self.addEventListener("fetch",function(e){"some posible path I'll provide after I create  backend data"===e.request.url||(!function(e){if("/"===e)return!0;const t=new URL(e);let c=n.concat(r);for(let e of c)if(t.pathname===e)return!0;return!1}(e.request.url)?e.respondWith(self.caches.open("dynamic-cache-v0").then(function(t){return t.match(e.request).then(function(n){return n||fetch(e.request).then(function(n){if(n)return t.put(e.request,n.clone()),n}).catch(function(){if(e.request.headers.get("accept").includes("text/html"))return caches.open("static-cache-v0").then(function(e){return e.match("/fallback_offline.html")})})})})):e.respondWith(self.caches.open("static-cache-v0").then(function(t){return t.match(e.request)})))})}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);
//# sourceMappingURL=sw.js.map