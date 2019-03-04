"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.to_sentence = to_sentence;
exports.throttle = throttle;
exports.linkFromType = linkFromType;
exports.markup = markup;
exports.formateDate = formateDate;

function to_sentence(arr) {
  if (!arr) {
    return;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  var last = arr.pop();
  var ret = "".concat(arr.join(', '), ", and ").concat(last);
  return ret;
}
/* Throttles an eventListener function to prevent it from being called too often */


function throttle(type, name, obj) {
  obj = obj || window;
  var running = false;

  var func = function func() {
    if (running) {
      return;
    }

    running = true;
    requestAnimationFrame(function () {
      obj.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  };

  obj.addEventListener(type, func);
}

function linkFromType(data) {
  var ret;

  switch (data.resourceType) {
    case 'collection':
      ret = "/collection/".concat(data.href);
      break;

    case 'episode':
      ret = "/epsiode/".concat(data.href);
      break;

    case 'link':
      ret = data.destination;
      break;

    case 'story':
      ret = "/story/".concat(data.href);
      break;

    case 'page':
      ret = "/page/".concat(data.href);
      break;

    default:
      ret = '';
  }

  return ret;
}
/* For dangerouslySetInnerHTML, take xml text to render to html */


function markup(rawMarkup) {
  return {
    __html: rawMarkup
  };
}
/* Takes a date object and returns it in mm/dd/YYYY format */


function formateDate(dateString) {
  var date = new Date(dateString);
  return "".concat(date.getMonth() + 1, "/").concat(date.getDate(), "/").concat(date.getFullYear());
}