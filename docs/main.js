/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/book-search.js":
/*!***************************!*\
  !*** ./js/book-search.js ***!
  \***************************/
/***/ (() => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var bookSearch = document.querySelector('#book-search');
var searchBtn = document.querySelector('#search-btn');
var searchInput = document.querySelector('#book-search-input');
var searchOutput = document.querySelector('#book-search-result');
var arrow = document.querySelector('#arrow');
var loader = document.querySelector('#loader');
var inputTimer;
var doneTypingInterval = 3000;
var baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
var maxResults = '&maxResults=40';
searchBtn.addEventListener('click', showBookSearch);
searchInput.addEventListener('keyup', function () {
  clearTimeout(inputTimer);
  searchOutput.innerHTML = ' ';

  if (searchInput.value.length > 3) {
    loader.style.display = 'initial';
    inputTimer = setTimeout(searchBook, doneTypingInterval);
  }
});

function showBookSearch() {
  bookSearch.style.display = 'flex';
  searchInput.focus();
  arrow.style.display = 'none';
}

function searchBook() {
  return _searchBook.apply(this, arguments);
}

function _searchBook() {
  _searchBook = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var searchQuery, response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            searchQuery = searchInput.value;
            _context.next = 4;
            return fetch(baseUrl + searchQuery + maxResults);

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();

          case 7:
            data = _context.sent;
            loader.style.display = 'none';
            searchOutput.innerHTML = ' ';
            showSearchResult(data.items);
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.log('Rejected', _context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));
  return _searchBook.apply(this, arguments);
}

function renderItem(item) {
  if (item.volumeInfo.imageLinks.thumbnail === 'N/A') {
    item.volumeInfo.imageLinks.thumbnail = '/img/no-poster-available.png';
  }

  var result = '';
  result += "<div class=\"book-search__item\" title=\"Click to see more\">\n              <a href=\"".concat(item.volumeInfo.infoLink, "\" target=\"blank\">\n              <img src=\"").concat(item.volumeInfo.imageLinks.thumbnail, "\" alt=\"").concat(item.volumeInfo.title, "\">\n              <div class=\"book-search__item-cover\">\n              <p>").concat(item.volumeInfo.title, "</p>\n              </div>\n              </a>\n              </div>");
  return result;
}

function showSearchResult(array) {
  var result = '';
  array.forEach(function (e) {
    result += renderItem(e);
    searchOutput.innerHTML = result;
  });
}

/***/ }),

/***/ "./js/modal-popup.js":
/*!***************************!*\
  !*** ./js/modal-popup.js ***!
  \***************************/
/***/ (() => {

var modalPopup = document.querySelector('#modal-popup');
var popupBtn = document.querySelector('#popup-btn');
var modalPopupCloseBtn = document.querySelector('#cancel-btn');
var cancelBtn = document.querySelector('#modal-close-btn');
var uninstallBtn = document.querySelector('#uninstall-btn');
var arrow = document.querySelector('#arrow');
popupBtn.addEventListener('click', showModalPopup);
modalPopupCloseBtn.addEventListener('click', hideModalPopup);
modalPopup.addEventListener('click', function (event) {
  if (event.target.matches('.popup-modal') || !event.target.closest('.modal-popup__container')) {
    hideModalPopup();
  }
}, false);
cancelBtn.addEventListener('click', hideModalPopup);
uninstallBtn.addEventListener('click', function () {
  alert('DONE');
  hideModalPopup();
});

function showModalPopup() {
  modalPopup.style.display = 'flex';
  arrow.style.display = 'none';
}

function hideModalPopup() {
  modalPopup.style.display = 'none';
}

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _js_modal_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modal-popup.js */ "./js/modal-popup.js");
/* harmony import */ var _js_modal_popup_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_modal_popup_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_book_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/book-search.js */ "./js/book-search.js");
/* harmony import */ var _js_book_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_book_search_js__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], () => (__webpack_require__("../node_modules/@babel/polyfill/lib/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], () => (__webpack_require__("./main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map