import React from 'react';
import PropTypes from 'prop-types';
import TagLink from '../../atoms/TagLink/TagLink';

const EventVenue = (props) => {
  return (
    // TODO: I don't think this should be an article. It seems like more of an attribute of a larger article, such as the event itself or eventInfo. The things it holds don't seem like paragraphs either.
    <article className="eventInfo-venue">
      <h2>Location</h2>
      <TagLink
        href={props.venue.website}
        title={props.venue.name}
        elementClass="link-plain"
      />
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
    </article>
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
