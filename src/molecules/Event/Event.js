import React from 'react';
import PropTypes from 'prop-types';
import EventHeader from './EventHeader';
import Body from '../Body/Body';
import EventInfo from './EventInfo';

// TODO: Find some way to do this without the <br/>s?

const Event = (props) => {
  return (
    <div className="event">
      <div className="col col-page">
        {props.title && (
          <EventHeader
            title={props.title}
            headingLevel={props.headingLevel}
            publishDate={props.publishDate}
            tag={props.tag}
            subtitle={props.subtitle}
          />
        )}

        <br />
        {props.bodyHtml && (
          <Body elementClass="event_body" bodyHtml={props.bodyHtml} />
        )}
        <br />
        <br />

        <EventInfo
          title={props.title}
          venue={props.venue}
          artist={props.artist}
          prices={props.prices}
          ticketLink={props.website}
          eventDates={props.eventDates}
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
