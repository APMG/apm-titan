"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _router = require("@reach/router");

var Nav = function Nav(props) {
  return _react.default.createElement("nav", {
    className: "nav"
  }, _react.default.createElement("ul", {
    className: "nav_list"
  }, props.items.map(function (item, index) {
    return _react.default.createElement("li", {
      key: index,
      className: "nav_item"
    }, _react.default.createElement(_router.Link, {
      to: item.to,
      className: "nav_link",
      onClick: props.closeMenu
    }, item.text));
  })));
};

var _default = Nav;
exports.default = _default;