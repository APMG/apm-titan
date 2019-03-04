"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _EventVenue = _interopRequireDefault(require("./EventVenue"));

var _EventArtist = _interopRequireDefault(require("./EventArtist"));

var _EventPrices = _interopRequireDefault(require("./EventPrices"));

var _EventDates = _interopRequireDefault(require("./EventDates"));

var EventInfo = function EventInfo(props) {
  return _react.default.createElement("div", {
    className: "eventInfo"
  }, props.venue && _react.default.createElement(_EventVenue.default, {
    venue: props.venue
  }), props.artist && _react.default.createElement(_EventArtist.default, {
    artist: props.artist
  }), props.price && _react.default.createElement(_EventPrices.default, {
    price: props.price,
    ticketLink: props.ticketLink
  }), props.eventDates && _react.default.createElement(_EventDates.default, {
    eventDates: props.eventDates
  }));
};

var _default = EventInfo;
exports.default = _default;