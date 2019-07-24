import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Heading from '../../atoms/Heading/Heading';
import TagLink from '../../atoms/TagLink/TagLink';

const ContentHeader = ({
  title,
  subtitle,
  tag,
  headingLevel,
  authors,
  publishDate
}) => {
  return (
    <header className="content_header">
      {tag && (
        <TagLink
          href={tag.href}
          tagName={tag.tagName}
          elementClass="content_topic"
        />
      )}

      <Heading level={headingLevel ? headingLevel : 1} className="hdg hdg-1">
        {title}
      </Heading>

      {subtitle && (
        <p className="content_subtitle" data-testid="contentSubtitle">
          {subtitle}
        </p>
      )}

      <div className="content_meta">
        {authors && (
          <div className="content_byline" data-testid="contentByline">
            By{' '}
            {authors.map((author) => {
              return (
                <Link href={author.href} key={author.href}>
                  <a>{`${author.name} `}</a>
                </Link>
              );
            })}
          </div>
        )}

        {publishDate}
      </div>
    </header>
  );
};

ContentHeader.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string
    })
  ),
  headingLevel: PropTypes.number,
  publishDate: PropTypes.node,
  subtitle: PropTypes.string,
  tag: PropTypes.shape({
    href: PropTypes.string,
    tagName: PropTypes.string
  }),
  title: PropTypes.string.isRequired
};

export default ContentHeader;
