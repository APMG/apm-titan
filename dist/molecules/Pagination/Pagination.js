"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _uuid = _interopRequireDefault(require("uuid"));

var Pagination = function Pagination(props) {
  var total_pages = props.total_pages,
      page = props.page,
      link_prefix = props.link_prefix,
      links_to_show = props.links_to_show;
  var next_page = props.next_page,
      previous_page = props.previous_page;
  var items = [];
  var startpage;
  var endpage;

  if (page === 1) {
    startpage = page;
    endpage = page + links_to_show - 1;
  } else if (page > 1 && page < total_pages) {
    startpage = page - 1;
    endpage = page + links_to_show - 2;
  } else {
    startpage = total_pages - links_to_show + 1;
    endpage = total_pages;
  }

  if (page > 1) {
    items.push(generateListItem(1, [], ['first'], '« First'));
    items.push(generateListItem(previous_page, [], ['prev'], '‹ Prev', 'prev'));
  }

  while (startpage <= endpage) {
    if (page === startpage) {
      items.push(generateListItem(startpage, ['active']));
    } else {
      items.push(generateListItem(startpage));
    }

    ++startpage;
  }

  if (page < total_pages) {
    items.push(generateListItem(next_page, [], ['next'], 'Next ›', 'next'));
    items.push(generateListItem(total_pages, [], ['last'], 'Last »'));
  }

  return _react.default.createElement("nav", {
    className: "pagination"
  }, _react.default.createElement("ul", {
    className: "pagination_list"
  }, items));

  function generateListItem(currentPage) {
    var anchorClasses = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var listItemClasses = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var overrideText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var rel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    var mergedAnchorClasses = ['pagination_page_link'].concat(anchorClasses);
    var mergedListItemClasses = ['pagination_page'].concat(listItemClasses);
    return _react.default.createElement("li", {
      className: mergedListItemClasses.join(' '),
      key: (0, _uuid.default)()
    }, _react.default.createElement("a", {
      className: mergedAnchorClasses.join(' '),
      rel: rel ? rel : undefined,
      href: "/".concat(link_prefix, "/").concat(currentPage)
    }, overrideText || currentPage));
  }
};

var _default = Pagination;
exports.default = _default;