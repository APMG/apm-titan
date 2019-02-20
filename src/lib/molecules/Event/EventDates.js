import React from 'react';
import PropTypes from 'prop-types';

const EventDates = (props) => {
  return (
    <article className="eventInfo-date">
      <h2>Event Dates</h2>
      <ul>
        {props.eventDates.map((data, index) => {
          return (
            <div key={index}>
              <li>{data.date}</li>
            </div>
          );
        })}
      </ul>
    </article>
  );
};

EventDates.propTypes = {
  eventDates: PropTypes.array
};
export default EventDates;
