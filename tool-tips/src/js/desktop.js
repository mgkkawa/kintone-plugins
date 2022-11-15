/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./03-callhistory/src/ts/desktop.ts":
/*!******************************************!*\
  !*** ./03-callhistory/src/ts/desktop.ts ***!
  \******************************************/
/***/ (() => {

eval("jQuery.noConflict();\n(function ($, PLUGIN_ID) {\n  'use strict';\n\n  kintone.events.on('app.record.index.show', function () {\n    var config = kintone.plugin.app.getConfig(PLUGIN_ID);\n    var spaceElement = kintone.app.getHeaderSpaceElement();\n    if (spaceElement === null) {\n      throw new Error('The header element is unavailable on this page');\n    }\n    var fragment = document.createDocumentFragment();\n    var headingEl = document.createElement('h3');\n    var messageEl = document.createElement('p');\n    messageEl.classList.add('plugin-space-message');\n    messageEl.textContent = config.message;\n    headingEl.classList.add('plugin-space-heading');\n    headingEl.textContent = 'Hello kintone plugin!';\n    fragment.appendChild(headingEl);\n    fragment.appendChild(messageEl);\n    spaceElement.appendChild(fragment);\n  });\n})(jQuery, kintone.$PLUGIN_ID);\n\n//# sourceURL=webpack:///./03-callhistory/src/ts/desktop.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./03-callhistory/src/ts/desktop.ts"]();
/******/ 	
/******/ })()
;