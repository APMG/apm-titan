export function to_sentence(arr) {
  if (!arr) {
    return;
  }
  if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 2) {
    return `${arr[0]} and ${arr[1]}`;
  }
  const last = arr.pop();
  return `${arr.join(', ')}, and ${last}`;
}

/* Throttles an eventListener function to prevent it from being called too often */
export function throttle(type, name, obj) {
  obj = obj || window;
  var running = false;
  var func = function() {
    if (running) {
      return;
    }
    running = true;
    requestAnimationFrame(function() {
      obj.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  };
  obj.addEventListener(type, func);
}

export function linkFromType(data) {
  let ret;
  switch (data.resourceType) {
    case 'collection':
      ret = `/collection/${data.href}`;
      break;
    case 'episode':
      ret = `/epsiode/${data.href}`;
      break;
    case 'link':
      ret = data.destination;
      break;
    case 'story':
      ret = `/story/${data.href}`;
      break;
    case 'page':
      ret = `/page/${data.href}`;
      break;
    default:
      ret = '';
  }
  return ret;
}

/* For dangerouslySetInnerHTML, take xml text to render to html */
export function markup(rawMarkup) {
  return { __html: rawMarkup };
}

/* Takes a date object and returns it in mm/dd/YYYY format */
export function formateDate(dateString) {
  let date = new Date(dateString);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}
