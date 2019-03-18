import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import Heading from '../../atoms/Heading/Heading';
import EventDates from '../Event/EventDates';
import EventVenue from '../Event/EventVenue';

const EventTeaser = (props) => {
  return (
    <div className="eventTeaser">
      <div className="eventTeaser_header">
        {props.id && (
          <Link to={`/${props.id}`} className="event_topic link-plain">
            {props.title && (
              <Heading
                level={props.headingLevel ? props.headingLevel : 1}
                className="hdg hdg-4"
              >
                {props.title}
              </Heading>
            )}
          </Link>
        )}
        {props.eventDates && <EventDates eventDates={props.eventDates} />}

        {props.venue && <EventVenue venue={props.venue} />}
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
