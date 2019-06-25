import React from 'react';
import PropTypes from 'prop-types';
import EventVenue from './EventVenue';
import EventArtist from './EventArtist';
import EventPrices from './EventPrices';
import EventDates from './EventDates';

const EventInfo = ({ venue, artist, prices, ticketLink, eventDates }) => {
  return (
    <div className="eventInfo">
      {venue && <EventVenue venue={venue} />}

      {artist && <EventArtist artist={artist} />}

      {prices && <EventPrices prices={prices} ticketLink={ticketLink} />}

      {eventDates && <EventDates eventDates={eventDates} />}
    </div>
  );
};

EventInfo.propTypes = {
  artist: PropTypes.object,
  venue: PropTypes.object,
  prices: PropTypes.array,
  ticketLink: PropTypes.string,
  eventDates: PropTypes.array
};

export default EventInfo;
