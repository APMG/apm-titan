import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import TagLink from '../../atoms/TagLink/TagLink';

const EventHeader = (props) => {
  return (
    <header className="event_header">
      {props.tag && (
        <TagLink
          href={props.tag.href}
          title={props.tag.title}
          elementClass="event_topic"
        />
      )}

      <Heading
        level={props.headingLevel ? props.headingLevel : 1}
        className="hdg hdg-1"
      >
        {props.title}
      </Heading>

      {props.subtitle && (
        <p className="event_subtitle" data-testid="eventSubtitle">
          {props.subtitle}
        </p>
      )}

      <div className="event_meta">
        {props.publishDate && (
          <time dateTime={props.publishDate}>{props.publishDate}</time>
        )}
      </div>
    </header>
  );
};

EventHeader.propTypes = {
  subtitle: PropTypes.string,
  headingLevel: PropTypes.number,
  publishDate: PropTypes.string,
  tag: PropTypes.shape({
    href: PropTypes.string,
    title: PropTypes.string
  }),
  title: PropTypes.string.isRequired
};

export default EventHeader;
