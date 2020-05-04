import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import TagLink from '../../atoms/TagLink/TagLink';

const EventHeader = ({ title, subtitle, tag, headingLevel, publishDate }) => {
  return (
    <header className="event_header">
      {tag && (
        <TagLink
          href={tag.href}
          tagName={tag.tagName}
          elementClass="event_topic"
        />
      )}

      <Heading level={headingLevel ? headingLevel : 1} className="hdg hdg-1">
        {title}
      </Heading>

      {subtitle && (
        <p className="event_subtitle" data-testid="eventSubtitle">
          {subtitle}
        </p>
      )}

      {publishDate && <div className="event_meta">{publishDate}</div>}
    </header>
  );
};

EventHeader.propTypes = {
  title: PropTypes.string.isRequired,
  headingLevel: PropTypes.number,
  publishDate: PropTypes.node,
  subtitle: PropTypes.string,
  tag: PropTypes.shape({
    href: PropTypes.string,
    tagName: PropTypes.string
  })
};

export default EventHeader;
