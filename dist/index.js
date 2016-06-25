module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PromiseQueue = function () {
	  function PromiseQueue(promiseArray) {
	    _classCallCheck(this, PromiseQueue);

	    console.log('woooo');
	    this.promiseArray = promiseArray;
	  }

	  _createClass(PromiseQueue, [{
	    key: "run",
	    value: function run(startObj) {
	      var _this = this;

	      console.log(startObj);
	      return new Promise(function (resolve, reject) {
	        var that = _this;
	        var currentIndex = 0;

	        function next(passedVal) {
	          currentIndex++;
	          if (currentIndex >= that.promiseArray.length) {
	            resolve(passedVal);
	          } else {
	            that.promiseArray[currentIndex](passedVal).then(function (passedVal) {
	              next(passedVal);
	            });
	          }
	        }
	        that.promiseArray[currentIndex](startObj || {}).then(function (passedVal) {
	          next(passedVal);
	        });
	      });
	    }
	  }]);

	  return PromiseQueue;
	}();

	exports.default = PromiseQueue;

/***/ }
/******/ ]);