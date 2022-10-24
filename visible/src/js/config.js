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

/***/ "./visible/src/ts/config.ts":
/*!**********************************!*\
  !*** ./visible/src/ts/config.ts ***!
  \**********************************/
/***/ (() => {

eval("jQuery.noConflict();\n(function ($, PLUGIN_ID) {\n  'use strict';\n\n  $(document).ready(function () {\n    // プラグインIDの設定\n    const conf = kintone.plugin.app.getConfig(PLUGIN_ID);\n    console.log(conf);\n\n    //既に値が設定されている場合はフィールドに値を設定する\n    if (typeof conf['elm'] !== 'undefined') {\n      $('#element').val(conf['elm']);\n    }\n\n    // アプリのフォーム情報を取得\n    kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', {\n      app: kintone.app.getId()\n    }, function (resp) {\n      for (let key in resp.properties) {\n        if (!resp.properties.hasOwnProperty(key)) {\n          continue;\n        }\n        let confFlg = false;\n        const prop = resp.properties[key];\n        const label = prop.label;\n        const code = prop.code;\n        console.log(prop);\n        if (typeof conf['name'] !== 'undefined' && code === conf['name']) confFlg = true;\n        if (confFlg) {\n          $('#name_code').prepend('<option name=' + code + ' selected>' + label + '</option>');\n        } else {\n          $('#name_code').append('<option name=' + code + '>' + label + '</option>');\n        }\n        // if (prop.type === 'SINGLE_LINE_TEXT') {\n        //   if (typeof conf['name'] !== 'undefined' && code === conf['name']) {\n        //     confFlg = true\n        //   }\n        //   if (confFlg) {\n        //     $('#name_code').prepend('<option name=' + code + ' selected>' + label + '</option>')\n        //   } else {\n        //     $('#name_code').append('<option name=' + code + '>' + label + '</option>')\n        //   }\n        // } else if (prop.type === 'DATETIME') {\n        //   if (typeof conf['name'] !== 'undefined' && code === conf['start_datetime']) {\n        //     $('#start_datetime_code').prepend('<option name=' + code + ' selected>' + label + '</option>')\n        //     $('#end_datetime_code').append('<option name=' + code + '>' + label + '</option>')\n        //   } else if (typeof conf['name'] !== 'undefined' && code === conf['end_datetime']) {\n        //     $('#start_datetime_code').append('<option name=' + code + '>' + label + '</option>')\n        //     $('#end_datetime_code').prepend('<option name=' + code + ' selected>' + label + '</option>')\n        //   } else {\n        //     $('#start_datetime_code').append('<option name=' + code + '>' + label + '</option>')\n        //     $('#end_datetime_code').append('<option name=' + code + '>' + label + '</option>')\n        //   }\n        // }\n      }\n    }, error => console.log(error));\n  });\n})(jQuery, kintone.$PLUGIN_ID);\n\n//# sourceURL=webpack:///./visible/src/ts/config.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./visible/src/ts/config.ts"]();
/******/ 	
/******/ })()
;