/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Quill Editor v2.0.0-dev.3
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["Quill"] = factory();else root["Quill"] = factory();
})(window, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
          /******/
        }
        /******/
      };
      /******/
      /******/ // define __esModule on exports
      /******/__webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
          /******/
        }
        /******/Object.defineProperty(exports, '__esModule', { value: true });
        /******/
      };
      /******/
      /******/ // create a fake namespace object
      /******/ // mode & 1: value is a module id, require it
      /******/ // mode & 2: merge all properties of value into the ns
      /******/ // mode & 4: return value when already ns object
      /******/ // mode & 8|1: behave like require
      /******/__webpack_require__.t = function (value, mode) {
        /******/if (mode & 1) value = __webpack_require__(value);
        /******/if (mode & 8) return value;
        /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
        /******/var ns = Object.create(null);
        /******/__webpack_require__.r(ns);
        /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        } /******/return ns;
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/
    /******/{

      /***/"./assets/icons/align-center.svg":
      /*!***************************************!*\
        !*** ./assets/icons/align-center.svg ***!
        \***************************************/
      /*! no static exports found */
      /***/function assetsIconsAlignCenterSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/align-center.svg?");

        /***/
      },

      /***/"./assets/icons/align-justify.svg":
      /*!****************************************!*\
        !*** ./assets/icons/align-justify.svg ***!
        \****************************************/
      /*! no static exports found */
      /***/function assetsIconsAlignJustifySvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/align-justify.svg?");

        /***/
      },

      /***/"./assets/icons/align-left.svg":
      /*!*************************************!*\
        !*** ./assets/icons/align-left.svg ***!
        \*************************************/
      /*! no static exports found */
      /***/function assetsIconsAlignLeftSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/align-left.svg?");

        /***/
      },

      /***/"./assets/icons/align-right.svg":
      /*!**************************************!*\
        !*** ./assets/icons/align-right.svg ***!
        \**************************************/
      /*! no static exports found */
      /***/function assetsIconsAlignRightSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/align-right.svg?");

        /***/
      },

      /***/"./assets/icons/background.svg":
      /*!*************************************!*\
        !*** ./assets/icons/background.svg ***!
        \*************************************/
      /*! no static exports found */
      /***/function assetsIconsBackgroundSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <g class=\\\"ql-fill ql-color-label\\\"> <polygon points=\\\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\\\"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points=\\\"6.817 5 6 5 6 6 6.38 6 6.817 5\\\"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points=\\\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\\\"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points=\\\"4.63 10 4 10 4 11 4.192 11 4.63 10\\\"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points=\\\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\\\"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points=\\\"12 6.868 12 6 11.62 6 12 6.868\\\"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points=\\\"12.933 9 13 9 13 8 12.495 8 12.933 9\\\"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points=\\\"5.5 13 9 5 12.5 13\\\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/background.svg?");

        /***/
      },

      /***/"./assets/icons/blockquote.svg":
      /*!*************************************!*\
        !*** ./assets/icons/blockquote.svg ***!
        \*************************************/
      /*! no static exports found */
      /***/function assetsIconsBlockquoteSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=\\\"ql-fill ql-stroke\\\" height=3 width=3 x=4 y=5></rect> <rect class=\\\"ql-fill ql-stroke\\\" height=3 width=3 x=11 y=5></rect> <path class=\\\"ql-even ql-fill ql-stroke\\\" d=M7,8c0,4.031-3,5-3,5></path> <path class=\\\"ql-even ql-fill ql-stroke\\\" d=M14,8c0,4.031-3,5-3,5></path> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/blockquote.svg?");

        /***/
      },

      /***/"./assets/icons/bold.svg":
      /*!*******************************!*\
        !*** ./assets/icons/bold.svg ***!
        \*******************************/
      /*! no static exports found */
      /***/function assetsIconsBoldSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/bold.svg?");

        /***/
      },

      /***/"./assets/icons/clean.svg":
      /*!********************************!*\
        !*** ./assets/icons/clean.svg ***!
        \********************************/
      /*! no static exports found */
      /***/function assetsIconsCleanSvg(module, exports) {

        eval("module.exports = \"<svg class=\\\"\\\" viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/clean.svg?");

        /***/
      },

      /***/"./assets/icons/code.svg":
      /*!*******************************!*\
        !*** ./assets/icons/code.svg ***!
        \*******************************/
      /*! no static exports found */
      /***/function assetsIconsCodeSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <polyline class=\\\"ql-even ql-stroke\\\" points=\\\"5 7 3 9 5 11\\\"></polyline> <polyline class=\\\"ql-even ql-stroke\\\" points=\\\"13 7 15 9 13 11\\\"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/code.svg?");

        /***/
      },

      /***/"./assets/icons/color.svg":
      /*!********************************!*\
        !*** ./assets/icons/color.svg ***!
        \********************************/
      /*! no static exports found */
      /***/function assetsIconsColorSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=\\\"ql-color-label ql-stroke ql-transparent\\\" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points=\\\"5.5 11 9 3 12.5 11\\\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/color.svg?");

        /***/
      },

      /***/"./assets/icons/direction-ltr.svg":
      /*!****************************************!*\
        !*** ./assets/icons/direction-ltr.svg ***!
        \****************************************/
      /*! no static exports found */
      /***/function assetsIconsDirectionLtrSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <polygon class=\\\"ql-stroke ql-fill\\\" points=\\\"3 11 5 9 3 7 3 11\\\"></polygon> <line class=\\\"ql-stroke ql-fill\\\" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/direction-ltr.svg?");

        /***/
      },

      /***/"./assets/icons/direction-rtl.svg":
      /*!****************************************!*\
        !*** ./assets/icons/direction-rtl.svg ***!
        \****************************************/
      /*! no static exports found */
      /***/function assetsIconsDirectionRtlSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <polygon class=\\\"ql-stroke ql-fill\\\" points=\\\"15 12 13 10 15 8 15 12\\\"></polygon> <line class=\\\"ql-stroke ql-fill\\\" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/direction-rtl.svg?");

        /***/
      },

      /***/"./assets/icons/dropdown.svg":
      /*!***********************************!*\
        !*** ./assets/icons/dropdown.svg ***!
        \***********************************/
      /*! no static exports found */
      /***/function assetsIconsDropdownSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <polygon class=ql-stroke points=\\\"7 11 9 13 11 11 7 11\\\"></polygon> <polygon class=ql-stroke points=\\\"7 7 9 5 11 7 7 7\\\"></polygon> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/dropdown.svg?");

        /***/
      },

      /***/"./assets/icons/formula.svg":
      /*!**********************************!*\
        !*** ./assets/icons/formula.svg ***!
        \**********************************/
      /*! no static exports found */
      /***/function assetsIconsFormulaSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/formula.svg?");

        /***/
      },

      /***/"./assets/icons/header-2.svg":
      /*!***********************************!*\
        !*** ./assets/icons/header-2.svg ***!
        \***********************************/
      /*! no static exports found */
      /***/function assetsIconsHeader2Svg(module, exports) {

        eval("module.exports = \"<svg viewBox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/header-2.svg?");

        /***/
      },

      /***/"./assets/icons/header.svg":
      /*!*********************************!*\
        !*** ./assets/icons/header.svg ***!
        \*********************************/
      /*! no static exports found */
      /***/function assetsIconsHeaderSvg(module, exports) {

        eval("module.exports = \"<svg viewBox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/header.svg?");

        /***/
      },

      /***/"./assets/icons/image.svg":
      /*!********************************!*\
        !*** ./assets/icons/image.svg ***!
        \********************************/
      /*! no static exports found */
      /***/function assetsIconsImageSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class=\\\"ql-even ql-fill\\\" points=\\\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\\\"></polyline> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/image.svg?");

        /***/
      },

      /***/"./assets/icons/indent.svg":
      /*!*********************************!*\
        !*** ./assets/icons/indent.svg ***!
        \*********************************/
      /*! no static exports found */
      /***/function assetsIconsIndentSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=\\\"ql-fill ql-stroke\\\" points=\\\"3 7 3 11 5 9 3 7\\\"></polyline> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/indent.svg?");

        /***/
      },

      /***/"./assets/icons/italic.svg":
      /*!*********************************!*\
        !*** ./assets/icons/italic.svg ***!
        \*********************************/
      /*! no static exports found */
      /***/function assetsIconsItalicSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/italic.svg?");

        /***/
      },

      /***/"./assets/icons/link.svg":
      /*!*******************************!*\
        !*** ./assets/icons/link.svg ***!
        \*******************************/
      /*! no static exports found */
      /***/function assetsIconsLinkSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class=\\\"ql-even ql-stroke\\\" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class=\\\"ql-even ql-stroke\\\" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/link.svg?");

        /***/
      },

      /***/"./assets/icons/list-bullet.svg":
      /*!**************************************!*\
        !*** ./assets/icons/list-bullet.svg ***!
        \**************************************/
      /*! no static exports found */
      /***/function assetsIconsListBulletSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/list-bullet.svg?");

        /***/
      },

      /***/"./assets/icons/list-check.svg":
      /*!*************************************!*\
        !*** ./assets/icons/list-check.svg ***!
        \*************************************/
      /*! no static exports found */
      /***/function assetsIconsListCheckSvg(module, exports) {

        eval("module.exports = \"<svg class=\\\"\\\" viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points=\\\"3 4 4 5 6 3\\\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points=\\\"3 14 4 15 6 13\\\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\\\"3 9 4 10 6 8\\\"></polyline> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/list-check.svg?");

        /***/
      },

      /***/"./assets/icons/list-ordered.svg":
      /*!***************************************!*\
        !*** ./assets/icons/list-ordered.svg ***!
        \***************************************/
      /*! no static exports found */
      /***/function assetsIconsListOrderedSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class=\\\"ql-stroke ql-thin\\\" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class=\\\"ql-stroke ql-thin\\\" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class=\\\"ql-stroke ql-thin\\\" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/list-ordered.svg?");

        /***/
      },

      /***/"./assets/icons/outdent.svg":
      /*!**********************************!*\
        !*** ./assets/icons/outdent.svg ***!
        \**********************************/
      /*! no static exports found */
      /***/function assetsIconsOutdentSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\\\"5 7 5 11 3 9 5 7\\\"></polyline> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/outdent.svg?");

        /***/
      },

      /***/"./assets/icons/strike.svg":
      /*!*********************************!*\
        !*** ./assets/icons/strike.svg ***!
        \*********************************/
      /*! no static exports found */
      /***/function assetsIconsStrikeSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=\\\"ql-stroke ql-thin\\\" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/strike.svg?");

        /***/
      },

      /***/"./assets/icons/subscript.svg":
      /*!************************************!*\
        !*** ./assets/icons/subscript.svg ***!
        \************************************/
      /*! no static exports found */
      /***/function assetsIconsSubscriptSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/subscript.svg?");

        /***/
      },

      /***/"./assets/icons/superscript.svg":
      /*!**************************************!*\
        !*** ./assets/icons/superscript.svg ***!
        \**************************************/
      /*! no static exports found */
      /***/function assetsIconsSuperscriptSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/superscript.svg?");

        /***/
      },

      /***/"./assets/icons/table.svg":
      /*!********************************!*\
        !*** ./assets/icons/table.svg ***!
        \********************************/
      /*! no static exports found */
      /***/function assetsIconsTableSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=2 width=3 x=5 y=5></rect> <rect class=ql-fill height=2 width=4 x=9 y=5></rect> <g class=\\\"ql-fill ql-transparent\\\"> <rect height=2 width=3 x=5 y=8></rect> <rect height=2 width=4 x=9 y=8></rect> <rect height=2 width=3 x=5 y=11></rect> <rect height=2 width=4 x=9 y=11></rect> </g> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/table.svg?");

        /***/
      },

      /***/"./assets/icons/underline.svg":
      /*!************************************!*\
        !*** ./assets/icons/underline.svg ***!
        \************************************/
      /*! no static exports found */
      /***/function assetsIconsUnderlineSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/underline.svg?");

        /***/
      },

      /***/"./assets/icons/video.svg":
      /*!********************************!*\
        !*** ./assets/icons/video.svg ***!
        \********************************/
      /*! no static exports found */
      /***/function assetsIconsVideoSvg(module, exports) {

        eval("module.exports = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>\";\n\n//# sourceURL=webpack://Quill/./assets/icons/video.svg?");

        /***/
      },

      /***/"./blots/block.js":
      /*!************************!*\
        !*** ./blots/block.js ***!
        \************************/
      /*! no static exports found */
      /***/function blotsBlockJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.BlockEmbed = exports.bubbleFormats = exports.blockDelta = undefined;\n\nvar _extend = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n\nvar _extend2 = _interopRequireDefault(_extend);\n\nvar _quillDelta = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n\nvar _quillDelta2 = _interopRequireDefault(_quillDelta);\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nvar _break = __webpack_require__(/*! ./break */ \"./blots/break.js\");\n\nvar _break2 = _interopRequireDefault(_break);\n\nvar _inline = __webpack_require__(/*! ./inline */ \"./blots/inline.js\");\n\nvar _inline2 = _interopRequireDefault(_inline);\n\nvar _text = __webpack_require__(/*! ./text */ \"./blots/text.js\");\n\nvar _text2 = _interopRequireDefault(_text);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst NEWLINE_LENGTH = 1;\n\nclass Block extends _parchment.BlockBlot {\n  constructor(scroll, domNode) {\n    super(scroll, domNode);\n    this.cache = {};\n  }\n\n  delta() {\n    if (this.cache.delta == null) {\n      this.cache.delta = blockDelta(this);\n    }\n    return this.cache.delta;\n  }\n\n  deleteAt(index, length) {\n    super.deleteAt(index, length);\n    this.cache = {};\n  }\n\n  formatAt(index, length, name, value) {\n    if (length <= 0) return;\n    if (this.scroll.query(name, _parchment.Scope.BLOCK)) {\n      if (index + length === this.length()) {\n        this.format(name, value);\n      }\n    } else {\n      super.formatAt(index, Math.min(length, this.length() - index - 1), name, value);\n    }\n    this.cache = {};\n  }\n\n  insertAt(index, value, def) {\n    if (def != null) {\n      super.insertAt(index, value, def);\n      this.cache = {};\n      return;\n    }\n    if (value.length === 0) return;\n    const lines = value.split('\\n');\n    const text = lines.shift();\n    if (text.length > 0) {\n      if (index < this.length() - 1 || this.children.tail == null) {\n        super.insertAt(Math.min(index, this.length() - 1), text);\n      } else {\n        this.children.tail.insertAt(this.children.tail.length(), text);\n      }\n      this.cache = {};\n    }\n    let block = this;\n    lines.reduce((lineIndex, line) => {\n      block = block.split(lineIndex, true);\n      block.insertAt(0, line);\n      return line.length;\n    }, index + text.length);\n  }\n\n  insertBefore(blot, ref) {\n    const head = this.children.head;\n\n    super.insertBefore(blot, ref);\n    if (head instanceof _break2.default) {\n      head.remove();\n    }\n    this.cache = {};\n  }\n\n  length() {\n    if (this.cache.length == null) {\n      this.cache.length = super.length() + NEWLINE_LENGTH;\n    }\n    return this.cache.length;\n  }\n\n  moveChildren(target, ref) {\n    super.moveChildren(target, ref);\n    this.cache = {};\n  }\n\n  optimize(context) {\n    super.optimize(context);\n    this.cache = {};\n  }\n\n  path(index) {\n    return super.path(index, true);\n  }\n\n  removeChild(child) {\n    super.removeChild(child);\n    this.cache = {};\n  }\n\n  split(index, force = false) {\n    if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {\n      const clone = this.clone();\n      if (index === 0) {\n        this.parent.insertBefore(clone, this);\n        return this;\n      }\n      this.parent.insertBefore(clone, this.next);\n      return clone;\n    }\n    const next = super.split(index, force);\n    this.cache = {};\n    return next;\n  }\n}\nBlock.blotName = 'block';\nBlock.tagName = 'P';\nBlock.defaultChild = _break2.default;\nBlock.allowedChildren = [_break2.default, _inline2.default, _parchment.EmbedBlot, _text2.default];\n\nclass BlockEmbed extends _parchment.EmbedBlot {\n  attach() {\n    super.attach();\n    this.attributes = new _parchment.AttributorStore(this.domNode);\n  }\n\n  delta() {\n    return new _quillDelta2.default().insert(this.value(), (0, _extend2.default)(this.formats(), this.attributes.values()));\n  }\n\n  format(name, value) {\n    const attribute = this.scroll.query(name, _parchment.Scope.BLOCK_ATTRIBUTE);\n    if (attribute != null) {\n      this.attributes.attribute(attribute, value);\n    }\n  }\n\n  formatAt(index, length, name, value) {\n    this.format(name, value);\n  }\n\n  insertAt(index, value, def) {\n    if (typeof value === 'string' && value.endsWith('\\n')) {\n      const block = this.scroll.create(Block.blotName);\n      this.parent.insertBefore(block, index === 0 ? this : this.next);\n      block.insertAt(0, value.slice(0, -1));\n    } else {\n      super.insertAt(index, value, def);\n    }\n  }\n}\nBlockEmbed.scope = _parchment.Scope.BLOCK_BLOT;\n// It is important for cursor behavior BlockEmbeds use tags that are block level elements\n\nfunction blockDelta(blot) {\n  return blot.descendants(_parchment.LeafBlot).reduce((delta, leaf) => {\n    if (leaf.length() === 0) {\n      return delta;\n    }\n    return delta.insert(leaf.value(), bubbleFormats(leaf));\n  }, new _quillDelta2.default()).insert('\\n', bubbleFormats(blot));\n}\n\nfunction bubbleFormats(blot, formats = {}) {\n  if (blot == null) return formats;\n  if (typeof blot.formats === 'function') {\n    formats = (0, _extend2.default)(formats, blot.formats());\n    // exclude syntax highlighting from deltas and getFormat()\n    delete formats['code-token'];\n  }\n  if (blot.parent == null || blot.parent.statics.blotName === 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {\n    return formats;\n  }\n  return bubbleFormats(blot.parent, formats);\n}\n\nexports.blockDelta = blockDelta;\nexports.bubbleFormats = bubbleFormats;\nexports.BlockEmbed = BlockEmbed;\nexports.default = Block;\n\n//# sourceURL=webpack://Quill/./blots/block.js?");

        /***/
      },

      /***/"./blots/break.js":
      /*!************************!*\
        !*** ./blots/break.js ***!
        \************************/
      /*! no static exports found */
      /***/function blotsBreakJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nclass Break extends _parchment.EmbedBlot {\n  static value() {\n    return undefined;\n  }\n\n  optimize() {\n    if (this.prev || this.next) {\n      this.remove();\n    }\n  }\n\n  length() {\n    return 0;\n  }\n\n  value() {\n    return '';\n  }\n}\nBreak.blotName = 'break';\nBreak.tagName = 'BR';\n\nexports.default = Break;\n\n//# sourceURL=webpack://Quill/./blots/break.js?");

        /***/
      },

      /***/"./blots/container.js":
      /*!****************************!*\
        !*** ./blots/container.js ***!
        \****************************/
      /*! no static exports found */
      /***/function blotsContainerJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nclass Container extends _parchment.ContainerBlot {}\n\nexports.default = Container;\n\n//# sourceURL=webpack://Quill/./blots/container.js?");

        /***/
      },

      /***/"./blots/cursor.js":
      /*!*************************!*\
        !*** ./blots/cursor.js ***!
        \*************************/
      /*! no static exports found */
      /***/function blotsCursorJs(module, exports, __webpack_require__) {

        "use strict";

        eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _parchment = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");\n\nvar _text = __webpack_require__(/*! ./text */ "./blots/text.js");\n\nvar _text2 = _interopRequireDefault(_text);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Cursor extends _parchment.EmbedBlot {\n  static value() {\n    return undefined;\n  }\n\n  constructor(scroll, domNode, selection) {\n    super(scroll, domNode);\n    this.selection = selection;\n    this.textNode = document.createTextNode(Cursor.CONTENTS);\n    this.domNode.appendChild(this.textNode);\n    this.savedLength = 0;\n  }\n\n  detach() {\n    // super.detach() will also clear domNode.__blot\n    if (this.parent != null) this.parent.removeChild(this);\n  }\n\n  format(name, value) {\n    if (this.savedLength !== 0) {\n      super.format(name, value);\n      return;\n    }\n    let target = this;\n    let index = 0;\n    while (target != null && target.statics.scope !== _parchment.Scope.BLOCK_BLOT) {\n      index += target.offset(target.parent);\n      target = target.parent;\n    }\n    if (target != null) {\n      this.savedLength = Cursor.CONTENTS.length;\n      target.optimize();\n      target.formatAt(index, Cursor.CONTENTS.length, name, value);\n      this.savedLength = 0;\n    }\n  }\n\n  index(node, offset) {\n    if (node === this.textNode) return 0;\n    return super.index(node, offset);\n  }\n\n  length() {\n    return this.savedLength;\n  }\n\n  position() {\n    return [this.textNode, this.textNode.data.length];\n  }\n\n  remove() {\n    super.remove();\n    this.parent = null;\n  }\n\n  restore() {\n    if (this.selection.composing || this.parent == null) return null;\n    const range = this.selection.getNativeRange();\n    // Link format will insert text outside of anchor tag\n    while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {\n      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);\n    }\n\n    const prevTextBlot = this.prev instanceof _text2.default ? this.prev : null;\n    const prevTextLength = prevTextBlot ? prevTextBlot.length() : 0;\n    const nextTextBlot = this.next instanceof _text2.default ? this.next : null;\n    const nextText = nextTextBlot ? nextTextBlot.text : \'\';\n    const textNode = this.textNode;\n    // take text from inside this blot and reset it\n\n    const newText = textNode.data.split(Cursor.CONTENTS).join(\'\');\n    textNode.data = Cursor.CONTENTS;\n\n    // proactively merge TextBlots around cursor so that optimization\n    // doesn\'t lose the cursor.  the reason we are here in cursor.restore\n    // could be that the user clicked in prevTextBlot or nextTextBlot, or\n    // the user typed something.\n    let mergedTextBlot;\n    if (prevTextBlot) {\n      mergedTextBlot = prevTextBlot;\n      if (newText || nextTextBlot) {\n        prevTextBlot.insertAt(prevTextBlot.length(), newText + nextText);\n        if (nextTextBlot) {\n          nextTextBlot.remove();\n        }\n      }\n    } else if (nextTextBlot) {\n      mergedTextBlot = nextTextBlot;\n      nextTextBlot.insertAt(0, newText);\n    } else {\n      const newTextNode = document.createTextNode(newText);\n      mergedTextBlot = this.scroll.create(newTextNode);\n      this.parent.insertBefore(mergedTextBlot, this);\n    }\n\n    this.remove();\n    if (range) {\n      // calculate selection to restore\n      const remapOffset = (node, offset) => {\n        if (prevTextBlot && node === prevTextBlot.domNode) {\n          return offset;\n        }\n        if (node === textNode) {\n          return prevTextLength + offset - 1;\n        }\n        if (nextTextBlot && node === nextTextBlot.domNode) {\n          return prevTextLength + newText.length + offset;\n        }\n        return null;\n      };\n\n      const start = remapOffset(range.start.node, range.start.offset);\n      const end = remapOffset(range.end.node, range.end.offset);\n      if (start !== null && end !== null) {\n        return {\n          startNode: mergedTextBlot.domNode,\n          startOffset: start,\n          endNode: mergedTextBlot.domNode,\n          endOffset: end\n        };\n      }\n    }\n    return null;\n  }\n\n  update(mutations, context) {\n    if (mutations.some(mutation => {\n      return mutation.type === \'characterData\' && mutation.target === this.textNode;\n    })) {\n      const range = this.restore();\n      if (range) context.range = range;\n    }\n  }\n\n  value() {\n    return \'\';\n  }\n}\nCursor.blotName = \'cursor\';\nCursor.className = \'ql-cursor\';\nCursor.tagName = \'span\';\nCursor.CONTENTS = \'\\uFEFF\'; // Zero width no break space\n\nexports.default = Cursor;\n\n//# sourceURL=webpack://Quill/./blots/cursor.js?');

        /***/
      },

      /***/"./blots/embed.js":
      /*!************************!*\
        !*** ./blots/embed.js ***!
        \************************/
      /*! no static exports found */
      /***/function blotsEmbedJs(module, exports, __webpack_require__) {

        "use strict";

        eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _parchment = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");\n\nvar _text = __webpack_require__(/*! ./text */ "./blots/text.js");\n\nvar _text2 = _interopRequireDefault(_text);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst GUARD_TEXT = \'\\uFEFF\';\n\nclass Embed extends _parchment.EmbedBlot {\n  constructor(scroll, node) {\n    super(scroll, node);\n    this.contentNode = document.createElement(\'span\');\n    this.contentNode.setAttribute(\'contenteditable\', false);\n    Array.from(this.domNode.childNodes).forEach(childNode => {\n      this.contentNode.appendChild(childNode);\n    });\n    this.leftGuard = document.createTextNode(GUARD_TEXT);\n    this.rightGuard = document.createTextNode(GUARD_TEXT);\n    this.domNode.appendChild(this.leftGuard);\n    this.domNode.appendChild(this.contentNode);\n    this.domNode.appendChild(this.rightGuard);\n  }\n\n  index(node, offset) {\n    if (node === this.leftGuard) return 0;\n    if (node === this.rightGuard) return 1;\n    return super.index(node, offset);\n  }\n\n  restore(node) {\n    let range;\n    let textNode;\n    const text = node.data.split(GUARD_TEXT).join(\'\');\n    if (node === this.leftGuard) {\n      if (this.prev instanceof _text2.default) {\n        const prevLength = this.prev.length();\n        this.prev.insertAt(prevLength, text);\n        range = {\n          startNode: this.prev.domNode,\n          startOffset: prevLength + text.length\n        };\n      } else {\n        textNode = document.createTextNode(text);\n        this.parent.insertBefore(this.scroll.create(textNode), this);\n        range = {\n          startNode: textNode,\n          startOffset: text.length\n        };\n      }\n    } else if (node === this.rightGuard) {\n      if (this.next instanceof _text2.default) {\n        this.next.insertAt(0, text);\n        range = {\n          startNode: this.next.domNode,\n          startOffset: text.length\n        };\n      } else {\n        textNode = document.createTextNode(text);\n        this.parent.insertBefore(this.scroll.create(textNode), this.next);\n        range = {\n          startNode: textNode,\n          startOffset: text.length\n        };\n      }\n    }\n    node.data = GUARD_TEXT;\n    return range;\n  }\n\n  update(mutations, context) {\n    mutations.forEach(mutation => {\n      if (mutation.type === \'characterData\' && (mutation.target === this.leftGuard || mutation.target === this.rightGuard)) {\n        const range = this.restore(mutation.target);\n        if (range) context.range = range;\n      }\n    });\n  }\n}\n\nexports.default = Embed;\n\n//# sourceURL=webpack://Quill/./blots/embed.js?');

        /***/
      },

      /***/"./blots/inline.js":
      /*!*************************!*\
        !*** ./blots/inline.js ***!
        \*************************/
      /*! no static exports found */
      /***/function blotsInlineJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nvar _break = __webpack_require__(/*! ./break */ \"./blots/break.js\");\n\nvar _break2 = _interopRequireDefault(_break);\n\nvar _text = __webpack_require__(/*! ./text */ \"./blots/text.js\");\n\nvar _text2 = _interopRequireDefault(_text);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Inline extends _parchment.InlineBlot {\n  static compare(self, other) {\n    const selfIndex = Inline.order.indexOf(self);\n    const otherIndex = Inline.order.indexOf(other);\n    if (selfIndex >= 0 || otherIndex >= 0) {\n      return selfIndex - otherIndex;\n    }\n    if (self === other) {\n      return 0;\n    }\n    if (self < other) {\n      return -1;\n    }\n    return 1;\n  }\n\n  formatAt(index, length, name, value) {\n    if (Inline.compare(this.statics.blotName, name) < 0 && this.scroll.query(name, _parchment.Scope.BLOT)) {\n      const blot = this.isolate(index, length);\n      if (value) {\n        blot.wrap(name, value);\n      }\n    } else {\n      super.formatAt(index, length, name, value);\n    }\n  }\n\n  optimize(context) {\n    super.optimize(context);\n    if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {\n      const parent = this.parent.isolate(this.offset(), this.length());\n      this.moveChildren(parent);\n      parent.wrap(this);\n    }\n  }\n}\nInline.allowedChildren = [Inline, _break2.default, _parchment.EmbedBlot, _text2.default];\n// Lower index means deeper in the DOM tree, since not found (-1) is for embeds\nInline.order = ['cursor', 'inline', // Must be lower\n'underline', 'strike', 'italic', 'bold', 'script', 'link', 'code'];\n\nexports.default = Inline;\n\n//# sourceURL=webpack://Quill/./blots/inline.js?");

        /***/
      },

      /***/"./blots/scroll.js":
      /*!*************************!*\
        !*** ./blots/scroll.js ***!
        \*************************/
      /*! no static exports found */
      /***/function blotsScrollJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nvar _emitter = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n\nvar _emitter2 = _interopRequireDefault(_emitter);\n\nvar _block = __webpack_require__(/*! ./block */ \"./blots/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _break = __webpack_require__(/*! ./break */ \"./blots/break.js\");\n\nvar _break2 = _interopRequireDefault(_break);\n\nvar _container = __webpack_require__(/*! ./container */ \"./blots/container.js\");\n\nvar _container2 = _interopRequireDefault(_container);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction isLine(blot) {\n  return blot instanceof _block2.default || blot instanceof _block.BlockEmbed;\n}\n\nclass Scroll extends _parchment.ScrollBlot {\n  constructor(registry, domNode, { emitter }) {\n    super(registry, domNode);\n    this.emitter = emitter;\n    this.batch = false;\n    this.optimize();\n    this.enable();\n  }\n\n  batchStart() {\n    if (!Array.isArray(this.batch)) {\n      this.batch = [];\n    }\n  }\n\n  batchEnd() {\n    const mutations = this.batch;\n    this.batch = false;\n    this.update(mutations);\n  }\n\n  emitMount(blot) {\n    this.emitter.emit(_emitter2.default.events.SCROLL_BLOT_MOUNT, blot);\n  }\n\n  emitUnmount(blot) {\n    this.emitter.emit(_emitter2.default.events.SCROLL_BLOT_UNMOUNT, blot);\n  }\n\n  deleteAt(index, length) {\n    var _line = this.line(index),\n        _line2 = _slicedToArray(_line, 2);\n\n    const first = _line2[0],\n          offset = _line2[1];\n\n    var _line3 = this.line(index + length),\n        _line4 = _slicedToArray(_line3, 1);\n\n    const last = _line4[0];\n\n    super.deleteAt(index, length);\n    if (last != null && first !== last && offset > 0) {\n      if (first instanceof _block.BlockEmbed || last instanceof _block.BlockEmbed) {\n        this.optimize();\n        return;\n      }\n      const ref = last.children.head instanceof _break2.default ? null : last.children.head;\n      first.moveChildren(last, ref);\n      first.remove();\n    }\n    this.optimize();\n  }\n\n  enable(enabled = true) {\n    this.domNode.setAttribute('contenteditable', enabled);\n  }\n\n  formatAt(index, length, format, value) {\n    super.formatAt(index, length, format, value);\n    this.optimize();\n  }\n\n  insertAt(index, value, def) {\n    if (index >= this.length()) {\n      if (def == null || this.scroll.query(value, _parchment.Scope.BLOCK) == null) {\n        const blot = this.scroll.create(this.statics.defaultChild.blotName);\n        this.appendChild(blot);\n        if (def == null && value.endsWith('\\n')) {\n          blot.insertAt(0, value.slice(0, -1), def);\n        } else {\n          blot.insertAt(0, value, def);\n        }\n      } else {\n        const embed = this.scroll.create(value, def);\n        this.appendChild(embed);\n      }\n    } else {\n      super.insertAt(index, value, def);\n    }\n    this.optimize();\n  }\n\n  insertBefore(blot, ref) {\n    if (blot.statics.scope === _parchment.Scope.INLINE_BLOT) {\n      const wrapper = this.scroll.create(this.statics.defaultChild.blotName);\n      wrapper.appendChild(blot);\n      super.insertBefore(wrapper, ref);\n    } else {\n      super.insertBefore(blot, ref);\n    }\n  }\n\n  isEnabled() {\n    return this.domNode.getAttribute('contenteditable') === 'true';\n  }\n\n  leaf(index) {\n    return this.path(index).pop() || [null, -1];\n  }\n\n  line(index) {\n    if (index === this.length()) {\n      return this.line(index - 1);\n    }\n    return this.descendant(isLine, index);\n  }\n\n  lines(index = 0, length = Number.MAX_VALUE) {\n    const getLines = (blot, blotIndex, blotLength) => {\n      let lines = [];\n      let lengthLeft = blotLength;\n      blot.children.forEachAt(blotIndex, blotLength, (child, childIndex, childLength) => {\n        if (isLine(child)) {\n          lines.push(child);\n        } else if (child instanceof _parchment.ContainerBlot) {\n          lines = lines.concat(getLines(child, childIndex, lengthLeft));\n        }\n        lengthLeft -= childLength;\n      });\n      return lines;\n    };\n    return getLines(this, index, length);\n  }\n\n  optimize(mutations = [], context = {}) {\n    if (this.batch) return;\n    super.optimize(mutations, context);\n    if (mutations.length > 0) {\n      this.emitter.emit(_emitter2.default.events.SCROLL_OPTIMIZE, mutations, context);\n    }\n  }\n\n  path(index) {\n    return super.path(index).slice(1); // Exclude self\n  }\n\n  remove() {\n    // Never remove self\n  }\n\n  update(mutations) {\n    if (this.batch) {\n      if (Array.isArray(mutations)) {\n        this.batch = this.batch.concat(mutations);\n      }\n      return;\n    }\n    let source = _emitter2.default.sources.USER;\n    if (typeof mutations === 'string') {\n      source = mutations;\n    }\n    if (!Array.isArray(mutations)) {\n      mutations = this.observer.takeRecords();\n    }\n    if (mutations.length > 0) {\n      this.emitter.emit(_emitter2.default.events.SCROLL_BEFORE_UPDATE, source, mutations);\n    }\n    super.update(mutations.concat([])); // pass copy\n    if (mutations.length > 0) {\n      this.emitter.emit(_emitter2.default.events.SCROLL_UPDATE, source, mutations);\n    }\n  }\n}\nScroll.blotName = 'scroll';\nScroll.className = 'ql-editor';\nScroll.tagName = 'DIV';\nScroll.defaultChild = _block2.default;\nScroll.allowedChildren = [_block2.default, _block.BlockEmbed, _container2.default];\n\nexports.default = Scroll;\n\n//# sourceURL=webpack://Quill/./blots/scroll.js?");

        /***/
      },

      /***/"./blots/text.js":
      /*!***********************!*\
        !*** ./blots/text.js ***!
        \***********************/
      /*! no static exports found */
      /***/function blotsTextJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.escapeText = exports.default = undefined;\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nclass Text extends _parchment.TextBlot {}\n\nfunction escapeText(text) {\n  return text.replace(/[&<>\"']/g, s => {\n    // https://lodash.com/docs#escape\n    const entityMap = {\n      '&': '&amp;',\n      '<': '&lt;',\n      '>': '&gt;',\n      '\"': '&quot;',\n      \"'\": '&#39;'\n    };\n    return entityMap[s];\n  });\n}\n\nexports.default = Text;\nexports.escapeText = escapeText;\n\n//# sourceURL=webpack://Quill/./blots/text.js?");

        /***/
      },

      /***/"./core.js":
      /*!*****************!*\
        !*** ./core.js ***!
        \*****************/
      /*! no static exports found */
      /***/function coreJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _quill = __webpack_require__(/*! ./core/quill */ \"./core/quill.js\");\n\nvar _quill2 = _interopRequireDefault(_quill);\n\nvar _block = __webpack_require__(/*! ./blots/block */ \"./blots/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _break = __webpack_require__(/*! ./blots/break */ \"./blots/break.js\");\n\nvar _break2 = _interopRequireDefault(_break);\n\nvar _container = __webpack_require__(/*! ./blots/container */ \"./blots/container.js\");\n\nvar _container2 = _interopRequireDefault(_container);\n\nvar _cursor = __webpack_require__(/*! ./blots/cursor */ \"./blots/cursor.js\");\n\nvar _cursor2 = _interopRequireDefault(_cursor);\n\nvar _embed = __webpack_require__(/*! ./blots/embed */ \"./blots/embed.js\");\n\nvar _embed2 = _interopRequireDefault(_embed);\n\nvar _inline = __webpack_require__(/*! ./blots/inline */ \"./blots/inline.js\");\n\nvar _inline2 = _interopRequireDefault(_inline);\n\nvar _scroll = __webpack_require__(/*! ./blots/scroll */ \"./blots/scroll.js\");\n\nvar _scroll2 = _interopRequireDefault(_scroll);\n\nvar _text = __webpack_require__(/*! ./blots/text */ \"./blots/text.js\");\n\nvar _text2 = _interopRequireDefault(_text);\n\nvar _clipboard = __webpack_require__(/*! ./modules/clipboard */ \"./modules/clipboard.js\");\n\nvar _clipboard2 = _interopRequireDefault(_clipboard);\n\nvar _history = __webpack_require__(/*! ./modules/history */ \"./modules/history.js\");\n\nvar _history2 = _interopRequireDefault(_history);\n\nvar _keyboard = __webpack_require__(/*! ./modules/keyboard */ \"./modules/keyboard.js\");\n\nvar _keyboard2 = _interopRequireDefault(_keyboard);\n\nvar _uploader = __webpack_require__(/*! ./modules/uploader */ \"./modules/uploader.js\");\n\nvar _uploader2 = _interopRequireDefault(_uploader);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_quill2.default.register({\n  'blots/block': _block2.default,\n  'blots/block/embed': _block.BlockEmbed,\n  'blots/break': _break2.default,\n  'blots/container': _container2.default,\n  'blots/cursor': _cursor2.default,\n  'blots/embed': _embed2.default,\n  'blots/inline': _inline2.default,\n  'blots/scroll': _scroll2.default,\n  'blots/text': _text2.default,\n\n  'modules/clipboard': _clipboard2.default,\n  'modules/history': _history2.default,\n  'modules/keyboard': _keyboard2.default,\n  'modules/uploader': _uploader2.default\n});\n\nexports.default = _quill2.default;\n\n//# sourceURL=webpack://Quill/./core.js?");

        /***/
      },

      /***/"./core/editor.js":
      /*!************************!*\
        !*** ./core/editor.js ***!
        \************************/
      /*! no static exports found */
      /***/function coreEditorJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _clone = __webpack_require__(/*! clone */ \"./node_modules/clone/clone.js\");\n\nvar _clone2 = _interopRequireDefault(_clone);\n\nvar _deepEqual = __webpack_require__(/*! deep-equal */ \"./node_modules/deep-equal/index.js\");\n\nvar _deepEqual2 = _interopRequireDefault(_deepEqual);\n\nvar _extend = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n\nvar _extend2 = _interopRequireDefault(_extend);\n\nvar _quillDelta = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n\nvar _quillDelta2 = _interopRequireDefault(_quillDelta);\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nvar _selection = __webpack_require__(/*! ./selection */ \"./core/selection.js\");\n\nvar _cursor = __webpack_require__(/*! ../blots/cursor */ \"./blots/cursor.js\");\n\nvar _cursor2 = _interopRequireDefault(_cursor);\n\nvar _block = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _break = __webpack_require__(/*! ../blots/break */ \"./blots/break.js\");\n\nvar _break2 = _interopRequireDefault(_break);\n\nvar _text = __webpack_require__(/*! ../blots/text */ \"./blots/text.js\");\n\nvar _text2 = _interopRequireDefault(_text);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }\n\nconst ASCII = /^[ -~]*$/;\n\nclass Editor {\n  constructor(scroll) {\n    this.scroll = scroll;\n    this.delta = this.getDelta();\n  }\n\n  applyDelta(delta) {\n    let consumeNextNewline = false;\n    this.scroll.update();\n    let scrollLength = this.scroll.length();\n    this.scroll.batchStart();\n    const normalizedDelta = normalizeDelta(delta);\n    normalizedDelta.reduce((index, op) => {\n      const length = op.retain || op.delete || op.insert.length || 1;\n      let attributes = op.attributes || {};\n      if (op.insert != null) {\n        if (typeof op.insert === 'string') {\n          let text = op.insert;\n          if (text.endsWith('\\n') && consumeNextNewline) {\n            consumeNextNewline = false;\n            text = text.slice(0, -1);\n          }\n          if ((index >= scrollLength || this.scroll.descendant(_block.BlockEmbed, index)[0]) && !text.endsWith('\\n')) {\n            consumeNextNewline = true;\n          }\n          this.scroll.insertAt(index, text);\n\n          var _scroll$line = this.scroll.line(index),\n              _scroll$line2 = _slicedToArray(_scroll$line, 2);\n\n          const line = _scroll$line2[0],\n                offset = _scroll$line2[1];\n\n          let formats = (0, _extend2.default)({}, (0, _block.bubbleFormats)(line));\n          if (line instanceof _block2.default) {\n            var _line$descendant = line.descendant(_parchment.LeafBlot, offset),\n                _line$descendant2 = _slicedToArray(_line$descendant, 1);\n\n            const leaf = _line$descendant2[0];\n\n            formats = (0, _extend2.default)(formats, (0, _block.bubbleFormats)(leaf));\n          }\n          attributes = _quillDelta.AttributeMap.diff(formats, attributes) || {};\n        } else if (typeof op.insert === 'object') {\n          const key = Object.keys(op.insert)[0]; // There should only be one key\n          if (key == null) return index;\n          this.scroll.insertAt(index, key, op.insert[key]);\n        }\n        scrollLength += length;\n      }\n      Object.keys(attributes).forEach(name => {\n        this.scroll.formatAt(index, length, name, attributes[name]);\n      });\n      return index + length;\n    }, 0);\n    normalizedDelta.reduce((index, op) => {\n      if (typeof op.delete === 'number') {\n        this.scroll.deleteAt(index, op.delete);\n        return index;\n      }\n      return index + (op.retain || op.insert.length || 1);\n    }, 0);\n    this.scroll.batchEnd();\n    this.scroll.optimize();\n    return this.update(normalizedDelta);\n  }\n\n  deleteText(index, length) {\n    this.scroll.deleteAt(index, length);\n    return this.update(new _quillDelta2.default().retain(index).delete(length));\n  }\n\n  formatLine(index, length, formats = {}) {\n    this.scroll.update();\n    Object.keys(formats).forEach(format => {\n      this.scroll.lines(index, Math.max(length, 1)).forEach(line => {\n        line.format(format, formats[format]);\n      });\n    });\n    this.scroll.optimize();\n    const delta = new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats));\n    return this.update(delta);\n  }\n\n  formatText(index, length, formats = {}) {\n    Object.keys(formats).forEach(format => {\n      this.scroll.formatAt(index, length, format, formats[format]);\n    });\n    const delta = new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats));\n    return this.update(delta);\n  }\n\n  getContents(index, length) {\n    return this.delta.slice(index, index + length);\n  }\n\n  getDelta() {\n    return this.scroll.lines().reduce((delta, line) => {\n      return delta.concat(line.delta());\n    }, new _quillDelta2.default());\n  }\n\n  getFormat(index, length = 0) {\n    let lines = [];\n    let leaves = [];\n    if (length === 0) {\n      this.scroll.path(index).forEach(path => {\n        var _path = _slicedToArray(path, 1);\n\n        const blot = _path[0];\n\n        if (blot instanceof _block2.default) {\n          lines.push(blot);\n        } else if (blot instanceof _parchment.LeafBlot) {\n          leaves.push(blot);\n        }\n      });\n    } else {\n      lines = this.scroll.lines(index, length);\n      leaves = this.scroll.descendants(_parchment.LeafBlot, index, length);\n    }\n    const formatsArr = [lines, leaves].map(blots => {\n      if (blots.length === 0) return {};\n      let formats = (0, _block.bubbleFormats)(blots.shift());\n      while (Object.keys(formats).length > 0) {\n        const blot = blots.shift();\n        if (blot == null) return formats;\n        formats = combineFormats((0, _block.bubbleFormats)(blot), formats);\n      }\n      return formats;\n    });\n    return _extend2.default.apply(_extend2.default, formatsArr);\n  }\n\n  getHTML(index, length) {\n    var _scroll$line3 = this.scroll.line(index),\n        _scroll$line4 = _slicedToArray(_scroll$line3, 2);\n\n    const line = _scroll$line4[0],\n          lineOffset = _scroll$line4[1];\n\n    if (line.length() >= lineOffset + length) {\n      return convertHTML(line, lineOffset, length, true);\n    }\n    return convertHTML(this.scroll, index, length, true);\n  }\n\n  getText(index, length) {\n    return this.getContents(index, length).filter(op => typeof op.insert === 'string').map(op => op.insert).join('');\n  }\n\n  insertEmbed(index, embed, value) {\n    this.scroll.insertAt(index, embed, value);\n    return this.update(new _quillDelta2.default().retain(index).insert({ [embed]: value }));\n  }\n\n  insertText(index, text, formats = {}) {\n    text = text.replace(/\\r\\n/g, '\\n').replace(/\\r/g, '\\n');\n    this.scroll.insertAt(index, text);\n    Object.keys(formats).forEach(format => {\n      this.scroll.formatAt(index, text.length, format, formats[format]);\n    });\n    return this.update(new _quillDelta2.default().retain(index).insert(text, (0, _clone2.default)(formats)));\n  }\n\n  isBlank() {\n    if (this.scroll.children.length === 0) return true;\n    if (this.scroll.children.length > 1) return false;\n    const block = this.scroll.children.head;\n    if (block.statics.blotName !== _block2.default.blotName) return false;\n    if (block.children.length > 1) return false;\n    return block.children.head instanceof _break2.default;\n  }\n\n  removeFormat(index, length) {\n    const text = this.getText(index, length);\n\n    var _scroll$line5 = this.scroll.line(index + length),\n        _scroll$line6 = _slicedToArray(_scroll$line5, 2);\n\n    const line = _scroll$line6[0],\n          offset = _scroll$line6[1];\n\n    let suffixLength = 0;\n    let suffix = new _quillDelta2.default();\n    if (line != null) {\n      suffixLength = line.length() - offset;\n      suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\\n');\n    }\n    const contents = this.getContents(index, length + suffixLength);\n    const diff = contents.diff(new _quillDelta2.default().insert(text).concat(suffix));\n    const delta = new _quillDelta2.default().retain(index).concat(diff);\n    return this.applyDelta(delta);\n  }\n\n  update(change, mutations = [], selectionInfo = undefined) {\n    const oldDelta = this.delta;\n    if (mutations.length === 1 && mutations[0].type === 'characterData' && mutations[0].target.data.match(ASCII) && this.scroll.find(mutations[0].target)) {\n      // Optimization for character changes\n      const textBlot = this.scroll.find(mutations[0].target);\n      const formats = (0, _block.bubbleFormats)(textBlot);\n      const index = textBlot.offset(this.scroll);\n      const oldValue = mutations[0].oldValue.replace(_cursor2.default.CONTENTS, '');\n      const oldText = new _quillDelta2.default().insert(oldValue);\n      const newText = new _quillDelta2.default().insert(textBlot.value());\n      const relativeSelectionInfo = selectionInfo && {\n        oldRange: shiftRange(selectionInfo.oldRange, -index),\n        newRange: shiftRange(selectionInfo.newRange, -index)\n      };\n      const diffDelta = new _quillDelta2.default().retain(index).concat(oldText.diff(newText, relativeSelectionInfo));\n      change = diffDelta.reduce((delta, op) => {\n        if (op.insert) {\n          return delta.insert(op.insert, formats);\n        }\n        return delta.push(op);\n      }, new _quillDelta2.default());\n      this.delta = oldDelta.compose(change);\n    } else {\n      this.delta = this.getDelta();\n      if (!change || !(0, _deepEqual2.default)(oldDelta.compose(change), this.delta)) {\n        change = oldDelta.diff(this.delta, selectionInfo);\n      }\n    }\n    return change;\n  }\n}\n\nfunction convertListHTML(items, lastIndent, types) {\n  if (items.length === 0) {\n    var _getListType = getListType(types.pop()),\n        _getListType2 = _slicedToArray(_getListType, 1);\n\n    const endTag = _getListType2[0];\n\n    if (lastIndent <= 0) {\n      return `</li></${endTag}>`;\n    }\n    return `</li></${endTag}>${convertListHTML([], lastIndent - 1, types)}`;\n  }\n\n  var _items = _toArray(items),\n      _items$ = _items[0];\n\n  const child = _items$.child,\n        offset = _items$.offset,\n        length = _items$.length,\n        indent = _items$.indent,\n        type = _items$.type,\n        rest = _items.slice(1);\n\n  var _getListType3 = getListType(type),\n      _getListType4 = _slicedToArray(_getListType3, 2);\n\n  const tag = _getListType4[0],\n        attribute = _getListType4[1];\n\n  if (indent > lastIndent) {\n    types.push(type);\n    return `<${tag}><li${attribute}>${convertHTML(child, offset, length)}${convertListHTML(rest, indent, types)}`;\n  }\n  if (indent === lastIndent) {\n    return `</li><li${attribute}>${convertHTML(child, offset, length)}${convertListHTML(rest, indent, types)}`;\n  }\n\n  var _getListType5 = getListType(types.pop()),\n      _getListType6 = _slicedToArray(_getListType5, 1);\n\n  const endTag = _getListType6[0];\n\n  return `</li></${endTag}>${convertListHTML(items, lastIndent - 1, types)}`;\n}\n\nfunction convertHTML(blot, index, length, isRoot = false) {\n  if (typeof blot.html === 'function') {\n    return blot.html(index, length);\n  }\n  if (blot instanceof _text2.default) {\n    return (0, _text.escapeText)(blot.value().slice(index, index + length));\n  }\n  if (blot.children) {\n    // TODO fix API\n    if (blot.statics.blotName === 'list-container') {\n      const items = [];\n      blot.children.forEachAt(index, length, (child, offset, childLength) => {\n        const formats = child.formats();\n        items.push({\n          child,\n          offset,\n          length: childLength,\n          indent: formats.indent || 0,\n          type: formats.list\n        });\n      });\n      return convertListHTML(items, -1, []);\n    }\n    const parts = [];\n    blot.children.forEachAt(index, length, (child, offset, childLength) => {\n      parts.push(convertHTML(child, offset, childLength));\n    });\n    if (isRoot || blot.statics.blotName === 'list') {\n      return parts.join('');\n    }\n    var _blot$domNode = blot.domNode;\n    const outerHTML = _blot$domNode.outerHTML,\n          innerHTML = _blot$domNode.innerHTML;\n\n    var _outerHTML$split = outerHTML.split(`>${innerHTML}<`),\n        _outerHTML$split2 = _slicedToArray(_outerHTML$split, 2);\n\n    const start = _outerHTML$split2[0],\n          end = _outerHTML$split2[1];\n    // TODO cleanup\n\n    if (start === '<table') {\n      return `<table style=\"border: 1px solid #000;\">${parts.join('')}<${end}`;\n    }\n    return `${start}>${parts.join('')}<${end}`;\n  }\n  return blot.domNode.outerHTML;\n}\n\nfunction combineFormats(formats, combined) {\n  return Object.keys(combined).reduce((merged, name) => {\n    if (formats[name] == null) return merged;\n    if (combined[name] === formats[name]) {\n      merged[name] = combined[name];\n    } else if (Array.isArray(combined[name])) {\n      if (combined[name].indexOf(formats[name]) < 0) {\n        merged[name] = combined[name].concat([formats[name]]);\n      }\n    } else {\n      merged[name] = [combined[name], formats[name]];\n    }\n    return merged;\n  }, {});\n}\n\nfunction getListType(type) {\n  const tag = type === 'ordered' ? 'ol' : 'ul';\n  switch (type) {\n    case 'checked':\n      return [tag, ' data-list=\"checked\"'];\n    case 'unchecked':\n      return [tag, ' data-list=\"unchecked\"'];\n    default:\n      return [tag, ''];\n  }\n}\n\nfunction normalizeDelta(delta) {\n  return delta.reduce((normalizedDelta, op) => {\n    if (typeof op.insert === 'string') {\n      const text = op.insert.replace(/\\r\\n/g, '\\n').replace(/\\r/g, '\\n');\n      return normalizedDelta.insert(text, op.attributes);\n    }\n    return normalizedDelta.push(op);\n  }, new _quillDelta2.default());\n}\n\nfunction shiftRange({ index, length }, amount) {\n  return new _selection.Range(index + amount, length);\n}\n\nexports.default = Editor;\n\n//# sourceURL=webpack://Quill/./core/editor.js?");

        /***/
      },

      /***/"./core/emitter.js":
      /*!*************************!*\
        !*** ./core/emitter.js ***!
        \*************************/
      /*! no static exports found */
      /***/function coreEmitterJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _eventemitter = __webpack_require__(/*! eventemitter3 */ \"./node_modules/eventemitter3/index.js\");\n\nvar _eventemitter2 = _interopRequireDefault(_eventemitter);\n\nvar _instances = __webpack_require__(/*! ./instances */ \"./core/instances.js\");\n\nvar _instances2 = _interopRequireDefault(_instances);\n\nvar _logger = __webpack_require__(/*! ./logger */ \"./core/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst debug = (0, _logger2.default)('quill:events');\nconst EVENTS = ['selectionchange', 'mousedown', 'mouseup', 'click'];\n\nEVENTS.forEach(eventName => {\n  document.addEventListener(eventName, (...args) => {\n    Array.from(document.querySelectorAll('.ql-container')).forEach(node => {\n      const quill = _instances2.default.get(node);\n      if (quill && quill.emitter) {\n        quill.emitter.handleDOM(...args);\n      }\n    });\n  });\n});\n\nclass Emitter extends _eventemitter2.default {\n  constructor() {\n    super();\n    this.listeners = {};\n    this.on('error', debug.error);\n  }\n\n  emit(...args) {\n    debug.log.call(debug, ...args);\n    super.emit(...args);\n  }\n\n  handleDOM(event, ...args) {\n    (this.listeners[event.type] || []).forEach(({ node, handler }) => {\n      if (event.target === node || node.contains(event.target)) {\n        handler(event, ...args);\n      }\n    });\n  }\n\n  listenDOM(eventName, node, handler) {\n    if (!this.listeners[eventName]) {\n      this.listeners[eventName] = [];\n    }\n    this.listeners[eventName].push({ node, handler });\n  }\n}\n\nEmitter.events = {\n  EDITOR_CHANGE: 'editor-change',\n  SCROLL_BEFORE_UPDATE: 'scroll-before-update',\n  SCROLL_BLOT_MOUNT: 'scroll-blot-mount',\n  SCROLL_BLOT_UNMOUNT: 'scroll-blot-unmount',\n  SCROLL_OPTIMIZE: 'scroll-optimize',\n  SCROLL_UPDATE: 'scroll-update',\n  SELECTION_CHANGE: 'selection-change',\n  TEXT_CHANGE: 'text-change'\n};\nEmitter.sources = {\n  API: 'api',\n  SILENT: 'silent',\n  USER: 'user'\n};\n\nexports.default = Emitter;\n\n//# sourceURL=webpack://Quill/./core/emitter.js?");

        /***/
      },

      /***/"./core/instances.js":
      /*!***************************!*\
        !*** ./core/instances.js ***!
        \***************************/
      /*! no static exports found */
      /***/function coreInstancesJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = new WeakMap();\n\n//# sourceURL=webpack://Quill/./core/instances.js?");

        /***/
      },

      /***/"./core/logger.js":
      /*!************************!*\
        !*** ./core/logger.js ***!
        \************************/
      /*! no static exports found */
      /***/function coreLoggerJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst levels = ['error', 'warn', 'log', 'info'];\nlet level = 'warn';\n\nfunction debug(method, ...args) {\n  if (levels.indexOf(method) <= levels.indexOf(level)) {\n    console[method](...args); // eslint-disable-line no-console\n  }\n}\n\nfunction namespace(ns) {\n  return levels.reduce((logger, method) => {\n    logger[method] = debug.bind(console, method, ns);\n    return logger;\n  }, {});\n}\n\nnamespace.level = newLevel => {\n  level = newLevel;\n};\ndebug.level = namespace.level;\n\nexports.default = namespace;\n\n//# sourceURL=webpack://Quill/./core/logger.js?");

        /***/
      },

      /***/"./core/module.js":
      /*!************************!*\
        !*** ./core/module.js ***!
        \************************/
      /*! no static exports found */
      /***/function coreModuleJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nclass Module {\n  constructor(quill, options = {}) {\n    this.quill = quill;\n    this.options = options;\n  }\n}\nModule.DEFAULTS = {};\n\nexports.default = Module;\n\n//# sourceURL=webpack://Quill/./core/module.js?");

        /***/
      },

      /***/"./core/quill.js":
      /*!***********************!*\
        !*** ./core/quill.js ***!
        \***********************/
      /*! no static exports found */
      /***/function coreQuillJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.overload = exports.expandConfig = exports.globalRegistry = undefined;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _quillDelta = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n\nvar _quillDelta2 = _interopRequireDefault(_quillDelta);\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nvar Parchment = _interopRequireWildcard(_parchment);\n\nvar _extend = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n\nvar _extend2 = _interopRequireDefault(_extend);\n\nvar _editor = __webpack_require__(/*! ./editor */ \"./core/editor.js\");\n\nvar _editor2 = _interopRequireDefault(_editor);\n\nvar _emitter = __webpack_require__(/*! ./emitter */ \"./core/emitter.js\");\n\nvar _emitter2 = _interopRequireDefault(_emitter);\n\nvar _module = __webpack_require__(/*! ./module */ \"./core/module.js\");\n\nvar _module2 = _interopRequireDefault(_module);\n\nvar _selection = __webpack_require__(/*! ./selection */ \"./core/selection.js\");\n\nvar _selection2 = _interopRequireDefault(_selection);\n\nvar _instances = __webpack_require__(/*! ./instances */ \"./core/instances.js\");\n\nvar _instances2 = _interopRequireDefault(_instances);\n\nvar _logger = __webpack_require__(/*! ./logger */ \"./core/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nvar _theme = __webpack_require__(/*! ./theme */ \"./core/theme.js\");\n\nvar _theme2 = _interopRequireDefault(_theme);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst debug = (0, _logger2.default)('quill');\n\nconst globalRegistry = new Parchment.Registry();\nParchment.ParentBlot.uiClass = 'ql-ui';\n\nclass Quill {\n  static debug(limit) {\n    if (limit === true) {\n      limit = 'log';\n    }\n    _logger2.default.level(limit);\n  }\n\n  static find(node) {\n    return _instances2.default.get(node) || globalRegistry.find(node);\n  }\n\n  static import(name) {\n    if (this.imports[name] == null) {\n      debug.error(`Cannot import ${name}. Are you sure it was registered?`);\n    }\n    return this.imports[name];\n  }\n\n  static register(path, target, overwrite = false) {\n    if (typeof path !== 'string') {\n      const name = path.attrName || path.blotName;\n      if (typeof name === 'string') {\n        // register(Blot | Attributor, overwrite)\n        this.register(`formats/${name}`, path, target);\n      } else {\n        Object.keys(path).forEach(key => {\n          this.register(key, path[key], target);\n        });\n      }\n    } else {\n      if (this.imports[path] != null && !overwrite) {\n        debug.warn(`Overwriting ${path} with`, target);\n      }\n      this.imports[path] = target;\n      if ((path.startsWith('blots/') || path.startsWith('formats/')) && target.blotName !== 'abstract') {\n        globalRegistry.register(target);\n      }\n      if (typeof target.register === 'function') {\n        target.register(globalRegistry);\n      }\n    }\n  }\n\n  constructor(container, options = {}) {\n    this.options = expandConfig(container, options);\n    this.container = this.options.container;\n    if (this.container == null) {\n      return debug.error('Invalid Quill container', container);\n    }\n    if (this.options.debug) {\n      Quill.debug(this.options.debug);\n    }\n    const html = this.container.innerHTML.trim();\n    this.container.classList.add('ql-container');\n    this.container.innerHTML = '';\n    _instances2.default.set(this.container, this);\n    this.root = this.addContainer('ql-editor');\n    this.root.addEventListener('dragstart', e => {\n      e.preventDefault();\n    });\n    this.root.classList.add('ql-blank');\n    this.root.setAttribute('data-gramm', false);\n    this.scrollingContainer = this.options.scrollingContainer || this.root;\n    this.emitter = new _emitter2.default();\n    const ScrollBlot = this.options.registry.query(Parchment.ScrollBlot.blotName);\n    this.scroll = new ScrollBlot(this.options.registry, this.root, {\n      emitter: this.emitter\n    });\n    this.editor = new _editor2.default(this.scroll);\n    this.selection = new _selection2.default(this.scroll, this.emitter);\n    this.theme = new this.options.theme(this, this.options); // eslint-disable-line new-cap\n    this.keyboard = this.theme.addModule('keyboard');\n    this.clipboard = this.theme.addModule('clipboard');\n    this.history = this.theme.addModule('history');\n    this.uploader = this.theme.addModule('uploader');\n    this.theme.init();\n    this.emitter.on(_emitter2.default.events.EDITOR_CHANGE, type => {\n      if (type === _emitter2.default.events.TEXT_CHANGE) {\n        this.root.classList.toggle('ql-blank', this.editor.isBlank());\n      }\n    });\n    this.emitter.on(_emitter2.default.events.SCROLL_UPDATE, (source, mutations) => {\n      const oldRange = this.selection.lastRange;\n\n      var _selection$getRange = this.selection.getRange(),\n          _selection$getRange2 = _slicedToArray(_selection$getRange, 1);\n\n      const newRange = _selection$getRange2[0];\n\n      const selectionInfo = oldRange && newRange ? { oldRange, newRange } : undefined;\n      modify.call(this, () => this.editor.update(null, mutations, selectionInfo), source);\n    });\n    const contents = this.clipboard.convert({\n      html: `${html}<p><br></p>`,\n      text: '\\n'\n    });\n    this.setContents(contents);\n    this.history.clear();\n    if (this.options.placeholder) {\n      this.root.setAttribute('data-placeholder', this.options.placeholder);\n    }\n    if (this.options.readOnly) {\n      this.disable();\n    }\n    this.allowReadOnlyEdits = false;\n  }\n\n  addContainer(container, refNode = null) {\n    if (typeof container === 'string') {\n      const className = container;\n      container = document.createElement('div');\n      container.classList.add(className);\n    }\n    this.container.insertBefore(container, refNode);\n    return container;\n  }\n\n  blur() {\n    this.selection.setRange(null);\n  }\n\n  deleteText(index, length, source) {\n    var _overload = overload(index, length, source);\n\n    var _overload2 = _slicedToArray(_overload, 4);\n\n    index = _overload2[0];\n    length = _overload2[1];\n    source = _overload2[3];\n\n    return modify.call(this, () => {\n      return this.editor.deleteText(index, length);\n    }, source, index, -1 * length);\n  }\n\n  disable() {\n    this.enable(false);\n  }\n\n  editReadOnly(modifier) {\n    this.allowReadOnlyEdits = true;\n    const value = modifier();\n    this.allowReadOnlyEdits = false;\n    return value;\n  }\n\n  enable(enabled = true) {\n    this.scroll.enable(enabled);\n    this.container.classList.toggle('ql-disabled', !enabled);\n  }\n\n  focus() {\n    const scrollTop = this.scrollingContainer.scrollTop;\n\n    this.selection.focus();\n    this.scrollingContainer.scrollTop = scrollTop;\n    this.scrollIntoView();\n  }\n\n  format(name, value, source = _emitter2.default.sources.API) {\n    return modify.call(this, () => {\n      const range = this.getSelection(true);\n      let change = new _quillDelta2.default();\n      if (range == null) return change;\n      if (this.scroll.query(name, Parchment.Scope.BLOCK)) {\n        change = this.editor.formatLine(range.index, range.length, {\n          [name]: value\n        });\n      } else if (range.length === 0) {\n        this.selection.format(name, value);\n        return change;\n      } else {\n        change = this.editor.formatText(range.index, range.length, {\n          [name]: value\n        });\n      }\n      this.setSelection(range, _emitter2.default.sources.SILENT);\n      return change;\n    }, source);\n  }\n\n  formatLine(index, length, name, value, source) {\n    let formats;\n    // eslint-disable-next-line prefer-const\n\n    var _overload3 = overload(index, length, name, value, source);\n\n    var _overload4 = _slicedToArray(_overload3, 4);\n\n    index = _overload4[0];\n    length = _overload4[1];\n    formats = _overload4[2];\n    source = _overload4[3];\n\n    return modify.call(this, () => {\n      return this.editor.formatLine(index, length, formats);\n    }, source, index, 0);\n  }\n\n  formatText(index, length, name, value, source) {\n    let formats;\n    // eslint-disable-next-line prefer-const\n\n    var _overload5 = overload(index, length, name, value, source);\n\n    var _overload6 = _slicedToArray(_overload5, 4);\n\n    index = _overload6[0];\n    length = _overload6[1];\n    formats = _overload6[2];\n    source = _overload6[3];\n\n    return modify.call(this, () => {\n      return this.editor.formatText(index, length, formats);\n    }, source, index, 0);\n  }\n\n  getBounds(index, length = 0) {\n    let bounds;\n    if (typeof index === 'number') {\n      bounds = this.selection.getBounds(index, length);\n    } else {\n      bounds = this.selection.getBounds(index.index, index.length);\n    }\n    const containerBounds = this.container.getBoundingClientRect();\n    return {\n      bottom: bounds.bottom - containerBounds.top,\n      height: bounds.height,\n      left: bounds.left - containerBounds.left,\n      right: bounds.right - containerBounds.left,\n      top: bounds.top - containerBounds.top,\n      width: bounds.width\n    };\n  }\n\n  getContents(index = 0, length = this.getLength() - index) {\n    var _overload7 = overload(index, length);\n\n    var _overload8 = _slicedToArray(_overload7, 2);\n\n    index = _overload8[0];\n    length = _overload8[1];\n\n    return this.editor.getContents(index, length);\n  }\n\n  getFormat(index = this.getSelection(true), length = 0) {\n    if (typeof index === 'number') {\n      return this.editor.getFormat(index, length);\n    }\n    return this.editor.getFormat(index.index, index.length);\n  }\n\n  getIndex(blot) {\n    return blot.offset(this.scroll);\n  }\n\n  getLength() {\n    return this.scroll.length();\n  }\n\n  getLeaf(index) {\n    return this.scroll.leaf(index);\n  }\n\n  getLine(index) {\n    return this.scroll.line(index);\n  }\n\n  getLines(index = 0, length = Number.MAX_VALUE) {\n    if (typeof index !== 'number') {\n      return this.scroll.lines(index.index, index.length);\n    }\n    return this.scroll.lines(index, length);\n  }\n\n  getModule(name) {\n    return this.theme.modules[name];\n  }\n\n  getSelection(focus = false) {\n    if (focus) this.focus();\n    this.update(); // Make sure we access getRange with editor in consistent state\n    return this.selection.getRange()[0];\n  }\n\n  getSemanticHTML(index = 0, length = this.getLength() - index) {\n    var _overload9 = overload(index, length);\n\n    var _overload10 = _slicedToArray(_overload9, 2);\n\n    index = _overload10[0];\n    length = _overload10[1];\n\n    return this.editor.getHTML(index, length);\n  }\n\n  getText(index = 0, length = this.getLength() - index) {\n    var _overload11 = overload(index, length);\n\n    var _overload12 = _slicedToArray(_overload11, 2);\n\n    index = _overload12[0];\n    length = _overload12[1];\n\n    return this.editor.getText(index, length);\n  }\n\n  hasFocus() {\n    return this.selection.hasFocus();\n  }\n\n  insertEmbed(index, embed, value, source = Quill.sources.API) {\n    return modify.call(this, () => {\n      return this.editor.insertEmbed(index, embed, value);\n    }, source, index);\n  }\n\n  insertText(index, text, name, value, source) {\n    let formats;\n    // eslint-disable-next-line prefer-const\n\n    var _overload13 = overload(index, 0, name, value, source);\n\n    var _overload14 = _slicedToArray(_overload13, 4);\n\n    index = _overload14[0];\n    formats = _overload14[2];\n    source = _overload14[3];\n\n    return modify.call(this, () => {\n      return this.editor.insertText(index, text, formats);\n    }, source, index, text.length);\n  }\n\n  isEnabled() {\n    return this.scroll.isEnabled();\n  }\n\n  off(...args) {\n    return this.emitter.off(...args);\n  }\n\n  on(...args) {\n    return this.emitter.on(...args);\n  }\n\n  once(...args) {\n    return this.emitter.once(...args);\n  }\n\n  removeFormat(index, length, source) {\n    var _overload15 = overload(index, length, source);\n\n    var _overload16 = _slicedToArray(_overload15, 4);\n\n    index = _overload16[0];\n    length = _overload16[1];\n    source = _overload16[3];\n\n    return modify.call(this, () => {\n      return this.editor.removeFormat(index, length);\n    }, source, index);\n  }\n\n  scrollIntoView() {\n    this.selection.scrollIntoView(this.scrollingContainer);\n  }\n\n  setContents(delta, source = _emitter2.default.sources.API) {\n    return modify.call(this, () => {\n      delta = new _quillDelta2.default(delta);\n      const length = this.getLength();\n      const deleted = this.editor.deleteText(0, length);\n      const applied = this.editor.applyDelta(delta);\n      const lastOp = applied.ops[applied.ops.length - 1];\n      if (lastOp != null && typeof lastOp.insert === 'string' && lastOp.insert[lastOp.insert.length - 1] === '\\n') {\n        this.editor.deleteText(this.getLength() - 1, 1);\n        applied.delete(1);\n      }\n      return deleted.compose(applied);\n    }, source);\n  }\n\n  setSelection(index, length, source) {\n    if (index == null) {\n      this.selection.setRange(null, length || Quill.sources.API);\n    } else {\n      var _overload17 = overload(index, length, source);\n\n      var _overload18 = _slicedToArray(_overload17, 4);\n\n      index = _overload18[0];\n      length = _overload18[1];\n      source = _overload18[3];\n\n      this.selection.setRange(new _selection.Range(Math.max(0, index), length), source);\n      if (source !== _emitter2.default.sources.SILENT) {\n        this.selection.scrollIntoView(this.scrollingContainer);\n      }\n    }\n  }\n\n  setText(text, source = _emitter2.default.sources.API) {\n    const delta = new _quillDelta2.default().insert(text);\n    return this.setContents(delta, source);\n  }\n\n  update(source = _emitter2.default.sources.USER) {\n    const change = this.scroll.update(source); // Will update selection before selection.update() does if text changes\n    this.selection.update(source);\n    // TODO this is usually undefined\n    return change;\n  }\n\n  updateContents(delta, source = _emitter2.default.sources.API) {\n    return modify.call(this, () => {\n      delta = new _quillDelta2.default(delta);\n      return this.editor.applyDelta(delta, source);\n    }, source, true);\n  }\n}\nQuill.DEFAULTS = {\n  bounds: null,\n  modules: {},\n  placeholder: '',\n  readOnly: false,\n  registry: globalRegistry,\n  scrollingContainer: null,\n  theme: 'default'\n};\nQuill.events = _emitter2.default.events;\nQuill.sources = _emitter2.default.sources;\n// eslint-disable-next-line no-undef\nQuill.version =  false ? undefined : \"2.0.0-dev.3\";\n\nQuill.imports = {\n  delta: _quillDelta2.default,\n  parchment: Parchment,\n  'core/module': _module2.default,\n  'core/theme': _theme2.default\n};\n\nfunction expandConfig(container, userConfig) {\n  userConfig = (0, _extend2.default)(true, {\n    container,\n    modules: {\n      clipboard: true,\n      keyboard: true,\n      history: true,\n      uploader: true\n    }\n  }, userConfig);\n  if (!userConfig.theme || userConfig.theme === Quill.DEFAULTS.theme) {\n    userConfig.theme = _theme2.default;\n  } else {\n    userConfig.theme = Quill.import(`themes/${userConfig.theme}`);\n    if (userConfig.theme == null) {\n      throw new Error(`Invalid theme ${userConfig.theme}. Did you register it?`);\n    }\n  }\n  const themeConfig = (0, _extend2.default)(true, {}, userConfig.theme.DEFAULTS);\n  [themeConfig, userConfig].forEach(config => {\n    config.modules = config.modules || {};\n    Object.keys(config.modules).forEach(module => {\n      if (config.modules[module] === true) {\n        config.modules[module] = {};\n      }\n    });\n  });\n  const moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));\n  const moduleConfig = moduleNames.reduce((config, name) => {\n    const moduleClass = Quill.import(`modules/${name}`);\n    if (moduleClass == null) {\n      debug.error(`Cannot load ${name} module. Are you sure you registered it?`);\n    } else {\n      config[name] = moduleClass.DEFAULTS || {};\n    }\n    return config;\n  }, {});\n  // Special case toolbar shorthand\n  if (userConfig.modules != null && userConfig.modules.toolbar && userConfig.modules.toolbar.constructor !== Object) {\n    userConfig.modules.toolbar = {\n      container: userConfig.modules.toolbar\n    };\n  }\n  userConfig = (0, _extend2.default)(true, {}, Quill.DEFAULTS, { modules: moduleConfig }, themeConfig, userConfig);\n  ['bounds', 'container', 'scrollingContainer'].forEach(key => {\n    if (typeof userConfig[key] === 'string') {\n      userConfig[key] = document.querySelector(userConfig[key]);\n    }\n  });\n  userConfig.modules = Object.keys(userConfig.modules).reduce((config, name) => {\n    if (userConfig.modules[name]) {\n      config[name] = userConfig.modules[name];\n    }\n    return config;\n  }, {});\n  return userConfig;\n}\n\n// Handle selection preservation and TEXT_CHANGE emission\n// common to modification APIs\nfunction modify(modifier, source, index, shift) {\n  if (!this.isEnabled() && source === _emitter2.default.sources.USER && !this.allowReadOnlyEdits) {\n    return new _quillDelta2.default();\n  }\n  let range = index == null ? null : this.getSelection();\n  const oldDelta = this.editor.delta;\n  const change = modifier();\n  if (range != null) {\n    if (index === true) {\n      index = range.index; // eslint-disable-line prefer-destructuring\n    }\n    if (shift == null) {\n      range = shiftRange(range, change, source);\n    } else if (shift !== 0) {\n      range = shiftRange(range, index, shift, source);\n    }\n    this.setSelection(range, _emitter2.default.sources.SILENT);\n  }\n  if (change.length() > 0) {\n    const args = [_emitter2.default.events.TEXT_CHANGE, change, oldDelta, source];\n    this.emitter.emit(_emitter2.default.events.EDITOR_CHANGE, ...args);\n    if (source !== _emitter2.default.sources.SILENT) {\n      this.emitter.emit(...args);\n    }\n  }\n  return change;\n}\n\nfunction overload(index, length, name, value, source) {\n  let formats = {};\n  if (typeof index.index === 'number' && typeof index.length === 'number') {\n    // Allow for throwaway end (used by insertText/insertEmbed)\n    if (typeof length !== 'number') {\n      source = value;\n      value = name;\n      name = length;\n      length = index.length; // eslint-disable-line prefer-destructuring\n      index = index.index; // eslint-disable-line prefer-destructuring\n    } else {\n      length = index.length; // eslint-disable-line prefer-destructuring\n      index = index.index; // eslint-disable-line prefer-destructuring\n    }\n  } else if (typeof length !== 'number') {\n    source = value;\n    value = name;\n    name = length;\n    length = 0;\n  }\n  // Handle format being object, two format name/value strings or excluded\n  if (typeof name === 'object') {\n    formats = name;\n    source = value;\n  } else if (typeof name === 'string') {\n    if (value != null) {\n      formats[name] = value;\n    } else {\n      source = name;\n    }\n  }\n  // Handle optional source\n  source = source || _emitter2.default.sources.API;\n  return [index, length, formats, source];\n}\n\nfunction shiftRange(range, index, length, source) {\n  if (range == null) return null;\n  let start;\n  let end;\n  if (index instanceof _quillDelta2.default) {\n    var _map = [range.index, range.index + range.length].map(pos => index.transformPosition(pos, source !== _emitter2.default.sources.USER));\n\n    var _map2 = _slicedToArray(_map, 2);\n\n    start = _map2[0];\n    end = _map2[1];\n  } else {\n    var _map3 = [range.index, range.index + range.length].map(pos => {\n      if (pos < index || pos === index && source === _emitter2.default.sources.USER) return pos;\n      if (length >= 0) {\n        return pos + length;\n      }\n      return Math.max(index, pos + length);\n    });\n\n    var _map4 = _slicedToArray(_map3, 2);\n\n    start = _map4[0];\n    end = _map4[1];\n  }\n  return new _selection.Range(start, end - start);\n}\n\nexports.globalRegistry = globalRegistry;\nexports.expandConfig = expandConfig;\nexports.overload = overload;\nexports.default = Quill;\n\n//# sourceURL=webpack://Quill/./core/quill.js?");

        /***/
      },

      /***/"./core/selection.js":
      /*!***************************!*\
        !*** ./core/selection.js ***!
        \***************************/
      /*! no static exports found */
      /***/function coreSelectionJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.Range = undefined;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nvar _clone = __webpack_require__(/*! clone */ \"./node_modules/clone/clone.js\");\n\nvar _clone2 = _interopRequireDefault(_clone);\n\nvar _deepEqual = __webpack_require__(/*! deep-equal */ \"./node_modules/deep-equal/index.js\");\n\nvar _deepEqual2 = _interopRequireDefault(_deepEqual);\n\nvar _emitter = __webpack_require__(/*! ./emitter */ \"./core/emitter.js\");\n\nvar _emitter2 = _interopRequireDefault(_emitter);\n\nvar _logger = __webpack_require__(/*! ./logger */ \"./core/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst debug = (0, _logger2.default)('quill:selection');\n\nclass Range {\n  constructor(index, length = 0) {\n    this.index = index;\n    this.length = length;\n  }\n}\n\nclass Selection {\n  constructor(scroll, emitter) {\n    this.emitter = emitter;\n    this.scroll = scroll;\n    this.composing = false;\n    this.mouseDown = false;\n    this.root = this.scroll.domNode;\n    this.cursor = this.scroll.create('cursor', this);\n    // savedRange is last non-null range\n    this.savedRange = new Range(0, 0);\n    this.lastRange = this.savedRange;\n    this.handleComposition();\n    this.handleDragging();\n    this.emitter.listenDOM('selectionchange', document, () => {\n      if (!this.mouseDown && !this.composing) {\n        setTimeout(this.update.bind(this, _emitter2.default.sources.USER), 1);\n      }\n    });\n    this.emitter.on(_emitter2.default.events.SCROLL_BEFORE_UPDATE, () => {\n      if (!this.hasFocus()) return;\n      const native = this.getNativeRange();\n      if (native == null) return;\n      if (native.start.node === this.cursor.textNode) return; // cursor.restore() will handle\n      this.emitter.once(_emitter2.default.events.SCROLL_UPDATE, () => {\n        try {\n          if (this.root.contains(native.start.node) && this.root.contains(native.end.node)) {\n            this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);\n          }\n          this.update(_emitter2.default.sources.SILENT);\n        } catch (ignored) {\n          // ignore\n        }\n      });\n    });\n    this.emitter.on(_emitter2.default.events.SCROLL_OPTIMIZE, (mutations, context) => {\n      if (context.range) {\n        var _context$range = context.range;\n        const startNode = _context$range.startNode,\n              startOffset = _context$range.startOffset,\n              endNode = _context$range.endNode,\n              endOffset = _context$range.endOffset;\n\n        this.setNativeRange(startNode, startOffset, endNode, endOffset);\n        this.update(_emitter2.default.sources.SILENT);\n      }\n    });\n    this.update(_emitter2.default.sources.SILENT);\n  }\n\n  handleComposition() {\n    this.root.addEventListener('compositionstart', () => {\n      this.composing = true;\n      this.scroll.batchStart();\n    });\n    this.root.addEventListener('compositionend', () => {\n      this.scroll.batchEnd();\n      this.composing = false;\n      if (this.cursor.parent) {\n        const range = this.cursor.restore();\n        if (!range) return;\n        setTimeout(() => {\n          this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);\n        }, 1);\n      }\n    });\n  }\n\n  handleDragging() {\n    this.emitter.listenDOM('mousedown', document.body, () => {\n      this.mouseDown = true;\n    });\n    this.emitter.listenDOM('mouseup', document.body, () => {\n      this.mouseDown = false;\n      this.update(_emitter2.default.sources.USER);\n    });\n  }\n\n  focus() {\n    if (this.hasFocus()) return;\n    this.root.focus();\n    this.setRange(this.savedRange);\n  }\n\n  format(format, value) {\n    this.scroll.update();\n    const nativeRange = this.getNativeRange();\n    if (nativeRange == null || !nativeRange.native.collapsed || this.scroll.query(format, _parchment.Scope.BLOCK)) return;\n    if (nativeRange.start.node !== this.cursor.textNode) {\n      const blot = this.scroll.find(nativeRange.start.node, false);\n      if (blot == null) return;\n      // TODO Give blot ability to not split\n      if (blot instanceof _parchment.LeafBlot) {\n        const after = blot.split(nativeRange.start.offset);\n        blot.parent.insertBefore(this.cursor, after);\n      } else {\n        blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen\n      }\n      this.cursor.attach();\n    }\n    this.cursor.format(format, value);\n    this.scroll.optimize();\n    this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);\n    this.update();\n  }\n\n  getBounds(index, length = 0) {\n    const scrollLength = this.scroll.length();\n    index = Math.min(index, scrollLength - 1);\n    length = Math.min(index + length, scrollLength - 1) - index;\n    let node;\n\n    var _scroll$leaf = this.scroll.leaf(index),\n        _scroll$leaf2 = _slicedToArray(_scroll$leaf, 2);\n\n    let leaf = _scroll$leaf2[0],\n        offset = _scroll$leaf2[1];\n\n    if (leaf == null) return null;\n\n    var _leaf$position = leaf.position(offset, true);\n\n    var _leaf$position2 = _slicedToArray(_leaf$position, 2);\n\n    node = _leaf$position2[0];\n    offset = _leaf$position2[1];\n\n    const range = document.createRange();\n    if (length > 0) {\n      range.setStart(node, offset);\n\n      var _scroll$leaf3 = this.scroll.leaf(index + length);\n\n      var _scroll$leaf4 = _slicedToArray(_scroll$leaf3, 2);\n\n      leaf = _scroll$leaf4[0];\n      offset = _scroll$leaf4[1];\n\n      if (leaf == null) return null;\n\n      var _leaf$position3 = leaf.position(offset, true);\n\n      var _leaf$position4 = _slicedToArray(_leaf$position3, 2);\n\n      node = _leaf$position4[0];\n      offset = _leaf$position4[1];\n\n      range.setEnd(node, offset);\n      return range.getBoundingClientRect();\n    }\n    let side = 'left';\n    let rect;\n    if (node instanceof Text) {\n      if (offset < node.data.length) {\n        range.setStart(node, offset);\n        range.setEnd(node, offset + 1);\n      } else {\n        range.setStart(node, offset - 1);\n        range.setEnd(node, offset);\n        side = 'right';\n      }\n      rect = range.getBoundingClientRect();\n    } else {\n      rect = leaf.domNode.getBoundingClientRect();\n      if (offset > 0) side = 'right';\n    }\n    return {\n      bottom: rect.top + rect.height,\n      height: rect.height,\n      left: rect[side],\n      right: rect[side],\n      top: rect.top,\n      width: 0\n    };\n  }\n\n  getNativeRange() {\n    const selection = document.getSelection();\n    if (selection == null || selection.rangeCount <= 0) return null;\n    const nativeRange = selection.getRangeAt(0);\n    if (nativeRange == null) return null;\n    const range = this.normalizeNative(nativeRange);\n    debug.info('getNativeRange', range);\n    return range;\n  }\n\n  getRange() {\n    const normalized = this.getNativeRange();\n    if (normalized == null) return [null, null];\n    const range = this.normalizedToRange(normalized);\n    return [range, normalized];\n  }\n\n  hasFocus() {\n    return document.activeElement === this.root || contains(this.root, document.activeElement);\n  }\n\n  normalizedToRange(range) {\n    const positions = [[range.start.node, range.start.offset]];\n    if (!range.native.collapsed) {\n      positions.push([range.end.node, range.end.offset]);\n    }\n    const indexes = positions.map(position => {\n      var _position = _slicedToArray(position, 2);\n\n      const node = _position[0],\n            offset = _position[1];\n\n      const blot = this.scroll.find(node, true);\n      const index = blot.offset(this.scroll);\n      if (offset === 0) {\n        return index;\n      }\n      if (blot instanceof _parchment.LeafBlot) {\n        return index + blot.index(node, offset);\n      }\n      return index + blot.length();\n    });\n    const end = Math.min(Math.max(...indexes), this.scroll.length() - 1);\n    const start = Math.min(end, ...indexes);\n    return new Range(start, end - start);\n  }\n\n  normalizeNative(nativeRange) {\n    if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {\n      return null;\n    }\n    const range = {\n      start: {\n        node: nativeRange.startContainer,\n        offset: nativeRange.startOffset\n      },\n      end: { node: nativeRange.endContainer, offset: nativeRange.endOffset },\n      native: nativeRange\n    };\n    [range.start, range.end].forEach(position => {\n      let node = position.node,\n          offset = position.offset;\n\n      while (!(node instanceof Text) && node.childNodes.length > 0) {\n        if (node.childNodes.length > offset) {\n          node = node.childNodes[offset];\n          offset = 0;\n        } else if (node.childNodes.length === offset) {\n          node = node.lastChild;\n          if (node instanceof Text) {\n            offset = node.data.length;\n          } else if (node.childNodes.length > 0) {\n            // Container case\n            offset = node.childNodes.length;\n          } else {\n            // Embed case\n            offset = node.childNodes.length + 1;\n          }\n        } else {\n          break;\n        }\n      }\n      position.node = node;\n      position.offset = offset;\n    });\n    return range;\n  }\n\n  rangeToNative(range) {\n    const indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];\n    const args = [];\n    const scrollLength = this.scroll.length();\n    indexes.forEach((index, i) => {\n      index = Math.min(scrollLength - 1, index);\n\n      var _scroll$leaf5 = this.scroll.leaf(index),\n          _scroll$leaf6 = _slicedToArray(_scroll$leaf5, 2);\n\n      const leaf = _scroll$leaf6[0],\n            leafOffset = _scroll$leaf6[1];\n\n      var _leaf$position5 = leaf.position(leafOffset, i !== 0),\n          _leaf$position6 = _slicedToArray(_leaf$position5, 2);\n\n      const node = _leaf$position6[0],\n            offset = _leaf$position6[1];\n\n      args.push(node, offset);\n    });\n    if (args.length < 2) {\n      return args.concat(args);\n    }\n    return args;\n  }\n\n  scrollIntoView(scrollingContainer) {\n    const range = this.lastRange;\n    if (range == null) return;\n    const bounds = this.getBounds(range.index, range.length);\n    if (bounds == null) return;\n    const limit = this.scroll.length() - 1;\n\n    var _scroll$line = this.scroll.line(Math.min(range.index, limit)),\n        _scroll$line2 = _slicedToArray(_scroll$line, 1);\n\n    const first = _scroll$line2[0];\n\n    let last = first;\n    if (range.length > 0) {\n      var _scroll$line3 = this.scroll.line(Math.min(range.index + range.length, limit));\n\n      var _scroll$line4 = _slicedToArray(_scroll$line3, 1);\n\n      last = _scroll$line4[0];\n    }\n    if (first == null || last == null) return;\n    const scrollBounds = scrollingContainer.getBoundingClientRect();\n    if (bounds.top < scrollBounds.top) {\n      scrollingContainer.scrollTop -= scrollBounds.top - bounds.top;\n    } else if (bounds.bottom > scrollBounds.bottom) {\n      scrollingContainer.scrollTop += bounds.bottom - scrollBounds.bottom;\n    }\n  }\n\n  setNativeRange(startNode, startOffset, endNode = startNode, endOffset = startOffset, force = false) {\n    debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);\n    if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {\n      return;\n    }\n    const selection = document.getSelection();\n    if (selection == null) return;\n    if (startNode != null) {\n      if (!this.hasFocus()) this.root.focus();\n\n      var _ref = this.getNativeRange() || {};\n\n      const native = _ref.native;\n\n      if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {\n        if (startNode.tagName === 'BR') {\n          startOffset = Array.from(startNode.parentNode.childNodes).indexOf(startNode);\n          startNode = startNode.parentNode;\n        }\n        if (endNode.tagName === 'BR') {\n          endOffset = Array.from(endNode.parentNode.childNodes).indexOf(endNode);\n          endNode = endNode.parentNode;\n        }\n        const range = document.createRange();\n        range.setStart(startNode, startOffset);\n        range.setEnd(endNode, endOffset);\n        selection.removeAllRanges();\n        selection.addRange(range);\n      }\n    } else {\n      selection.removeAllRanges();\n      this.root.blur();\n    }\n  }\n\n  setRange(range, force = false, source = _emitter2.default.sources.API) {\n    if (typeof force === 'string') {\n      source = force;\n      force = false;\n    }\n    debug.info('setRange', range);\n    if (range != null) {\n      const args = this.rangeToNative(range);\n      this.setNativeRange(...args, force);\n    } else {\n      this.setNativeRange(null);\n    }\n    this.update(source);\n  }\n\n  update(source = _emitter2.default.sources.USER) {\n    const oldRange = this.lastRange;\n\n    var _getRange = this.getRange(),\n        _getRange2 = _slicedToArray(_getRange, 2);\n\n    const lastRange = _getRange2[0],\n          nativeRange = _getRange2[1];\n\n    this.lastRange = lastRange;\n    if (this.lastRange != null) {\n      this.savedRange = this.lastRange;\n    }\n    if (!(0, _deepEqual2.default)(oldRange, this.lastRange)) {\n      if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {\n        const range = this.cursor.restore();\n        if (range) {\n          this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);\n        }\n      }\n      const args = [_emitter2.default.events.SELECTION_CHANGE, (0, _clone2.default)(this.lastRange), (0, _clone2.default)(oldRange), source];\n      this.emitter.emit(_emitter2.default.events.EDITOR_CHANGE, ...args);\n      if (source !== _emitter2.default.sources.SILENT) {\n        this.emitter.emit(...args);\n      }\n    }\n  }\n}\n\nfunction contains(parent, descendant) {\n  try {\n    // Firefox inserts inaccessible nodes around video elements\n    descendant.parentNode; // eslint-disable-line no-unused-expressions\n  } catch (e) {\n    return false;\n  }\n  return parent.contains(descendant);\n}\n\nexports.Range = Range;\nexports.default = Selection;\n\n//# sourceURL=webpack://Quill/./core/selection.js?");

        /***/
      },

      /***/"./core/theme.js":
      /*!***********************!*\
        !*** ./core/theme.js ***!
        \***********************/
      /*! no static exports found */
      /***/function coreThemeJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nclass Theme {\n  constructor(quill, options) {\n    this.quill = quill;\n    this.options = options;\n    this.modules = {};\n  }\n\n  init() {\n    Object.keys(this.options.modules).forEach(name => {\n      if (this.modules[name] == null) {\n        this.addModule(name);\n      }\n    });\n  }\n\n  addModule(name) {\n    const ModuleClass = this.quill.constructor.import(`modules/${name}`);\n    this.modules[name] = new ModuleClass(this.quill, this.options.modules[name] || {});\n    return this.modules[name];\n  }\n}\nTheme.DEFAULTS = {\n  modules: {}\n};\nTheme.themes = {\n  default: Theme\n};\n\nexports.default = Theme;\n\n//# sourceURL=webpack://Quill/./core/theme.js?");

        /***/
      },

      /***/"./formats/align.js":
      /*!**************************!*\
        !*** ./formats/align.js ***!
        \**************************/
      /*! no static exports found */
      /***/function formatsAlignJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.AlignStyle = exports.AlignClass = exports.AlignAttribute = undefined;\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nconst config = {\n  scope: _parchment.Scope.BLOCK,\n  whitelist: ['right', 'center', 'justify']\n};\n\nconst AlignAttribute = new _parchment.Attributor('align', 'align', config);\nconst AlignClass = new _parchment.ClassAttributor('align', 'ql-align', config);\nconst AlignStyle = new _parchment.StyleAttributor('align', 'text-align', config);\n\nexports.AlignAttribute = AlignAttribute;\nexports.AlignClass = AlignClass;\nexports.AlignStyle = AlignStyle;\n\n//# sourceURL=webpack://Quill/./formats/align.js?");

        /***/
      },

      /***/"./formats/background.js":
      /*!*******************************!*\
        !*** ./formats/background.js ***!
        \*******************************/
      /*! no static exports found */
      /***/function formatsBackgroundJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.BackgroundStyle = exports.BackgroundClass = undefined;\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nvar _color = __webpack_require__(/*! ./color */ \"./formats/color.js\");\n\nconst BackgroundClass = new _parchment.ClassAttributor('background', 'ql-bg', {\n  scope: _parchment.Scope.INLINE\n});\nconst BackgroundStyle = new _color.ColorAttributor('background', 'background-color', {\n  scope: _parchment.Scope.INLINE\n});\n\nexports.BackgroundClass = BackgroundClass;\nexports.BackgroundStyle = BackgroundStyle;\n\n//# sourceURL=webpack://Quill/./formats/background.js?");

        /***/
      },

      /***/"./formats/blockquote.js":
      /*!*******************************!*\
        !*** ./formats/blockquote.js ***!
        \*******************************/
      /*! no static exports found */
      /***/function formatsBlockquoteJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _block = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Blockquote extends _block2.default {}\nBlockquote.blotName = 'blockquote';\nBlockquote.tagName = 'blockquote';\n\nexports.default = Blockquote;\n\n//# sourceURL=webpack://Quill/./formats/blockquote.js?");

        /***/
      },

      /***/"./formats/bold.js":
      /*!*************************!*\
        !*** ./formats/bold.js ***!
        \*************************/
      /*! no static exports found */
      /***/function formatsBoldJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _inline = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\nvar _inline2 = _interopRequireDefault(_inline);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Bold extends _inline2.default {\n  static create() {\n    return super.create();\n  }\n\n  static formats() {\n    return true;\n  }\n\n  optimize(context) {\n    super.optimize(context);\n    if (this.domNode.tagName !== this.statics.tagName[0]) {\n      this.replaceWith(this.statics.blotName);\n    }\n  }\n}\nBold.blotName = 'bold';\nBold.tagName = ['STRONG', 'B'];\n\nexports.default = Bold;\n\n//# sourceURL=webpack://Quill/./formats/bold.js?");

        /***/
      },

      /***/"./formats/code.js":
      /*!*************************!*\
        !*** ./formats/code.js ***!
        \*************************/
      /*! no static exports found */
      /***/function formatsCodeJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.CodeBlockContainer = exports.Code = undefined;\n\nvar _block = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _break = __webpack_require__(/*! ../blots/break */ \"./blots/break.js\");\n\nvar _break2 = _interopRequireDefault(_break);\n\nvar _cursor = __webpack_require__(/*! ../blots/cursor */ \"./blots/cursor.js\");\n\nvar _cursor2 = _interopRequireDefault(_cursor);\n\nvar _inline = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\nvar _inline2 = _interopRequireDefault(_inline);\n\nvar _text = __webpack_require__(/*! ../blots/text */ \"./blots/text.js\");\n\nvar _text2 = _interopRequireDefault(_text);\n\nvar _container = __webpack_require__(/*! ../blots/container */ \"./blots/container.js\");\n\nvar _container2 = _interopRequireDefault(_container);\n\nvar _quill = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n\nvar _quill2 = _interopRequireDefault(_quill);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass CodeBlockContainer extends _container2.default {\n  static create(value) {\n    const domNode = super.create(value);\n    domNode.setAttribute('spellcheck', false);\n    return domNode;\n  }\n\n  html(index, length) {\n    const text = this.children.map(child => child.domNode.innerText).join('\\n').slice(index, index + length);\n    return `<pre>${(0, _text.escapeText)(text)}</pre>`;\n  }\n}\n\nclass CodeBlock extends _block2.default {\n  static register() {\n    _quill2.default.register(CodeBlockContainer);\n  }\n}\n\nclass Code extends _inline2.default {}\nCode.blotName = 'code';\nCode.tagName = 'CODE';\n\nCodeBlock.blotName = 'code-block';\nCodeBlock.className = 'ql-code-block';\nCodeBlock.tagName = 'DIV';\nCodeBlockContainer.blotName = 'code-block-container';\nCodeBlockContainer.className = 'ql-code-block-container';\nCodeBlockContainer.tagName = 'DIV';\n\nCodeBlockContainer.allowedChildren = [CodeBlock];\n\nCodeBlock.allowedChildren = [_text2.default, _break2.default, _cursor2.default];\nCodeBlock.requiredContainer = CodeBlockContainer;\nCodeBlock.TAB = '  ';\n\nexports.Code = Code;\nexports.CodeBlockContainer = CodeBlockContainer;\nexports.default = CodeBlock;\n\n//# sourceURL=webpack://Quill/./formats/code.js?");

        /***/
      },

      /***/"./formats/color.js":
      /*!**************************!*\
        !*** ./formats/color.js ***!
        \**************************/
      /*! no static exports found */
      /***/function formatsColorJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ColorStyle = exports.ColorClass = exports.ColorAttributor = undefined;\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nclass ColorAttributor extends _parchment.StyleAttributor {\n  value(domNode) {\n    let value = super.value(domNode);\n    if (!value.startsWith('rgb(')) return value;\n    value = value.replace(/^[^\\d]+/, '').replace(/[^\\d]+$/, '');\n    const hex = value.split(',').map(component => `00${parseInt(component, 10).toString(16)}`.slice(-2)).join('');\n    return `#${hex}`;\n  }\n}\n\nconst ColorClass = new _parchment.ClassAttributor('color', 'ql-color', {\n  scope: _parchment.Scope.INLINE\n});\nconst ColorStyle = new ColorAttributor('color', 'color', {\n  scope: _parchment.Scope.INLINE\n});\n\nexports.ColorAttributor = ColorAttributor;\nexports.ColorClass = ColorClass;\nexports.ColorStyle = ColorStyle;\n\n//# sourceURL=webpack://Quill/./formats/color.js?");

        /***/
      },

      /***/"./formats/direction.js":
      /*!******************************!*\
        !*** ./formats/direction.js ***!
        \******************************/
      /*! no static exports found */
      /***/function formatsDirectionJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.DirectionStyle = exports.DirectionClass = exports.DirectionAttribute = undefined;\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nconst config = {\n  scope: _parchment.Scope.BLOCK,\n  whitelist: ['rtl']\n};\n\nconst DirectionAttribute = new _parchment.Attributor('direction', 'dir', config);\nconst DirectionClass = new _parchment.ClassAttributor('direction', 'ql-direction', config);\nconst DirectionStyle = new _parchment.StyleAttributor('direction', 'direction', config);\n\nexports.DirectionAttribute = DirectionAttribute;\nexports.DirectionClass = DirectionClass;\nexports.DirectionStyle = DirectionStyle;\n\n//# sourceURL=webpack://Quill/./formats/direction.js?");

        /***/
      },

      /***/"./formats/font.js":
      /*!*************************!*\
        !*** ./formats/font.js ***!
        \*************************/
      /*! no static exports found */
      /***/function formatsFontJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.FontClass = exports.FontStyle = undefined;\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nconst config = {\n  scope: _parchment.Scope.INLINE,\n  whitelist: ['serif', 'monospace']\n};\n\nconst FontClass = new _parchment.ClassAttributor('font', 'ql-font', config);\n\nclass FontStyleAttributor extends _parchment.StyleAttributor {\n  value(node) {\n    return super.value(node).replace(/[\"']/g, '');\n  }\n}\n\nconst FontStyle = new FontStyleAttributor('font', 'font-family', config);\n\nexports.FontStyle = FontStyle;\nexports.FontClass = FontClass;\n\n//# sourceURL=webpack://Quill/./formats/font.js?");

        /***/
      },

      /***/"./formats/formula.js":
      /*!****************************!*\
        !*** ./formats/formula.js ***!
        \****************************/
      /*! no static exports found */
      /***/function formatsFormulaJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _embed = __webpack_require__(/*! ../blots/embed */ \"./blots/embed.js\");\n\nvar _embed2 = _interopRequireDefault(_embed);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Formula extends _embed2.default {\n  static create(value) {\n    if (window.katex == null) {\n      throw new Error('Formula module requires KaTeX.');\n    }\n    const node = super.create(value);\n    if (typeof value === 'string') {\n      window.katex.render(value, node, {\n        throwOnError: false,\n        errorColor: '#f00'\n      });\n      node.setAttribute('data-value', value);\n    }\n    return node;\n  }\n\n  static value(domNode) {\n    return domNode.getAttribute('data-value');\n  }\n\n  html() {\n    var _value = this.value();\n\n    const formula = _value.formula;\n\n    return `<span>${formula}</span>`;\n  }\n}\nFormula.blotName = 'formula';\nFormula.className = 'ql-formula';\nFormula.tagName = 'SPAN';\n\nexports.default = Formula;\n\n//# sourceURL=webpack://Quill/./formats/formula.js?");

        /***/
      },

      /***/"./formats/header.js":
      /*!***************************!*\
        !*** ./formats/header.js ***!
        \***************************/
      /*! no static exports found */
      /***/function formatsHeaderJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _block = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Header extends _block2.default {\n  static formats(domNode) {\n    return this.tagName.indexOf(domNode.tagName) + 1;\n  }\n}\nHeader.blotName = 'header';\nHeader.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];\n\nexports.default = Header;\n\n//# sourceURL=webpack://Quill/./formats/header.js?");

        /***/
      },

      /***/"./formats/image.js":
      /*!**************************!*\
        !*** ./formats/image.js ***!
        \**************************/
      /*! no static exports found */
      /***/function formatsImageJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nvar _link = __webpack_require__(/*! ./link */ \"./formats/link.js\");\n\nconst ATTRIBUTES = ['alt', 'height', 'width'];\n\nclass Image extends _parchment.EmbedBlot {\n  static create(value) {\n    const node = super.create(value);\n    if (typeof value === 'string') {\n      node.setAttribute('src', this.sanitize(value));\n    }\n    return node;\n  }\n\n  static formats(domNode) {\n    return ATTRIBUTES.reduce((formats, attribute) => {\n      if (domNode.hasAttribute(attribute)) {\n        formats[attribute] = domNode.getAttribute(attribute);\n      }\n      return formats;\n    }, {});\n  }\n\n  static match(url) {\n    return (/\\.(jpe?g|gif|png)$/.test(url) || /^data:image\\/.+;base64/.test(url)\n    );\n  }\n\n  static register() {\n    if (/Firefox/i.test(navigator.userAgent)) {\n      setTimeout(() => {\n        // Disable image resizing in Firefox\n        document.execCommand('enableObjectResizing', false, false);\n      }, 1);\n    }\n  }\n\n  static sanitize(url) {\n    return (0, _link.sanitize)(url, ['http', 'https', 'data']) ? url : '//:0';\n  }\n\n  static value(domNode) {\n    return domNode.getAttribute('src');\n  }\n\n  format(name, value) {\n    if (ATTRIBUTES.indexOf(name) > -1) {\n      if (value) {\n        this.domNode.setAttribute(name, value);\n      } else {\n        this.domNode.removeAttribute(name);\n      }\n    } else {\n      super.format(name, value);\n    }\n  }\n}\nImage.blotName = 'image';\nImage.tagName = 'IMG';\n\nexports.default = Image;\n\n//# sourceURL=webpack://Quill/./formats/image.js?");

        /***/
      },

      /***/"./formats/indent.js":
      /*!***************************!*\
        !*** ./formats/indent.js ***!
        \***************************/
      /*! no static exports found */
      /***/function formatsIndentJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nclass IndentAttributor extends _parchment.ClassAttributor {\n  add(node, value) {\n    if (value === '+1' || value === '-1') {\n      const indent = this.value(node) || 0;\n      value = value === '+1' ? indent + 1 : indent - 1;\n    }\n    if (value === 0) {\n      this.remove(node);\n      return true;\n    }\n    return super.add(node, value);\n  }\n\n  canAdd(node, value) {\n    return super.canAdd(node, value) || super.canAdd(node, parseInt(value, 10));\n  }\n\n  value(node) {\n    return parseInt(super.value(node), 10) || undefined; // Don't return NaN\n  }\n}\n\nconst IndentClass = new IndentAttributor('indent', 'ql-indent', {\n  scope: _parchment.Scope.BLOCK,\n  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]\n});\n\nexports.default = IndentClass;\n\n//# sourceURL=webpack://Quill/./formats/indent.js?");

        /***/
      },

      /***/"./formats/italic.js":
      /*!***************************!*\
        !*** ./formats/italic.js ***!
        \***************************/
      /*! no static exports found */
      /***/function formatsItalicJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _bold = __webpack_require__(/*! ./bold */ \"./formats/bold.js\");\n\nvar _bold2 = _interopRequireDefault(_bold);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Italic extends _bold2.default {}\nItalic.blotName = 'italic';\nItalic.tagName = ['EM', 'I'];\n\nexports.default = Italic;\n\n//# sourceURL=webpack://Quill/./formats/italic.js?");

        /***/
      },

      /***/"./formats/link.js":
      /*!*************************!*\
        !*** ./formats/link.js ***!
        \*************************/
      /*! no static exports found */
      /***/function formatsLinkJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.sanitize = exports.default = undefined;\n\nvar _inline = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\nvar _inline2 = _interopRequireDefault(_inline);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Link extends _inline2.default {\n  static create(value) {\n    const node = super.create(value);\n    node.setAttribute('href', this.sanitize(value));\n    node.setAttribute('target', '_blank');\n    return node;\n  }\n\n  static formats(domNode) {\n    return domNode.getAttribute('href');\n  }\n\n  static sanitize(url) {\n    return sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;\n  }\n\n  format(name, value) {\n    if (name !== this.statics.blotName || !value) {\n      super.format(name, value);\n    } else {\n      this.domNode.setAttribute('href', this.constructor.sanitize(value));\n    }\n  }\n}\nLink.blotName = 'link';\nLink.tagName = 'A';\nLink.SANITIZED_URL = 'about:blank';\nLink.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel'];\n\nfunction sanitize(url, protocols) {\n  const anchor = document.createElement('a');\n  anchor.href = url;\n  const protocol = anchor.href.slice(0, anchor.href.indexOf(':'));\n  return protocols.indexOf(protocol) > -1;\n}\n\nexports.default = Link;\nexports.sanitize = sanitize;\n\n//# sourceURL=webpack://Quill/./formats/link.js?");

        /***/
      },

      /***/"./formats/list.js":
      /*!*************************!*\
        !*** ./formats/list.js ***!
        \*************************/
      /*! no static exports found */
      /***/function formatsListJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.ListContainer = undefined;\n\nvar _block = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _container = __webpack_require__(/*! ../blots/container */ \"./blots/container.js\");\n\nvar _container2 = _interopRequireDefault(_container);\n\nvar _quill = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n\nvar _quill2 = _interopRequireDefault(_quill);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass ListContainer extends _container2.default {}\nListContainer.blotName = 'list-container';\nListContainer.tagName = 'OL';\n\nclass ListItem extends _block2.default {\n  static create(value) {\n    const node = super.create();\n    node.setAttribute('data-list', value);\n    return node;\n  }\n\n  static formats(domNode) {\n    return domNode.getAttribute('data-list') || undefined;\n  }\n\n  static register() {\n    _quill2.default.register(ListContainer);\n  }\n\n  constructor(scroll, domNode) {\n    super(scroll, domNode);\n    const ui = domNode.ownerDocument.createElement('span');\n    const listEventHandler = e => {\n      if (!scroll.isEnabled()) return;\n      const format = this.statics.formats(domNode, scroll);\n      if (format === 'checked') {\n        this.format('list', 'unchecked');\n        e.preventDefault();\n      } else if (format === 'unchecked') {\n        this.format('list', 'checked');\n        e.preventDefault();\n      }\n    };\n    ui.addEventListener('mousedown', listEventHandler);\n    ui.addEventListener('touchstart', listEventHandler);\n    this.attachUI(ui);\n  }\n\n  format(name, value) {\n    if (name === this.statics.blotName && value) {\n      this.domNode.setAttribute('data-list', value);\n    } else {\n      super.format(name, value);\n    }\n  }\n}\nListItem.blotName = 'list';\nListItem.tagName = 'LI';\n\nListContainer.allowedChildren = [ListItem];\nListItem.requiredContainer = ListContainer;\n\nexports.ListContainer = ListContainer;\nexports.default = ListItem;\n\n//# sourceURL=webpack://Quill/./formats/list.js?");

        /***/
      },

      /***/"./formats/script.js":
      /*!***************************!*\
        !*** ./formats/script.js ***!
        \***************************/
      /*! no static exports found */
      /***/function formatsScriptJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _inline = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\nvar _inline2 = _interopRequireDefault(_inline);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Script extends _inline2.default {\n  static create(value) {\n    if (value === 'super') {\n      return document.createElement('sup');\n    }\n    if (value === 'sub') {\n      return document.createElement('sub');\n    }\n    return super.create(value);\n  }\n\n  static formats(domNode) {\n    if (domNode.tagName === 'SUB') return 'sub';\n    if (domNode.tagName === 'SUP') return 'super';\n    return undefined;\n  }\n}\nScript.blotName = 'script';\nScript.tagName = ['SUB', 'SUP'];\n\nexports.default = Script;\n\n//# sourceURL=webpack://Quill/./formats/script.js?");

        /***/
      },

      /***/"./formats/size.js":
      /*!*************************!*\
        !*** ./formats/size.js ***!
        \*************************/
      /*! no static exports found */
      /***/function formatsSizeJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SizeStyle = exports.SizeClass = undefined;\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nconst SizeClass = new _parchment.ClassAttributor('size', 'ql-size', {\n  scope: _parchment.Scope.INLINE,\n  whitelist: ['small', 'large', 'huge']\n});\nconst SizeStyle = new _parchment.StyleAttributor('size', 'font-size', {\n  scope: _parchment.Scope.INLINE,\n  whitelist: ['10px', '18px', '32px']\n});\n\nexports.SizeClass = SizeClass;\nexports.SizeStyle = SizeStyle;\n\n//# sourceURL=webpack://Quill/./formats/size.js?");

        /***/
      },

      /***/"./formats/strike.js":
      /*!***************************!*\
        !*** ./formats/strike.js ***!
        \***************************/
      /*! no static exports found */
      /***/function formatsStrikeJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _inline = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\nvar _inline2 = _interopRequireDefault(_inline);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Strike extends _inline2.default {}\nStrike.blotName = 'strike';\nStrike.tagName = 'S';\n\nexports.default = Strike;\n\n//# sourceURL=webpack://Quill/./formats/strike.js?");

        /***/
      },

      /***/"./formats/table.js":
      /*!**************************!*\
        !*** ./formats/table.js ***!
        \**************************/
      /*! no static exports found */
      /***/function formatsTableJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.tableId = exports.TableContainer = exports.TableBody = exports.TableRow = exports.TableCell = undefined;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _block = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _container = __webpack_require__(/*! ../blots/container */ \"./blots/container.js\");\n\nvar _container2 = _interopRequireDefault(_container);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass TableCell extends _block2.default {\n  static create(value) {\n    const node = super.create();\n    if (value) {\n      node.setAttribute('data-row', value);\n    } else {\n      node.setAttribute('data-row', tableId());\n    }\n    return node;\n  }\n\n  static formats(domNode) {\n    if (domNode.hasAttribute('data-row')) {\n      return domNode.getAttribute('data-row');\n    }\n    return undefined;\n  }\n\n  cellOffset() {\n    if (this.parent) {\n      return this.parent.children.indexOf(this);\n    }\n    return -1;\n  }\n\n  format(name, value) {\n    if (name === TableCell.blotName && value) {\n      this.domNode.setAttribute('data-row', value);\n    } else {\n      super.format(name, value);\n    }\n  }\n\n  row() {\n    return this.parent;\n  }\n\n  rowOffset() {\n    if (this.row()) {\n      return this.row().rowOffset();\n    }\n    return -1;\n  }\n\n  table() {\n    return this.row() && this.row().table();\n  }\n}\nTableCell.blotName = 'table';\nTableCell.tagName = 'TD';\n\nclass TableRow extends _container2.default {\n  checkMerge() {\n    if (super.checkMerge() && this.next.children.head != null) {\n      const thisHead = this.children.head.formats();\n      const thisTail = this.children.tail.formats();\n      const nextHead = this.next.children.head.formats();\n      const nextTail = this.next.children.tail.formats();\n      return thisHead.table === thisTail.table && thisHead.table === nextHead.table && thisHead.table === nextTail.table;\n    }\n    return false;\n  }\n\n  optimize(...args) {\n    super.optimize(...args);\n    this.children.forEach(child => {\n      if (child.next == null) return;\n      const childFormats = child.formats();\n      const nextFormats = child.next.formats();\n      if (childFormats.table !== nextFormats.table) {\n        const next = this.splitAfter(child);\n        if (next) {\n          next.optimize();\n        }\n        // We might be able to merge with prev now\n        if (this.prev) {\n          this.prev.optimize();\n        }\n      }\n    });\n  }\n\n  rowOffset() {\n    if (this.parent) {\n      return this.parent.children.indexOf(this);\n    }\n    return -1;\n  }\n\n  table() {\n    return this.parent && this.parent.parent;\n  }\n}\nTableRow.blotName = 'table-row';\nTableRow.tagName = 'TR';\n\nclass TableBody extends _container2.default {}\nTableBody.blotName = 'table-body';\nTableBody.tagName = 'TBODY';\n\nclass TableContainer extends _container2.default {\n  balanceCells() {\n    const rows = this.descendants(TableRow);\n    const maxColumns = rows.reduce((max, row) => {\n      return Math.max(row.children.length, max);\n    }, 0);\n    rows.forEach(row => {\n      new Array(maxColumns - row.children.length).fill(0).forEach(() => {\n        let value;\n        if (row.children.head != null) {\n          value = TableCell.formats(row.children.head.domNode);\n        }\n        const blot = this.scroll.create(TableCell.blotName, value);\n        row.appendChild(blot);\n        blot.optimize(); // Add break blot\n      });\n    });\n  }\n\n  cells(column) {\n    return this.rows().map(row => row.children.at(column));\n  }\n\n  deleteColumn(index) {\n    var _descendant = this.descendant(TableBody),\n        _descendant2 = _slicedToArray(_descendant, 1);\n\n    const body = _descendant2[0];\n\n    if (body == null || body.children.head == null) return;\n    body.children.forEach(row => {\n      const cell = row.children.at(index);\n      if (cell != null) {\n        cell.remove();\n      }\n    });\n  }\n\n  insertColumn(index) {\n    var _descendant3 = this.descendant(TableBody),\n        _descendant4 = _slicedToArray(_descendant3, 1);\n\n    const body = _descendant4[0];\n\n    if (body == null || body.children.head == null) return;\n    body.children.forEach(row => {\n      const ref = row.children.at(index);\n      const value = TableCell.formats(row.children.head.domNode);\n      const cell = this.scroll.create(TableCell.blotName, value);\n      row.insertBefore(cell, ref);\n    });\n  }\n\n  insertRow(index) {\n    var _descendant5 = this.descendant(TableBody),\n        _descendant6 = _slicedToArray(_descendant5, 1);\n\n    const body = _descendant6[0];\n\n    if (body == null || body.children.head == null) return;\n    const id = tableId();\n    const row = this.scroll.create(TableRow.blotName);\n    body.children.head.children.forEach(() => {\n      const cell = this.scroll.create(TableCell.blotName, id);\n      row.appendChild(cell);\n    });\n    const ref = body.children.at(index);\n    body.insertBefore(row, ref);\n  }\n\n  rows() {\n    const body = this.children.head;\n    if (body == null) return [];\n    return body.children.map(row => row);\n  }\n}\nTableContainer.blotName = 'table-container';\nTableContainer.tagName = 'TABLE';\n\nTableContainer.allowedChildren = [TableBody];\nTableBody.requiredContainer = TableContainer;\n\nTableBody.allowedChildren = [TableRow];\nTableRow.requiredContainer = TableBody;\n\nTableRow.allowedChildren = [TableCell];\nTableCell.requiredContainer = TableRow;\n\nfunction tableId() {\n  const id = Math.random().toString(36).slice(2, 6);\n  return `row-${id}`;\n}\n\nexports.TableCell = TableCell;\nexports.TableRow = TableRow;\nexports.TableBody = TableBody;\nexports.TableContainer = TableContainer;\nexports.tableId = tableId;\n\n//# sourceURL=webpack://Quill/./formats/table.js?");

        /***/
      },

      /***/"./formats/underline.js":
      /*!******************************!*\
        !*** ./formats/underline.js ***!
        \******************************/
      /*! no static exports found */
      /***/function formatsUnderlineJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _inline = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\nvar _inline2 = _interopRequireDefault(_inline);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Underline extends _inline2.default {}\nUnderline.blotName = 'underline';\nUnderline.tagName = 'U';\n\nexports.default = Underline;\n\n//# sourceURL=webpack://Quill/./formats/underline.js?");

        /***/
      },

      /***/"./formats/video.js":
      /*!**************************!*\
        !*** ./formats/video.js ***!
        \**************************/
      /*! no static exports found */
      /***/function formatsVideoJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _block = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n\nvar _link = __webpack_require__(/*! ./link */ \"./formats/link.js\");\n\nvar _link2 = _interopRequireDefault(_link);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst ATTRIBUTES = ['height', 'width'];\n\nclass Video extends _block.BlockEmbed {\n  static create(value) {\n    const node = super.create(value);\n    node.setAttribute('frameborder', '0');\n    node.setAttribute('allowfullscreen', true);\n    node.setAttribute('src', this.sanitize(value));\n    return node;\n  }\n\n  static formats(domNode) {\n    return ATTRIBUTES.reduce((formats, attribute) => {\n      if (domNode.hasAttribute(attribute)) {\n        formats[attribute] = domNode.getAttribute(attribute);\n      }\n      return formats;\n    }, {});\n  }\n\n  static sanitize(url) {\n    return _link2.default.sanitize(url); // eslint-disable-line import/no-named-as-default-member\n  }\n\n  static value(domNode) {\n    return domNode.getAttribute('src');\n  }\n\n  format(name, value) {\n    if (ATTRIBUTES.indexOf(name) > -1) {\n      if (value) {\n        this.domNode.setAttribute(name, value);\n      } else {\n        this.domNode.removeAttribute(name);\n      }\n    } else {\n      super.format(name, value);\n    }\n  }\n\n  html() {\n    var _value = this.value();\n\n    const video = _value.video;\n\n    return `<a href=\"${video}\">${video}</a>`;\n  }\n}\nVideo.blotName = 'video';\nVideo.className = 'ql-video';\nVideo.tagName = 'IFRAME';\n\nexports.default = Video;\n\n//# sourceURL=webpack://Quill/./formats/video.js?");

        /***/
      },

      /***/"./modules/clipboard.js":
      /*!******************************!*\
        !*** ./modules/clipboard.js ***!
        \******************************/
      /*! no static exports found */
      /***/function modulesClipboardJs(module, exports, __webpack_require__) {

        "use strict";

        eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.traverse = exports.matchText = exports.matchNewline = exports.matchBlot = exports.matchAttributor = exports.default = undefined;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();\n\nvar _extend = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");\n\nvar _extend2 = _interopRequireDefault(_extend);\n\nvar _quillDelta = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");\n\nvar _quillDelta2 = _interopRequireDefault(_quillDelta);\n\nvar _parchment = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");\n\nvar _quill = __webpack_require__(/*! ../core/quill */ "./core/quill.js");\n\nvar _quill2 = _interopRequireDefault(_quill);\n\nvar _logger = __webpack_require__(/*! ../core/logger */ "./core/logger.js");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nvar _module = __webpack_require__(/*! ../core/module */ "./core/module.js");\n\nvar _module2 = _interopRequireDefault(_module);\n\nvar _align = __webpack_require__(/*! ../formats/align */ "./formats/align.js");\n\nvar _background = __webpack_require__(/*! ../formats/background */ "./formats/background.js");\n\nvar _code = __webpack_require__(/*! ../formats/code */ "./formats/code.js");\n\nvar _code2 = _interopRequireDefault(_code);\n\nvar _color = __webpack_require__(/*! ../formats/color */ "./formats/color.js");\n\nvar _direction = __webpack_require__(/*! ../formats/direction */ "./formats/direction.js");\n\nvar _font = __webpack_require__(/*! ../formats/font */ "./formats/font.js");\n\nvar _size = __webpack_require__(/*! ../formats/size */ "./formats/size.js");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst debug = (0, _logger2.default)(\'quill:clipboard\');\n\nconst CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], [\'br\', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], [\'li\', matchIndent], [\'ol, ul\', matchList], [\'pre\', matchCodeBlock], [\'tr\', matchTable], [\'b\', matchAlias.bind(matchAlias, \'bold\')], [\'i\', matchAlias.bind(matchAlias, \'italic\')], [\'style\', matchIgnore]];\n\nconst ATTRIBUTE_ATTRIBUTORS = [_align.AlignAttribute, _direction.DirectionAttribute].reduce((memo, attr) => {\n  memo[attr.keyName] = attr;\n  return memo;\n}, {});\n\nconst STYLE_ATTRIBUTORS = [_align.AlignStyle, _background.BackgroundStyle, _color.ColorStyle, _direction.DirectionStyle, _font.FontStyle, _size.SizeStyle].reduce((memo, attr) => {\n  memo[attr.keyName] = attr;\n  return memo;\n}, {});\n\nclass Clipboard extends _module2.default {\n  constructor(quill, options) {\n    super(quill, options);\n    this.quill.root.addEventListener(\'copy\', e => this.onCaptureCopy(e, false));\n    this.quill.root.addEventListener(\'cut\', e => this.onCaptureCopy(e, true));\n    this.quill.root.addEventListener(\'paste\', this.onCapturePaste.bind(this));\n    this.matchers = [];\n    CLIPBOARD_CONFIG.concat(this.options.matchers).forEach(([selector, matcher]) => {\n      this.addMatcher(selector, matcher);\n    });\n  }\n\n  addMatcher(selector, matcher) {\n    this.matchers.push([selector, matcher]);\n  }\n\n  convert({ html, text }, formats = {}) {\n    if (formats[_code2.default.blotName]) {\n      return new _quillDelta2.default().insert(text, {\n        [_code2.default.blotName]: formats[_code2.default.blotName]\n      });\n    }\n    if (!html) {\n      return new _quillDelta2.default().insert(text || \'\');\n    }\n    const doc = new DOMParser().parseFromString(html, \'text/html\');\n    const container = doc.body;\n    const nodeMatches = new WeakMap();\n\n    var _prepareMatching = this.prepareMatching(container, nodeMatches),\n        _prepareMatching2 = _slicedToArray(_prepareMatching, 2);\n\n    const elementMatchers = _prepareMatching2[0],\n          textMatchers = _prepareMatching2[1];\n\n    const delta = traverse(this.quill.scroll, container, elementMatchers, textMatchers, nodeMatches);\n    // Remove trailing newline\n    if (deltaEndsWith(delta, \'\\n\') && (delta.ops[delta.ops.length - 1].attributes == null || formats.table)) {\n      return delta.compose(new _quillDelta2.default().retain(delta.length() - 1).delete(1));\n    }\n    return delta;\n  }\n\n  dangerouslyPasteHTML(index, html, source = _quill2.default.sources.API) {\n    if (typeof index === \'string\') {\n      const delta = this.convert({ html: index, text: \'\' });\n      this.quill.setContents(delta, html);\n      this.quill.setSelection(0, _quill2.default.sources.SILENT);\n    } else {\n      const paste = this.convert({ html, text: \'\' });\n      this.quill.updateContents(new _quillDelta2.default().retain(index).concat(paste), source);\n      this.quill.setSelection(index + paste.length(), _quill2.default.sources.SILENT);\n    }\n  }\n\n  onCaptureCopy(e, isCut = false) {\n    if (e.defaultPrevented) return;\n    e.preventDefault();\n\n    var _quill$selection$getR = this.quill.selection.getRange(),\n        _quill$selection$getR2 = _slicedToArray(_quill$selection$getR, 1);\n\n    const range = _quill$selection$getR2[0];\n\n    if (range == null) return;\n\n    var _onCopy = this.onCopy(range, isCut);\n\n    const html = _onCopy.html,\n          text = _onCopy.text;\n\n    e.clipboardData.setData(\'text/plain\', text);\n    e.clipboardData.setData(\'text/html\', html);\n    if (isCut) {\n      this.quill.deleteText(range, _quill2.default.sources.USER);\n    }\n  }\n\n  onCapturePaste(e) {\n    if (e.defaultPrevented || !this.quill.isEnabled()) return;\n    e.preventDefault();\n    const range = this.quill.getSelection(true);\n    if (range == null) return;\n    const html = e.clipboardData.getData(\'text/html\');\n    const text = e.clipboardData.getData(\'text/plain\');\n    const files = Array.from(e.clipboardData.files || []);\n    if (!html && files.length > 0) {\n      this.quill.uploader.upload(range, files);\n    } else {\n      this.onPaste(range, { html, text });\n    }\n  }\n\n  onCopy(range) {\n    const text = this.quill.getText(range);\n    const html = this.quill.getSemanticHTML(range);\n    return { html, text };\n  }\n\n  onPaste(range, { text, html }) {\n    const formats = this.quill.getFormat(range.index);\n    const pastedDelta = this.convert({ text, html }, formats);\n    debug.log(\'onPaste\', pastedDelta, { text, html });\n    const delta = new _quillDelta2.default().retain(range.index).delete(range.length).concat(pastedDelta);\n    this.quill.updateContents(delta, _quill2.default.sources.USER);\n    // range.length contributes to delta.length()\n    this.quill.setSelection(delta.length() - range.length, _quill2.default.sources.SILENT);\n    this.quill.scrollIntoView();\n  }\n\n  prepareMatching(container, nodeMatches) {\n    const elementMatchers = [];\n    const textMatchers = [];\n    this.matchers.forEach(pair => {\n      var _pair = _slicedToArray(pair, 2);\n\n      const selector = _pair[0],\n            matcher = _pair[1];\n\n      switch (selector) {\n        case Node.TEXT_NODE:\n          textMatchers.push(matcher);\n          break;\n        case Node.ELEMENT_NODE:\n          elementMatchers.push(matcher);\n          break;\n        default:\n          Array.from(container.querySelectorAll(selector)).forEach(node => {\n            if (nodeMatches.has(node)) {\n              const matches = nodeMatches.get(node);\n              matches.push(matcher);\n            } else {\n              nodeMatches.set(node, [matcher]);\n            }\n          });\n          break;\n      }\n    });\n    return [elementMatchers, textMatchers];\n  }\n}\nClipboard.DEFAULTS = {\n  matchers: []\n};\n\nfunction applyFormat(delta, format, value) {\n  if (typeof format === \'object\') {\n    return Object.keys(format).reduce((newDelta, key) => {\n      return applyFormat(newDelta, key, format[key]);\n    }, delta);\n  }\n  return delta.reduce((newDelta, op) => {\n    if (op.attributes && op.attributes[format]) {\n      return newDelta.push(op);\n    }\n    return newDelta.insert(op.insert, (0, _extend2.default)({}, { [format]: value }, op.attributes));\n  }, new _quillDelta2.default());\n}\n\nfunction deltaEndsWith(delta, text) {\n  let endText = \'\';\n  for (let i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i // eslint-disable-line no-plusplus\n  ) {\n    const op = delta.ops[i];\n    if (typeof op.insert !== \'string\') break;\n    endText = op.insert + endText;\n  }\n  return endText.slice(-1 * text.length) === text;\n}\n\nfunction isLine(node) {\n  if (node.childNodes.length === 0) return false; // Exclude embed blocks\n  return [\'address\', \'article\', \'blockquote\', \'canvas\', \'dd\', \'div\', \'dl\', \'dt\', \'fieldset\', \'figcaption\', \'figure\', \'footer\', \'form\', \'h1\', \'h2\', \'h3\', \'h4\', \'h5\', \'h6\', \'header\', \'iframe\', \'li\', \'main\', \'nav\', \'ol\', \'output\', \'p\', \'pre\', \'section\', \'table\', \'td\', \'tr\', \'ul\', \'video\'].includes(node.tagName.toLowerCase());\n}\n\nconst preNodes = new WeakMap();\nfunction isPre(node) {\n  if (node == null) return false;\n  if (!preNodes.has(node)) {\n    if (node.tagName === \'PRE\') {\n      preNodes.set(node, true);\n    } else {\n      preNodes.set(node, isPre(node.parentNode));\n    }\n  }\n  return preNodes.get(node);\n}\n\nfunction traverse(scroll, node, elementMatchers, textMatchers, nodeMatches) {\n  // Post-order\n  if (node.nodeType === node.TEXT_NODE) {\n    return textMatchers.reduce((delta, matcher) => {\n      return matcher(node, delta, scroll);\n    }, new _quillDelta2.default());\n  }\n  if (node.nodeType === node.ELEMENT_NODE) {\n    return Array.from(node.childNodes || []).reduce((delta, childNode) => {\n      let childrenDelta = traverse(scroll, childNode, elementMatchers, textMatchers, nodeMatches);\n      if (childNode.nodeType === node.ELEMENT_NODE) {\n        childrenDelta = elementMatchers.reduce((reducedDelta, matcher) => {\n          return matcher(childNode, reducedDelta, scroll);\n        }, childrenDelta);\n        childrenDelta = (nodeMatches.get(childNode) || []).reduce((reducedDelta, matcher) => {\n          return matcher(childNode, reducedDelta, scroll);\n        }, childrenDelta);\n      }\n      return delta.concat(childrenDelta);\n    }, new _quillDelta2.default());\n  }\n  return new _quillDelta2.default();\n}\n\nfunction matchAlias(format, node, delta) {\n  return applyFormat(delta, format, true);\n}\n\nfunction matchAttributor(node, delta, scroll) {\n  const attributes = _parchment.Attributor.keys(node);\n  const classes = _parchment.ClassAttributor.keys(node);\n  const styles = _parchment.StyleAttributor.keys(node);\n  const formats = {};\n  attributes.concat(classes).concat(styles).forEach(name => {\n    let attr = scroll.query(name, _parchment.Scope.ATTRIBUTE);\n    if (attr != null) {\n      formats[attr.attrName] = attr.value(node);\n      if (formats[attr.attrName]) return;\n    }\n    attr = ATTRIBUTE_ATTRIBUTORS[name];\n    if (attr != null && (attr.attrName === name || attr.keyName === name)) {\n      formats[attr.attrName] = attr.value(node) || undefined;\n    }\n    attr = STYLE_ATTRIBUTORS[name];\n    if (attr != null && (attr.attrName === name || attr.keyName === name)) {\n      attr = STYLE_ATTRIBUTORS[name];\n      formats[attr.attrName] = attr.value(node) || undefined;\n    }\n  });\n  if (Object.keys(formats).length > 0) {\n    return applyFormat(delta, formats);\n  }\n  return delta;\n}\n\nfunction matchBlot(node, delta, scroll) {\n  const match = scroll.query(node);\n  if (match == null) return delta;\n  if (match.prototype instanceof _parchment.EmbedBlot) {\n    const embed = {};\n    const value = match.value(node);\n    if (value != null) {\n      embed[match.blotName] = value;\n      return new _quillDelta2.default().insert(embed, match.formats(node, scroll));\n    }\n  } else {\n    if (match.prototype instanceof _parchment.BlockBlot && !deltaEndsWith(delta, \'\\n\')) {\n      delta.insert(\'\\n\');\n    }\n    if (typeof match.formats === \'function\') {\n      return applyFormat(delta, match.blotName, match.formats(node, scroll));\n    }\n  }\n  return delta;\n}\n\nfunction matchBreak(node, delta) {\n  if (!deltaEndsWith(delta, \'\\n\')) {\n    delta.insert(\'\\n\');\n  }\n  return delta;\n}\n\nfunction matchCodeBlock(node, delta, scroll) {\n  const match = scroll.query(\'code-block\');\n  const language = match ? match.formats(node, scroll) : true;\n  return applyFormat(delta, \'code-block\', language);\n}\n\nfunction matchIgnore() {\n  return new _quillDelta2.default();\n}\n\nfunction matchIndent(node, delta, scroll) {\n  const match = scroll.query(node);\n  if (match == null || match.blotName !== \'list\' || !deltaEndsWith(delta, \'\\n\')) {\n    return delta;\n  }\n  let indent = -1;\n  let parent = node.parentNode;\n  while (parent != null) {\n    if ([\'OL\', \'UL\'].includes(parent.tagName)) {\n      indent += 1;\n    }\n    parent = parent.parentNode;\n  }\n  if (indent <= 0) return delta;\n  return delta.compose(new _quillDelta2.default().retain(delta.length() - 1).retain(1, { indent }));\n}\n\nfunction matchList(node, delta) {\n  const list = node.tagName === \'OL\' ? \'ordered\' : \'bullet\';\n  return applyFormat(delta, \'list\', list);\n}\n\nfunction matchNewline(node, delta) {\n  if (!deltaEndsWith(delta, \'\\n\')) {\n    if (isLine(node) || delta.length() > 0 && node.nextSibling && isLine(node.nextSibling)) {\n      delta.insert(\'\\n\');\n    }\n  }\n  return delta;\n}\n\nfunction matchStyles(node, delta) {\n  const formats = {};\n  const style = node.style || {};\n  if (style.fontStyle === \'italic\') {\n    formats.italic = true;\n  }\n  if (style.fontWeight.startsWith(\'bold\') || parseInt(style.fontWeight, 10) >= 700) {\n    formats.bold = true;\n  }\n  if (Object.keys(formats).length > 0) {\n    delta = applyFormat(delta, formats);\n  }\n  if (parseFloat(style.textIndent || 0) > 0) {\n    // Could be 0.5in\n    return new _quillDelta2.default().insert(\'\\t\').concat(delta);\n  }\n  return delta;\n}\n\nfunction matchTable(node, delta) {\n  const table = node.parentNode.tagName === \'TABLE\' ? node.parentNode : node.parentNode.parentNode;\n  const rows = Array.from(table.querySelectorAll(\'tr\'));\n  const row = rows.indexOf(node) + 1;\n  return applyFormat(delta, \'table\', row);\n}\n\nfunction matchText(node, delta) {\n  let text = node.data;\n  // Word represents empty line with <o:p>&nbsp;</o:p>\n  if (node.parentNode.tagName === \'O:P\') {\n    return delta.insert(text.trim());\n  }\n  if (text.trim().length === 0) {\n    return delta;\n  }\n  if (!isPre(node)) {\n    const replacer = (collapse, match) => {\n      const replaced = match.replace(/[^\\u00a0]/g, \'\'); // \\u00a0 is nbsp;\n      return replaced.length < 1 && collapse ? \' \' : replaced;\n    };\n    text = text.replace(/\\r\\n/g, \' \').replace(/\\n/g, \' \');\n    text = text.replace(/\\s\\s+/g, replacer.bind(replacer, true)); // collapse whitespace\n    if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {\n      text = text.replace(/^\\s+/, replacer.bind(replacer, false));\n    }\n    if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {\n      text = text.replace(/\\s+$/, replacer.bind(replacer, false));\n    }\n  }\n  return delta.insert(text);\n}\n\nexports.default = Clipboard;\nexports.matchAttributor = matchAttributor;\nexports.matchBlot = matchBlot;\nexports.matchNewline = matchNewline;\nexports.matchText = matchText;\nexports.traverse = traverse;\n\n//# sourceURL=webpack://Quill/./modules/clipboard.js?');

        /***/
      },

      /***/"./modules/history.js":
      /*!****************************!*\
        !*** ./modules/history.js ***!
        \****************************/
      /*! no static exports found */
      /***/function modulesHistoryJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getLastChangeIndex = exports.default = undefined;\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nvar _quillDelta = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n\nvar _quillDelta2 = _interopRequireDefault(_quillDelta);\n\nvar _quill = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n\nvar _quill2 = _interopRequireDefault(_quill);\n\nvar _module = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\nvar _module2 = _interopRequireDefault(_module);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass History extends _module2.default {\n  constructor(quill, options) {\n    super(quill, options);\n    this.lastRecorded = 0;\n    this.ignoreChange = false;\n    this.clear();\n    this.quill.on(_quill2.default.events.EDITOR_CHANGE, (eventName, delta, oldDelta, source) => {\n      if (eventName !== _quill2.default.events.TEXT_CHANGE || this.ignoreChange) return;\n      if (!this.options.userOnly || source === _quill2.default.sources.USER) {\n        this.record(delta, oldDelta);\n      } else {\n        this.transform(delta);\n      }\n    });\n    this.quill.keyboard.addBinding({ key: 'z', shortKey: true }, this.undo.bind(this));\n    this.quill.keyboard.addBinding({ key: 'z', shortKey: true, shiftKey: true }, this.redo.bind(this));\n    if (/Win/i.test(navigator.platform)) {\n      this.quill.keyboard.addBinding({ key: 'y', shortKey: true }, this.redo.bind(this));\n    }\n  }\n\n  change(source, dest) {\n    if (this.stack[source].length === 0) return;\n    const delta = this.stack[source].pop();\n    this.stack[dest].push(delta);\n    this.lastRecorded = 0;\n    this.ignoreChange = true;\n    this.quill.updateContents(delta[source], _quill2.default.sources.USER);\n    this.ignoreChange = false;\n    const index = getLastChangeIndex(this.quill.scroll, delta[source]);\n    this.quill.setSelection(index);\n  }\n\n  clear() {\n    this.stack = { undo: [], redo: [] };\n  }\n\n  cutoff() {\n    this.lastRecorded = 0;\n  }\n\n  record(changeDelta, oldDelta) {\n    if (changeDelta.ops.length === 0) return;\n    this.stack.redo = [];\n    let undoDelta = guessUndoDelta(changeDelta);\n    if (undoDelta == null) {\n      undoDelta = this.quill.getContents().diff(oldDelta);\n    }\n    const timestamp = Date.now();\n    if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {\n      const delta = this.stack.undo.pop();\n      undoDelta = undoDelta.compose(delta.undo);\n      changeDelta = delta.redo.compose(changeDelta);\n    } else {\n      this.lastRecorded = timestamp;\n    }\n    this.stack.undo.push({\n      redo: changeDelta,\n      undo: undoDelta\n    });\n    if (this.stack.undo.length > this.options.maxStack) {\n      this.stack.undo.shift();\n    }\n  }\n\n  redo() {\n    this.change('redo', 'undo');\n  }\n\n  transform(delta) {\n    this.stack.undo.forEach(change => {\n      change.undo = delta.transform(change.undo, true);\n      change.redo = delta.transform(change.redo, true);\n    });\n    this.stack.redo.forEach(change => {\n      change.undo = delta.transform(change.undo, true);\n      change.redo = delta.transform(change.redo, true);\n    });\n  }\n\n  undo() {\n    this.change('undo', 'redo');\n  }\n}\nHistory.DEFAULTS = {\n  delay: 1000,\n  maxStack: 100,\n  userOnly: false\n};\n\nfunction endsWithNewlineChange(scroll, delta) {\n  const lastOp = delta.ops[delta.ops.length - 1];\n  if (lastOp == null) return false;\n  if (lastOp.insert != null) {\n    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\\n');\n  }\n  if (lastOp.attributes != null) {\n    return Object.keys(lastOp.attributes).some(attr => {\n      return scroll.query(attr, _parchment.Scope.BLOCK) != null;\n    });\n  }\n  return false;\n}\n\nfunction getLastChangeIndex(scroll, delta) {\n  const deleteLength = delta.reduce((length, op) => {\n    return length + (op.delete || 0);\n  }, 0);\n  let changeIndex = delta.length() - deleteLength;\n  if (endsWithNewlineChange(scroll, delta)) {\n    changeIndex -= 1;\n  }\n  return changeIndex;\n}\n\nfunction guessUndoDelta(delta) {\n  const undoDelta = new _quillDelta2.default();\n  let failed = false;\n  delta.forEach(op => {\n    if (op.insert) {\n      undoDelta.delete(_quillDelta.Op.length(op));\n    } else if (op.retain && op.attributes == null) {\n      undoDelta.retain(op.retain);\n    } else {\n      failed = true;\n      return false;\n    }\n    return true;\n  });\n  return failed ? null : undoDelta;\n}\n\nexports.default = History;\nexports.getLastChangeIndex = getLastChangeIndex;\n\n//# sourceURL=webpack://Quill/./modules/history.js?");

        /***/
      },

      /***/"./modules/keyboard.js":
      /*!*****************************!*\
        !*** ./modules/keyboard.js ***!
        \*****************************/
      /*! no static exports found */
      /***/function modulesKeyboardJs(module, exports, __webpack_require__) {

        "use strict";

        eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.normalize = exports.SHORTKEY = exports.default = undefined;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();\n\nvar _clone = __webpack_require__(/*! clone */ "./node_modules/clone/clone.js");\n\nvar _clone2 = _interopRequireDefault(_clone);\n\nvar _deepEqual = __webpack_require__(/*! deep-equal */ "./node_modules/deep-equal/index.js");\n\nvar _deepEqual2 = _interopRequireDefault(_deepEqual);\n\nvar _extend = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");\n\nvar _extend2 = _interopRequireDefault(_extend);\n\nvar _quillDelta = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");\n\nvar _quillDelta2 = _interopRequireDefault(_quillDelta);\n\nvar _parchment = __webpack_require__(/*! parchment */ "./node_modules/parchment/src/parchment.ts");\n\nvar _quill = __webpack_require__(/*! ../core/quill */ "./core/quill.js");\n\nvar _quill2 = _interopRequireDefault(_quill);\n\nvar _logger = __webpack_require__(/*! ../core/logger */ "./core/logger.js");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nvar _module = __webpack_require__(/*! ../core/module */ "./core/module.js");\n\nvar _module2 = _interopRequireDefault(_module);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst debug = (0, _logger2.default)(\'quill:keyboard\');\n\nconst SHORTKEY = /Mac/i.test(navigator.platform) ? \'metaKey\' : \'ctrlKey\';\n\nclass Keyboard extends _module2.default {\n  static match(evt, binding) {\n    if ([\'altKey\', \'ctrlKey\', \'metaKey\', \'shiftKey\'].some(key => {\n      return !!binding[key] !== evt[key] && binding[key] !== null;\n    })) {\n      return false;\n    }\n    return binding.key === evt.key || binding.key === evt.which;\n  }\n\n  constructor(quill, options) {\n    super(quill, options);\n    this.bindings = {};\n    Object.keys(this.options.bindings).forEach(name => {\n      if (this.options.bindings[name]) {\n        this.addBinding(this.options.bindings[name]);\n      }\n    });\n    this.addBinding({ key: \'Enter\', shiftKey: null }, handleEnter);\n    this.addBinding({ key: \'Enter\', metaKey: null, ctrlKey: null, altKey: null }, () => {});\n    if (/Firefox/i.test(navigator.userAgent)) {\n      // Need to handle delete and backspace for Firefox in the general case #1171\n      this.addBinding({ key: \'Backspace\' }, { collapsed: true }, handleBackspace);\n      this.addBinding({ key: \'Delete\' }, { collapsed: true }, handleDelete);\n    } else {\n      this.addBinding({ key: \'Backspace\' }, { collapsed: true, prefix: /^.?$/ }, handleBackspace);\n      this.addBinding({ key: \'Delete\' }, { collapsed: true, suffix: /^.?$/ }, handleDelete);\n    }\n    this.addBinding({ key: \'Backspace\' }, { collapsed: false }, handleDeleteRange);\n    this.addBinding({ key: \'Delete\' }, { collapsed: false }, handleDeleteRange);\n    this.addBinding({\n      key: \'Backspace\',\n      altKey: null,\n      ctrlKey: null,\n      metaKey: null,\n      shiftKey: null\n    }, { collapsed: true, offset: 0 }, handleBackspace);\n    this.listen();\n  }\n\n  addBinding(keyBinding, context = {}, handler = {}) {\n    const binding = normalize(keyBinding);\n    if (binding == null) {\n      debug.warn(\'Attempted to add invalid keyboard binding\', binding);\n      return;\n    }\n    if (typeof context === \'function\') {\n      context = { handler: context };\n    }\n    if (typeof handler === \'function\') {\n      handler = { handler };\n    }\n    const keys = Array.isArray(binding.key) ? binding.key : [binding.key];\n    keys.forEach(key => {\n      const singleBinding = (0, _extend2.default)({}, binding, { key }, context, handler);\n      this.bindings[singleBinding.key] = this.bindings[singleBinding.key] || [];\n      this.bindings[singleBinding.key].push(singleBinding);\n    });\n  }\n\n  listen() {\n    this.quill.root.addEventListener(\'keydown\', evt => {\n      if (evt.defaultPrevented) return;\n      const bindings = (this.bindings[evt.key] || []).concat(this.bindings[evt.which] || []);\n      const matches = bindings.filter(binding => Keyboard.match(evt, binding));\n      if (matches.length === 0) return;\n      const range = this.quill.getSelection();\n      if (range == null || !this.quill.hasFocus()) return;\n\n      var _quill$getLine = this.quill.getLine(range.index),\n          _quill$getLine2 = _slicedToArray(_quill$getLine, 2);\n\n      const line = _quill$getLine2[0],\n            offset = _quill$getLine2[1];\n\n      var _quill$getLeaf = this.quill.getLeaf(range.index),\n          _quill$getLeaf2 = _slicedToArray(_quill$getLeaf, 2);\n\n      const leafStart = _quill$getLeaf2[0],\n            offsetStart = _quill$getLeaf2[1];\n\n      var _ref = range.length === 0 ? [leafStart, offsetStart] : this.quill.getLeaf(range.index + range.length),\n          _ref2 = _slicedToArray(_ref, 2);\n\n      const leafEnd = _ref2[0],\n            offsetEnd = _ref2[1];\n\n      const prefixText = leafStart instanceof _parchment.TextBlot ? leafStart.value().slice(0, offsetStart) : \'\';\n      const suffixText = leafEnd instanceof _parchment.TextBlot ? leafEnd.value().slice(offsetEnd) : \'\';\n      const curContext = {\n        collapsed: range.length === 0,\n        empty: range.length === 0 && line.length() <= 1,\n        format: this.quill.getFormat(range),\n        line,\n        offset,\n        prefix: prefixText,\n        suffix: suffixText,\n        event: evt\n      };\n      const prevented = matches.some(binding => {\n        if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) {\n          return false;\n        }\n        if (binding.empty != null && binding.empty !== curContext.empty) {\n          return false;\n        }\n        if (binding.offset != null && binding.offset !== curContext.offset) {\n          return false;\n        }\n        if (Array.isArray(binding.format)) {\n          // any format is present\n          if (binding.format.every(name => curContext.format[name] == null)) {\n            return false;\n          }\n        } else if (typeof binding.format === \'object\') {\n          // all formats must match\n          if (!Object.keys(binding.format).every(name => {\n            if (binding.format[name] === true) return curContext.format[name] != null;\n            if (binding.format[name] === false) return curContext.format[name] == null;\n            return (0, _deepEqual2.default)(binding.format[name], curContext.format[name]);\n          })) {\n            return false;\n          }\n        }\n        if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) {\n          return false;\n        }\n        if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) {\n          return false;\n        }\n        return binding.handler.call(this, range, curContext, binding) !== true;\n      });\n      if (prevented) {\n        evt.preventDefault();\n      }\n    });\n  }\n}\n\nKeyboard.DEFAULTS = {\n  bindings: {\n    bold: makeFormatHandler(\'bold\'),\n    italic: makeFormatHandler(\'italic\'),\n    underline: makeFormatHandler(\'underline\'),\n    indent: {\n      // highlight tab or tab at beginning of list, indent or blockquote\n      key: \'Tab\',\n      format: [\'blockquote\', \'indent\', \'list\'],\n      handler(range, context) {\n        if (context.collapsed && context.offset !== 0) return true;\n        this.quill.format(\'indent\', \'+1\', _quill2.default.sources.USER);\n        return false;\n      }\n    },\n    outdent: {\n      key: \'Tab\',\n      shiftKey: true,\n      format: [\'blockquote\', \'indent\', \'list\'],\n      // highlight tab or tab at beginning of list, indent or blockquote\n      handler(range, context) {\n        if (context.collapsed && context.offset !== 0) return true;\n        this.quill.format(\'indent\', \'-1\', _quill2.default.sources.USER);\n        return false;\n      }\n    },\n    \'outdent backspace\': {\n      key: \'Backspace\',\n      collapsed: true,\n      shiftKey: null,\n      metaKey: null,\n      ctrlKey: null,\n      altKey: null,\n      format: [\'indent\', \'list\'],\n      offset: 0,\n      handler(range, context) {\n        if (context.format.indent != null) {\n          this.quill.format(\'indent\', \'-1\', _quill2.default.sources.USER);\n        } else if (context.format.list != null) {\n          this.quill.format(\'list\', false, _quill2.default.sources.USER);\n        }\n      }\n    },\n    \'indent code-block\': makeCodeBlockHandler(true),\n    \'outdent code-block\': makeCodeBlockHandler(false),\n    \'remove tab\': {\n      key: \'Tab\',\n      shiftKey: true,\n      collapsed: true,\n      prefix: /\\t$/,\n      handler(range) {\n        this.quill.deleteText(range.index - 1, 1, _quill2.default.sources.USER);\n      }\n    },\n    tab: {\n      key: \'Tab\',\n      handler(range, context) {\n        if (context.format.table) return true;\n        this.quill.history.cutoff();\n        const delta = new _quillDelta2.default().retain(range.index).delete(range.length).insert(\'\\t\');\n        this.quill.updateContents(delta, _quill2.default.sources.USER);\n        this.quill.history.cutoff();\n        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);\n        return false;\n      }\n    },\n    \'blockquote empty enter\': {\n      key: \'Enter\',\n      collapsed: true,\n      format: [\'blockquote\'],\n      empty: true,\n      handler() {\n        this.quill.format(\'blockquote\', false, _quill2.default.sources.USER);\n      }\n    },\n    \'list empty enter\': {\n      key: \'Enter\',\n      collapsed: true,\n      format: [\'list\'],\n      empty: true,\n      handler(range, context) {\n        const formats = { list: false };\n        if (context.format.indent) {\n          formats.indent = false;\n        }\n        this.quill.formatLine(range.index, range.length, formats, _quill2.default.sources.USER);\n      }\n    },\n    \'checklist enter\': {\n      key: \'Enter\',\n      collapsed: true,\n      format: { list: \'checked\' },\n      handler(range) {\n        var _quill$getLine3 = this.quill.getLine(range.index),\n            _quill$getLine4 = _slicedToArray(_quill$getLine3, 2);\n\n        const line = _quill$getLine4[0],\n              offset = _quill$getLine4[1];\n\n        const formats = (0, _extend2.default)({}, line.formats(), { list: \'checked\' });\n        const delta = new _quillDelta2.default().retain(range.index).insert(\'\\n\', formats).retain(line.length() - offset - 1).retain(1, { list: \'unchecked\' });\n        this.quill.updateContents(delta, _quill2.default.sources.USER);\n        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);\n        this.quill.scrollIntoView();\n      }\n    },\n    \'header enter\': {\n      key: \'Enter\',\n      collapsed: true,\n      format: [\'header\'],\n      suffix: /^$/,\n      handler(range, context) {\n        var _quill$getLine5 = this.quill.getLine(range.index),\n            _quill$getLine6 = _slicedToArray(_quill$getLine5, 2);\n\n        const line = _quill$getLine6[0],\n              offset = _quill$getLine6[1];\n\n        const delta = new _quillDelta2.default().retain(range.index).insert(\'\\n\', context.format).retain(line.length() - offset - 1).retain(1, { header: null });\n        this.quill.updateContents(delta, _quill2.default.sources.USER);\n        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);\n        this.quill.scrollIntoView();\n      }\n    },\n    \'table backspace\': {\n      key: \'Backspace\',\n      format: [\'table\'],\n      collapsed: true,\n      offset: 0,\n      handler() {}\n    },\n    \'table delete\': {\n      key: \'Delete\',\n      format: [\'table\'],\n      collapsed: true,\n      suffix: /^$/,\n      handler() {}\n    },\n    \'table enter\': {\n      key: \'Enter\',\n      shiftKey: null,\n      format: [\'table\'],\n      handler(range) {\n        const module = this.quill.getModule(\'table\');\n        if (module) {\n          var _module$getTable = module.getTable(range),\n              _module$getTable2 = _slicedToArray(_module$getTable, 4);\n\n          const table = _module$getTable2[0],\n                row = _module$getTable2[1],\n                cell = _module$getTable2[2],\n                offset = _module$getTable2[3];\n\n          const shift = tableSide(table, row, cell, offset);\n          if (shift == null) return;\n          let index = table.offset();\n          if (shift < 0) {\n            const delta = new _quillDelta2.default().retain(index).insert(\'\\n\');\n            this.quill.updateContents(delta, _quill2.default.sources.USER);\n            this.quill.setSelection(range.index + 1, range.length, _quill2.default.sources.SILENT);\n          } else if (shift > 0) {\n            index += table.length();\n            const delta = new _quillDelta2.default().retain(index).insert(\'\\n\');\n            this.quill.updateContents(delta, _quill2.default.sources.USER);\n            this.quill.setSelection(index, _quill2.default.sources.USER);\n          }\n        }\n      }\n    },\n    \'table tab\': {\n      key: \'Tab\',\n      shiftKey: null,\n      format: [\'table\'],\n      handler(range, context) {\n        const event = context.event,\n              cell = context.line;\n\n        const offset = cell.offset(this.quill.scroll);\n        if (event.shiftKey) {\n          this.quill.setSelection(offset - 1, _quill2.default.sources.USER);\n        } else {\n          this.quill.setSelection(offset + cell.length(), _quill2.default.sources.USER);\n        }\n      }\n    },\n    \'list autofill\': {\n      key: \' \',\n      shiftKey: null,\n      collapsed: true,\n      format: {\n        list: false,\n        \'code-block\': false,\n        blockquote: false,\n        header: false,\n        table: false\n      },\n      prefix: /^\\s*?(\\d+\\.|-|\\*|\\[ ?\\]|\\[x\\])$/,\n      handler(range, context) {\n        if (this.quill.scroll.query(\'list\') == null) return true;\n        const length = context.prefix.length;\n\n        var _quill$getLine7 = this.quill.getLine(range.index),\n            _quill$getLine8 = _slicedToArray(_quill$getLine7, 2);\n\n        const line = _quill$getLine8[0],\n              offset = _quill$getLine8[1];\n\n        if (offset > length) return true;\n        let value;\n        switch (context.prefix.trim()) {\n          case \'[]\':\n          case \'[ ]\':\n            value = \'unchecked\';\n            break;\n          case \'[x]\':\n            value = \'checked\';\n            break;\n          case \'-\':\n          case \'*\':\n            value = \'bullet\';\n            break;\n          default:\n            value = \'ordered\';\n        }\n        this.quill.insertText(range.index, \' \', _quill2.default.sources.USER);\n        this.quill.history.cutoff();\n        const delta = new _quillDelta2.default().retain(range.index - offset).delete(length + 1).retain(line.length() - 2 - offset).retain(1, { list: value });\n        this.quill.updateContents(delta, _quill2.default.sources.USER);\n        this.quill.history.cutoff();\n        this.quill.setSelection(range.index - length, _quill2.default.sources.SILENT);\n        return false;\n      }\n    },\n    \'code exit\': {\n      key: \'Enter\',\n      collapsed: true,\n      format: [\'code-block\'],\n      prefix: /^$/,\n      suffix: /^\\s*$/,\n      handler(range) {\n        var _quill$getLine9 = this.quill.getLine(range.index),\n            _quill$getLine10 = _slicedToArray(_quill$getLine9, 2);\n\n        const line = _quill$getLine10[0],\n              offset = _quill$getLine10[1];\n\n        let numLines = 2;\n        let cur = line;\n        while (cur != null && cur.length() <= 1 && cur.formats()[\'code-block\']) {\n          cur = cur.prev;\n          numLines -= 1;\n          // Requisite prev lines are empty\n          if (numLines <= 0) {\n            const delta = new _quillDelta2.default().retain(range.index + line.length() - offset - 2).retain(1, { \'code-block\': null }).delete(1);\n            this.quill.updateContents(delta, _quill2.default.sources.USER);\n            this.quill.setSelection(range.index - 1, _quill2.default.sources.SILENT);\n            return false;\n          }\n        }\n        return true;\n      }\n    },\n    \'embed left\': makeEmbedArrowHandler(\'ArrowLeft\', false),\n    \'embed left shift\': makeEmbedArrowHandler(\'ArrowLeft\', true),\n    \'embed right\': makeEmbedArrowHandler(\'ArrowRight\', false),\n    \'embed right shift\': makeEmbedArrowHandler(\'ArrowRight\', true),\n    \'table down\': makeTableArrowHandler(false),\n    \'table up\': makeTableArrowHandler(true)\n  }\n};\n\nfunction handleBackspace(range, context) {\n  if (range.index === 0 || this.quill.getLength() <= 1) return;\n\n  var _quill$getLine11 = this.quill.getLine(range.index),\n      _quill$getLine12 = _slicedToArray(_quill$getLine11, 1);\n\n  const line = _quill$getLine12[0];\n\n  let formats = {};\n  if (context.offset === 0) {\n    var _quill$getLine13 = this.quill.getLine(range.index - 1),\n        _quill$getLine14 = _slicedToArray(_quill$getLine13, 1);\n\n    const prev = _quill$getLine14[0];\n\n    if (prev != null) {\n      if (prev.length() > 1 || prev.statics.blotName === \'table\') {\n        const curFormats = line.formats();\n        const prevFormats = this.quill.getFormat(range.index - 1, 1);\n        formats = _quillDelta.AttributeMap.diff(curFormats, prevFormats) || {};\n      }\n    }\n  }\n  // Check for astral symbols\n  const length = /[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]$/.test(context.prefix) ? 2 : 1;\n  this.quill.deleteText(range.index - length, length, _quill2.default.sources.USER);\n  if (Object.keys(formats).length > 0) {\n    this.quill.formatLine(range.index - length, length, formats, _quill2.default.sources.USER);\n  }\n  this.quill.focus();\n}\n\nfunction handleDelete(range, context) {\n  // Check for astral symbols\n  const length = /^[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/.test(context.suffix) ? 2 : 1;\n  if (range.index >= this.quill.getLength() - length) return;\n  let formats = {};\n  let nextLength = 0;\n\n  var _quill$getLine15 = this.quill.getLine(range.index),\n      _quill$getLine16 = _slicedToArray(_quill$getLine15, 1);\n\n  const line = _quill$getLine16[0];\n\n  if (context.offset >= line.length() - 1) {\n    var _quill$getLine17 = this.quill.getLine(range.index + 1),\n        _quill$getLine18 = _slicedToArray(_quill$getLine17, 1);\n\n    const next = _quill$getLine18[0];\n\n    if (next) {\n      const curFormats = line.formats();\n      const nextFormats = this.quill.getFormat(range.index, 1);\n      formats = _quillDelta.AttributeMap.diff(curFormats, nextFormats) || {};\n      nextLength = next.length();\n    }\n  }\n  this.quill.deleteText(range.index, length, _quill2.default.sources.USER);\n  if (Object.keys(formats).length > 0) {\n    this.quill.formatLine(range.index + nextLength - 1, length, formats, _quill2.default.sources.USER);\n  }\n}\n\nfunction handleDeleteRange(range) {\n  const lines = this.quill.getLines(range);\n  let formats = {};\n  if (lines.length > 1) {\n    const firstFormats = lines[0].formats();\n    const lastFormats = lines[lines.length - 1].formats();\n    formats = _quillDelta.AttributeMap.diff(lastFormats, firstFormats) || {};\n  }\n  this.quill.deleteText(range, _quill2.default.sources.USER);\n  if (Object.keys(formats).length > 0) {\n    this.quill.formatLine(range.index, 1, formats, _quill2.default.sources.USER);\n  }\n  this.quill.setSelection(range.index, _quill2.default.sources.SILENT);\n  this.quill.focus();\n}\n\n// TODO use just updateContents()\nfunction handleEnter(range, context) {\n  if (range.length > 0) {\n    this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change\n  }\n  const lineFormats = Object.keys(context.format).reduce((formats, format) => {\n    if (this.quill.scroll.query(format, _parchment.Scope.BLOCK) && !Array.isArray(context.format[format])) {\n      formats[format] = context.format[format];\n    }\n    return formats;\n  }, {});\n  this.quill.insertText(range.index, \'\\n\', lineFormats, _quill2.default.sources.USER);\n  // Earlier scroll.deleteAt might have messed up our selection,\n  // so insertText\'s built in selection preservation is not reliable\n  this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);\n  this.quill.focus();\n  Object.keys(context.format).forEach(name => {\n    if (lineFormats[name] != null) return;\n    if (Array.isArray(context.format[name])) return;\n    if (name === \'link\') return;\n    this.quill.format(name, context.format[name], _quill2.default.sources.USER);\n  });\n}\n\nfunction makeCodeBlockHandler(indent) {\n  return {\n    key: \'Tab\',\n    shiftKey: !indent,\n    format: { \'code-block\': true },\n    handler(range) {\n      const CodeBlock = this.quill.scroll.query(\'code-block\');\n      const lines = range.length === 0 ? this.quill.getLines(range.index, 1) : this.quill.getLines(range);\n      let index = range.index,\n          length = range.length;\n\n      lines.forEach((line, i) => {\n        if (indent) {\n          line.insertAt(0, CodeBlock.TAB);\n          if (i === 0) {\n            index += CodeBlock.TAB.length;\n          } else {\n            length += CodeBlock.TAB.length;\n          }\n        } else if (line.domNode.textContent.startsWith(CodeBlock.TAB)) {\n          line.deleteAt(0, CodeBlock.TAB.length);\n          if (i === 0) {\n            index -= CodeBlock.TAB.length;\n          } else {\n            length -= CodeBlock.TAB.length;\n          }\n        }\n      });\n      this.quill.update(_quill2.default.sources.USER);\n      this.quill.setSelection(index, length, _quill2.default.sources.SILENT);\n    }\n  };\n}\n\nfunction makeEmbedArrowHandler(key, shiftKey) {\n  const where = key === \'ArrowLeft\' ? \'prefix\' : \'suffix\';\n  return {\n    key,\n    shiftKey,\n    altKey: null,\n    [where]: /^$/,\n    handler(range) {\n      let index = range.index;\n\n      if (key === \'ArrowRight\') {\n        index += range.length + 1;\n      }\n\n      var _quill$getLeaf3 = this.quill.getLeaf(index),\n          _quill$getLeaf4 = _slicedToArray(_quill$getLeaf3, 1);\n\n      const leaf = _quill$getLeaf4[0];\n\n      if (!(leaf instanceof _parchment.EmbedBlot)) return true;\n      if (key === \'ArrowLeft\') {\n        if (shiftKey) {\n          this.quill.setSelection(range.index - 1, range.length + 1, _quill2.default.sources.USER);\n        } else {\n          this.quill.setSelection(range.index - 1, _quill2.default.sources.USER);\n        }\n      } else if (shiftKey) {\n        this.quill.setSelection(range.index, range.length + 1, _quill2.default.sources.USER);\n      } else {\n        this.quill.setSelection(range.index + range.length + 1, _quill2.default.sources.USER);\n      }\n      return false;\n    }\n  };\n}\n\nfunction makeFormatHandler(format) {\n  return {\n    key: format[0],\n    shortKey: true,\n    handler(range, context) {\n      this.quill.format(format, !context.format[format], _quill2.default.sources.USER);\n    }\n  };\n}\n\nfunction makeTableArrowHandler(up) {\n  return {\n    key: up ? \'ArrowUp\' : \'ArrowDown\',\n    collapsed: true,\n    format: [\'table\'],\n    handler(range, context) {\n      // TODO move to table module\n      const key = up ? \'prev\' : \'next\';\n      const cell = context.line;\n      const targetRow = cell.parent[key];\n      if (targetRow != null) {\n        if (targetRow.statics.blotName === \'table-row\') {\n          let targetCell = targetRow.children.head;\n          let cur = cell;\n          while (cur.prev != null) {\n            cur = cur.prev;\n            targetCell = targetCell.next;\n          }\n          const index = targetCell.offset(this.quill.scroll) + Math.min(context.offset, targetCell.length() - 1);\n          this.quill.setSelection(index, 0, _quill2.default.sources.USER);\n        }\n      } else {\n        const targetLine = cell.table()[key];\n        if (targetLine != null) {\n          if (up) {\n            this.quill.setSelection(targetLine.offset(this.quill.scroll) + targetLine.length() - 1, 0, _quill2.default.sources.USER);\n          } else {\n            this.quill.setSelection(targetLine.offset(this.quill.scroll), 0, _quill2.default.sources.USER);\n          }\n        }\n      }\n      return false;\n    }\n  };\n}\n\nfunction normalize(binding) {\n  if (typeof binding === \'string\' || typeof binding === \'number\') {\n    binding = { key: binding };\n  } else if (typeof binding === \'object\') {\n    binding = (0, _clone2.default)(binding, false);\n  } else {\n    return null;\n  }\n  if (binding.shortKey) {\n    binding[SHORTKEY] = binding.shortKey;\n    delete binding.shortKey;\n  }\n  return binding;\n}\n\nfunction tableSide(table, row, cell, offset) {\n  if (row.prev == null && row.next == null) {\n    if (cell.prev == null && cell.next == null) {\n      return offset === 0 ? -1 : 1;\n    }\n    return cell.prev == null ? -1 : 1;\n  }\n  if (row.prev == null) {\n    return -1;\n  }\n  if (row.next == null) {\n    return 1;\n  }\n  return null;\n}\n\nexports.default = Keyboard;\nexports.SHORTKEY = SHORTKEY;\nexports.normalize = normalize;\n\n//# sourceURL=webpack://Quill/./modules/keyboard.js?');

        /***/
      },

      /***/"./modules/syntax.js":
      /*!***************************!*\
        !*** ./modules/syntax.js ***!
        \***************************/
      /*! no static exports found */
      /***/function modulesSyntaxJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.CodeToken = exports.CodeBlock = undefined;\n\nvar _quillDelta = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n\nvar _quillDelta2 = _interopRequireDefault(_quillDelta);\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nvar _inline = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\nvar _inline2 = _interopRequireDefault(_inline);\n\nvar _quill = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n\nvar _quill2 = _interopRequireDefault(_quill);\n\nvar _module = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\nvar _module2 = _interopRequireDefault(_module);\n\nvar _block = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n\nvar _break = __webpack_require__(/*! ../blots/break */ \"./blots/break.js\");\n\nvar _break2 = _interopRequireDefault(_break);\n\nvar _cursor = __webpack_require__(/*! ../blots/cursor */ \"./blots/cursor.js\");\n\nvar _cursor2 = _interopRequireDefault(_cursor);\n\nvar _text = __webpack_require__(/*! ../blots/text */ \"./blots/text.js\");\n\nvar _text2 = _interopRequireDefault(_text);\n\nvar _code = __webpack_require__(/*! ../formats/code */ \"./formats/code.js\");\n\nvar _code2 = _interopRequireDefault(_code);\n\nvar _clipboard = __webpack_require__(/*! ./clipboard */ \"./modules/clipboard.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst TokenAttributor = new _parchment.ClassAttributor('code-token', 'hljs', {\n  scope: _parchment.Scope.INLINE\n});\nclass CodeToken extends _inline2.default {\n  static formats(node, scroll) {\n    while (node != null && node !== scroll.domNode) {\n      if (node.classList.contains(_code2.default.className)) {\n        return super.formats(node, scroll);\n      }\n      node = node.parentNode;\n    }\n    return undefined;\n  }\n\n  constructor(scroll, domNode, value) {\n    super(scroll, domNode, value);\n    TokenAttributor.add(this.domNode, value);\n  }\n\n  format(format, value) {\n    if (format !== CodeToken.blotName) {\n      super.format(format, value);\n    } else if (value) {\n      TokenAttributor.add(this.domNode, value);\n    } else {\n      TokenAttributor.remove(this.domNode);\n      this.domNode.classList.remove(this.statics.className);\n    }\n  }\n\n  optimize(...args) {\n    super.optimize(...args);\n    if (!TokenAttributor.value(this.domNode)) {\n      this.unwrap();\n    }\n  }\n}\nCodeToken.blotName = 'code-token';\nCodeToken.className = 'ql-token';\n\nclass SyntaxCodeBlock extends _code2.default {\n  static create(value) {\n    const domNode = super.create(value);\n    if (typeof value === 'string') {\n      domNode.setAttribute('data-language', value);\n    }\n    return domNode;\n  }\n\n  static formats(domNode) {\n    return domNode.getAttribute('data-language') || 'plain';\n  }\n\n  static register() {} // Syntax module will register\n\n  format(name, value) {\n    if (name === this.statics.blotName && value) {\n      this.domNode.setAttribute('data-language', value);\n    } else {\n      super.format(name, value);\n    }\n  }\n\n  replaceWith(name, value) {\n    this.formatAt(0, this.length(), CodeToken.blotName, false);\n    return super.replaceWith(name, value);\n  }\n}\n\nclass SyntaxCodeBlockContainer extends _code.CodeBlockContainer {\n  attach() {\n    super.attach();\n    this.forceNext = false;\n    this.scroll.emitMount(this);\n  }\n\n  format(name, value) {\n    if (name === SyntaxCodeBlock.blotName) {\n      this.forceNext = true;\n      this.children.forEach(child => {\n        child.format(name, value);\n      });\n    }\n  }\n\n  formatAt(index, length, name, value) {\n    if (name === SyntaxCodeBlock.blotName) {\n      this.forceNext = true;\n    }\n    super.formatAt(index, length, name, value);\n  }\n\n  highlight(highlight, forced = false) {\n    if (this.children.head == null) return;\n    const nodes = Array.from(this.domNode.childNodes).filter(node => node !== this.uiNode);\n    const text = `${nodes.map(node => node.textContent).join('\\n')}\\n`;\n    const language = SyntaxCodeBlock.formats(this.children.head.domNode);\n    if (forced || this.forceNext || this.cachedText !== text) {\n      if (text.trim().length > 0 || this.cachedText == null) {\n        const oldDelta = this.children.reduce((delta, child) => {\n          return delta.concat((0, _block.blockDelta)(child));\n        }, new _quillDelta2.default());\n        const delta = highlight(text, language);\n        oldDelta.diff(delta).reduce((index, { retain, attributes }) => {\n          // Should be all retains\n          if (!retain) return index;\n          if (attributes) {\n            Object.keys(attributes).forEach(format => {\n              if ([SyntaxCodeBlock.blotName, CodeToken.blotName].includes(format)) {\n                this.formatAt(index, retain, format, attributes[format]);\n              }\n            });\n          }\n          return index + retain;\n        }, 0);\n      }\n      this.cachedText = text;\n      this.forceNext = false;\n    }\n  }\n\n  optimize(context) {\n    super.optimize(context);\n    if (this.parent != null && this.children.head != null && this.uiNode != null) {\n      const language = SyntaxCodeBlock.formats(this.children.head.domNode);\n      if (language !== this.uiNode.value) {\n        this.uiNode.value = language;\n      }\n    }\n  }\n}\nSyntaxCodeBlockContainer.allowedChildren = [SyntaxCodeBlock];\nSyntaxCodeBlock.requiredContainer = SyntaxCodeBlockContainer;\nSyntaxCodeBlock.allowedChildren = [CodeToken, _cursor2.default, _text2.default, _break2.default];\n\nclass Syntax extends _module2.default {\n  static register() {\n    _quill2.default.register(CodeToken, true);\n    _quill2.default.register(SyntaxCodeBlock, true);\n    _quill2.default.register(SyntaxCodeBlockContainer, true);\n  }\n\n  constructor(quill, options) {\n    super(quill, options);\n    if (this.options.hljs == null) {\n      throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');\n    }\n    this.highlightBlot = this.highlightBlot.bind(this);\n    this.initListener();\n    this.initTimer();\n  }\n\n  initListener() {\n    this.quill.on(_quill2.default.events.SCROLL_BLOT_MOUNT, blot => {\n      if (!(blot instanceof SyntaxCodeBlockContainer)) return;\n      const select = this.quill.root.ownerDocument.createElement('select');\n      this.options.languages.forEach(({ key, label }) => {\n        const option = select.ownerDocument.createElement('option');\n        option.textContent = label;\n        option.setAttribute('value', key);\n        select.appendChild(option);\n      });\n      select.addEventListener('change', () => {\n        blot.format(SyntaxCodeBlock.blotName, select.value);\n        this.quill.root.focus(); // Prevent scrolling\n        this.highlight(blot, true);\n      });\n      if (blot.uiNode == null) {\n        blot.attachUI(select);\n        if (blot.children.head) {\n          select.value = SyntaxCodeBlock.formats(blot.children.head.domNode);\n        }\n      }\n    });\n  }\n\n  initTimer() {\n    let timer = null;\n    this.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, () => {\n      clearTimeout(timer);\n      timer = setTimeout(() => {\n        this.highlight();\n        timer = null;\n      }, this.options.interval);\n    });\n  }\n\n  highlight(blot = null, force = false) {\n    if (this.quill.selection.composing) return;\n    this.quill.update(_quill2.default.sources.USER);\n    const range = this.quill.getSelection();\n    const blots = blot == null ? this.quill.scroll.descendants(SyntaxCodeBlockContainer) : [blot];\n    blots.forEach(container => {\n      container.highlight(this.highlightBlot, force);\n    });\n    this.quill.update(_quill2.default.sources.SILENT);\n    if (range != null) {\n      this.quill.setSelection(range, _quill2.default.sources.SILENT);\n    }\n  }\n\n  highlightBlot(text, language = 'plain') {\n    if (language === 'plain') {\n      return (0, _text.escapeText)(text).split('\\n').reduce((delta, line, i) => {\n        if (i !== 0) {\n          delta.insert('\\n', { [_code2.default.blotName]: language });\n        }\n        return delta.insert(line);\n      }, new _quillDelta2.default());\n    }\n    const container = this.quill.root.ownerDocument.createElement('div');\n    container.classList.add(_code2.default.className);\n    container.innerHTML = this.options.hljs.highlight(language, text).value;\n    return (0, _clipboard.traverse)(this.quill.scroll, container, [(node, delta) => {\n      const value = TokenAttributor.value(node);\n      if (value) {\n        return delta.compose(new _quillDelta2.default().retain(delta.length(), {\n          [CodeToken.blotName]: value\n        }));\n      }\n      return delta;\n    }], [(node, delta) => {\n      return node.data.split('\\n').reduce((memo, nodeText, i) => {\n        if (i !== 0) memo.insert('\\n', { [_code2.default.blotName]: language });\n        return memo.insert(nodeText);\n      }, delta);\n    }], new WeakMap());\n  }\n}\nSyntax.DEFAULTS = {\n  hljs: (() => {\n    return window.hljs;\n  })(),\n  interval: 1000,\n  languages: [{ key: 'plain', label: 'Plain' }, { key: 'bash', label: 'Bash' }, { key: 'cpp', label: 'C++' }, { key: 'cs', label: 'C#' }, { key: 'css', label: 'CSS' }, { key: 'diff', label: 'Diff' }, { key: 'xml', label: 'HTML/XML' }, { key: 'java', label: 'Java' }, { key: 'javascript', label: 'Javascript' }, { key: 'markdown', label: 'Markdown' }, { key: 'php', label: 'PHP' }, { key: 'python', label: 'Python' }, { key: 'ruby', label: 'Ruby' }, { key: 'sql', label: 'SQL' }]\n};\n\nexports.CodeBlock = SyntaxCodeBlock;\nexports.CodeToken = CodeToken;\nexports.default = Syntax;\n\n//# sourceURL=webpack://Quill/./modules/syntax.js?");

        /***/
      },

      /***/"./modules/table.js":
      /*!**************************!*\
        !*** ./modules/table.js ***!
        \**************************/
      /*! no static exports found */
      /***/function modulesTableJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _quillDelta = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n\nvar _quillDelta2 = _interopRequireDefault(_quillDelta);\n\nvar _quill = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n\nvar _quill2 = _interopRequireDefault(_quill);\n\nvar _module = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\nvar _module2 = _interopRequireDefault(_module);\n\nvar _table = __webpack_require__(/*! ../formats/table */ \"./formats/table.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Table extends _module2.default {\n  static register() {\n    _quill2.default.register(_table.TableCell);\n    _quill2.default.register(_table.TableRow);\n    _quill2.default.register(_table.TableBody);\n    _quill2.default.register(_table.TableContainer);\n  }\n\n  constructor(...args) {\n    super(...args);\n    this.listenBalanceCells();\n  }\n\n  balanceTables() {\n    this.quill.scroll.descendants(_table.TableContainer).forEach(table => {\n      table.balanceCells();\n    });\n  }\n\n  deleteColumn() {\n    var _getTable = this.getTable(),\n        _getTable2 = _slicedToArray(_getTable, 3);\n\n    const table = _getTable2[0],\n          cell = _getTable2[2];\n\n    if (cell == null) return;\n    table.deleteColumn(cell.cellOffset());\n    this.quill.update(_quill2.default.sources.USER);\n  }\n\n  deleteRow() {\n    var _getTable3 = this.getTable(),\n        _getTable4 = _slicedToArray(_getTable3, 2);\n\n    const row = _getTable4[1];\n\n    if (row == null) return;\n    row.remove();\n    this.quill.update(_quill2.default.sources.USER);\n  }\n\n  deleteTable() {\n    var _getTable5 = this.getTable(),\n        _getTable6 = _slicedToArray(_getTable5, 1);\n\n    const table = _getTable6[0];\n\n    if (table == null) return;\n    const offset = table.offset();\n    table.remove();\n    this.quill.update(_quill2.default.sources.USER);\n    this.quill.setSelection(offset, _quill2.default.sources.SILENT);\n  }\n\n  getTable(range = this.quill.getSelection()) {\n    if (range == null) return [null, null, null, -1];\n\n    var _quill$getLine = this.quill.getLine(range.index),\n        _quill$getLine2 = _slicedToArray(_quill$getLine, 2);\n\n    const cell = _quill$getLine2[0],\n          offset = _quill$getLine2[1];\n\n    if (cell == null || cell.statics.blotName !== _table.TableCell.blotName) {\n      return [null, null, null, -1];\n    }\n    const row = cell.parent;\n    const table = row.parent.parent;\n    return [table, row, cell, offset];\n  }\n\n  insertColumn(offset) {\n    const range = this.quill.getSelection();\n\n    var _getTable7 = this.getTable(range),\n        _getTable8 = _slicedToArray(_getTable7, 3);\n\n    const table = _getTable8[0],\n          row = _getTable8[1],\n          cell = _getTable8[2];\n\n    if (cell == null) return;\n    const column = cell.cellOffset();\n    table.insertColumn(column + offset);\n    this.quill.update(_quill2.default.sources.USER);\n    let shift = row.rowOffset();\n    if (offset === 0) {\n      shift += 1;\n    }\n    this.quill.setSelection(range.index + shift, range.length, _quill2.default.sources.SILENT);\n  }\n\n  insertColumnLeft() {\n    this.insertColumn(0);\n  }\n\n  insertColumnRight() {\n    this.insertColumn(1);\n  }\n\n  insertRow(offset) {\n    const range = this.quill.getSelection();\n\n    var _getTable9 = this.getTable(range),\n        _getTable10 = _slicedToArray(_getTable9, 3);\n\n    const table = _getTable10[0],\n          row = _getTable10[1],\n          cell = _getTable10[2];\n\n    if (cell == null) return;\n    const index = row.rowOffset();\n    table.insertRow(index + offset);\n    this.quill.update(_quill2.default.sources.USER);\n    if (offset > 0) {\n      this.quill.setSelection(range, _quill2.default.sources.SILENT);\n    } else {\n      this.quill.setSelection(range.index + row.children.length, range.length, _quill2.default.sources.SILENT);\n    }\n  }\n\n  insertRowAbove() {\n    this.insertRow(0);\n  }\n\n  insertRowBelow() {\n    this.insertRow(1);\n  }\n\n  insertTable(rows, columns) {\n    const range = this.quill.getSelection();\n    if (range == null) return;\n    const delta = new Array(rows).fill(0).reduce(memo => {\n      const text = new Array(columns).fill('\\n').join('');\n      return memo.insert(text, { table: (0, _table.tableId)() });\n    }, new _quillDelta2.default().retain(range.index));\n    this.quill.updateContents(delta, _quill2.default.sources.USER);\n    this.quill.setSelection(range.index, _quill2.default.sources.SILENT);\n    this.balanceTables();\n  }\n\n  listenBalanceCells() {\n    this.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, mutations => {\n      mutations.some(mutation => {\n        if (['TD', 'TR', 'TBODY', 'TABLE'].includes(mutation.target.tagName)) {\n          this.quill.once(_quill2.default.events.TEXT_CHANGE, (delta, old, source) => {\n            if (source !== _quill2.default.sources.USER) return;\n            this.balanceTables();\n          });\n          return true;\n        }\n        return false;\n      });\n    });\n  }\n}\n\nexports.default = Table;\n\n//# sourceURL=webpack://Quill/./modules/table.js?");

        /***/
      },

      /***/"./modules/toolbar.js":
      /*!****************************!*\
        !*** ./modules/toolbar.js ***!
        \****************************/
      /*! no static exports found */
      /***/function modulesToolbarJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.addControls = exports.default = undefined;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _quillDelta = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n\nvar _quillDelta2 = _interopRequireDefault(_quillDelta);\n\nvar _parchment = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nvar _quill = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n\nvar _quill2 = _interopRequireDefault(_quill);\n\nvar _logger = __webpack_require__(/*! ../core/logger */ \"./core/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nvar _module = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\nvar _module2 = _interopRequireDefault(_module);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst debug = (0, _logger2.default)('quill:toolbar');\n\nclass Toolbar extends _module2.default {\n  constructor(quill, options) {\n    super(quill, options);\n    if (Array.isArray(this.options.container)) {\n      const container = document.createElement('div');\n      addControls(container, this.options.container);\n      quill.container.parentNode.insertBefore(container, quill.container);\n      this.container = container;\n    } else if (typeof this.options.container === 'string') {\n      this.container = document.querySelector(this.options.container);\n    } else {\n      this.container = this.options.container;\n    }\n    if (!(this.container instanceof HTMLElement)) {\n      return debug.error('Container required for toolbar', this.options);\n    }\n    this.container.classList.add('ql-toolbar');\n    this.controls = [];\n    this.handlers = {};\n    Object.keys(this.options.handlers).forEach(format => {\n      this.addHandler(format, this.options.handlers[format]);\n    });\n    Array.from(this.container.querySelectorAll('button, select')).forEach(input => {\n      this.attach(input);\n    });\n    this.quill.on(_quill2.default.events.EDITOR_CHANGE, (type, range) => {\n      if (type === _quill2.default.events.SELECTION_CHANGE) {\n        this.update(range);\n      }\n    });\n    this.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, () => {\n      var _quill$selection$getR = this.quill.selection.getRange(),\n          _quill$selection$getR2 = _slicedToArray(_quill$selection$getR, 1);\n\n      const range = _quill$selection$getR2[0]; // quill.getSelection triggers update\n\n      this.update(range);\n    });\n  }\n\n  addHandler(format, handler) {\n    this.handlers[format] = handler;\n  }\n\n  attach(input) {\n    let format = Array.from(input.classList).find(className => {\n      return className.indexOf('ql-') === 0;\n    });\n    if (!format) return;\n    format = format.slice('ql-'.length);\n    if (input.tagName === 'BUTTON') {\n      input.setAttribute('type', 'button');\n    }\n    if (this.handlers[format] == null && this.quill.scroll.query(format) == null) {\n      debug.warn('ignoring attaching to nonexistent format', format, input);\n      return;\n    }\n    const eventName = input.tagName === 'SELECT' ? 'change' : 'click';\n    input.addEventListener(eventName, e => {\n      let value;\n      if (input.tagName === 'SELECT') {\n        if (input.selectedIndex < 0) return;\n        const selected = input.options[input.selectedIndex];\n        if (selected.hasAttribute('selected')) {\n          value = false;\n        } else {\n          value = selected.value || false;\n        }\n      } else {\n        if (input.classList.contains('ql-active')) {\n          value = false;\n        } else {\n          value = input.value || !input.hasAttribute('value');\n        }\n        e.preventDefault();\n      }\n      this.quill.focus();\n\n      var _quill$selection$getR3 = this.quill.selection.getRange(),\n          _quill$selection$getR4 = _slicedToArray(_quill$selection$getR3, 1);\n\n      const range = _quill$selection$getR4[0];\n\n      if (this.handlers[format] != null) {\n        this.handlers[format].call(this, value);\n      } else if (this.quill.scroll.query(format).prototype instanceof _parchment.EmbedBlot) {\n        value = prompt(`Enter ${format}`); // eslint-disable-line no-alert\n        if (!value) return;\n        this.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert({ [format]: value }), _quill2.default.sources.USER);\n      } else {\n        this.quill.format(format, value, _quill2.default.sources.USER);\n      }\n      this.update(range);\n    });\n    this.controls.push([format, input]);\n  }\n\n  update(range) {\n    const formats = range == null ? {} : this.quill.getFormat(range);\n    this.controls.forEach(pair => {\n      var _pair = _slicedToArray(pair, 2);\n\n      const format = _pair[0],\n            input = _pair[1];\n\n      if (input.tagName === 'SELECT') {\n        let option;\n        if (range == null) {\n          option = null;\n        } else if (formats[format] == null) {\n          option = input.querySelector('option[selected]');\n        } else if (!Array.isArray(formats[format])) {\n          let value = formats[format];\n          if (typeof value === 'string') {\n            value = value.replace(/\"/g, '\\\\\"');\n          }\n          option = input.querySelector(`option[value=\"${value}\"]`);\n        }\n        if (option == null) {\n          input.value = ''; // TODO make configurable?\n          input.selectedIndex = -1;\n        } else {\n          option.selected = true;\n        }\n      } else if (range == null) {\n        input.classList.remove('ql-active');\n      } else if (input.hasAttribute('value')) {\n        // both being null should match (default values)\n        // '1' should match with 1 (headers)\n        const isActive = formats[format] === input.getAttribute('value') || formats[format] != null && formats[format].toString() === input.getAttribute('value') || formats[format] == null && !input.getAttribute('value');\n        input.classList.toggle('ql-active', isActive);\n      } else {\n        input.classList.toggle('ql-active', formats[format] != null);\n      }\n    });\n  }\n}\nToolbar.DEFAULTS = {};\n\nfunction addButton(container, format, value) {\n  const input = document.createElement('button');\n  input.setAttribute('type', 'button');\n  input.classList.add(`ql-${format}`);\n  if (value != null) {\n    input.value = value;\n  }\n  container.appendChild(input);\n}\n\nfunction addControls(container, groups) {\n  if (!Array.isArray(groups[0])) {\n    groups = [groups];\n  }\n  groups.forEach(controls => {\n    const group = document.createElement('span');\n    group.classList.add('ql-formats');\n    controls.forEach(control => {\n      if (typeof control === 'string') {\n        addButton(group, control);\n      } else {\n        const format = Object.keys(control)[0];\n        const value = control[format];\n        if (Array.isArray(value)) {\n          addSelect(group, format, value);\n        } else {\n          addButton(group, format, value);\n        }\n      }\n    });\n    container.appendChild(group);\n  });\n}\n\nfunction addSelect(container, format, values) {\n  const input = document.createElement('select');\n  input.classList.add(`ql-${format}`);\n  values.forEach(value => {\n    const option = document.createElement('option');\n    if (value !== false) {\n      option.setAttribute('value', value);\n    } else {\n      option.setAttribute('selected', 'selected');\n    }\n    input.appendChild(option);\n  });\n  container.appendChild(input);\n}\n\nToolbar.DEFAULTS = {\n  container: null,\n  handlers: {\n    clean() {\n      const range = this.quill.getSelection();\n      if (range == null) return;\n      if (range.length === 0) {\n        const formats = this.quill.getFormat();\n        Object.keys(formats).forEach(name => {\n          // Clean functionality in existing apps only clean inline formats\n          if (this.quill.scroll.query(name, _parchment.Scope.INLINE) != null) {\n            this.quill.format(name, false, _quill2.default.sources.USER);\n          }\n        });\n      } else {\n        this.quill.removeFormat(range, _quill2.default.sources.USER);\n      }\n    },\n    direction(value) {\n      var _quill$getFormat = this.quill.getFormat();\n\n      const align = _quill$getFormat.align;\n\n      if (value === 'rtl' && align == null) {\n        this.quill.format('align', 'right', _quill2.default.sources.USER);\n      } else if (!value && align === 'right') {\n        this.quill.format('align', false, _quill2.default.sources.USER);\n      }\n      this.quill.format('direction', value, _quill2.default.sources.USER);\n    },\n    indent(value) {\n      const range = this.quill.getSelection();\n      const formats = this.quill.getFormat(range);\n      const indent = parseInt(formats.indent || 0, 10);\n      if (value === '+1' || value === '-1') {\n        let modifier = value === '+1' ? 1 : -1;\n        if (formats.direction === 'rtl') modifier *= -1;\n        this.quill.format('indent', indent + modifier, _quill2.default.sources.USER);\n      }\n    },\n    link(value) {\n      if (value === true) {\n        value = prompt('Enter link URL:'); // eslint-disable-line no-alert\n      }\n      this.quill.format('link', value, _quill2.default.sources.USER);\n    },\n    list(value) {\n      const range = this.quill.getSelection();\n      const formats = this.quill.getFormat(range);\n      if (value === 'check') {\n        if (formats.list === 'checked' || formats.list === 'unchecked') {\n          this.quill.format('list', false, _quill2.default.sources.USER);\n        } else {\n          this.quill.format('list', 'unchecked', _quill2.default.sources.USER);\n        }\n      } else {\n        this.quill.format('list', value, _quill2.default.sources.USER);\n      }\n    }\n  }\n};\n\nexports.default = Toolbar;\nexports.addControls = addControls;\n\n//# sourceURL=webpack://Quill/./modules/toolbar.js?");

        /***/
      },

      /***/"./modules/uploader.js":
      /*!*****************************!*\
        !*** ./modules/uploader.js ***!
        \*****************************/
      /*! no static exports found */
      /***/function modulesUploaderJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _quillDelta = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n\nvar _quillDelta2 = _interopRequireDefault(_quillDelta);\n\nvar _emitter = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n\nvar _emitter2 = _interopRequireDefault(_emitter);\n\nvar _module = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\nvar _module2 = _interopRequireDefault(_module);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Uploader extends _module2.default {\n  constructor(quill, options) {\n    super(quill, options);\n    quill.root.addEventListener('drop', e => {\n      e.preventDefault();\n      let native;\n      if (document.caretRangeFromPoint) {\n        native = document.caretRangeFromPoint(e.clientX, e.clientY);\n      } else if (document.caretPositionFromPoint) {\n        const position = document.caretPositionFromPoint(e.clientX, e.clientY);\n        native = document.createRange();\n        native.setStart(position.offsetNode, position.offset);\n        native.setEnd(position.offsetNode, position.offset);\n      } else {\n        return;\n      }\n      const normalized = quill.selection.normalizeNative(native);\n      const range = quill.selection.normalizedToRange(normalized);\n      this.upload(range, e.dataTransfer.files);\n    });\n  }\n\n  upload(range, files) {\n    const uploads = [];\n    Array.from(files).forEach(file => {\n      if (file && this.options.mimetypes.includes(file.type)) {\n        uploads.push(file);\n      }\n    });\n    if (uploads.length > 0) {\n      this.options.handler.call(this, range, uploads);\n    }\n  }\n}\n\nUploader.DEFAULTS = {\n  mimetypes: ['image/png', 'image/jpeg'],\n  handler(range, files) {\n    const promises = files.map(file => {\n      return new Promise(resolve => {\n        const reader = new FileReader();\n        reader.onload = e => {\n          resolve(e.target.result);\n        };\n        reader.readAsDataURL(file);\n      });\n    });\n    Promise.all(promises).then(images => {\n      const update = images.reduce((delta, image) => {\n        return delta.insert({ image });\n      }, new _quillDelta2.default().retain(range.index).delete(range.length));\n      this.quill.updateContents(update, _emitter2.default.sources.USER);\n      this.quill.setSelection(range.index + images.length, _emitter2.default.sources.SILENT);\n    });\n  }\n};\n\nexports.default = Uploader;\n\n//# sourceURL=webpack://Quill/./modules/uploader.js?");

        /***/
      },

      /***/"./node_modules/clone/clone.js":
      /*!*************************************!*\
        !*** ./node_modules/clone/clone.js ***!
        \*************************************/
      /*! no static exports found */
      /***/function node_modulesCloneCloneJs(module, exports) {

        eval("var clone = (function() {\n'use strict';\n\nfunction _instanceof(obj, type) {\n  return type != null && obj instanceof type;\n}\n\nvar nativeMap;\ntry {\n  nativeMap = Map;\n} catch(_) {\n  // maybe a reference error because no `Map`. Give it a dummy value that no\n  // value will ever be an instanceof.\n  nativeMap = function() {};\n}\n\nvar nativeSet;\ntry {\n  nativeSet = Set;\n} catch(_) {\n  nativeSet = function() {};\n}\n\nvar nativePromise;\ntry {\n  nativePromise = Promise;\n} catch(_) {\n  nativePromise = function() {};\n}\n\n/**\n * Clones (copies) an Object using deep copying.\n *\n * This function supports circular references by default, but if you are certain\n * there are no circular references in your object, you can save some CPU time\n * by calling clone(obj, false).\n *\n * Caution: if `circular` is false and `parent` contains circular references,\n * your program may enter an infinite loop and crash.\n *\n * @param `parent` - the object to be cloned\n * @param `circular` - set to true if the object to be cloned may contain\n *    circular references. (optional - true by default)\n * @param `depth` - set to a number if the object is only to be cloned to\n *    a particular depth. (optional - defaults to Infinity)\n * @param `prototype` - sets the prototype to be used when cloning an object.\n *    (optional - defaults to parent prototype).\n * @param `includeNonEnumerable` - set to true if the non-enumerable properties\n *    should be cloned as well. Non-enumerable properties on the prototype\n *    chain will be ignored. (optional - false by default)\n*/\nfunction clone(parent, circular, depth, prototype, includeNonEnumerable) {\n  if (typeof circular === 'object') {\n    depth = circular.depth;\n    prototype = circular.prototype;\n    includeNonEnumerable = circular.includeNonEnumerable;\n    circular = circular.circular;\n  }\n  // maintain two arrays for circular references, where corresponding parents\n  // and children have the same index\n  var allParents = [];\n  var allChildren = [];\n\n  var useBuffer = typeof Buffer != 'undefined';\n\n  if (typeof circular == 'undefined')\n    circular = true;\n\n  if (typeof depth == 'undefined')\n    depth = Infinity;\n\n  // recurse this function so we don't reset allParents and allChildren\n  function _clone(parent, depth) {\n    // cloning null always returns null\n    if (parent === null)\n      return null;\n\n    if (depth === 0)\n      return parent;\n\n    var child;\n    var proto;\n    if (typeof parent != 'object') {\n      return parent;\n    }\n\n    if (_instanceof(parent, nativeMap)) {\n      child = new nativeMap();\n    } else if (_instanceof(parent, nativeSet)) {\n      child = new nativeSet();\n    } else if (_instanceof(parent, nativePromise)) {\n      child = new nativePromise(function (resolve, reject) {\n        parent.then(function(value) {\n          resolve(_clone(value, depth - 1));\n        }, function(err) {\n          reject(_clone(err, depth - 1));\n        });\n      });\n    } else if (clone.__isArray(parent)) {\n      child = [];\n    } else if (clone.__isRegExp(parent)) {\n      child = new RegExp(parent.source, __getRegExpFlags(parent));\n      if (parent.lastIndex) child.lastIndex = parent.lastIndex;\n    } else if (clone.__isDate(parent)) {\n      child = new Date(parent.getTime());\n    } else if (useBuffer && Buffer.isBuffer(parent)) {\n      if (Buffer.allocUnsafe) {\n        // Node.js >= 4.5.0\n        child = Buffer.allocUnsafe(parent.length);\n      } else {\n        // Older Node.js versions\n        child = new Buffer(parent.length);\n      }\n      parent.copy(child);\n      return child;\n    } else if (_instanceof(parent, Error)) {\n      child = Object.create(parent);\n    } else {\n      if (typeof prototype == 'undefined') {\n        proto = Object.getPrototypeOf(parent);\n        child = Object.create(proto);\n      }\n      else {\n        child = Object.create(prototype);\n        proto = prototype;\n      }\n    }\n\n    if (circular) {\n      var index = allParents.indexOf(parent);\n\n      if (index != -1) {\n        return allChildren[index];\n      }\n      allParents.push(parent);\n      allChildren.push(child);\n    }\n\n    if (_instanceof(parent, nativeMap)) {\n      parent.forEach(function(value, key) {\n        var keyChild = _clone(key, depth - 1);\n        var valueChild = _clone(value, depth - 1);\n        child.set(keyChild, valueChild);\n      });\n    }\n    if (_instanceof(parent, nativeSet)) {\n      parent.forEach(function(value) {\n        var entryChild = _clone(value, depth - 1);\n        child.add(entryChild);\n      });\n    }\n\n    for (var i in parent) {\n      var attrs;\n      if (proto) {\n        attrs = Object.getOwnPropertyDescriptor(proto, i);\n      }\n\n      if (attrs && attrs.set == null) {\n        continue;\n      }\n      child[i] = _clone(parent[i], depth - 1);\n    }\n\n    if (Object.getOwnPropertySymbols) {\n      var symbols = Object.getOwnPropertySymbols(parent);\n      for (var i = 0; i < symbols.length; i++) {\n        // Don't need to worry about cloning a symbol because it is a primitive,\n        // like a number or string.\n        var symbol = symbols[i];\n        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);\n        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {\n          continue;\n        }\n        child[symbol] = _clone(parent[symbol], depth - 1);\n        if (!descriptor.enumerable) {\n          Object.defineProperty(child, symbol, {\n            enumerable: false\n          });\n        }\n      }\n    }\n\n    if (includeNonEnumerable) {\n      var allPropertyNames = Object.getOwnPropertyNames(parent);\n      for (var i = 0; i < allPropertyNames.length; i++) {\n        var propertyName = allPropertyNames[i];\n        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);\n        if (descriptor && descriptor.enumerable) {\n          continue;\n        }\n        child[propertyName] = _clone(parent[propertyName], depth - 1);\n        Object.defineProperty(child, propertyName, {\n          enumerable: false\n        });\n      }\n    }\n\n    return child;\n  }\n\n  return _clone(parent, depth);\n}\n\n/**\n * Simple flat clone using prototype, accepts only objects, usefull for property\n * override on FLAT configuration object (no nested props).\n *\n * USE WITH CAUTION! This may not behave as you wish if you do not know how this\n * works.\n */\nclone.clonePrototype = function clonePrototype(parent) {\n  if (parent === null)\n    return null;\n\n  var c = function () {};\n  c.prototype = parent;\n  return new c();\n};\n\n// private utility functions\n\nfunction __objToStr(o) {\n  return Object.prototype.toString.call(o);\n}\nclone.__objToStr = __objToStr;\n\nfunction __isDate(o) {\n  return typeof o === 'object' && __objToStr(o) === '[object Date]';\n}\nclone.__isDate = __isDate;\n\nfunction __isArray(o) {\n  return typeof o === 'object' && __objToStr(o) === '[object Array]';\n}\nclone.__isArray = __isArray;\n\nfunction __isRegExp(o) {\n  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';\n}\nclone.__isRegExp = __isRegExp;\n\nfunction __getRegExpFlags(re) {\n  var flags = '';\n  if (re.global) flags += 'g';\n  if (re.ignoreCase) flags += 'i';\n  if (re.multiline) flags += 'm';\n  return flags;\n}\nclone.__getRegExpFlags = __getRegExpFlags;\n\nreturn clone;\n})();\n\nif (typeof module === 'object' && module.exports) {\n  module.exports = clone;\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/clone/clone.js?");

        /***/
      },

      /***/"./node_modules/deep-equal/index.js":
      /*!******************************************!*\
        !*** ./node_modules/deep-equal/index.js ***!
        \******************************************/
      /*! no static exports found */
      /***/function node_modulesDeepEqualIndexJs(module, exports, __webpack_require__) {

        eval("var pSlice = Array.prototype.slice;\nvar objectKeys = __webpack_require__(/*! ./lib/keys.js */ \"./node_modules/deep-equal/lib/keys.js\");\nvar isArguments = __webpack_require__(/*! ./lib/is_arguments.js */ \"./node_modules/deep-equal/lib/is_arguments.js\");\n\nvar deepEqual = module.exports = function (actual, expected, opts) {\n  if (!opts) opts = {};\n  // 7.1. All identical values are equivalent, as determined by ===.\n  if (actual === expected) {\n    return true;\n\n  } else if (actual instanceof Date && expected instanceof Date) {\n    return actual.getTime() === expected.getTime();\n\n  // 7.3. Other pairs that do not both pass typeof value == 'object',\n  // equivalence is determined by ==.\n  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {\n    return opts.strict ? actual === expected : actual == expected;\n\n  // 7.4. For all other Object pairs, including Array objects, equivalence is\n  // determined by having the same number of owned properties (as verified\n  // with Object.prototype.hasOwnProperty.call), the same set of keys\n  // (although not necessarily the same order), equivalent values for every\n  // corresponding key, and an identical 'prototype' property. Note: this\n  // accounts for both named and indexed properties on Arrays.\n  } else {\n    return objEquiv(actual, expected, opts);\n  }\n}\n\nfunction isUndefinedOrNull(value) {\n  return value === null || value === undefined;\n}\n\nfunction isBuffer (x) {\n  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;\n  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {\n    return false;\n  }\n  if (x.length > 0 && typeof x[0] !== 'number') return false;\n  return true;\n}\n\nfunction objEquiv(a, b, opts) {\n  var i, key;\n  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))\n    return false;\n  // an identical 'prototype' property.\n  if (a.prototype !== b.prototype) return false;\n  //~~~I've managed to break Object.keys through screwy arguments passing.\n  //   Converting to array solves the problem.\n  if (isArguments(a)) {\n    if (!isArguments(b)) {\n      return false;\n    }\n    a = pSlice.call(a);\n    b = pSlice.call(b);\n    return deepEqual(a, b, opts);\n  }\n  if (isBuffer(a)) {\n    if (!isBuffer(b)) {\n      return false;\n    }\n    if (a.length !== b.length) return false;\n    for (i = 0; i < a.length; i++) {\n      if (a[i] !== b[i]) return false;\n    }\n    return true;\n  }\n  try {\n    var ka = objectKeys(a),\n        kb = objectKeys(b);\n  } catch (e) {//happens when one is a string literal and the other isn't\n    return false;\n  }\n  // having the same number of owned properties (keys incorporates\n  // hasOwnProperty)\n  if (ka.length != kb.length)\n    return false;\n  //the same set of keys (although not necessarily the same order),\n  ka.sort();\n  kb.sort();\n  //~~~cheap key test\n  for (i = ka.length - 1; i >= 0; i--) {\n    if (ka[i] != kb[i])\n      return false;\n  }\n  //equivalent values for every corresponding key, and\n  //~~~possibly expensive deep test\n  for (i = ka.length - 1; i >= 0; i--) {\n    key = ka[i];\n    if (!deepEqual(a[key], b[key], opts)) return false;\n  }\n  return typeof a === typeof b;\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/index.js?");

        /***/
      },

      /***/"./node_modules/deep-equal/lib/is_arguments.js":
      /*!*****************************************************!*\
        !*** ./node_modules/deep-equal/lib/is_arguments.js ***!
        \*****************************************************/
      /*! no static exports found */
      /***/function node_modulesDeepEqualLibIs_argumentsJs(module, exports) {

        eval("var supportsArgumentsClass = (function(){\n  return Object.prototype.toString.call(arguments)\n})() == '[object Arguments]';\n\nexports = module.exports = supportsArgumentsClass ? supported : unsupported;\n\nexports.supported = supported;\nfunction supported(object) {\n  return Object.prototype.toString.call(object) == '[object Arguments]';\n};\n\nexports.unsupported = unsupported;\nfunction unsupported(object){\n  return object &&\n    typeof object == 'object' &&\n    typeof object.length == 'number' &&\n    Object.prototype.hasOwnProperty.call(object, 'callee') &&\n    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||\n    false;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/lib/is_arguments.js?");

        /***/
      },

      /***/"./node_modules/deep-equal/lib/keys.js":
      /*!*********************************************!*\
        !*** ./node_modules/deep-equal/lib/keys.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/function node_modulesDeepEqualLibKeysJs(module, exports) {

        eval("exports = module.exports = typeof Object.keys === 'function'\n  ? Object.keys : shim;\n\nexports.shim = shim;\nfunction shim (obj) {\n  var keys = [];\n  for (var key in obj) keys.push(key);\n  return keys;\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/lib/keys.js?");

        /***/
      },

      /***/"./node_modules/eventemitter3/index.js":
      /*!*********************************************!*\
        !*** ./node_modules/eventemitter3/index.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/function node_modulesEventemitter3IndexJs(module, exports) {

        eval("'use strict';\n\nvar has = Object.prototype.hasOwnProperty\n  , prefix = '~';\n\n/**\n * Constructor to create a storage for our `EE` objects.\n * An `Events` instance is a plain object whose properties are event names.\n *\n * @constructor\n * @private\n */\nfunction Events() {}\n\n//\n// We try to not inherit from `Object.prototype`. In some engines creating an\n// instance in this way is faster than calling `Object.create(null)` directly.\n// If `Object.create(null)` is not supported we prefix the event names with a\n// character to make sure that the built-in object properties are not\n// overridden or used as an attack vector.\n//\nif (Object.create) {\n  Events.prototype = Object.create(null);\n\n  //\n  // This hack is needed because the `__proto__` property is still inherited in\n  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.\n  //\n  if (!new Events().__proto__) prefix = false;\n}\n\n/**\n * Representation of a single event listener.\n *\n * @param {Function} fn The listener function.\n * @param {*} context The context to invoke the listener with.\n * @param {Boolean} [once=false] Specify if the listener is a one-time listener.\n * @constructor\n * @private\n */\nfunction EE(fn, context, once) {\n  this.fn = fn;\n  this.context = context;\n  this.once = once || false;\n}\n\n/**\n * Add a listener for a given event.\n *\n * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn The listener function.\n * @param {*} context The context to invoke the listener with.\n * @param {Boolean} once Specify if the listener is a one-time listener.\n * @returns {EventEmitter}\n * @private\n */\nfunction addListener(emitter, event, fn, context, once) {\n  if (typeof fn !== 'function') {\n    throw new TypeError('The listener must be a function');\n  }\n\n  var listener = new EE(fn, context || emitter, once)\n    , evt = prefix ? prefix + event : event;\n\n  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;\n  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);\n  else emitter._events[evt] = [emitter._events[evt], listener];\n\n  return emitter;\n}\n\n/**\n * Clear event by name.\n *\n * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.\n * @param {(String|Symbol)} evt The Event name.\n * @private\n */\nfunction clearEvent(emitter, evt) {\n  if (--emitter._eventsCount === 0) emitter._events = new Events();\n  else delete emitter._events[evt];\n}\n\n/**\n * Minimal `EventEmitter` interface that is molded against the Node.js\n * `EventEmitter` interface.\n *\n * @constructor\n * @public\n */\nfunction EventEmitter() {\n  this._events = new Events();\n  this._eventsCount = 0;\n}\n\n/**\n * Return an array listing the events for which the emitter has registered\n * listeners.\n *\n * @returns {Array}\n * @public\n */\nEventEmitter.prototype.eventNames = function eventNames() {\n  var names = []\n    , events\n    , name;\n\n  if (this._eventsCount === 0) return names;\n\n  for (name in (events = this._events)) {\n    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);\n  }\n\n  if (Object.getOwnPropertySymbols) {\n    return names.concat(Object.getOwnPropertySymbols(events));\n  }\n\n  return names;\n};\n\n/**\n * Return the listeners registered for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @returns {Array} The registered listeners.\n * @public\n */\nEventEmitter.prototype.listeners = function listeners(event) {\n  var evt = prefix ? prefix + event : event\n    , handlers = this._events[evt];\n\n  if (!handlers) return [];\n  if (handlers.fn) return [handlers.fn];\n\n  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {\n    ee[i] = handlers[i].fn;\n  }\n\n  return ee;\n};\n\n/**\n * Return the number of listeners listening to a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @returns {Number} The number of listeners.\n * @public\n */\nEventEmitter.prototype.listenerCount = function listenerCount(event) {\n  var evt = prefix ? prefix + event : event\n    , listeners = this._events[evt];\n\n  if (!listeners) return 0;\n  if (listeners.fn) return 1;\n  return listeners.length;\n};\n\n/**\n * Calls each of the listeners registered for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @returns {Boolean} `true` if the event had listeners, else `false`.\n * @public\n */\nEventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {\n  var evt = prefix ? prefix + event : event;\n\n  if (!this._events[evt]) return false;\n\n  var listeners = this._events[evt]\n    , len = arguments.length\n    , args\n    , i;\n\n  if (listeners.fn) {\n    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);\n\n    switch (len) {\n      case 1: return listeners.fn.call(listeners.context), true;\n      case 2: return listeners.fn.call(listeners.context, a1), true;\n      case 3: return listeners.fn.call(listeners.context, a1, a2), true;\n      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;\n      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;\n      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;\n    }\n\n    for (i = 1, args = new Array(len -1); i < len; i++) {\n      args[i - 1] = arguments[i];\n    }\n\n    listeners.fn.apply(listeners.context, args);\n  } else {\n    var length = listeners.length\n      , j;\n\n    for (i = 0; i < length; i++) {\n      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);\n\n      switch (len) {\n        case 1: listeners[i].fn.call(listeners[i].context); break;\n        case 2: listeners[i].fn.call(listeners[i].context, a1); break;\n        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;\n        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;\n        default:\n          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {\n            args[j - 1] = arguments[j];\n          }\n\n          listeners[i].fn.apply(listeners[i].context, args);\n      }\n    }\n  }\n\n  return true;\n};\n\n/**\n * Add a listener for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn The listener function.\n * @param {*} [context=this] The context to invoke the listener with.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.on = function on(event, fn, context) {\n  return addListener(this, event, fn, context, false);\n};\n\n/**\n * Add a one-time listener for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn The listener function.\n * @param {*} [context=this] The context to invoke the listener with.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.once = function once(event, fn, context) {\n  return addListener(this, event, fn, context, true);\n};\n\n/**\n * Remove the listeners of a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn Only remove the listeners that match this function.\n * @param {*} context Only remove the listeners that have this context.\n * @param {Boolean} once Only remove one-time listeners.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {\n  var evt = prefix ? prefix + event : event;\n\n  if (!this._events[evt]) return this;\n  if (!fn) {\n    clearEvent(this, evt);\n    return this;\n  }\n\n  var listeners = this._events[evt];\n\n  if (listeners.fn) {\n    if (\n      listeners.fn === fn &&\n      (!once || listeners.once) &&\n      (!context || listeners.context === context)\n    ) {\n      clearEvent(this, evt);\n    }\n  } else {\n    for (var i = 0, events = [], length = listeners.length; i < length; i++) {\n      if (\n        listeners[i].fn !== fn ||\n        (once && !listeners[i].once) ||\n        (context && listeners[i].context !== context)\n      ) {\n        events.push(listeners[i]);\n      }\n    }\n\n    //\n    // Reset the array, or remove it completely if we have no more listeners.\n    //\n    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;\n    else clearEvent(this, evt);\n  }\n\n  return this;\n};\n\n/**\n * Remove all listeners, or those of the specified event.\n *\n * @param {(String|Symbol)} [event] The event name.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {\n  var evt;\n\n  if (event) {\n    evt = prefix ? prefix + event : event;\n    if (this._events[evt]) clearEvent(this, evt);\n  } else {\n    this._events = new Events();\n    this._eventsCount = 0;\n  }\n\n  return this;\n};\n\n//\n// Alias methods names because people roll like that.\n//\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\nEventEmitter.prototype.addListener = EventEmitter.prototype.on;\n\n//\n// Expose the prefix.\n//\nEventEmitter.prefixed = prefix;\n\n//\n// Allow `EventEmitter` to be imported as module namespace.\n//\nEventEmitter.EventEmitter = EventEmitter;\n\n//\n// Expose the module.\n//\nif ('undefined' !== typeof module) {\n  module.exports = EventEmitter;\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/eventemitter3/index.js?");

        /***/
      },

      /***/"./node_modules/extend/index.js":
      /*!**************************************!*\
        !*** ./node_modules/extend/index.js ***!
        \**************************************/
      /*! no static exports found */
      /***/function node_modulesExtendIndexJs(module, exports) {

        eval("'use strict';\n\nvar hasOwn = Object.prototype.hasOwnProperty;\nvar toStr = Object.prototype.toString;\nvar defineProperty = Object.defineProperty;\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nvar isArray = function isArray(arr) {\n\tif (typeof Array.isArray === 'function') {\n\t\treturn Array.isArray(arr);\n\t}\n\n\treturn toStr.call(arr) === '[object Array]';\n};\n\nvar isPlainObject = function isPlainObject(obj) {\n\tif (!obj || toStr.call(obj) !== '[object Object]') {\n\t\treturn false;\n\t}\n\n\tvar hasOwnConstructor = hasOwn.call(obj, 'constructor');\n\tvar hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');\n\t// Not own constructor property must be Object\n\tif (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {\n\t\treturn false;\n\t}\n\n\t// Own properties are enumerated firstly, so to speed up,\n\t// if last one is own, then all properties are own.\n\tvar key;\n\tfor (key in obj) { /**/ }\n\n\treturn typeof key === 'undefined' || hasOwn.call(obj, key);\n};\n\n// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target\nvar setProperty = function setProperty(target, options) {\n\tif (defineProperty && options.name === '__proto__') {\n\t\tdefineProperty(target, options.name, {\n\t\t\tenumerable: true,\n\t\t\tconfigurable: true,\n\t\t\tvalue: options.newValue,\n\t\t\twritable: true\n\t\t});\n\t} else {\n\t\ttarget[options.name] = options.newValue;\n\t}\n};\n\n// Return undefined instead of __proto__ if '__proto__' is not an own property\nvar getProperty = function getProperty(obj, name) {\n\tif (name === '__proto__') {\n\t\tif (!hasOwn.call(obj, name)) {\n\t\t\treturn void 0;\n\t\t} else if (gOPD) {\n\t\t\t// In early versions of node, obj['__proto__'] is buggy when obj has\n\t\t\t// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.\n\t\t\treturn gOPD(obj, name).value;\n\t\t}\n\t}\n\n\treturn obj[name];\n};\n\nmodule.exports = function extend() {\n\tvar options, name, src, copy, copyIsArray, clone;\n\tvar target = arguments[0];\n\tvar i = 1;\n\tvar length = arguments.length;\n\tvar deep = false;\n\n\t// Handle a deep copy situation\n\tif (typeof target === 'boolean') {\n\t\tdeep = target;\n\t\ttarget = arguments[1] || {};\n\t\t// skip the boolean and the target\n\t\ti = 2;\n\t}\n\tif (target == null || (typeof target !== 'object' && typeof target !== 'function')) {\n\t\ttarget = {};\n\t}\n\n\tfor (; i < length; ++i) {\n\t\toptions = arguments[i];\n\t\t// Only deal with non-null/undefined values\n\t\tif (options != null) {\n\t\t\t// Extend the base object\n\t\t\tfor (name in options) {\n\t\t\t\tsrc = getProperty(target, name);\n\t\t\t\tcopy = getProperty(options, name);\n\n\t\t\t\t// Prevent never-ending loop\n\t\t\t\tif (target !== copy) {\n\t\t\t\t\t// Recurse if we're merging plain objects or arrays\n\t\t\t\t\tif (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {\n\t\t\t\t\t\tif (copyIsArray) {\n\t\t\t\t\t\t\tcopyIsArray = false;\n\t\t\t\t\t\t\tclone = src && isArray(src) ? src : [];\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tclone = src && isPlainObject(src) ? src : {};\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Never move original objects, clone them\n\t\t\t\t\t\tsetProperty(target, { name: name, newValue: extend(deep, clone, copy) });\n\n\t\t\t\t\t// Don't bring in undefined values\n\t\t\t\t\t} else if (typeof copy !== 'undefined') {\n\t\t\t\t\t\tsetProperty(target, { name: name, newValue: copy });\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t// Return the modified object\n\treturn target;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/extend/index.js?");

        /***/
      },

      /***/"./node_modules/parchment/src/attributor/attributor.ts":
      /*!*************************************************************!*\
        !*** ./node_modules/parchment/src/attributor/attributor.ts ***!
        \*************************************************************/
      /*! exports provided: default */
      /***/function node_modulesParchmentSrcAttributorAttributorTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Attributor; });\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n\nclass Attributor {\n    static keys(node) {\n        return Array.from(node.attributes).map((item) => item.name);\n    }\n    constructor(attrName, keyName, options = {}) {\n        this.attrName = attrName;\n        this.keyName = keyName;\n        const attributeBit = _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TYPE & _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ATTRIBUTE;\n        this.scope =\n            options.scope != null\n                ? // Ignore type bits, force attribute bit\n                    (options.scope & _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LEVEL) | attributeBit\n                : _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ATTRIBUTE;\n        if (options.whitelist != null) {\n            this.whitelist = options.whitelist;\n        }\n    }\n    add(node, value) {\n        if (!this.canAdd(node, value)) {\n            return false;\n        }\n        node.setAttribute(this.keyName, value);\n        return true;\n    }\n    canAdd(_node, value) {\n        if (this.whitelist == null) {\n            return true;\n        }\n        if (typeof value === 'string') {\n            return this.whitelist.indexOf(value.replace(/[\"']/g, '')) > -1;\n        }\n        else {\n            return this.whitelist.indexOf(value) > -1;\n        }\n    }\n    remove(node) {\n        node.removeAttribute(this.keyName);\n    }\n    value(node) {\n        const value = node.getAttribute(this.keyName);\n        if (this.canAdd(node, value) && value) {\n            return value;\n        }\n        return '';\n    }\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/attributor.ts?");

        /***/
      },

      /***/"./node_modules/parchment/src/attributor/class.ts":
      /*!********************************************************!*\
        !*** ./node_modules/parchment/src/attributor/class.ts ***!
        \********************************************************/
      /*! exports provided: default */
      /***/function node_modulesParchmentSrcAttributorClassTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n\nfunction match(node, prefix) {\n    const className = node.getAttribute('class') || '';\n    return className\n        .split(/\\s+/)\n        .filter(name => name.indexOf(`${prefix}-`) === 0);\n}\nclass ClassAttributor extends _attributor__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static keys(node) {\n        return (node.getAttribute('class') || '').split(/\\s+/).map(name => name\n            .split('-')\n            .slice(0, -1)\n            .join('-'));\n    }\n    add(node, value) {\n        if (!this.canAdd(node, value)) {\n            return false;\n        }\n        this.remove(node);\n        node.classList.add(`${this.keyName}-${value}`);\n        return true;\n    }\n    remove(node) {\n        const matches = match(node, this.keyName);\n        matches.forEach(name => {\n            node.classList.remove(name);\n        });\n        if (node.classList.length === 0) {\n            node.removeAttribute('class');\n        }\n    }\n    value(node) {\n        const result = match(node, this.keyName)[0] || '';\n        const value = result.slice(this.keyName.length + 1); // +1 for hyphen\n        return this.canAdd(node, value) ? value : '';\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClassAttributor);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/class.ts?");

        /***/
      },

      /***/"./node_modules/parchment/src/attributor/store.ts":
      /*!********************************************************!*\
        !*** ./node_modules/parchment/src/attributor/store.ts ***!
        \********************************************************/
      /*! exports provided: default */
      /***/function node_modulesParchmentSrcAttributorStoreTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../registry */ \"./node_modules/parchment/src/registry.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _attributor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class */ \"./node_modules/parchment/src/attributor/class.ts\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./node_modules/parchment/src/attributor/style.ts\");\n\n\n\n\n\nclass AttributorStore {\n    constructor(domNode) {\n        this.attributes = {};\n        this.domNode = domNode;\n        this.build();\n    }\n    attribute(attribute, value) {\n        // verb\n        if (value) {\n            if (attribute.add(this.domNode, value)) {\n                if (attribute.value(this.domNode) != null) {\n                    this.attributes[attribute.attrName] = attribute;\n                }\n                else {\n                    delete this.attributes[attribute.attrName];\n                }\n            }\n        }\n        else {\n            attribute.remove(this.domNode);\n            delete this.attributes[attribute.attrName];\n        }\n    }\n    build() {\n        this.attributes = {};\n        const blot = _registry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(this.domNode);\n        if (blot == null) {\n            return;\n        }\n        const attributes = _attributor__WEBPACK_IMPORTED_MODULE_2__[\"default\"].keys(this.domNode);\n        const classes = _class__WEBPACK_IMPORTED_MODULE_3__[\"default\"].keys(this.domNode);\n        const styles = _style__WEBPACK_IMPORTED_MODULE_4__[\"default\"].keys(this.domNode);\n        attributes\n            .concat(classes)\n            .concat(styles)\n            .forEach(name => {\n            const attr = blot.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ATTRIBUTE);\n            if (attr instanceof _attributor__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n                this.attributes[attr.attrName] = attr;\n            }\n        });\n    }\n    copy(target) {\n        Object.keys(this.attributes).forEach(key => {\n            const value = this.attributes[key].value(this.domNode);\n            target.format(key, value);\n        });\n    }\n    move(target) {\n        this.copy(target);\n        Object.keys(this.attributes).forEach(key => {\n            this.attributes[key].remove(this.domNode);\n        });\n        this.attributes = {};\n    }\n    values() {\n        return Object.keys(this.attributes).reduce((attributes, name) => {\n            attributes[name] = this.attributes[name].value(this.domNode);\n            return attributes;\n        }, {});\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (AttributorStore);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/store.ts?");

        /***/
      },

      /***/"./node_modules/parchment/src/attributor/style.ts":
      /*!********************************************************!*\
        !*** ./node_modules/parchment/src/attributor/style.ts ***!
        \********************************************************/
      /*! exports provided: default */
      /***/function node_modulesParchmentSrcAttributorStyleTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n\nfunction camelize(name) {\n    const parts = name.split('-');\n    const rest = parts\n        .slice(1)\n        .map((part) => part[0].toUpperCase() + part.slice(1))\n        .join('');\n    return parts[0] + rest;\n}\nclass StyleAttributor extends _attributor__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static keys(node) {\n        return (node.getAttribute('style') || '').split(';').map(value => {\n            const arr = value.split(':');\n            return arr[0].trim();\n        });\n    }\n    add(node, value) {\n        if (!this.canAdd(node, value)) {\n            return false;\n        }\n        // @ts-ignore\n        node.style[camelize(this.keyName)] = value;\n        return true;\n    }\n    remove(node) {\n        // @ts-ignore\n        node.style[camelize(this.keyName)] = '';\n        if (!node.getAttribute('style')) {\n            node.removeAttribute('style');\n        }\n    }\n    value(node) {\n        // @ts-ignore\n        const value = node.style[camelize(this.keyName)];\n        return this.canAdd(node, value) ? value : '';\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (StyleAttributor);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/style.ts?");

        /***/
      },

      /***/"./node_modules/parchment/src/blot/abstract/container.ts":
      /*!***************************************************************!*\
        !*** ./node_modules/parchment/src/blot/abstract/container.ts ***!
        \***************************************************************/
      /*! exports provided: default */
      /***/function node_modulesParchmentSrcBlotAbstractContainerTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n\n\nclass ContainerBlot extends _parent__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    checkMerge() {\n        return (this.next !== null && this.next.statics.blotName === this.statics.blotName);\n    }\n    deleteAt(index, length) {\n        super.deleteAt(index, length);\n        this.enforceAllowedChildren();\n    }\n    formatAt(index, length, name, value) {\n        super.formatAt(index, length, name, value);\n        this.enforceAllowedChildren();\n    }\n    insertAt(index, value, def) {\n        super.insertAt(index, value, def);\n        this.enforceAllowedChildren();\n    }\n    optimize(context) {\n        super.optimize(context);\n        if (this.children.length > 0 && this.next != null && this.checkMerge()) {\n            this.next.moveChildren(this);\n            this.next.remove();\n        }\n    }\n}\nContainerBlot.blotName = 'container';\nContainerBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BLOCK_BLOT;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContainerBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/container.ts?");

        /***/
      },

      /***/"./node_modules/parchment/src/blot/abstract/leaf.ts":
      /*!**********************************************************!*\
        !*** ./node_modules/parchment/src/blot/abstract/leaf.ts ***!
        \**********************************************************/
      /*! exports provided: default */
      /***/function node_modulesParchmentSrcBlotAbstractLeafTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shadow */ \"./node_modules/parchment/src/blot/abstract/shadow.ts\");\n\n\nclass LeafBlot extends _shadow__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    static value(_domNode) {\n        return true;\n    }\n    index(node, offset) {\n        if (this.domNode === node ||\n            this.domNode.compareDocumentPosition(node) &\n                Node.DOCUMENT_POSITION_CONTAINED_BY) {\n            return Math.min(offset, 1);\n        }\n        return -1;\n    }\n    position(index, _inclusive) {\n        const childNodes = Array.from(this.parent.domNode.childNodes);\n        let offset = childNodes.indexOf(this.domNode);\n        if (index > 0) {\n            offset += 1;\n        }\n        return [this.parent.domNode, offset];\n    }\n    value() {\n        return {\n            [this.statics.blotName]: this.statics.value(this.domNode) || true,\n        };\n    }\n}\nLeafBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INLINE_BLOT;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeafBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/leaf.ts?");

        /***/
      },

      /***/"./node_modules/parchment/src/blot/abstract/parent.ts":
      /*!************************************************************!*\
        !*** ./node_modules/parchment/src/blot/abstract/parent.ts ***!
        \************************************************************/
      /*! exports provided: default */
      /***/function node_modulesParchmentSrcBlotAbstractParentTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _collection_linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../collection/linked-list */ \"./node_modules/parchment/src/collection/linked-list.ts\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error */ \"./node_modules/parchment/src/error.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shadow */ \"./node_modules/parchment/src/blot/abstract/shadow.ts\");\n\n\n\n\nclass ParentBlot extends _shadow__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    constructor(scroll, domNode) {\n        super(scroll, domNode);\n        this.uiNode = null;\n        this.build();\n    }\n    appendChild(other) {\n        this.insertBefore(other);\n    }\n    attach() {\n        super.attach();\n        this.children.forEach(child => {\n            child.attach();\n        });\n    }\n    attachUI(node) {\n        if (this.uiNode != null) {\n            this.uiNode.remove();\n        }\n        this.uiNode = node;\n        if (ParentBlot.uiClass) {\n            this.uiNode.classList.add(ParentBlot.uiClass);\n        }\n        this.uiNode.setAttribute('contenteditable', 'false');\n        this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);\n    }\n    build() {\n        this.children = new _collection_linked_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        // Need to be reversed for if DOM nodes already in order\n        Array.from(this.domNode.childNodes)\n            .filter((node) => node !== this.uiNode)\n            .reverse()\n            .forEach((node) => {\n            try {\n                const child = makeAttachedBlot(node, this.scroll);\n                this.insertBefore(child, this.children.head || undefined);\n            }\n            catch (err) {\n                if (err instanceof _error__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n                    return;\n                }\n                else {\n                    throw err;\n                }\n            }\n        });\n    }\n    deleteAt(index, length) {\n        if (index === 0 && length === this.length()) {\n            return this.remove();\n        }\n        this.children.forEachAt(index, length, (child, offset, childLength) => {\n            child.deleteAt(offset, childLength);\n        });\n    }\n    descendant(criteria, index = 0) {\n        const [child, offset] = this.children.find(index);\n        if ((criteria.blotName == null && criteria(child)) ||\n            (criteria.blotName != null && child instanceof criteria)) {\n            return [child, offset];\n        }\n        else if (child instanceof ParentBlot) {\n            return child.descendant(criteria, offset);\n        }\n        else {\n            return [null, -1];\n        }\n    }\n    descendants(criteria, index = 0, length = Number.MAX_VALUE) {\n        let descendants = [];\n        let lengthLeft = length;\n        this.children.forEachAt(index, length, (child, childIndex, childLength) => {\n            if ((criteria.blotName == null && criteria(child)) ||\n                (criteria.blotName != null && child instanceof criteria)) {\n                descendants.push(child);\n            }\n            if (child instanceof ParentBlot) {\n                descendants = descendants.concat(child.descendants(criteria, childIndex, lengthLeft));\n            }\n            lengthLeft -= childLength;\n        });\n        return descendants;\n    }\n    detach() {\n        this.children.forEach(child => {\n            child.detach();\n        });\n        super.detach();\n    }\n    enforceAllowedChildren() {\n        let done = false;\n        this.children.forEach((child) => {\n            if (done) {\n                return;\n            }\n            const allowed = this.statics.allowedChildren.some((def) => child instanceof def);\n            if (allowed) {\n                return;\n            }\n            if (child.statics.scope === _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOCK_BLOT) {\n                if (child.next != null) {\n                    this.splitAfter(child);\n                }\n                if (child.prev != null) {\n                    this.splitAfter(child.prev);\n                }\n                child.parent.unwrap();\n                done = true;\n            }\n            else if (child instanceof ParentBlot) {\n                child.unwrap();\n            }\n            else {\n                child.remove();\n            }\n        });\n    }\n    formatAt(index, length, name, value) {\n        this.children.forEachAt(index, length, (child, offset, childLength) => {\n            child.formatAt(offset, childLength, name, value);\n        });\n    }\n    insertAt(index, value, def) {\n        const [child, offset] = this.children.find(index);\n        if (child) {\n            child.insertAt(offset, value, def);\n        }\n        else {\n            const blot = def == null\n                ? this.scroll.create('text', value)\n                : this.scroll.create(value, def);\n            this.appendChild(blot);\n        }\n    }\n    insertBefore(childBlot, refBlot) {\n        if (childBlot.parent != null) {\n            childBlot.parent.children.remove(childBlot);\n        }\n        let refDomNode = null;\n        this.children.insertBefore(childBlot, refBlot || null);\n        if (refBlot != null) {\n            refDomNode = refBlot.domNode;\n        }\n        if (this.domNode.parentNode !== childBlot.domNode ||\n            this.domNode.nextSibling !== refDomNode) {\n            this.domNode.insertBefore(childBlot.domNode, refDomNode);\n        }\n        childBlot.parent = this;\n        childBlot.attach();\n    }\n    length() {\n        return this.children.reduce((memo, child) => {\n            return memo + child.length();\n        }, 0);\n    }\n    moveChildren(targetParent, refNode) {\n        this.children.forEach(child => {\n            targetParent.insertBefore(child, refNode);\n        });\n    }\n    optimize(context) {\n        super.optimize(context);\n        this.enforceAllowedChildren();\n        if (this.uiNode != null && this.uiNode !== this.domNode.firstChild) {\n            this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);\n        }\n        if (this.children.length === 0) {\n            if (this.statics.defaultChild != null) {\n                const child = this.scroll.create(this.statics.defaultChild.blotName);\n                this.appendChild(child);\n                // TODO double check if necessary\n                // child.optimize(context);\n            }\n            else {\n                this.remove();\n            }\n        }\n    }\n    path(index, inclusive = false) {\n        const [child, offset] = this.children.find(index, inclusive);\n        const position = [[this, index]];\n        if (child instanceof ParentBlot) {\n            return position.concat(child.path(offset, inclusive));\n        }\n        else if (child != null) {\n            position.push([child, offset]);\n        }\n        return position;\n    }\n    removeChild(child) {\n        this.children.remove(child);\n    }\n    replaceWith(name, value) {\n        const replacement = typeof name === 'string' ? this.scroll.create(name, value) : name;\n        if (replacement instanceof ParentBlot) {\n            this.moveChildren(replacement);\n        }\n        return super.replaceWith(replacement);\n    }\n    split(index, force = false) {\n        if (!force) {\n            if (index === 0) {\n                return this;\n            }\n            if (index === this.length()) {\n                return this.next;\n            }\n        }\n        const after = this.clone();\n        if (this.parent) {\n            this.parent.insertBefore(after, this.next || undefined);\n        }\n        this.children.forEachAt(index, this.length(), (child, offset, _length) => {\n            const split = child.split(offset, force);\n            if (split != null) {\n                after.appendChild(split);\n            }\n        });\n        return after;\n    }\n    splitAfter(child) {\n        const after = this.clone();\n        while (child.next != null) {\n            after.appendChild(child.next);\n        }\n        if (this.parent) {\n            this.parent.insertBefore(after, this.next || undefined);\n        }\n        return after;\n    }\n    unwrap() {\n        if (this.parent) {\n            this.moveChildren(this.parent, this.next || undefined);\n        }\n        this.remove();\n    }\n    update(mutations, _context) {\n        const addedNodes = [];\n        const removedNodes = [];\n        mutations.forEach(mutation => {\n            if (mutation.target === this.domNode && mutation.type === 'childList') {\n                addedNodes.push.apply(addedNodes, mutation.addedNodes);\n                removedNodes.push.apply(removedNodes, mutation.removedNodes);\n            }\n        });\n        removedNodes.forEach((node) => {\n            // Check node has actually been removed\n            // One exception is Chrome does not immediately remove IFRAMEs\n            // from DOM but MutationRecord is correct in its reported removal\n            if (node.parentNode != null &&\n                // @ts-ignore\n                node.tagName !== 'IFRAME' &&\n                document.body.compareDocumentPosition(node) &\n                    Node.DOCUMENT_POSITION_CONTAINED_BY) {\n                return;\n            }\n            const blot = this.scroll.find(node);\n            if (blot == null) {\n                return;\n            }\n            if (blot.domNode.parentNode == null ||\n                blot.domNode.parentNode === this.domNode) {\n                blot.detach();\n            }\n        });\n        addedNodes\n            .filter(node => {\n            return node.parentNode === this.domNode || node === this.uiNode;\n        })\n            .sort((a, b) => {\n            if (a === b) {\n                return 0;\n            }\n            if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {\n                return 1;\n            }\n            return -1;\n        })\n            .forEach(node => {\n            let refBlot = null;\n            if (node.nextSibling != null) {\n                refBlot = this.scroll.find(node.nextSibling);\n            }\n            const blot = makeAttachedBlot(node, this.scroll);\n            if (blot.next !== refBlot || blot.next == null) {\n                if (blot.parent != null) {\n                    blot.parent.removeChild(this);\n                }\n                this.insertBefore(blot, refBlot || undefined);\n            }\n        });\n        this.enforceAllowedChildren();\n    }\n}\nParentBlot.uiClass = '';\nfunction makeAttachedBlot(node, scroll) {\n    let blot = scroll.find(node);\n    if (blot == null) {\n        try {\n            blot = scroll.create(node);\n        }\n        catch (e) {\n            blot = scroll.create(_scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INLINE);\n            Array.from(node.childNodes).forEach((child) => {\n                // @ts-ignore\n                blot.domNode.appendChild(child);\n            });\n            if (node.parentNode) {\n                node.parentNode.replaceChild(blot.domNode, node);\n            }\n            blot.attach();\n        }\n    }\n    return blot;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ParentBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/parent.ts?");

        /***/
      },

      /***/"./node_modules/parchment/src/blot/abstract/shadow.ts":
      /*!************************************************************!*\
        !*** ./node_modules/parchment/src/blot/abstract/shadow.ts ***!
        \************************************************************/
      /*! exports provided: default */
      /***/function node_modulesParchmentSrcBlotAbstractShadowTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error */ \"./node_modules/parchment/src/error.ts\");\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../registry */ \"./node_modules/parchment/src/registry.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scope */ \"./node_modules/parchment/src/scope.ts\");\n\n\n\nclass ShadowBlot {\n    constructor(scroll, domNode) {\n        this.scroll = scroll;\n        this.domNode = domNode;\n        _registry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blots.set(domNode, this);\n        this.prev = null;\n        this.next = null;\n    }\n    static create(value) {\n        if (this.tagName == null) {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Blot definition missing tagName');\n        }\n        let node;\n        if (Array.isArray(this.tagName)) {\n            if (typeof value === 'string') {\n                value = value.toUpperCase();\n                if (parseInt(value, 10).toString() === value) {\n                    value = parseInt(value, 10);\n                }\n            }\n            if (typeof value === 'number') {\n                node = document.createElement(this.tagName[value - 1]);\n            }\n            else if (this.tagName.indexOf(value) > -1) {\n                node = document.createElement(value);\n            }\n            else {\n                node = document.createElement(this.tagName[0]);\n            }\n        }\n        else {\n            node = document.createElement(this.tagName);\n        }\n        if (this.className) {\n            node.classList.add(this.className);\n        }\n        return node;\n    }\n    // Hack for accessing inherited static methods\n    get statics() {\n        return this.constructor;\n    }\n    attach() {\n        // Nothing to do\n    }\n    clone() {\n        const domNode = this.domNode.cloneNode(false);\n        return this.scroll.create(domNode);\n    }\n    detach() {\n        if (this.parent != null) {\n            this.parent.removeChild(this);\n        }\n        _registry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blots.delete(this.domNode);\n    }\n    deleteAt(index, length) {\n        const blot = this.isolate(index, length);\n        blot.remove();\n    }\n    formatAt(index, length, name, value) {\n        const blot = this.isolate(index, length);\n        if (this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOT) != null && value) {\n            blot.wrap(name, value);\n        }\n        else if (this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ATTRIBUTE) != null) {\n            const parent = this.scroll.create(this.statics.scope);\n            blot.wrap(parent);\n            parent.format(name, value);\n        }\n    }\n    insertAt(index, value, def) {\n        const blot = def == null\n            ? this.scroll.create('text', value)\n            : this.scroll.create(value, def);\n        const ref = this.split(index);\n        this.parent.insertBefore(blot, ref || undefined);\n    }\n    isolate(index, length) {\n        const target = this.split(index);\n        if (target == null) {\n            throw new Error('Attempt to isolate at end');\n        }\n        target.split(length);\n        return target;\n    }\n    length() {\n        return 1;\n    }\n    offset(root = this.parent) {\n        if (this.parent == null || this === root) {\n            return 0;\n        }\n        return this.parent.children.offset(this) + this.parent.offset(root);\n    }\n    optimize(_context) {\n        if (this.statics.requiredContainer &&\n            !(this.parent instanceof this.statics.requiredContainer)) {\n            this.wrap(this.statics.requiredContainer.blotName);\n        }\n    }\n    remove() {\n        if (this.domNode.parentNode != null) {\n            this.domNode.parentNode.removeChild(this.domNode);\n        }\n        this.detach();\n    }\n    replaceWith(name, value) {\n        const replacement = typeof name === 'string' ? this.scroll.create(name, value) : name;\n        if (this.parent != null) {\n            this.parent.insertBefore(replacement, this.next || undefined);\n            this.remove();\n        }\n        return replacement;\n    }\n    split(index, _force) {\n        return index === 0 ? this : this.next;\n    }\n    update(_mutations, _context) {\n        // Nothing to do by default\n    }\n    wrap(name, value) {\n        const wrapper = typeof name === 'string'\n            ? this.scroll.create(name, value)\n            : name;\n        if (this.parent != null) {\n            this.parent.insertBefore(wrapper, this.next || undefined);\n        }\n        if (typeof wrapper.appendChild !== 'function') {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`Cannot wrap ${name}`);\n        }\n        wrapper.appendChild(this);\n        return wrapper;\n    }\n}\nShadowBlot.blotName = 'abstract';\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShadowBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/shadow.ts?");

        /***/
      },

      /***/"./node_modules/parchment/src/blot/block.ts":
      /*!**************************************************!*\
        !*** ./node_modules/parchment/src/blot/block.ts ***!
        \**************************************************/
      /*! exports provided: default */
      /***/function node_modulesParchmentSrcBlotBlockTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../attributor/attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n/* harmony import */ var _attributor_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributor/store */ \"./node_modules/parchment/src/attributor/store.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n/* harmony import */ var _abstract_parent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abstract/parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inline */ \"./node_modules/parchment/src/blot/inline.ts\");\n\n\n\n\n\n\nclass BlockBlot extends _abstract_parent__WEBPACK_IMPORTED_MODULE_4__[\"default\"] {\n    constructor(scroll, domNode) {\n        super(scroll, domNode);\n        this.attributes = new _attributor_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.domNode);\n    }\n    static formats(domNode, scroll) {\n        const match = scroll.query(BlockBlot.blotName);\n        if (match != null &&\n            domNode.tagName === match.tagName) {\n            return undefined;\n        }\n        else if (typeof this.tagName === 'string') {\n            return true;\n        }\n        else if (Array.isArray(this.tagName)) {\n            return domNode.tagName.toLowerCase();\n        }\n    }\n    format(name, value) {\n        const format = this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOCK);\n        if (format == null) {\n            return;\n        }\n        else if (format instanceof _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n            this.attributes.attribute(format, value);\n        }\n        else if (name === this.statics.blotName && !value) {\n            this.replaceWith(BlockBlot.blotName);\n        }\n        else if (value &&\n            (name !== this.statics.blotName || this.formats()[name] !== value)) {\n            this.replaceWith(name, value);\n        }\n    }\n    formats() {\n        const formats = this.attributes.values();\n        const format = this.statics.formats(this.domNode, this.scroll);\n        if (format != null) {\n            formats[this.statics.blotName] = format;\n        }\n        return formats;\n    }\n    formatAt(index, length, name, value) {\n        if (this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOCK) != null) {\n            this.format(name, value);\n        }\n        else {\n            super.formatAt(index, length, name, value);\n        }\n    }\n    insertAt(index, value, def) {\n        if (def == null || this.scroll.query(value, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INLINE) != null) {\n            // Insert text or inline\n            super.insertAt(index, value, def);\n        }\n        else {\n            const after = this.split(index);\n            if (after != null) {\n                const blot = this.scroll.create(value, def);\n                after.parent.insertBefore(blot, after);\n            }\n            else {\n                throw new Error('Attempt to insertAt after block boundaries');\n            }\n        }\n    }\n    replaceWith(name, value) {\n        const replacement = super.replaceWith(name, value);\n        this.attributes.copy(replacement);\n        return replacement;\n    }\n    update(mutations, context) {\n        super.update(mutations, context);\n        const attributeChanged = mutations.some(mutation => mutation.target === this.domNode && mutation.type === 'attributes');\n        if (attributeChanged) {\n            this.attributes.build();\n        }\n    }\n}\nBlockBlot.blotName = 'block';\nBlockBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOCK_BLOT;\nBlockBlot.tagName = 'P';\nBlockBlot.allowedChildren = [\n    _inline__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    BlockBlot,\n    _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlockBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/block.ts?");

        /***/
      },

      /***/"./node_modules/parchment/src/blot/embed.ts":
      /*!**************************************************!*\
        !*** ./node_modules/parchment/src/blot/embed.ts ***!
        \**************************************************/
      /*! exports provided: default */
      /***/function node_modulesParchmentSrcBlotEmbedTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n\nclass EmbedBlot extends _abstract_leaf__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static formats(_domNode, _scroll) {\n        return undefined;\n    }\n    format(name, value) {\n        // super.formatAt wraps, which is what we want in general,\n        // but this allows subclasses to overwrite for formats\n        // that just apply to particular embeds\n        super.formatAt(0, this.length(), name, value);\n    }\n    formatAt(index, length, name, value) {\n        if (index === 0 && length === this.length()) {\n            this.format(name, value);\n        }\n        else {\n            super.formatAt(index, length, name, value);\n        }\n    }\n    formats() {\n        return this.statics.formats(this.domNode, this.scroll);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmbedBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/embed.ts?");

        /***/
      },

      /***/"./node_modules/parchment/src/blot/inline.ts":
      /*!***************************************************!*\
        !*** ./node_modules/parchment/src/blot/inline.ts ***!
        \***************************************************/
      /*! exports provided: default */
      /***/function node_modulesParchmentSrcBlotInlineTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../attributor/attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n/* harmony import */ var _attributor_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributor/store */ \"./node_modules/parchment/src/attributor/store.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n/* harmony import */ var _abstract_parent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abstract/parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n\n\n\n\n\n// Shallow object comparison\nfunction isEqual(obj1, obj2) {\n    if (Object.keys(obj1).length !== Object.keys(obj2).length) {\n        return false;\n    }\n    // @ts-ignore\n    for (const prop in obj1) {\n        // @ts-ignore\n        if (obj1[prop] !== obj2[prop]) {\n            return false;\n        }\n    }\n    return true;\n}\nclass InlineBlot extends _abstract_parent__WEBPACK_IMPORTED_MODULE_4__[\"default\"] {\n    constructor(scroll, domNode) {\n        super(scroll, domNode);\n        this.attributes = new _attributor_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.domNode);\n    }\n    static formats(domNode, scroll) {\n        const match = scroll.query(InlineBlot.blotName);\n        if (match != null &&\n            domNode.tagName === match.tagName) {\n            return undefined;\n        }\n        else if (typeof this.tagName === 'string') {\n            return true;\n        }\n        else if (Array.isArray(this.tagName)) {\n            return domNode.tagName.toLowerCase();\n        }\n        return undefined;\n    }\n    format(name, value) {\n        if (name === this.statics.blotName && !value) {\n            this.children.forEach(child => {\n                if (!(child instanceof InlineBlot)) {\n                    child = child.wrap(InlineBlot.blotName, true);\n                }\n                this.attributes.copy(child);\n            });\n            this.unwrap();\n        }\n        else {\n            const format = this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INLINE);\n            if (format == null) {\n                return;\n            }\n            if (format instanceof _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n                this.attributes.attribute(format, value);\n            }\n            else if (value &&\n                (name !== this.statics.blotName || this.formats()[name] !== value)) {\n                this.replaceWith(name, value);\n            }\n        }\n    }\n    formats() {\n        const formats = this.attributes.values();\n        const format = this.statics.formats(this.domNode, this.scroll);\n        if (format != null) {\n            formats[this.statics.blotName] = format;\n        }\n        return formats;\n    }\n    formatAt(index, length, name, value) {\n        if (this.formats()[name] != null ||\n            this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ATTRIBUTE)) {\n            const blot = this.isolate(index, length);\n            blot.format(name, value);\n        }\n        else {\n            super.formatAt(index, length, name, value);\n        }\n    }\n    optimize(context) {\n        super.optimize(context);\n        const formats = this.formats();\n        if (Object.keys(formats).length === 0) {\n            return this.unwrap(); // unformatted span\n        }\n        const next = this.next;\n        if (next instanceof InlineBlot &&\n            next.prev === this &&\n            isEqual(formats, next.formats())) {\n            next.moveChildren(this);\n            next.remove();\n        }\n    }\n    replaceWith(name, value) {\n        const replacement = super.replaceWith(name, value);\n        this.attributes.copy(replacement);\n        return replacement;\n    }\n    update(mutations, context) {\n        super.update(mutations, context);\n        const attributeChanged = mutations.some(mutation => mutation.target === this.domNode && mutation.type === 'attributes');\n        if (attributeChanged) {\n            this.attributes.build();\n        }\n    }\n    wrap(name, value) {\n        const wrapper = super.wrap(name, value);\n        if (wrapper instanceof InlineBlot) {\n            this.attributes.move(wrapper);\n        }\n        return wrapper;\n    }\n}\nInlineBlot.allowedChildren = [InlineBlot, _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\nInlineBlot.blotName = 'inline';\nInlineBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INLINE_BLOT;\nInlineBlot.tagName = 'SPAN';\n/* harmony default export */ __webpack_exports__[\"default\"] = (InlineBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/inline.ts?");

        /***/
      },

      /***/"./node_modules/parchment/src/blot/scroll.ts":
      /*!***************************************************!*\
        !*** ./node_modules/parchment/src/blot/scroll.ts ***!
        \***************************************************/
      /*! exports provided: default */
      /***/function node_modulesParchmentSrcBlotScrollTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../registry */ \"./node_modules/parchment/src/registry.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _abstract_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract/container */ \"./node_modules/parchment/src/blot/abstract/container.ts\");\n/* harmony import */ var _abstract_parent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block */ \"./node_modules/parchment/src/blot/block.ts\");\n\n\n\n\n\nconst OBSERVER_CONFIG = {\n    attributes: true,\n    characterData: true,\n    characterDataOldValue: true,\n    childList: true,\n    subtree: true,\n};\nconst MAX_OPTIMIZE_ITERATIONS = 100;\nclass ScrollBlot extends _abstract_parent__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    constructor(registry, node) {\n        // @ts-ignore\n        super(null, node);\n        this.registry = registry;\n        this.scroll = this;\n        this.build();\n        this.observer = new MutationObserver((mutations) => {\n            this.update(mutations);\n        });\n        this.observer.observe(this.domNode, OBSERVER_CONFIG);\n        this.attach();\n    }\n    create(input, value) {\n        return this.registry.create(this, input, value);\n    }\n    find(node, bubble = false) {\n        return this.registry.find(node, bubble);\n    }\n    query(query, scope = _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ANY) {\n        return this.registry.query(query, scope);\n    }\n    register(...definitions) {\n        return this.registry.register(...definitions);\n    }\n    build() {\n        if (this.scroll == null) {\n            return;\n        }\n        super.build();\n    }\n    detach() {\n        super.detach();\n        this.observer.disconnect();\n    }\n    deleteAt(index, length) {\n        this.update();\n        if (index === 0 && length === this.length()) {\n            this.children.forEach(child => {\n                child.remove();\n            });\n        }\n        else {\n            super.deleteAt(index, length);\n        }\n    }\n    formatAt(index, length, name, value) {\n        this.update();\n        super.formatAt(index, length, name, value);\n    }\n    insertAt(index, value, def) {\n        this.update();\n        super.insertAt(index, value, def);\n    }\n    optimize(mutations = [], context = {}) {\n        super.optimize(context);\n        const mutationsMap = context.mutationsMap || new WeakMap();\n        // We must modify mutations directly, cannot make copy and then modify\n        let records = Array.from(this.observer.takeRecords());\n        // Array.push currently seems to be implemented by a non-tail recursive function\n        // so we cannot just mutations.push.apply(mutations, this.observer.takeRecords());\n        while (records.length > 0) {\n            mutations.push(records.pop());\n        }\n        const mark = (blot, markParent = true) => {\n            if (blot == null || blot === this) {\n                return;\n            }\n            if (blot.domNode.parentNode == null) {\n                return;\n            }\n            if (!mutationsMap.has(blot.domNode)) {\n                mutationsMap.set(blot.domNode, []);\n            }\n            if (markParent) {\n                mark(blot.parent);\n            }\n        };\n        const optimize = (blot) => {\n            // Post-order traversal\n            if (!mutationsMap.has(blot.domNode)) {\n                return;\n            }\n            if (blot instanceof _abstract_parent__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n                blot.children.forEach(optimize);\n            }\n            mutationsMap.delete(blot.domNode);\n            blot.optimize(context);\n        };\n        let remaining = mutations;\n        for (let i = 0; remaining.length > 0; i += 1) {\n            if (i >= MAX_OPTIMIZE_ITERATIONS) {\n                throw new Error('[Parchment] Maximum optimize iterations reached');\n            }\n            remaining.forEach((mutation) => {\n                const blot = this.find(mutation.target, true);\n                if (blot == null) {\n                    return;\n                }\n                if (blot.domNode === mutation.target) {\n                    if (mutation.type === 'childList') {\n                        mark(this.find(mutation.previousSibling, false));\n                        Array.from(mutation.addedNodes).forEach((node) => {\n                            const child = this.find(node, false);\n                            mark(child, false);\n                            if (child instanceof _abstract_parent__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n                                child.children.forEach((grandChild) => {\n                                    mark(grandChild, false);\n                                });\n                            }\n                        });\n                    }\n                    else if (mutation.type === 'attributes') {\n                        mark(blot.prev);\n                    }\n                }\n                mark(blot);\n            });\n            this.children.forEach(optimize);\n            remaining = Array.from(this.observer.takeRecords());\n            records = remaining.slice();\n            while (records.length > 0) {\n                mutations.push(records.pop());\n            }\n        }\n    }\n    update(mutations, context = {}) {\n        mutations = mutations || this.observer.takeRecords();\n        const mutationsMap = new WeakMap();\n        mutations\n            .map((mutation) => {\n            const blot = _registry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(mutation.target, true);\n            if (blot == null) {\n                return null;\n            }\n            if (mutationsMap.has(blot.domNode)) {\n                mutationsMap.get(blot.domNode).push(mutation);\n                return null;\n            }\n            else {\n                mutationsMap.set(blot.domNode, [mutation]);\n                return blot;\n            }\n        })\n            .forEach((blot) => {\n            if (blot != null && blot !== this && mutationsMap.has(blot.domNode)) {\n                blot.update(mutationsMap.get(blot.domNode) || [], context);\n            }\n        });\n        context.mutationsMap = mutationsMap;\n        if (mutationsMap.has(this.domNode)) {\n            super.update(mutationsMap.get(this.domNode), context);\n        }\n        this.optimize(mutations, context);\n    }\n}\nScrollBlot.blotName = 'scroll';\nScrollBlot.defaultChild = _block__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nScrollBlot.allowedChildren = [_block__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _abstract_container__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\nScrollBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BLOCK_BLOT;\nScrollBlot.tagName = 'DIV';\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/scroll.ts?");

        /***/
      },

      /***/"./node_modules/parchment/src/blot/text.ts":
      /*!*************************************************!*\
        !*** ./node_modules/parchment/src/blot/text.ts ***!
        \*************************************************/
      /*! exports provided: default */
      /***/function node_modulesParchmentSrcBlotTextTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n\n\nclass TextBlot extends _abstract_leaf__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor(scroll, node) {\n        super(scroll, node);\n        this.text = this.statics.value(this.domNode);\n    }\n    static create(value) {\n        return document.createTextNode(value);\n    }\n    static value(domNode) {\n        return domNode.data;\n    }\n    deleteAt(index, length) {\n        this.domNode.data = this.text =\n            this.text.slice(0, index) + this.text.slice(index + length);\n    }\n    index(node, offset) {\n        if (this.domNode === node) {\n            return offset;\n        }\n        return -1;\n    }\n    insertAt(index, value, def) {\n        if (def == null) {\n            this.text = this.text.slice(0, index) + value + this.text.slice(index);\n            this.domNode.data = this.text;\n        }\n        else {\n            super.insertAt(index, value, def);\n        }\n    }\n    length() {\n        return this.text.length;\n    }\n    optimize(context) {\n        super.optimize(context);\n        this.text = this.statics.value(this.domNode);\n        if (this.text.length === 0) {\n            this.remove();\n        }\n        else if (this.next instanceof TextBlot && this.next.prev === this) {\n            this.insertAt(this.length(), this.next.value());\n            this.next.remove();\n        }\n    }\n    position(index, _inclusive = false) {\n        return [this.domNode, index];\n    }\n    split(index, force = false) {\n        if (!force) {\n            if (index === 0) {\n                return this;\n            }\n            if (index === this.length()) {\n                return this.next;\n            }\n        }\n        const after = this.scroll.create(this.domNode.splitText(index));\n        this.parent.insertBefore(after, this.next || undefined);\n        this.text = this.statics.value(this.domNode);\n        return after;\n    }\n    update(mutations, _context) {\n        if (mutations.some(mutation => {\n            return (mutation.type === 'characterData' && mutation.target === this.domNode);\n        })) {\n            this.text = this.statics.value(this.domNode);\n        }\n    }\n    value() {\n        return this.text;\n    }\n}\nTextBlot.blotName = 'text';\nTextBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INLINE_BLOT;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/text.ts?");

        /***/
      },

      /***/"./node_modules/parchment/src/collection/linked-list.ts":
      /*!**************************************************************!*\
        !*** ./node_modules/parchment/src/collection/linked-list.ts ***!
        \**************************************************************/
      /*! exports provided: default */
      /***/function node_modulesParchmentSrcCollectionLinkedListTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\nclass LinkedList {\n    constructor() {\n        this.head = null;\n        this.tail = null;\n        this.length = 0;\n    }\n    append(...nodes) {\n        this.insertBefore(nodes[0], null);\n        if (nodes.length > 1) {\n            this.append.apply(this, nodes.slice(1));\n        }\n    }\n    at(index) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur && index > 0) {\n            index -= 1;\n            cur = next();\n        }\n        return cur;\n    }\n    contains(node) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur) {\n            if (cur === node) {\n                return true;\n            }\n            cur = next();\n        }\n        return false;\n    }\n    indexOf(node) {\n        const next = this.iterator();\n        let cur = next();\n        let index = 0;\n        while (cur) {\n            if (cur === node) {\n                return index;\n            }\n            index += 1;\n            cur = next();\n        }\n        return -1;\n    }\n    insertBefore(node, refNode) {\n        if (node == null) {\n            return;\n        }\n        this.remove(node);\n        node.next = refNode;\n        if (refNode != null) {\n            node.prev = refNode.prev;\n            if (refNode.prev != null) {\n                refNode.prev.next = node;\n            }\n            refNode.prev = node;\n            if (refNode === this.head) {\n                this.head = node;\n            }\n        }\n        else if (this.tail != null) {\n            this.tail.next = node;\n            node.prev = this.tail;\n            this.tail = node;\n        }\n        else {\n            node.prev = null;\n            this.head = this.tail = node;\n        }\n        this.length += 1;\n    }\n    offset(target) {\n        let index = 0;\n        let cur = this.head;\n        while (cur != null) {\n            if (cur === target) {\n                return index;\n            }\n            index += cur.length();\n            cur = cur.next;\n        }\n        return -1;\n    }\n    remove(node) {\n        if (!this.contains(node)) {\n            return;\n        }\n        if (node.prev != null) {\n            node.prev.next = node.next;\n        }\n        if (node.next != null) {\n            node.next.prev = node.prev;\n        }\n        if (node === this.head) {\n            this.head = node.next;\n        }\n        if (node === this.tail) {\n            this.tail = node.prev;\n        }\n        this.length -= 1;\n    }\n    iterator(curNode = this.head) {\n        // TODO use yield when we can\n        return () => {\n            const ret = curNode;\n            if (curNode != null) {\n                curNode = curNode.next;\n            }\n            return ret;\n        };\n    }\n    find(index, inclusive = false) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur) {\n            const length = cur.length();\n            if (index < length ||\n                (inclusive &&\n                    index === length &&\n                    (cur.next == null || cur.next.length() !== 0))) {\n                return [cur, index];\n            }\n            index -= length;\n            cur = next();\n        }\n        return [null, 0];\n    }\n    forEach(callback) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur) {\n            callback(cur);\n            cur = next();\n        }\n    }\n    forEachAt(index, length, callback) {\n        if (length <= 0) {\n            return;\n        }\n        const [startNode, offset] = this.find(index);\n        let curIndex = index - offset;\n        const next = this.iterator(startNode);\n        let cur = next();\n        while (cur && curIndex < index + length) {\n            const curLength = cur.length();\n            if (index > curIndex) {\n                callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));\n            }\n            else {\n                callback(cur, 0, Math.min(curLength, index + length - curIndex));\n            }\n            curIndex += curLength;\n            cur = next();\n        }\n    }\n    map(callback) {\n        return this.reduce((memo, cur) => {\n            memo.push(callback(cur));\n            return memo;\n        }, []);\n    }\n    reduce(callback, memo) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur) {\n            memo = callback(memo, cur);\n            cur = next();\n        }\n        return memo;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkedList);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/collection/linked-list.ts?");

        /***/
      },

      /***/"./node_modules/parchment/src/error.ts":
      /*!*********************************************!*\
        !*** ./node_modules/parchment/src/error.ts ***!
        \*********************************************/
      /*! exports provided: default */
      /***/function node_modulesParchmentSrcErrorTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ParchmentError; });\nclass ParchmentError extends Error {\n    constructor(message) {\n        message = '[Parchment] ' + message;\n        super(message);\n        this.message = message;\n        this.name = this.constructor.name;\n    }\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/error.ts?");

        /***/
      },

      /***/"./node_modules/parchment/src/parchment.ts":
      /*!*************************************************!*\
        !*** ./node_modules/parchment/src/parchment.ts ***!
        \*************************************************/
      /*! exports provided: ParentBlot, ContainerBlot, LeafBlot, EmbedBlot, ScrollBlot, BlockBlot, InlineBlot, TextBlot, Attributor, ClassAttributor, StyleAttributor, AttributorStore, Registry, Scope */
      /***/function node_modulesParchmentSrcParchmentTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blot_abstract_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blot/abstract/container */ \"./node_modules/parchment/src/blot/abstract/container.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ContainerBlot\", function() { return _blot_abstract_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _blot_abstract_leaf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blot/abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LeafBlot\", function() { return _blot_abstract_leaf__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _blot_abstract_parent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blot/abstract/parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ParentBlot\", function() { return _blot_abstract_parent__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _blot_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blot/block */ \"./node_modules/parchment/src/blot/block.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BlockBlot\", function() { return _blot_block__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _blot_embed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blot/embed */ \"./node_modules/parchment/src/blot/embed.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"EmbedBlot\", function() { return _blot_embed__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _blot_inline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blot/inline */ \"./node_modules/parchment/src/blot/inline.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InlineBlot\", function() { return _blot_inline__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _blot_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blot/scroll */ \"./node_modules/parchment/src/blot/scroll.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ScrollBlot\", function() { return _blot_scroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _blot_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blot/text */ \"./node_modules/parchment/src/blot/text.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TextBlot\", function() { return _blot_text__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _attributor_attributor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attributor/attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Attributor\", function() { return _attributor_attributor__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _attributor_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attributor/class */ \"./node_modules/parchment/src/attributor/class.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ClassAttributor\", function() { return _attributor_class__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _attributor_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./attributor/store */ \"./node_modules/parchment/src/attributor/store.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AttributorStore\", function() { return _attributor_store__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _attributor_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./attributor/style */ \"./node_modules/parchment/src/attributor/style.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StyleAttributor\", function() { return _attributor_style__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./registry */ \"./node_modules/parchment/src/registry.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Registry\", function() { return _registry__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Scope\", function() { return _scope__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/parchment.ts?");

        /***/
      },

      /***/"./node_modules/parchment/src/registry.ts":
      /*!************************************************!*\
        !*** ./node_modules/parchment/src/registry.ts ***!
        \************************************************/
      /*! exports provided: default */
      /***/function node_modulesParchmentSrcRegistryTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Registry; });\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ \"./node_modules/parchment/src/error.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scope */ \"./node_modules/parchment/src/scope.ts\");\n\n\nclass Registry {\n    constructor() {\n        this.attributes = {};\n        this.classes = {};\n        this.tags = {};\n        this.types = {};\n    }\n    static find(node, bubble = false) {\n        if (node == null) {\n            return null;\n        }\n        if (this.blots.has(node)) {\n            return this.blots.get(node) || null;\n        }\n        if (bubble) {\n            return this.find(node.parentNode, bubble);\n        }\n        return null;\n    }\n    create(scroll, input, value) {\n        const match = this.query(input);\n        if (match == null) {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`Unable to create ${input} blot`);\n        }\n        const blotClass = match;\n        const node = \n        // @ts-ignore\n        input instanceof Node || input.nodeType === Node.TEXT_NODE\n            ? input\n            : blotClass.create(value);\n        const blot = new blotClass(scroll, node, value);\n        Registry.blots.set(blot.domNode, blot);\n        return blot;\n    }\n    find(node, bubble = false) {\n        return Registry.find(node, bubble);\n    }\n    query(query, scope = _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ANY) {\n        let match;\n        if (typeof query === 'string') {\n            match = this.types[query] || this.attributes[query];\n            // @ts-ignore\n        }\n        else if (query instanceof Text || query.nodeType === Node.TEXT_NODE) {\n            match = this.types.text;\n        }\n        else if (typeof query === 'number') {\n            if (query & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LEVEL & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BLOCK) {\n                match = this.types.block;\n            }\n            else if (query & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LEVEL & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].INLINE) {\n                match = this.types.inline;\n            }\n        }\n        else if (query instanceof HTMLElement) {\n            const names = (query.getAttribute('class') || '').split(/\\s+/);\n            names.some(name => {\n                match = this.classes[name];\n                if (match) {\n                    return true;\n                }\n                return false;\n            });\n            match = match || this.tags[query.tagName];\n        }\n        if (match == null) {\n            return null;\n        }\n        // @ts-ignore\n        if (scope & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LEVEL & match.scope && scope & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].TYPE & match.scope) {\n            return match;\n        }\n        return null;\n    }\n    register(...definitions) {\n        if (definitions.length > 1) {\n            return definitions.map(d => {\n                return this.register(d);\n            });\n        }\n        const definition = definitions[0];\n        if (typeof definition.blotName !== 'string' &&\n            typeof definition.attrName !== 'string') {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Invalid definition');\n        }\n        else if (definition.blotName === 'abstract') {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Cannot register abstract class');\n        }\n        this.types[definition.blotName || definition.attrName] = definition;\n        if (typeof definition.keyName === 'string') {\n            this.attributes[definition.keyName] = definition;\n        }\n        else {\n            if (definition.className != null) {\n                this.classes[definition.className] = definition;\n            }\n            if (definition.tagName != null) {\n                if (Array.isArray(definition.tagName)) {\n                    definition.tagName = definition.tagName.map((tagName) => {\n                        return tagName.toUpperCase();\n                    });\n                }\n                else {\n                    definition.tagName = definition.tagName.toUpperCase();\n                }\n                const tagNames = Array.isArray(definition.tagName)\n                    ? definition.tagName\n                    : [definition.tagName];\n                tagNames.forEach((tag) => {\n                    if (this.tags[tag] == null || definition.className == null) {\n                        this.tags[tag] = definition;\n                    }\n                });\n            }\n        }\n        return definition;\n    }\n}\nRegistry.blots = new WeakMap();\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/registry.ts?");

        /***/
      },

      /***/"./node_modules/parchment/src/scope.ts":
      /*!*********************************************!*\
        !*** ./node_modules/parchment/src/scope.ts ***!
        \*********************************************/
      /*! exports provided: default */
      /***/function node_modulesParchmentSrcScopeTs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\nvar Scope;\n(function (Scope) {\n    Scope[Scope[\"TYPE\"] = 3] = \"TYPE\";\n    Scope[Scope[\"LEVEL\"] = 12] = \"LEVEL\";\n    Scope[Scope[\"ATTRIBUTE\"] = 13] = \"ATTRIBUTE\";\n    Scope[Scope[\"BLOT\"] = 14] = \"BLOT\";\n    Scope[Scope[\"INLINE\"] = 7] = \"INLINE\";\n    Scope[Scope[\"BLOCK\"] = 11] = \"BLOCK\";\n    Scope[Scope[\"BLOCK_BLOT\"] = 10] = \"BLOCK_BLOT\";\n    Scope[Scope[\"INLINE_BLOT\"] = 6] = \"INLINE_BLOT\";\n    Scope[Scope[\"BLOCK_ATTRIBUTE\"] = 9] = \"BLOCK_ATTRIBUTE\";\n    Scope[Scope[\"INLINE_ATTRIBUTE\"] = 5] = \"INLINE_ATTRIBUTE\";\n    Scope[Scope[\"ANY\"] = 15] = \"ANY\";\n})(Scope || (Scope = {}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scope);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/scope.ts?");

        /***/
      },

      /***/"./node_modules/quill-delta/dist/AttributeMap.js":
      /*!*******************************************************!*\
        !*** ./node_modules/quill-delta/dist/AttributeMap.js ***!
        \*******************************************************/
      /*! no static exports found */
      /***/function node_modulesQuillDeltaDistAttributeMapJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar deep_equal_1 = __importDefault(__webpack_require__(/*! deep-equal */ \"./node_modules/deep-equal/index.js\"));\nvar extend_1 = __importDefault(__webpack_require__(/*! extend */ \"./node_modules/extend/index.js\"));\nvar AttributeMap;\n(function (AttributeMap) {\n    function compose(a, b, keepNull) {\n        if (a === void 0) { a = {}; }\n        if (b === void 0) { b = {}; }\n        if (typeof a !== 'object') {\n            a = {};\n        }\n        if (typeof b !== 'object') {\n            b = {};\n        }\n        var attributes = extend_1.default(true, {}, b);\n        if (!keepNull) {\n            attributes = Object.keys(attributes).reduce(function (copy, key) {\n                if (attributes[key] != null) {\n                    copy[key] = attributes[key];\n                }\n                return copy;\n            }, {});\n        }\n        for (var key in a) {\n            if (a[key] !== undefined && b[key] === undefined) {\n                attributes[key] = a[key];\n            }\n        }\n        return Object.keys(attributes).length > 0 ? attributes : undefined;\n    }\n    AttributeMap.compose = compose;\n    function diff(a, b) {\n        if (a === void 0) { a = {}; }\n        if (b === void 0) { b = {}; }\n        if (typeof a !== 'object') {\n            a = {};\n        }\n        if (typeof b !== 'object') {\n            b = {};\n        }\n        var attributes = Object.keys(a)\n            .concat(Object.keys(b))\n            .reduce(function (attrs, key) {\n            if (!deep_equal_1.default(a[key], b[key])) {\n                attrs[key] = b[key] === undefined ? null : b[key];\n            }\n            return attrs;\n        }, {});\n        return Object.keys(attributes).length > 0 ? attributes : undefined;\n    }\n    AttributeMap.diff = diff;\n    function transform(a, b, priority) {\n        if (priority === void 0) { priority = false; }\n        if (typeof a !== 'object') {\n            return b;\n        }\n        if (typeof b !== 'object') {\n            return undefined;\n        }\n        if (!priority) {\n            return b; // b simply overwrites us without priority\n        }\n        var attributes = Object.keys(b).reduce(function (attrs, key) {\n            if (a[key] === undefined) {\n                attrs[key] = b[key]; // null is a valid value\n            }\n            return attrs;\n        }, {});\n        return Object.keys(attributes).length > 0 ? attributes : undefined;\n    }\n    AttributeMap.transform = transform;\n})(AttributeMap || (AttributeMap = {}));\nexports.default = AttributeMap;\n//# sourceMappingURL=AttributeMap.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/AttributeMap.js?");

        /***/
      },

      /***/"./node_modules/quill-delta/dist/Delta.js":
      /*!************************************************!*\
        !*** ./node_modules/quill-delta/dist/Delta.js ***!
        \************************************************/
      /*! no static exports found */
      /***/function node_modulesQuillDeltaDistDeltaJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar deep_equal_1 = __importDefault(__webpack_require__(/*! deep-equal */ \"./node_modules/deep-equal/index.js\"));\nvar extend_1 = __importDefault(__webpack_require__(/*! extend */ \"./node_modules/extend/index.js\"));\nvar fast_diff_1 = __importDefault(__webpack_require__(/*! fast-diff */ \"./node_modules/quill-delta/node_modules/fast-diff/diff.js\"));\nvar AttributeMap_1 = __importDefault(__webpack_require__(/*! ./AttributeMap */ \"./node_modules/quill-delta/dist/AttributeMap.js\"));\nvar Op_1 = __importDefault(__webpack_require__(/*! ./Op */ \"./node_modules/quill-delta/dist/Op.js\"));\nvar NULL_CHARACTER = String.fromCharCode(0); // Placeholder char for embed in diff()\nvar Delta = /** @class */ (function () {\n    function Delta(ops) {\n        // Assume we are given a well formed ops\n        if (Array.isArray(ops)) {\n            this.ops = ops;\n        }\n        else if (ops != null && Array.isArray(ops.ops)) {\n            this.ops = ops.ops;\n        }\n        else {\n            this.ops = [];\n        }\n    }\n    Delta.prototype.insert = function (arg, attributes) {\n        var newOp = {};\n        if (typeof arg === 'string' && arg.length === 0) {\n            return this;\n        }\n        newOp.insert = arg;\n        if (attributes != null &&\n            typeof attributes === 'object' &&\n            Object.keys(attributes).length > 0) {\n            newOp.attributes = attributes;\n        }\n        return this.push(newOp);\n    };\n    Delta.prototype.delete = function (length) {\n        if (length <= 0) {\n            return this;\n        }\n        return this.push({ delete: length });\n    };\n    Delta.prototype.retain = function (length, attributes) {\n        if (length <= 0) {\n            return this;\n        }\n        var newOp = { retain: length };\n        if (attributes != null &&\n            typeof attributes === 'object' &&\n            Object.keys(attributes).length > 0) {\n            newOp.attributes = attributes;\n        }\n        return this.push(newOp);\n    };\n    Delta.prototype.push = function (newOp) {\n        var index = this.ops.length;\n        var lastOp = this.ops[index - 1];\n        newOp = extend_1.default(true, {}, newOp);\n        if (typeof lastOp === 'object') {\n            if (typeof newOp.delete === 'number' &&\n                typeof lastOp.delete === 'number') {\n                this.ops[index - 1] = { delete: lastOp.delete + newOp.delete };\n                return this;\n            }\n            // Since it does not matter if we insert before or after deleting at the same index,\n            // always prefer to insert first\n            if (typeof lastOp.delete === 'number' && newOp.insert != null) {\n                index -= 1;\n                lastOp = this.ops[index - 1];\n                if (typeof lastOp !== 'object') {\n                    this.ops.unshift(newOp);\n                    return this;\n                }\n            }\n            if (deep_equal_1.default(newOp.attributes, lastOp.attributes)) {\n                if (typeof newOp.insert === 'string' &&\n                    typeof lastOp.insert === 'string') {\n                    this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };\n                    if (typeof newOp.attributes === 'object') {\n                        this.ops[index - 1].attributes = newOp.attributes;\n                    }\n                    return this;\n                }\n                else if (typeof newOp.retain === 'number' &&\n                    typeof lastOp.retain === 'number') {\n                    this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };\n                    if (typeof newOp.attributes === 'object') {\n                        this.ops[index - 1].attributes = newOp.attributes;\n                    }\n                    return this;\n                }\n            }\n        }\n        if (index === this.ops.length) {\n            this.ops.push(newOp);\n        }\n        else {\n            this.ops.splice(index, 0, newOp);\n        }\n        return this;\n    };\n    Delta.prototype.chop = function () {\n        var lastOp = this.ops[this.ops.length - 1];\n        if (lastOp && lastOp.retain && !lastOp.attributes) {\n            this.ops.pop();\n        }\n        return this;\n    };\n    Delta.prototype.filter = function (predicate) {\n        return this.ops.filter(predicate);\n    };\n    Delta.prototype.forEach = function (predicate) {\n        this.ops.forEach(predicate);\n    };\n    Delta.prototype.map = function (predicate) {\n        return this.ops.map(predicate);\n    };\n    Delta.prototype.partition = function (predicate) {\n        var passed = [];\n        var failed = [];\n        this.forEach(function (op) {\n            var target = predicate(op) ? passed : failed;\n            target.push(op);\n        });\n        return [passed, failed];\n    };\n    Delta.prototype.reduce = function (predicate, initialValue) {\n        return this.ops.reduce(predicate, initialValue);\n    };\n    Delta.prototype.changeLength = function () {\n        return this.reduce(function (length, elem) {\n            if (elem.insert) {\n                return length + Op_1.default.length(elem);\n            }\n            else if (elem.delete) {\n                return length - elem.delete;\n            }\n            return length;\n        }, 0);\n    };\n    Delta.prototype.length = function () {\n        return this.reduce(function (length, elem) {\n            return length + Op_1.default.length(elem);\n        }, 0);\n    };\n    Delta.prototype.slice = function (start, end) {\n        if (start === void 0) { start = 0; }\n        if (end === void 0) { end = Infinity; }\n        var ops = [];\n        var iter = Op_1.default.iterator(this.ops);\n        var index = 0;\n        while (index < end && iter.hasNext()) {\n            var nextOp = void 0;\n            if (index < start) {\n                nextOp = iter.next(start - index);\n            }\n            else {\n                nextOp = iter.next(end - index);\n                ops.push(nextOp);\n            }\n            index += Op_1.default.length(nextOp);\n        }\n        return new Delta(ops);\n    };\n    Delta.prototype.compose = function (other) {\n        var thisIter = Op_1.default.iterator(this.ops);\n        var otherIter = Op_1.default.iterator(other.ops);\n        var ops = [];\n        var firstOther = otherIter.peek();\n        if (firstOther != null &&\n            typeof firstOther.retain === 'number' &&\n            firstOther.attributes == null) {\n            var firstLeft = firstOther.retain;\n            while (thisIter.peekType() === 'insert' &&\n                thisIter.peekLength() <= firstLeft) {\n                firstLeft -= thisIter.peekLength();\n                ops.push(thisIter.next());\n            }\n            if (firstOther.retain - firstLeft > 0) {\n                otherIter.next(firstOther.retain - firstLeft);\n            }\n        }\n        var delta = new Delta(ops);\n        while (thisIter.hasNext() || otherIter.hasNext()) {\n            if (otherIter.peekType() === 'insert') {\n                delta.push(otherIter.next());\n            }\n            else if (thisIter.peekType() === 'delete') {\n                delta.push(thisIter.next());\n            }\n            else {\n                var length_1 = Math.min(thisIter.peekLength(), otherIter.peekLength());\n                var thisOp = thisIter.next(length_1);\n                var otherOp = otherIter.next(length_1);\n                if (typeof otherOp.retain === 'number') {\n                    var newOp = {};\n                    if (typeof thisOp.retain === 'number') {\n                        newOp.retain = length_1;\n                    }\n                    else {\n                        newOp.insert = thisOp.insert;\n                    }\n                    // Preserve null when composing with a retain, otherwise remove it for inserts\n                    var attributes = AttributeMap_1.default.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');\n                    if (attributes) {\n                        newOp.attributes = attributes;\n                    }\n                    delta.push(newOp);\n                    // Optimization if rest of other is just retain\n                    if (!otherIter.hasNext() &&\n                        deep_equal_1.default(delta.ops[delta.ops.length - 1], newOp)) {\n                        var rest = new Delta(thisIter.rest());\n                        return delta.concat(rest).chop();\n                    }\n                    // Other op should be delete, we could be an insert or retain\n                    // Insert + delete cancels out\n                }\n                else if (typeof otherOp.delete === 'number' &&\n                    typeof thisOp.retain === 'number') {\n                    delta.push(otherOp);\n                }\n            }\n        }\n        return delta.chop();\n    };\n    Delta.prototype.concat = function (other) {\n        var delta = new Delta(this.ops.slice());\n        if (other.ops.length > 0) {\n            delta.push(other.ops[0]);\n            delta.ops = delta.ops.concat(other.ops.slice(1));\n        }\n        return delta;\n    };\n    Delta.prototype.diff = function (other, cursor) {\n        if (this.ops === other.ops) {\n            return new Delta();\n        }\n        var strings = [this, other].map(function (delta) {\n            return delta\n                .map(function (op) {\n                if (op.insert != null) {\n                    return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;\n                }\n                var prep = delta === other ? 'on' : 'with';\n                throw new Error('diff() called ' + prep + ' non-document');\n            })\n                .join('');\n        });\n        var retDelta = new Delta();\n        var diffResult = fast_diff_1.default(strings[0], strings[1], cursor);\n        var thisIter = Op_1.default.iterator(this.ops);\n        var otherIter = Op_1.default.iterator(other.ops);\n        diffResult.forEach(function (component) {\n            var length = component[1].length;\n            while (length > 0) {\n                var opLength = 0;\n                switch (component[0]) {\n                    case fast_diff_1.default.INSERT:\n                        opLength = Math.min(otherIter.peekLength(), length);\n                        retDelta.push(otherIter.next(opLength));\n                        break;\n                    case fast_diff_1.default.DELETE:\n                        opLength = Math.min(length, thisIter.peekLength());\n                        thisIter.next(opLength);\n                        retDelta.delete(opLength);\n                        break;\n                    case fast_diff_1.default.EQUAL:\n                        opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);\n                        var thisOp = thisIter.next(opLength);\n                        var otherOp = otherIter.next(opLength);\n                        if (deep_equal_1.default(thisOp.insert, otherOp.insert)) {\n                            retDelta.retain(opLength, AttributeMap_1.default.diff(thisOp.attributes, otherOp.attributes));\n                        }\n                        else {\n                            retDelta.push(otherOp).delete(opLength);\n                        }\n                        break;\n                }\n                length -= opLength;\n            }\n        });\n        return retDelta.chop();\n    };\n    Delta.prototype.eachLine = function (predicate, newline) {\n        if (newline === void 0) { newline = '\\n'; }\n        var iter = Op_1.default.iterator(this.ops);\n        var line = new Delta();\n        var i = 0;\n        while (iter.hasNext()) {\n            if (iter.peekType() !== 'insert') {\n                return;\n            }\n            var thisOp = iter.peek();\n            var start = Op_1.default.length(thisOp) - iter.peekLength();\n            var index = typeof thisOp.insert === 'string'\n                ? thisOp.insert.indexOf(newline, start) - start\n                : -1;\n            if (index < 0) {\n                line.push(iter.next());\n            }\n            else if (index > 0) {\n                line.push(iter.next(index));\n            }\n            else {\n                if (predicate(line, iter.next(1).attributes || {}, i) === false) {\n                    return;\n                }\n                i += 1;\n                line = new Delta();\n            }\n        }\n        if (line.length() > 0) {\n            predicate(line, {}, i);\n        }\n    };\n    Delta.prototype.transform = function (arg, priority) {\n        if (priority === void 0) { priority = false; }\n        priority = !!priority;\n        if (typeof arg === 'number') {\n            return this.transformPosition(arg, priority);\n        }\n        var other = arg;\n        var thisIter = Op_1.default.iterator(this.ops);\n        var otherIter = Op_1.default.iterator(other.ops);\n        var delta = new Delta();\n        while (thisIter.hasNext() || otherIter.hasNext()) {\n            if (thisIter.peekType() === 'insert' &&\n                (priority || otherIter.peekType() !== 'insert')) {\n                delta.retain(Op_1.default.length(thisIter.next()));\n            }\n            else if (otherIter.peekType() === 'insert') {\n                delta.push(otherIter.next());\n            }\n            else {\n                var length_2 = Math.min(thisIter.peekLength(), otherIter.peekLength());\n                var thisOp = thisIter.next(length_2);\n                var otherOp = otherIter.next(length_2);\n                if (thisOp.delete) {\n                    // Our delete either makes their delete redundant or removes their retain\n                    continue;\n                }\n                else if (otherOp.delete) {\n                    delta.push(otherOp);\n                }\n                else {\n                    // We retain either their retain or insert\n                    delta.retain(length_2, AttributeMap_1.default.transform(thisOp.attributes, otherOp.attributes, priority));\n                }\n            }\n        }\n        return delta.chop();\n    };\n    Delta.prototype.transformPosition = function (index, priority) {\n        if (priority === void 0) { priority = false; }\n        priority = !!priority;\n        var thisIter = Op_1.default.iterator(this.ops);\n        var offset = 0;\n        while (thisIter.hasNext() && offset <= index) {\n            var length_3 = thisIter.peekLength();\n            var nextType = thisIter.peekType();\n            thisIter.next();\n            if (nextType === 'delete') {\n                index -= Math.min(length_3, index - offset);\n                continue;\n            }\n            else if (nextType === 'insert' && (offset < index || !priority)) {\n                index += length_3;\n            }\n            offset += length_3;\n        }\n        return index;\n    };\n    Delta.Op = Op_1.default;\n    Delta.AttributeMap = AttributeMap_1.default;\n    return Delta;\n}());\nmodule.exports = Delta;\n//# sourceMappingURL=Delta.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/Delta.js?");

        /***/
      },

      /***/"./node_modules/quill-delta/dist/Iterator.js":
      /*!***************************************************!*\
        !*** ./node_modules/quill-delta/dist/Iterator.js ***!
        \***************************************************/
      /*! no static exports found */
      /***/function node_modulesQuillDeltaDistIteratorJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Op_1 = __importDefault(__webpack_require__(/*! ./Op */ \"./node_modules/quill-delta/dist/Op.js\"));\nvar Iterator = /** @class */ (function () {\n    function Iterator(ops) {\n        this.ops = ops;\n        this.index = 0;\n        this.offset = 0;\n    }\n    Iterator.prototype.hasNext = function () {\n        return this.peekLength() < Infinity;\n    };\n    Iterator.prototype.next = function (length) {\n        if (!length) {\n            length = Infinity;\n        }\n        var nextOp = this.ops[this.index];\n        if (nextOp) {\n            var offset = this.offset;\n            var opLength = Op_1.default.length(nextOp);\n            if (length >= opLength - offset) {\n                length = opLength - offset;\n                this.index += 1;\n                this.offset = 0;\n            }\n            else {\n                this.offset += length;\n            }\n            if (typeof nextOp.delete === 'number') {\n                return { delete: length };\n            }\n            else {\n                var retOp = {};\n                if (nextOp.attributes) {\n                    retOp.attributes = nextOp.attributes;\n                }\n                if (typeof nextOp.retain === 'number') {\n                    retOp.retain = length;\n                }\n                else if (typeof nextOp.insert === 'string') {\n                    retOp.insert = nextOp.insert.substr(offset, length);\n                }\n                else {\n                    // offset should === 0, length should === 1\n                    retOp.insert = nextOp.insert;\n                }\n                return retOp;\n            }\n        }\n        else {\n            return { retain: Infinity };\n        }\n    };\n    Iterator.prototype.peek = function () {\n        return this.ops[this.index];\n    };\n    Iterator.prototype.peekLength = function () {\n        if (this.ops[this.index]) {\n            // Should never return 0 if our index is being managed correctly\n            return Op_1.default.length(this.ops[this.index]) - this.offset;\n        }\n        else {\n            return Infinity;\n        }\n    };\n    Iterator.prototype.peekType = function () {\n        if (this.ops[this.index]) {\n            if (typeof this.ops[this.index].delete === 'number') {\n                return 'delete';\n            }\n            else if (typeof this.ops[this.index].retain === 'number') {\n                return 'retain';\n            }\n            else {\n                return 'insert';\n            }\n        }\n        return 'retain';\n    };\n    Iterator.prototype.rest = function () {\n        if (!this.hasNext()) {\n            return [];\n        }\n        else if (this.offset === 0) {\n            return this.ops.slice(this.index);\n        }\n        else {\n            var offset = this.offset;\n            var index = this.index;\n            var next = this.next();\n            var rest = this.ops.slice(this.index);\n            this.offset = offset;\n            this.index = index;\n            return [next].concat(rest);\n        }\n    };\n    return Iterator;\n}());\nexports.default = Iterator;\n//# sourceMappingURL=Iterator.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/Iterator.js?");

        /***/
      },

      /***/"./node_modules/quill-delta/dist/Op.js":
      /*!*********************************************!*\
        !*** ./node_modules/quill-delta/dist/Op.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/function node_modulesQuillDeltaDistOpJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Iterator_1 = __importDefault(__webpack_require__(/*! ./Iterator */ \"./node_modules/quill-delta/dist/Iterator.js\"));\nvar Op;\n(function (Op) {\n    function iterator(ops) {\n        return new Iterator_1.default(ops);\n    }\n    Op.iterator = iterator;\n    function length(op) {\n        if (typeof op.delete === 'number') {\n            return op.delete;\n        }\n        else if (typeof op.retain === 'number') {\n            return op.retain;\n        }\n        else {\n            return typeof op.insert === 'string' ? op.insert.length : 1;\n        }\n    }\n    Op.length = length;\n})(Op || (Op = {}));\nexports.default = Op;\n//# sourceMappingURL=Op.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/Op.js?");

        /***/
      },

      /***/"./node_modules/quill-delta/node_modules/fast-diff/diff.js":
      /*!*****************************************************************!*\
        !*** ./node_modules/quill-delta/node_modules/fast-diff/diff.js ***!
        \*****************************************************************/
      /*! no static exports found */
      /***/function node_modulesQuillDeltaNode_modulesFastDiffDiffJs(module, exports) {

        eval("/**\n * This library modifies the diff-patch-match library by Neil Fraser\n * by removing the patch and match functionality and certain advanced\n * options in the diff function. The original license is as follows:\n *\n * ===\n *\n * Diff Match and Patch\n *\n * Copyright 2006 Google Inc.\n * http://code.google.com/p/google-diff-match-patch/\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n\n/**\n * The data structure representing a diff is an array of tuples:\n * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]\n * which means: delete 'Hello', add 'Goodbye' and keep ' world.'\n */\nvar DIFF_DELETE = -1;\nvar DIFF_INSERT = 1;\nvar DIFF_EQUAL = 0;\n\n\n/**\n * Find the differences between two texts.  Simplifies the problem by stripping\n * any common prefix or suffix off the texts before diffing.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @param {Int|Object} [cursor_pos] Edit position in text1 or object with more info\n * @return {Array} Array of diff tuples.\n */\nfunction diff_main(text1, text2, cursor_pos, _fix_unicode) {\n  // Check for equality\n  if (text1 === text2) {\n    if (text1) {\n      return [[DIFF_EQUAL, text1]];\n    }\n    return [];\n  }\n\n  if (cursor_pos != null) {\n    var editdiff = find_cursor_edit_diff(text1, text2, cursor_pos);\n    if (editdiff) {\n      return editdiff;\n    }\n  }\n\n  // Trim off common prefix (speedup).\n  var commonlength = diff_commonPrefix(text1, text2);\n  var commonprefix = text1.substring(0, commonlength);\n  text1 = text1.substring(commonlength);\n  text2 = text2.substring(commonlength);\n\n  // Trim off common suffix (speedup).\n  commonlength = diff_commonSuffix(text1, text2);\n  var commonsuffix = text1.substring(text1.length - commonlength);\n  text1 = text1.substring(0, text1.length - commonlength);\n  text2 = text2.substring(0, text2.length - commonlength);\n\n  // Compute the diff on the middle block.\n  var diffs = diff_compute_(text1, text2);\n\n  // Restore the prefix and suffix.\n  if (commonprefix) {\n    diffs.unshift([DIFF_EQUAL, commonprefix]);\n  }\n  if (commonsuffix) {\n    diffs.push([DIFF_EQUAL, commonsuffix]);\n  }\n  diff_cleanupMerge(diffs, _fix_unicode);\n  return diffs;\n};\n\n\n/**\n * Find the differences between two texts.  Assumes that the texts do not\n * have any common prefix or suffix.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @return {Array} Array of diff tuples.\n */\nfunction diff_compute_(text1, text2) {\n  var diffs;\n\n  if (!text1) {\n    // Just add some text (speedup).\n    return [[DIFF_INSERT, text2]];\n  }\n\n  if (!text2) {\n    // Just delete some text (speedup).\n    return [[DIFF_DELETE, text1]];\n  }\n\n  var longtext = text1.length > text2.length ? text1 : text2;\n  var shorttext = text1.length > text2.length ? text2 : text1;\n  var i = longtext.indexOf(shorttext);\n  if (i !== -1) {\n    // Shorter text is inside the longer text (speedup).\n    diffs = [\n      [DIFF_INSERT, longtext.substring(0, i)],\n      [DIFF_EQUAL, shorttext],\n      [DIFF_INSERT, longtext.substring(i + shorttext.length)]\n    ];\n    // Swap insertions for deletions if diff is reversed.\n    if (text1.length > text2.length) {\n      diffs[0][0] = diffs[2][0] = DIFF_DELETE;\n    }\n    return diffs;\n  }\n\n  if (shorttext.length === 1) {\n    // Single character string.\n    // After the previous speedup, the character can't be an equality.\n    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];\n  }\n\n  // Check to see if the problem can be split in two.\n  var hm = diff_halfMatch_(text1, text2);\n  if (hm) {\n    // A half-match was found, sort out the return data.\n    var text1_a = hm[0];\n    var text1_b = hm[1];\n    var text2_a = hm[2];\n    var text2_b = hm[3];\n    var mid_common = hm[4];\n    // Send both pairs off for separate processing.\n    var diffs_a = diff_main(text1_a, text2_a);\n    var diffs_b = diff_main(text1_b, text2_b);\n    // Merge the results.\n    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);\n  }\n\n  return diff_bisect_(text1, text2);\n};\n\n\n/**\n * Find the 'middle snake' of a diff, split the problem in two\n * and return the recursively constructed diff.\n * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @return {Array} Array of diff tuples.\n * @private\n */\nfunction diff_bisect_(text1, text2) {\n  // Cache the text lengths to prevent multiple calls.\n  var text1_length = text1.length;\n  var text2_length = text2.length;\n  var max_d = Math.ceil((text1_length + text2_length) / 2);\n  var v_offset = max_d;\n  var v_length = 2 * max_d;\n  var v1 = new Array(v_length);\n  var v2 = new Array(v_length);\n  // Setting all elements to -1 is faster in Chrome & Firefox than mixing\n  // integers and undefined.\n  for (var x = 0; x < v_length; x++) {\n    v1[x] = -1;\n    v2[x] = -1;\n  }\n  v1[v_offset + 1] = 0;\n  v2[v_offset + 1] = 0;\n  var delta = text1_length - text2_length;\n  // If the total number of characters is odd, then the front path will collide\n  // with the reverse path.\n  var front = (delta % 2 !== 0);\n  // Offsets for start and end of k loop.\n  // Prevents mapping of space beyond the grid.\n  var k1start = 0;\n  var k1end = 0;\n  var k2start = 0;\n  var k2end = 0;\n  for (var d = 0; d < max_d; d++) {\n    // Walk the front path one step.\n    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {\n      var k1_offset = v_offset + k1;\n      var x1;\n      if (k1 === -d || (k1 !== d && v1[k1_offset - 1] < v1[k1_offset + 1])) {\n        x1 = v1[k1_offset + 1];\n      } else {\n        x1 = v1[k1_offset - 1] + 1;\n      }\n      var y1 = x1 - k1;\n      while (\n        x1 < text1_length && y1 < text2_length &&\n        text1.charAt(x1) === text2.charAt(y1)\n      ) {\n        x1++;\n        y1++;\n      }\n      v1[k1_offset] = x1;\n      if (x1 > text1_length) {\n        // Ran off the right of the graph.\n        k1end += 2;\n      } else if (y1 > text2_length) {\n        // Ran off the bottom of the graph.\n        k1start += 2;\n      } else if (front) {\n        var k2_offset = v_offset + delta - k1;\n        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] !== -1) {\n          // Mirror x2 onto top-left coordinate system.\n          var x2 = text1_length - v2[k2_offset];\n          if (x1 >= x2) {\n            // Overlap detected.\n            return diff_bisectSplit_(text1, text2, x1, y1);\n          }\n        }\n      }\n    }\n\n    // Walk the reverse path one step.\n    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {\n      var k2_offset = v_offset + k2;\n      var x2;\n      if (k2 === -d || (k2 !== d && v2[k2_offset - 1] < v2[k2_offset + 1])) {\n        x2 = v2[k2_offset + 1];\n      } else {\n        x2 = v2[k2_offset - 1] + 1;\n      }\n      var y2 = x2 - k2;\n      while (\n        x2 < text1_length && y2 < text2_length &&\n        text1.charAt(text1_length - x2 - 1) === text2.charAt(text2_length - y2 - 1)\n      ) {\n        x2++;\n        y2++;\n      }\n      v2[k2_offset] = x2;\n      if (x2 > text1_length) {\n        // Ran off the left of the graph.\n        k2end += 2;\n      } else if (y2 > text2_length) {\n        // Ran off the top of the graph.\n        k2start += 2;\n      } else if (!front) {\n        var k1_offset = v_offset + delta - k2;\n        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] !== -1) {\n          var x1 = v1[k1_offset];\n          var y1 = v_offset + x1 - k1_offset;\n          // Mirror x2 onto top-left coordinate system.\n          x2 = text1_length - x2;\n          if (x1 >= x2) {\n            // Overlap detected.\n            return diff_bisectSplit_(text1, text2, x1, y1);\n          }\n        }\n      }\n    }\n  }\n  // Diff took too long and hit the deadline or\n  // number of diffs equals number of characters, no commonality at all.\n  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];\n};\n\n\n/**\n * Given the location of the 'middle snake', split the diff in two parts\n * and recurse.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @param {number} x Index of split point in text1.\n * @param {number} y Index of split point in text2.\n * @return {Array} Array of diff tuples.\n */\nfunction diff_bisectSplit_(text1, text2, x, y) {\n  var text1a = text1.substring(0, x);\n  var text2a = text2.substring(0, y);\n  var text1b = text1.substring(x);\n  var text2b = text2.substring(y);\n\n  // Compute both diffs serially.\n  var diffs = diff_main(text1a, text2a);\n  var diffsb = diff_main(text1b, text2b);\n\n  return diffs.concat(diffsb);\n};\n\n\n/**\n * Determine the common prefix of two strings.\n * @param {string} text1 First string.\n * @param {string} text2 Second string.\n * @return {number} The number of characters common to the start of each\n *     string.\n */\nfunction diff_commonPrefix(text1, text2) {\n  // Quick check for common null cases.\n  if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {\n    return 0;\n  }\n  // Binary search.\n  // Performance analysis: http://neil.fraser.name/news/2007/10/09/\n  var pointermin = 0;\n  var pointermax = Math.min(text1.length, text2.length);\n  var pointermid = pointermax;\n  var pointerstart = 0;\n  while (pointermin < pointermid) {\n    if (\n      text1.substring(pointerstart, pointermid) ==\n      text2.substring(pointerstart, pointermid)\n    ) {\n      pointermin = pointermid;\n      pointerstart = pointermin;\n    } else {\n      pointermax = pointermid;\n    }\n    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);\n  }\n\n  if (is_surrogate_pair_start(text1.charCodeAt(pointermid - 1))) {\n    pointermid--;\n  }\n\n  return pointermid;\n};\n\n\n/**\n * Determine the common suffix of two strings.\n * @param {string} text1 First string.\n * @param {string} text2 Second string.\n * @return {number} The number of characters common to the end of each string.\n */\nfunction diff_commonSuffix(text1, text2) {\n  // Quick check for common null cases.\n  if (!text1 || !text2 || text1.slice(-1) !== text2.slice(-1)) {\n    return 0;\n  }\n  // Binary search.\n  // Performance analysis: http://neil.fraser.name/news/2007/10/09/\n  var pointermin = 0;\n  var pointermax = Math.min(text1.length, text2.length);\n  var pointermid = pointermax;\n  var pointerend = 0;\n  while (pointermin < pointermid) {\n    if (\n      text1.substring(text1.length - pointermid, text1.length - pointerend) ==\n      text2.substring(text2.length - pointermid, text2.length - pointerend)\n    ) {\n      pointermin = pointermid;\n      pointerend = pointermin;\n    } else {\n      pointermax = pointermid;\n    }\n    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);\n  }\n\n  if (is_surrogate_pair_end(text1.charCodeAt(text1.length - pointermid))) {\n    pointermid--;\n  }\n\n  return pointermid;\n};\n\n\n/**\n * Do the two texts share a substring which is at least half the length of the\n * longer text?\n * This speedup can produce non-minimal diffs.\n * @param {string} text1 First string.\n * @param {string} text2 Second string.\n * @return {Array.<string>} Five element Array, containing the prefix of\n *     text1, the suffix of text1, the prefix of text2, the suffix of\n *     text2 and the common middle.  Or null if there was no match.\n */\nfunction diff_halfMatch_(text1, text2) {\n  var longtext = text1.length > text2.length ? text1 : text2;\n  var shorttext = text1.length > text2.length ? text2 : text1;\n  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {\n    return null;  // Pointless.\n  }\n\n  /**\n   * Does a substring of shorttext exist within longtext such that the substring\n   * is at least half the length of longtext?\n   * Closure, but does not reference any external variables.\n   * @param {string} longtext Longer string.\n   * @param {string} shorttext Shorter string.\n   * @param {number} i Start index of quarter length substring within longtext.\n   * @return {Array.<string>} Five element Array, containing the prefix of\n   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix\n   *     of shorttext and the common middle.  Or null if there was no match.\n   * @private\n   */\n  function diff_halfMatchI_(longtext, shorttext, i) {\n    // Start with a 1/4 length substring at position i as a seed.\n    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));\n    var j = -1;\n    var best_common = '';\n    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;\n    while ((j = shorttext.indexOf(seed, j + 1)) !== -1) {\n      var prefixLength = diff_commonPrefix(\n        longtext.substring(i), shorttext.substring(j));\n      var suffixLength = diff_commonSuffix(\n        longtext.substring(0, i), shorttext.substring(0, j));\n      if (best_common.length < suffixLength + prefixLength) {\n        best_common = shorttext.substring(\n          j - suffixLength, j) + shorttext.substring(j, j + prefixLength);\n        best_longtext_a = longtext.substring(0, i - suffixLength);\n        best_longtext_b = longtext.substring(i + prefixLength);\n        best_shorttext_a = shorttext.substring(0, j - suffixLength);\n        best_shorttext_b = shorttext.substring(j + prefixLength);\n      }\n    }\n    if (best_common.length * 2 >= longtext.length) {\n      return [\n        best_longtext_a, best_longtext_b,\n        best_shorttext_a, best_shorttext_b, best_common\n      ];\n    } else {\n      return null;\n    }\n  }\n\n  // First check if the second quarter is the seed for a half-match.\n  var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));\n  // Check again based on the third quarter.\n  var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));\n  var hm;\n  if (!hm1 && !hm2) {\n    return null;\n  } else if (!hm2) {\n    hm = hm1;\n  } else if (!hm1) {\n    hm = hm2;\n  } else {\n    // Both matched.  Select the longest.\n    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;\n  }\n\n  // A half-match was found, sort out the return data.\n  var text1_a, text1_b, text2_a, text2_b;\n  if (text1.length > text2.length) {\n    text1_a = hm[0];\n    text1_b = hm[1];\n    text2_a = hm[2];\n    text2_b = hm[3];\n  } else {\n    text2_a = hm[0];\n    text2_b = hm[1];\n    text1_a = hm[2];\n    text1_b = hm[3];\n  }\n  var mid_common = hm[4];\n  return [text1_a, text1_b, text2_a, text2_b, mid_common];\n};\n\n\n/**\n * Reorder and merge like edit sections.  Merge equalities.\n * Any edit section can move as long as it doesn't cross an equality.\n * @param {Array} diffs Array of diff tuples.\n * @param {boolean} fix_unicode Whether to normalize to a unicode-correct diff\n */\nfunction diff_cleanupMerge(diffs, fix_unicode) {\n  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.\n  var pointer = 0;\n  var count_delete = 0;\n  var count_insert = 0;\n  var text_delete = '';\n  var text_insert = '';\n  var commonlength;\n  while (pointer < diffs.length) {\n    if (pointer < diffs.length - 1 && !diffs[pointer][1]) {\n      diffs.splice(pointer, 1);\n      continue;\n    }\n    switch (diffs[pointer][0]) {\n      case DIFF_INSERT:\n\n        count_insert++;\n        text_insert += diffs[pointer][1];\n        pointer++;\n        break;\n      case DIFF_DELETE:\n        count_delete++;\n        text_delete += diffs[pointer][1];\n        pointer++;\n        break;\n      case DIFF_EQUAL:\n        var previous_equality = pointer - count_insert - count_delete - 1;\n        if (fix_unicode) {\n          // prevent splitting of unicode surrogate pairs.  when fix_unicode is true,\n          // we assume that the old and new text in the diff are complete and correct\n          // unicode-encoded JS strings, but the tuple boundaries may fall between\n          // surrogate pairs.  we fix this by shaving off stray surrogates from the end\n          // of the previous equality and the beginning of this equality.  this may create\n          // empty equalities or a common prefix or suffix.  for example, if AB and AC are\n          // emojis, `[[0, 'A'], [-1, 'BA'], [0, 'C']]` would turn into deleting 'ABAC' and\n          // inserting 'AC', and then the common suffix 'AC' will be eliminated.  in this\n          // particular case, both equalities go away, we absorb any previous inequalities,\n          // and we keep scanning for the next equality before rewriting the tuples.\n          if (previous_equality >= 0 && ends_with_pair_start(diffs[previous_equality][1])) {\n            var stray = diffs[previous_equality][1].slice(-1);\n            diffs[previous_equality][1] = diffs[previous_equality][1].slice(0, -1);\n            text_delete = stray + text_delete;\n            text_insert = stray + text_insert;\n            if (!diffs[previous_equality][1]) {\n              // emptied out previous equality, so delete it and include previous delete/insert\n              diffs.splice(previous_equality, 1);\n              pointer--;\n              var k = previous_equality - 1;\n              if (diffs[k] && diffs[k][0] === DIFF_INSERT) {\n                count_insert++;\n                text_insert = diffs[k][1] + text_insert;\n                k--;\n              }\n              if (diffs[k] && diffs[k][0] === DIFF_DELETE) {\n                count_delete++;\n                text_delete = diffs[k][1] + text_delete;\n                k--;\n              }\n              previous_equality = k;\n            }\n          }\n          if (starts_with_pair_end(diffs[pointer][1])) {\n            var stray = diffs[pointer][1].charAt(0);\n            diffs[pointer][1] = diffs[pointer][1].slice(1);\n            text_delete += stray;\n            text_insert += stray;\n          }\n        }\n        if (pointer < diffs.length - 1 && !diffs[pointer][1]) {\n          // for empty equality not at end, wait for next equality\n          diffs.splice(pointer, 1);\n          break;\n        }\n        if (text_delete.length > 0 || text_insert.length > 0) {\n          // note that diff_commonPrefix and diff_commonSuffix are unicode-aware\n          if (text_delete.length > 0 && text_insert.length > 0) {\n            // Factor out any common prefixes.\n            commonlength = diff_commonPrefix(text_insert, text_delete);\n            if (commonlength !== 0) {\n              if (previous_equality >= 0) {\n                diffs[previous_equality][1] += text_insert.substring(0, commonlength);\n              } else {\n                diffs.splice(0, 0, [DIFF_EQUAL, text_insert.substring(0, commonlength)]);\n                pointer++;\n              }\n              text_insert = text_insert.substring(commonlength);\n              text_delete = text_delete.substring(commonlength);\n            }\n            // Factor out any common suffixes.\n            commonlength = diff_commonSuffix(text_insert, text_delete);\n            if (commonlength !== 0) {\n              diffs[pointer][1] =\n                text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];\n              text_insert = text_insert.substring(0, text_insert.length - commonlength);\n              text_delete = text_delete.substring(0, text_delete.length - commonlength);\n            }\n          }\n          // Delete the offending records and add the merged ones.\n          var n = count_insert + count_delete;\n          if (text_delete.length === 0 && text_insert.length === 0) {\n            diffs.splice(pointer - n, n);\n            pointer = pointer - n;\n          } else if (text_delete.length === 0) {\n            diffs.splice(pointer - n, n, [DIFF_INSERT, text_insert]);\n            pointer = pointer - n + 1;\n          } else if (text_insert.length === 0) {\n            diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete]);\n            pointer = pointer - n + 1;\n          } else {\n            diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);\n            pointer = pointer - n + 2;\n          }\n        }\n        if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {\n          // Merge this equality with the previous one.\n          diffs[pointer - 1][1] += diffs[pointer][1];\n          diffs.splice(pointer, 1);\n        } else {\n          pointer++;\n        }\n        count_insert = 0;\n        count_delete = 0;\n        text_delete = '';\n        text_insert = '';\n        break;\n    }\n  }\n  if (diffs[diffs.length - 1][1] === '') {\n    diffs.pop();  // Remove the dummy entry at the end.\n  }\n\n  // Second pass: look for single edits surrounded on both sides by equalities\n  // which can be shifted sideways to eliminate an equality.\n  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC\n  var changes = false;\n  pointer = 1;\n  // Intentionally ignore the first and last element (don't need checking).\n  while (pointer < diffs.length - 1) {\n    if (diffs[pointer - 1][0] === DIFF_EQUAL &&\n      diffs[pointer + 1][0] === DIFF_EQUAL) {\n      // This is a single edit surrounded by equalities.\n      if (diffs[pointer][1].substring(diffs[pointer][1].length -\n        diffs[pointer - 1][1].length) === diffs[pointer - 1][1]) {\n        // Shift the edit over the previous equality.\n        diffs[pointer][1] = diffs[pointer - 1][1] +\n          diffs[pointer][1].substring(0, diffs[pointer][1].length -\n            diffs[pointer - 1][1].length);\n        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];\n        diffs.splice(pointer - 1, 1);\n        changes = true;\n      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==\n        diffs[pointer + 1][1]) {\n        // Shift the edit over the next equality.\n        diffs[pointer - 1][1] += diffs[pointer + 1][1];\n        diffs[pointer][1] =\n          diffs[pointer][1].substring(diffs[pointer + 1][1].length) +\n          diffs[pointer + 1][1];\n        diffs.splice(pointer + 1, 1);\n        changes = true;\n      }\n    }\n    pointer++;\n  }\n  // If shifts were made, the diff needs reordering and another shift sweep.\n  if (changes) {\n    diff_cleanupMerge(diffs, fix_unicode);\n  }\n};\n\nfunction is_surrogate_pair_start(charCode) {\n  return charCode >= 0xD800 && charCode <= 0xDBFF;\n}\n\nfunction is_surrogate_pair_end(charCode) {\n  return charCode >= 0xDC00 && charCode <= 0xDFFF;\n}\n\nfunction starts_with_pair_end(str) {\n  return is_surrogate_pair_end(str.charCodeAt(0));\n}\n\nfunction ends_with_pair_start(str) {\n  return is_surrogate_pair_start(str.charCodeAt(str.length - 1));\n}\n\nfunction remove_empty_tuples(tuples) {\n  var ret = [];\n  for (var i = 0; i < tuples.length; i++) {\n    if (tuples[i][1].length > 0) {\n      ret.push(tuples[i]);\n    }\n  }\n  return ret;\n}\n\nfunction make_edit_splice(before, oldMiddle, newMiddle, after) {\n  if (ends_with_pair_start(before) || starts_with_pair_end(after)) {\n    return null;\n  }\n  return remove_empty_tuples([\n    [DIFF_EQUAL, before],\n    [DIFF_DELETE, oldMiddle],\n    [DIFF_INSERT, newMiddle],\n    [DIFF_EQUAL, after]\n  ]);\n}\n\nfunction find_cursor_edit_diff(oldText, newText, cursor_pos) {\n  // note: this runs after equality check has ruled out exact equality\n  var oldRange = typeof cursor_pos === 'number' ?\n    { index: cursor_pos, length: 0 } : cursor_pos.oldRange;\n  var newRange = typeof cursor_pos === 'number' ?\n    null : cursor_pos.newRange;\n  // take into account the old and new selection to generate the best diff\n  // possible for a text edit.  for example, a text change from \"xxx\" to \"xx\"\n  // could be a delete or forwards-delete of any one of the x's, or the\n  // result of selecting two of the x's and typing \"x\".\n  var oldLength = oldText.length;\n  var newLength = newText.length;\n  if (oldRange.length === 0 && (newRange === null || newRange.length === 0)) {\n    // see if we have an insert or delete before or after cursor\n    var oldCursor = oldRange.index;\n    var oldBefore = oldText.slice(0, oldCursor);\n    var oldAfter = oldText.slice(oldCursor);\n    var maybeNewCursor = newRange ? newRange.index : null;\n    editBefore: {\n      // is this an insert or delete right before oldCursor?\n      var newCursor = oldCursor + newLength - oldLength;\n      if (maybeNewCursor !== null && maybeNewCursor !== newCursor) {\n        break editBefore;\n      }\n      if (newCursor < 0 || newCursor > newLength) {\n        break editBefore;\n      }\n      var newBefore = newText.slice(0, newCursor);\n      var newAfter = newText.slice(newCursor);\n      if (newAfter !== oldAfter) {\n        break editBefore;\n      }\n      var prefixLength = Math.min(oldCursor, newCursor);\n      var oldPrefix = oldBefore.slice(0, prefixLength);\n      var newPrefix = newBefore.slice(0, prefixLength);\n      if (oldPrefix !== newPrefix) {\n        break editBefore;\n      }\n      var oldMiddle = oldBefore.slice(prefixLength);\n      var newMiddle = newBefore.slice(prefixLength);\n      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldAfter);\n    }\n    editAfter: {\n      // is this an insert or delete right after oldCursor?\n      if (maybeNewCursor !== null && maybeNewCursor !== oldCursor) {\n        break editAfter;\n      }\n      var cursor = oldCursor;\n      var newBefore = newText.slice(0, cursor);\n      var newAfter = newText.slice(cursor);\n      if (newBefore !== oldBefore) {\n        break editAfter;\n      }\n      var suffixLength = Math.min(oldLength - cursor, newLength - cursor);\n      var oldSuffix = oldAfter.slice(oldAfter.length - suffixLength);\n      var newSuffix = newAfter.slice(newAfter.length - suffixLength);\n      if (oldSuffix !== newSuffix) {\n        break editAfter;\n      }\n      var oldMiddle = oldAfter.slice(0, oldAfter.length - suffixLength);\n      var newMiddle = newAfter.slice(0, newAfter.length - suffixLength);\n      return make_edit_splice(oldBefore, oldMiddle, newMiddle, oldSuffix);\n    }\n  }\n  if (oldRange.length > 0 && newRange && newRange.length === 0) {\n    replaceRange: {\n      // see if diff could be a splice of the old selection range\n      var oldPrefix = oldText.slice(0, oldRange.index);\n      var oldSuffix = oldText.slice(oldRange.index + oldRange.length);\n      var prefixLength = oldPrefix.length;\n      var suffixLength = oldSuffix.length;\n      if (newLength < prefixLength + suffixLength) {\n        break replaceRange;\n      }\n      var newPrefix = newText.slice(0, prefixLength);\n      var newSuffix = newText.slice(newLength - suffixLength);\n      if (oldPrefix !== newPrefix || oldSuffix !== newSuffix) {\n        break replaceRange;\n      }\n      var oldMiddle = oldText.slice(prefixLength, oldLength - suffixLength);\n      var newMiddle = newText.slice(prefixLength, newLength - suffixLength);\n      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldSuffix);\n    }\n  }\n\n  return null;\n}\n\nfunction diff(text1, text2, cursor_pos) {\n  // only pass fix_unicode=true at the top level, not when diff_main is\n  // recursively invoked\n  return diff_main(text1, text2, cursor_pos, true);\n}\n\ndiff.INSERT = DIFF_INSERT;\ndiff.DELETE = DIFF_DELETE;\ndiff.EQUAL = DIFF_EQUAL;\n\nmodule.exports = diff;\n\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/node_modules/fast-diff/diff.js?");

        /***/
      },

      /***/"./quill.js":
      /*!******************!*\
        !*** ./quill.js ***!
        \******************/
      /*! no static exports found */
      /***/function quillJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _core = __webpack_require__(/*! ./core */ \"./core.js\");\n\nvar _core2 = _interopRequireDefault(_core);\n\nvar _align = __webpack_require__(/*! ./formats/align */ \"./formats/align.js\");\n\nvar _direction = __webpack_require__(/*! ./formats/direction */ \"./formats/direction.js\");\n\nvar _indent = __webpack_require__(/*! ./formats/indent */ \"./formats/indent.js\");\n\nvar _indent2 = _interopRequireDefault(_indent);\n\nvar _blockquote = __webpack_require__(/*! ./formats/blockquote */ \"./formats/blockquote.js\");\n\nvar _blockquote2 = _interopRequireDefault(_blockquote);\n\nvar _header = __webpack_require__(/*! ./formats/header */ \"./formats/header.js\");\n\nvar _header2 = _interopRequireDefault(_header);\n\nvar _list = __webpack_require__(/*! ./formats/list */ \"./formats/list.js\");\n\nvar _list2 = _interopRequireDefault(_list);\n\nvar _background = __webpack_require__(/*! ./formats/background */ \"./formats/background.js\");\n\nvar _color = __webpack_require__(/*! ./formats/color */ \"./formats/color.js\");\n\nvar _font = __webpack_require__(/*! ./formats/font */ \"./formats/font.js\");\n\nvar _size = __webpack_require__(/*! ./formats/size */ \"./formats/size.js\");\n\nvar _bold = __webpack_require__(/*! ./formats/bold */ \"./formats/bold.js\");\n\nvar _bold2 = _interopRequireDefault(_bold);\n\nvar _italic = __webpack_require__(/*! ./formats/italic */ \"./formats/italic.js\");\n\nvar _italic2 = _interopRequireDefault(_italic);\n\nvar _link = __webpack_require__(/*! ./formats/link */ \"./formats/link.js\");\n\nvar _link2 = _interopRequireDefault(_link);\n\nvar _script = __webpack_require__(/*! ./formats/script */ \"./formats/script.js\");\n\nvar _script2 = _interopRequireDefault(_script);\n\nvar _strike = __webpack_require__(/*! ./formats/strike */ \"./formats/strike.js\");\n\nvar _strike2 = _interopRequireDefault(_strike);\n\nvar _underline = __webpack_require__(/*! ./formats/underline */ \"./formats/underline.js\");\n\nvar _underline2 = _interopRequireDefault(_underline);\n\nvar _formula = __webpack_require__(/*! ./formats/formula */ \"./formats/formula.js\");\n\nvar _formula2 = _interopRequireDefault(_formula);\n\nvar _image = __webpack_require__(/*! ./formats/image */ \"./formats/image.js\");\n\nvar _image2 = _interopRequireDefault(_image);\n\nvar _video = __webpack_require__(/*! ./formats/video */ \"./formats/video.js\");\n\nvar _video2 = _interopRequireDefault(_video);\n\nvar _code = __webpack_require__(/*! ./formats/code */ \"./formats/code.js\");\n\nvar _code2 = _interopRequireDefault(_code);\n\nvar _syntax = __webpack_require__(/*! ./modules/syntax */ \"./modules/syntax.js\");\n\nvar _syntax2 = _interopRequireDefault(_syntax);\n\nvar _table = __webpack_require__(/*! ./modules/table */ \"./modules/table.js\");\n\nvar _table2 = _interopRequireDefault(_table);\n\nvar _toolbar = __webpack_require__(/*! ./modules/toolbar */ \"./modules/toolbar.js\");\n\nvar _toolbar2 = _interopRequireDefault(_toolbar);\n\nvar _icons = __webpack_require__(/*! ./ui/icons */ \"./ui/icons.js\");\n\nvar _icons2 = _interopRequireDefault(_icons);\n\nvar _picker = __webpack_require__(/*! ./ui/picker */ \"./ui/picker.js\");\n\nvar _picker2 = _interopRequireDefault(_picker);\n\nvar _colorPicker = __webpack_require__(/*! ./ui/color-picker */ \"./ui/color-picker.js\");\n\nvar _colorPicker2 = _interopRequireDefault(_colorPicker);\n\nvar _iconPicker = __webpack_require__(/*! ./ui/icon-picker */ \"./ui/icon-picker.js\");\n\nvar _iconPicker2 = _interopRequireDefault(_iconPicker);\n\nvar _tooltip = __webpack_require__(/*! ./ui/tooltip */ \"./ui/tooltip.js\");\n\nvar _tooltip2 = _interopRequireDefault(_tooltip);\n\nvar _bubble = __webpack_require__(/*! ./themes/bubble */ \"./themes/bubble.js\");\n\nvar _bubble2 = _interopRequireDefault(_bubble);\n\nvar _snow = __webpack_require__(/*! ./themes/snow */ \"./themes/snow.js\");\n\nvar _snow2 = _interopRequireDefault(_snow);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_core2.default.register({\n  'attributors/attribute/direction': _direction.DirectionAttribute,\n\n  'attributors/class/align': _align.AlignClass,\n  'attributors/class/background': _background.BackgroundClass,\n  'attributors/class/color': _color.ColorClass,\n  'attributors/class/direction': _direction.DirectionClass,\n  'attributors/class/font': _font.FontClass,\n  'attributors/class/size': _size.SizeClass,\n\n  'attributors/style/align': _align.AlignStyle,\n  'attributors/style/background': _background.BackgroundStyle,\n  'attributors/style/color': _color.ColorStyle,\n  'attributors/style/direction': _direction.DirectionStyle,\n  'attributors/style/font': _font.FontStyle,\n  'attributors/style/size': _size.SizeStyle\n}, true);\n\n_core2.default.register({\n  'formats/align': _align.AlignClass,\n  'formats/direction': _direction.DirectionClass,\n  'formats/indent': _indent2.default,\n\n  'formats/background': _background.BackgroundStyle,\n  'formats/color': _color.ColorStyle,\n  'formats/font': _font.FontClass,\n  'formats/size': _size.SizeClass,\n\n  'formats/blockquote': _blockquote2.default,\n  'formats/code-block': _code2.default,\n  'formats/header': _header2.default,\n  'formats/list': _list2.default,\n\n  'formats/bold': _bold2.default,\n  'formats/code': _code.Code,\n  'formats/italic': _italic2.default,\n  'formats/link': _link2.default,\n  'formats/script': _script2.default,\n  'formats/strike': _strike2.default,\n  'formats/underline': _underline2.default,\n\n  'formats/formula': _formula2.default,\n  'formats/image': _image2.default,\n  'formats/video': _video2.default,\n\n  'modules/syntax': _syntax2.default,\n  'modules/table': _table2.default,\n  'modules/toolbar': _toolbar2.default,\n\n  'themes/bubble': _bubble2.default,\n  'themes/snow': _snow2.default,\n\n  'ui/icons': _icons2.default,\n  'ui/picker': _picker2.default,\n  'ui/icon-picker': _iconPicker2.default,\n  'ui/color-picker': _colorPicker2.default,\n  'ui/tooltip': _tooltip2.default\n}, true);\n\nexports.default = _core2.default;\n\n//# sourceURL=webpack://Quill/./quill.js?");

        /***/
      },

      /***/"./themes/base.js":
      /*!************************!*\
        !*** ./themes/base.js ***!
        \************************/
      /*! no static exports found */
      /***/function themesBaseJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.BaseTooltip = undefined;\n\nvar _extend = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n\nvar _extend2 = _interopRequireDefault(_extend);\n\nvar _emitter = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n\nvar _emitter2 = _interopRequireDefault(_emitter);\n\nvar _theme = __webpack_require__(/*! ../core/theme */ \"./core/theme.js\");\n\nvar _theme2 = _interopRequireDefault(_theme);\n\nvar _colorPicker = __webpack_require__(/*! ../ui/color-picker */ \"./ui/color-picker.js\");\n\nvar _colorPicker2 = _interopRequireDefault(_colorPicker);\n\nvar _iconPicker = __webpack_require__(/*! ../ui/icon-picker */ \"./ui/icon-picker.js\");\n\nvar _iconPicker2 = _interopRequireDefault(_iconPicker);\n\nvar _picker = __webpack_require__(/*! ../ui/picker */ \"./ui/picker.js\");\n\nvar _picker2 = _interopRequireDefault(_picker);\n\nvar _tooltip = __webpack_require__(/*! ../ui/tooltip */ \"./ui/tooltip.js\");\n\nvar _tooltip2 = _interopRequireDefault(_tooltip);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst ALIGNS = [false, 'center', 'right', 'justify'];\n\nconst COLORS = ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'];\n\nconst FONTS = [false, 'serif', 'monospace'];\n\nconst HEADERS = ['1', '2', '3', false];\n\nconst SIZES = ['small', false, 'large', 'huge'];\n\nclass BaseTheme extends _theme2.default {\n  constructor(quill, options) {\n    super(quill, options);\n    const listener = e => {\n      if (!document.body.contains(quill.root)) {\n        document.body.removeEventListener('click', listener);\n        return;\n      }\n      if (this.tooltip != null && !this.tooltip.root.contains(e.target) && document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus()) {\n        this.tooltip.hide();\n      }\n      if (this.pickers != null) {\n        this.pickers.forEach(picker => {\n          if (!picker.container.contains(e.target)) {\n            picker.close();\n          }\n        });\n      }\n    };\n    quill.emitter.listenDOM('click', document.body, listener);\n  }\n\n  addModule(name) {\n    const module = super.addModule(name);\n    if (name === 'toolbar') {\n      this.extendToolbar(module);\n    }\n    return module;\n  }\n\n  buildButtons(buttons, icons) {\n    Array.from(buttons).forEach(button => {\n      const className = button.getAttribute('class') || '';\n      className.split(/\\s+/).forEach(name => {\n        if (!name.startsWith('ql-')) return;\n        name = name.slice('ql-'.length);\n        if (icons[name] == null) return;\n        if (name === 'direction') {\n          button.innerHTML = icons[name][''] + icons[name].rtl;\n        } else if (typeof icons[name] === 'string') {\n          button.innerHTML = icons[name];\n        } else {\n          const value = button.value || '';\n          if (value != null && icons[name][value]) {\n            button.innerHTML = icons[name][value];\n          }\n        }\n      });\n    });\n  }\n\n  buildPickers(selects, icons) {\n    this.pickers = Array.from(selects).map(select => {\n      if (select.classList.contains('ql-align')) {\n        if (select.querySelector('option') == null) {\n          fillSelect(select, ALIGNS);\n        }\n        return new _iconPicker2.default(select, icons.align);\n      }\n      if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {\n        const format = select.classList.contains('ql-background') ? 'background' : 'color';\n        if (select.querySelector('option') == null) {\n          fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');\n        }\n        return new _colorPicker2.default(select, icons[format]);\n      }\n      if (select.querySelector('option') == null) {\n        if (select.classList.contains('ql-font')) {\n          fillSelect(select, FONTS);\n        } else if (select.classList.contains('ql-header')) {\n          fillSelect(select, HEADERS);\n        } else if (select.classList.contains('ql-size')) {\n          fillSelect(select, SIZES);\n        }\n      }\n      return new _picker2.default(select);\n    });\n    const update = () => {\n      this.pickers.forEach(picker => {\n        picker.update();\n      });\n    };\n    this.quill.on(_emitter2.default.events.EDITOR_CHANGE, update);\n  }\n}\nBaseTheme.DEFAULTS = (0, _extend2.default)(true, {}, _theme2.default.DEFAULTS, {\n  modules: {\n    toolbar: {\n      handlers: {\n        formula() {\n          this.quill.theme.tooltip.edit('formula');\n        },\n        image() {\n          let fileInput = this.container.querySelector('input.ql-image[type=file]');\n          if (fileInput == null) {\n            fileInput = document.createElement('input');\n            fileInput.setAttribute('type', 'file');\n            fileInput.setAttribute('accept', this.quill.uploader.options.mimetypes.join(', '));\n            fileInput.classList.add('ql-image');\n            fileInput.addEventListener('change', () => {\n              const range = this.quill.getSelection(true);\n              this.quill.uploader.upload(range, fileInput.files);\n              fileInput.value = '';\n            });\n            this.container.appendChild(fileInput);\n          }\n          fileInput.click();\n        },\n        video() {\n          this.quill.theme.tooltip.edit('video');\n        }\n      }\n    }\n  }\n});\n\nclass BaseTooltip extends _tooltip2.default {\n  constructor(quill, boundsContainer) {\n    super(quill, boundsContainer);\n    this.textbox = this.root.querySelector('input[type=\"text\"]');\n    this.listen();\n  }\n\n  listen() {\n    this.textbox.addEventListener('keydown', event => {\n      if (event.key === 'Enter') {\n        this.save();\n        event.preventDefault();\n      } else if (event.key === 'Escape') {\n        this.cancel();\n        event.preventDefault();\n      }\n    });\n  }\n\n  cancel() {\n    this.hide();\n  }\n\n  edit(mode = 'link', preview = null) {\n    this.root.classList.remove('ql-hidden');\n    this.root.classList.add('ql-editing');\n    if (preview != null) {\n      this.textbox.value = preview;\n    } else if (mode !== this.root.getAttribute('data-mode')) {\n      this.textbox.value = '';\n    }\n    this.position(this.quill.getBounds(this.quill.selection.savedRange));\n    this.textbox.select();\n    this.textbox.setAttribute('placeholder', this.textbox.getAttribute(`data-${mode}`) || '');\n    this.root.setAttribute('data-mode', mode);\n  }\n\n  restoreFocus() {\n    const scrollTop = this.quill.scrollingContainer.scrollTop;\n\n    this.quill.focus();\n    this.quill.scrollingContainer.scrollTop = scrollTop;\n  }\n\n  save() {\n    let value = this.textbox.value;\n\n    switch (this.root.getAttribute('data-mode')) {\n      case 'link':\n        {\n          const scrollTop = this.quill.root.scrollTop;\n\n          if (this.linkRange) {\n            this.quill.formatText(this.linkRange, 'link', value, _emitter2.default.sources.USER);\n            delete this.linkRange;\n          } else {\n            this.restoreFocus();\n            this.quill.format('link', value, _emitter2.default.sources.USER);\n          }\n          this.quill.root.scrollTop = scrollTop;\n          break;\n        }\n      case 'video':\n        {\n          value = extractVideoUrl(value);\n        } // eslint-disable-next-line no-fallthrough\n      case 'formula':\n        {\n          if (!value) break;\n          const range = this.quill.getSelection(true);\n          if (range != null) {\n            const index = range.index + range.length;\n            this.quill.insertEmbed(index, this.root.getAttribute('data-mode'), value, _emitter2.default.sources.USER);\n            if (this.root.getAttribute('data-mode') === 'formula') {\n              this.quill.insertText(index + 1, ' ', _emitter2.default.sources.USER);\n            }\n            this.quill.setSelection(index + 2, _emitter2.default.sources.USER);\n          }\n          break;\n        }\n      default:\n    }\n    this.textbox.value = '';\n    this.hide();\n  }\n}\n\nfunction extractVideoUrl(url) {\n  let match = url.match(/^(?:(https?):\\/\\/)?(?:(?:www|m)\\.)?youtube\\.com\\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\\/\\/)?(?:(?:www|m)\\.)?youtu\\.be\\/([a-zA-Z0-9_-]+)/);\n  if (match) {\n    return `${match[1] || 'https'}://www.youtube.com/embed/${match[2]}?showinfo=0`;\n  }\n  // eslint-disable-next-line no-cond-assign\n  if (match = url.match(/^(?:(https?):\\/\\/)?(?:www\\.)?vimeo\\.com\\/(\\d+)/)) {\n    return `${match[1] || 'https'}://player.vimeo.com/video/${match[2]}/`;\n  }\n  return url;\n}\n\nfunction fillSelect(select, values, defaultValue = false) {\n  values.forEach(value => {\n    const option = document.createElement('option');\n    if (value === defaultValue) {\n      option.setAttribute('selected', 'selected');\n    } else {\n      option.setAttribute('value', value);\n    }\n    select.appendChild(option);\n  });\n}\n\nexports.BaseTooltip = BaseTooltip;\nexports.default = BaseTheme;\n\n//# sourceURL=webpack://Quill/./themes/base.js?");

        /***/
      },

      /***/"./themes/bubble.js":
      /*!**************************!*\
        !*** ./themes/bubble.js ***!
        \**************************/
      /*! no static exports found */
      /***/function themesBubbleJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.BubbleTooltip = undefined;\n\nvar _extend = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n\nvar _extend2 = _interopRequireDefault(_extend);\n\nvar _emitter = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n\nvar _emitter2 = _interopRequireDefault(_emitter);\n\nvar _base = __webpack_require__(/*! ./base */ \"./themes/base.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nvar _selection = __webpack_require__(/*! ../core/selection */ \"./core/selection.js\");\n\nvar _icons = __webpack_require__(/*! ../ui/icons */ \"./ui/icons.js\");\n\nvar _icons2 = _interopRequireDefault(_icons);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst TOOLBAR_CONFIG = [['bold', 'italic', 'link'], [{ header: 1 }, { header: 2 }, 'blockquote']];\n\nclass BubbleTooltip extends _base.BaseTooltip {\n  constructor(quill, bounds) {\n    super(quill, bounds);\n    this.quill.on(_emitter2.default.events.EDITOR_CHANGE, (type, range, oldRange, source) => {\n      if (type !== _emitter2.default.events.SELECTION_CHANGE) return;\n      if (range != null && range.length > 0 && source === _emitter2.default.sources.USER) {\n        this.show();\n        // Lock our width so we will expand beyond our offsetParent boundaries\n        this.root.style.left = '0px';\n        this.root.style.width = '';\n        this.root.style.width = `${this.root.offsetWidth}px`;\n        const lines = this.quill.getLines(range.index, range.length);\n        if (lines.length === 1) {\n          this.position(this.quill.getBounds(range));\n        } else {\n          const lastLine = lines[lines.length - 1];\n          const index = this.quill.getIndex(lastLine);\n          const length = Math.min(lastLine.length() - 1, range.index + range.length - index);\n          const indexBounds = this.quill.getBounds(new _selection.Range(index, length));\n          this.position(indexBounds);\n        }\n      } else if (document.activeElement !== this.textbox && this.quill.hasFocus()) {\n        this.hide();\n      }\n    });\n  }\n\n  listen() {\n    super.listen();\n    this.root.querySelector('.ql-close').addEventListener('click', () => {\n      this.root.classList.remove('ql-editing');\n    });\n    this.quill.on(_emitter2.default.events.SCROLL_OPTIMIZE, () => {\n      // Let selection be restored by toolbar handlers before repositioning\n      setTimeout(() => {\n        if (this.root.classList.contains('ql-hidden')) return;\n        const range = this.quill.getSelection();\n        if (range != null) {\n          this.position(this.quill.getBounds(range));\n        }\n      }, 1);\n    });\n  }\n\n  cancel() {\n    this.show();\n  }\n\n  position(reference) {\n    const shift = super.position(reference);\n    const arrow = this.root.querySelector('.ql-tooltip-arrow');\n    arrow.style.marginLeft = '';\n    if (shift !== 0) {\n      arrow.style.marginLeft = `${-1 * shift - arrow.offsetWidth / 2}px`;\n    }\n    return shift;\n  }\n}\nBubbleTooltip.TEMPLATE = ['<span class=\"ql-tooltip-arrow\"></span>', '<div class=\"ql-tooltip-editor\">', '<input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\">', '<a class=\"ql-close\"></a>', '</div>'].join('');\n\nclass BubbleTheme extends _base2.default {\n  constructor(quill, options) {\n    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {\n      options.modules.toolbar.container = TOOLBAR_CONFIG;\n    }\n    super(quill, options);\n    this.quill.container.classList.add('ql-bubble');\n  }\n\n  extendToolbar(toolbar) {\n    this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);\n    this.tooltip.root.appendChild(toolbar.container);\n    this.buildButtons(toolbar.container.querySelectorAll('button'), _icons2.default);\n    this.buildPickers(toolbar.container.querySelectorAll('select'), _icons2.default);\n  }\n}\nBubbleTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {\n  modules: {\n    toolbar: {\n      handlers: {\n        link(value) {\n          if (!value) {\n            this.quill.format('link', false);\n          } else {\n            this.quill.theme.tooltip.edit();\n          }\n        }\n      }\n    }\n  }\n});\n\nexports.BubbleTooltip = BubbleTooltip;\nexports.default = BubbleTheme;\n\n//# sourceURL=webpack://Quill/./themes/bubble.js?");

        /***/
      },

      /***/"./themes/snow.js":
      /*!************************!*\
        !*** ./themes/snow.js ***!
        \************************/
      /*! no static exports found */
      /***/function themesSnowJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _extend = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n\nvar _extend2 = _interopRequireDefault(_extend);\n\nvar _emitter = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n\nvar _emitter2 = _interopRequireDefault(_emitter);\n\nvar _base = __webpack_require__(/*! ./base */ \"./themes/base.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nvar _link = __webpack_require__(/*! ../formats/link */ \"./formats/link.js\");\n\nvar _link2 = _interopRequireDefault(_link);\n\nvar _selection = __webpack_require__(/*! ../core/selection */ \"./core/selection.js\");\n\nvar _icons = __webpack_require__(/*! ../ui/icons */ \"./ui/icons.js\");\n\nvar _icons2 = _interopRequireDefault(_icons);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst TOOLBAR_CONFIG = [[{ header: ['1', '2', '3', false] }], ['bold', 'italic', 'underline', 'link'], [{ list: 'ordered' }, { list: 'bullet' }], ['clean']];\n\nclass SnowTooltip extends _base.BaseTooltip {\n  constructor(quill, bounds) {\n    super(quill, bounds);\n    this.preview = this.root.querySelector('a.ql-preview');\n  }\n\n  listen() {\n    super.listen();\n    this.root.querySelector('a.ql-action').addEventListener('click', event => {\n      if (this.root.classList.contains('ql-editing')) {\n        this.save();\n      } else {\n        this.edit('link', this.preview.textContent);\n      }\n      event.preventDefault();\n    });\n    this.root.querySelector('a.ql-remove').addEventListener('click', event => {\n      if (this.linkRange != null) {\n        const range = this.linkRange;\n        this.restoreFocus();\n        this.quill.formatText(range, 'link', false, _emitter2.default.sources.USER);\n        delete this.linkRange;\n      }\n      event.preventDefault();\n      this.hide();\n    });\n    this.quill.on(_emitter2.default.events.SELECTION_CHANGE, (range, oldRange, source) => {\n      if (range == null) return;\n      if (range.length === 0 && source === _emitter2.default.sources.USER) {\n        var _quill$scroll$descend = this.quill.scroll.descendant(_link2.default, range.index),\n            _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2);\n\n        const link = _quill$scroll$descend2[0],\n              offset = _quill$scroll$descend2[1];\n\n        if (link != null) {\n          this.linkRange = new _selection.Range(range.index - offset, link.length());\n          const preview = _link2.default.formats(link.domNode);\n          this.preview.textContent = preview;\n          this.preview.setAttribute('href', preview);\n          this.show();\n          this.position(this.quill.getBounds(this.linkRange));\n          return;\n        }\n      } else {\n        delete this.linkRange;\n      }\n      this.hide();\n    });\n  }\n\n  show() {\n    super.show();\n    this.root.removeAttribute('data-mode');\n  }\n}\nSnowTooltip.TEMPLATE = ['<a class=\"ql-preview\" target=\"_blank\" href=\"about:blank\"></a>', '<input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\">', '<a class=\"ql-action\"></a>', '<a class=\"ql-remove\"></a>'].join('');\n\nclass SnowTheme extends _base2.default {\n  constructor(quill, options) {\n    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {\n      options.modules.toolbar.container = TOOLBAR_CONFIG;\n    }\n    super(quill, options);\n    this.quill.container.classList.add('ql-snow');\n  }\n\n  extendToolbar(toolbar) {\n    toolbar.container.classList.add('ql-snow');\n    this.buildButtons(toolbar.container.querySelectorAll('button'), _icons2.default);\n    this.buildPickers(toolbar.container.querySelectorAll('select'), _icons2.default);\n    this.tooltip = new SnowTooltip(this.quill, this.options.bounds);\n    if (toolbar.container.querySelector('.ql-link')) {\n      this.quill.keyboard.addBinding({ key: 'k', shortKey: true }, (range, context) => {\n        toolbar.handlers.link.call(toolbar, !context.format.link);\n      });\n    }\n  }\n}\nSnowTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {\n  modules: {\n    toolbar: {\n      handlers: {\n        link(value) {\n          if (value) {\n            const range = this.quill.getSelection();\n            if (range == null || range.length === 0) return;\n            let preview = this.quill.getText(range);\n            if (/^\\S+@\\S+\\.\\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {\n              preview = `mailto:${preview}`;\n            }\n            const tooltip = this.quill.theme.tooltip;\n\n            tooltip.edit('link', preview);\n          } else {\n            this.quill.format('link', false);\n          }\n        }\n      }\n    }\n  }\n});\n\nexports.default = SnowTheme;\n\n//# sourceURL=webpack://Quill/./themes/snow.js?");

        /***/
      },

      /***/"./ui/color-picker.js":
      /*!****************************!*\
        !*** ./ui/color-picker.js ***!
        \****************************/
      /*! no static exports found */
      /***/function uiColorPickerJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _picker = __webpack_require__(/*! ./picker */ \"./ui/picker.js\");\n\nvar _picker2 = _interopRequireDefault(_picker);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass ColorPicker extends _picker2.default {\n  constructor(select, label) {\n    super(select);\n    this.label.innerHTML = label;\n    this.container.classList.add('ql-color-picker');\n    Array.from(this.container.querySelectorAll('.ql-picker-item')).slice(0, 7).forEach(item => {\n      item.classList.add('ql-primary');\n    });\n  }\n\n  buildItem(option) {\n    const item = super.buildItem(option);\n    item.style.backgroundColor = option.getAttribute('value') || '';\n    return item;\n  }\n\n  selectItem(item, trigger) {\n    super.selectItem(item, trigger);\n    const colorLabel = this.label.querySelector('.ql-color-label');\n    const value = item ? item.getAttribute('data-value') || '' : '';\n    if (colorLabel) {\n      if (colorLabel.tagName === 'line') {\n        colorLabel.style.stroke = value;\n      } else {\n        colorLabel.style.fill = value;\n      }\n    }\n  }\n}\n\nexports.default = ColorPicker;\n\n//# sourceURL=webpack://Quill/./ui/color-picker.js?");

        /***/
      },

      /***/"./ui/icon-picker.js":
      /*!***************************!*\
        !*** ./ui/icon-picker.js ***!
        \***************************/
      /*! no static exports found */
      /***/function uiIconPickerJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _picker = __webpack_require__(/*! ./picker */ \"./ui/picker.js\");\n\nvar _picker2 = _interopRequireDefault(_picker);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass IconPicker extends _picker2.default {\n  constructor(select, icons) {\n    super(select);\n    this.container.classList.add('ql-icon-picker');\n    Array.from(this.container.querySelectorAll('.ql-picker-item')).forEach(item => {\n      item.innerHTML = icons[item.getAttribute('data-value') || ''];\n    });\n    this.defaultItem = this.container.querySelector('.ql-selected');\n    this.selectItem(this.defaultItem);\n  }\n\n  selectItem(target, trigger) {\n    super.selectItem(target, trigger);\n    const item = target || this.defaultItem;\n    if (this.label.innerHTML === item.innerHTML) return;\n    this.label.innerHTML = item.innerHTML;\n  }\n}\n\nexports.default = IconPicker;\n\n//# sourceURL=webpack://Quill/./ui/icon-picker.js?");

        /***/
      },

      /***/"./ui/icons.js":
      /*!*********************!*\
        !*** ./ui/icons.js ***!
        \*********************/
      /*! no static exports found */
      /***/function uiIconsJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nvar _alignLeft = __webpack_require__(/*! ../assets/icons/align-left.svg */ \"./assets/icons/align-left.svg\");\n\nvar _alignLeft2 = _interopRequireDefault(_alignLeft);\n\nvar _alignCenter = __webpack_require__(/*! ../assets/icons/align-center.svg */ \"./assets/icons/align-center.svg\");\n\nvar _alignCenter2 = _interopRequireDefault(_alignCenter);\n\nvar _alignRight = __webpack_require__(/*! ../assets/icons/align-right.svg */ \"./assets/icons/align-right.svg\");\n\nvar _alignRight2 = _interopRequireDefault(_alignRight);\n\nvar _alignJustify = __webpack_require__(/*! ../assets/icons/align-justify.svg */ \"./assets/icons/align-justify.svg\");\n\nvar _alignJustify2 = _interopRequireDefault(_alignJustify);\n\nvar _background = __webpack_require__(/*! ../assets/icons/background.svg */ \"./assets/icons/background.svg\");\n\nvar _background2 = _interopRequireDefault(_background);\n\nvar _blockquote = __webpack_require__(/*! ../assets/icons/blockquote.svg */ \"./assets/icons/blockquote.svg\");\n\nvar _blockquote2 = _interopRequireDefault(_blockquote);\n\nvar _bold = __webpack_require__(/*! ../assets/icons/bold.svg */ \"./assets/icons/bold.svg\");\n\nvar _bold2 = _interopRequireDefault(_bold);\n\nvar _clean = __webpack_require__(/*! ../assets/icons/clean.svg */ \"./assets/icons/clean.svg\");\n\nvar _clean2 = _interopRequireDefault(_clean);\n\nvar _code = __webpack_require__(/*! ../assets/icons/code.svg */ \"./assets/icons/code.svg\");\n\nvar _code2 = _interopRequireDefault(_code);\n\nvar _color = __webpack_require__(/*! ../assets/icons/color.svg */ \"./assets/icons/color.svg\");\n\nvar _color2 = _interopRequireDefault(_color);\n\nvar _directionLtr = __webpack_require__(/*! ../assets/icons/direction-ltr.svg */ \"./assets/icons/direction-ltr.svg\");\n\nvar _directionLtr2 = _interopRequireDefault(_directionLtr);\n\nvar _directionRtl = __webpack_require__(/*! ../assets/icons/direction-rtl.svg */ \"./assets/icons/direction-rtl.svg\");\n\nvar _directionRtl2 = _interopRequireDefault(_directionRtl);\n\nvar _formula = __webpack_require__(/*! ../assets/icons/formula.svg */ \"./assets/icons/formula.svg\");\n\nvar _formula2 = _interopRequireDefault(_formula);\n\nvar _header = __webpack_require__(/*! ../assets/icons/header.svg */ \"./assets/icons/header.svg\");\n\nvar _header2 = _interopRequireDefault(_header);\n\nvar _header3 = __webpack_require__(/*! ../assets/icons/header-2.svg */ \"./assets/icons/header-2.svg\");\n\nvar _header4 = _interopRequireDefault(_header3);\n\nvar _italic = __webpack_require__(/*! ../assets/icons/italic.svg */ \"./assets/icons/italic.svg\");\n\nvar _italic2 = _interopRequireDefault(_italic);\n\nvar _image = __webpack_require__(/*! ../assets/icons/image.svg */ \"./assets/icons/image.svg\");\n\nvar _image2 = _interopRequireDefault(_image);\n\nvar _indent = __webpack_require__(/*! ../assets/icons/indent.svg */ \"./assets/icons/indent.svg\");\n\nvar _indent2 = _interopRequireDefault(_indent);\n\nvar _outdent = __webpack_require__(/*! ../assets/icons/outdent.svg */ \"./assets/icons/outdent.svg\");\n\nvar _outdent2 = _interopRequireDefault(_outdent);\n\nvar _link = __webpack_require__(/*! ../assets/icons/link.svg */ \"./assets/icons/link.svg\");\n\nvar _link2 = _interopRequireDefault(_link);\n\nvar _listBullet = __webpack_require__(/*! ../assets/icons/list-bullet.svg */ \"./assets/icons/list-bullet.svg\");\n\nvar _listBullet2 = _interopRequireDefault(_listBullet);\n\nvar _listCheck = __webpack_require__(/*! ../assets/icons/list-check.svg */ \"./assets/icons/list-check.svg\");\n\nvar _listCheck2 = _interopRequireDefault(_listCheck);\n\nvar _listOrdered = __webpack_require__(/*! ../assets/icons/list-ordered.svg */ \"./assets/icons/list-ordered.svg\");\n\nvar _listOrdered2 = _interopRequireDefault(_listOrdered);\n\nvar _subscript = __webpack_require__(/*! ../assets/icons/subscript.svg */ \"./assets/icons/subscript.svg\");\n\nvar _subscript2 = _interopRequireDefault(_subscript);\n\nvar _superscript = __webpack_require__(/*! ../assets/icons/superscript.svg */ \"./assets/icons/superscript.svg\");\n\nvar _superscript2 = _interopRequireDefault(_superscript);\n\nvar _strike = __webpack_require__(/*! ../assets/icons/strike.svg */ \"./assets/icons/strike.svg\");\n\nvar _strike2 = _interopRequireDefault(_strike);\n\nvar _table = __webpack_require__(/*! ../assets/icons/table.svg */ \"./assets/icons/table.svg\");\n\nvar _table2 = _interopRequireDefault(_table);\n\nvar _underline = __webpack_require__(/*! ../assets/icons/underline.svg */ \"./assets/icons/underline.svg\");\n\nvar _underline2 = _interopRequireDefault(_underline);\n\nvar _video = __webpack_require__(/*! ../assets/icons/video.svg */ \"./assets/icons/video.svg\");\n\nvar _video2 = _interopRequireDefault(_video);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = {\n  align: {\n    '': _alignLeft2.default,\n    center: _alignCenter2.default,\n    right: _alignRight2.default,\n    justify: _alignJustify2.default\n  },\n  background: _background2.default,\n  blockquote: _blockquote2.default,\n  bold: _bold2.default,\n  clean: _clean2.default,\n  code: _code2.default,\n  'code-block': _code2.default,\n  color: _color2.default,\n  direction: {\n    '': _directionLtr2.default,\n    rtl: _directionRtl2.default\n  },\n  formula: _formula2.default,\n  header: {\n    '1': _header2.default,\n    '2': _header4.default\n  },\n  italic: _italic2.default,\n  image: _image2.default,\n  indent: {\n    '+1': _indent2.default,\n    '-1': _outdent2.default\n  },\n  link: _link2.default,\n  list: {\n    bullet: _listBullet2.default,\n    check: _listCheck2.default,\n    ordered: _listOrdered2.default\n  },\n  script: {\n    sub: _subscript2.default,\n    super: _superscript2.default\n  },\n  strike: _strike2.default,\n  table: _table2.default,\n  underline: _underline2.default,\n  video: _video2.default\n};\n\n//# sourceURL=webpack://Quill/./ui/icons.js?");

        /***/
      },

      /***/"./ui/picker.js":
      /*!**********************!*\
        !*** ./ui/picker.js ***!
        \**********************/
      /*! no static exports found */
      /***/function uiPickerJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _dropdown = __webpack_require__(/*! ../assets/icons/dropdown.svg */ \"./assets/icons/dropdown.svg\");\n\nvar _dropdown2 = _interopRequireDefault(_dropdown);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nlet optionsCounter = 0;\n\nfunction toggleAriaAttribute(element, attribute) {\n  element.setAttribute(attribute, !(element.getAttribute(attribute) === 'true'));\n}\n\nclass Picker {\n  constructor(select) {\n    this.select = select;\n    this.container = document.createElement('span');\n    this.buildPicker();\n    this.select.style.display = 'none';\n    this.select.parentNode.insertBefore(this.container, this.select);\n\n    this.label.addEventListener('mousedown', () => {\n      this.togglePicker();\n    });\n    this.label.addEventListener('keydown', event => {\n      switch (event.key) {\n        case 'Enter':\n          this.togglePicker();\n          break;\n        case 'Escape':\n          this.escape();\n          event.preventDefault();\n          break;\n        default:\n      }\n    });\n    this.select.addEventListener('change', this.update.bind(this));\n  }\n\n  togglePicker() {\n    this.container.classList.toggle('ql-expanded');\n    // Toggle aria-expanded and aria-hidden to make the picker accessible\n    toggleAriaAttribute(this.label, 'aria-expanded');\n    toggleAriaAttribute(this.options, 'aria-hidden');\n  }\n\n  buildItem(option) {\n    const item = document.createElement('span');\n    item.tabIndex = '0';\n    item.setAttribute('role', 'button');\n    item.classList.add('ql-picker-item');\n    if (option.hasAttribute('value')) {\n      item.setAttribute('data-value', option.getAttribute('value'));\n    }\n    if (option.textContent) {\n      item.setAttribute('data-label', option.textContent);\n    }\n    item.addEventListener('click', () => {\n      this.selectItem(item, true);\n    });\n    item.addEventListener('keydown', event => {\n      switch (event.key) {\n        case 'Enter':\n          this.selectItem(item, true);\n          event.preventDefault();\n          break;\n        case 'Escape':\n          this.escape();\n          event.preventDefault();\n          break;\n        default:\n      }\n    });\n\n    return item;\n  }\n\n  buildLabel() {\n    const label = document.createElement('span');\n    label.classList.add('ql-picker-label');\n    label.innerHTML = _dropdown2.default;\n    label.tabIndex = '0';\n    label.setAttribute('role', 'button');\n    label.setAttribute('aria-expanded', 'false');\n    this.container.appendChild(label);\n    return label;\n  }\n\n  buildOptions() {\n    const options = document.createElement('span');\n    options.classList.add('ql-picker-options');\n\n    // Don't want screen readers to read this until options are visible\n    options.setAttribute('aria-hidden', 'true');\n    options.tabIndex = '-1';\n\n    // Need a unique id for aria-controls\n    options.id = `ql-picker-options-${optionsCounter}`;\n    optionsCounter += 1;\n    this.label.setAttribute('aria-controls', options.id);\n\n    this.options = options;\n\n    Array.from(this.select.options).forEach(option => {\n      const item = this.buildItem(option);\n      options.appendChild(item);\n      if (option.selected === true) {\n        this.selectItem(item);\n      }\n    });\n    this.container.appendChild(options);\n  }\n\n  buildPicker() {\n    Array.from(this.select.attributes).forEach(item => {\n      this.container.setAttribute(item.name, item.value);\n    });\n    this.container.classList.add('ql-picker');\n    this.label = this.buildLabel();\n    this.buildOptions();\n  }\n\n  escape() {\n    // Close menu and return focus to trigger label\n    this.close();\n    // Need setTimeout for accessibility to ensure that the browser executes\n    // focus on the next process thread and after any DOM content changes\n    setTimeout(() => this.label.focus(), 1);\n  }\n\n  close() {\n    this.container.classList.remove('ql-expanded');\n    this.label.setAttribute('aria-expanded', 'false');\n    this.options.setAttribute('aria-hidden', 'true');\n  }\n\n  selectItem(item, trigger = false) {\n    const selected = this.container.querySelector('.ql-selected');\n    if (item === selected) return;\n    if (selected != null) {\n      selected.classList.remove('ql-selected');\n    }\n    if (item == null) return;\n    item.classList.add('ql-selected');\n    this.select.selectedIndex = Array.from(item.parentNode.children).indexOf(item);\n    if (item.hasAttribute('data-value')) {\n      this.label.setAttribute('data-value', item.getAttribute('data-value'));\n    } else {\n      this.label.removeAttribute('data-value');\n    }\n    if (item.hasAttribute('data-label')) {\n      this.label.setAttribute('data-label', item.getAttribute('data-label'));\n    } else {\n      this.label.removeAttribute('data-label');\n    }\n    if (trigger) {\n      this.select.dispatchEvent(new Event('change'));\n      this.close();\n    }\n  }\n\n  update() {\n    let option;\n    if (this.select.selectedIndex > -1) {\n      const item = this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];\n      option = this.select.options[this.select.selectedIndex];\n      this.selectItem(item);\n    } else {\n      this.selectItem(null);\n    }\n    const isActive = option != null && option !== this.select.querySelector('option[selected]');\n    this.label.classList.toggle('ql-active', isActive);\n  }\n}\n\nexports.default = Picker;\n\n//# sourceURL=webpack://Quill/./ui/picker.js?");

        /***/
      },

      /***/"./ui/tooltip.js":
      /*!***********************!*\
        !*** ./ui/tooltip.js ***!
        \***********************/
      /*! no static exports found */
      /***/function uiTooltipJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nclass Tooltip {\n  constructor(quill, boundsContainer) {\n    this.quill = quill;\n    this.boundsContainer = boundsContainer || document.body;\n    this.root = quill.addContainer('ql-tooltip');\n    this.root.innerHTML = this.constructor.TEMPLATE;\n    if (this.quill.root === this.quill.scrollingContainer) {\n      this.quill.root.addEventListener('scroll', () => {\n        this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;\n      });\n    }\n    this.hide();\n  }\n\n  hide() {\n    this.root.classList.add('ql-hidden');\n  }\n\n  position(reference) {\n    const left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;\n    // root.scrollTop should be 0 if scrollContainer !== root\n    const top = reference.bottom + this.quill.root.scrollTop;\n    this.root.style.left = `${left}px`;\n    this.root.style.top = `${top}px`;\n    this.root.classList.remove('ql-flip');\n    const containerBounds = this.boundsContainer.getBoundingClientRect();\n    const rootBounds = this.root.getBoundingClientRect();\n    let shift = 0;\n    if (rootBounds.right > containerBounds.right) {\n      shift = containerBounds.right - rootBounds.right;\n      this.root.style.left = `${left + shift}px`;\n    }\n    if (rootBounds.left < containerBounds.left) {\n      shift = containerBounds.left - rootBounds.left;\n      this.root.style.left = `${left + shift}px`;\n    }\n    if (rootBounds.bottom > containerBounds.bottom) {\n      const height = rootBounds.bottom - rootBounds.top;\n      const verticalShift = reference.bottom - reference.top + height;\n      this.root.style.top = `${top - verticalShift}px`;\n      this.root.classList.add('ql-flip');\n    }\n    return shift;\n  }\n\n  show() {\n    this.root.classList.remove('ql-editing');\n    this.root.classList.remove('ql-hidden');\n  }\n}\n\nexports.default = Tooltip;\n\n//# sourceURL=webpack://Quill/./ui/tooltip.js?");

        /***/
      },

      /***/0:
      /*!************************!*\
        !*** multi ./quill.js ***!
        \************************/
      /*! no static exports found */
      /***/function _(module, exports, __webpack_require__) {

        eval("module.exports = __webpack_require__(/*! ./quill.js */\"./quill.js\");\n\n\n//# sourceURL=webpack://Quill/multi_./quill.js?");

        /***/
      }

      /******/ })["default"]
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _quill = __webpack_require__(0);

var _quill2 = _interopRequireDefault(_quill);

var _markdownShortcuts = __webpack_require__(3);

var _markdownShortcuts2 = _interopRequireDefault(_markdownShortcuts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_quill2.default.register('modules/markdownShortcuts', _markdownShortcuts2.default);

new _quill2.default('#editor', {
  theme: 'snow',
  modules: {
    markdownShortcuts: {}
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(0));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["MarkdownShortcuts"] = factory(require("quill"));else root["MarkdownShortcuts"] = factory(root["quill"]);
})(typeof self !== 'undefined' ? self : undefined, function (__WEBPACK_EXTERNAL_MODULE_0__) {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 1);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports) {

      module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;_e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }return _arr;
        }return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }(); // Quill.js Plugin - Markdown Shortcuts
      // This is a module for the Quill.js WYSIWYG editor (https://quilljs.com/)
      // which converts text entered as markdown to rich text.
      //
      // v0.0.5
      //
      // Author: Patrick Lee (me@patricklee.nyc)
      //
      // (c) Copyright 2017 Patrick Lee (me@patricklee.nyc).
      // Permission is hereby granted, free of charge, to any person obtaining a copy
      // of this software and associated documentation files (the "Software"), to deal
      // in the Software without restriction, including without limitation the rights
      // to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      // copies of the Software, and to permit persons to whom the Software is
      // furnished to do so, subject to the following conditions:
      //
      // The above copyright notice and this permission notice shall be included in
      // all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      // THE SOFTWARE.
      //


      var _quill = __webpack_require__(0);

      var _quill2 = _interopRequireDefault(_quill);

      var _hr = __webpack_require__(2);

      var _hr2 = _interopRequireDefault(_hr);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      _quill2.default.register('formats/horizontal', _hr2.default);

      var MarkdownShortcuts = function () {
        function MarkdownShortcuts(quill, options) {
          var _this = this;

          _classCallCheck(this, MarkdownShortcuts);

          this.quill = quill;
          this.options = options;

          this.ignoreTags = ['PRE'];
          this.matches = [{
            name: 'header',
            pattern: /^(#){1,6}\s/g,
            action: function action(text, selection, pattern) {
              var match = pattern.exec(text);
              if (!match) return;
              var size = match[0].length;
              // Need to defer this action https://github.com/quilljs/quill/issues/1134
              setTimeout(function () {
                _this.quill.formatLine(selection.index, 0, 'header', size - 1);
                _this.quill.deleteText(selection.index - size, size);
              }, 0);
            }
          }, {
            name: 'blockquote',
            pattern: /^(>)\s/g,
            action: function action(text, selection) {
              // Need to defer this action https://github.com/quilljs/quill/issues/1134
              setTimeout(function () {
                _this.quill.formatLine(selection.index, 1, 'blockquote', true);
                _this.quill.deleteText(selection.index - 2, 2);
              }, 0);
            }
          }, {
            name: 'code-block',
            pattern: /^`{3}(?:\s|\n)/g,
            action: function action(text, selection) {
              // Need to defer this action https://github.com/quilljs/quill/issues/1134
              setTimeout(function () {
                _this.quill.formatLine(selection.index, 1, 'code-block', true);
                _this.quill.deleteText(selection.index - 4, 4);
              }, 0);
            }
          }, {
            name: 'bolditalic',
            pattern: /(?:\*|_){3}(.+?)(?:\*|_){3}/g,
            action: function action(text, selection, pattern, lineStart) {
              var match = pattern.exec(text);

              var annotatedText = match[0];
              var matchedText = match[1];
              var startIndex = lineStart + match.index;

              if (text.match(/^([*_ \n]+)$/g)) return;

              setTimeout(function () {
                _this.quill.deleteText(startIndex, annotatedText.length);
                _this.quill.insertText(startIndex, matchedText, { bold: true, italic: true });
                _this.quill.format('bold', false);
              }, 0);
            }
          }, {
            name: 'bold',
            pattern: /(?:\*|_){2}(.+?)(?:\*|_){2}/g,
            action: function action(text, selection, pattern, lineStart) {
              var match = pattern.exec(text);

              var annotatedText = match[0];
              var matchedText = match[1];
              var startIndex = lineStart + match.index;

              if (text.match(/^([*_ \n]+)$/g)) return;

              setTimeout(function () {
                _this.quill.deleteText(startIndex, annotatedText.length);
                _this.quill.insertText(startIndex, matchedText, { bold: true });
                _this.quill.format('bold', false);
              }, 0);
            }
          }, {
            name: 'italic',
            pattern: /(?:\*|_){1}(.+?)(?:\*|_){1}/g,
            action: function action(text, selection, pattern, lineStart) {
              var match = pattern.exec(text);

              var annotatedText = match[0];
              var matchedText = match[1];
              var startIndex = lineStart + match.index;

              if (text.match(/^([*_ \n]+)$/g)) return;

              setTimeout(function () {
                _this.quill.deleteText(startIndex, annotatedText.length);
                _this.quill.insertText(startIndex, matchedText, { italic: true });
                _this.quill.format('italic', false);
              }, 0);
            }
          }, {
            name: 'strikethrough',
            pattern: /(?:~~)(.+?)(?:~~)/g,
            action: function action(text, selection, pattern, lineStart) {
              var match = pattern.exec(text);

              var annotatedText = match[0];
              var matchedText = match[1];
              var startIndex = lineStart + match.index;

              if (text.match(/^([*_ \n]+)$/g)) return;

              setTimeout(function () {
                _this.quill.deleteText(startIndex, annotatedText.length);
                _this.quill.insertText(startIndex, matchedText, { strike: true });
                _this.quill.format('strike', false);
              }, 0);
            }
          }, {
            name: 'code',
            pattern: /(?:`)(.+?)(?:`)/g,
            action: function action(text, selection, pattern, lineStart) {
              var match = pattern.exec(text);

              var annotatedText = match[0];
              var matchedText = match[1];
              var startIndex = lineStart + match.index;

              if (text.match(/^([*_ \n]+)$/g)) return;

              setTimeout(function () {
                _this.quill.deleteText(startIndex, annotatedText.length);
                _this.quill.insertText(startIndex, matchedText, { code: true });
                _this.quill.format('code', false);
                _this.quill.insertText(_this.quill.getSelection(), ' ');
              }, 0);
            }
          }, {
            name: 'hr',
            pattern: /^([-*]\s?){3}/g,
            action: function action(text, selection) {
              var startIndex = selection.index - text.length;
              setTimeout(function () {
                _this.quill.deleteText(startIndex, text.length);

                _this.quill.insertEmbed(startIndex + 1, 'hr', true, _quill2.default.sources.USER);
                _this.quill.insertText(startIndex + 2, "\n", _quill2.default.sources.SILENT);
                _this.quill.setSelection(startIndex + 2, _quill2.default.sources.SILENT);
              }, 0);
            }
          }, {
            name: 'plus-ul',
            // Quill 1.3.5 already treat * as another trigger for bullet lists
            pattern: /^\+\s$/g,
            action: function action(text, selection, pattern) {
              setTimeout(function () {
                _this.quill.formatLine(selection.index, 1, 'list', 'unordered');
                _this.quill.deleteText(selection.index - 2, 2);
              }, 0);
            }
          }, {
            name: 'image',
            pattern: /(?:!\[(.+?)\])(?:\((.+?)\))/g,
            action: function action(text, selection, pattern) {
              var startIndex = text.search(pattern);
              var matchedText = text.match(pattern)[0];
              // const hrefText = text.match(/(?:!\[(.*?)\])/g)[0]
              var hrefLink = text.match(/(?:\((.*?)\))/g)[0];
              var start = selection.index - matchedText.length - 1;
              if (startIndex !== -1) {
                setTimeout(function () {
                  _this.quill.deleteText(start, matchedText.length);
                  _this.quill.insertEmbed(start, 'image', hrefLink.slice(1, hrefLink.length - 1));
                }, 0);
              }
            }
          }, {
            name: 'link',
            pattern: /(?:\[(.+?)\])(?:\((.+?)\))/g,
            action: function action(text, selection, pattern) {
              var startIndex = text.search(pattern);
              var matchedText = text.match(pattern)[0];
              var hrefText = text.match(/(?:\[(.*?)\])/g)[0];
              var hrefLink = text.match(/(?:\((.*?)\))/g)[0];
              var start = selection.index - matchedText.length - 1;
              if (startIndex !== -1) {
                setTimeout(function () {
                  _this.quill.deleteText(start, matchedText.length);
                  _this.quill.insertText(start, hrefText.slice(1, hrefText.length - 1), 'link', hrefLink.slice(1, hrefLink.length - 1));
                }, 0);
              }
            }
          }];

          // Handler that looks for insert deltas that match specific characters
          this.quill.on('text-change', function (delta, oldContents, source) {
            for (var i = 0; i < delta.ops.length; i++) {
              if (delta.ops[i].hasOwnProperty('insert')) {
                if (delta.ops[i].insert === ' ') {
                  _this.onSpace();
                } else if (delta.ops[i].insert === '\n') {
                  _this.onEnter();
                }
              }
            }
          });
        }

        _createClass(MarkdownShortcuts, [{
          key: 'isValid',
          value: function isValid(text, tagName) {
            return typeof text !== 'undefined' && text && this.ignoreTags.indexOf(tagName) === -1;
          }
        }, {
          key: 'onSpace',
          value: function onSpace() {
            var selection = this.quill.getSelection();
            if (!selection) return;

            var _quill$getLine = this.quill.getLine(selection.index),
                _quill$getLine2 = _slicedToArray(_quill$getLine, 2),
                line = _quill$getLine2[0],
                offset = _quill$getLine2[1];

            var text = line.domNode.textContent;
            var lineStart = selection.index - offset;
            if (this.isValid(text, line.domNode.tagName)) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = this.matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var match = _step.value;

                  var matchedText = text.match(match.pattern);
                  if (matchedText) {
                    // We need to replace only matched text not the whole line
                    match.action(text, selection, match.pattern, lineStart);
                    return;
                  }
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            }
          }
        }, {
          key: 'onEnter',
          value: function onEnter() {
            var selection = this.quill.getSelection();
            if (!selection) return;

            var _quill$getLine3 = this.quill.getLine(selection.index),
                _quill$getLine4 = _slicedToArray(_quill$getLine3, 2),
                line = _quill$getLine4[0],
                offset = _quill$getLine4[1];

            var text = line.domNode.textContent + ' ';
            var lineStart = selection.index - offset;
            selection.length = selection.index++;
            if (this.isValid(text, line.domNode.tagName)) {
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = this.matches[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var match = _step2.value;

                  var matchedText = text.match(match.pattern);
                  if (matchedText) {
                    match.action(text, selection, match.pattern, lineStart);
                    return;
                  }
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            }
          }
        }]);

        return MarkdownShortcuts;
      }();

      if (window.Quill) {
        window.Quill.register('modules/markdownShortcuts', MarkdownShortcuts);
      }

      module.exports = MarkdownShortcuts;

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _quill = __webpack_require__(0);

      var _quill2 = _interopRequireDefault(_quill);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var BlockEmbed = _quill2.default.import('blots/block/embed');

      var HorizontalRule = function (_BlockEmbed) {
        _inherits(HorizontalRule, _BlockEmbed);

        function HorizontalRule() {
          _classCallCheck(this, HorizontalRule);

          return _possibleConstructorReturn(this, (HorizontalRule.__proto__ || Object.getPrototypeOf(HorizontalRule)).apply(this, arguments));
        }

        return HorizontalRule;
      }(BlockEmbed);

      HorizontalRule.blotName = 'hr';
      HorizontalRule.tagName = 'hr';

      exports.default = HorizontalRule;

      /***/
    }]
    /******/)
  );
});
//# sourceMappingURL=markdownShortcuts.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ })
/******/ ]);
//# sourceMappingURL=index.bundle.js.map