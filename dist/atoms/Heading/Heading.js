"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var Heading = function Heading(props) {
  var Hdg = "h".concat(props.level);
  return _react.default.createElement(Hdg, {
    className: props.className
  }, props.children);
};

var _default = Heading;
exports.default = _default;