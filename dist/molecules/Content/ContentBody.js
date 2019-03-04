"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Body = _interopRequireDefault(require("../Body/Body"));

var ContentBody = function ContentBody(props) {
  return _react.default.createElement(_Body.default, {
    elementClass: "content_body",
    bodyHtml: props.bodyHtml
  });
};

var _default = ContentBody;
exports.default = _default;