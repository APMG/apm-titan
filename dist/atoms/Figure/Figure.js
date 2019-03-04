"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var Figure = function Figure(props) {
  return _react.default.createElement("figure", {
    className: "figure figure-".concat(props.layout ? props.layout : 'full')
  }, _react.default.createElement("img", {
    src: props.image.src,
    alt: props.image.alt
  }), props.caption || props.credit ? _react.default.createElement("figcaption", {
    className: "figure_caption"
  }, props.caption && _react.default.createElement("div", {
    className: "figure_text"
  }, props.caption), props.credit && props.creditHref ? _react.default.createElement("a", {
    href: props.creditHref,
    className: "figure_credit"
  }, props.credit) : _react.default.createElement("div", {
    className: "figure_credit"
  }, props.credit)) : '');
};

var _default = Figure;
exports.default = _default;