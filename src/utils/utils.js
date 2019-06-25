export function toSentence(arr) {
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

/* For dangerouslySetInnerHTML, take xml text to render to html */
export function markup(rawMarkup) {
  return { __html: rawMarkup };
}

// Get the previous index OR min
export function prevIndex(i) {
  return i > 1 ? i - 1 : 1;
}

// Get the next index OR max
export function nextIndex(i, count) {
  return i < count ? i + 1 : count;
}