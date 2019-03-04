"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Heading = _interopRequireDefault(require("../../atoms/Heading/Heading"));

var _TagLink = _interopRequireDefault(require("../../atoms/TagLink/TagLink"));

var EventHeader = function EventHeader(props) {
  return _react.default.createElement("header", {
    className: "event_header"
  }, props.tag && _react.default.createElement(_TagLink.default, {
    href: props.tag.href,
    title: props.tag.title,
    elementClass: "event_topic"
  }), _react.default.createElement(_Heading.default, {
    level: props.headingLevel ? props.headingLevel : 1,
    className: "hdg hdg-1"
  }, props.title), props.subtitle && _react.default.createElement("p", {
    className: "event_subtitle",
    "data-testid": "eventSubtitle"
  }, props.subtitle), _react.default.createElement("div", {
    className: "event_meta"
  }, props.publishDate && _react.default.createElement("time", {
    dateTime: props.publishDate
  }, props.publishDate)));
};

var _default = EventHeader;
exports.default = _default;