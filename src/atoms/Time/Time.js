import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function prettyDate(dateString) {
  let sections = dateString.split(/-|T/);
  let year = sections[0];
  let month = months[parseInt(sections[1] - 1)];
  let day = parseInt(sections[2]).toString();

  let timeBreak = sections[3].split(':');
  let hour = parseInt(timeBreak[0]).toString();
  let minute = timeBreak[1];
  let meridiem = 'a.m.';

  if (hour > 12) {
    hour = hour - 12;
    meridiem = 'p.m.';
  }

  return `${month} ${day}, ${year} ${hour}:${minute} ${meridiem}`;
}

const Time = (props) => {
  if (props.type === 'distance') {
    return (
      <time
        className={props.elementClass && props.elementClass}
        dateTime={props.dateTime}
        //title={format(normalTime, 'MMMM d, yyyy h:mm aa')}
        title={prettyDate(props.dateTime)}
      >
        {formatDistanceToNow(new Date(props.dateTime))}
      </time>
    );
  } else {
    return (
      <time
        className={props.elementClass && props.elementClass}
        dateTime={props.dateTime}
      >
        {prettyDate(props.dateTime)}
      </time>
    );
  }
};

Time.defaultProps = {
  type: 'timestamp',
  formatString: 'MMMM d, yyyy'
};

Time.propTypes = {
  dateTime: PropTypes.string.isRequired,
  elementClass: PropTypes.string,
  formatString: PropTypes.string,
  type: PropTypes.oneOf(['timestamp', 'distance'])
};

export default Time;
