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

/***/ "./03-callhistory/src/ts/config.ts":
/*!*****************************************!*\
  !*** ./03-callhistory/src/ts/config.ts ***!
  \*****************************************/
/***/ (() => {

eval("jQuery.noConflict();\n(function ($, PLUGIN_ID) {\n  'use strict';\n\n  var $form = $('.js-submit-settings');\n  var $cancelButton = $('.js-cancel-button');\n  var $message = $('.js-text-message');\n  if (!($form.length > 0 && $cancelButton.length > 0 && $message.length > 0)) {\n    throw new Error('Required elements do not exist.');\n  }\n  var config = kintone.plugin.app.getConfig(PLUGIN_ID);\n  if (config.message) {\n    $message.val(config.message);\n  }\n  $form.on('submit', function (e) {\n    e.preventDefault();\n    kintone.plugin.app.setConfig({\n      message: $message.val()\n    }, function () {\n      alert('The plug-in settings have been saved. Please update the app!');\n      window.location.href = '../../flow?app=' + kintone.app.getId();\n    });\n  });\n  $cancelButton.on('click', function () {\n    window.location.href = '../../' + kintone.app.getId() + '/plugin/';\n  });\n})(jQuery, kintone.$PLUGIN_ID);\n\n//# sourceURL=webpack:///./03-callhistory/src/ts/config.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./03-callhistory/src/ts/config.ts"]();
/******/ 	
/******/ })()
;