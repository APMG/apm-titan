import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import TagLink from '../../atoms/TagLink/TagLink';
import { format } from 'date-fns';

const ContentHeader = (props) => {
  const { Link } = props;
  return (
    <header className="content_header">
      {props.tag && (
        <TagLink
          href={props.tag.href}
          tagName={props.tag.tagName}
          elementClass="content_topic"
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
        <p className="content_subtitle" data-testid="contentSubtitle">
          {props.subtitle}
        </p>
      )}

      <div className="content_meta">
        {props.authors && (
          <div className="content_byline" data-testid="contentByline">
            By{' '}
            {props.authors.map((author) => {
              return (
                <Link href={author.href} key={author.href}>
                  {/* eslint-disable-next-line */}
                  <a>{`${author.name} `}</a>
                </Link>
              );
            })}
          </div>
        )}

        {props.publishDate && (
          <time dateTime={props.publishDate}>
            {format(props.publishDate, 'MMMM D, YYYY')}
          </time>
        )}
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
  Link: PropTypes.func,
  headingLevel: PropTypes.number,
  publishDate: PropTypes.string,
  subtitle: PropTypes.string,
  tag: PropTypes.shape({
    href: PropTypes.string,
    tagName: PropTypes.string
  }),
  title: PropTypes.string.isRequired
};

export default ContentHeader;
