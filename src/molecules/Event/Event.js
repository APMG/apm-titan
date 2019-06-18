import React from 'react';
import PropTypes from 'prop-types';
import EventHeader from './EventHeader';
import Body from '../Body/Body';
import EventInfo from './EventInfo';

// TODO: Find some way to do this without the <br/>s?

const Event = ({
  title,
  subtitle,
  headingLevel,
  publishDate,
  tag,
  bodyHtml,
  venue,
  artist,
  prices,
  website,
  eventDates
}) => {
  return (
    <div className="event">
      <div className="col col-page">
        {title && (
          <EventHeader
            title={title}
            headingLevel={headingLevel}
            publishDate={publishDate}
            tag={tag}
            subtitle={subtitle}
          />
        )}

        <br />
        {bodyHtml && <Body elementClass="event_body" bodyHtml={bodyHtml} />}
        <br />
        <br />

        <EventInfo
          title={title}
          venue={venue}
          artist={artist}
          prices={prices}
          ticketLink={website}
          eventDates={eventDates}
        />
      </div>
    </div>
  );
};

Event.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string,
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    website: PropTypes.string
  }),
  bodyHtml: PropTypes.string,
  eventDates: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  ),
  headingLevel: PropTypes.number,
  prices: PropTypes.arrayOf(
    // TODO: Should the price be a float (or at least a number) instead of a string?
    PropTypes.shape({
      price: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  ),
  publishDate: PropTypes.string,
  tag: PropTypes.shape({
    tagName: PropTypes.string,
    to: PropTypes.string
  }),
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  venue: PropTypes.shape({
    name: PropTypes.string,
    website: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    phone: PropTypes.string,
    latitude: PropTypes.string,
    longitude: PropTypes.string
  }),
  website: PropTypes.string
};

export default Event;
