import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Heading from '../../atoms/Heading/Heading';
import TagLink from '../../atoms/TagLink/TagLink';

const toByline = (authors) => {
  if (!authors || authors.length <= 0) return;

  if (authors.length === 1) {
    return (
      <div className="content_byline" data-testid="contentByline">
        {`By `}
        <Link href={authors[0].href}>
          {`${authors[0].name}`}
        </Link>
      </div>
    )
  } else if (authors.length === 2) {
    return (
      <div className="content_byline" data-testid="contentByline">
        {`By `}
        <Link href={authors[0].href}>
          {`${authors[0].name}`}
        </Link>
        {` and `}
        <Link href={authors[1].href}>
          {`${authors[1].name}`}
        </Link>
      </div>
    )
  } else {
    return (
      <div className="content_byline" data-testid="contentByline">
        {'By '}
        {authors.slice(0, authors.length - 2).map((author) => {
          return (
            <span key={author.href}>
              <Link href={author.href}>
                {`${author.name}`}
              </Link>
              {`, `}
            </span>
          );
        })}
        <Link
          href={authors[authors.length - 2].href}
        >
          {`${authors[authors.length - 2].name}`} 
        </Link>
        {` and `}
        <Link
          href={authors[authors.length - 1].href}
        >
          {`${authors[authors.length - 1].name}`} 
        </Link>
      </div>
    )
  }
}

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
          toByline(authors)
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
