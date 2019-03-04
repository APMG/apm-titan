"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var EventPrices = function EventPrices(props) {
  return _react.default.createElement("div", {
    className: "eventInfo-prices"
  }, _react.default.createElement("h2", null, "Event tickets"), props.price.map(function (data, index) {
    return _react.default.createElement("div", {
      key: index
    }, data.description, ": $", data.price);
  }), _react.default.createElement("br", null), _react.default.createElement("a", {
    target: '_blank',
    href: props.ticketLink,
    className: "link"
  }, "Buy Tickets here"));
};

var _default = EventPrices;
exports.default = _default;