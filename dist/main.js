/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/VanillaWhale-Regular.woff2 */ "./src/assets/fonts/VanillaWhale-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/VanillaWhale-Regular.woff */ "./src/assets/fonts/VanillaWhale-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Hack-Regular.woff2 */ "./src/assets/fonts/Hack-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Hack-Regular.woff */ "./src/assets/fonts/Hack-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Global Vars, html reset and custom fonts */
:root {
  --primary-dark: rgba(20, 37, 37, 0.932);
  --primary-light: rgba(139, 244, 241, 0.983);
  --secondary-light: rgba(220, 235, 241, 0.933);
  --test: rgba(225, 225, 225, 0.683);
  --title-font: "Vanilla Whale";
  --primary-font: "Hack";
  --secondary-font: "Philosopher";
}

*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

@font-face {
  font-family: "Vanilla Whale";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: Hack;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2"),
    url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff");
  font-weight: bold;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}

html body {
  font-size: 1.2rem;
  padding: 0px;
  margin: 0px;
  font-family: Hack, Philosopher, "Lucida", "Roboto";
}

/* Main Property assignment */
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 2rem;
  color: var(--primary-dark);
}

.search-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 0.5rem;
  color: var(--primary-dark);
}

input {
  font-size: 1rem;
  margin: 1.5rem 0 1rem 0;
  padding: 0.5rem;
  border-radius: 5px;
}

input:focus {
  border: none;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.342);
  outline: none;
  border: 2px solid rgb(74, 202, 198);
}

.error-message {
  font-size: 1rem;
  color: rgb(255, 69, 100);
}

.btn-search {
  font-size: 1.15rem;
  font-weight: 600;
  background-color: rgb(74, 202, 198);
  border-radius: 5px;
  margin: 1rem;
  padding: 0.4rem 1rem;
  transition: transform 0.1s ease-in-out;
}

.btn-search:hover {
  cursor: pointer;
}

.btn-search:active {
  transform: scale(0.9);
}

.results-now-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 75vw;
  gap: 1.5rem;
}

.visible {
  border: 2px solid var(--primary-dark);
  border-radius: 5px;
  padding: 0.5rem 2rem;
}

.container > * {
  padding: 0.2rem 0.5rem;
}

.container > :first-child {
  font-size: 1.5rem;
  font-weight: bolder;
}

#city {
  background-color: var(--primary-light);
  min-width: 321px;
  max-width: fit-content;
  position: relative;
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#nowcast {
  min-width: 321px;
  text-align: center;
}

#forecast {
  width: 75vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(321px, 1fr));
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1.5rem;
  gap: 1.5rem;
}

.forecast-day {
  max-width: 640px;
}
.footer {
  position: absolute;
  bottom: 0px;
  color: var(--primary-dark);
  text-align: center;
  display: flex;
  align-content: center;
  gap: 10px;
  margin: 24px;
  font-size: 1rem;
}

.am-github {
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease-in-out;
}

.am-github:hover {
  transform: scale(1.25);
} /* Pulls focus to github link when hovered */

@media screen and (max-width: 875px) {
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: scroll;
  }
  #city {
    max-width: min-content;
  }

  #forecast {
    max-width: fit-content;
    grid-template-columns: repeat(auto-fill, minmax(321px, 1fr));
  }
}

@media screen and (min-width: 1775px) {
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: scroll;
  }

  #forecast {
    grid-template-columns: repeat(3, minmax(321px, 1fr));
  }
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles.css"],"names":[],"mappings":"AAAA,6CAA6C;AAC7C;EACE,uCAAuC;EACvC,2CAA2C;EAC3C,6CAA6C;EAC7C,kCAAkC;EAClC,6BAA6B;EAC7B,sBAAsB;EACtB,+BAA+B;AACjC;;AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,4BAA4B;EAC5B;0DACyD;EACzD,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB;0DACiD;EACjD,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,WAAW;EACX,kDAAkD;AACpD;;AAEA,6BAA6B;AAC7B;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,4CAA4C;EAC5C,aAAa;EACb,mCAAmC;AACrC;;AAEA;EACE,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mCAAmC;EACnC,kBAAkB;EAClB,YAAY;EACZ,oBAAoB;EACpB,sCAAsC;AACxC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,qCAAqC;EACrC,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,sCAAsC;EACtC,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;EAClB,OAAO;EACP,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,4DAA4D;EAC5D,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,0BAA0B;EAC1B,kBAAkB;EAClB,aAAa;EACb,qBAAqB;EACrB,SAAS;EACT,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;AACxB,EAAE,4CAA4C;;AAE9C;EACE;;IAEE,WAAW;IACX,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,kBAAkB;EACpB;EACA;IACE,sBAAsB;EACxB;;EAEA;IACE,sBAAsB;IACtB,4DAA4D;EAC9D;AACF;;AAEA;EACE;;IAEE,WAAW;IACX,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,kBAAkB;EACpB;;EAEA;IACE,oDAAoD;EACtD;AACF","sourcesContent":["/* Global Vars, html reset and custom fonts */\n:root {\n  --primary-dark: rgba(20, 37, 37, 0.932);\n  --primary-light: rgba(139, 244, 241, 0.983);\n  --secondary-light: rgba(220, 235, 241, 0.933);\n  --test: rgba(225, 225, 225, 0.683);\n  --title-font: \"Vanilla Whale\";\n  --primary-font: \"Hack\";\n  --secondary-font: \"Philosopher\";\n}\n\n*,\n::before,\n::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\n@font-face {\n  font-family: \"Vanilla Whale\";\n  src: url(\"./fonts/VanillaWhale-Regular.woff2\") format(\"woff2\"),\n    url(\"./fonts/VanillaWhale-Regular.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: Hack;\n  src: url(\"./fonts/Hack-Regular.woff2\") format(\"woff2\"),\n    url(\"./fonts/Hack-Regular.woff\") format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow-x: hidden;\n}\n\nhtml body {\n  font-size: 1.2rem;\n  padding: 0px;\n  margin: 0px;\n  font-family: Hack, Philosopher, \"Lucida\", \"Roboto\";\n}\n\n/* Main Property assignment */\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  padding: 2rem;\n  color: var(--primary-dark);\n}\n\n.search-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  padding: 0.5rem;\n  color: var(--primary-dark);\n}\n\ninput {\n  font-size: 1rem;\n  margin: 1.5rem 0 1rem 0;\n  padding: 0.5rem;\n  border-radius: 5px;\n}\n\ninput:focus {\n  border: none;\n  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.342);\n  outline: none;\n  border: 2px solid rgb(74, 202, 198);\n}\n\n.error-message {\n  font-size: 1rem;\n  color: rgb(255, 69, 100);\n}\n\n.btn-search {\n  font-size: 1.15rem;\n  font-weight: 600;\n  background-color: rgb(74, 202, 198);\n  border-radius: 5px;\n  margin: 1rem;\n  padding: 0.4rem 1rem;\n  transition: transform 0.1s ease-in-out;\n}\n\n.btn-search:hover {\n  cursor: pointer;\n}\n\n.btn-search:active {\n  transform: scale(0.9);\n}\n\n.results-now-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: flex-start;\n  width: 75vw;\n  gap: 1.5rem;\n}\n\n.visible {\n  border: 2px solid var(--primary-dark);\n  border-radius: 5px;\n  padding: 0.5rem 2rem;\n}\n\n.container > * {\n  padding: 0.2rem 0.5rem;\n}\n\n.container > :first-child {\n  font-size: 1.5rem;\n  font-weight: bolder;\n}\n\n#city {\n  background-color: var(--primary-light);\n  min-width: 321px;\n  max-width: fit-content;\n  position: relative;\n  flex: 1;\n  align-self: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#nowcast {\n  min-width: 321px;\n  text-align: center;\n}\n\n#forecast {\n  width: 75vw;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(321px, 1fr));\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin-top: 1.5rem;\n  gap: 1.5rem;\n}\n\n.forecast-day {\n  max-width: 640px;\n}\n.footer {\n  position: absolute;\n  bottom: 0px;\n  color: var(--primary-dark);\n  text-align: center;\n  display: flex;\n  align-content: center;\n  gap: 10px;\n  margin: 24px;\n  font-size: 1rem;\n}\n\n.am-github {\n  text-decoration: none;\n  color: inherit;\n  transition: transform 0.3s ease-in-out;\n}\n\n.am-github:hover {\n  transform: scale(1.25);\n} /* Pulls focus to github link when hovered */\n\n@media screen and (max-width: 875px) {\n  html,\n  body {\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    padding: 0px;\n    overflow-x: scroll;\n  }\n  #city {\n    max-width: min-content;\n  }\n\n  #forecast {\n    max-width: fit-content;\n    grid-template-columns: repeat(auto-fill, minmax(321px, 1fr));\n  }\n}\n\n@media screen and (min-width: 1775px) {\n  html,\n  body {\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    padding: 0px;\n    overflow-x: scroll;\n  }\n\n  #forecast {\n    grid-template-columns: repeat(3, minmax(321px, 1fr));\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles.css":
/*!*******************************!*\
  !*** ./src/assets/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/Hack-Regular.woff":
/*!********************************************!*\
  !*** ./src/assets/fonts/Hack-Regular.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1e9c3d95e7c8459ac7a.woff";

/***/ }),

/***/ "./src/assets/fonts/Hack-Regular.woff2":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Hack-Regular.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff44a2fdceee936b71a1.woff2";

/***/ }),

/***/ "./src/assets/fonts/VanillaWhale-Regular.woff":
/*!****************************************************!*\
  !*** ./src/assets/fonts/VanillaWhale-Regular.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b68d7488a9098b24714c.woff";

/***/ }),

/***/ "./src/assets/fonts/VanillaWhale-Regular.woff2":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/VanillaWhale-Regular.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4d5a803e4d6ddfeb486.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles.css */ "./src/assets/styles.css");
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
// Imports for webpack bundle


const searchBtn = document.getElementById("search-btn");
const form = document.getElementById("search-input");
const searchInput = document.getElementById("city-search");

// DOM handling and display generation, to be split into own module

function setColors(div, data) {
  const splitIdx = ((div.classList[0] !== "forecast-day") ? 2 : 0);
  // Change background color to match weather conditions
  switch (data.condition.split(" ")[splitIdx]) {
    case "Clear":
      div.style.backgroundColor = "white";
      break;
    case "Sunny":
      div.style.backgroundColor = "rgba(254, 254, 176, 0.983)";
      break;
    case "Partly":
      div.style.backgroundColor = "rgba(186, 231, 230, 0.983)";
      break;
    case "Cloudy":
      div.style.backgroundColor = "rgba(225, 225, 225, 0.9)";
      break;
    case "Overcast":
      div.style.backgroundColor = "rgb(225, 225, 225, 0.683)";
      break;
    case "Light":
      div.style.backgroundColor = "rgba(220, 235, 241, 0.932)";
      break;
    case "Moderate":
      div.style.backgroundColor = "rgba(161, 207, 226, 0.932)";
      break;
    case "Heavy":
      div.style.backgroundColor = "rgba(83, 163, 197, 0.932)";
      break;
    case "Fog":
      div.style.backgroundColor = "rgba(220, 235, 241, 0.932)";
      break;
    case "Patchy":
      div.style.backgroundColor = "rgb(228, 229, 182)";
      break;
    default:
      div.style.backgroundColor = "white";
  }
}

function makeCity(cityData) {
  const cityContainer = document.getElementById("city");
  if (cityContainer.hasChildNodes()) {
    cityContainer.innerHTML = "";
  }
  const titleUpdate = document.getElementById("title");
  titleUpdate.textContent = `What's the weather in ${cityData.city}?`;

  // Populate city data from data object
  const keys = Object.keys(cityData);
  keys.forEach((key) => {
    const newDiv = document.createElement("div");
    newDiv.className = `${key}`;
    newDiv.textContent = `${cityData[key]}`;
    cityContainer.appendChild(newDiv);
  });
  cityContainer.classList.add("visible");
}

function makeNowcast(currentWeather) {
  const nowcastContainer = document.getElementById("nowcast");
  if (nowcastContainer.hasChildNodes()) {
    nowcastContainer.innerHTML = "";
  }
  setColors(nowcastContainer, currentWeather);

  // Populate nowcast from data object
  const keys = Object.keys(currentWeather);
  keys.forEach((key) => {
    const newDiv = document.createElement("div");
    newDiv.className = `${key}`;
    if (key === "condition") {
      newDiv.innerHTML = `Current Weather<br>${currentWeather[key]}`;
    } else {
      newDiv.textContent = `${currentWeather[key]}`;
    }
    nowcastContainer.appendChild(newDiv);
    // Create image for icon key
    if (key === "conditionIcon") {
      newDiv.innerHTML = "";
      const icon = document.createElement("img");
      icon.src = `${currentWeather[key]}`;
      newDiv.appendChild(icon);
    }
  });
  nowcastContainer.classList.add("visible");
}

function makeForecast(forecastData) {
  const forecastContainer = document.getElementById("forecast");
  if (forecastContainer.hasChildNodes()) {
    forecastContainer.innerHTML = "";
  }

  let dayNum = 0;
  forecastData.forEach((day) => {
    // Create Div for each day
    const dayDiv = document.createElement("div");
    dayDiv.className = "forecast-day";
    dayDiv.setAttribute("data-day-num", `${dayNum}`);
    forecastContainer.appendChild(dayDiv);
    dayDiv.classList.add("visible");
    dayDiv.classList.add("container");
    setColors(dayDiv, day);

    // Fill div with data
    // eslint-disable-next-line no-restricted-syntax
    for (const key in day) {
      const newDiv = document.createElement("div");
      newDiv.className = `${key}`;
      if (key === "date") {
        switch (dayNum) {
          case 0:
            newDiv.innerHTML = `Today<br>${day[key]}`;
            break;
          case 1:
            newDiv.innerHTML = `Tomorrow<br>${day[key]}`;
            break;
          case 2:
            newDiv.innerHTML = `Day After Torrow<br>${day[key]}`;
            break;
          case 3:
            newDiv.innerHTML = `Day After That<br>${day[key]}`;
            break;
          default:
            newDiv.innerHTML = "";
        }
      } else {
        newDiv.textContent = `${day[key]}`;
      }

      dayDiv.appendChild(newDiv);
      if (key === "conditionIcon") {
        newDiv.innerHTML = "";
        const icon = document.createElement("img");
        icon.src = `${day[key]}`;
        newDiv.appendChild(icon);
      }
    }
    dayNum++;
  });
}

function updateDisplay(data) {
  makeCity(data.place);
  makeNowcast(data.current);
  makeForecast(data.forecast);
}

// Data handling, to be broken out into own module
function parseData(data) {
  const place = {
    city: data.location.name,
    region: `${data.location.region}, ${data.location.country}`,
    time: `Local Time: ${data.location.localtime.slice(-5)}`,
    date: `Today: ${data.location.localtime.slice(0, 10)}`,
  };
  const current = {
    condition: `${data.current.temp_c} °C, ${data.current.condition.text}`,
    conditionIcon: data.current.condition.icon,
    precip: `Precip: ${data.current.precip_mm} mm`,
    wind: `Wind: ${data.current.wind_kph} kph, ${data.current.wind_dir}`,
    feelsLike: `Gusting to ${data.current.gust_kph} kph, Feels like ${data.current.feelslike_c} °C`,
  };

  const forecast = [];
  for (let day = 0; day < data.forecast.forecastday.length; day++) {
    const willSnow = data.forecast.forecastday[day].day.daily_will_it_snow;
    forecast[day] = {
      date: data.forecast.forecastday[day].date,
      conditionIcon: data.forecast.forecastday[day].day.condition.icon,
      condition: data.forecast.forecastday[day].day.condition.text,
      maxTemps: `High: ${data.forecast.forecastday[day].day.maxtemp_c} °C`,
      minTemps: `Low: ${data.forecast.forecastday[day].day.mintemp_c} °C`,
      humidity: `Humidity: ${data.forecast.forecastday[day].day.avghumidity}% Humidity`,
      precip: ((willSnow) ? `Precipitation: ${data.forecast.forecastday[day].day.daily_chance_of_snow}% chance` : `Precipitation: ${data.forecast.forecastday[day].day.daily_chance_of_rain}% chance`),
      precipTotal: ((willSnow) ? `Total: ${data.forecast.forecastday[day].day.totalsnow_cm}cm snow` : `Total: ${data.forecast.forecastday[day].day.totalprecip_mm}mm rain`),
      sunrise: `Sunrise: ${data.forecast.forecastday[day].astro.sunrise}`,
      sunset: `Sunset: ${data.forecast.forecastday[day].astro.sunset}`,
    };
  }
  return { place, current, forecast };
}

async function fetchData(city) {
  try {
    // Assign api search url
    const searchFeedback = document.getElementById("search-feedback");
    searchFeedback.textContent = "Searching . . . ";
    const apiKey = "1fdeb95185c145f0809201723232908";
    const apiEndpoint = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=yes&alerts=no`;

    const response = await fetch(apiEndpoint, { mode: "cors" });
    // Alert user if invalid city search
    if (!response.ok) {
      searchFeedback.textContent = `City "${city}" not found. Check search and try again`;
    } else {
      searchFeedback.textContent = "";
    }
    // Handle data
    const data = response.json();
    return data;
  } catch (error) {
    return null;
  }
}

// Event handlers
searchBtn.addEventListener("click", () => {
  fetchData(searchInput.value)
    .then((data) => updateDisplay(parseData(data)));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHdKQUFxRDtBQUNqRyw0Q0FBNEMsc0pBQW9EO0FBQ2hHLDRDQUE0Qyx3SUFBNkM7QUFDekYsNENBQTRDLHNJQUE0QztBQUN4Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRCxVQUFVLG1DQUFtQztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQsVUFBVSxtQ0FBbUM7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrRkFBK0YsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9B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Z0RBQWdELGNBQWM7QUFDOUQ7QUFDQTtBQUNBLDRDQUE0QyxLQUFLO0FBQ2pELE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvc3R5bGVzLmNzcz85NTFmIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9WYW5pbGxhV2hhbGUtUmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvVmFuaWxsYVdoYWxlLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvSGFjay1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9mb250cy9IYWNrLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogR2xvYmFsIFZhcnMsIGh0bWwgcmVzZXQgYW5kIGN1c3RvbSBmb250cyAqL1xuOnJvb3Qge1xuICAtLXByaW1hcnktZGFyazogcmdiYSgyMCwgMzcsIDM3LCAwLjkzMik7XG4gIC0tcHJpbWFyeS1saWdodDogcmdiYSgxMzksIDI0NCwgMjQxLCAwLjk4Myk7XG4gIC0tc2Vjb25kYXJ5LWxpZ2h0OiByZ2JhKDIyMCwgMjM1LCAyNDEsIDAuOTMzKTtcbiAgLS10ZXN0OiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuNjgzKTtcbiAgLS10aXRsZS1mb250OiBcIlZhbmlsbGEgV2hhbGVcIjtcbiAgLS1wcmltYXJ5LWZvbnQ6IFwiSGFja1wiO1xuICAtLXNlY29uZGFyeS1mb250OiBcIlBoaWxvc29waGVyXCI7XG59XG5cbiosXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiVmFuaWxsYSBXaGFsZVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogSGFjaztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwid29mZjJcIiksXG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5odG1sIGJvZHkge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1mYW1pbHk6IEhhY2ssIFBoaWxvc29waGVyLCBcIkx1Y2lkYVwiLCBcIlJvYm90b1wiO1xufVxuXG4vKiBNYWluIFByb3BlcnR5IGFzc2lnbm1lbnQgKi9cbi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDB2dztcbiAgcGFkZGluZzogMnJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDB2dztcbiAgcGFkZGluZzogMC41cmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuaW5wdXQge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogMS41cmVtIDAgMXJlbSAwO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zNDIpO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNzQsIDIwMiwgMTk4KTtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiByZ2IoMjU1LCA2OSwgMTAwKTtcbn1cblxuLmJ0bi1zZWFyY2gge1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NCwgMjAyLCAxOTgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMXJlbTtcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnRuLXNlYXJjaDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1zZWFyY2g6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xufVxuXG4ucmVzdWx0cy1ub3ctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiA3NXZ3O1xuICBnYXA6IDEuNXJlbTtcbn1cblxuLnZpc2libGUge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xufVxuXG4uY29udGFpbmVyID4gKiB7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XG59XG5cbi5jb250YWluZXIgPiA6Zmlyc3QtY2hpbGQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuI2NpdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgbWluLXdpZHRoOiAzMjFweDtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI25vd2Nhc3Qge1xuICBtaW4td2lkdGg6IDMyMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNmb3JlY2FzdCB7XG4gIHdpZHRoOiA3NXZ3O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMjFweCwgMWZyKSk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgZ2FwOiAxLjVyZW07XG59XG5cbi5mb3JlY2FzdC1kYXkge1xuICBtYXgtd2lkdGg6IDY0MHB4O1xufVxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW46IDI0cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmFtLWdpdGh1YiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uYW0tZ2l0aHViOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcbn0gLyogUHVsbHMgZm9jdXMgdG8gZ2l0aHViIGxpbmsgd2hlbiBob3ZlcmVkICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg3NXB4KSB7XG4gIGh0bWwsXG4gIGJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICB9XG4gICNjaXR5IHtcbiAgICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xuICB9XG5cbiAgI2ZvcmVjYXN0IHtcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMyMXB4LCAxZnIpKTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNzc1cHgpIHtcbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIH1cblxuICAjZm9yZWNhc3Qge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgzMjFweCwgMWZyKSk7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDZDQUE2QztBQUM3QztFQUNFLHVDQUF1QztFQUN2QywyQ0FBMkM7RUFDM0Ms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ZW50XCI6W1wiLyogR2xvYmFsIFZhcnMsIGh0bWwgcmVzZXQgYW5kIGN1c3RvbSBmb250cyAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1kYXJrOiByZ2JhKDIwLCAzNywgMzcsIDAuOTMyKTtcXG4gIC0tcHJpbWFyeS1saWdodDogcmdiYSgxMzksIDI0NCwgMjQxLCAwLjk4Myk7XFxuICAtLXNlY29uZGFyeS1saWdodDogcmdiYSgyMjAsIDIzNSwgMjQxLCAwLjkzMyk7XFxuICAtLXRlc3Q6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC42ODMpO1xcbiAgLS10aXRsZS1mb250OiBcXFwiVmFuaWxsYSBXaGFsZVxcXCI7XFxuICAtLXByaW1hcnktZm9udDogXFxcIkhhY2tcXFwiO1xcbiAgLS1zZWNvbmRhcnktZm9udDogXFxcIlBoaWxvc29waGVyXFxcIjtcXG59XFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJWYW5pbGxhIFdoYWxlXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1ZhbmlsbGFXaGFsZS1SZWd1bGFyLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXFxcIi4vZm9udHMvVmFuaWxsYVdoYWxlLVJlZ3VsYXIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogSGFjaztcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL0hhY2stUmVndWxhci53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuL2ZvbnRzL0hhY2stUmVndWxhci53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmh0bWwgYm9keSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZm9udC1mYW1pbHk6IEhhY2ssIFBoaWxvc29waGVyLCBcXFwiTHVjaWRhXFxcIiwgXFxcIlJvYm90b1xcXCI7XFxufVxcblxcbi8qIE1haW4gUHJvcGVydHkgYXNzaWdubWVudCAqL1xcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW46IDEuNXJlbSAwIDFyZW0gMDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCA1cHggcmdiYSgwLCAwLCAwLCAwLjM0Mik7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDc0LCAyMDIsIDE5OCk7XFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiByZ2IoMjU1LCA2OSwgMTAwKTtcXG59XFxuXFxuLmJ0bi1zZWFyY2gge1xcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NCwgMjAyLCAxOTgpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJ0bi1zZWFyY2g6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLXNlYXJjaDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbn1cXG5cXG4ucmVzdWx0cy1ub3ctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDc1dnc7XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbn1cXG5cXG4uY29udGFpbmVyID4gKiB7XFxuICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyID4gOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuI2NpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICBtaW4td2lkdGg6IDMyMXB4O1xcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI25vd2Nhc3Qge1xcbiAgbWluLXdpZHRoOiAzMjFweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2ZvcmVjYXN0IHtcXG4gIHdpZHRoOiA3NXZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMyMXB4LCAxZnIpKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5IHtcXG4gIG1heC13aWR0aDogNjQwcHg7XFxufVxcbi5mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwcHg7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW46IDI0cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5hbS1naXRodWIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmFtLWdpdGh1Yjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcbn0gLyogUHVsbHMgZm9jdXMgdG8gZ2l0aHViIGxpbmsgd2hlbiBob3ZlcmVkICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODc1cHgpIHtcXG4gIGh0bWwsXFxuICBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgfVxcbiAgI2NpdHkge1xcbiAgICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgfVxcblxcbiAgI2ZvcmVjYXN0IHtcXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzIxcHgsIDFmcikpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNzc1cHgpIHtcXG4gIGh0bWwsXFxuICBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgfVxcblxcbiAgI2ZvcmVjYXN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDMyMXB4LCAxZnIpKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXHJcbi8vIEltcG9ydHMgZm9yIHdlYnBhY2sgYnVuZGxlXHJcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy5jc3NcIjtcclxuXHJcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJ0blwiKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWlucHV0XCIpO1xyXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eS1zZWFyY2hcIik7XHJcblxyXG4vLyBET00gaGFuZGxpbmcgYW5kIGRpc3BsYXkgZ2VuZXJhdGlvbiwgdG8gYmUgc3BsaXQgaW50byBvd24gbW9kdWxlXHJcblxyXG5mdW5jdGlvbiBzZXRDb2xvcnMoZGl2LCBkYXRhKSB7XHJcbiAgY29uc3Qgc3BsaXRJZHggPSAoKGRpdi5jbGFzc0xpc3RbMF0gIT09IFwiZm9yZWNhc3QtZGF5XCIpID8gMiA6IDApO1xyXG4gIC8vIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIG1hdGNoIHdlYXRoZXIgY29uZGl0aW9uc1xyXG4gIHN3aXRjaCAoZGF0YS5jb25kaXRpb24uc3BsaXQoXCIgXCIpW3NwbGl0SWR4XSkge1xyXG4gICAgY2FzZSBcIkNsZWFyXCI6XHJcbiAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlN1bm55XCI6XHJcbiAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjU0LCAyNTQsIDE3NiwgMC45ODMpXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlBhcnRseVwiOlxyXG4gICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDE4NiwgMjMxLCAyMzAsIDAuOTgzKVwiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJDbG91ZHlcIjpcclxuICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyMjUsIDIyNSwgMjI1LCAwLjkpXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIk92ZXJjYXN0XCI6XHJcbiAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMjUsIDIyNSwgMjI1LCAwLjY4MylcIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiTGlnaHRcIjpcclxuICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyMjAsIDIzNSwgMjQxLCAwLjkzMilcIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiTW9kZXJhdGVcIjpcclxuICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgxNjEsIDIwNywgMjI2LCAwLjkzMilcIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiSGVhdnlcIjpcclxuICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSg4MywgMTYzLCAxOTcsIDAuOTMyKVwiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJGb2dcIjpcclxuICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyMjAsIDIzNSwgMjQxLCAwLjkzMilcIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiUGF0Y2h5XCI6XHJcbiAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMjgsIDIyOSwgMTgyKVwiO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlQ2l0eShjaXR5RGF0YSkge1xyXG4gIGNvbnN0IGNpdHlDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHlcIik7XHJcbiAgaWYgKGNpdHlDb250YWluZXIuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICBjaXR5Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgfVxyXG4gIGNvbnN0IHRpdGxlVXBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcclxuICB0aXRsZVVwZGF0ZS50ZXh0Q29udGVudCA9IGBXaGF0J3MgdGhlIHdlYXRoZXIgaW4gJHtjaXR5RGF0YS5jaXR5fT9gO1xyXG5cclxuICAvLyBQb3B1bGF0ZSBjaXR5IGRhdGEgZnJvbSBkYXRhIG9iamVjdFxyXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaXR5RGF0YSk7XHJcbiAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuZXdEaXYuY2xhc3NOYW1lID0gYCR7a2V5fWA7XHJcbiAgICBuZXdEaXYudGV4dENvbnRlbnQgPSBgJHtjaXR5RGF0YVtrZXldfWA7XHJcbiAgICBjaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0Rpdik7XHJcbiAgfSk7XHJcbiAgY2l0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZU5vd2Nhc3QoY3VycmVudFdlYXRoZXIpIHtcclxuICBjb25zdCBub3djYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3djYXN0XCIpO1xyXG4gIGlmIChub3djYXN0Q29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgbm93Y2FzdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIH1cclxuICBzZXRDb2xvcnMobm93Y2FzdENvbnRhaW5lciwgY3VycmVudFdlYXRoZXIpO1xyXG5cclxuICAvLyBQb3B1bGF0ZSBub3djYXN0IGZyb20gZGF0YSBvYmplY3RcclxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY3VycmVudFdlYXRoZXIpO1xyXG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmV3RGl2LmNsYXNzTmFtZSA9IGAke2tleX1gO1xyXG4gICAgaWYgKGtleSA9PT0gXCJjb25kaXRpb25cIikge1xyXG4gICAgICBuZXdEaXYuaW5uZXJIVE1MID0gYEN1cnJlbnQgV2VhdGhlcjxicj4ke2N1cnJlbnRXZWF0aGVyW2tleV19YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld0Rpdi50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyW2tleV19YDtcclxuICAgIH1cclxuICAgIG5vd2Nhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGl2KTtcclxuICAgIC8vIENyZWF0ZSBpbWFnZSBmb3IgaWNvbiBrZXlcclxuICAgIGlmIChrZXkgPT09IFwiY29uZGl0aW9uSWNvblwiKSB7XHJcbiAgICAgIG5ld0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgaWNvbi5zcmMgPSBgJHtjdXJyZW50V2VhdGhlcltrZXldfWA7XHJcbiAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgIH1cclxuICB9KTtcclxuICBub3djYXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlRm9yZWNhc3QoZm9yZWNhc3REYXRhKSB7XHJcbiAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcmVjYXN0XCIpO1xyXG4gIGlmIChmb3JlY2FzdENvbnRhaW5lci5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgIGZvcmVjYXN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBsZXQgZGF5TnVtID0gMDtcclxuICBmb3JlY2FzdERhdGEuZm9yRWFjaCgoZGF5KSA9PiB7XHJcbiAgICAvLyBDcmVhdGUgRGl2IGZvciBlYWNoIGRheVxyXG4gICAgY29uc3QgZGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRheURpdi5jbGFzc05hbWUgPSBcImZvcmVjYXN0LWRheVwiO1xyXG4gICAgZGF5RGl2LnNldEF0dHJpYnV0ZShcImRhdGEtZGF5LW51bVwiLCBgJHtkYXlOdW19YCk7XHJcbiAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlEaXYpO1xyXG4gICAgZGF5RGl2LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xyXG4gICAgZGF5RGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcbiAgICBzZXRDb2xvcnMoZGF5RGl2LCBkYXkpO1xyXG5cclxuICAgIC8vIEZpbGwgZGl2IHdpdGggZGF0YVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXkpIHtcclxuICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgbmV3RGl2LmNsYXNzTmFtZSA9IGAke2tleX1gO1xyXG4gICAgICBpZiAoa2V5ID09PSBcImRhdGVcIikge1xyXG4gICAgICAgIHN3aXRjaCAoZGF5TnVtKSB7XHJcbiAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIG5ld0Rpdi5pbm5lckhUTUwgPSBgVG9kYXk8YnI+JHtkYXlba2V5XX1gO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgbmV3RGl2LmlubmVySFRNTCA9IGBUb21vcnJvdzxicj4ke2RheVtrZXldfWA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICBuZXdEaXYuaW5uZXJIVE1MID0gYERheSBBZnRlciBUb3Jyb3c8YnI+JHtkYXlba2V5XX1gO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgbmV3RGl2LmlubmVySFRNTCA9IGBEYXkgQWZ0ZXIgVGhhdDxicj4ke2RheVtrZXldfWA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgbmV3RGl2LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0Rpdi50ZXh0Q29udGVudCA9IGAke2RheVtrZXldfWA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRheURpdi5hcHBlbmRDaGlsZChuZXdEaXYpO1xyXG4gICAgICBpZiAoa2V5ID09PSBcImNvbmRpdGlvbkljb25cIikge1xyXG4gICAgICAgIG5ld0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGljb24uc3JjID0gYCR7ZGF5W2tleV19YDtcclxuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRheU51bSsrO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5KGRhdGEpIHtcclxuICBtYWtlQ2l0eShkYXRhLnBsYWNlKTtcclxuICBtYWtlTm93Y2FzdChkYXRhLmN1cnJlbnQpO1xyXG4gIG1ha2VGb3JlY2FzdChkYXRhLmZvcmVjYXN0KTtcclxufVxyXG5cclxuLy8gRGF0YSBoYW5kbGluZywgdG8gYmUgYnJva2VuIG91dCBpbnRvIG93biBtb2R1bGVcclxuZnVuY3Rpb24gcGFyc2VEYXRhKGRhdGEpIHtcclxuICBjb25zdCBwbGFjZSA9IHtcclxuICAgIGNpdHk6IGRhdGEubG9jYXRpb24ubmFtZSxcclxuICAgIHJlZ2lvbjogYCR7ZGF0YS5sb2NhdGlvbi5yZWdpb259LCAke2RhdGEubG9jYXRpb24uY291bnRyeX1gLFxyXG4gICAgdGltZTogYExvY2FsIFRpbWU6ICR7ZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUuc2xpY2UoLTUpfWAsXHJcbiAgICBkYXRlOiBgVG9kYXk6ICR7ZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUuc2xpY2UoMCwgMTApfWAsXHJcbiAgfTtcclxuICBjb25zdCBjdXJyZW50ID0ge1xyXG4gICAgY29uZGl0aW9uOiBgJHtkYXRhLmN1cnJlbnQudGVtcF9jfSDCsEMsICR7ZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0fWAsXHJcbiAgICBjb25kaXRpb25JY29uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXHJcbiAgICBwcmVjaXA6IGBQcmVjaXA6ICR7ZGF0YS5jdXJyZW50LnByZWNpcF9tbX0gbW1gLFxyXG4gICAgd2luZDogYFdpbmQ6ICR7ZGF0YS5jdXJyZW50LndpbmRfa3BofSBrcGgsICR7ZGF0YS5jdXJyZW50LndpbmRfZGlyfWAsXHJcbiAgICBmZWVsc0xpa2U6IGBHdXN0aW5nIHRvICR7ZGF0YS5jdXJyZW50Lmd1c3Rfa3BofSBrcGgsIEZlZWxzIGxpa2UgJHtkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2N9IMKwQ2AsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9yZWNhc3QgPSBbXTtcclxuICBmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5Lmxlbmd0aDsgZGF5KyspIHtcclxuICAgIGNvbnN0IHdpbGxTbm93ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5kYWlseV93aWxsX2l0X3Nub3c7XHJcbiAgICBmb3JlY2FzdFtkYXldID0ge1xyXG4gICAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF0ZSxcclxuICAgICAgY29uZGl0aW9uSWNvbjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5jb25kaXRpb24uaWNvbixcclxuICAgICAgY29uZGl0aW9uOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5LmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICBtYXhUZW1wczogYEhpZ2g6ICR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5tYXh0ZW1wX2N9IMKwQ2AsXHJcbiAgICAgIG1pblRlbXBzOiBgTG93OiAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkubWludGVtcF9jfSDCsENgLFxyXG4gICAgICBodW1pZGl0eTogYEh1bWlkaXR5OiAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkuYXZnaHVtaWRpdHl9JSBIdW1pZGl0eWAsXHJcbiAgICAgIHByZWNpcDogKCh3aWxsU25vdykgPyBgUHJlY2lwaXRhdGlvbjogJHtkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5LmRhaWx5X2NoYW5jZV9vZl9zbm93fSUgY2hhbmNlYCA6IGBQcmVjaXBpdGF0aW9uOiAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW59JSBjaGFuY2VgKSxcclxuICAgICAgcHJlY2lwVG90YWw6ICgod2lsbFNub3cpID8gYFRvdGFsOiAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkudG90YWxzbm93X2NtfWNtIHNub3dgIDogYFRvdGFsOiAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkudG90YWxwcmVjaXBfbW19bW0gcmFpbmApLFxyXG4gICAgICBzdW5yaXNlOiBgU3VucmlzZTogJHtkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uYXN0cm8uc3VucmlzZX1gLFxyXG4gICAgICBzdW5zZXQ6IGBTdW5zZXQ6ICR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmFzdHJvLnN1bnNldH1gLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmV0dXJuIHsgcGxhY2UsIGN1cnJlbnQsIGZvcmVjYXN0IH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShjaXR5KSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIEFzc2lnbiBhcGkgc2VhcmNoIHVybFxyXG4gICAgY29uc3Qgc2VhcmNoRmVlZGJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1mZWVkYmFja1wiKTtcclxuICAgIHNlYXJjaEZlZWRiYWNrLnRleHRDb250ZW50ID0gXCJTZWFyY2hpbmcgLiAuIC4gXCI7XHJcbiAgICBjb25zdCBhcGlLZXkgPSBcIjFmZGViOTUxODVjMTQ1ZjA4MDkyMDE3MjMyMzI5MDhcIjtcclxuICAgIGNvbnN0IGFwaUVuZHBvaW50ID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7YXBpS2V5fSZxPSR7Y2l0eX0mZGF5cz0zJmFxaT15ZXMmYWxlcnRzPW5vYDtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaUVuZHBvaW50LCB7IG1vZGU6IFwiY29yc1wiIH0pO1xyXG4gICAgLy8gQWxlcnQgdXNlciBpZiBpbnZhbGlkIGNpdHkgc2VhcmNoXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHNlYXJjaEZlZWRiYWNrLnRleHRDb250ZW50ID0gYENpdHkgXCIke2NpdHl9XCIgbm90IGZvdW5kLiBDaGVjayBzZWFyY2ggYW5kIHRyeSBhZ2FpbmA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWFyY2hGZWVkYmFjay50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICAvLyBIYW5kbGUgZGF0YVxyXG4gICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEV2ZW50IGhhbmRsZXJzXHJcbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGZldGNoRGF0YShzZWFyY2hJbnB1dC52YWx1ZSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB1cGRhdGVEaXNwbGF5KHBhcnNlRGF0YShkYXRhKSkpO1xyXG59KTtcclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==