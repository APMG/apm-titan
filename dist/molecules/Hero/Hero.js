"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Inner = _interopRequireDefault(require("./Inner"));

var _router = require("@reach/router");

var Hero = function Hero(props) {
  return _react.default.createElement("article", {
    className: "Hero"
  }, _react.default.createElement("div", {
    className: "item_content_hero"
  }, _react.default.createElement("div", {
    className: "item_content_header"
  }, props.tag && _react.default.createElement(_router.Link, {
    className: "tag",
    to: "/".concat(props.tag.href)
  }, props.tag.title && _react.default.createElement("div", {
    className: "item_content_title"
  }, " ", props.tag.title)), props.contributorsText && _react.default.createElement("div", {
    className: "item_content_contributorsText"
  }, props.contributorsText), props.subHead && _react.default.createElement("div", {
    className: "item_content_subHead"
  }, _react.default.createElement("h3", null, props.subHead)))), props.href && _react.default.createElement(_router.Link, {
    to: "/".concat(props.href)
  }, _react.default.createElement(_Inner.default, {
    image: props.image,
    button: props.button,
    publishDate: props.publishDate
  })), !props.href && _react.default.createElement(_Inner.default, {
    image: props.image,
    button: props.button,
    publishDate: props.publishDate
  }));
};

var _default = Hero;
exports.default = _default;