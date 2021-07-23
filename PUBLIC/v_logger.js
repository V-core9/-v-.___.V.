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

/***/ "./src/helpers/loging_function.js":
/*!****************************************!*\
  !*** ./src/helpers/loging_function.js ***!
  \****************************************/
/***/ ((module) => {

eval("// Testing the run for the thing being loaded from\r\n// both cli and browser.\r\n\r\nif (typeof window != \"undefined\") {\r\n  addToDom = (msg) => {\r\n    document.body.innerHTML += `<div class=\"AAAAAAAA\">${msg}</div>`;\r\n  }\r\n}\r\n\r\nmodule.exports = {\r\n  logMSG: (msg) => {\r\n    msg = \"⟠ LOG: \" + msg\r\n    console.log(\"\\x1b[36m%s\\x1b[0m\", msg);\r\n    if (typeof addToDom != \"undefined\") {\r\n      addToDom(`<div class=\"AAAAAAAA\">${msg}</div>`);\r\n    }\r\n  },\r\n  infoMSG: (msg) => {\r\n    msg = \"≙ INFO: \" + msg\r\n    console.info(\"\\x1b[1m\\x1b[32m%s\\x1b[0m\", msg)\r\n    if (typeof addToDom != \"undefined\") {\r\n      addToDom(`<div class=\"AAAAAAAA\">${msg}</div>`);\r\n    }\r\n  },\r\n  warnMSG: (msg) => {\r\n    msg = \"⨊ WARN: \" + msg\r\n    console.warn(\"\\x1b[1m\\x1b[35m%s\\x1b[0m\", msg)\r\n    if (typeof addToDom != \"undefined\") {\r\n      addToDom(`<div class=\"AAAAAAAA\">${msg}</div>`);\r\n    }\r\n  },\r\n  errorMSG: (msg) => {\r\n    msg = \"⟁ ERROR: \" + msg\r\n    console.error(\"\\x1b[1m\\x1b[41m%s\\x1b[0m \", msg)\r\n    console.log(\"\\x1b[2m\\x1b[31m%s\\x1b[0m \\x1b[1m\\x1b[31m\",\"------START OF ERROR TRACE----------\")\r\n    console.trace()\r\n    console.log(\"\\x1b[0m\\x1b[2m\\x1b[31m%s\\x1b[0m \",'-------------END OF TRACE----------')\r\n    if (typeof addToDom != \"undefined\") {\r\n      addToDom(`<div class=\"AAAAAAAA\">${msg}</div>`);\r\n    }\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://NODEjs_TryOuts/./src/helpers/loging_function.js?");

/***/ }),

/***/ "./src/v_logger.js":
/*!*************************!*\
  !*** ./src/v_logger.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\r\n  logMSG,\r\n  infoMSG,\r\n  warnMSG,\r\n  errorMSG,\r\n} = __webpack_require__(/*! ./helpers/loging_function */ \"./src/helpers/loging_function.js\");\r\nif (false){}else if ( true) {\r\n    warnMSG(\"Running <_ \" + \"development\" + \" mode _>\");\r\n    infoMSG(\"process.env.NODE_ENV === \" + \"development\");\r\n    logMSG(\"Hello from app.js\");\r\n    infoMSG(\"Hello from app.js\");\r\n    warnMSG(\"Hello from app.js\");\r\n    errorMSG(\"Hello from app.js\");\r\n  } else {}\r\n\n\n//# sourceURL=webpack://NODEjs_TryOuts/./src/v_logger.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/v_logger.js");
/******/ 	
/******/ })()
;