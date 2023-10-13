/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Regular.ttf */ "./src/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-weight: 600;
    font-style: normal;
  }

body {
    margin: 0;
    font-family: 'Roboto';
}

#content {

    height: 100vh;
    display: grid;

    grid-template-columns: 300px 1fr;
    grid-template-rows: 76px 1fr;
}

.header {
    grid-column: 1 / 3;
    grid-row: 1;
    display: grid;
    grid-template-columns: 1fr 600px 300px 150px;

    font-size: 24px;
    color: white;
}

.logo-header {
    padding-left: 20px;
}

.header > div {
    background: rgb(34, 166, 153);
}

.header > div + div {
    background: rgb(242, 190, 34);
}

.header > div + div + div {
    background: rgb(242, 151, 39);
}

.header > div + div + div + div {
    background: rgb(242, 76, 61);
}

.sidebar {
    background: lightgrey;
    padding: 32px 40px;

    grid-column: 1 / 1;
    grid-row: 2 / 2;

    display: flex;
    flex-direction: column;
    gap: 32px;
}

.side-display {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.side-display button {
    background-color: white;
    font-size: 16px;
    padding: 8px 20px;
    cursor: pointer;

    border-radius: 8px;
    border-top: 2px solid rgb(242, 151, 39);
    border-left: 2px solid rgb(242, 151, 39);
    border-bottom: 2px solid rgb(242, 76, 61);
    border-right: 2px solid rgb(242, 76, 61);
}

.project-display {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.sidebar-heading {
    align-self: center;
    font-size: 20px;
    border-bottom: 2px solid black;
}

.project-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

#project-button {
    background-color: white;
    font-size: 16px;
    padding: 8px 20px;
    padding-top: 10px;
    cursor: pointer;

    border-radius: 8px;
    border-top: 2px solid rgb(242, 151, 39);
    border-left: 2px solid rgb(242, 151, 39);
    border-bottom: 2px solid rgb(242, 76, 61);
    border-right: 2px solid rgb(242, 76, 61);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.icon-container button {
    background: rgb(255, 255, 255, 0);
    border: none;
    cursor: pointer;

}

.project-icon-close {
    height: 12px;
    width: 12px;
    padding-bottom: 3px;
}

.project-icon-edit {
    height: 18px;
    width: 18px;
}

#add-project {
    background-color: white;
    font-size: 16px;
    padding: 8px 20px;
    margin-top: 20px;
    cursor: pointer;

    border-radius: 8px;
    border-top: 2px solid rgb(242, 151, 39);
    border-left: 2px solid rgb(242, 151, 39);
    border-bottom: 2px solid rgb(242, 76, 61);
    border-right: 2px solid rgb(242, 76, 61);
}

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 32px 128px;
}

.main-heading {
    font-size: 36px;
    border-bottom: 2px solid black;
    margin-bottom: 40px;
}

.todo-heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 720px;

    font-size: 20px;
    border-bottom: 1px solid black;
}

.todo-container {
    width: 840px;
    display: flex;
    flex-direction: column;
}

#todo-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 4px;
    margin-top: 4px;
    border-bottom: 1px solid black;
}

.todo-icon-container {
    display: flex;
}

.todo-icon-container button {
    background: rgb(255, 255, 255, 0);
    border: none;
    cursor: pointer;
}

.edit-todo-btn {
    height: 28px;
    width: 28px;
}

.close-todo-btn {
    height: 24px;
    width: 24px;
    padding-bottom: 3px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,4CAAsC;IACtC,gBAAgB;IAChB,kBAAkB;EACpB;;AAEF;IACI,SAAS;IACT,qBAAqB;AACzB;;AAEA;;IAEI,aAAa;IACb,aAAa;;IAEb,gCAAgC;IAChC,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,4CAA4C;;IAE5C,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;;IAElB,kBAAkB;IAClB,eAAe;;IAEf,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,iBAAiB;IACjB,eAAe;;IAEf,kBAAkB;IAClB,uCAAuC;IACvC,wCAAwC;IACxC,yCAAyC;IACzC,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;;IAEf,kBAAkB;IAClB,uCAAuC;IACvC,wCAAwC;IACxC,yCAAyC;IACzC,wCAAwC;;IAExC,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,eAAe;;AAEnB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;;IAEf,kBAAkB;IAClB,uCAAuC;IACvC,wCAAwC;IACxC,yCAAyC;IACzC,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,UAAU;;IAEV,eAAe;IACf,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,kBAAkB;IAClB,eAAe;IACf,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;AACvB","sourcesContent":["@font-face {\n    font-family: 'Roboto';\n    src: url('./fonts/Roboto-Regular.ttf');\n    font-weight: 600;\n    font-style: normal;\n  }\n\nbody {\n    margin: 0;\n    font-family: 'Roboto';\n}\n\n#content {\n\n    height: 100vh;\n    display: grid;\n\n    grid-template-columns: 300px 1fr;\n    grid-template-rows: 76px 1fr;\n}\n\n.header {\n    grid-column: 1 / 3;\n    grid-row: 1;\n    display: grid;\n    grid-template-columns: 1fr 600px 300px 150px;\n\n    font-size: 24px;\n    color: white;\n}\n\n.logo-header {\n    padding-left: 20px;\n}\n\n.header > div {\n    background: rgb(34, 166, 153);\n}\n\n.header > div + div {\n    background: rgb(242, 190, 34);\n}\n\n.header > div + div + div {\n    background: rgb(242, 151, 39);\n}\n\n.header > div + div + div + div {\n    background: rgb(242, 76, 61);\n}\n\n.sidebar {\n    background: lightgrey;\n    padding: 32px 40px;\n\n    grid-column: 1 / 1;\n    grid-row: 2 / 2;\n\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n}\n\n.side-display {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.side-display button {\n    background-color: white;\n    font-size: 16px;\n    padding: 8px 20px;\n    cursor: pointer;\n\n    border-radius: 8px;\n    border-top: 2px solid rgb(242, 151, 39);\n    border-left: 2px solid rgb(242, 151, 39);\n    border-bottom: 2px solid rgb(242, 76, 61);\n    border-right: 2px solid rgb(242, 76, 61);\n}\n\n.project-display {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.sidebar-heading {\n    align-self: center;\n    font-size: 20px;\n    border-bottom: 2px solid black;\n}\n\n.project-container {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n#project-button {\n    background-color: white;\n    font-size: 16px;\n    padding: 8px 20px;\n    padding-top: 10px;\n    cursor: pointer;\n\n    border-radius: 8px;\n    border-top: 2px solid rgb(242, 151, 39);\n    border-left: 2px solid rgb(242, 151, 39);\n    border-bottom: 2px solid rgb(242, 76, 61);\n    border-right: 2px solid rgb(242, 76, 61);\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.icon-container button {\n    background: rgb(255, 255, 255, 0);\n    border: none;\n    cursor: pointer;\n\n}\n\n.project-icon-close {\n    height: 12px;\n    width: 12px;\n    padding-bottom: 3px;\n}\n\n.project-icon-edit {\n    height: 18px;\n    width: 18px;\n}\n\n#add-project {\n    background-color: white;\n    font-size: 16px;\n    padding: 8px 20px;\n    margin-top: 20px;\n    cursor: pointer;\n\n    border-radius: 8px;\n    border-top: 2px solid rgb(242, 151, 39);\n    border-left: 2px solid rgb(242, 151, 39);\n    border-bottom: 2px solid rgb(242, 76, 61);\n    border-right: 2px solid rgb(242, 76, 61);\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n    padding: 32px 128px;\n}\n\n.main-heading {\n    font-size: 36px;\n    border-bottom: 2px solid black;\n    margin-bottom: 40px;\n}\n\n.todo-heading {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    gap: 720px;\n\n    font-size: 20px;\n    border-bottom: 1px solid black;\n}\n\n.todo-container {\n    width: 840px;\n    display: flex;\n    flex-direction: column;\n}\n\n#todo-button {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 4px;\n    margin-top: 4px;\n    border-bottom: 1px solid black;\n}\n\n.todo-icon-container {\n    display: flex;\n}\n\n.todo-icon-container button {\n    background: rgb(255, 255, 255, 0);\n    border: none;\n    cursor: pointer;\n}\n\n.edit-todo-btn {\n    height: 28px;\n    width: 28px;\n}\n\n.close-todo-btn {\n    height: 24px;\n    width: 24px;\n    padding-bottom: 3px;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inbox: () => (/* binding */ inbox),
/* harmony export */   project: () => (/* binding */ project),
/* harmony export */   todo: () => (/* binding */ todo)
/* harmony export */ });
function project (name, ID, todos) {
    const getName = () => name;
    const getID = () => ID
    const getTodos = () => todos

    const setName = newName => {
        name = newName;
    }

    const setID = newID => {
        ID = newID;
    }

    const setTodo = newTodo => {
        todos.push(newTodo)
    }
    
    return { 
        getName, 
        getID, 
        getTodos, 
        setName, 
        setID, 
        setTodo 
    }
}

function inbox (todos) {
    const getTodos = () => todos
    const getName = () => 'Inbox'

    const setTodo = todo => {
        todos.push(todo)
    }

    return {
        getTodos,
        getName,
        setTodo
    }
}

function todo (name, description, duedate, priority, ID) {
    const getName = () => name;
    const getDescription = () => description;
    const getDuedate = () => duedate;
    const getPriority = () => priority;
    const getID = () => ID

    const setName = newName => {
        name = newName
    }

    const setDescription = newDescription => {
        description = newDescription
    }

    const setDuedate = newDuedate => {
        duedate = newDuedate
    }

    const setPriority = newPriority => {
        priority = newPriority
    }

    const setID = newID => {
        ID = newID
    }

    return { 
        getName, 
        getDescription, 
        getDuedate, 
        getPriority, 
        getID,
        setName,
        setDescription,
        setDuedate,
        setPriority,
        setID 
    }

}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayHeading: () => (/* binding */ displayHeading),
/* harmony export */   displayInboxTodos: () => (/* binding */ displayInboxTodos),
/* harmony export */   displayProjectModal: () => (/* binding */ displayProjectModal),
/* harmony export */   displayProjects: () => (/* binding */ displayProjects)
/* harmony export */ });
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object.js */ "./src/object.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _icons_close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/close.svg */ "./src/icons/close.svg");
/* harmony import */ var _icons_edit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/edit.svg */ "./src/icons/edit.svg");





let projects = [];
let projectIndex = 0;
let currentID = 0;
let inboxTodos = (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.inbox)([])
projects.push((0,_object_js__WEBPACK_IMPORTED_MODULE_0__.project)('Work', projectIndex, [(0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('write', 'write a stuff', '56/56/5656'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('code', 'code a bunch', '78/78/7878'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('nut', 'code a bunch', 'not'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('livr', 'code a bunch', 'goyf'),(0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('tsrm', 'code a bunch', 'fere')]));
projects.push((0,_object_js__WEBPACK_IMPORTED_MODULE_0__.project)('Gym', projectIndex, [(0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('Run', 'go for a run', '9/19/1919'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('lift', 'lift the weights', '23/23/2323'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('kisf', 'code a bunch', 'rsfr'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('cvev', 'code a bunch', 'hhhht'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('eert', 'code a bunch', 'bbob')]));
projects.push((0,_object_js__WEBPACK_IMPORTED_MODULE_0__.project)('AAA', projectIndex, [(0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('a', 'write a stuff', 'a'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('aa', 'code a bunch', 'aa'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('aaa', 'code a bunch', 'aaa'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('aaaa', 'code a bunch', 'aaaa'),(0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('aaaaa', 'code a bunch', 'aaaaa')]));
projects.push((0,_object_js__WEBPACK_IMPORTED_MODULE_0__.project)('SSS', projectIndex, [(0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('s', 'go for a run', 's'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('ss', 'lift the weights', 'ss'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('sss', 'code a bunch', 'sss'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('ssss', 'code a bunch', 'ssss'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('sssss', 'code a bunch', 'sssss')]));
projects.push((0,_object_js__WEBPACK_IMPORTED_MODULE_0__.project)('DDD', projectIndex, [(0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('d', 'write a stuff', 'd'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('dd', 'code a bunch', 'dd'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('ddd', 'code a bunch', 'ddd'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('dddd', 'code a bunch', 'dddd'),(0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('ddddd', 'code a bunch', 'ddddd')]));
projects.push((0,_object_js__WEBPACK_IMPORTED_MODULE_0__.project)('FFF', projectIndex, [(0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('f', 'go for a run', 'f'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('ff', 'lift the weights', 'ff'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('fff', 'code a bunch', 'fff'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('ffff', 'code a bunch', 'ffff'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('fffff', 'code a bunch', 'fffff')]));

function displayInboxTodos() {
    inboxTodos = (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.inbox)([])
    addTodosToInbox()
    ;(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.displayTodo)(inboxTodos)
}

function displayHeading(title) {
    const element = document.querySelector('.main-heading')
    element.textContent = title
}

function displayProjects() {

    projectIndex = 0;

    const element = document.querySelector('.project-container')
    element.textContent = ''

    projects.forEach(displayProject);

    function displayProject(value) {

        value.setID(projectIndex)

        const projectButton = document.createElement('div')
        projectButton.setAttribute('id', 'project-button')
        projectButton.classList.add(projectIndex)
        projectButton.textContent = value.getName()

        const iconContainer = document.createElement('div')
        iconContainer.classList.add('icon-container')

        const closeBtn = document.createElement('button')
        closeBtn.setAttribute('id', 'close-project-btn')
        closeBtn.classList.add(value.getID())

        const editBtn = document.createElement('button')
        editBtn.setAttribute('id', 'edit-project-btn')
        editBtn.classList.add(value.getID())

        const closeImg = document.createElement('img')
        closeImg.setAttribute('src', _icons_close_svg__WEBPACK_IMPORTED_MODULE_2__)
        closeImg.classList.add('project-icon-close')

        const editImg = document.createElement('img')
        editImg.setAttribute('src', _icons_edit_svg__WEBPACK_IMPORTED_MODULE_3__)
        editImg.classList.add('project-icon-edit')

        editBtn.appendChild(editImg)
        closeBtn.appendChild(closeImg)
        iconContainer.appendChild(editBtn)
        iconContainer.appendChild(closeBtn)
        projectButton.appendChild(iconContainer)
        element.appendChild(projectButton)

        projectIndex += 1;
    }

    loadProjectInfo()
    loadProjectCloseBtns()
    loadProjectEditBtns();
}

function loadProjectInfo() {

    const buttons = document.querySelectorAll('#project-button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (event) => {
            displayHeading(buttons[i].textContent)
            ;(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.displayTodo)(selectProjectByID(buttons[i].classList[0]))
            ;(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.displayTodoModal)(selectProjectByID(buttons[i].classList[0]))
        })
    }
}

function loadProjectCloseBtns() {

    const buttons = document.querySelectorAll('#close-project-btn')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (event) => {
            event.stopPropagation()
            projects.splice(projects.indexOf(selectProjectByID(buttons[i].classList[0])), 1)
            displayProjects()
            displayHeading('Inbox')
            displayInboxTodos()
        })
    }
    
}

function loadProjectEditBtns() {

    const buttons = document.querySelectorAll('#edit-project-btn')
    const editProjectModal = document.getElementById('edit-project-modal')
    const editProjectName = document.getElementById('edit-project-name')
    const cancelBtn = document.getElementById('cancel-edit-project-btn')
    const confirmBtn = document.getElementById('confirm-edit-project-btn')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            editProjectModal.showModal()
            currentID = buttons[i].classList[0]
        })
    }

    confirmBtn.addEventListener('click', (event) => {
        event.stopImmediatePropagation()
        event.preventDefault()
        selectProjectByID(currentID).setName(editProjectName.value)
        editProjectName.value = ''
        editProjectModal.close();
        displayProjects()
    })

    cancelBtn.addEventListener('click', (event) => {
        event.stopImmediatePropagation()
        event.preventDefault()
        editProjectName.value = ''
        editProjectModal.close()
    })
}

function selectProjectByID(ID) {

    let selectedProject = ''

    projects.forEach(selectProject);

    function selectProject(value) {
        if (value.getID() == ID) {
            selectedProject = value
        }
    }

    return selectedProject
}

function displayProjectModal() {

    const addProject = document.getElementById('add-project')
    const projectModal = document.getElementById('project-modal')
    const projectName = document.getElementById('projectName')
    const cancelBtn = document.getElementById('cancelProjectBtn')
    const confirmBtn = document.getElementById('confirmProjectBtn')

    addProject.addEventListener('click', () => {
        projectModal.showModal()
    })

    confirmBtn.addEventListener('click', (event) => {
        event.preventDefault();
        projects.push((0,_object_js__WEBPACK_IMPORTED_MODULE_0__.project)(projectName.value, projectIndex, []))
        projectName.value = ''
        projectModal.close()
        displayProjects()
    })

    cancelBtn.addEventListener('click', (event) => {
        event.preventDefault()
        projectName.value = ''
        projectModal.close()
    })
}

function addTodosToInbox() {
    projects.forEach(getProject)
    function getProject(project) {

        project.getTodos().forEach(getTodo)
        function getTodo(todo) {
            inboxTodos.setTodo(todo)
        }
    }
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayTodo: () => (/* binding */ displayTodo),
/* harmony export */   displayTodoModal: () => (/* binding */ displayTodoModal)
/* harmony export */ });
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object.js */ "./src/object.js");
/* harmony import */ var _icons_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/close.svg */ "./src/icons/close.svg");
/* harmony import */ var _icons_edit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/edit.svg */ "./src/icons/edit.svg");




let todoIndex = 0;

function displayTodo(project) {

    todoIndex = 0;

    const element = document.querySelector('.todo-container')
    element.textContent = ''

    project.getTodos().forEach(displayTodos)

    function displayTodos(value) {

        value.setID(todoIndex) 

        const todoSection = document.createElement('div')
        todoSection.setAttribute('id', 'todo-button')
        todoSection.classList.add(todoIndex)
        todoSection.textContent = value.getName()

        const iconContainer = document.createElement('div')
        iconContainer.classList.add('todo-icon-container')

        const todoDuedate = document.createElement('div')
        todoDuedate.setAttribute('id', 'todo-due-date')
        todoDuedate.textContent = value.getDuedate()

        const closeBtn = document.createElement('button')
        closeBtn.setAttribute('id', 'close-todo-btn')
        closeBtn.classList.add(value.getID())
        closeBtn.classList.add('close-todo-btn')

        const editBtn = document.createElement('button')
        editBtn.setAttribute('id', 'edit-todo-btn-' + value.getID() + ' ' + project.getName())
        editBtn.classList.add(value.getID())
        editBtn.classList.add('edit-todo-btn')

        const closeImg = document.createElement('img')
        closeImg.setAttribute('src', _icons_close_svg__WEBPACK_IMPORTED_MODULE_1__)
        closeImg.classList.add('todo-icon-close')

        const editImg = document.createElement('img')
        editImg.setAttribute('src', _icons_edit_svg__WEBPACK_IMPORTED_MODULE_2__)
        editImg.classList.add('todo-icon-edit')

        editBtn.appendChild(editImg)
        closeBtn.appendChild(closeImg)
        iconContainer.appendChild(todoDuedate)
        iconContainer.appendChild(editBtn)
        iconContainer.appendChild(closeBtn)
        todoSection.appendChild(iconContainer)
        element.appendChild(todoSection)

        todoIndex += 1;

    }

    loadTodoCloseBtns(project)
    loadTodoEditBtns(project)

}

function loadTodoCloseBtns(project) {

    let todoArray = project.getTodos()

    const buttons = document.querySelectorAll('#close-todo-btn')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            todoArray.splice(todoArray.indexOf(selectTodoByID(buttons[i].classList[0], project)), 1)
            displayTodo(project)
        })
    }

}

function loadTodoEditBtns(project) {

    let todoArray = project.getTodos()
    todoArray.forEach(setupModalButtons)

    function setupModalButtons(value) {

        let ID = value.getID()
        let currentTodo = selectTodoByID(ID, project)

        const button = document.getElementById('edit-todo-btn-' + ID + ' ' + project.getName())
        const editTodoModal = document.getElementById('edit-todo-modal')
        const editTodoName = document.getElementById('edit-todo-name')
        const editTodoDesc = document.getElementById('edit-todo-desc')
        const editTodoDuedate = document.getElementById('edit-todo-duedate')
        const editTodoPriority = document.getElementById('edit-todo-priority')

        button.addEventListener('click', () => {
            editTodoModal.showModal()
            const element = document.querySelector('.edit-todo-dialog-btns')
            element.textContent = ''
    
            const cancelBtn = document.createElement('button')
            cancelBtn.setAttribute('id', 'cancel-edit-todo-btn-' + ID + ' ' + project.getName())
            cancelBtn.textContent = 'Cancel'
        
            const confirmBtn = document.createElement('button')
            confirmBtn.setAttribute('id', 'confirm-edit-todo-btn-' + ID + ' ' + project.getName())
            confirmBtn.setAttribute('value', 'default')
            confirmBtn.textContent = 'Confirm'
        
            element.appendChild(cancelBtn)
            element.appendChild(confirmBtn)
    
            const modalCancelBtn = document.getElementById('cancel-edit-todo-btn-' + ID + ' ' + project.getName())
            const modalConfirmBtn = document.getElementById('confirm-edit-todo-btn-' + ID + ' ' + project.getName())
        
            modalCancelBtn.addEventListener('click', (event) => {
                event.stopImmediatePropagation()
                event.preventDefault()
                editTodoName.value = ''
                editTodoDesc.value = ''
                editTodoDuedate.value = ''
                editTodoPriority.value = ''
                editTodoModal.close()
            })

            modalConfirmBtn.addEventListener('click', (event) => {
                event.stopImmediatePropagation()
                event.preventDefault()
                currentTodo.setName(editTodoName.value)
                currentTodo.setDescription(editTodoDesc.value)
                currentTodo.setDuedate(editTodoDuedate.value)
                currentTodo.setPriority(editTodoPriority.value)
                editTodoName.value = ''
                editTodoDesc.value = ''
                editTodoDuedate.value = ''
                editTodoPriority.value = ''
                editTodoModal.close()
                displayTodo(project)
            })
        })
    }
}

function selectTodoByID(ID, project) {

    let selectedTodo = ''

    project.getTodos().forEach(selectTodo);

    function selectTodo(value) {
        if (value.getID() == ID) {
            selectedTodo = value
        }
    }
    return selectedTodo
}

function setupAddTodoButton(project) {
    let ID = project.getID()
    const element = document.querySelector('.btn-container')
    element.textContent = ''

    const addBtn = document.createElement('button')
    addBtn.setAttribute('id', 'add-todo-' + ID)
    addBtn.textContent = 'New Task'

    element.appendChild(addBtn)
}

function setupAddTodoModal(project) {
    let ID = project.getID()
    const element = document.querySelector('.todo-dialog-btns')
    element.textContent = ''

    const cancelBtn = document.createElement('button')
    cancelBtn.setAttribute('id', 'cancel-todo-btn-' + ID)
    cancelBtn.textContent = 'Cancel'

    const confirmBtn = document.createElement('button')
    confirmBtn.setAttribute('id', 'confirm-todo-btn-' + ID)
    confirmBtn.setAttribute('value', 'default')
    confirmBtn.textContent = 'Confirm'

    element.appendChild(cancelBtn)
    element.appendChild(confirmBtn)
}

function displayTodoModal(project) {

    let ID = project.getID()
    let currentTodo = (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)()
    setupAddTodoButton(project)

    const addTodo = document.getElementById('add-todo-' + ID)
    const todoModal = document.getElementById('todo-modal')
    const todoName = document.getElementById('todo-name')
    const todoDesc = document.getElementById('todo-desc')
    const todoDuedate = document.getElementById('todo-duedate')
    const todoPriority = document.getElementById('todo-priority')

    addTodo.addEventListener('click', () => {
        todoModal.showModal()
        setupAddTodoModal(project)
        const cancelBtn = document.getElementById('cancel-todo-btn-' + ID)
        const confirmBtn = document.getElementById('confirm-todo-btn-' + ID)

        confirmBtn.addEventListener('click', (event) => {
            event.preventDefault();
            currentTodo.setName(todoName.value)
            currentTodo.setDescription(todoDesc.value)
            currentTodo.setDuedate(todoDuedate.value)
            currentTodo.setPriority(todoPriority.value)
            currentTodo.setID(todoIndex)
            project.setTodo(currentTodo)
            currentTodo = (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)()
            todoName.value = ''
            todoDesc.value = ''
            todoDuedate.value = ''
            todoPriority.value = ''
            todoModal.close()
            displayTodo(project)
        })

        cancelBtn.addEventListener('click', (event) => {
            event.preventDefault()
            todoName.value = ''
            todoDesc.value = ''
            todoDuedate.value = ''
            todoPriority.value = ''
            todoModal.close()
        })
    })
}



/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/icons/close.svg":
/*!*****************************!*\
  !*** ./src/icons/close.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ad8e2deadc107049d3f.svg";

/***/ }),

/***/ "./src/icons/edit.svg":
/*!****************************!*\
  !*** ./src/icons/edit.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e9a3aefe340560f8ec9.svg";

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



function loadMainPage() {

    loadInbox()

    ;(0,_project__WEBPACK_IMPORTED_MODULE_1__.displayProjects)()
    ;(0,_project__WEBPACK_IMPORTED_MODULE_1__.displayProjectModal)()

    const buttons = document.querySelectorAll('#sidebar-button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            (0,_project__WEBPACK_IMPORTED_MODULE_1__.displayHeading)(buttons[i].textContent)
            ;(0,_project__WEBPACK_IMPORTED_MODULE_1__.displayProjects)()
        })
    }
}

function loadInbox() {

    (0,_project__WEBPACK_IMPORTED_MODULE_1__.displayInboxTodos)()
    const button = document.querySelector('#inbox-button');

    button.addEventListener('click', () => {
        (0,_project__WEBPACK_IMPORTED_MODULE_1__.displayHeading)('Inbox')
        ;(0,_project__WEBPACK_IMPORTED_MODULE_1__.displayInboxTodos)()
    })
}

loadMainPage()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlJQUE2QztBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxhQUFhLFlBQVksVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFL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QUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9MZ0M7QUFDSztBQUNGOztBQUVuQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLDZDQUFLO0FBQzFDOztBQUVBO0FBQ0Esb0NBQW9DLDRDQUFJO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixnREFBSTtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdEQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNPQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQzZFOztBQUVqRzs7QUFFQTs7QUFFQSxJQUFJLDBEQUFlO0FBQ25CLElBQUksOERBQW1COztBQUV2Qjs7QUFFQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0EsWUFBWSx3REFBYztBQUMxQixZQUFZLDBEQUFlO0FBQzNCLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBLElBQUksMkRBQWlCO0FBQ3JCOztBQUVBO0FBQ0EsUUFBUSx3REFBYztBQUN0QixRQUFRLDREQUFpQjtBQUN6QixLQUFLO0FBQ0w7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvb2JqZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG59XG5cbiNjb250ZW50IHtcblxuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzZweCAxZnI7XG59XG5cbi5oZWFkZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBncmlkLXJvdzogMTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDYwMHB4IDMwMHB4IDE1MHB4O1xuXG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ28taGVhZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5oZWFkZXIgPiBkaXYge1xuICAgIGJhY2tncm91bmQ6IHJnYigzNCwgMTY2LCAxNTMpO1xufVxuXG4uaGVhZGVyID4gZGl2ICsgZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQyLCAxOTAsIDM0KTtcbn1cblxuLmhlYWRlciA+IGRpdiArIGRpdiArIGRpdiB7XG4gICAgYmFja2dyb3VuZDogcmdiKDI0MiwgMTUxLCAzOSk7XG59XG5cbi5oZWFkZXIgPiBkaXYgKyBkaXYgKyBkaXYgKyBkaXYge1xuICAgIGJhY2tncm91bmQ6IHJnYigyNDIsIDc2LCA2MSk7XG59XG5cbi5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gICAgcGFkZGluZzogMzJweCA0MHB4O1xuXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAxO1xuICAgIGdyaWQtcm93OiAyIC8gMjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDMycHg7XG59XG5cbi5zaWRlLWRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5zaWRlLWRpc3BsYXkgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2IoMjQyLCAxNTEsIDM5KTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYigyNDIsIDE1MSwgMzkpO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjQyLCA3NiwgNjEpO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYigyNDIsIDc2LCA2MSk7XG59XG5cbi5wcm9qZWN0LWRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG59XG5cbi5zaWRlYmFyLWhlYWRpbmcge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG59XG5cbiNwcm9qZWN0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDI0MiwgMTUxLCAzOSk7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2IoMjQyLCAxNTEsIDM5KTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDI0MiwgNzYsIDYxKTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMjQyLCA3NiwgNjEpO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmljb24tY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUsIDApO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbn1cblxuLnByb2plY3QtaWNvbi1jbG9zZSB7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG5cbi5wcm9qZWN0LWljb24tZWRpdCB7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xufVxuXG4jYWRkLXByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDI0MiwgMTUxLCAzOSk7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2IoMjQyLCAxNTEsIDM5KTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDI0MiwgNzYsIDYxKTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMjQyLCA3NiwgNjEpO1xufVxuXG4ubWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgcGFkZGluZzogMzJweCAxMjhweDtcbn1cblxuLm1haW4taGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4udG9kby1oZWFkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogNzIwcHg7XG5cbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4udG9kby1jb250YWluZXIge1xuICAgIHdpZHRoOiA4NDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiN0b2RvLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnRvZG8taWNvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50b2RvLWljb24tY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUsIDApO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lZGl0LXRvZG8tYnRuIHtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgd2lkdGg6IDI4cHg7XG59XG5cbi5jbG9zZS10b2RvLWJ0biB7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksU0FBUztJQUNULHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsYUFBYTs7SUFFYixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNENBQTRDOztJQUU1QyxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7O0lBRWxCLGtCQUFrQjtJQUNsQixlQUFlOztJQUVmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlOztJQUVmLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsd0NBQXdDO0lBQ3hDLHlDQUF5QztJQUN6Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTs7SUFFZixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLHdDQUF3QztJQUN4Qyx5Q0FBeUM7SUFDekMsd0NBQXdDOztJQUV4QyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTs7SUFFZixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLHdDQUF3QztJQUN4Qyx5Q0FBeUM7SUFDekMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7O0lBRW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsVUFBVTs7SUFFVixlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxufVxcblxcbiNjb250ZW50IHtcXG5cXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzZweCAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2MDBweCAzMDBweCAxNTBweDtcXG5cXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sb2dvLWhlYWRlciB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLmhlYWRlciA+IGRpdiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzNCwgMTY2LCAxNTMpO1xcbn1cXG5cXG4uaGVhZGVyID4gZGl2ICsgZGl2IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MiwgMTkwLCAzNCk7XFxufVxcblxcbi5oZWFkZXIgPiBkaXYgKyBkaXYgKyBkaXYge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNTEsIDM5KTtcXG59XFxuXFxuLmhlYWRlciA+IGRpdiArIGRpdiArIGRpdiArIGRpdiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNDIsIDc2LCA2MSk7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiAzMnB4IDQwcHg7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMycHg7XFxufVxcblxcbi5zaWRlLWRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5zaWRlLWRpc3BsYXkgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDI0MiwgMTUxLCAzOSk7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiKDI0MiwgMTUxLCAzOSk7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjQyLCA3NiwgNjEpO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMjQyLCA3NiwgNjEpO1xcbn1cXG5cXG4ucHJvamVjdC1kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkaW5nIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4jcHJvamVjdC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDI0MiwgMTUxLCAzOSk7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiKDI0MiwgMTUxLCAzOSk7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjQyLCA3NiwgNjEpO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMjQyLCA3NiwgNjEpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5pY29uLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4ucHJvamVjdC1pY29uLWNsb3NlIHtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcXG59XFxuXFxuLnByb2plY3QtaWNvbi1lZGl0IHtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICB3aWR0aDogMThweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDI0MiwgMTUxLCAzOSk7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiKDI0MiwgMTUxLCAzOSk7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjQyLCA3NiwgNjEpO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMjQyLCA3NiwgNjEpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAzMnB4IDEyOHB4O1xcbn1cXG5cXG4ubWFpbi1oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi50b2RvLWhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogNzIwcHg7XFxuXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgICB3aWR0aDogODQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiN0b2RvLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRvZG8taWNvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9kby1pY29uLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWRpdC10b2RvLWJ0biB7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgd2lkdGg6IDI4cHg7XFxufVxcblxcbi5jbG9zZS10b2RvLWJ0biB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gcHJvamVjdCAobmFtZSwgSUQsIHRvZG9zKSB7XG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gICAgY29uc3QgZ2V0SUQgPSAoKSA9PiBJRFxuICAgIGNvbnN0IGdldFRvZG9zID0gKCkgPT4gdG9kb3NcblxuICAgIGNvbnN0IHNldE5hbWUgPSBuZXdOYW1lID0+IHtcbiAgICAgICAgbmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SUQgPSBuZXdJRCA9PiB7XG4gICAgICAgIElEID0gbmV3SUQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VG9kbyA9IG5ld1RvZG8gPT4ge1xuICAgICAgICB0b2Rvcy5wdXNoKG5ld1RvZG8pXG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7IFxuICAgICAgICBnZXROYW1lLCBcbiAgICAgICAgZ2V0SUQsIFxuICAgICAgICBnZXRUb2RvcywgXG4gICAgICAgIHNldE5hbWUsIFxuICAgICAgICBzZXRJRCwgXG4gICAgICAgIHNldFRvZG8gXG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbmJveCAodG9kb3MpIHtcbiAgICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHRvZG9zXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+ICdJbmJveCdcblxuICAgIGNvbnN0IHNldFRvZG8gPSB0b2RvID0+IHtcbiAgICAgICAgdG9kb3MucHVzaCh0b2RvKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFRvZG9zLFxuICAgICAgICBnZXROYW1lLFxuICAgICAgICBzZXRUb2RvXG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b2RvIChuYW1lLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksIElEKSB7XG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgICBjb25zdCBnZXREdWVkYXRlID0gKCkgPT4gZHVlZGF0ZTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuICAgIGNvbnN0IGdldElEID0gKCkgPT4gSURcblxuICAgIGNvbnN0IHNldE5hbWUgPSBuZXdOYW1lID0+IHtcbiAgICAgICAgbmFtZSA9IG5ld05hbWVcbiAgICB9XG5cbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uID0+IHtcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGNvbnN0IHNldER1ZWRhdGUgPSBuZXdEdWVkYXRlID0+IHtcbiAgICAgICAgZHVlZGF0ZSA9IG5ld0R1ZWRhdGVcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IG5ld1ByaW9yaXR5ID0+IHtcbiAgICAgICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eVxuICAgIH1cblxuICAgIGNvbnN0IHNldElEID0gbmV3SUQgPT4ge1xuICAgICAgICBJRCA9IG5ld0lEXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIGdldE5hbWUsIFxuICAgICAgICBnZXREZXNjcmlwdGlvbiwgXG4gICAgICAgIGdldER1ZWRhdGUsIFxuICAgICAgICBnZXRQcmlvcml0eSwgXG4gICAgICAgIGdldElELFxuICAgICAgICBzZXROYW1lLFxuICAgICAgICBzZXREZXNjcmlwdGlvbixcbiAgICAgICAgc2V0RHVlZGF0ZSxcbiAgICAgICAgc2V0UHJpb3JpdHksXG4gICAgICAgIHNldElEIFxuICAgIH1cblxufVxuXG5leHBvcnQge1xuICAgIHByb2plY3QsXG4gICAgaW5ib3gsXG4gICAgdG9kb1xufSIsImltcG9ydCB7cHJvamVjdCwgaW5ib3gsIHRvZG99IGZyb20gJy4vb2JqZWN0LmpzJ1xuaW1wb3J0IHtkaXNwbGF5VG9kbywgZGlzcGxheVRvZG9Nb2RhbH0gZnJvbSAnLi90b2RvLmpzJ1xuaW1wb3J0IGNsb3NlIGZyb20gJy4vaWNvbnMvY2xvc2Uuc3ZnJ1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9pY29ucy9lZGl0LnN2ZydcblxubGV0IHByb2plY3RzID0gW107XG5sZXQgcHJvamVjdEluZGV4ID0gMDtcbmxldCBjdXJyZW50SUQgPSAwO1xubGV0IGluYm94VG9kb3MgPSBpbmJveChbXSlcbnByb2plY3RzLnB1c2gocHJvamVjdCgnV29yaycsIHByb2plY3RJbmRleCwgW3RvZG8oJ3dyaXRlJywgJ3dyaXRlIGEgc3R1ZmYnLCAnNTYvNTYvNTY1NicpLCB0b2RvKCdjb2RlJywgJ2NvZGUgYSBidW5jaCcsICc3OC83OC83ODc4JyksIHRvZG8oJ251dCcsICdjb2RlIGEgYnVuY2gnLCAnbm90JyksIHRvZG8oJ2xpdnInLCAnY29kZSBhIGJ1bmNoJywgJ2dveWYnKSx0b2RvKCd0c3JtJywgJ2NvZGUgYSBidW5jaCcsICdmZXJlJyldKSk7XG5wcm9qZWN0cy5wdXNoKHByb2plY3QoJ0d5bScsIHByb2plY3RJbmRleCwgW3RvZG8oJ1J1bicsICdnbyBmb3IgYSBydW4nLCAnOS8xOS8xOTE5JyksIHRvZG8oJ2xpZnQnLCAnbGlmdCB0aGUgd2VpZ2h0cycsICcyMy8yMy8yMzIzJyksIHRvZG8oJ2tpc2YnLCAnY29kZSBhIGJ1bmNoJywgJ3JzZnInKSwgdG9kbygnY3ZldicsICdjb2RlIGEgYnVuY2gnLCAnaGhoaHQnKSwgdG9kbygnZWVydCcsICdjb2RlIGEgYnVuY2gnLCAnYmJvYicpXSkpO1xucHJvamVjdHMucHVzaChwcm9qZWN0KCdBQUEnLCBwcm9qZWN0SW5kZXgsIFt0b2RvKCdhJywgJ3dyaXRlIGEgc3R1ZmYnLCAnYScpLCB0b2RvKCdhYScsICdjb2RlIGEgYnVuY2gnLCAnYWEnKSwgdG9kbygnYWFhJywgJ2NvZGUgYSBidW5jaCcsICdhYWEnKSwgdG9kbygnYWFhYScsICdjb2RlIGEgYnVuY2gnLCAnYWFhYScpLHRvZG8oJ2FhYWFhJywgJ2NvZGUgYSBidW5jaCcsICdhYWFhYScpXSkpO1xucHJvamVjdHMucHVzaChwcm9qZWN0KCdTU1MnLCBwcm9qZWN0SW5kZXgsIFt0b2RvKCdzJywgJ2dvIGZvciBhIHJ1bicsICdzJyksIHRvZG8oJ3NzJywgJ2xpZnQgdGhlIHdlaWdodHMnLCAnc3MnKSwgdG9kbygnc3NzJywgJ2NvZGUgYSBidW5jaCcsICdzc3MnKSwgdG9kbygnc3NzcycsICdjb2RlIGEgYnVuY2gnLCAnc3NzcycpLCB0b2RvKCdzc3NzcycsICdjb2RlIGEgYnVuY2gnLCAnc3Nzc3MnKV0pKTtcbnByb2plY3RzLnB1c2gocHJvamVjdCgnREREJywgcHJvamVjdEluZGV4LCBbdG9kbygnZCcsICd3cml0ZSBhIHN0dWZmJywgJ2QnKSwgdG9kbygnZGQnLCAnY29kZSBhIGJ1bmNoJywgJ2RkJyksIHRvZG8oJ2RkZCcsICdjb2RlIGEgYnVuY2gnLCAnZGRkJyksIHRvZG8oJ2RkZGQnLCAnY29kZSBhIGJ1bmNoJywgJ2RkZGQnKSx0b2RvKCdkZGRkZCcsICdjb2RlIGEgYnVuY2gnLCAnZGRkZGQnKV0pKTtcbnByb2plY3RzLnB1c2gocHJvamVjdCgnRkZGJywgcHJvamVjdEluZGV4LCBbdG9kbygnZicsICdnbyBmb3IgYSBydW4nLCAnZicpLCB0b2RvKCdmZicsICdsaWZ0IHRoZSB3ZWlnaHRzJywgJ2ZmJyksIHRvZG8oJ2ZmZicsICdjb2RlIGEgYnVuY2gnLCAnZmZmJyksIHRvZG8oJ2ZmZmYnLCAnY29kZSBhIGJ1bmNoJywgJ2ZmZmYnKSwgdG9kbygnZmZmZmYnLCAnY29kZSBhIGJ1bmNoJywgJ2ZmZmZmJyldKSk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlJbmJveFRvZG9zKCkge1xuICAgIGluYm94VG9kb3MgPSBpbmJveChbXSlcbiAgICBhZGRUb2Rvc1RvSW5ib3goKVxuICAgIGRpc3BsYXlUb2RvKGluYm94VG9kb3MpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlIZWFkaW5nKHRpdGxlKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRpbmcnKVxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0aXRsZVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG5cbiAgICBwcm9qZWN0SW5kZXggPSAwO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9ICcnXG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKGRpc3BsYXlQcm9qZWN0KTtcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KHZhbHVlKSB7XG5cbiAgICAgICAgdmFsdWUuc2V0SUQocHJvamVjdEluZGV4KVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1idXR0b24nKVxuICAgICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQocHJvamVjdEluZGV4KVxuICAgICAgICBwcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gdmFsdWUuZ2V0TmFtZSgpXG5cbiAgICAgICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaWNvbi1jb250YWluZXInKVxuXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZS1wcm9qZWN0LWJ0bicpXG4gICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQodmFsdWUuZ2V0SUQoKSlcblxuICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQtcHJvamVjdC1idG4nKVxuICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQodmFsdWUuZ2V0SUQoKSlcblxuICAgICAgICBjb25zdCBjbG9zZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGNsb3NlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgY2xvc2UpXG4gICAgICAgIGNsb3NlSW1nLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaWNvbi1jbG9zZScpXG5cbiAgICAgICAgY29uc3QgZWRpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGVkaXRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBlZGl0KVxuICAgICAgICBlZGl0SW1nLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaWNvbi1lZGl0JylcblxuICAgICAgICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJbWcpXG4gICAgICAgIGNsb3NlQnRuLmFwcGVuZENoaWxkKGNsb3NlSW1nKVxuICAgICAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pXG4gICAgICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pXG4gICAgICAgIHByb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcilcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKVxuXG4gICAgICAgIHByb2plY3RJbmRleCArPSAxO1xuICAgIH1cblxuICAgIGxvYWRQcm9qZWN0SW5mbygpXG4gICAgbG9hZFByb2plY3RDbG9zZUJ0bnMoKVxuICAgIGxvYWRQcm9qZWN0RWRpdEJ0bnMoKTtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RJbmZvKCkge1xuXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcm9qZWN0LWJ1dHRvbicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlIZWFkaW5nKGJ1dHRvbnNbaV0udGV4dENvbnRlbnQpXG4gICAgICAgICAgICBkaXNwbGF5VG9kbyhzZWxlY3RQcm9qZWN0QnlJRChidXR0b25zW2ldLmNsYXNzTGlzdFswXSkpXG4gICAgICAgICAgICBkaXNwbGF5VG9kb01vZGFsKHNlbGVjdFByb2plY3RCeUlEKGJ1dHRvbnNbaV0uY2xhc3NMaXN0WzBdKSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0Q2xvc2VCdG5zKCkge1xuXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjbG9zZS1wcm9qZWN0LWJ0bicpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHNlbGVjdFByb2plY3RCeUlEKGJ1dHRvbnNbaV0uY2xhc3NMaXN0WzBdKSksIDEpXG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdHMoKVxuICAgICAgICAgICAgZGlzcGxheUhlYWRpbmcoJ0luYm94JylcbiAgICAgICAgICAgIGRpc3BsYXlJbmJveFRvZG9zKClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0RWRpdEJ0bnMoKSB7XG5cbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2VkaXQtcHJvamVjdC1idG4nKVxuICAgIGNvbnN0IGVkaXRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcm9qZWN0LW1vZGFsJylcbiAgICBjb25zdCBlZGl0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcm9qZWN0LW5hbWUnKVxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtZWRpdC1wcm9qZWN0LWJ0bicpXG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtLWVkaXQtcHJvamVjdC1idG4nKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBlZGl0UHJvamVjdE1vZGFsLnNob3dNb2RhbCgpXG4gICAgICAgICAgICBjdXJyZW50SUQgPSBidXR0b25zW2ldLmNsYXNzTGlzdFswXVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZWxlY3RQcm9qZWN0QnlJRChjdXJyZW50SUQpLnNldE5hbWUoZWRpdFByb2plY3ROYW1lLnZhbHVlKVxuICAgICAgICBlZGl0UHJvamVjdE5hbWUudmFsdWUgPSAnJ1xuICAgICAgICBlZGl0UHJvamVjdE1vZGFsLmNsb3NlKCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cygpXG4gICAgfSlcblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGVkaXRQcm9qZWN0TmFtZS52YWx1ZSA9ICcnXG4gICAgICAgIGVkaXRQcm9qZWN0TW9kYWwuY2xvc2UoKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHNlbGVjdFByb2plY3RCeUlEKElEKSB7XG5cbiAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gJydcblxuICAgIHByb2plY3RzLmZvckVhY2goc2VsZWN0UHJvamVjdCk7XG5cbiAgICBmdW5jdGlvbiBzZWxlY3RQcm9qZWN0KHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS5nZXRJRCgpID09IElEKSB7XG4gICAgICAgICAgICBzZWxlY3RlZFByb2plY3QgPSB2YWx1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdGVkUHJvamVjdFxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdE1vZGFsKCkge1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdCcpXG4gICAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbW9kYWwnKVxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lJylcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsUHJvamVjdEJ0bicpXG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtUHJvamVjdEJ0bicpXG5cbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0TW9kYWwuc2hvd01vZGFsKClcbiAgICB9KVxuXG4gICAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QocHJvamVjdE5hbWUudmFsdWUsIHByb2plY3RJbmRleCwgW10pKVxuICAgICAgICBwcm9qZWN0TmFtZS52YWx1ZSA9ICcnXG4gICAgICAgIHByb2plY3RNb2RhbC5jbG9zZSgpXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cygpXG4gICAgfSlcblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHByb2plY3ROYW1lLnZhbHVlID0gJydcbiAgICAgICAgcHJvamVjdE1vZGFsLmNsb3NlKClcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhZGRUb2Rvc1RvSW5ib3goKSB7XG4gICAgcHJvamVjdHMuZm9yRWFjaChnZXRQcm9qZWN0KVxuICAgIGZ1bmN0aW9uIGdldFByb2plY3QocHJvamVjdCkge1xuXG4gICAgICAgIHByb2plY3QuZ2V0VG9kb3MoKS5mb3JFYWNoKGdldFRvZG8pXG4gICAgICAgIGZ1bmN0aW9uIGdldFRvZG8odG9kbykge1xuICAgICAgICAgICAgaW5ib3hUb2Rvcy5zZXRUb2RvKHRvZG8pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgZGlzcGxheUhlYWRpbmcsXG4gICAgZGlzcGxheVByb2plY3RzLFxuICAgIGRpc3BsYXlQcm9qZWN0TW9kYWwsXG4gICAgZGlzcGxheUluYm94VG9kb3Ncbn0iLCJpbXBvcnQge3RvZG99IGZyb20gJy4vb2JqZWN0LmpzJ1xuaW1wb3J0IGNsb3NlIGZyb20gJy4vaWNvbnMvY2xvc2Uuc3ZnJ1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9pY29ucy9lZGl0LnN2ZydcblxubGV0IHRvZG9JbmRleCA9IDA7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvKHByb2plY3QpIHtcblxuICAgIHRvZG9JbmRleCA9IDA7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJylcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJydcblxuICAgIHByb2plY3QuZ2V0VG9kb3MoKS5mb3JFYWNoKGRpc3BsYXlUb2RvcylcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlUb2Rvcyh2YWx1ZSkge1xuXG4gICAgICAgIHZhbHVlLnNldElEKHRvZG9JbmRleCkgXG5cbiAgICAgICAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0b2RvU2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tYnV0dG9uJylcbiAgICAgICAgdG9kb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCh0b2RvSW5kZXgpXG4gICAgICAgIHRvZG9TZWN0aW9uLnRleHRDb250ZW50ID0gdmFsdWUuZ2V0TmFtZSgpXG5cbiAgICAgICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1pY29uLWNvbnRhaW5lcicpXG5cbiAgICAgICAgY29uc3QgdG9kb0R1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0b2RvRHVlZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tZHVlLWRhdGUnKVxuICAgICAgICB0b2RvRHVlZGF0ZS50ZXh0Q29udGVudCA9IHZhbHVlLmdldER1ZWRhdGUoKVxuXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZS10b2RvLWJ0bicpXG4gICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQodmFsdWUuZ2V0SUQoKSlcbiAgICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2UtdG9kby1idG4nKVxuXG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdC10b2RvLWJ0bi0nICsgdmFsdWUuZ2V0SUQoKSArICcgJyArIHByb2plY3QuZ2V0TmFtZSgpKVxuICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQodmFsdWUuZ2V0SUQoKSlcbiAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LXRvZG8tYnRuJylcblxuICAgICAgICBjb25zdCBjbG9zZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGNsb3NlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgY2xvc2UpXG4gICAgICAgIGNsb3NlSW1nLmNsYXNzTGlzdC5hZGQoJ3RvZG8taWNvbi1jbG9zZScpXG5cbiAgICAgICAgY29uc3QgZWRpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGVkaXRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBlZGl0KVxuICAgICAgICBlZGl0SW1nLmNsYXNzTGlzdC5hZGQoJ3RvZG8taWNvbi1lZGl0JylcblxuICAgICAgICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJbWcpXG4gICAgICAgIGNsb3NlQnRuLmFwcGVuZENoaWxkKGNsb3NlSW1nKVxuICAgICAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EdWVkYXRlKVxuICAgICAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pXG4gICAgICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pXG4gICAgICAgIHRvZG9TZWN0aW9uLmFwcGVuZENoaWxkKGljb25Db250YWluZXIpXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb1NlY3Rpb24pXG5cbiAgICAgICAgdG9kb0luZGV4ICs9IDE7XG5cbiAgICB9XG5cbiAgICBsb2FkVG9kb0Nsb3NlQnRucyhwcm9qZWN0KVxuICAgIGxvYWRUb2RvRWRpdEJ0bnMocHJvamVjdClcblxufVxuXG5mdW5jdGlvbiBsb2FkVG9kb0Nsb3NlQnRucyhwcm9qZWN0KSB7XG5cbiAgICBsZXQgdG9kb0FycmF5ID0gcHJvamVjdC5nZXRUb2RvcygpXG5cbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Nsb3NlLXRvZG8tYnRuJylcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBidXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0FycmF5LnNwbGljZSh0b2RvQXJyYXkuaW5kZXhPZihzZWxlY3RUb2RvQnlJRChidXR0b25zW2ldLmNsYXNzTGlzdFswXSwgcHJvamVjdCkpLCAxKVxuICAgICAgICAgICAgZGlzcGxheVRvZG8ocHJvamVjdClcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gbG9hZFRvZG9FZGl0QnRucyhwcm9qZWN0KSB7XG5cbiAgICBsZXQgdG9kb0FycmF5ID0gcHJvamVjdC5nZXRUb2RvcygpXG4gICAgdG9kb0FycmF5LmZvckVhY2goc2V0dXBNb2RhbEJ1dHRvbnMpXG5cbiAgICBmdW5jdGlvbiBzZXR1cE1vZGFsQnV0dG9ucyh2YWx1ZSkge1xuXG4gICAgICAgIGxldCBJRCA9IHZhbHVlLmdldElEKClcbiAgICAgICAgbGV0IGN1cnJlbnRUb2RvID0gc2VsZWN0VG9kb0J5SUQoSUQsIHByb2plY3QpXG5cbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdG9kby1idG4tJyArIElEICsgJyAnICsgcHJvamVjdC5nZXROYW1lKCkpXG4gICAgICAgIGNvbnN0IGVkaXRUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10b2RvLW1vZGFsJylcbiAgICAgICAgY29uc3QgZWRpdFRvZG9OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdG9kby1uYW1lJylcbiAgICAgICAgY29uc3QgZWRpdFRvZG9EZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdG9kby1kZXNjJylcbiAgICAgICAgY29uc3QgZWRpdFRvZG9EdWVkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdG9kby1kdWVkYXRlJylcbiAgICAgICAgY29uc3QgZWRpdFRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRvZG8tcHJpb3JpdHknKVxuXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGVkaXRUb2RvTW9kYWwuc2hvd01vZGFsKClcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLWRpYWxvZy1idG5zJylcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnJ1xuICAgIFxuICAgICAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhbmNlbC1lZGl0LXRvZG8tYnRuLScgKyBJRCArICcgJyArIHByb2plY3QuZ2V0TmFtZSgpKVxuICAgICAgICAgICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIGNvbmZpcm1CdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjb25maXJtLWVkaXQtdG9kby1idG4tJyArIElEICsgJyAnICsgcHJvamVjdC5nZXROYW1lKCkpXG4gICAgICAgICAgICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnZGVmYXVsdCcpXG4gICAgICAgICAgICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nXG4gICAgICAgIFxuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjYW5jZWxCdG4pXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pXG4gICAgXG4gICAgICAgICAgICBjb25zdCBtb2RhbENhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtZWRpdC10b2RvLWJ0bi0nICsgSUQgKyAnICcgKyBwcm9qZWN0LmdldE5hbWUoKSlcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsQ29uZmlybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtLWVkaXQtdG9kby1idG4tJyArIElEICsgJyAnICsgcHJvamVjdC5nZXROYW1lKCkpXG4gICAgICAgIFxuICAgICAgICAgICAgbW9kYWxDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICBlZGl0VG9kb05hbWUudmFsdWUgPSAnJ1xuICAgICAgICAgICAgICAgIGVkaXRUb2RvRGVzYy52YWx1ZSA9ICcnXG4gICAgICAgICAgICAgICAgZWRpdFRvZG9EdWVkYXRlLnZhbHVlID0gJydcbiAgICAgICAgICAgICAgICBlZGl0VG9kb1ByaW9yaXR5LnZhbHVlID0gJydcbiAgICAgICAgICAgICAgICBlZGl0VG9kb01vZGFsLmNsb3NlKClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIG1vZGFsQ29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIGN1cnJlbnRUb2RvLnNldE5hbWUoZWRpdFRvZG9OYW1lLnZhbHVlKVxuICAgICAgICAgICAgICAgIGN1cnJlbnRUb2RvLnNldERlc2NyaXB0aW9uKGVkaXRUb2RvRGVzYy52YWx1ZSlcbiAgICAgICAgICAgICAgICBjdXJyZW50VG9kby5zZXREdWVkYXRlKGVkaXRUb2RvRHVlZGF0ZS52YWx1ZSlcbiAgICAgICAgICAgICAgICBjdXJyZW50VG9kby5zZXRQcmlvcml0eShlZGl0VG9kb1ByaW9yaXR5LnZhbHVlKVxuICAgICAgICAgICAgICAgIGVkaXRUb2RvTmFtZS52YWx1ZSA9ICcnXG4gICAgICAgICAgICAgICAgZWRpdFRvZG9EZXNjLnZhbHVlID0gJydcbiAgICAgICAgICAgICAgICBlZGl0VG9kb0R1ZWRhdGUudmFsdWUgPSAnJ1xuICAgICAgICAgICAgICAgIGVkaXRUb2RvUHJpb3JpdHkudmFsdWUgPSAnJ1xuICAgICAgICAgICAgICAgIGVkaXRUb2RvTW9kYWwuY2xvc2UoKVxuICAgICAgICAgICAgICAgIGRpc3BsYXlUb2RvKHByb2plY3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0VG9kb0J5SUQoSUQsIHByb2plY3QpIHtcblxuICAgIGxldCBzZWxlY3RlZFRvZG8gPSAnJ1xuXG4gICAgcHJvamVjdC5nZXRUb2RvcygpLmZvckVhY2goc2VsZWN0VG9kbyk7XG5cbiAgICBmdW5jdGlvbiBzZWxlY3RUb2RvKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS5nZXRJRCgpID09IElEKSB7XG4gICAgICAgICAgICBzZWxlY3RlZFRvZG8gPSB2YWx1ZVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFRvZG9cbn1cblxuZnVuY3Rpb24gc2V0dXBBZGRUb2RvQnV0dG9uKHByb2plY3QpIHtcbiAgICBsZXQgSUQgPSBwcm9qZWN0LmdldElEKClcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1jb250YWluZXInKVxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnJ1xuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdG9kby0nICsgSUQpXG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJ1xuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChhZGRCdG4pXG59XG5cbmZ1bmN0aW9uIHNldHVwQWRkVG9kb01vZGFsKHByb2plY3QpIHtcbiAgICBsZXQgSUQgPSBwcm9qZWN0LmdldElEKClcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGlhbG9nLWJ0bnMnKVxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnJ1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjYW5jZWwtdG9kby1idG4tJyArIElEKVxuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnXG5cbiAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29uZmlybS10b2RvLWJ0bi0nICsgSUQpXG4gICAgY29uZmlybUJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2RlZmF1bHQnKVxuICAgIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSAnQ29uZmlybSdcblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bilcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZG9Nb2RhbChwcm9qZWN0KSB7XG5cbiAgICBsZXQgSUQgPSBwcm9qZWN0LmdldElEKClcbiAgICBsZXQgY3VycmVudFRvZG8gPSB0b2RvKClcbiAgICBzZXR1cEFkZFRvZG9CdXR0b24ocHJvamVjdClcblxuICAgIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRvZG8tJyArIElEKVxuICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLW1vZGFsJylcbiAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLW5hbWUnKVxuICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzYycpXG4gICAgY29uc3QgdG9kb0R1ZWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWVkYXRlJylcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eScpXG5cbiAgICBhZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2RvTW9kYWwuc2hvd01vZGFsKClcbiAgICAgICAgc2V0dXBBZGRUb2RvTW9kYWwocHJvamVjdClcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC10b2RvLWJ0bi0nICsgSUQpXG4gICAgICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybS10b2RvLWJ0bi0nICsgSUQpXG5cbiAgICAgICAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGN1cnJlbnRUb2RvLnNldE5hbWUodG9kb05hbWUudmFsdWUpXG4gICAgICAgICAgICBjdXJyZW50VG9kby5zZXREZXNjcmlwdGlvbih0b2RvRGVzYy52YWx1ZSlcbiAgICAgICAgICAgIGN1cnJlbnRUb2RvLnNldER1ZWRhdGUodG9kb0R1ZWRhdGUudmFsdWUpXG4gICAgICAgICAgICBjdXJyZW50VG9kby5zZXRQcmlvcml0eSh0b2RvUHJpb3JpdHkudmFsdWUpXG4gICAgICAgICAgICBjdXJyZW50VG9kby5zZXRJRCh0b2RvSW5kZXgpXG4gICAgICAgICAgICBwcm9qZWN0LnNldFRvZG8oY3VycmVudFRvZG8pXG4gICAgICAgICAgICBjdXJyZW50VG9kbyA9IHRvZG8oKVxuICAgICAgICAgICAgdG9kb05hbWUudmFsdWUgPSAnJ1xuICAgICAgICAgICAgdG9kb0Rlc2MudmFsdWUgPSAnJ1xuICAgICAgICAgICAgdG9kb0R1ZWRhdGUudmFsdWUgPSAnJ1xuICAgICAgICAgICAgdG9kb1ByaW9yaXR5LnZhbHVlID0gJydcbiAgICAgICAgICAgIHRvZG9Nb2RhbC5jbG9zZSgpXG4gICAgICAgICAgICBkaXNwbGF5VG9kbyhwcm9qZWN0KVxuICAgICAgICB9KVxuXG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgdG9kb05hbWUudmFsdWUgPSAnJ1xuICAgICAgICAgICAgdG9kb0Rlc2MudmFsdWUgPSAnJ1xuICAgICAgICAgICAgdG9kb0R1ZWRhdGUudmFsdWUgPSAnJ1xuICAgICAgICAgICAgdG9kb1ByaW9yaXR5LnZhbHVlID0gJydcbiAgICAgICAgICAgIHRvZG9Nb2RhbC5jbG9zZSgpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IHtcbiAgICBkaXNwbGF5VG9kbyxcbiAgICBkaXNwbGF5VG9kb01vZGFsXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHtkaXNwbGF5SGVhZGluZywgZGlzcGxheVByb2plY3RzLCBkaXNwbGF5UHJvamVjdE1vZGFsLCBkaXNwbGF5SW5ib3hUb2Rvc30gZnJvbSAnLi9wcm9qZWN0J1xuXG5mdW5jdGlvbiBsb2FkTWFpblBhZ2UoKSB7XG5cbiAgICBsb2FkSW5ib3goKVxuXG4gICAgZGlzcGxheVByb2plY3RzKClcbiAgICBkaXNwbGF5UHJvamVjdE1vZGFsKClcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2lkZWJhci1idXR0b24nKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBidXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGxheUhlYWRpbmcoYnV0dG9uc1tpXS50ZXh0Q29udGVudClcbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0cygpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkSW5ib3goKSB7XG5cbiAgICBkaXNwbGF5SW5ib3hUb2RvcygpXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luYm94LWJ1dHRvbicpO1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkaXNwbGF5SGVhZGluZygnSW5ib3gnKVxuICAgICAgICBkaXNwbGF5SW5ib3hUb2RvcygpXG4gICAgfSlcbn1cblxubG9hZE1haW5QYWdlKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==