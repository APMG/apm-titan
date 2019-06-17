import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import TagLink from '../../atoms/TagLink/TagLink';
import Link from 'next/link';

const EventHeader = (props) => {
  return (
    <header className="event_header">
      {props.tag && (
        <TagLink
          href={props.tag.href}
          tagName={props.tag.tagName}
          elementClass="event_topic"
          Link={Link}
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
    tagName: PropTypes.string
  }),
  title: PropTypes.string.isRequired
};

export default EventHeader;
