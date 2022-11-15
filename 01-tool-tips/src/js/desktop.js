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

/***/ "./tool-tips/src/ts/desktop.ts":
/*!*************************************!*\
  !*** ./tool-tips/src/ts/desktop.ts ***!
  \*************************************/
/***/ (() => {

eval("jQuery.noConflict();\n(($, PLUGIN_ID) => {\n  'use strict';\n\n  kintone.events.on('app.record.index.show', () => {\n    const config = kintone.plugin.app.getConfig(PLUGIN_ID);\n    const spaceElement = kintone.app.getHeaderSpaceElement();\n    if (spaceElement === null) {\n      throw new Error('The header element is unavailable on this page');\n    }\n    const fragment = document.createDocumentFragment();\n    const headingEl = document.createElement('h3');\n    const messageEl = document.createElement('p');\n    messageEl.classList.add('plugin-space-message');\n    messageEl.textContent = config.message;\n    headingEl.classList.add('plugin-space-heading');\n    headingEl.textContent = 'Hello kintone plugin!';\n    fragment.appendChild(headingEl);\n    fragment.appendChild(messageEl);\n    spaceElement.appendChild(fragment);\n  });\n})(jQuery, kintone.$PLUGIN_ID);\n\n//# sourceURL=webpack:///./tool-tips/src/ts/desktop.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./tool-tips/src/ts/desktop.ts"]();
/******/ 	
/******/ })()
;