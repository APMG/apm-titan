"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _EventHeader = _interopRequireDefault(require("./EventHeader"));

var _EventBody = _interopRequireDefault(require("./EventBody"));

var _EventInfo = _interopRequireDefault(require("./EventInfo"));

var Event = function Event(props) {
  return _react.default.createElement("div", {
    className: "event"
  }, _react.default.createElement("div", {
    className: "col col-page"
  }, props.title && _react.default.createElement(_EventHeader.default, {
    title: props.title,
    headingLevel: props.headingLevel,
    publishDate: props.publishDate,
    tag: props.tag,
    href: props.href,
    subtitle: props.subtitle
  }), _react.default.createElement("br", null), props.bodyHtml && _react.default.createElement(_EventBody.default, {
    title: props.title,
    bodyHtml: props.bodyHtml
  }), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_EventInfo.default, {
    title: props.title,
    venue: props.venue,
    artist: props.artist,
    price: props.price,
    ticketLink: props.website,
    eventDates: props.eventDates
  })));
};

var _default = Event;
exports.default = _default;