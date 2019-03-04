"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _router = require("@reach/router");

var _Heading = _interopRequireDefault(require("../../atoms/Heading/Heading"));

var _TagLink = _interopRequireDefault(require("../../atoms/TagLink/TagLink"));

var ContentHeader = function ContentHeader(props) {
  return _react.default.createElement("header", {
    className: "content_header"
  }, props.tag && _react.default.createElement(_TagLink.default, {
    href: props.tag.href,
    title: props.tag.title,
    elementClass: "content_topic"
  }), _react.default.createElement(_Heading.default, {
    level: props.headingLevel ? props.headingLevel : 1,
    className: "hdg hdg-1"
  }, props.title), props.subtitle && _react.default.createElement("p", {
    className: "content_subtitle",
    "data-testid": "contentSubtitle"
  }, props.subtitle), _react.default.createElement("div", {
    className: "content_meta"
  }, props.authors && _react.default.createElement("div", {
    className: "content_byline",
    "data-testid": "contentByline"
  }, "By", ' ', props.authors.map(function (author) {
    return _react.default.createElement(_router.Link, {
      to: author.href,
      key: author.href
    }, "".concat(author.name, " "));
  })), props.publishDate && _react.default.createElement("time", {
    dateTime: props.publishDate
  }, props.publishDate)));
};

var _default = ContentHeader;
exports.default = _default;