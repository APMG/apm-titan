import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const Time = (props) => {
  // If this date string is formatted like our CMS formats it, use the constructTime function above. Otherwise, just parse the date normally. Parsing our CMSs timestamps directly with new Date(string) didn't behave well with the time zone stuff.
  let cmsDateStampRegex = /\d\d\d\d-[01]\d-[0123]\dT[012]\d:[012345]\d/;
  let time = cmsDateStampRegex.test(props.dateTime)
    ? new Date(props.dateTime).toLocaleString('en-US', {
        timeZone: 'America/Chicago'
      })
    : new Date(props.dateTime);

  if (props.type === 'distance') {
    return (
      <time
        className={props.elementClass && props.elementClass}
        dateTime={props.dateTime}
        title={dayjs(time).format('MMMM D, YYYY h:mm A')}
      >
        {`${Math.abs(dayjs(time).diff(dayjs(), props.distanceFormat))} ${
          props.distanceFormat
        }s`}
      </time>
    );
  } else {
    return (
      <time
        className={props.elementClass && props.elementClass}
        dateTime={props.dateTime}
      >
        {dayjs(time).format(props.formatString)}
      </time>
    );
  }
};

Time.defaultProps = {
  type: 'timestamp',
  formatString: 'MMMM DD, YYYY h:mm A',
  distanceFormat: 'day'
};

Time.propTypes = {
  dateTime: PropTypes.string.isRequired,
  elementClass: PropTypes.string,
  formatString: PropTypes.string,
  distanceFormat: PropTypes.string,
  type: PropTypes.oneOf(['timestamp', 'distance'])
};

export default Time;
