"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Content = void 0;

var _react = _interopRequireDefault(require("react"));

var _ContentHeader = _interopRequireDefault(require("./ContentHeader"));

var _ContentFigure = _interopRequireDefault(require("./ContentFigure"));

var _ContentBody = _interopRequireDefault(require("./ContentBody"));

var Content = function Content(props) {
  return _react.default.createElement("article", {
    className: "content"
  }, _react.default.createElement("div", {
    className: "col col-page"
  }, _react.default.createElement(_ContentHeader.default, {
    title: props.title,
    authors: props.authors,
    headingLevel: props.headingLevel,
    publishDate: props.publishDate,
    subtitle: props.subtitle,
    tag: props.tag
  })), props.image && _react.default.createElement(_ContentFigure.default, {
    imageCaption: props.imageCaption,
    imageCredit: props.imageCredit,
    imageCreditHref: props.imageCreditHref,
    image: props.image
  }), props.bodyHtml && _react.default.createElement("div", {
    className: "col col-content"
  }, _react.default.createElement(_ContentBody.default, {
    bodyHtml: props.bodyHtml
  })));
};

exports.Content = Content;
var _default = Content;
exports.default = _default;