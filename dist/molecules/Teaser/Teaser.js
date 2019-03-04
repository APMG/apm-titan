"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _router = require("@reach/router");

var _index = require("../../utils/index");

var Teaser = function Teaser(props) {
  var CustomHeader = "h".concat(props.headingLevel);
  return _react.default.createElement("article", {
    className: "teaser"
  }, props.tag && _react.default.createElement(_router.Link, {
    className: "tag",
    to: "/".concat(props.tag.href)
  }, props.tag.title), _react.default.createElement(_router.Link, {
    to: "".concat((0, _index.linkFromType)(props))
  }, props.image && _react.default.createElement("figure", {
    className: "item_figure"
  }, _react.default.createElement("picture", null, _react.default.createElement("source", {
    sizes: "(max-width: 840px) 100vw, 66vw",
    srcSet: props.image.srcset
  }), _react.default.createElement("img", {
    alt: props.image.alt,
    src: props.image.src
  }))), _react.default.createElement("div", {
    className: "item_content"
  }, _react.default.createElement("div", {
    className: "item_content_header"
  }, _react.default.createElement(CustomHeader, {
    className: "hdg hdg-".concat(props.headingLevel)
  }, props.title)), _react.default.createElement("div", {
    className: "item_content_meta"
  }, props.publishDate && _react.default.createElement("time", {
    dateTime: props.publishDate
  }, props.publishDate), props.contributors && _react.default.createElement("div", {
    className: "item_content_contributors"
  }, "By ", (0, _index.to_sentence)(props.contributors))), props.description && _react.default.createElement("div", {
    className: "item_content_body userContent"
  }, props.description))));
};

Teaser.displayName = 'Teaser';
Teaser.defaultProps = {
  context: 'default',
  type: 'button',
  isGroup: false,
  group: false,
  isBlock: false,
  onClick: null,
  style: {}
};
var _default = Teaser;
exports.default = _default;