import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import EventDates from '../Event/EventDates';
import EventVenue from '../Event/EventVenue';

const EventTeaser = ({ id, title, headingLevel, venue, eventDates, Link }) => {
  return (
    <div className="eventTeaser">
      <div className="eventTeaser_header">
        {id && (
          <Link href={`/${id}`} className="event_topic link-plain">
            {/* eslint-disable */}
            <a>
              {/* eslint-enable */}
              {title && (
                <Heading
                  level={headingLevel ? headingLevel : 1}
                  elementClass="hdg hdg-4"
                >
                  {title}
                </Heading>
              )}
            </a>
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
  headingLevel: PropTypes.number,
  id: PropTypes.number.isRequired,
  Link: PropTypes.func,
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
