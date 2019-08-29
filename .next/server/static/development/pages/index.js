module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kawsingh/Projects/myprojects/get-git-user/components/header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Header = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./components/header.js");
var _jsxFileName = "/Users/kawsingh/Projects/myprojects/get-git-user/components/layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/lookup.js":
/*!******************************!*\
  !*** ./components/lookup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lookup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kawsingh/Projects/myprojects/get-git-user/components/lookup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Lookup(props) {
  const inputEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  function changeInputState() {
    props.setSearchText(inputEl.current.value);
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("input", {
    ref: inputEl,
    type: "text",
    className: "inputText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    onClick: changeInputState,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "submit"));
}
;

/***/ }),

/***/ "./components/user.js":
/*!****************************!*\
  !*** ./components/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kawsingh/Projects/myprojects/get-git-user/components/user.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const User = props => __jsx("div", {
  className: "jsx-505632864" + " " + "git-userInfo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("img", {
  src: props.userData.avatar_url,
  className: "jsx-505632864" + " " + "git-userAvatar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}), __jsx("h1", {
  className: "jsx-505632864" + " " + "git-userName",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, props.userData.name), __jsx("span", {
  className: "jsx-505632864" + " " + "git-userCompany",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, props.userData.company), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "505632864",
  __self: undefined
}, ".git-userAvatar.jsx-505632864{display:block;width:200px;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXdzaW5naC9Qcm9qZWN0cy9teXByb2plY3RzL2dldC1naXQtdXNlci9jb21wb25lbnRzL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2dCLEFBR3VCLGNBQ0YsWUFDQSxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9rYXdzaW5naC9Qcm9qZWN0cy9teXByb2plY3RzL2dldC1naXQtdXNlci9jb21wb25lbnRzL3VzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBVc2VyID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZ2l0LXVzZXJJbmZvXCI+XG4gICAgPGltZyBzcmM9e3Byb3BzLnVzZXJEYXRhLmF2YXRhcl91cmx9IGNsYXNzTmFtZT1cImdpdC11c2VyQXZhdGFyXCIvPlxuICAgIDxoMSAgY2xhc3NOYW1lPVwiZ2l0LXVzZXJOYW1lXCI+e3Byb3BzLnVzZXJEYXRhLm5hbWV9PC9oMT5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJnaXQtdXNlckNvbXBhbnlcIj57cHJvcHMudXNlckRhdGEuY29tcGFueX08L3NwYW4+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmdpdC11c2VyQXZhdGFyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfTtcbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjsiXX0= */\n/*@ sourceURL=/Users/kawsingh/Projects/myprojects/get-git-user/components/user.js */"));

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/user */ "./components/user.js");
/* harmony import */ var _components_lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/lookup */ "./components/lookup.js");
var _jsxFileName = "/Users/kawsingh/Projects/myprojects/get-git-user/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Index() {
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: userData,
    1: setUserData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      (async () => {
        const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://api.github.com/users/${searchText}`);
        const user = await response.json();
        setUserData(user);
      })();
    }
  }, [searchText]);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_components_lookup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setSearchText: setSearchText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), userData && __jsx(_components_user__WEBPACK_IMPORTED_MODULE_3__["default"], {
    userData: userData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kawsingh/Projects/myprojects/get-git-user/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map