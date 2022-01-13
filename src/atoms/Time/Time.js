import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
const tz = 'America/Chicago';

function constructTime(timeString) {
  let sections = timeString.split(/-|T/);
  let year = parseInt(sections[0]);
  let month = parseInt(sections[1] - 1);
  let day = parseInt(sections[2]).toString();

  let timeBreak = sections[3].split(':');
  let hour = parseInt(timeBreak[0]).toString();
  let minute = parseInt(timeBreak[1]);

  return new Date(year, month, day, hour, minute);
}

const Time = (props) => {
  // If this date string is formatted like our CMS formats it, use the constructTime function above. Otherwise, just parse the date normally. Parsing our CMSs timestamps directly with new Date(string) didn't behave well with the time zone stuff.
  let cmsDateStampRegex = /\d\d\d\d-[01]\d-[0123]\dT[012]\d:[012345]\d/;
  let time = cmsDateStampRegex.test(props.dateTime)
    ? constructTime(props.dateTime)
    : new Date(props.dateTime);

  let utcTime = dayjs(time)
    .tz(tz)
    .utc();
  let chicagoTime = utcTime.tz(tz);

  if (props.type === 'distance') {
    return (
      <time
        className={props.elementClass && props.elementClass}
        dateTime={props.dateTime}
        title={chicagoTime.format('MMMM D, YYYY h:mm A')}
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
        {chicagoTime.format(props.formatString)}
      </time>
    );
  }
};

Time.defaultProps = {
  type: 'timestamp',
  formatString: 'MMMM DD, YYYY',
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
