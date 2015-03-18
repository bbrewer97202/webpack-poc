webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var homeFeature1 = __webpack_require__(1);
	var homeFeature2 = __webpack_require__(2);
	var someSharedComponent = __webpack_require__(3);

	homeFeature1.init();
	homeFeature2.init();
	someSharedComponent.init();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var logging = __webpack_require__(5);

	var homeFeature1 = (function() {

		function init() {
			logging.log("homeFeature1 init");
		}

		return {
			init: init
		}
	})();

	module.exports = homeFeature1;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var logging = __webpack_require__(5);

	var homeFeature2 = (function() {

		function init() {
			logging.log("homeFeature2 init");
		}

		return {
			init: init
		}
	})();

	module.exports = homeFeature2;

/***/ }
]);