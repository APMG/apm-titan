//http://localhost:8080/event

import React from 'react';
import PropTypes from 'prop-types';
import EventHeader from './EventHeader';
import EventBody from './EventBody';
import EventInfo from './EventInfo';

const Event = (props) => {
  return (
    <article className="event">
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
    </article>
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
  venue: PropTypes.object,
  artist: PropTypes.object,
  price: PropTypes.array,
  eventDates: PropTypes.array,
  website: PropTypes.string,
  href: PropTypes.string,
  subtitle: PropTypes.string
};

export default Event;
