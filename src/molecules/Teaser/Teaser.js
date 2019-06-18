/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import TagLink from '../../atoms/TagLink/TagLink';
import { toSentence } from '../../utils/index';
import { format } from 'date-fns';

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
  router
}) => {
  const navigateToItem = () => {
    router.push(href, as);
  };

  const handleKeyDown = (e) => {
    let code = e.which;
    // 13 = Return, 32 = Space
    if (code === 13 || code === 32) {
      navigateToItem();
    }
  };

  return (
    <article className="teaser">
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

      <a
        role="link"
        onClick={navigateToItem}
        onKeyDown={handleKeyDown}
        tabIndex="0"
      >
        <div className="teaser_image">{image}</div>

        <div className="teaser_content">
          <div className="teaser_header">
            <Heading level={headingLevel}>{title}</Heading>
          </div>
          <div className="teaser_meta">
            {publishDate && (
              <time className="teaser_time" dateTime={publishDate}>
                {format(publishDate, 'MMMM D, YYYY')}
              </time>
            )}
            {contributors && (
              <div className="teaser_contributors">
                By {toSentence(contributors)}
              </div>
            )}
          </div>
          {description && (
            <div className="teaser_body userContent">{description}</div>
          )}
        </div>
      </a>
    </article>
  );
};

Teaser.propTypes = {
  audioPlayButton: PropTypes.node,
  contributors: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  headingLevel: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
  image: PropTypes.object,
  publishDate: PropTypes.string,
  tag: PropTypes.shape({
    to: PropTypes.string.isRequired,
    tagName: PropTypes.string.isRequired
  }),
  title: PropTypes.string.isRequired,
  router: PropTypes.any
};

export default Teaser;
