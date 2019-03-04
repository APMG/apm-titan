"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Body = _interopRequireDefault(require("../Body/Body"));

var EventBody = function EventBody(props) {
  return _react.default.createElement(_Body.default, {
    elementClass: "event_body",
    bodyHtml: props.bodyHtml
  });
};

var _default = EventBody;
exports.default = _default;