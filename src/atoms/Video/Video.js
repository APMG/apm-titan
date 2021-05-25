import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ video }) => {
  function getVideoPlayer(video) {
    let playerEmbed;
    const uri = new URL(video.url);
    switch (uri.hostname) {
      case 'www.facebook.com':
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        playerEmbed = (
          <iframe
            src={video.url}
            width="560"
            height="460"
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"
            allowFullScreen={true}
          ></iframe>
        );
        break;
      case 'player.vimeo.com':
        playerEmbed = (
          <video
            id={video.credit.name}
            autoPlay={true}
            muted={true}
            loop={true}
          >
            <source src={video.url} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        );
        break;
      case 'mpr.apmcdn.org':
        playerEmbed = (
          <video
            id={video.credit.name}
            autoPlay={true}
            muted={true}
            loop={true}
          >
            <source src={video.url} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        );
        break;
      case 'www.youtube.com':
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        playerEmbed = (
          <iframe
            src={video.url.replace(/watch\?v=/g, 'embed/')}
            width="420"
            height="460"
          ></iframe>
        );
        break;
      default:
        console.error(playerEmbed, 'source is not a valid video url');
    }
    return playerEmbed;
  }

  let videoPlayer = video && getVideoPlayer(video);

  return (
    <div className="content_primaryVisual">
      <figure className="figure">
        {video && videoPlayer}
        {video.caption && (
          <figcaption className="figure_caption">
            <div className="figure_caption_content">{video.caption}</div>
            {video.credit.name && video.credit.url && (
              <a href={video.credit.url} target="_blank" rel="noreferrer">
                <span className="figure_credit">{video.credit.name}</span>
              </a>
            )}
            {video.credit.name && !video.credit.url && (
              <span className="figure_credit">{video.credit.name}</span>
            )}
          </figcaption>
        )}
      </figure>
    </div>
  );
};

Video.propTypes = {
  video: PropTypes.object
};

export default Video;
