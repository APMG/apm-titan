"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var Loading = function Loading() {
  return _react.default.createElement("div", {
    className: "spinner"
  }, _react.default.createElement("span", {
    className: "invisible"
  }, "Loading"));
};

var _default = Loading;
exports.default = _default;