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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  background-color: rgb(201, 201, 201);\n}\n\nbody {\n  display: flex;\n  height: 100vh;\n  width: 100vw;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n}\n\n.title {\n  position: absolute;\n  top: 25px;\n  font-size: 4em;\n  color: rgb(0, 0, 0);\n}\n\n.player-one-board,\n.player-two-board {\n  position: relative;\n  display: grid;\n  grid-template-rows: repeat(10, max-content);\n  grid-template-columns: repeat(10, max-content);\n}\n\n.player-one-board > div,\n.player-two-board > div {\n  border: 1px black solid;\n  height: 50px;\n  width: 50px;\n\n  background-color: rgb(47, 58, 121);\n}\n\n.player-one-board > div:hover,\n.player-two-board > div:hover {\n  background-color: rgb(2, 196, 18);\n}\n\n#o {\n  background-color: rgb(78, 78, 78);\n}\n\n.coord-letter,\n.coord-letter-cpu {\n  position: absolute;\n  top: -30px;\n  margin-left: 20px;\n  font-size: 20px;\n  background: none;\n}\n\n.coord-num,\n.coord-num-cpu {\n  position: absolute;\n  left: -30px;\n  margin-top: 20px;\n  font-size: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,cAAc;EACd,mBAAmB;AACrB;;AAEA;;EAEE,kBAAkB;EAClB,aAAa;EACb,2CAA2C;EAC3C,8CAA8C;AAChD;;AAEA;;EAEE,uBAAuB;EACvB,YAAY;EACZ,WAAW;;EAEX,kCAAkC;AACpC;;AAEA;;EAEE,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;;EAEE,kBAAkB;EAClB,UAAU;EACV,iBAAiB;EACjB,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,eAAe;AACjB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  background-color: rgb(201, 201, 201);\n}\n\nbody {\n  display: flex;\n  height: 100vh;\n  width: 100vw;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n}\n\n.title {\n  position: absolute;\n  top: 25px;\n  font-size: 4em;\n  color: rgb(0, 0, 0);\n}\n\n.player-one-board,\n.player-two-board {\n  position: relative;\n  display: grid;\n  grid-template-rows: repeat(10, max-content);\n  grid-template-columns: repeat(10, max-content);\n}\n\n.player-one-board > div,\n.player-two-board > div {\n  border: 1px black solid;\n  height: 50px;\n  width: 50px;\n\n  background-color: rgb(47, 58, 121);\n}\n\n.player-one-board > div:hover,\n.player-two-board > div:hover {\n  background-color: rgb(2, 196, 18);\n}\n\n#o {\n  background-color: rgb(78, 78, 78);\n}\n\n.coord-letter,\n.coord-letter-cpu {\n  position: absolute;\n  top: -30px;\n  margin-left: 20px;\n  font-size: 20px;\n  background: none;\n}\n\n.coord-num,\n.coord-num-cpu {\n  position: absolute;\n  left: -30px;\n  margin-top: 20px;\n  font-size: 20px;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


let gameBoard = function () {
  let gameBoardArray = [];
  for (let i = 0; i < 100; i++) {
    gameBoardArray.push(i);
  }

  function placeShip(coords, ship) {
    // Remove (to make vertical, put this in a loop and +10 on coords)
    gameBoardArray.splice(coords, ship.shipArray.length, "o");

    // Replace
    for (let i = 0; i < ship.shipArray.length - 1; i++) {
      gameBoardArray.splice(coords, 0, ship.shipArray[i]);
      coords++;
    }
  }

  // Get random VALID coordinate
  function getValidCoords(elem) {
    // If the battleship wraps, correct it to the row it was placed on
    let newCoord = 0;
    let randomCoord = Math.floor(Math.random() * gameBoardArray.length);
    console.log(randomCoord);
    switch (true) {
      case randomCoord < 10 && randomCoord + elem.shipArray.length > 9:
        newCoord = randomCoord + elem.shipArray.length - 10;
        return randomCoord - newCoord;
      case randomCoord > 9 &&
        randomCoord < 20 &&
        randomCoord + elem.shipArray.length > 19:
        newCoord = randomCoord + elem.shipArray.length - 20;
        return randomCoord - newCoord;
      case randomCoord > 19 &&
        randomCoord < 30 &&
        randomCoord + elem.shipArray.length > 29:
        newCoord = randomCoord + elem.shipArray.length - 30;
        return randomCoord - newCoord;
      case randomCoord > 29 &&
        randomCoord < 40 &&
        randomCoord + elem.shipArray.length > 39:
        newCoord = randomCoord + elem.shipArray.length - 40;
        return randomCoord - newCoord;
      case randomCoord > 39 &&
        randomCoord < 50 &&
        randomCoord + elem.shipArray.length > 49:
        newCoord = randomCoord + elem.shipArray.length - 50;
        return randomCoord - newCoord;
      case randomCoord > 49 &&
        randomCoord < 60 &&
        randomCoord + elem.shipArray.length > 59:
        newCoord = randomCoord + elem.shipArray.length - 60;
        return randomCoord - newCoord;
      case randomCoord > 59 &&
        randomCoord < 70 &&
        randomCoord + elem.shipArray.length > 69:
        newCoord = randomCoord + elem.shipArray.length - 70;
        return randomCoord - newCoord;
      case randomCoord > 69 &&
        randomCoord < 80 &&
        randomCoord + elem.shipArray.length > 79:
        newCoord = randomCoord + elem.shipArray.length - 80;
        return randomCoord - newCoord;
      case randomCoord > 79 &&
        randomCoord < 90 &&
        randomCoord + elem.shipArray.length > 89:
        newCoord = randomCoord + elem.shipArray.length - 90;
        return randomCoord - newCoord;
      case randomCoord > 89 &&
        randomCoord < 100 &&
        randomCoord + elem.shipArray.length > 99:
        newCoord = randomCoord + elem.shipArray.length - 100;
        return randomCoord - newCoord;
      default:
        return randomCoord;
    }
  }

  // Computer randomly ship placement method
  function randomlyPlaceShips(computerPlayer, gameBoard) {
    computerPlayer.battleships.forEach((elem) => {
      // Get random coord
      let randomCoord = getValidCoords(elem);

      console.log(randomCoord);
      gameBoard.placeShip(randomCoord, elem);
      try {
        for (let i = 0; i < elem.shipArray.length; i++) {
          document.getElementById(`computer ${randomCoord}`).id = "o";
          randomCoord++;
        }
      } catch (err) {}
    });
  }

  function receiveAttack(coords) {
    if (gameBoardArray[coords] == "o") {
      gameBoardArray[coords] = "hit";
      return "hit";
    } else if (gameBoardArray[coords] <= 99) {
      gameBoardArray[coords] = "miss";
      return "miss";
    } else if (
      gameBoardArray[coords] == "hit" ||
      gameBoardArray[coords] == "miss"
    ) {
      return "already hit/missed";
    }
  }

  function allShipsSunk() {
    return !gameBoardArray.includes("o") ? "Game Over" : "Ships remain";
  }

  return {
    randomlyPlaceShips,
    gameBoardArray,
    placeShip,
    receiveAttack,
    allShipsSunk,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);

// module.exports = gameBoard;


/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


let players = function () {
  const battleships = [(0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2)];
  function randomMove(arr) {
    let move;
    do {
      move = Math.floor(Math.random() * arr.length);
    } while (arr[move] == "hit" || arr[move] == "miss");

    return move;
  }

  return {
    randomMove,
    battleships,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (players);
//module.exports = players;


/***/ }),

/***/ "./src/renderBoard.js":
/*!****************************!*\
  !*** ./src/renderBoard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let renderBoard = function (gameBoardArray) {
  const playerOneBoard = document.createElement("div");
  playerOneBoard.classList.add("player-one-board");
  document.body.appendChild(playerOneBoard);

  const playerTwoBoard = document.createElement("div");
  playerTwoBoard.classList.add("player-two-board");
  document.body.appendChild(playerTwoBoard);
  let index = 0;
  let letter = "A";
  let counter = 0;

  // Places array elements as cells in the DOM for the HUMAN board
  gameBoardArray.forEach((elem) => {
    let cell = document.createElement("div");
    cell.classList.add("player-one-cell");
    index++;

    // Adds letters on Y axis of grid
    if (index < 11) {
      let coordLetter = document.createElement("div");
      coordLetter.textContent = letter;
      coordLetter.classList.add("coord-letter");
      cell.appendChild(coordLetter);
      letter = String.fromCharCode(letter.charCodeAt(0) + 1);
    }

    //Adds numbers on X axis of grid
    if (index % 10 == 0) {
      ++counter;
      let coordNum = document.createElement("div");
      coordNum.classList.add("coord-num");
      coordNum.textContent = counter;
      cell.appendChild(coordNum);
    }
    cell.setAttribute("id", `${elem}`);
    playerOneBoard.appendChild(cell);
  });

  // Places array elements as cells in the DOM for the COMPUTER board
  let indexCPU = 0;
  let letterCPU = "A";
  let counterCPU = 0;

  gameBoardArray.forEach((elem) => {
    let cell = document.createElement("div");
    cell.classList.add("computer-cell");
    indexCPU++;
    // Adds letters on Y axis of grid
    if (indexCPU < 11) {
      let coordLetter = document.createElement("div");
      coordLetter.textContent = letterCPU;
      coordLetter.classList.add("coord-letter-cpu");
      cell.appendChild(coordLetter);
      letterCPU = String.fromCharCode(letterCPU.charCodeAt(0) + 1);
    }
    //Adds numbers on X axis of grid
    if (indexCPU % 10 == 0) {
      ++counterCPU;
      let coordNum = document.createElement("div");
      coordNum.classList.add("coord-num-cpu");
      coordNum.textContent = counterCPU;
      cell.appendChild(coordNum);
    }

    cell.setAttribute("id", `computer ${elem}`);
    playerTwoBoard.appendChild(cell);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderBoard);


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let ship = function (shipLength) {
  let shipArray = [];
  for (let i = 0; i < shipLength; i++) {
    shipArray.push("o");
  }

  function hit(index) {
    let getIndex = shipArray.indexOf(index);

    shipArray.splice(getIndex, 1);

    return shipArray;
  }

  function isSunk() {
    return shipArray.length == 0 ? true : false;
  }
  return {
    shipArray,
    hit,
    isSunk,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);

//module.exports = ship;


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players */ "./src/players.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _renderBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderBoard */ "./src/renderBoard.js");






// Selectors
const humanBoard = document.getElementsByClassName("player-one-board");
const computerBoard = document.getElementsByClassName("player-two-board");
const playerOneCells = document.querySelectorAll(".player-one-cell");
const computerCells = document.querySelectorAll(".computer-cell");

// Game loop
const playGame = (() => {
  let newGameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_renderBoard__WEBPACK_IMPORTED_MODULE_4__["default"])(newGameBoard.gameBoardArray);
})();

const newGameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"])();
const computer = (0,_players__WEBPACK_IMPORTED_MODULE_1__["default"])();

newGameBoard.randomlyPlaceShips(computer, newGameBoard);
console.log(newGameBoard.gameBoardArray);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsS0FBSztBQUM3QztBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RFM0I7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7QUFFcEI7Ozs7Ozs7VUMxQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDVztBQUNOO0FBQ1U7QUFDSTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFTO0FBQzlCLEVBQUUsd0RBQVc7QUFDYixDQUFDOztBQUVELHFCQUFxQixzREFBUztBQUM5QixpQkFBaUIsb0RBQU87O0FBRXhCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3JlbmRlckJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDIwMSwgMjAxKTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjVweDtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLnBsYXllci1vbmUtYm9hcmQsXFxuLnBsYXllci10d28tYm9hcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCBtYXgtY29udGVudCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgbWF4LWNvbnRlbnQpO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1ib2FyZCA+IGRpdixcXG4ucGxheWVyLXR3by1ib2FyZCA+IGRpdiB7XFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCA1OCwgMTIxKTtcXG59XFxuXFxuLnBsYXllci1vbmUtYm9hcmQgPiBkaXY6aG92ZXIsXFxuLnBsYXllci10d28tYm9hcmQgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDE5NiwgMTgpO1xcbn1cXG5cXG4jbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XFxufVxcblxcbi5jb29yZC1sZXR0ZXIsXFxuLmNvb3JkLWxldHRlci1jcHUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMzBweDtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLmNvb3JkLW51bSxcXG4uY29vcmQtbnVtLWNwdSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtMzBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDJDQUEyQztFQUMzQyw4Q0FBOEM7QUFDaEQ7O0FBRUE7O0VBRUUsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXOztFQUVYLGtDQUFrQztBQUNwQzs7QUFFQTs7RUFFRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAyMDEsIDIwMSk7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI1cHg7XFxuICBmb250LXNpemU6IDRlbTtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxufVxcblxcbi5wbGF5ZXItb25lLWJvYXJkLFxcbi5wbGF5ZXItdHdvLWJvYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgbWF4LWNvbnRlbnQpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1heC1jb250ZW50KTtcXG59XFxuXFxuLnBsYXllci1vbmUtYm9hcmQgPiBkaXYsXFxuLnBsYXllci10d28tYm9hcmQgPiBkaXYge1xcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NywgNTgsIDEyMSk7XFxufVxcblxcbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2OmhvdmVyLFxcbi5wbGF5ZXItdHdvLWJvYXJkID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxOTYsIDE4KTtcXG59XFxuXFxuI28ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc4LCA3OCwgNzgpO1xcbn1cXG5cXG4uY29vcmQtbGV0dGVyLFxcbi5jb29yZC1sZXR0ZXItY3B1IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTMwcHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5jb29yZC1udW0sXFxuLmNvb3JkLW51bS1jcHUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTMwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcblxubGV0IGdhbWVCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGdhbWVCb2FyZEFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICBnYW1lQm9hcmRBcnJheS5wdXNoKGkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKGNvb3Jkcywgc2hpcCkge1xuICAgIC8vIFJlbW92ZSAodG8gbWFrZSB2ZXJ0aWNhbCwgcHV0IHRoaXMgaW4gYSBsb29wIGFuZCArMTAgb24gY29vcmRzKVxuICAgIGdhbWVCb2FyZEFycmF5LnNwbGljZShjb29yZHMsIHNoaXAuc2hpcEFycmF5Lmxlbmd0aCwgXCJvXCIpO1xuXG4gICAgLy8gUmVwbGFjZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwQXJyYXkubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBnYW1lQm9hcmRBcnJheS5zcGxpY2UoY29vcmRzLCAwLCBzaGlwLnNoaXBBcnJheVtpXSk7XG4gICAgICBjb29yZHMrKztcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgcmFuZG9tIFZBTElEIGNvb3JkaW5hdGVcbiAgZnVuY3Rpb24gZ2V0VmFsaWRDb29yZHMoZWxlbSkge1xuICAgIC8vIElmIHRoZSBiYXR0bGVzaGlwIHdyYXBzLCBjb3JyZWN0IGl0IHRvIHRoZSByb3cgaXQgd2FzIHBsYWNlZCBvblxuICAgIGxldCBuZXdDb29yZCA9IDA7XG4gICAgbGV0IHJhbmRvbUNvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZUJvYXJkQXJyYXkubGVuZ3RoKTtcbiAgICBjb25zb2xlLmxvZyhyYW5kb21Db29yZCk7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIHJhbmRvbUNvb3JkIDwgMTAgJiYgcmFuZG9tQ29vcmQgKyBlbGVtLnNoaXBBcnJheS5sZW5ndGggPiA5OlxuICAgICAgICBuZXdDb29yZCA9IHJhbmRvbUNvb3JkICsgZWxlbS5zaGlwQXJyYXkubGVuZ3RoIC0gMTA7XG4gICAgICAgIHJldHVybiByYW5kb21Db29yZCAtIG5ld0Nvb3JkO1xuICAgICAgY2FzZSByYW5kb21Db29yZCA+IDkgJiZcbiAgICAgICAgcmFuZG9tQ29vcmQgPCAyMCAmJlxuICAgICAgICByYW5kb21Db29yZCArIGVsZW0uc2hpcEFycmF5Lmxlbmd0aCA+IDE5OlxuICAgICAgICBuZXdDb29yZCA9IHJhbmRvbUNvb3JkICsgZWxlbS5zaGlwQXJyYXkubGVuZ3RoIC0gMjA7XG4gICAgICAgIHJldHVybiByYW5kb21Db29yZCAtIG5ld0Nvb3JkO1xuICAgICAgY2FzZSByYW5kb21Db29yZCA+IDE5ICYmXG4gICAgICAgIHJhbmRvbUNvb3JkIDwgMzAgJiZcbiAgICAgICAgcmFuZG9tQ29vcmQgKyBlbGVtLnNoaXBBcnJheS5sZW5ndGggPiAyOTpcbiAgICAgICAgbmV3Q29vcmQgPSByYW5kb21Db29yZCArIGVsZW0uc2hpcEFycmF5Lmxlbmd0aCAtIDMwO1xuICAgICAgICByZXR1cm4gcmFuZG9tQ29vcmQgLSBuZXdDb29yZDtcbiAgICAgIGNhc2UgcmFuZG9tQ29vcmQgPiAyOSAmJlxuICAgICAgICByYW5kb21Db29yZCA8IDQwICYmXG4gICAgICAgIHJhbmRvbUNvb3JkICsgZWxlbS5zaGlwQXJyYXkubGVuZ3RoID4gMzk6XG4gICAgICAgIG5ld0Nvb3JkID0gcmFuZG9tQ29vcmQgKyBlbGVtLnNoaXBBcnJheS5sZW5ndGggLSA0MDtcbiAgICAgICAgcmV0dXJuIHJhbmRvbUNvb3JkIC0gbmV3Q29vcmQ7XG4gICAgICBjYXNlIHJhbmRvbUNvb3JkID4gMzkgJiZcbiAgICAgICAgcmFuZG9tQ29vcmQgPCA1MCAmJlxuICAgICAgICByYW5kb21Db29yZCArIGVsZW0uc2hpcEFycmF5Lmxlbmd0aCA+IDQ5OlxuICAgICAgICBuZXdDb29yZCA9IHJhbmRvbUNvb3JkICsgZWxlbS5zaGlwQXJyYXkubGVuZ3RoIC0gNTA7XG4gICAgICAgIHJldHVybiByYW5kb21Db29yZCAtIG5ld0Nvb3JkO1xuICAgICAgY2FzZSByYW5kb21Db29yZCA+IDQ5ICYmXG4gICAgICAgIHJhbmRvbUNvb3JkIDwgNjAgJiZcbiAgICAgICAgcmFuZG9tQ29vcmQgKyBlbGVtLnNoaXBBcnJheS5sZW5ndGggPiA1OTpcbiAgICAgICAgbmV3Q29vcmQgPSByYW5kb21Db29yZCArIGVsZW0uc2hpcEFycmF5Lmxlbmd0aCAtIDYwO1xuICAgICAgICByZXR1cm4gcmFuZG9tQ29vcmQgLSBuZXdDb29yZDtcbiAgICAgIGNhc2UgcmFuZG9tQ29vcmQgPiA1OSAmJlxuICAgICAgICByYW5kb21Db29yZCA8IDcwICYmXG4gICAgICAgIHJhbmRvbUNvb3JkICsgZWxlbS5zaGlwQXJyYXkubGVuZ3RoID4gNjk6XG4gICAgICAgIG5ld0Nvb3JkID0gcmFuZG9tQ29vcmQgKyBlbGVtLnNoaXBBcnJheS5sZW5ndGggLSA3MDtcbiAgICAgICAgcmV0dXJuIHJhbmRvbUNvb3JkIC0gbmV3Q29vcmQ7XG4gICAgICBjYXNlIHJhbmRvbUNvb3JkID4gNjkgJiZcbiAgICAgICAgcmFuZG9tQ29vcmQgPCA4MCAmJlxuICAgICAgICByYW5kb21Db29yZCArIGVsZW0uc2hpcEFycmF5Lmxlbmd0aCA+IDc5OlxuICAgICAgICBuZXdDb29yZCA9IHJhbmRvbUNvb3JkICsgZWxlbS5zaGlwQXJyYXkubGVuZ3RoIC0gODA7XG4gICAgICAgIHJldHVybiByYW5kb21Db29yZCAtIG5ld0Nvb3JkO1xuICAgICAgY2FzZSByYW5kb21Db29yZCA+IDc5ICYmXG4gICAgICAgIHJhbmRvbUNvb3JkIDwgOTAgJiZcbiAgICAgICAgcmFuZG9tQ29vcmQgKyBlbGVtLnNoaXBBcnJheS5sZW5ndGggPiA4OTpcbiAgICAgICAgbmV3Q29vcmQgPSByYW5kb21Db29yZCArIGVsZW0uc2hpcEFycmF5Lmxlbmd0aCAtIDkwO1xuICAgICAgICByZXR1cm4gcmFuZG9tQ29vcmQgLSBuZXdDb29yZDtcbiAgICAgIGNhc2UgcmFuZG9tQ29vcmQgPiA4OSAmJlxuICAgICAgICByYW5kb21Db29yZCA8IDEwMCAmJlxuICAgICAgICByYW5kb21Db29yZCArIGVsZW0uc2hpcEFycmF5Lmxlbmd0aCA+IDk5OlxuICAgICAgICBuZXdDb29yZCA9IHJhbmRvbUNvb3JkICsgZWxlbS5zaGlwQXJyYXkubGVuZ3RoIC0gMTAwO1xuICAgICAgICByZXR1cm4gcmFuZG9tQ29vcmQgLSBuZXdDb29yZDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiByYW5kb21Db29yZDtcbiAgICB9XG4gIH1cblxuICAvLyBDb21wdXRlciByYW5kb21seSBzaGlwIHBsYWNlbWVudCBtZXRob2RcbiAgZnVuY3Rpb24gcmFuZG9tbHlQbGFjZVNoaXBzKGNvbXB1dGVyUGxheWVyLCBnYW1lQm9hcmQpIHtcbiAgICBjb21wdXRlclBsYXllci5iYXR0bGVzaGlwcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAvLyBHZXQgcmFuZG9tIGNvb3JkXG4gICAgICBsZXQgcmFuZG9tQ29vcmQgPSBnZXRWYWxpZENvb3JkcyhlbGVtKTtcblxuICAgICAgY29uc29sZS5sb2cocmFuZG9tQ29vcmQpO1xuICAgICAgZ2FtZUJvYXJkLnBsYWNlU2hpcChyYW5kb21Db29yZCwgZWxlbSk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW0uc2hpcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvbXB1dGVyICR7cmFuZG9tQ29vcmR9YCkuaWQgPSBcIm9cIjtcbiAgICAgICAgICByYW5kb21Db29yZCsrO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3Jkcykge1xuICAgIGlmIChnYW1lQm9hcmRBcnJheVtjb29yZHNdID09IFwib1wiKSB7XG4gICAgICBnYW1lQm9hcmRBcnJheVtjb29yZHNdID0gXCJoaXRcIjtcbiAgICAgIHJldHVybiBcImhpdFwiO1xuICAgIH0gZWxzZSBpZiAoZ2FtZUJvYXJkQXJyYXlbY29vcmRzXSA8PSA5OSkge1xuICAgICAgZ2FtZUJvYXJkQXJyYXlbY29vcmRzXSA9IFwibWlzc1wiO1xuICAgICAgcmV0dXJuIFwibWlzc1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBnYW1lQm9hcmRBcnJheVtjb29yZHNdID09IFwiaGl0XCIgfHxcbiAgICAgIGdhbWVCb2FyZEFycmF5W2Nvb3Jkc10gPT0gXCJtaXNzXCJcbiAgICApIHtcbiAgICAgIHJldHVybiBcImFscmVhZHkgaGl0L21pc3NlZFwiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFsbFNoaXBzU3VuaygpIHtcbiAgICByZXR1cm4gIWdhbWVCb2FyZEFycmF5LmluY2x1ZGVzKFwib1wiKSA/IFwiR2FtZSBPdmVyXCIgOiBcIlNoaXBzIHJlbWFpblwiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByYW5kb21seVBsYWNlU2hpcHMsXG4gICAgZ2FtZUJvYXJkQXJyYXksXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU2hpcHNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUJvYXJkO1xuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IGdhbWVCb2FyZDtcbiIsImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcblxubGV0IHBsYXllcnMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJhdHRsZXNoaXBzID0gW3NoaXAoNSksIHNoaXAoNCksIHNoaXAoMyksIHNoaXAoMyksIHNoaXAoMildO1xuICBmdW5jdGlvbiByYW5kb21Nb3ZlKGFycikge1xuICAgIGxldCBtb3ZlO1xuICAgIGRvIHtcbiAgICAgIG1vdmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgICB9IHdoaWxlIChhcnJbbW92ZV0gPT0gXCJoaXRcIiB8fCBhcnJbbW92ZV0gPT0gXCJtaXNzXCIpO1xuXG4gICAgcmV0dXJuIG1vdmU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJhbmRvbU1vdmUsXG4gICAgYmF0dGxlc2hpcHMsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXJzO1xuLy9tb2R1bGUuZXhwb3J0cyA9IHBsYXllcnM7XG4iLCJsZXQgcmVuZGVyQm9hcmQgPSBmdW5jdGlvbiAoZ2FtZUJvYXJkQXJyYXkpIHtcbiAgY29uc3QgcGxheWVyT25lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJPbmVCb2FyZC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLW9uZS1ib2FyZFwiKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5ZXJPbmVCb2FyZCk7XG5cbiAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJUd29Cb2FyZC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXR3by1ib2FyZFwiKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5ZXJUd29Cb2FyZCk7XG4gIGxldCBpbmRleCA9IDA7XG4gIGxldCBsZXR0ZXIgPSBcIkFcIjtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gIC8vIFBsYWNlcyBhcnJheSBlbGVtZW50cyBhcyBjZWxscyBpbiB0aGUgRE9NIGZvciB0aGUgSFVNQU4gYm9hcmRcbiAgZ2FtZUJvYXJkQXJyYXkuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItb25lLWNlbGxcIik7XG4gICAgaW5kZXgrKztcblxuICAgIC8vIEFkZHMgbGV0dGVycyBvbiBZIGF4aXMgb2YgZ3JpZFxuICAgIGlmIChpbmRleCA8IDExKSB7XG4gICAgICBsZXQgY29vcmRMZXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29vcmRMZXR0ZXIudGV4dENvbnRlbnQgPSBsZXR0ZXI7XG4gICAgICBjb29yZExldHRlci5jbGFzc0xpc3QuYWRkKFwiY29vcmQtbGV0dGVyXCIpO1xuICAgICAgY2VsbC5hcHBlbmRDaGlsZChjb29yZExldHRlcik7XG4gICAgICBsZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGxldHRlci5jaGFyQ29kZUF0KDApICsgMSk7XG4gICAgfVxuXG4gICAgLy9BZGRzIG51bWJlcnMgb24gWCBheGlzIG9mIGdyaWRcbiAgICBpZiAoaW5kZXggJSAxMCA9PSAwKSB7XG4gICAgICArK2NvdW50ZXI7XG4gICAgICBsZXQgY29vcmROdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29vcmROdW0uY2xhc3NMaXN0LmFkZChcImNvb3JkLW51bVwiKTtcbiAgICAgIGNvb3JkTnVtLnRleHRDb250ZW50ID0gY291bnRlcjtcbiAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoY29vcmROdW0pO1xuICAgIH1cbiAgICBjZWxsLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2VsZW19YCk7XG4gICAgcGxheWVyT25lQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gIH0pO1xuXG4gIC8vIFBsYWNlcyBhcnJheSBlbGVtZW50cyBhcyBjZWxscyBpbiB0aGUgRE9NIGZvciB0aGUgQ09NUFVURVIgYm9hcmRcbiAgbGV0IGluZGV4Q1BVID0gMDtcbiAgbGV0IGxldHRlckNQVSA9IFwiQVwiO1xuICBsZXQgY291bnRlckNQVSA9IDA7XG5cbiAgZ2FtZUJvYXJkQXJyYXkuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1jZWxsXCIpO1xuICAgIGluZGV4Q1BVKys7XG4gICAgLy8gQWRkcyBsZXR0ZXJzIG9uIFkgYXhpcyBvZiBncmlkXG4gICAgaWYgKGluZGV4Q1BVIDwgMTEpIHtcbiAgICAgIGxldCBjb29yZExldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb29yZExldHRlci50ZXh0Q29udGVudCA9IGxldHRlckNQVTtcbiAgICAgIGNvb3JkTGV0dGVyLmNsYXNzTGlzdC5hZGQoXCJjb29yZC1sZXR0ZXItY3B1XCIpO1xuICAgICAgY2VsbC5hcHBlbmRDaGlsZChjb29yZExldHRlcik7XG4gICAgICBsZXR0ZXJDUFUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGxldHRlckNQVS5jaGFyQ29kZUF0KDApICsgMSk7XG4gICAgfVxuICAgIC8vQWRkcyBudW1iZXJzIG9uIFggYXhpcyBvZiBncmlkXG4gICAgaWYgKGluZGV4Q1BVICUgMTAgPT0gMCkge1xuICAgICAgKytjb3VudGVyQ1BVO1xuICAgICAgbGV0IGNvb3JkTnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvb3JkTnVtLmNsYXNzTGlzdC5hZGQoXCJjb29yZC1udW0tY3B1XCIpO1xuICAgICAgY29vcmROdW0udGV4dENvbnRlbnQgPSBjb3VudGVyQ1BVO1xuICAgICAgY2VsbC5hcHBlbmRDaGlsZChjb29yZE51bSk7XG4gICAgfVxuXG4gICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgY29tcHV0ZXIgJHtlbGVtfWApO1xuICAgIHBsYXllclR3b0JvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckJvYXJkO1xuIiwibGV0IHNoaXAgPSBmdW5jdGlvbiAoc2hpcExlbmd0aCkge1xuICBsZXQgc2hpcEFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgc2hpcEFycmF5LnB1c2goXCJvXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGl0KGluZGV4KSB7XG4gICAgbGV0IGdldEluZGV4ID0gc2hpcEFycmF5LmluZGV4T2YoaW5kZXgpO1xuXG4gICAgc2hpcEFycmF5LnNwbGljZShnZXRJbmRleCwgMSk7XG5cbiAgICByZXR1cm4gc2hpcEFycmF5O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIHJldHVybiBzaGlwQXJyYXkubGVuZ3RoID09IDAgPyB0cnVlIDogZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzaGlwQXJyYXksXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXA7XG5cbi8vbW9kdWxlLmV4cG9ydHMgPSBzaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgcGxheWVycyBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHJlbmRlckJvYXJkIGZyb20gXCIuL3JlbmRlckJvYXJkXCI7XG5cbi8vIFNlbGVjdG9yc1xuY29uc3QgaHVtYW5Cb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwbGF5ZXItb25lLWJvYXJkXCIpO1xuY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwbGF5ZXItdHdvLWJvYXJkXCIpO1xuY29uc3QgcGxheWVyT25lQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1vbmUtY2VsbFwiKTtcbmNvbnN0IGNvbXB1dGVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXB1dGVyLWNlbGxcIik7XG5cbi8vIEdhbWUgbG9vcFxuY29uc3QgcGxheUdhbWUgPSAoKCkgPT4ge1xuICBsZXQgbmV3R2FtZUJvYXJkID0gZ2FtZUJvYXJkKCk7XG4gIHJlbmRlckJvYXJkKG5ld0dhbWVCb2FyZC5nYW1lQm9hcmRBcnJheSk7XG59KSgpO1xuXG5jb25zdCBuZXdHYW1lQm9hcmQgPSBnYW1lQm9hcmQoKTtcbmNvbnN0IGNvbXB1dGVyID0gcGxheWVycygpO1xuXG5uZXdHYW1lQm9hcmQucmFuZG9tbHlQbGFjZVNoaXBzKGNvbXB1dGVyLCBuZXdHYW1lQm9hcmQpO1xuY29uc29sZS5sb2cobmV3R2FtZUJvYXJkLmdhbWVCb2FyZEFycmF5KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==