webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(27);

	$(function() {
	    var winWidth = $(window).width();
	    setTimeout(function() {
	        $('.loading').hide();
	        var leftEnd = winWidth - 160 + 'px';
	        $('.my-item-title-animate').animate({
	            left: leftEnd,
	            opacity: 1
	        }, 2000, 'ease-in-out', function() {
	            $('.my-item-title-animate').css('left', leftEnd);
	            $('.my-item-title-animate').css('opacity', 1);
	        });
	    }, 3000);
	    $('.my-item-title').on('click', function() {
	        var that = this;
	        $(this).addClass('module-tap-active');
	        setTimeout(function() {
	            location.href = 'http://ywang1724.github.io/gmxx/html/scenery.html';
	        }, 1500);
	    });
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "../dist/1.jpg";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "../dist/2.jpg";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "../dist/7.jpg";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "../dist/8.jpg";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "../dist/9.jpg";

/***/ },
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./team.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./team.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  user-select: none;\n  -webkit-user-select: none;\n}\nhtml,\nbody {\n  color: #fff;\n  background-color: #34a853;\n}\n.my-header {\n  width: 100%;\n  height: 200px;\n  background-image: url(" + __webpack_require__(17) + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.my-menu {\n  padding: 0 10px;\n}\n.my-menu .space {\n  height: 10px;\n}\n.my-menu .my-item {\n  width: 100%;\n  height: 125px;\n}\n.my-menu .my-item .my-item-img {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.my-menu .my-item .my-item-title {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-box-pack: center;\n  -webkit-box-align: center;\n  width: 150px;\n  height: 75%;\n  position: relative;\n  top: -125px;\n  z-index: 10;\n  font-size: 20px;\n}\n.my-menu .my-item-1 .my-item-img {\n  background-image: url(" + __webpack_require__(18) + ");\n}\n.my-menu .my-item-1 .my-item-title-animate {\n  opacity: 0;\n  left: -10px;\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n  background-color: #ea4335;\n}\n.my-menu .my-item-2 .my-item-img {\n  background-image: url(" + __webpack_require__(19) + ");\n}\n.my-menu .my-item-2 .my-item-title {\n  left: -10px;\n  border-top-right-radius: 50%;\n  border-bottom-right-radius: 50%;\n  background-color: #fbbc05;\n}\n.my-menu .my-item-3 .my-item-img {\n  background-image: url(" + __webpack_require__(20) + ");\n}\n.my-menu .my-item-3 .my-item-title-animate {\n  opacity: 0;\n  left: -10px;\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n  background-color: #FF4DA9;\n}\n.my-menu .my-item-4 .my-item-img {\n  background-image: url(" + __webpack_require__(21) + ");\n}\n.my-menu .my-item-4 .my-item-title {\n  left: -10px;\n  border-top-right-radius: 50%;\n  border-bottom-right-radius: 50%;\n  background-color: #3ABCFF;\n}\n.module-tap-active {\n  -webkit-animation: scaleout 1.5s infinite ease-in-out;\n  animation: scaleout 1.5s infinite ease-in-out;\n}\n@-webkit-keyframes scaleout {\n  0% {\n    -webkit-transform: scale(0.5);\n  }\n  100% {\n    -webkit-transform: scale(2);\n    opacity: 0;\n  }\n}\n@keyframes scaleout {\n  0% {\n    transform: scale(0.5);\n    -webkit-transform: scale(0.5);\n  }\n  100% {\n    transform: scale(2);\n    -webkit-transform: scale(2);\n    opacity: 0;\n  }\n}\n", ""]);

	// exports


/***/ }
]);