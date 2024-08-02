import React from 'react';

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
  if (i === 2) return '';
  return i > 1 ? i - 1 : 1;
}

// Get the next index OR max
export function nextIndex(i, count) {
  return i < count ? i + 1 : count;
}

// Returns youtube video id
export function youtubeParser(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

// Return playerEmbed determined by type of primary video source
export function getVideoPlayer(video) {
  let playerEmbed;
  const uri = new URL(video.url);
  switch (uri.hostname) {
    case 'www.facebook.com':
      playerEmbed = (
        <div className="iframe-container">
          <iframe
            title={video.credit.name}
            src={`https://www.facebook.com/plugins/video.php?href=${video.url}&show_text=0`}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div>
      );
      break;
    case 'player.vimeo.com':
    case 'mpr.apmcdn.org':
      playerEmbed = (
        <video id={video.credit.name} autoPlay={true} muted={true} loop={true}>
          <source src={video.url} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      );
      break;
    case 'www.youtube.com':
      // eslint-disable-next-line jsx-a11y/iframe-has-title
      playerEmbed = (
        <div className="iframe-container">
          <iframe
            title={video.credit.name}
            src={`https://www.youtube.com/embed/${youtubeParser(video.url)}`}
          ></iframe>
        </div>
      );
      break;
    default:
      console.error(playerEmbed, 'source is not a valid video url');
  }
  return playerEmbed;
}
