import React from 'react';
import PropTypes from 'prop-types';

const EventVenue = ({ venue }) => {
  return (
    <div className="eventInfo-venue">
      <h2>Location</h2>
      <a
        href={venue.website}
        target="_blank"
        rel="noopener noreferrer"
        className="link-plain"
      >
        {venue.name}
      </a>
      <address>
        {venue.street} {venue.city}, {venue.state}
        <br />
        {venue.zip}
        <br />
        {venue.phone}
      </address>

      {venue.latitude && venue.longitude && (
        <a
          href={`https://www.google.com/maps/?q=${venue.latitude},${venue.longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          View Map
        </a>
      )}
    </div>
  );
};

EventVenue.propTypes = {
  venue: PropTypes.shape({
    name: PropTypes.string,
    website: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    phone: PropTypes.string,
    latitude: PropTypes.string,
    longitude: PropTypes.string
  })
};
export default EventVenue;
