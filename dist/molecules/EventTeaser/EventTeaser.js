"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _router = require("@reach/router");

var _Heading = _interopRequireDefault(require("../../atoms/Heading/Heading"));

var _EventDates = _interopRequireDefault(require("../Event/EventDates"));

var _EventVenue = _interopRequireDefault(require("../Event/EventVenue"));

var EventTeaser = function EventTeaser(props) {
  return _react.default.createElement("div", {
    className: "eventTeaser"
  }, _react.default.createElement("div", {
    className: "eventTeaser_header"
  }, props.id && _react.default.createElement(_router.Link, {
    to: "/".concat(props.id),
    className: "event_topic link-plain"
  }, props.title && _react.default.createElement(_Heading.default, {
    level: props.headingLevel ? props.headingLevel : 1,
    className: "hdg hdg-4"
  }, props.title)), props.eventDates && _react.default.createElement(_EventDates.default, {
    eventDates: props.eventDates
  }), props.venue && _react.default.createElement(_EventVenue.default, {
    venue: props.venue
  })));
};

var _default = EventTeaser;
exports.default = _default;