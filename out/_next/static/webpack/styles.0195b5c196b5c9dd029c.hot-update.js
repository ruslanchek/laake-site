webpackHotUpdate("styles",{

/***/ "./pages/style.scss":
/*!**************************!*\
  !*** ./pages/style.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"page":"_1fxkw5P74tBQjHHrmYSqEG","logoContainer":"OxisZuZTzYf0XHr60h2xi","logoText":"GY_XT0y46NllCkLYcOg2w","logo":"d8BYZagolw9lwXCXgPjuS","hero":"_2hqLyMtzfyTFUZOxHuOR78","header":"_1BKOxzHtmHV_1RVArjPJwh","nav":"Dh-XA8x5dxLAX8rVyLzI_"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1560519666329");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.0195b5c196b5c9dd029c.hot-update.js.map