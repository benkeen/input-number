webpackJsonp([5],{

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(124);


/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_input_number_assets_index_less__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_input_number_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rc_input_number_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rc_input_number__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint no-console:0 */





function getSum(str) {
  var total = 0;
  str.split('').forEach(function (c) {
    var num = Number(c);

    if (!isNaN(num)) {
      total += num;
    }
  });

  return total;
}

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      value: 1000
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  App.prototype.render = function render() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      'div',
      { style: { margin: 10 } },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rc_input_number__["a" /* default */], {
        defaultValue: 1000,
        formatter: function formatter(value) {
          return ('$ ' + value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
      }),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rc_input_number__["a" /* default */], {
        defaultValue: 100,
        formatter: function formatter(value) {
          return value + '%';
        },
        parser: function parser(value) {
          return value.replace('%', '');
        }
      }),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rc_input_number__["a" /* default */], {
        style: { width: 100 },
        formatter: function formatter(value) {
          return ('' + value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
      }),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'h1',
          null,
          'In Control'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rc_input_number__["a" /* default */], {
          value: this.state.value,
          onChange: function onChange(value) {
            _this2.setState({ value: value });
          },
          formatter: function formatter(value) {
            return ('$ ' + value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'h1',
          null,
          'Strange Format'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rc_input_number__["a" /* default */], {
          defaultValue: 1000,
          formatter: function formatter(value) {
            return '$ ' + value + ' - ' + getSum(value);
          },
          parser: function parser(value) {
            return (value.match(/^\$ ([\d\.]*) .*$/) || [])[1];
          }
        })
      )
    );
  };

  return App;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(App, null), document.getElementById('__react-content'));

/***/ })

},[123]);
//# sourceMappingURL=formatter.js.map