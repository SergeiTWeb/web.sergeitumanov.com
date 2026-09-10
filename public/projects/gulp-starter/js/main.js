/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{// ============================================================================\r\n// DEMO MODULE\r\n// ============================================================================\r\nconst sum = __webpack_require__(/*! ./module/sum.js */ \"./src/js/module/sum.js\");\r\nconsole.log(sum(2, 10));\r\n\r\n// ============================================================================\r\n// BACK TO TOP BUTTON\r\n// Appears after scrolling, smooth scroll to top on click\r\n// ============================================================================\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  // Create button element\r\n  const topBtn = document.createElement('button');\r\n  topBtn.className = 'back-to-top';\r\n  topBtn.innerHTML = '↑';\r\n  topBtn.setAttribute('aria-label', 'Back to top');\r\n  topBtn.setAttribute('title', 'Back to top');\r\n  document.body.appendChild(topBtn);\r\n\r\n  // Show/hide button on scroll\r\n  const toggleButton = () => {\r\n    if (window.scrollY > 400) {\r\n      topBtn.classList.add('visible');\r\n    } else {\r\n      topBtn.classList.remove('visible');\r\n    }\r\n  };\r\n\r\n  // Smooth scroll to top\r\n  const scrollToTop = () => {\r\n    window.scrollTo({\r\n      top: 0,\r\n      behavior: 'smooth'\r\n    });\r\n  };\r\n\r\n  // Event listeners\r\n  window.addEventListener('scroll', toggleButton);\r\n  topBtn.addEventListener('click', scrollToTop);\r\n\r\n  // Keyboard accessibility\r\n  topBtn.addEventListener('keydown', (e) => {\r\n    if (e.key === 'Enter' || e.key === ' ') {\r\n      e.preventDefault();\r\n      scrollToTop();\r\n    }\r\n  });\r\n});\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?\n}");

/***/ }),

/***/ "./src/js/module/sum.js":
/*!******************************!*\
  !*** ./src/js/module/sum.js ***!
  \******************************/
/***/ (function(module) {

eval("{// ============================================================================\r\n// DEMO MODULE\r\n// ============================================================================\r\nmodule.exports = (a, b) => a + b;\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/sum.js?\n}");

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;