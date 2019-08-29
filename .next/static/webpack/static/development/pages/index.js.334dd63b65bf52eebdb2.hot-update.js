webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
false,

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/user */ "./components/user.js");
/* harmony import */ var _components_lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/lookup */ "./components/lookup.js");


var _jsxFileName = "/Users/kawsingh/Projects/myprojects/get-git-user/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      searchText = _useState[0],
      setSearchText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      userData = _useState2[0],
      setUserData = _useState2[1];

  var isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://api.github.com/users/".concat(searchText));

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                user = _context.sent;
                setUserData(user);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }, [searchText]);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_components_lookup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setSearchText: setSearchText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), userData && __jsx(_components_user__WEBPACK_IMPORTED_MODULE_5__["default"], {
    userData: userData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.334dd63b65bf52eebdb2.hot-update.js.map