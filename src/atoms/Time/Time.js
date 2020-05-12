import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';

function constructTime(timeString) {
  console.log('timeString', timeString);

  let sections = timeString.split(/-|T/);
  let year = parseInt(sections[0]);
  let month = parseInt(sections[1] - 1);
  let day = parseInt(sections[2]).toString();

  let timeBreak = sections[3].split(':');
  let hour = parseInt(timeBreak[0]).toString();
  let minute = parseInt(timeBreak[1]);

  console.log(`year: ${year}, month: ${month}, day: ${day}, hour: ${hour}, minute: ${minute}`)

  return new Date(year, month, day, hour, minute);
}

const Time = (props) => {
  // TODO: Or, at least, at a 'Z' to the end of the string to avoid a few problems with older browsers
  let cmsDateStampRegex = /\d\d\d\d-[01]\d-[0123]\dT[012]\d:[012345]\d/
  let time = cmsDateStampRegex.test(props.dateTime) ? constructTime(props.dateTime) : new Date(props.dateTime);
  console.log('time', time);

  let utcTime = zonedTimeToUtc(time, 'America/Chicago');
  console.log('utcTime', utcTime);

  let chicagoTime = utcToZonedTime(utcTime, 'America/Chicago');
  console.log('chicagoTime', chicagoTime);

  if (props.type === 'distance') {
    return (
      <time
        className={props.elementClass && props.elementClass}
        dateTime={props.dateTime}
        //title={format(normalTime, 'MMMM d, yyyy h:mm aa')}
        title={format(chicagoTime, 'MMMM d, yyyy h:mm aa', { timeZone: 'America/Chicago' })}
      >
        {formatDistanceToNow(time)}
      </time>
    );
  } else {
    return (
      <time
        className={props.elementClass && props.elementClass}
        dateTime={props.dateTime}
      >
        {format(chicagoTime, props.formatString, { timeZone: 'America/Chicago' })}
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
