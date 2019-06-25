import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

const EventDates = ({ eventDates }) => {
  return (
    <div className="eventInfo-date">
      <h2>Event Dates</h2>
      <ul>
        {eventDates.map((event, index) => {
          return (
            <li key={index}>
              <time dateTime={event.date}>
                {format(event.date, 'MMMM D, YYYY')}
              </time>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

EventDates.propTypes = {
  eventDates: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      description: PropTypes.string
    })
  )
};
export default EventDates;
