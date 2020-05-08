import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { utcToZonedTime, format } from 'date-fns-tz';

const Time = (props) => {
  let chicagoDate = utcToZonedTime(new Date(props.dateTime), 'America/Chicago')

  if (props.type === 'distance') {
    return (
      <time
        className={props.elementClass && props.elementClass}
        dateTime={props.dateTime}
        //title={format(normalTime, 'MMMM d, yyyy h:mm aa')}
        title={format(chicagoDate, 'MMMM d, yyyy h:mm aa', { timeZone: 'America/Chicago' })}
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
        {format(chicagoDate, props.formatString, { timeZone: 'America/Chicago' })}
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
