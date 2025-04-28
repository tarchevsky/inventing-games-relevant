/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/circle/circle.js":
/*!************************************************!*\
  !*** ./src/blocks/components/circle/circle.js ***!
  \************************************************/
/***/ (function() {

var text = document.querySelector(".circle-text p");
text.innerHTML = text.innerText.split("").map(function (letter, i) {
  return "<span style=\"transform:rotate(".concat(i * 18, "deg\">").concat(letter, "</span>");
}).join("");

/***/ }),

/***/ "./src/blocks/components/img/img.js":
/*!******************************************!*\
  !*** ./src/blocks/components/img/img.js ***!
  \******************************************/
/***/ (function() {

var imageObserver = new IntersectionObserver(function (entries, options) {
  entries.forEach(function (entry) {
    if (entry.target.dataset.src !== undefined) {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        entry.target.alt = entry.target.dataset.alt;
        imageObserver.unobserve(entry.target);
      }
    }
  });
}, {
  rootMargin: "500px"
});
var images = document.querySelectorAll("img").forEach(function (image) {
  return imageObserver.observe(image);
});

/***/ }),

/***/ "./src/blocks/components/modal/modal.js":
/*!**********************************************!*\
  !*** ./src/blocks/components/modal/modal.js ***!
  \**********************************************/
/***/ (function() {

var modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

function tapOnButton() {
  modalTrigger.forEach(function (btn) {
    btn.addEventListener("click", function () {
      modal.classList.add("modal__show");
      modal.classList.remove("modal__hide");
      document.body.style.overflow = "hidden";
    });
  });
}

tapOnButton();

function closeModal() {
  modal.classList.add("modal__hide");
  modal.classList.remove("modal__show");
  document.body.style.overflow = "";
}

modalCloseBtn.addEventListener("click", closeModal);
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
document.addEventListener("keydown", function (event) {
  if (event.code === "Escape" && modal.classList.contains("modal__show")) {
    closeModal();
  }
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/seminar-video/seminar-video.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/seminar-video/seminar-video.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! plyr */ "./node_modules/plyr/dist/plyr.min.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_0__);

var player = new (plyr__WEBPACK_IMPORTED_MODULE_0___default())('#player');
var players = Array.from(document.querySelectorAll('#player')).map(function (p) {
  return new (plyr__WEBPACK_IMPORTED_MODULE_0___default())(p);
});

/***/ }),

/***/ "./src/blocks/modules/seminars/seminars.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/seminars/seminars.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var seminarsMob = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".seminars-bream-mob.swiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_0__.Mousewheel],
  scrollbar: {
    el: ".seminars-bream-mob-scrollbar.swiper-scrollbar",
    // hide: true,
    draggable: true
  },
  mousewheel: {
    invert: false
  },
  breakpoints: {
    250: {
      slidesPerView: 1
    },
    425: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/video-slider/video-slider.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/video-slider/video-slider.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! plyr */ "./node_modules/plyr/dist/plyr.min.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



document.addEventListener('DOMContentLoaded', function () {
  var videoPlayers = []; // Объявляем переменную сразу

  var videoSlider; // Функция для проверки на мобильные устройства

  function isMobile() {
    return window.innerWidth <= 768;
  } // Функция для инициализации всех плееров Plyr


  function initAllPlayers() {
    try {
      // Сначала инициализируем все видео-плееры, чтобы избежать проблем с первыми слайдами
      var playerElements = document.querySelectorAll('.video-player');

      if (playerElements.length === 0) {
        console.error('Видео-плееры не найдены');
        return false;
      } // Очищаем предыдущие экземпляры плееров, если они есть


      if (videoPlayers.length > 0) {
        videoPlayers.forEach(function (player) {
          if (player && typeof player.destroy === 'function') {
            player.destroy();
          }
        });
        videoPlayers = [];
      } // Создаем новые экземпляры плееров для всех видео


      videoPlayers = Array.from(playerElements).map(function (player) {
        return new (plyr__WEBPACK_IMPORTED_MODULE_0___default())(player, {
          controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
          ratio: isMobile() ? 'auto' : '16:9',
          responsive: true,
          seekTime: 10,
          disableContextMenu: false,
          autoplay: false // Отключаем автоплей, чтобы избежать проблем

        });
      });
      return videoPlayers.length > 0;
    } catch (error) {
      console.error('Ошибка инициализации Plyr:', error);
      return false;
    }
  } // Функция для обновления размеров Plyr


  function updatePlyrInstancesSize() {
    // Проверяем существует ли массив videoPlayers и не пустой ли он
    if (!videoPlayers || videoPlayers.length === 0) return;
    videoPlayers.forEach(function (player) {
      if (player && player.elements && player.elements.container) {
        // Обновить размер контейнера Plyr
        if (isMobile()) {
          player.ratio = 'auto'; // Автоматические пропорции для мобильных
          // Принудительно выставляем стили для мобильных

          if (player.elements.wrapper) {
            player.elements.wrapper.style.maxWidth = '100%';
            player.elements.wrapper.style.height = 'auto';
          }

          if (player.elements.container) {
            player.elements.container.style.maxWidth = '100%';
            player.elements.container.style.width = '100%';
            player.elements.container.style.height = 'auto';
          }
        } else {
          player.ratio = '16:9'; // Стандартное соотношение для десктопа
        }
      }
    }); // Триггерим ресайз для корректного обновления интерфейса

    window.dispatchEvent(new Event('resize'));
  } // Функция для применения настроек к активным слайдам


  function setupActiveSlides() {
    // Находим активные и видимые слайды
    var activeSlides = document.querySelectorAll('.swiper-slide-active .video-player, .swiper-slide-visible .video-player'); // Специальная обработка для первых двух слайдов

    var firstSlides = document.querySelectorAll('.swiper-slide:nth-child(1) .video-player, .swiper-slide:nth-child(2) .video-player'); // Обрабатываем как активные, так и первые слайды

    var slidesToProcess = _toConsumableArray(new Set([].concat(_toConsumableArray(activeSlides), _toConsumableArray(firstSlides))));

    slidesToProcess.forEach(function (videoElement, index) {
      // Получаем индекс плеера в массиве videoPlayers
      var playerIndex = Array.from(document.querySelectorAll('.video-player')).indexOf(videoElement);

      if (playerIndex >= 0 && playerIndex < videoPlayers.length) {
        var player = videoPlayers[playerIndex];

        if (player && player.elements) {
          // Применяем настройки к плееру
          if (player.elements.container) {
            player.elements.container.style.maxWidth = '100%';
            player.elements.container.style.width = '100%';
          } // Устанавливаем соотношение сторон


          player.ratio = isMobile() ? 'auto' : '16:9'; // Обновляем размеры для первых двух слайдов специальным образом

          if (index < 2) {
            // Форсируем обновление первых двух слайдов
            setTimeout(function () {
              if (player.elements && player.elements.container) {
                player.elements.container.style.maxWidth = '100%';
                player.elements.container.style.width = '100%';
                player.elements.container.style.opacity = '1';
              }
            }, 100);
          }
        }
      }
    });
  } // Инициализируем все плееры перед инициализацией слайдера


  var plyrInitialized = initAllPlayers(); // Добавляем небольшую задержку перед инициализацией слайдера

  setTimeout(function () {
    // Инициализация слайдера с видео
    videoSlider = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('#video-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      speed: 500,
      modules: [swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_1__.Mousewheel],
      pagination: {
        el: '.video-slider-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.video-slider-button-next',
        prevEl: '.video-slider-button-prev'
      },
      mousewheel: {
        invert: false
      },
      breakpoints: {
        576: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      },
      on: {
        // Приостановить все видео при переключении слайдов
        slideChange: function slideChange() {
          document.querySelectorAll('.video-player').forEach(function (video) {
            if (video.plyr) {
              video.plyr.pause();
            }
          });
        },
        // После инициализации слайдера
        init: function init() {
          console.log('Слайдер инициализирован'); // Форсируем обновление размеров всех плееров

          updatePlyrInstancesSize(); // Настраиваем активные слайды

          setupActiveSlides(); // Если изначальная инициализация не удалась, пробуем еще раз

          if (!plyrInitialized) {
            console.log('Повторная инициализация плееров');
            initAllPlayers();
            setTimeout(setupActiveSlides, 100);
          }
        },
        // При изменении размера
        resize: function resize() {
          updatePlyrInstancesSize();
          setupActiveSlides();
        }
      }
    }); // Дополнительно настраиваем плееры после небольшой задержки

    setTimeout(function () {
      setupActiveSlides();
      updatePlyrInstancesSize();
    }, 300);
  }, 100); // Обработчик события изменения размера окна

  window.addEventListener('resize', function () {
    setTimeout(function () {
      updatePlyrInstancesSize();
      setupActiveSlides();
    }, 300);
  });
});
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_img_img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/img/img */ "./src/blocks/components/img/img.js");
/* harmony import */ var _components_img_img__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_img_img__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_circle_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %components%/circle/circle */ "./src/blocks/components/circle/circle.js");
/* harmony import */ var _components_circle_circle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_circle_circle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %components%/modal/modal */ "./src/blocks/components/modal/modal.js");
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_modal_modal__WEBPACK_IMPORTED_MODULE_2__);
//! Basic
 // import "%components%/burger/burger";
//! Other


 // import "%components%/slider/slider";
// import "%components%/tabs/tabs";
// import "%components%/dropdown/dropdown";
// import "%components%/gallery/gallery";
// import "%components%/flex-gallery/flex-gallery";
// import "%components%/vertical-slider/vertical-slider";
// import "%components%/accordion/accordion";
// import "%components%/show-more/show-more";
// import "%components%/tabs-tags/tabs-tags";
// import "%components%/dropdown-lang/dropdown-lang";
// import "%components%/quiz/quiz";
// import "%components%/drag-n-drop/drag-n-drop";
// import "%components%/infinite-scroll/infinite-scroll";
// import "%components%/like/like";

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_seminar_video_seminar_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/seminar-video/seminar-video */ "./src/blocks/modules/seminar-video/seminar-video.js");
/* harmony import */ var _modules_seminars_seminars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/seminars/seminars */ "./src/blocks/modules/seminars/seminars.js");
/* harmony import */ var _modules_video_slider_video_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/video-slider/video-slider */ "./src/blocks/modules/video-slider/video-slider.js");





/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");



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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
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
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
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
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_pug_starter"] = self["webpackChunkgulp_pug_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map