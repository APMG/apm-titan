"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Figure = _interopRequireDefault(require("../../atoms/Figure/Figure"));

var ContentFigure = function ContentFigure(props) {
  return _react.default.createElement(_react.default.Fragment, null, props.image && _react.default.createElement(_Figure.default, {
    caption: props.imageCaption,
    credit: props.imageCredit,
    creditHref: props.imageCreditHref,
    image: props.image
  }));
};

var _default = ContentFigure;
exports.default = _default;