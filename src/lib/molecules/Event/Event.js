import React from 'react';
import PropTypes from 'prop-types';
import EventHeader from './EventHeader';
import EventBody from './EventBody';
import EventInfo from './EventInfo';

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
            href={props.href}
            subtitle={props.subtitle}
          />
        )}

        <br />
        {props.bodyHtml && (
          <EventBody title={props.title} bodyHtml={props.bodyHtml} />
        )}
        <br />
        <br />

        <EventInfo
          title={props.title}
          venue={props.venue}
          artist={props.artist}
          price={props.price}
          ticketLink={props.website}
          eventDates={props.eventDates}
        />
      </div>
    </div>
  );
};

Event.propTypes = {
  headingLevel: PropTypes.number,
  publishDate: PropTypes.string,
  bodyHtml: PropTypes.string,
  tag: PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.string
  }),
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
  artist: PropTypes.shape({
    name: PropTypes.string,
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    website: PropTypes.string
  }),

  price: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  ),
  eventDates: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  ),
  website: PropTypes.string,
  href: PropTypes.string,
  subtitle: PropTypes.string
};

export default Event;
