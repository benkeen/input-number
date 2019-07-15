webpackJsonp([7],{

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(55);


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_input_number_assets_index_less__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_input_number_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rc_input_number_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rc_input_number__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint no-console:0 */





var Component = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    var _temp, _this, _ret;

    _classCallCheck(this, Component);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      disabled: false,
      readOnly: false,
      value: 50000
    }, _this.onChange = function (value) {
      console.log('onChange:', value);
      _this.setState({ value: value });
    }, _this.toggleDisabled = function () {
      _this.setState({
        disabled: !_this.state.disabled
      });
    }, _this.toggleReadOnly = function () {
      _this.setState({
        readOnly: !_this.state.readOnly
      });
    }, _this.numberWithCommas = function (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }, _this.format = function (num) {
      return '$ ' + _this.numberWithCommas(num) + ' boeing737';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Component.prototype.parser = function parser(num) {
    return num.toString().split(' ')[1].replace(/,*/g, '');
  };

  Component.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      'div',
      { style: { margin: 10 } },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rc_input_number__["a" /* default */], {
        min: -8000,
        max: 10000000,
        value: this.state.value,
        style: { width: 200 },
        readOnly: this.state.readOnly,
        onChange: this.onChange,
        disabled: this.state.disabled,
        autoFocus: false,
        step: 100,
        formatter: this.format,
        parser: this.parser
      }),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'button',
          { onClick: this.toggleDisabled },
          'toggle Disabled'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'button',
          { onClick: this.toggleReadOnly },
          'toggle readOnly'
        )
      )
    );
  };

  return Component;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, null), document.getElementById('__react-content'));

/***/ })

},[54]);
//# sourceMappingURL=combination-key-format.js.map