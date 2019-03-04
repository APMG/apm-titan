"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var Inner = function Inner(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("figure", {
    className: "item_figure"
  }, _react.default.createElement("picture", null, _react.default.createElement("source", {
    sizes: "(max-width: 840px) 100vw, 66vw",
    srcSet: props.image.srcset
  }), _react.default.createElement("img", {
    alt: props.image.alt,
    src: props.image.src
  }))), _react.default.createElement("div", {
    className: "item_content_meta"
  }, props.publishDate && _react.default.createElement("time", {
    dateTime: props.publishDate
  }, props.publishDate)), props.button && _react.default.createElement("div", {
    className: "item_content_button"
  }, props.button));
};

var _default = Inner;
exports.default = _default;