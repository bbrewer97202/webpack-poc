webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var someSharedComponent = __webpack_require__(3);
	var uniqueFeature = __webpack_require__(4);

	someSharedComponent.init();
	uniqueFeature.init();

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var logging = __webpack_require__(5);
	var bootstrap = __webpack_require__(6);

	var uniqueFeature = (function() {

		function init() {
			logging.log("uniqueFeature init");

			//demo use of jquery and bootstrap
			$('#content').append('<div id="egModal" class="modal fade"><div class="modal-dialog"><div class="modal-content">Example Modal</div></div></div>');
			var instance = $('<button class="btn btn-primary">uniqueFeature</button>');
			instance.on('click', onButtonClick);
			$('#content').append(instance);
		}

		function onButtonClick(e) {
			e.preventDefault();
			$('#egModal').modal();
		}

		return {
			init: init
		}
	})();

	module.exports = uniqueFeature;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }
]);