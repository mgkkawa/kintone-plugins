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

/***/ "./01-tool-tips/src/ts/desktop.ts":
/*!****************************************!*\
  !*** ./01-tool-tips/src/ts/desktop.ts ***!
  \****************************************/
/***/ (() => {

eval("jQuery.noConflict();\n(($, PLUGIN_ID) => {\n  'use strict';\n\n  kintone.events.on('app.record.detail.show', () => {\n    const config = kintone.plugin.app.getConfig(PLUGIN_ID);\n    const settings = config.settings;\n    const fields = settings.map(setting => setting.field);\n    const gaia = $('#record-gaia');\n    const elements = gaia.children().children().children();\n    elements.each((i, element) => {\n      const elem = $(element);\n      const children = elem.children();\n      const label = $(children[0]);\n      const text = label.text();\n      if (!fields.includes(label.text())) return;\n      const index = fields.indexOf(text);\n      const tips = settings[index].tips;\n      label.append($('<span>').addClass('tips-icon').attr('id', 'tool-tips-' + i).text('Θ').append($('<div>').addClass('baloon').html(tips).hide()).on({\n        'mouseenter': function () {\n          $(this).children('.baloon').fadeIn('fast');\n        },\n        'mouseleave': function () {\n          $(this).children('.baloon').fadeOut('fast');\n        }\n      }));\n      console.log(label.children());\n    });\n  });\n})(jQuery, kintone.$PLUGIN_ID);\n\n//# sourceURL=webpack:///./01-tool-tips/src/ts/desktop.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./01-tool-tips/src/ts/desktop.ts"]();
/******/ 	
/******/ })()
;