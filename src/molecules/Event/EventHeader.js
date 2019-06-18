import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import TagLink from '../../atoms/TagLink/TagLink';

const EventHeader = ({
  title,
  subtitle,
  tag,
  headingLevel,
  publishDate,
  Link
}) => {
  return (
    <header className="event_header">
      {tag && (
        <TagLink
          href={tag.href}
          tagName={tag.tagName}
          elementClass="event_topic"
          Link={Link}
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

      <div className="event_meta">
        {publishDate && <time dateTime={publishDate}>{publishDate}</time>}
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
  title: PropTypes.string.isRequired,
  Link: PropTypes.href
};

export default EventHeader;
