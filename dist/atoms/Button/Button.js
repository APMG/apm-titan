"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _router = require("@reach/router");

var Button = function Button(props) {
  var _classNames;

  var classes = (0, _classnames.default)((_classNames = {
    btn: true
  }, (0, _defineProperty2.default)(_classNames, "btn-".concat(props.type), props.type), (0, _defineProperty2.default)(_classNames, "btn-".concat(props.size), props.size), (0, _defineProperty2.default)(_classNames, props.elementClass, props.elementClass), _classNames));

  if (props.href) {
    if (props.disabled) {
      return _react.default.createElement("span", {
        className: classes,
        disabled: props.disabled
      }, props.children);
    } else {
      return _react.default.createElement(_router.Link, {
        className: classes,
        disabled: props.disabled,
        to: props.href
      }, props.children);
    }
  } else {
    return _react.default.createElement("button", {
      className: classes,
      disabled: props.disabled
    }, props.children);
  }
};

var _default = Button;
exports.default = _default;