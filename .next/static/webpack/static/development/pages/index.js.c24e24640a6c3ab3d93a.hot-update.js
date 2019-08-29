webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/user */ "./components/user.js");
/* harmony import */ var _components_lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/lookup */ "./components/lookup.js");


var _jsxFileName = "/Users/kawsingh/Projects/myprojects/get-git-user/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      searchText = _useState[0],
      setSearchText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      userData = _useState2[0],
      setUserData = _useState2[1];

  var isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response, user;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://api.github.com/users/".concat(searchText));

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                user = _context.sent;
                setUserData(user);
                console.log(user);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }, [searchText]);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_components_lookup__WEBPACK_IMPORTED_MODULE_7__["default"], {
    setSearchText: setSearchText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), console.log(userData), userData && __jsx(_components_user__WEBPACK_IMPORTED_MODULE_6__["default"], {
    userData: userData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3991207765",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXdzaW5naC9Qcm9qZWN0cy9teXByb2plY3RzL2dldC1naXQtdXNlci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2tCIiwiZmlsZSI6Ii9Vc2Vycy9rYXdzaW5naC9Qcm9qZWN0cy9teXByb2plY3RzL2dldC1naXQtdXNlci9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBVc2VyIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlcic7XG5pbXBvcnQgTG9va3VwIGZyb20gJy4uL2NvbXBvbmVudHMvbG9va3VwJztcblxuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW1xuICAgIHNlYXJjaFRleHQsXG4gICAgc2V0U2VhcmNoVGV4dFxuICBdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IFtcbiAgICB1c2VyRGF0YSxcbiAgICBzZXRVc2VyRGF0YVxuICBdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaXNJbml0aWFsTW91bnQgPSB1c2VSZWYodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNJbml0aWFsTW91bnQuY3VycmVudCkge1xuICAgICAgaXNJbml0aWFsTW91bnQuY3VycmVudCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAoYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtzZWFyY2hUZXh0fWApO1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRVc2VyRGF0YSh1c2VyKTtcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgfSwgW3NlYXJjaFRleHRdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgPlxuICAgICAgPExvb2t1cCBzZXRTZWFyY2hUZXh0PXtzZXRTZWFyY2hUZXh0fSAvPlxuICAgICAge2NvbnNvbGUubG9nKHVzZXJEYXRhKX1cbiAgICAgIHt1c2VyRGF0YSAmJiA8VXNlciB1c2VyRGF0YT17dXNlckRhdGF9IC8+fVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIFxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=/Users/kawsingh/Projects/myprojects/get-git-user/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.c24e24640a6c3ab3d93a.hot-update.js.map