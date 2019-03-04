"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var EventDates = function EventDates(props) {
  return _react.default.createElement("div", {
    className: "eventInfo-date"
  }, _react.default.createElement("h2", null, "Event Dates"), _react.default.createElement("ul", null, props.eventDates.map(function (event, index) {
    return _react.default.createElement("div", {
      key: index
    }, _react.default.createElement("li", null, event.date));
  })));
};

var _default = EventDates;
exports.default = _default;