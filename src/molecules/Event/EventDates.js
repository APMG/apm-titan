import React from 'react';
import PropTypes from 'prop-types';
import Time from '../../atoms/Time/Time';

const EventDates = ({ eventDates }) => {
  return (
    <div className="eventInfo-dates">
      <h2>Event Dates</h2>
      <ul>
        {eventDates.map((event, i) => {
          return (
            <li className="eventInfo-date" key={i}>
              <Time dateTime={event.date} formatString="MMMM D, YYYY" />
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
