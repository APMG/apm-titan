"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inherits"));

var _react = _interopRequireDefault(require("react"));

var _router = require("@reach/router");

var _classnames = _interopRequireDefault(require("classnames"));

var _Nav = _interopRequireDefault(require("./Nav"));

var _Logo = _interopRequireDefault(require("./Logo"));

var _navItems = require("./navItems");

var Header =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Header, _React$Component);

  function Header(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Header);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Header).call(this, props));

    _this.toggleMenu = function () {
      if (_this.state.menuOpen) {
        _this.setState({
          menuOpen: false
        });
      } else {
        _this.setState({
          menuOpen: true
        });
      }
    };

    _this.closeMenu = function () {
      _this.setState({
        menuOpen: false
      });
    };

    _this.state = {
      menuOpen: false
    };
    return _this;
  }

  (0, _createClass2.default)(Header, [{
    key: "render",
    value: function render() {
      var headerClasses = (0, _classnames.default)('header', {
        'is-open': this.state.menuOpen,
        'is-closed': !this.state.menuOpen
      });
      return _react.default.createElement("header", {
        className: headerClasses,
        "data-testid": "header"
      }, _react.default.createElement(_router.Link, {
        to: "/",
        className: "header_logo",
        "data-testid": "header-logo",
        onClick: this.closeMenu
      }, _react.default.createElement("div", {
        className: "header_logoImg"
      }, _react.default.createElement(_Logo.default, null)), _react.default.createElement("div", {
        style: {
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: 1,
          textTransform: 'uppercase'
        }
      }, "APM Components")), _react.default.createElement("button", {
        className: "header_navButton",
        onClick: this.toggleMenu
      }, _react.default.createElement("div", {
        className: "navIcon"
      }, _react.default.createElement("span", null), _react.default.createElement("span", null), _react.default.createElement("span", null)), _react.default.createElement("span", {
        className: "invisible"
      }, "Menu")), _react.default.createElement("div", {
        className: "header_navBg",
        "data-testid": "header-closenav",
        onClick: this.closeMenu
      }), _react.default.createElement("div", {
        className: "header_nav"
      }, _react.default.createElement(_Nav.default, {
        items: _navItems.navItems,
        closeMenu: this.closeMenu
      })));
    }
  }]);
  return Header;
}(_react.default.Component);

var _default = Header;
exports.default = _default;