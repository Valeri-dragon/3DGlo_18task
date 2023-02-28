/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ \"./modules/forms.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"28 febrary 2023\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n  const calcItem = document.querySelectorAll(\".calc-item~input\");\r\n  let str;\r\n  let span = document.createElement(\"span\");\r\n\r\n  const removeError = () => {\r\n    span.remove();\r\n  };\r\n\r\n  const error = (e, str) => {\r\n    span.style.display = \"block\";\r\n    span.classList.add(\"error\");\r\n    span.style.color = \"red\";\r\n    span.style.position = `absolute`;\r\n    span.style.top = `0px`;\r\n    span.style.right = `77px`;\r\n    span.style.padding = `5px`;\r\n    span.style.background = `#fff`;\r\n    span.textContent = str;\r\n    e.before(span);\r\n  };\r\n  const validate = (e) => {\r\n    e.addEventListener(\"input\", (ev) => {\r\n      removeError();\r\n\r\n      if (/\\D+/.test(ev.target.value.trim())) {\r\n        str = \"Введите число\";\r\n        error(e, str);\r\n        ev.target.value = ev.target.value.replace(/\\D+/, \"\");\r\n      } else {\r\n        removeError();\r\n        ev.target.value;\r\n      }\r\n    });\r\n  };\r\n  calcItem.forEach((item) => {\r\n    validate(item);\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\r\n\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/forms.js":
/*!**************************!*\
  !*** ./modules/forms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst forms = () => {\r\n  const nameInputs = document.querySelectorAll('input[type=\"text\"]');\r\n  const emailInputs = document.querySelectorAll('input[type=\"email\"]');\r\n  const userMessageInput = document.querySelector(\".mess\");\r\n  const phoneinputs = document.querySelectorAll('input[type=\"tel\"]');\r\n  let str;\r\n  let span = document.createElement(\"span\");\r\n\r\n  const removeError = () => {\r\n    span.remove();\r\n  };\r\n\r\n  const error = (e, str) => {\r\n    span.style.display = \"block\";\r\n    span.classList.add(\"error\");\r\n    span.style.color = \"red\";\r\n    span.style.position = `absolute`;\r\n    span.style.bottom = `80px`;\r\n    span.style.right = `77px`;\r\n    span.style.padding = `5px`;\r\n    span.style.background = `#fff`;\r\n    span.textContent = str;\r\n    e.before(span);\r\n  };\r\n\r\n  const validateCyrillic = (e) => {\r\n    e.addEventListener(\"input\", (ev) => {\r\n      removeError();\r\n\r\n      if (!/[а-я-\\s]+/gi.test(ev.target.value.trim())) {\r\n        str = \"Можно использовать кириллицу, пробел или дефис\";\r\n        error(e, str);\r\n        ev.target.value = ev.target.value.replace(/[a-z\\s]+/gi, \"\");\r\n      } else {\r\n        removeError();\r\n        ev.target.value;\r\n      }\r\n    });\r\n  };\r\n\r\n  const validateEmail = (e) => {\r\n    e.addEventListener(\"input\", (ev) => {\r\n      if (\r\n        /(([\\-\\.\\_\\~\\*\\'\\d\\w]+)(@)([\\w]+\\.)+([\\w]{2,4}))/gi.test(\r\n          ev.target.value\r\n        )\r\n      ) {\r\n        removeError();\r\n        ev.target.value;\r\n      } else {\r\n        error(e, str);\r\n        str = \"Введите верный e-mail\";\r\n      }\r\n    });\r\n  };\r\n\r\n  const validatePhone = (e) => {\r\n    e.addEventListener(\"input\", (ev) => {\r\n      if (\r\n        /^((8|\\+375|\\+7)[\\- ]?)?\\(?\\d{2,3}\\)?[\\- ]?\\d{1}[\\- ]?\\d{1}[\\- ]?\\d{1}[\\- ]?\\d{1}[\\- ]?\\d{1}(([\\- ]?\\d{1})?[\\- ]?\\d{1})?$/.test(\r\n          ev.target.value\r\n        )\r\n      ) {\r\n        removeError();\r\n        ev.target.value;\r\n      } else {\r\n        error(e, str);\r\n        str = \"Номер должен начинаться с +7, 8 или +375\";\r\n      }\r\n    });\r\n  };\r\n\r\n  nameInputs.forEach((item) => {\r\n    if (item.hasAttribute(\"name\")) {\r\n      validateCyrillic(item);\r\n    }\r\n  });\r\n\r\n  emailInputs.forEach((item) => {\r\n    validateEmail(item);\r\n  });\r\n\r\n  phoneinputs.forEach((item) => {\r\n    validatePhone(item);\r\n  });\r\n\r\n  userMessageInput.addEventListener(\"input\", () => {\r\n    validateCyrillic(userMessageInput);\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\r\n\n\n//# sourceURL=webpack:///./modules/forms.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const body = document.querySelector(\"body\");\r\n  const menu = document.querySelector(\"menu\");\r\n\r\n  const toggleMenu = () => {\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n  const scroll = (e) => {\r\n    e.preventDefault();\r\n    const ID = e.target.getAttribute(\"href\").substr(1);\r\n    document\r\n      .getElementById(ID)\r\n      .scrollIntoView({ behavior: \"smooth\", block: \"start\" });\r\n  };\r\n  body.addEventListener(\"click\", (e) => {\r\n    if (e.target.matches(\".close-btn\") || e.target.closest(\".menu\")) {\r\n      toggleMenu();\r\n    } else if (e.target.tagName === \"A\") {\r\n      scroll(e);\r\n      if (e.target.closest(\"ul>li>a\")) {\r\n        toggleMenu();\r\n      }\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const popupBtns = document.querySelectorAll(\".popup-btn\");\r\n  const popup = document.querySelector(\".popup \");\r\n  const popupContent = popup.querySelector(\".popup-content\");\r\n\r\n  let pos = 0;\r\n\r\n  const myAnimation = () => {\r\n    pos++;\r\n    if (popup.clientWidth > 768) {\r\n      popupContent.style.left = (pos * popup.clientWidth) / 150 + \"px\";\r\n      popupContent.style.opacity = pos * 0.02;\r\n      if (pos < 50) {\r\n        requestAnimationFrame(myAnimation);\r\n      }\r\n    } else {\r\n      popupContent.style.opacity = \"\";\r\n      popupContent.style.left = \"\";\r\n    }\r\n  };\r\n\r\n  const openPopup = () => {\r\n    if (!popup.style.display) {\r\n      popup.style.display = \"flex\";\r\n      requestAnimationFrame(myAnimation);\r\n    } else {\r\n      pos = 0;\r\n      popup.style.display = \"\";\r\n      cancelAnimationFrame(myAnimation);\r\n    }\r\n  };\r\n\r\n  popupBtns.forEach((item) => item.addEventListener(\"click\", openPopup));\r\n\r\n  popup.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"popup-close\") || e.target === popup) {\r\n      openPopup();\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabsPanel = document.querySelector(\".service-header\");\r\n  const tabs = document.querySelectorAll(\".service-header-tab\");\r\n  const tabsContent = document.querySelectorAll(\".service-tab\");\r\n\r\n  tabsPanel.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".service-header-tab\")) {\r\n      const tabBtn = e.target.closest(\".service-header-tab\");\r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add(\"active\");\r\n          tabsContent[index].classList.remove(\"d-none\");\r\n        } else {\r\n          tab.classList.remove(\"active\");\r\n          tabsContent[index].classList.add(\"d-none\");\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timer = document.getElementById(\"timer\");\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n  let timerDays = document.createElement(\"p\");\r\n  let idInterval;\r\n  const getTimeRemaining = () => {\r\n    let dateNow = new Date().getTime();\r\n    let dateStop = Date.parse(deadline);\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n    return {\r\n      timeRemaining,\r\n      days,\r\n      hours,\r\n      minutes,\r\n      seconds,\r\n    };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n    const addZero = (n) => (n < 10 ? \"0\" + n : n);\r\n    timerHours.textContent = addZero(getTime.hours);\r\n    timerMinutes.textContent = addZero(getTime.minutes);\r\n    timerSeconds.textContent = addZero(getTime.seconds);\r\n    timerDays.setAttribute(\"id\", \"timer-days\");\r\n    timerDays.textContent = `${getTime.days} Дн.`;\r\n    timer.prepend(timerDays);\r\n    clearInterval(idInterval);\r\n    if (getTime.timeRemaining > 0) {\r\n      idInterval = setInterval(updateClock, 1000);\r\n    } else if (getTime.timeRemaining <= 0) {\r\n      timerDays.textContent = `0 Дн.`;\r\n      timerHours.textContent = addZero(0);\r\n      timerMinutes.textContent = addZero(0);\r\n      timerSeconds.textContent = addZero(0);\r\n    }\r\n  };\r\n\r\n  updateClock();\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;