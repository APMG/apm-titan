import React from 'react';
import PropTypes from 'prop-types';

const EventArtist = ({ artist }) => {
  return (
    <div className="eventInfo-artist">
      <h2>Artist</h2>
      <a target={'_blank'} rel="noopener noreferrer" href={artist.website}>
        <div className="link-plain">{artist.name}</div>
      </a>
      <br />
      <a
        target={'_blank'}
        rel="noopener noreferrer"
        href={artist.facebook}
        className="link"
      >
        Facebook
      </a>
      <br />
      <a
        target={'_blank'}
        rel="noopener noreferrer"
        href={artist.twitter}
        className="link"
      >
        Twitter
      </a>
    </div>
  );
};

EventArtist.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string,
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    website: PropTypes.string
  })
};
export default EventArtist;
