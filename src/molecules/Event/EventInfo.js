import React from 'react';
import PropTypes from 'prop-types';
import EventVenue from './EventVenue';
import EventArtist from './EventArtist';
import EventPrices from './EventPrices';
import EventDates from './EventDates';

const EventInfo = (props) => {
  return (
    <div className="eventInfo">
      {props.venue && <EventVenue venue={props.venue} />}

      {props.artist && <EventArtist artist={props.artist} />}

      {props.prices && (
        <EventPrices prices={props.prices} ticketLink={props.ticketLink} />
      )}

      {props.eventDates && <EventDates eventDates={props.eventDates} />}
    </div>
  );
};

EventInfo.propTypes = {
  artist: PropTypes.object,
  venue: PropTypes.object,
  price: PropTypes.array,
  ticketLink: PropTypes.string,
  eventDates: PropTypes.array
};

export default EventInfo;
