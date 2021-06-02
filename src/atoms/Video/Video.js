import React from 'react';
import PropTypes from 'prop-types';
import { getVideoPlayer } from '../../utils/utils';

const Video = ({ video }) => {
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
