export function toSentence(arr) {
  if (!arr || arr.length === 0) {
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
