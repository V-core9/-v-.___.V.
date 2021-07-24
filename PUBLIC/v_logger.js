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

/***/ "./node_modules/ip-regex/index.js":
/*!****************************************!*\
  !*** ./node_modules/ip-regex/index.js ***!
  \****************************************/
/***/ ((module) => {

"use strict";
eval("\n\nconst word = '[a-fA-F\\\\d:]';\nconst b = options => options && options.includeBoundaries ?\n\t`(?:(?<=\\\\s|^)(?=${word})|(?<=${word})(?=\\\\s|$))` :\n\t'';\n\nconst v4 = '(?:25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]\\\\d|\\\\d)(?:\\\\.(?:25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]\\\\d|\\\\d)){3}';\n\nconst v6seg = '[a-fA-F\\\\d]{1,4}';\nconst v6 = `\n(?:\n(?:${v6seg}:){7}(?:${v6seg}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:${v6seg}:){6}(?:${v4}|:${v6seg}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:${v6seg}:){5}(?::${v4}|(?::${v6seg}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:${v6seg}:){4}(?:(?::${v6seg}){0,1}:${v4}|(?::${v6seg}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:${v6seg}:){3}(?:(?::${v6seg}){0,2}:${v4}|(?::${v6seg}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:${v6seg}:){2}(?:(?::${v6seg}){0,3}:${v4}|(?::${v6seg}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:${v6seg}:){1}(?:(?::${v6seg}){0,4}:${v4}|(?::${v6seg}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::${v6seg}){0,5}:${v4}|(?::${v6seg}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n`.replace(/\\s*\\/\\/.*$/gm, '').replace(/\\n/g, '').trim();\n\n// Pre-compile only the exact regexes because adding a global flag make regexes stateful\nconst v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);\nconst v4exact = new RegExp(`^${v4}$`);\nconst v6exact = new RegExp(`^${v6}$`);\n\nconst ip = options => options && options.exact ?\n\tv46Exact :\n\tnew RegExp(`(?:${b(options)}${v4}${b(options)})|(?:${b(options)}${v6}${b(options)})`, 'g');\n\nip.v4 = options => options && options.exact ? v4exact : new RegExp(`${b(options)}${v4}${b(options)}`, 'g');\nip.v6 = options => options && options.exact ? v6exact : new RegExp(`${b(options)}${v6}${b(options)}`, 'g');\n\nmodule.exports = ip;\n\n\n//# sourceURL=webpack://NODEjs_TryOuts/./node_modules/ip-regex/index.js?");

/***/ }),

/***/ "./node_modules/is-ip/index.js":
/*!*************************************!*\
  !*** ./node_modules/is-ip/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst ipRegex = __webpack_require__(/*! ip-regex */ \"./node_modules/ip-regex/index.js\");\n\nconst isIp = string => ipRegex({exact: true}).test(string);\nisIp.v4 = string => ipRegex.v4({exact: true}).test(string);\nisIp.v6 = string => ipRegex.v6({exact: true}).test(string);\nisIp.version = string => isIp(string) ? (isIp.v4(string) ? 4 : 6) : undefined;\n\nmodule.exports = isIp;\n\n\n//# sourceURL=webpack://NODEjs_TryOuts/./node_modules/is-ip/index.js?");

/***/ }),

/***/ "./node_modules/is-online/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/is-online/browser.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/* eslint-env browser */\n\nconst publicIp = __webpack_require__(/*! public-ip */ \"./node_modules/public-ip/browser.js\");\n\nconst isOnline = async options => {\n\toptions = {\n\t\ttimeout: 5000,\n\t\tipVersion: 4,\n\t\t...options\n\t};\n\n\tif (navigator && !navigator.onLine) {\n\t\treturn false;\n\t}\n\n\tconst publicIpFunctionName = options.ipVersion === 4 ? 'v4' : 'v6';\n\n\ttry {\n\t\tawait publicIp[publicIpFunctionName](options);\n\t\treturn true;\n\t} catch (_) {\n\t\treturn false;\n\t}\n};\n\nmodule.exports = isOnline;\n\n\n//# sourceURL=webpack://NODEjs_TryOuts/./node_modules/is-online/browser.js?");

/***/ }),

/***/ "./node_modules/page-fps/lib/fps.js":
/*!******************************************!*\
  !*** ./node_modules/page-fps/lib/fps.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar util_1 = __webpack_require__(/*! ./util */ \"./node_modules/page-fps/lib/util.js\");\n\nvar MAX = 60; // 最多采集最新的 60 帧时间\n\n/**\n * FPS 采集\n */\n\nvar FPS =\n/** @class */\nfunction () {\n  function FPS() {\n    this.buffer = [];\n    this.raf = -1;\n  }\n  /**\n   * 开始采集\n   */\n\n\n  FPS.prototype.start = function () {\n    this.cancel();\n    this.loop();\n  };\n\n  FPS.prototype.stop = function () {\n    this.cancel();\n    this.buffer = [];\n    this.raf = -1;\n  };\n  /**\n   * 采样 fps\n   */\n\n\n  FPS.prototype.sample = function () {\n    var min = this.buffer[0];\n    var max = this.buffer[this.buffer.length - 1];\n    var g = max - min;\n    if (!g) return 60;\n    return 1000 * (this.buffer.length - 1) / g;\n  };\n\n  FPS.prototype.cancel = function () {\n    window.cancelAnimationFrame(this.raf);\n  };\n\n  FPS.prototype.loop = function () {\n    var _this = this;\n\n    this.raf = window.requestAnimationFrame(function () {\n      _this.buffer.push(util_1.clock.now());\n\n      if (_this.buffer.length >= MAX) {\n        _this.buffer.shift();\n      }\n\n      _this.loop();\n    });\n  };\n\n  return FPS;\n}();\n\nexports.FPS = FPS;\n\n//# sourceURL=webpack://NODEjs_TryOuts/./node_modules/page-fps/lib/fps.js?");

/***/ }),

/***/ "./node_modules/page-fps/lib/g.js":
/*!****************************************!*\
  !*** ./node_modules/page-fps/lib/g.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar RATIO = window.devicePixelRatio;\nvar FONT_SIZE = 10; // 字体大小 10\n// 画布大小\n\nvar W = 80;\nvar H = 12; // 缓存的 fps 数量\n\nvar MAX = 1;\n/**\n * graphic for fps draw\n */\n\nvar G =\n/** @class */\nfunction () {\n  function G() {\n    /**\n     * 当前的 fps 数组\n     */\n    this.fps = [];\n    this.createCanvas();\n  }\n\n  G.prototype.createCanvas = function () {\n    this.c = document.createElement('canvas');\n    this.c.setAttribute('style', \"position: fixed; bottom: 4px; left: 4px; width: \" + W + \"px; height: \" + H + \"px; z-index: 99999\");\n    this.c.width = W * RATIO;\n    this.c.height = H * RATIO;\n    document.body.appendChild(this.c);\n    this.ctx = this.c.getContext('2d'); // ctx 样式\n\n    this.ctx.globalAlpha = 0.5;\n    this.ctx.fillStyle = 'black';\n    this.ctx.font = FONT_SIZE * RATIO + \"px Menlo\";\n    this.ctx.textBaseline = 'middle';\n  };\n  /**\n   * 添加新的 fps 到数组中\n   * @param fps\n   */\n\n\n  G.prototype.append = function (fps) {\n    // 数组超出，则移除第一个！\n    if (this.fps.length >= MAX) {\n      this.fps.shift();\n    }\n\n    this.fps.push(fps);\n  };\n  /**\n   * 绘制当前 fps，目前绘制最后一个，后面改成绘制曲线\n   */\n\n\n  G.prototype.draw = function () {\n    this.ctx.clearRect(0, 0, this.c.width, this.c.height); // least fps\n\n    var f = this.fps[this.fps.length - 1];\n    this.ctx.fillText(\"FPS: \" + f.toFixed(3), 2, (6 + 1) * RATIO);\n  };\n  /**\n   * 销毁\n   */\n\n\n  G.prototype.destroy = function () {\n    this.c.parentNode.removeChild(this.c);\n    this.c = undefined;\n    this.ctx = undefined;\n  };\n\n  return G;\n}();\n\nexports.G = G;\n\n//# sourceURL=webpack://NODEjs_TryOuts/./node_modules/page-fps/lib/g.js?");

/***/ }),

/***/ "./node_modules/page-fps/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/page-fps/lib/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar pf_1 = __webpack_require__(/*! ./pf */ \"./node_modules/page-fps/lib/pf.js\");\n\nvar fps_1 = __webpack_require__(/*! ./fps */ \"./node_modules/page-fps/lib/fps.js\");\n\nexports.FPS = fps_1.FPS;\n\nvar g_1 = __webpack_require__(/*! ./g */ \"./node_modules/page-fps/lib/g.js\");\n\nexports.G = g_1.G;\n\nvar timer_1 = __webpack_require__(/*! ./timer */ \"./node_modules/page-fps/lib/timer.js\");\n\nexports.Timer = timer_1.Timer;\nexports.default = pf_1.PF;\n\n//# sourceURL=webpack://NODEjs_TryOuts/./node_modules/page-fps/lib/index.js?");

/***/ }),

/***/ "./node_modules/page-fps/lib/pf.js":
/*!*****************************************!*\
  !*** ./node_modules/page-fps/lib/pf.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar fps_1 = __webpack_require__(/*! ./fps */ \"./node_modules/page-fps/lib/fps.js\");\n\nvar timer_1 = __webpack_require__(/*! ./timer */ \"./node_modules/page-fps/lib/timer.js\");\n\nvar g_1 = __webpack_require__(/*! ./g */ \"./node_modules/page-fps/lib/g.js\");\n\nvar PF =\n/** @class */\nfunction () {\n  function PF() {\n    var _this = this; // fps 采样\n\n\n    this.fps = new fps_1.FPS(); // 渲染的 raf\n\n    this.timer = new timer_1.Timer(function () {\n      // 采样\n      _this.g.append(_this.fps.sample()); // 绘制\n\n\n      _this.g.draw();\n    });\n  }\n  /**\n   * 启动\n   */\n\n\n  PF.prototype.start = function () {\n    if (!this.g) {\n      this.g = new g_1.G();\n    }\n\n    this.fps.start();\n    this.timer.start();\n  };\n  /**\n   * 停止\n   */\n\n\n  PF.prototype.stop = function () {\n    this.fps.stop();\n    this.timer.stop();\n\n    if (this.g) {\n      this.g.destroy();\n      this.g = void 0;\n    }\n  };\n\n  PF.ver = \"1.0.2\";\n  return PF;\n}();\n\nexports.PF = PF;\n\n//# sourceURL=webpack://NODEjs_TryOuts/./node_modules/page-fps/lib/pf.js?");

/***/ }),

/***/ "./node_modules/page-fps/lib/timer.js":
/*!********************************************!*\
  !*** ./node_modules/page-fps/lib/timer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar util_1 = __webpack_require__(/*! ./util */ \"./node_modules/page-fps/lib/util.js\");\n/**\n * 定时器\n */\n\n\nvar Timer =\n/** @class */\nfunction () {\n  /**\n   * 回调函数，延迟，减少 fps，减低损耗\n   * @param cb\n   * @param delay\n   */\n  function Timer(cb, delay) {\n    if (delay === void 0) {\n      delay = 30;\n    }\n\n    this.prev = 0;\n    this.cb = cb;\n    this.delay = delay;\n  }\n  /**\n   * 启动\n   */\n\n\n  Timer.prototype.start = function () {\n    this.cancel();\n    this.loop();\n  };\n  /**\n   * 停止\n   */\n\n\n  Timer.prototype.stop = function () {\n    this.cancel();\n    this.raf = undefined;\n  };\n\n  Timer.prototype.cancel = function () {\n    window.cancelAnimationFrame(this.raf);\n  };\n\n  Timer.prototype.loop = function () {\n    var _this = this;\n\n    this.raf = window.requestAnimationFrame(function () {\n      var n = util_1.clock.now();\n\n      if (n > _this.prev + _this.delay) {\n        _this.prev = n;\n\n        _this.cb(0);\n      }\n\n      _this.loop();\n    });\n  };\n\n  return Timer;\n}();\n\nexports.Timer = Timer;\n\n//# sourceURL=webpack://NODEjs_TryOuts/./node_modules/page-fps/lib/timer.js?");

/***/ }),

/***/ "./node_modules/page-fps/lib/util.js":
/*!*******************************************!*\
  !*** ./node_modules/page-fps/lib/util.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n/**\n * 获取当前时间\n */\n\nexports.clock = (typeof performance === \"undefined\" ? \"undefined\" : _typeof(performance)) === 'object' && performance.now ? performance : Date;\n\n//# sourceURL=webpack://NODEjs_TryOuts/./node_modules/page-fps/lib/util.js?");

/***/ }),

/***/ "./node_modules/public-ip/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/public-ip/browser.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst isIp = __webpack_require__(/*! is-ip */ \"./node_modules/is-ip/index.js\");\n\nclass CancelError extends Error {\n\tconstructor() {\n\t\tsuper('Request was cancelled');\n\t\tthis.name = 'CancelError';\n\t}\n\n\tget isCanceled() {\n\t\treturn true;\n\t}\n}\n\nconst defaults = {\n\ttimeout: 5000\n};\n\nconst urls = {\n\tv4: [\n\t\t'https://ipv4.icanhazip.com/',\n\t\t'https://api.ipify.org/'\n\t],\n\tv6: [\n\t\t'https://ipv6.icanhazip.com/',\n\t\t'https://api6.ipify.org/'\n\t]\n};\n\nconst sendXhr = (url, options, version) => {\n\tconst xhr = new XMLHttpRequest();\n\n\tlet _reject;\n\tconst promise = new Promise((resolve, reject) => {\n\t\t_reject = reject;\n\t\txhr.addEventListener('error', reject, {once: true});\n\t\txhr.addEventListener('timeout', reject, {once: true});\n\n\t\txhr.addEventListener('load', () => {\n\t\t\tconst ip = xhr.responseText.trim();\n\n\t\t\tif (!ip || !isIp[version](ip)) {\n\t\t\t\treject();\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tresolve(ip);\n\t\t}, {once: true});\n\n\t\txhr.open('GET', url);\n\t\txhr.timeout = options.timeout;\n\t\txhr.send();\n\t});\n\n\tpromise.cancel = () => {\n\t\txhr.abort();\n\t\t_reject(new CancelError());\n\t};\n\n\treturn promise;\n};\n\nconst queryHttps = (version, options) => {\n\tlet request;\n\tconst promise = (async function () {\n\t\tconst urls_ = [].concat.apply(urls[version], options.fallbackUrls || []);\n\t\tfor (const url of urls_) {\n\t\t\ttry {\n\t\t\t\trequest = sendXhr(url, options, version);\n\t\t\t\t// eslint-disable-next-line no-await-in-loop\n\t\t\t\tconst ip = await request;\n\t\t\t\treturn ip;\n\t\t\t} catch (error) {\n\t\t\t\tif (error instanceof CancelError) {\n\t\t\t\t\tthrow error;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tthrow new Error('Couldn\\'t find your IP');\n\t})();\n\n\tpromise.cancel = () => {\n\t\trequest.cancel();\n\t};\n\n\treturn promise;\n};\n\nmodule.exports.v4 = options => queryHttps('v4', {...defaults, ...options});\n\nmodule.exports.v6 = options => queryHttps('v6', {...defaults, ...options});\n\n\n//# sourceURL=webpack://NODEjs_TryOuts/./node_modules/public-ip/browser.js?");

/***/ }),

/***/ "./src/helpers/loging_function.js":
/*!****************************************!*\
  !*** ./src/helpers/loging_function.js ***!
  \****************************************/
/***/ ((module) => {

eval("// Testing the run for the thing being loaded from\r\n// both cli and browser.\r\nconst checkIfNode = false;\r\n\r\nvar domExists = false;\r\nif (typeof window != \"undefined\") {\r\n  addToDom = (msg, type = \"log\") => {\r\n    document.body.innerHTML += `<div class=\"single_log_msg ${type}\">${msg}</div>`;\r\n  };\r\n  domExists = true;\r\n}\r\n\r\nfunction ifRuningInNODE() {\r\n  if (checkIfNode){\r\n    if ( true && module.exports) {\r\n      console.log(\"this script is running in Node.js\");\r\n    } else {\r\n      console.log(\"this script is not running in Node.js\");\r\n    }\r\n  }\r\n}\r\n\r\nmodule.exports = {\r\n  logMSG: (msg) => {\r\n    msg = \"⟠ LOG: \" + msg\r\n    console.log(\"\\x1b[36m%s\\x1b[0m\", msg)\r\n    if (domExists) {\r\n      addToDom(msg)\r\n    }\r\n    ifRuningInNODE()\r\n  },\r\n  infoMSG: (msg) => {\r\n    msg = \"≙ INFO: \" + msg\r\n    console.info(\"\\x1b[1m\\x1b[32m%s\\x1b[0m\", msg)\r\n    if (domExists) {\r\n      addToDom(msg, 'info');\r\n    }\r\n    ifRuningInNODE()\r\n  },\r\n  warnMSG: (msg) => {\r\n    msg = \"⨊ WARN: \" + msg\r\n    console.warn(\"\\x1b[1m\\x1b[35m%s\\x1b[0m\", msg)\r\n    if (domExists) {\r\n      addToDom(msg, \"warn\");\r\n    }\r\n    ifRuningInNODE()\r\n  },\r\n  errorMSG: (msg) => {\r\n    msg = \"⟁ ERROR: \" + msg\r\n    console.error(\"\\x1b[1m\\x1b[41m%s\\x1b[0m \", msg)\r\n    console.log(\"\\x1b[2m\\x1b[31m%s\\x1b[0m \\x1b[1m\\x1b[31m\",\"------START OF ERROR TRACE----------\")\r\n    console.trace()\r\n    console.log(\"\\x1b[0m\\x1b[2m\\x1b[31m%s\\x1b[0m \",'-------------END OF TRACE----------')\r\n    if (domExists) {\r\n      addToDom(msg, \"error\");\r\n    }\r\n    ifRuningInNODE()\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://NODEjs_TryOuts/./src/helpers/loging_function.js?");

/***/ }),

/***/ "./src/v_logger.js":
/*!*************************!*\
  !*** ./src/v_logger.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var page_fps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! page-fps */ \"./node_modules/page-fps/lib/index.js\");\nconst { logMSG, infoMSG, warnMSG, errorMSG} = __webpack_require__(/*! ./helpers/loging_function */ \"./src/helpers/loging_function.js\");\r\n\r\n//> WebVitals \r\n// import { getLCP, getFCP, getFID, getCLS, getTTFB } from \"web-vitals\";\r\n// \r\n// function logDelta({ name, id, delta }) {\r\n//   console.log(`${name} matching ID ${id} changed by ${delta}`);\r\n// }\r\n// \r\n// getCLS(logDelta);\r\n// getFCP(logDelta);\r\n// getFID(logDelta);\r\n// getLCP(logDelta);\r\n// getTTFB(logDelta);\r\n\r\n\r\n\r\n\r\nconst pf = new page_fps__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\n\r\n// IsOnline NPM require\r\nconst isOnline = __webpack_require__(/*! is-online */ \"./node_modules/is-online/browser.js\");\r\n//check if is online\r\n(async () => {\r\n  console.log(await isOnline());\r\n  //=> true\r\n  infoMSG(\"YEA WE ARE ONLINE\")\r\n})();\r\n// END IsOnline\r\n\r\nif (false) {} else if (true) {\r\n  warnMSG(\"Running <_ \" + \"development\" + \" mode _>\");\r\n  infoMSG(\"process.env.NODE_ENV === \" + \"development\");\r\n} else {}\r\n\r\nwindow.onclick = (event) => {\r\n  event.preventDefault()\r\n  event.stopPropagation();\r\n  logMSG(\"onclick:\" + JSON.stringify(event))\r\n  if (!pf.g) {\r\n    pf.start()\r\n    console.log(pf)\r\n    pf.g.c.setAttribute('style', \" position: fixed; bottom: unset; left: 5px; top: 5px; width: 160px; height: 28px;\")\r\n    pf.g.c.setAttribute(\"width\", \"160\");\r\n    pf.g.c.setAttribute(\"height\", \"28\");\r\n    pf.g.ctx.fillStyle = \"lime\";\r\n    pf.g.ctx.font = \"20px monospace\";\r\n    pf.g.ctx.textBaseline = \"top\";\r\n  }\r\n}\r\n\r\nwindow.oncontextmenu = (event) => {\r\n  event.preventDefault();\r\n  event.stopPropagation();\r\n  pf.stop();\r\n  infoMSG(\"oncontextmenu:\" + JSON.stringify(event));\r\n};\r\n\r\n\r\nwindow.onload = (event) => {\r\n  event.preventDefault();\r\n  event.stopPropagation();\r\n  infoMSG(\"ONLOAD:\"+JSON.stringify(event));\r\n};\r\n\n\n//# sourceURL=webpack://NODEjs_TryOuts/./src/v_logger.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/v_logger.js");
/******/ 	
/******/ })()
;