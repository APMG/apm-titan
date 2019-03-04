"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var EventVenue = function EventVenue(props) {
  return _react.default.createElement("div", {
    className: "eventInfo-venue"
  }, _react.default.createElement("h2", null, "Location"), _react.default.createElement("a", {
    href: props.venue.website,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "link-plain"
  }, props.venue.name), _react.default.createElement("address", null, props.venue.street, " ", props.venue.city, ", ", props.venue.state, _react.default.createElement("br", null), props.venue.zip, _react.default.createElement("br", null), props.venue.phone), props.venue.latitude && props.venue.longitude && _react.default.createElement("a", {
    href: "https://www.google.com/maps/?q=".concat(props.venue.latitude, ",").concat(props.venue.longitude),
    target: "_blank",
    rel: "noopener noreferrer",
    className: "link"
  }, "View Map"));
};

var _default = EventVenue;
exports.default = _default;