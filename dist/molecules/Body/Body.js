"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

// TODO: Implement the JS equivalent to Amat for transforming CMS body into HTML
// Amat's (ruby) repo: https://gitlab.mpr.org/cms-prototype/amat
var Body = function Body(props) {
  var markup = function markup() {
    return {
      __html: props.bodyHtml
    };
  };

  return _react.default.createElement("div", {
    className: "userContent ".concat(props.elementClass),
    dangerouslySetInnerHTML: markup()
  });
};

var _default = Body;
exports.default = _default;