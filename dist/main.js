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
/* harmony export */   project: () => (/* binding */ project),
/* harmony export */   todo: () => (/* binding */ todo)
/* harmony export */ });
const project = (name, ID, todos) => {
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

const todo = (name, description, duedate, priority, ID) => {
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
projects.push((0,_object_js__WEBPACK_IMPORTED_MODULE_0__.project)('Work', projectIndex, [(0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('write', 'write a stuff', '56/56/5656'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('code', 'code a bunch', '78/78/7878')]));
projects.push((0,_object_js__WEBPACK_IMPORTED_MODULE_0__.project)('Gym', projectIndex, [(0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('Run', 'go for a run', '9/19/1919'), (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)('lift', 'lift the weights', '23/23/2323')]));

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
        buttons[i].addEventListener('click', () => {
            projects.splice(projects.indexOf(selectProjectByID(buttons[i].classList[0])), 1)
            displayProjects()
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
            console.log(currentTodo.getName())
        

            modalCancelBtn.addEventListener('click', (event) => {
                event.stopImmediatePropagation()
                event.preventDefault()
                console.log(currentTodo.getName())
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

    setupAddTodoModal(project)
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

    setupAddTodoButton(project)

    let ID = project.getID()
    let currentTodo = (0,_object_js__WEBPACK_IMPORTED_MODULE_0__.todo)()

    const addTodo = document.getElementById('add-todo-' + ID)
    const todoModal = document.getElementById('todo-modal')
    const todoName = document.getElementById('todo-name')
    const todoDesc = document.getElementById('todo-desc')
    const todoDuedate = document.getElementById('todo-duedate')
    const todoPriority = document.getElementById('todo-priority')
    const cancelBtn = document.getElementById('cancel-todo-btn-' + ID)
    const confirmBtn = document.getElementById('confirm-todo-btn-' + ID)

    addTodo.addEventListener('click', () => {
        todoModal.showModal()
    })

    confirmBtn.addEventListener('click', (event) => {
        event.stopImmediatePropagation()
        event.preventDefault();
        currentTodo.setName(todoName.value)
        currentTodo.setDescription(todoDesc.value)
        currentTodo.setDuedate(todoDuedate.value)
        currentTodo.setPriority(todoPriority.value)
        currentTodo.setID(todoIndex)
        project.setTodo(currentTodo)
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

    (0,_project__WEBPACK_IMPORTED_MODULE_1__.displayProjects)()
    ;(0,_project__WEBPACK_IMPORTED_MODULE_1__.displayProjectModal)()

    const buttons = document.querySelectorAll('#sidebar-button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            (0,_project__WEBPACK_IMPORTED_MODULE_1__.displayHeading)(buttons[i].textContent)
            ;(0,_project__WEBPACK_IMPORTED_MODULE_1__.displayProjects)()
        })
    }
}

loadMainPage()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlJQUE2QztBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxhQUFhLFlBQVksVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxzQ0FBc0MsNEJBQTRCLDZDQUE2Qyx1QkFBdUIseUJBQXlCLEtBQUssVUFBVSxnQkFBZ0IsNEJBQTRCLEdBQUcsY0FBYyxzQkFBc0Isb0JBQW9CLHlDQUF5QyxtQ0FBbUMsR0FBRyxhQUFhLHlCQUF5QixrQkFBa0Isb0JBQW9CLG1EQUFtRCx3QkFBd0IsbUJBQW1CLEdBQUcsa0JBQWtCLHlCQUF5QixHQUFHLG1CQUFtQixvQ0FBb0MsR0FBRyx5QkFBeUIsb0NBQW9DLEdBQUcsK0JBQStCLG9DQUFvQyxHQUFHLHFDQUFxQyxtQ0FBbUMsR0FBRyxjQUFjLDRCQUE0Qix5QkFBeUIsMkJBQTJCLHNCQUFzQixzQkFBc0IsNkJBQTZCLGdCQUFnQixHQUFHLG1CQUFtQixvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLDBCQUEwQiw4QkFBOEIsc0JBQXNCLHdCQUF3QixzQkFBc0IsMkJBQTJCLDhDQUE4QywrQ0FBK0MsZ0RBQWdELCtDQUErQyxHQUFHLHNCQUFzQixvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLHNCQUFzQix5QkFBeUIsc0JBQXNCLHFDQUFxQyxHQUFHLHdCQUF3QixvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLHFCQUFxQiw4QkFBOEIsc0JBQXNCLHdCQUF3Qix3QkFBd0Isc0JBQXNCLDJCQUEyQiw4Q0FBOEMsK0NBQStDLGdEQUFnRCwrQ0FBK0Msc0JBQXNCLDBCQUEwQixxQ0FBcUMsR0FBRyw0QkFBNEIsd0NBQXdDLG1CQUFtQixzQkFBc0IsS0FBSyx5QkFBeUIsbUJBQW1CLGtCQUFrQiwwQkFBMEIsR0FBRyx3QkFBd0IsbUJBQW1CLGtCQUFrQixHQUFHLGtCQUFrQiw4QkFBOEIsc0JBQXNCLHdCQUF3Qix1QkFBdUIsc0JBQXNCLDJCQUEyQiw4Q0FBOEMsK0NBQStDLGdEQUFnRCwrQ0FBK0MsR0FBRyxXQUFXLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGdDQUFnQyxHQUFHLG1CQUFtQixzQkFBc0IscUNBQXFDLDBCQUEwQixHQUFHLG1CQUFtQixvQkFBb0IsMEJBQTBCLHFDQUFxQyxpQkFBaUIsd0JBQXdCLHFDQUFxQyxHQUFHLHFCQUFxQixtQkFBbUIsb0JBQW9CLDZCQUE2QixHQUFHLGtCQUFrQixvQkFBb0IsMEJBQTBCLHFDQUFxQyx5QkFBeUIsc0JBQXNCLHFDQUFxQyxHQUFHLDBCQUEwQixvQkFBb0IsR0FBRyxpQ0FBaUMsd0NBQXdDLG1CQUFtQixzQkFBc0IsR0FBRyxvQkFBb0IsbUJBQW1CLGtCQUFrQixHQUFHLHFCQUFxQixtQkFBbUIsa0JBQWtCLDBCQUEwQixHQUFHLG1CQUFtQjtBQUN2N0s7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxTjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkV5QztBQUNjO0FBQ2xCO0FBQ0Y7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbURBQU8sd0JBQXdCLGdEQUFJLDBDQUEwQyxnREFBSTtBQUMvRixjQUFjLG1EQUFPLHVCQUF1QixnREFBSSxzQ0FBc0MsZ0RBQUk7O0FBRTFGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLDZDQUFLO0FBQzFDOztBQUVBO0FBQ0Esb0NBQW9DLDRDQUFJO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBLFlBQVksc0RBQVc7QUFDdkIsWUFBWSwyREFBZ0I7QUFDNUIsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHNCQUFzQixtREFBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0S2dDO0FBQ0s7QUFDRjs7QUFFbkM7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyw2Q0FBSztBQUMxQzs7QUFFQTtBQUNBLG9DQUFvQyw0Q0FBSTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixnREFBSTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hQQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQzBEOztBQUU5RTs7QUFFQSxJQUFJLHlEQUFlO0FBQ25CLElBQUksOERBQW1COztBQUV2Qjs7QUFFQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0EsWUFBWSx3REFBYztBQUMxQixZQUFZLDBEQUFlO0FBQzNCLFNBQVM7QUFDVDtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL29iamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuXG4jY29udGVudCB7XG5cbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG5cbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDc2cHggMWZyO1xufVxuXG4uaGVhZGVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZ3JpZC1yb3c6IDE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2MDBweCAzMDBweCAxNTBweDtcblxuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5sb2dvLWhlYWRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uaGVhZGVyID4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzQsIDE2NiwgMTUzKTtcbn1cblxuLmhlYWRlciA+IGRpdiArIGRpdiB7XG4gICAgYmFja2dyb3VuZDogcmdiKDI0MiwgMTkwLCAzNCk7XG59XG5cbi5oZWFkZXIgPiBkaXYgKyBkaXYgKyBkaXYge1xuICAgIGJhY2tncm91bmQ6IHJnYigyNDIsIDE1MSwgMzkpO1xufVxuXG4uaGVhZGVyID4gZGl2ICsgZGl2ICsgZGl2ICsgZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQyLCA3NiwgNjEpO1xufVxuXG4uc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xuICAgIHBhZGRpbmc6IDMycHggNDBweDtcblxuICAgIGdyaWQtY29sdW1uOiAxIC8gMTtcbiAgICBncmlkLXJvdzogMiAvIDI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzMnB4O1xufVxuXG4uc2lkZS1kaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uc2lkZS1kaXNwbGF5IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDI0MiwgMTUxLCAzOSk7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2IoMjQyLCAxNTEsIDM5KTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDI0MiwgNzYsIDYxKTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMjQyLCA3NiwgNjEpO1xufVxuXG4ucHJvamVjdC1kaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMnB4O1xufVxuXG4uc2lkZWJhci1oZWFkaW5nIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMnB4O1xufVxuXG4jcHJvamVjdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigyNDIsIDE1MSwgMzkpO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiKDI0MiwgMTUxLCAzOSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyNDIsIDc2LCA2MSk7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiKDI0MiwgNzYsIDYxKTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5pY29uLWNvbnRhaW5lciBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG59XG5cbi5wcm9qZWN0LWljb24tY2xvc2Uge1xuICAgIGhlaWdodDogMTJweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufVxuXG4ucHJvamVjdC1pY29uLWVkaXQge1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDtcbn1cblxuI2FkZC1wcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigyNDIsIDE1MSwgMzkpO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiKDI0MiwgMTUxLCAzOSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyNDIsIDc2LCA2MSk7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiKDI0MiwgNzYsIDYxKTtcbn1cblxuLm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIHBhZGRpbmc6IDMycHggMTI4cHg7XG59XG5cbi5tYWluLWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnRvZG8taGVhZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDcyMHB4O1xuXG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnRvZG8tY29udGFpbmVyIHtcbiAgICB3aWR0aDogODQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jdG9kby1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi50b2RvLWljb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udG9kby1pY29uLWNvbnRhaW5lciBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZWRpdC10b2RvLWJ0biB7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIHdpZHRoOiAyOHB4O1xufVxuXG4uY2xvc2UtdG9kby1idG4ge1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLFNBQVM7SUFDVCxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGFBQWE7O0lBRWIsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLDRDQUE0Qzs7SUFFNUMsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCOztJQUVsQixrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTs7SUFFZixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLHdDQUF3QztJQUN4Qyx5Q0FBeUM7SUFDekMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7O0lBRWYsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2Qyx3Q0FBd0M7SUFDeEMseUNBQXlDO0lBQ3pDLHdDQUF3Qzs7SUFFeEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7O0lBRWYsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2Qyx3Q0FBd0M7SUFDeEMseUNBQXlDO0lBQ3pDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1COztJQUVuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFVBQVU7O0lBRVYsZUFBZTtJQUNmLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbn1cXG5cXG4jY29udGVudCB7XFxuXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDc2cHggMWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNjAwcHggMzAwcHggMTUwcHg7XFxuXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubG9nby1oZWFkZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5oZWFkZXIgPiBkaXYge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzQsIDE2NiwgMTUzKTtcXG59XFxuXFxuLmhlYWRlciA+IGRpdiArIGRpdiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNDIsIDE5MCwgMzQpO1xcbn1cXG5cXG4uaGVhZGVyID4gZGl2ICsgZGl2ICsgZGl2IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MiwgMTUxLCAzOSk7XFxufVxcblxcbi5oZWFkZXIgPiBkaXYgKyBkaXYgKyBkaXYgKyBkaXYge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQyLCA3NiwgNjEpO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogMzJweCA0MHB4O1xcblxcbiAgICBncmlkLWNvbHVtbjogMSAvIDE7XFxuICAgIGdyaWQtcm93OiAyIC8gMjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMnB4O1xcbn1cXG5cXG4uc2lkZS1kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2lkZS1kaXNwbGF5IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigyNDIsIDE1MSwgMzkpO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYigyNDIsIDE1MSwgMzkpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDI0MiwgNzYsIDYxKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiKDI0MiwgNzYsIDYxKTtcXG59XFxuXFxuLnByb2plY3QtZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLnNpZGViYXItaGVhZGluZyB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuI3Byb2plY3QtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigyNDIsIDE1MSwgMzkpO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYigyNDIsIDE1MSwgMzkpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDI0MiwgNzYsIDYxKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiKDI0MiwgNzYsIDYxKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaWNvbi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxuLnByb2plY3QtaWNvbi1jbG9zZSB7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxufVxcblxcbi5wcm9qZWN0LWljb24tZWRpdCB7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgd2lkdGg6IDE4cHg7XFxufVxcblxcbiNhZGQtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigyNDIsIDE1MSwgMzkpO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYigyNDIsIDE1MSwgMzkpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDI0MiwgNzYsIDYxKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiKDI0MiwgNzYsIDYxKTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgcGFkZGluZzogMzJweCAxMjhweDtcXG59XFxuXFxuLm1haW4taGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4udG9kby1oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDcyMHB4O1xcblxcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDg0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jdG9kby1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50b2RvLWljb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvZG8taWNvbi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVkaXQtdG9kby1idG4ge1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIHdpZHRoOiAyOHB4O1xcbn1cXG5cXG4uY2xvc2UtdG9kby1idG4ge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHByb2plY3QgPSAobmFtZSwgSUQsIHRvZG9zKSA9PiB7XG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gICAgY29uc3QgZ2V0SUQgPSAoKSA9PiBJRFxuICAgIGNvbnN0IGdldFRvZG9zID0gKCkgPT4gdG9kb3NcblxuICAgIGNvbnN0IHNldE5hbWUgPSBuZXdOYW1lID0+IHtcbiAgICAgICAgbmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SUQgPSBuZXdJRCA9PiB7XG4gICAgICAgIElEID0gbmV3SUQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VG9kbyA9IG5ld1RvZG8gPT4ge1xuICAgICAgICB0b2Rvcy5wdXNoKG5ld1RvZG8pXG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7IFxuICAgICAgICBnZXROYW1lLCBcbiAgICAgICAgZ2V0SUQsIFxuICAgICAgICBnZXRUb2RvcywgXG4gICAgICAgIHNldE5hbWUsIFxuICAgICAgICBzZXRJRCwgXG4gICAgICAgIHNldFRvZG8gXG4gICAgfVxufVxuXG5jb25zdCB0b2RvID0gKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSwgSUQpID0+IHtcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGdldER1ZWRhdGUgPSAoKSA9PiBkdWVkYXRlO1xuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG4gICAgY29uc3QgZ2V0SUQgPSAoKSA9PiBJRFxuXG4gICAgY29uc3Qgc2V0TmFtZSA9IG5ld05hbWUgPT4ge1xuICAgICAgICBuYW1lID0gbmV3TmFtZVxuICAgIH1cblxuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24gPT4ge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RHVlZGF0ZSA9IG5ld0R1ZWRhdGUgPT4ge1xuICAgICAgICBkdWVkYXRlID0gbmV3RHVlZGF0ZVxuICAgIH1cblxuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gbmV3UHJpb3JpdHkgPT4ge1xuICAgICAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SUQgPSBuZXdJRCA9PiB7XG4gICAgICAgIElEID0gbmV3SURcbiAgICB9XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgZ2V0TmFtZSwgXG4gICAgICAgIGdldERlc2NyaXB0aW9uLCBcbiAgICAgICAgZ2V0RHVlZGF0ZSwgXG4gICAgICAgIGdldFByaW9yaXR5LCBcbiAgICAgICAgZ2V0SUQsXG4gICAgICAgIHNldE5hbWUsXG4gICAgICAgIHNldERlc2NyaXB0aW9uLFxuICAgICAgICBzZXREdWVkYXRlLFxuICAgICAgICBzZXRQcmlvcml0eSxcbiAgICAgICAgc2V0SUQgXG4gICAgfVxuXG59XG5cbmV4cG9ydCB7XG4gICAgcHJvamVjdCxcbiAgICB0b2RvXG59IiwiaW1wb3J0IHtwcm9qZWN0LCB0b2RvfSBmcm9tICcuL29iamVjdC5qcydcbmltcG9ydCB7ZGlzcGxheVRvZG8sIGRpc3BsYXlUb2RvTW9kYWx9IGZyb20gJy4vdG9kby5qcydcbmltcG9ydCBjbG9zZSBmcm9tICcuL2ljb25zL2Nsb3NlLnN2ZydcbmltcG9ydCBlZGl0IGZyb20gJy4vaWNvbnMvZWRpdC5zdmcnXG5cbmxldCBwcm9qZWN0cyA9IFtdO1xubGV0IHByb2plY3RJbmRleCA9IDA7XG5sZXQgY3VycmVudElEID0gMDtcbnByb2plY3RzLnB1c2gocHJvamVjdCgnV29yaycsIHByb2plY3RJbmRleCwgW3RvZG8oJ3dyaXRlJywgJ3dyaXRlIGEgc3R1ZmYnLCAnNTYvNTYvNTY1NicpLCB0b2RvKCdjb2RlJywgJ2NvZGUgYSBidW5jaCcsICc3OC83OC83ODc4JyldKSk7XG5wcm9qZWN0cy5wdXNoKHByb2plY3QoJ0d5bScsIHByb2plY3RJbmRleCwgW3RvZG8oJ1J1bicsICdnbyBmb3IgYSBydW4nLCAnOS8xOS8xOTE5JyksIHRvZG8oJ2xpZnQnLCAnbGlmdCB0aGUgd2VpZ2h0cycsICcyMy8yMy8yMzIzJyldKSk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlIZWFkaW5nKHRpdGxlKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRpbmcnKVxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0aXRsZVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG5cbiAgICBwcm9qZWN0SW5kZXggPSAwO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9ICcnXG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKGRpc3BsYXlQcm9qZWN0KTtcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KHZhbHVlKSB7XG5cbiAgICAgICAgdmFsdWUuc2V0SUQocHJvamVjdEluZGV4KVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1idXR0b24nKVxuICAgICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQocHJvamVjdEluZGV4KVxuICAgICAgICBwcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gdmFsdWUuZ2V0TmFtZSgpXG5cbiAgICAgICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaWNvbi1jb250YWluZXInKVxuXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZS1wcm9qZWN0LWJ0bicpXG4gICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQodmFsdWUuZ2V0SUQoKSlcblxuICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQtcHJvamVjdC1idG4nKVxuICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQodmFsdWUuZ2V0SUQoKSlcblxuICAgICAgICBjb25zdCBjbG9zZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGNsb3NlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgY2xvc2UpXG4gICAgICAgIGNsb3NlSW1nLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaWNvbi1jbG9zZScpXG5cbiAgICAgICAgY29uc3QgZWRpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGVkaXRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBlZGl0KVxuICAgICAgICBlZGl0SW1nLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaWNvbi1lZGl0JylcblxuICAgICAgICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJbWcpXG4gICAgICAgIGNsb3NlQnRuLmFwcGVuZENoaWxkKGNsb3NlSW1nKVxuICAgICAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pXG4gICAgICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pXG4gICAgICAgIHByb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcilcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKVxuXG4gICAgICAgIHByb2plY3RJbmRleCArPSAxO1xuICAgIH1cblxuICAgIGxvYWRQcm9qZWN0SW5mbygpXG4gICAgbG9hZFByb2plY3RDbG9zZUJ0bnMoKVxuICAgIGxvYWRQcm9qZWN0RWRpdEJ0bnMoKTtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RJbmZvKCkge1xuXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcm9qZWN0LWJ1dHRvbicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlIZWFkaW5nKGJ1dHRvbnNbaV0udGV4dENvbnRlbnQpXG4gICAgICAgICAgICBkaXNwbGF5VG9kbyhzZWxlY3RQcm9qZWN0QnlJRChidXR0b25zW2ldLmNsYXNzTGlzdFswXSkpXG4gICAgICAgICAgICBkaXNwbGF5VG9kb01vZGFsKHNlbGVjdFByb2plY3RCeUlEKGJ1dHRvbnNbaV0uY2xhc3NMaXN0WzBdKSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0Q2xvc2VCdG5zKCkge1xuXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjbG9zZS1wcm9qZWN0LWJ0bicpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHNlbGVjdFByb2plY3RCeUlEKGJ1dHRvbnNbaV0uY2xhc3NMaXN0WzBdKSksIDEpXG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdHMoKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RFZGl0QnRucygpIHtcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZWRpdC1wcm9qZWN0LWJ0bicpXG4gICAgY29uc3QgZWRpdFByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByb2plY3QtbW9kYWwnKVxuICAgIGNvbnN0IGVkaXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByb2plY3QtbmFtZScpXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1lZGl0LXByb2plY3QtYnRuJylcbiAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm0tZWRpdC1wcm9qZWN0LWJ0bicpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0TW9kYWwuc2hvd01vZGFsKClcbiAgICAgICAgICAgIGN1cnJlbnRJRCA9IGJ1dHRvbnNbaV0uY2xhc3NMaXN0WzBdXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHNlbGVjdFByb2plY3RCeUlEKGN1cnJlbnRJRCkuc2V0TmFtZShlZGl0UHJvamVjdE5hbWUudmFsdWUpXG4gICAgICAgIGVkaXRQcm9qZWN0TmFtZS52YWx1ZSA9ICcnXG4gICAgICAgIGVkaXRQcm9qZWN0TW9kYWwuY2xvc2UoKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKClcbiAgICB9KVxuXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZWRpdFByb2plY3ROYW1lLnZhbHVlID0gJydcbiAgICAgICAgZWRpdFByb2plY3RNb2RhbC5jbG9zZSgpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gc2VsZWN0UHJvamVjdEJ5SUQoSUQpIHtcblxuICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSAnJ1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaChzZWxlY3RQcm9qZWN0KTtcblxuICAgIGZ1bmN0aW9uIHNlbGVjdFByb2plY3QodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlLmdldElEKCkgPT0gSUQpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdCA9IHZhbHVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRQcm9qZWN0XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0TW9kYWwoKSB7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0JylcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1tb2RhbCcpXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWUnKVxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWxQcm9qZWN0QnRuJylcbiAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1Qcm9qZWN0QnRuJylcblxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RNb2RhbC5zaG93TW9kYWwoKVxuICAgIH0pXG5cbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSwgcHJvamVjdEluZGV4LCBbXSkpXG4gICAgICAgIHByb2plY3ROYW1lLnZhbHVlID0gJydcbiAgICAgICAgcHJvamVjdE1vZGFsLmNsb3NlKClcbiAgICAgICAgZGlzcGxheVByb2plY3RzKClcbiAgICB9KVxuXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgcHJvamVjdE5hbWUudmFsdWUgPSAnJ1xuICAgICAgICBwcm9qZWN0TW9kYWwuY2xvc2UoKVxuICAgIH0pXG59XG5cblxuZXhwb3J0IHtcbiAgICBkaXNwbGF5SGVhZGluZyxcbiAgICBkaXNwbGF5UHJvamVjdHMsXG4gICAgZGlzcGxheVByb2plY3RNb2RhbCxcbn0iLCJpbXBvcnQge3RvZG99IGZyb20gJy4vb2JqZWN0LmpzJ1xuaW1wb3J0IGNsb3NlIGZyb20gJy4vaWNvbnMvY2xvc2Uuc3ZnJ1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9pY29ucy9lZGl0LnN2ZydcblxubGV0IHRvZG9JbmRleCA9IDA7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvKHByb2plY3QpIHtcblxuICAgIHRvZG9JbmRleCA9IDA7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJylcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJydcblxuICAgIHByb2plY3QuZ2V0VG9kb3MoKS5mb3JFYWNoKGRpc3BsYXlUb2RvcylcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlUb2Rvcyh2YWx1ZSkge1xuXG4gICAgICAgIHZhbHVlLnNldElEKHRvZG9JbmRleCkgXG5cbiAgICAgICAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0b2RvU2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tYnV0dG9uJylcbiAgICAgICAgdG9kb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCh0b2RvSW5kZXgpXG4gICAgICAgIHRvZG9TZWN0aW9uLnRleHRDb250ZW50ID0gdmFsdWUuZ2V0TmFtZSgpXG5cbiAgICAgICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1pY29uLWNvbnRhaW5lcicpXG5cbiAgICAgICAgY29uc3QgdG9kb0R1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0b2RvRHVlZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tZHVlLWRhdGUnKVxuICAgICAgICB0b2RvRHVlZGF0ZS50ZXh0Q29udGVudCA9IHZhbHVlLmdldER1ZWRhdGUoKVxuXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZS10b2RvLWJ0bicpXG4gICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQodmFsdWUuZ2V0SUQoKSlcbiAgICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2UtdG9kby1idG4nKVxuXG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdC10b2RvLWJ0bi0nICsgdmFsdWUuZ2V0SUQoKSArICcgJyArIHByb2plY3QuZ2V0TmFtZSgpKVxuICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQodmFsdWUuZ2V0SUQoKSlcbiAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LXRvZG8tYnRuJylcblxuICAgICAgICBjb25zdCBjbG9zZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGNsb3NlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgY2xvc2UpXG4gICAgICAgIGNsb3NlSW1nLmNsYXNzTGlzdC5hZGQoJ3RvZG8taWNvbi1jbG9zZScpXG5cbiAgICAgICAgY29uc3QgZWRpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGVkaXRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBlZGl0KVxuICAgICAgICBlZGl0SW1nLmNsYXNzTGlzdC5hZGQoJ3RvZG8taWNvbi1lZGl0JylcblxuICAgICAgICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJbWcpXG4gICAgICAgIGNsb3NlQnRuLmFwcGVuZENoaWxkKGNsb3NlSW1nKVxuICAgICAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EdWVkYXRlKVxuICAgICAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pXG4gICAgICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pXG4gICAgICAgIHRvZG9TZWN0aW9uLmFwcGVuZENoaWxkKGljb25Db250YWluZXIpXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb1NlY3Rpb24pXG5cbiAgICAgICAgdG9kb0luZGV4ICs9IDE7XG5cbiAgICB9XG5cbiAgICBsb2FkVG9kb0Nsb3NlQnRucyhwcm9qZWN0KVxuICAgIGxvYWRUb2RvRWRpdEJ0bnMocHJvamVjdClcblxufVxuXG5mdW5jdGlvbiBsb2FkVG9kb0Nsb3NlQnRucyhwcm9qZWN0KSB7XG5cbiAgICBsZXQgdG9kb0FycmF5ID0gcHJvamVjdC5nZXRUb2RvcygpXG5cbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Nsb3NlLXRvZG8tYnRuJylcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBidXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0FycmF5LnNwbGljZSh0b2RvQXJyYXkuaW5kZXhPZihzZWxlY3RUb2RvQnlJRChidXR0b25zW2ldLmNsYXNzTGlzdFswXSwgcHJvamVjdCkpLCAxKVxuICAgICAgICAgICAgZGlzcGxheVRvZG8ocHJvamVjdClcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gbG9hZFRvZG9FZGl0QnRucyhwcm9qZWN0KSB7XG5cbiAgICBsZXQgdG9kb0FycmF5ID0gcHJvamVjdC5nZXRUb2RvcygpXG4gICAgdG9kb0FycmF5LmZvckVhY2goc2V0dXBNb2RhbEJ1dHRvbnMpXG5cbiAgICBmdW5jdGlvbiBzZXR1cE1vZGFsQnV0dG9ucyh2YWx1ZSkge1xuXG4gICAgICAgIGxldCBJRCA9IHZhbHVlLmdldElEKClcbiAgICAgICAgbGV0IGN1cnJlbnRUb2RvID0gc2VsZWN0VG9kb0J5SUQoSUQsIHByb2plY3QpXG5cbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdG9kby1idG4tJyArIElEICsgJyAnICsgcHJvamVjdC5nZXROYW1lKCkpXG4gICAgICAgIGNvbnN0IGVkaXRUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10b2RvLW1vZGFsJylcbiAgICAgICAgY29uc3QgZWRpdFRvZG9OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdG9kby1uYW1lJylcbiAgICAgICAgY29uc3QgZWRpdFRvZG9EZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdG9kby1kZXNjJylcbiAgICAgICAgY29uc3QgZWRpdFRvZG9EdWVkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdG9kby1kdWVkYXRlJylcbiAgICAgICAgY29uc3QgZWRpdFRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRvZG8tcHJpb3JpdHknKVxuXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGVkaXRUb2RvTW9kYWwuc2hvd01vZGFsKClcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLWRpYWxvZy1idG5zJylcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnJ1xuICAgIFxuICAgICAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhbmNlbC1lZGl0LXRvZG8tYnRuLScgKyBJRCArICcgJyArIHByb2plY3QuZ2V0TmFtZSgpKVxuICAgICAgICAgICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIGNvbmZpcm1CdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjb25maXJtLWVkaXQtdG9kby1idG4tJyArIElEICsgJyAnICsgcHJvamVjdC5nZXROYW1lKCkpXG4gICAgICAgICAgICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnZGVmYXVsdCcpXG4gICAgICAgICAgICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nXG4gICAgICAgIFxuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjYW5jZWxCdG4pXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pXG4gICAgXG4gICAgICAgICAgICBjb25zdCBtb2RhbENhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtZWRpdC10b2RvLWJ0bi0nICsgSUQgKyAnICcgKyBwcm9qZWN0LmdldE5hbWUoKSlcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsQ29uZmlybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtLWVkaXQtdG9kby1idG4tJyArIElEICsgJyAnICsgcHJvamVjdC5nZXROYW1lKCkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VG9kby5nZXROYW1lKCkpXG4gICAgICAgIFxuXG4gICAgICAgICAgICBtb2RhbENhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUb2RvLmdldE5hbWUoKSlcbiAgICAgICAgICAgICAgICBlZGl0VG9kb05hbWUudmFsdWUgPSAnJ1xuICAgICAgICAgICAgICAgIGVkaXRUb2RvRGVzYy52YWx1ZSA9ICcnXG4gICAgICAgICAgICAgICAgZWRpdFRvZG9EdWVkYXRlLnZhbHVlID0gJydcbiAgICAgICAgICAgICAgICBlZGl0VG9kb1ByaW9yaXR5LnZhbHVlID0gJydcbiAgICAgICAgICAgICAgICBlZGl0VG9kb01vZGFsLmNsb3NlKClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIG1vZGFsQ29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIGN1cnJlbnRUb2RvLnNldE5hbWUoZWRpdFRvZG9OYW1lLnZhbHVlKVxuICAgICAgICAgICAgICAgIGN1cnJlbnRUb2RvLnNldERlc2NyaXB0aW9uKGVkaXRUb2RvRGVzYy52YWx1ZSlcbiAgICAgICAgICAgICAgICBjdXJyZW50VG9kby5zZXREdWVkYXRlKGVkaXRUb2RvRHVlZGF0ZS52YWx1ZSlcbiAgICAgICAgICAgICAgICBjdXJyZW50VG9kby5zZXRQcmlvcml0eShlZGl0VG9kb1ByaW9yaXR5LnZhbHVlKVxuICAgICAgICAgICAgICAgIGVkaXRUb2RvTmFtZS52YWx1ZSA9ICcnXG4gICAgICAgICAgICAgICAgZWRpdFRvZG9EZXNjLnZhbHVlID0gJydcbiAgICAgICAgICAgICAgICBlZGl0VG9kb0R1ZWRhdGUudmFsdWUgPSAnJ1xuICAgICAgICAgICAgICAgIGVkaXRUb2RvUHJpb3JpdHkudmFsdWUgPSAnJ1xuICAgICAgICAgICAgICAgIGVkaXRUb2RvTW9kYWwuY2xvc2UoKVxuICAgICAgICAgICAgICAgIGRpc3BsYXlUb2RvKHByb2plY3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0VG9kb0J5SUQoSUQsIHByb2plY3QpIHtcblxuICAgIGxldCBzZWxlY3RlZFRvZG8gPSAnJ1xuXG4gICAgcHJvamVjdC5nZXRUb2RvcygpLmZvckVhY2goc2VsZWN0VG9kbyk7XG5cbiAgICBmdW5jdGlvbiBzZWxlY3RUb2RvKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS5nZXRJRCgpID09IElEKSB7XG4gICAgICAgICAgICBzZWxlY3RlZFRvZG8gPSB2YWx1ZVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFRvZG9cbn1cblxuZnVuY3Rpb24gc2V0dXBBZGRUb2RvQnV0dG9uKHByb2plY3QpIHtcbiAgICBsZXQgSUQgPSBwcm9qZWN0LmdldElEKClcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1jb250YWluZXInKVxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnJ1xuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdG9kby0nICsgSUQpXG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJ1xuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChhZGRCdG4pXG5cbiAgICBzZXR1cEFkZFRvZG9Nb2RhbChwcm9qZWN0KVxufVxuXG5mdW5jdGlvbiBzZXR1cEFkZFRvZG9Nb2RhbChwcm9qZWN0KSB7XG4gICAgbGV0IElEID0gcHJvamVjdC5nZXRJRCgpXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRpYWxvZy1idG5zJylcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJydcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FuY2VsLXRvZG8tYnRuLScgKyBJRClcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJ1xuXG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29uZmlybUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbmZpcm0tdG9kby1idG4tJyArIElEKVxuICAgIGNvbmZpcm1CdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdkZWZhdWx0JylcbiAgICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nXG5cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNhbmNlbEJ0bilcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvTW9kYWwocHJvamVjdCkge1xuXG4gICAgc2V0dXBBZGRUb2RvQnV0dG9uKHByb2plY3QpXG5cbiAgICBsZXQgSUQgPSBwcm9qZWN0LmdldElEKClcbiAgICBsZXQgY3VycmVudFRvZG8gPSB0b2RvKClcblxuICAgIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRvZG8tJyArIElEKVxuICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLW1vZGFsJylcbiAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLW5hbWUnKVxuICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzYycpXG4gICAgY29uc3QgdG9kb0R1ZWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWVkYXRlJylcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eScpXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC10b2RvLWJ0bi0nICsgSUQpXG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtLXRvZG8tYnRuLScgKyBJRClcblxuICAgIGFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvZG9Nb2RhbC5zaG93TW9kYWwoKVxuICAgIH0pXG5cbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGN1cnJlbnRUb2RvLnNldE5hbWUodG9kb05hbWUudmFsdWUpXG4gICAgICAgIGN1cnJlbnRUb2RvLnNldERlc2NyaXB0aW9uKHRvZG9EZXNjLnZhbHVlKVxuICAgICAgICBjdXJyZW50VG9kby5zZXREdWVkYXRlKHRvZG9EdWVkYXRlLnZhbHVlKVxuICAgICAgICBjdXJyZW50VG9kby5zZXRQcmlvcml0eSh0b2RvUHJpb3JpdHkudmFsdWUpXG4gICAgICAgIGN1cnJlbnRUb2RvLnNldElEKHRvZG9JbmRleClcbiAgICAgICAgcHJvamVjdC5zZXRUb2RvKGN1cnJlbnRUb2RvKVxuICAgICAgICB0b2RvTmFtZS52YWx1ZSA9ICcnXG4gICAgICAgIHRvZG9EZXNjLnZhbHVlID0gJydcbiAgICAgICAgdG9kb0R1ZWRhdGUudmFsdWUgPSAnJ1xuICAgICAgICB0b2RvUHJpb3JpdHkudmFsdWUgPSAnJ1xuICAgICAgICB0b2RvTW9kYWwuY2xvc2UoKVxuICAgICAgICBkaXNwbGF5VG9kbyhwcm9qZWN0KVxuICAgIH0pXG5cbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0b2RvTmFtZS52YWx1ZSA9ICcnXG4gICAgICAgIHRvZG9EZXNjLnZhbHVlID0gJydcbiAgICAgICAgdG9kb0R1ZWRhdGUudmFsdWUgPSAnJ1xuICAgICAgICB0b2RvUHJpb3JpdHkudmFsdWUgPSAnJ1xuICAgICAgICB0b2RvTW9kYWwuY2xvc2UoKVxuICAgIH0pXG59XG5cbmV4cG9ydCB7XG4gICAgZGlzcGxheVRvZG8sXG4gICAgZGlzcGxheVRvZG9Nb2RhbFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7ZGlzcGxheUhlYWRpbmcsIGRpc3BsYXlQcm9qZWN0cywgZGlzcGxheVByb2plY3RNb2RhbH0gZnJvbSAnLi9wcm9qZWN0J1xuXG5mdW5jdGlvbiBsb2FkTWFpblBhZ2UoKSB7XG5cbiAgICBkaXNwbGF5UHJvamVjdHMoKVxuICAgIGRpc3BsYXlQcm9qZWN0TW9kYWwoKVxuXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzaWRlYmFyLWJ1dHRvbicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5SGVhZGluZyhidXR0b25zW2ldLnRleHRDb250ZW50KVxuICAgICAgICAgICAgZGlzcGxheVByb2plY3RzKClcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmxvYWRNYWluUGFnZSgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=