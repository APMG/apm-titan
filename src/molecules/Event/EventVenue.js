import React from 'react';
import PropTypes from 'prop-types';

const EventVenue = (props) => {
  return (
    <div className="eventInfo-venue">
      <h2>Location</h2>
      <a
        href={props.venue.website}
        target="_blank"
        rel="noopener noreferrer"
        className="link-plain"
      >
        {props.venue.name}
      </a>
      <address>
        {props.venue.street} {props.venue.city}, {props.venue.state}
        <br />
        {props.venue.zip}
        <br />
        {props.venue.phone}
      </address>

      {props.venue.latitude && props.venue.longitude && (
        <a
          href={`https://www.google.com/maps/?q=${props.venue.latitude},${props.venue.longitude}`}
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
