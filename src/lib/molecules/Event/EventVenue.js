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
        <p>{props.venue.name}</p>
      </a>
      <p>
        {props.venue.street} {props.venue.city}, {props.venue.state}{' '}
        {props.venue.zip}
      </p>

      <p>{props.venue.phone}</p>
      <p>
        {props.venue.latitude && props.venue.longitude && (
          <a
            href={`https://www.google.com/maps/?q=${props.venue.latitude},${
              props.venue.longitude
            }`}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            View Map
          </a>
        )}
      </p>
      <br />
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
