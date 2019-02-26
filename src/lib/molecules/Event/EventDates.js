import React from 'react';
import PropTypes from 'prop-types';

const EventDates = (props) => {
  return (
    <div className="eventInfo-date">
      <h2>Event Dates</h2>
      <ul>
        {props.eventDates.map((event, index) => {
          return (
            <div key={index}>
              <li>{event.date}</li>
            </div>
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
