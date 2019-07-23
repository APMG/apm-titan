import React from 'react';
import PropTypes from 'prop-types';
import { format, distanceInWordsToNow } from 'date-fns';

const Time = (props) => {
  if (props.type === 'distance') {
    return (
      <time
        className={props.elementClass && props.elementClass}
        dateTime={props.dateTime}
        title={format(props.dateTime, 'MMMM D, YYYY H:mm aa')}
      >
        {distanceInWordsToNow(props.dateTime)}
      </time>
    );
  } else {
    return (
      <time
        className={props.elementClass && props.elementClass}
        dateTime={props.dateTime}
      >
        {format(props.dateTime, props.formatString)}
      </time>
    );
  }
};

Time.defaultProps = {
  type: 'timestamp',
  formatString: 'MMMM D, YYYY'
};

Time.propTypes = {
  dateTime: PropTypes.string.isRequired,
  elementClass: PropTypes.string,
  formatString: PropTypes.string,
  type: PropTypes.oneOf(['timestamp', 'distance'])
};

export default Time;
