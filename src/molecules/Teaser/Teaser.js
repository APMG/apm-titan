/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../../atoms/Link/Link';
import Heading from '../../atoms/Heading/Heading';
import TagLink from '../../atoms/TagLink/TagLink';
import { toSentence } from '../../utils/utils';

const Teaser = ({
  title,
  headingLevel,
  publishDate,
  href,
  as,
  tag,
  audioPlayButton,
  image,
  contributors,
  description,
  elementClass
}) => {
  const classes = classNames({
    teaser: true,
    [elementClass]: elementClass
  });

  return (
    <article className={classes}>
      {tag && (
        <TagLink
          elementClass="teaser_tagLink"
          to={tag.to}
          tagName={tag.tagName}
        />
      )}

      {audioPlayButton && (
        <div className="teaser_button">{audioPlayButton}</div>
      )}

      <Link href={href} as={as} className="teaser_link">
        <div className="teaser_image">{image}</div>

        <div className="teaser_content">
          <div className="teaser_header">
            <Heading level={headingLevel}>{title}</Heading>
          </div>

          {(publishDate || contributors) && (
            <div className="teaser_meta">
              {publishDate && (
                <div className="teaser_pubdate">{publishDate}</div>
              )}

              {contributors && (
                <div className="teaser_contributors">
                  {`By ${toSentence(contributors)}`}
                </div>
              )}
            </div>
          )}

          {description && (
            <div className="teaser_body userContent">{description}</div>
          )}
        </div>
      </Link>
    </article>
  );
};

Teaser.propTypes = {
  audioPlayButton: PropTypes.node,
  contributors: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  elementClass: PropTypes.string,
  headingLevel: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
  image: PropTypes.object,
  publishDate: PropTypes.node,
  tag: PropTypes.shape({
    to: PropTypes.string.isRequired,
    tagName: PropTypes.string.isRequired
  }),
  title: PropTypes.string.isRequired
};

export default Teaser;
