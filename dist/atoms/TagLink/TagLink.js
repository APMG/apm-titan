"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _router = require("@reach/router");

var TagLink = function TagLink(props) {
  return _react.default.createElement(_router.Link, {
    className: "tag ".concat(props.elementClass ? props.elementClass : ''),
    to: "".concat(props.href)
  }, props.title);
};

var _default = TagLink;
exports.default = _default;