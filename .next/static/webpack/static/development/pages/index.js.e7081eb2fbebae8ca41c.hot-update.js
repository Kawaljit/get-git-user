webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/user */ "./components/user.js");
/* harmony import */ var _components_lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/lookup */ "./components/lookup.js");
var _jsxFileName = "/Users/kawsingh/Projects/myprojects/get-git-user/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      searchText = _useState[0],
      setSearchText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      userData = _useState2[0],
      setUserData = _useState2[1];

  var isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isInitialMount.current) {
      console.log('bingo');
      isInitialMount.current = false;
    } else {
      console.log('two');
      var user = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("https://api.github.com/users/".concat(searchText)).then(function (response) {
        return response.json();
      });
      setUserData(user);
    }
  }, []);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_components_lookup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setSearchText: setSearchText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), userData && __jsx(_components_user__WEBPACK_IMPORTED_MODULE_4__["default"], {
    userData: userData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3991207765",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXdzaW5naC9Qcm9qZWN0cy9teXByb2plY3RzL2dldC1naXQtdXNlci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2tCIiwiZmlsZSI6Ii9Vc2Vycy9rYXdzaW5naC9Qcm9qZWN0cy9teXByb2plY3RzL2dldC1naXQtdXNlci9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBVc2VyIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlcic7XG5pbXBvcnQgTG9va3VwIGZyb20gJy4uL2NvbXBvbmVudHMvbG9va3VwJztcblxuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW1xuICAgIHNlYXJjaFRleHQsXG4gICAgc2V0U2VhcmNoVGV4dFxuICBdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IFtcbiAgICB1c2VyRGF0YSxcbiAgICBzZXRVc2VyRGF0YVxuICBdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaXNJbml0aWFsTW91bnQgPSB1c2VSZWYodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNJbml0aWFsTW91bnQuY3VycmVudCkge1xuICAgICAgY29uc29sZS5sb2coJ2JpbmdvJyk7XG4gICAgICBpc0luaXRpYWxNb3VudC5jdXJyZW50ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0d28nKTtcbiAgICAgIGNvbnN0IHVzZXIgPSBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3NlYXJjaFRleHR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICAgIHNldFVzZXJEYXRhKHVzZXIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCA+XG4gICAgICA8TG9va3VwIHNldFNlYXJjaFRleHQ9e3NldFNlYXJjaFRleHR9IC8+XG4gICAgICB7dXNlckRhdGEgJiYgPFVzZXIgdXNlckRhdGE9e3VzZXJEYXRhfSAvPn1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=/Users/kawsingh/Projects/myprojects/get-git-user/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.e7081eb2fbebae8ca41c.hot-update.js.map