import React from 'react';
import PropTypes from 'prop-types';
import Time from '../../atoms/Time/Time';

const EventDates = ({ eventDates }) => {
  return (
    <div className="eventInfo-date">
      <h2>Event Dates</h2>
      <ul>
        {eventDates.map((event, index) => {
          return (
            <li key={index}>
              <Time dateTime={event.date} formatString="MMMM d, yyyy" />
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
