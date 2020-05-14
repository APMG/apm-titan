import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link/Link';
import Heading from '../../atoms/Heading/Heading';
import EventDates from '../Event/EventDates';
import EventVenue from '../Event/EventVenue';

const EventTeaser = ({ id, title, headingLevel, eventDates, venue }) => {
  return (
    <div className="eventTeaser">
      <div className="eventTeaser_header">
        {id && (
          <Link href={`/${id}`} className="event_topic link-plain">
            {title && (
              <Heading level={headingLevel ? headingLevel : 4}>{title}</Heading>
            )}
          </Link>
        )}
        {eventDates && <EventDates eventDates={eventDates} />}

        {venue && <EventVenue venue={venue} />}
      </div>
    </div>
  );
};

EventTeaser.propTypes = {
  eventDates: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  ),
  id: PropTypes.number.isRequired,
  headingLevel: PropTypes.number,
  title: PropTypes.string,
  venue: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    longitude: PropTypes.string,
    latitude: PropTypes.string
  })
};

export default EventTeaser;
