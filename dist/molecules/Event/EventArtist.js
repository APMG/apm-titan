"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var EventArtist = function EventArtist(props) {
  return _react.default.createElement("div", {
    className: "eventInfo-artist"
  }, _react.default.createElement("h2", null, "Artist"), _react.default.createElement("a", {
    target: '_blank',
    href: props.artist.website
  }, _react.default.createElement("div", {
    className: "link-plain"
  }, props.artist.name)), _react.default.createElement("br", null), _react.default.createElement("a", {
    target: '_blank',
    href: props.artist.facebook,
    className: "link"
  }, "Facebook"), _react.default.createElement("br", null), _react.default.createElement("a", {
    target: '_blank',
    href: props.artist.twitter,
    className: "link"
  }, "Twitter"));
};

var _default = EventArtist;
exports.default = _default;